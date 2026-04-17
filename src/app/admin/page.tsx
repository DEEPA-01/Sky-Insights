"use client";

import React, { useEffect, useState } from "react";
import { format } from "date-fns";

type Message = {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  body: string;
  createdAt: string;
  seen: boolean;
};

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null); // for button loading

  // fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/admin/inquiries");
        const data = await res.json();
        if (res.ok && data.ok) {
          setMessages(data.messages || []);
        } else {
          console.error("Fetch messages failed", data);
        }
      } catch (err) {
        console.error("Error fetching messages", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // toggle seen/unseen
  const toggleSeen = async (id: string, currentSeen: boolean) => {
    setBusyId(id);
    try {
      // optimistic UI change
      setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, seen: !currentSeen } : m)));

      const res = await fetch(`/api/admin/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ seen: !currentSeen }),
      });
      const payload = await res.json();
      if (!res.ok || !payload.ok) {
        // rollback
        setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, seen: currentSeen } : m)));
        alert(payload?.error || "Failed to update status");
      }
    } catch (err) {
      console.error(err);
      // rollback
      setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, seen: currentSeen } : m)));
      alert("Server error while updating status");
    } finally {
      setBusyId((s) => (s === id ? null : s));
    }
  };

  // delete message
  const deleteMessage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    setBusyId(id);
    try {
      // optimistic remove
      const backup = messages;
      setMessages((prev) => prev.filter((m) => m.id !== id));

      const res = await fetch(`/api/admin/inquiries/${id}`, {
        method: "DELETE",
      });
      const payload = await res.json();
      if (!res.ok || !payload.ok) {
        setMessages(backup); // rollback
        alert(payload?.error || "Failed to delete message");
      }
    } catch (err) {
      console.error(err);
      alert("Server error while deleting message");
    } finally {
      setBusyId((s) => (s === id ? null : s));
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">📬 Admin — Messages</h1>

        {loading ? (
          <div className="py-12 text-center text-gray-600">Loading messages…</div>
        ) : messages.length === 0 ? (
          <div className="py-12 text-center text-gray-600">No messages found.</div>
        ) : (
          <>
            {/* Desktop / larger screens: table */}
            <div className="hidden md:block bg-white rounded-lg shadow overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-linear-to-r from-blue-600 to-cyan-500 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Subject</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Message</th>
                    <th className="px-4 py-3 text-center text-sm font-medium">Received</th>
                    <th className="px-4 py-3 text-center text-sm font-medium">Status</th>
                    <th className="px-4 py-3 text-center text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {messages.map((m) => (
                    <tr key={m.id} className={m.seen ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 text-sm text-gray-800">{m.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{m.email}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{m.subject ?? "—"}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 max-w-[380px] truncate">
                        {m.body}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500 text-center">
                        {format(new Date(m.createdAt), "dd MMM yyyy, HH:mm")}
                      </td>
                      <td className="px-4 py-3 text-sm text-center">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            m.seen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {m.seen ? "Seen" : "Unseen"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-center space-x-2">
                        <button
                          onClick={() => toggleSeen(m.id, m.seen)}
                          disabled={busyId === m.id}
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded text-sm font-semibold transition ${
                            m.seen
                              ? "bg-gray-600 text-white hover:bg-gray-700"
                              : "bg-green-600 text-white hover:bg-green-700"
                          } ${busyId === m.id ? "opacity-60 cursor-not-allowed" : ""}`}
                          aria-pressed={m.seen}
                          aria-label={m.seen ? "Mark as unseen" : "Mark as seen"}
                        >
                          {m.seen ? "Mark Unseen" : "Mark Seen"}
                        </button>

                        <button
                          onClick={() => deleteMessage(m.id)}
                          disabled={busyId === m.id}
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded text-sm font-semibold bg-red-600 text-white hover:bg-red-700 ${
                            busyId === m.id ? "opacity-60 cursor-not-allowed" : ""
                          }`}
                          aria-label="Delete message"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile / small screens: cards */}
            <div className="md:hidden space-y-3">
              {messages.map((m) => (
                <article
                  key={m.id}
                  className={`bg-white rounded-lg shadow p-4 space-y-2 border ${
                    m.seen ? "border-gray-200" : "border-blue-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">{m.name}</h3>
                      <p className="text-xs text-gray-500">{m.email}</p>
                    </div>
                    <div className="text-right text-xs text-gray-500">
                      {format(new Date(m.createdAt), "dd MMM yyyy, HH:mm")}
                      <div>
                        <span
                          className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                            m.seen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {m.seen ? "Seen" : "Unseen"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700">{m.subject ?? ""}</p>
                  <p className="text-sm text-gray-600">{m.body}</p>

                  <div className="flex items-center gap-2 justify-end">
                    <button
                      onClick={() => toggleSeen(m.id, m.seen)}
                      disabled={busyId === m.id}
                      className={`px-3 py-1 rounded text-sm font-semibold transition ${
                        m.seen
                          ? "bg-gray-600 text-white hover:bg-gray-700"
                          : "bg-green-600 text-white hover:bg-green-700"
                      } ${busyId === m.id ? "opacity-60 cursor-not-allowed" : ""}`}
                    >
                      {m.seen ? "Mark Unseen" : "Mark Seen"}
                    </button>

                    <button
                      onClick={() => deleteMessage(m.id)}
                      disabled={busyId === m.id}
                      className={`px-3 py-1 rounded text-sm font-semibold bg-red-600 text-white hover:bg-red-700 ${
                        busyId === m.id ? "opacity-60 cursor-not-allowed" : ""
                      }`}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
