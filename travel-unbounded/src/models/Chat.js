import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
  userQuestion: { type: String, required: true },
  aiResponse: { type: String, required: true },
  isFromCache: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'ChatHistory' });

export default mongoose.models.Chat || mongoose.model('Chat', ChatSchema);