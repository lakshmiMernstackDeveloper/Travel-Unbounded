export const dynamic = 'force-dynamic';

import connectDB from "@/lib/mongodb";
import Chat from "@/models/Chat";

export default async function AdminChats() {
  await connectDB();
  const chats = await Chat.find().sort({ createdAt: -1 });

  return (
    <div className="p-8 bg-[#FCFBF7] min-h-screen">
      <h1 className="text-3xl font-serif font-bold mb-8">AI Conversation Logs</h1>
      <div className="grid gap-4">
        {chats.map((c) => (
          <div key={c._id} className="bg-white p-6 rounded-3xl border shadow-sm">
            <div className="flex justify-between text-[10px] uppercase font-bold text-gray-400 mb-2">
              <span>{new Date(c.createdAt).toLocaleString()}</span>
              <span className={c.isFromCache ? "text-green-500" : "text-blue-500"}>
                {c.isFromCache ? "⚡ Cached" : "🤖 AI Generated"}
              </span>
            </div>
            <p className="font-bold text-gray-800 mb-2">Q: {c.userQuestion}</p>
            <p className="text-gray-600 text-sm whitespace-pre-wrap bg-gray-50 p-4 rounded-xl">
              {c.aiResponse}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}