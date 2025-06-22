// File: pages/messages.tsx
import MessageComposer from "@/components/MessageComposer";
import { Sparkles } from "lucide-react";

export default function MessagesPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div className="bg-gradient-to-r from-indigo-800 to-blue-700 p-6 rounded-2xl flex items-center justify-between shadow-md">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">
            AI Message Composer
          </h1>
          <p className="text-blue-200 text-sm">
            Write & generate personalized messages in seconds.
          </p>
        </div>
        <Sparkles className="w-8 h-8 text-blue-200" />
      </div>

      <MessageComposer />
    </div>
  );
}
