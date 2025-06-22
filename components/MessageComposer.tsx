"use client";

import { useState } from "react";
import { Sparkles, Send } from "lucide-react";

export default function MessageComposer() {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  const generateMessage = () => {
    setMessage(
      `Hi ${
        recipient || "there"
      },\n\nI'm reaching out regarding an opportunity I think you'd find valuable...`
    );
  };

  const sendMessage = () => {
    alert("Message sent!");
    setRecipient("");
    setMessage("");
  };

  return (
    <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-4 max-w-3xl">
      <div>
        <label className="block text-sm text-neutral-400 mb-1">
          Recipient Name
        </label>
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-500"
          placeholder="e.g. Alex Johnson"
        />
      </div>

      <div>
        <label className="block text-sm text-neutral-400 mb-1">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-500"
          placeholder="Your AI-generated message..."
        />
      </div>

      <div className="flex justify-between gap-4">
        <button
          onClick={generateMessage}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition px-4 py-2 rounded-lg text-white text-sm"
        >
          <Sparkles className="w-4 h-4" />
          Generate Message
        </button>

        <button
          onClick={sendMessage}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-lg text-white text-sm"
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </div>
    </div>
  );
}
