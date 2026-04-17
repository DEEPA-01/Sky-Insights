"use client";

import React, { useEffect, useState } from "react";
import { Trash2, Eye, EyeOff } from "lucide-react";

interface Message {
  id: string;
  name: string;
  email: string;
  subject?: string | null;
  body: string;
  createdAt: string;
  seen: boolean;
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/admin/inquiries");
      const data = await res.json();
      if (data.ok) setMessages(data.messages);
    } catch (err) {
      console.error("Fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // ✅ Toggle Seen/Unseen
  const toggleSeen = async (id: string, current: boolean) => {
    try {
      const res = await fetch(`/api/admin/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ seen: !current }),
      });

      const data = await res.json();
      if (data.ok) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === id ? { ...msg, seen: !current } : msg
          )
        );
      }
    } catch (err) {
      console.error("Failed to update seen status:", err);
    }
  };

  // 🗑️ Delete Message
  const deleteMessage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    try {
      setDeletingId(id);
      const res = await fetch(`/api/admin/inquiries/${id}`, { method: "DELETE" });
      const data = await res.json();

      if (data.ok) {
        setMessages((prev) => prev.filter((msg) => msg.id !== id));
      }
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-4 sm:px-8 md:px-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-blue-600 flex justify-center items-center gap-2">
        Sky Insights – Admin Messages 💬
      </h1>

      {loading ? (
        <p className="text-center text-gray-500 animate-pulse text-lg">
          Loading messages...
        </p>
      ) : messages.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">No messages yet.</p>
      ) : (
        <div className="overflow-x-auto bg-white border border-gray-200 shadow-lg rounded-2xl">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-linear-to-r from-blue-600 to-cyan-500 text-white uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Subject</th>
                <th className="px-6 py-3">Message</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr
                  key={msg.id}
                  className="border-b border-gray-100 hover:bg-blue-50 transition-all duration-200"
                >
                  <td className="px-6 py-4 font-medium">{msg.name}</td>
                  <td className="px-6 py-4 text-blue-600">{msg.email}</td>
                  <td className="px-6 py-4">{msg.subject || "—"}</td>
                  <td className="px-6 py-4">{msg.body}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        msg.seen
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {msg.seen ? "Seen" : "New"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(msg.createdAt).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 flex items-center justify-center gap-2">
                    <button
                      onClick={() => toggleSeen(msg.id, msg.seen)}
                      className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-md transition-all duration-200 ${
                        msg.seen
                          ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      {msg.seen ? <EyeOff size={14} /> : <Eye size={14} />}
                      {msg.seen ? "Unseen" : "Mark Seen"}
                    </button>

                    <button
                      onClick={() => deleteMessage(msg.id)}
                      disabled={deletingId === msg.id}
                      className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-md transition-all duration-200 ${
                        deletingId === msg.id
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-red-600 text-white hover:bg-red-700"
                      }`}
                    >
                      <Trash2 size={14} />
                      {deletingId === msg.id ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="text-center mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Sky Insights | Admin Panel
      </div>
    </div>
  );
}
