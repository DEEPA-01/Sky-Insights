// "use client";
// import { useState } from "react";

// export default function Chatbot() {
//   const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     // add user message
//     setMessages((prev) => [...prev, { role: "user", content: input }]);

//     const res = await fetch("/api/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ message: input }),
//     });

//     const data = await res.json();
//     const reply = data.choices?.[0]?.message?.content ?? "No reply";

//     // add AI reply
//     setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
//     setInput("");
//   };

//   return (
//     <div className="flex flex-col h-[500px] w-full max-w-md mx-auto border rounded-lg shadow-lg bg-white">
//       <div className="flex-1 overflow-y-auto p-4 space-y-2">
//         {messages.map((m, i) => (
//           <div
//             key={i}
//             className={`p-2 rounded-md ${
//               m.role === "user" ? "bg-blue-100 text-blue-800 self-end" : "bg-gray-100 text-gray-800 self-start"
//             }`}
//           >
//             {m.content}
//           </div>
//         ))}
//       </div>

//       <div className="p-2 border-t flex gap-2">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="flex-1 border rounded px-3 py-2"
//           placeholder="Type a message..."
//         />
//         <button
//           onClick={sendMessage}
//           className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }
