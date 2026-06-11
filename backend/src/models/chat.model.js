// Chat Model for MongoDB
import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  roomId: String,
  participants: [String],
  messages: [{
    userId: String,
    message: String,
    timestamp: Date,
  }],
  createdAt: { type: Date, default: Date.now },
});

const Chat = mongoose.model('Chat', chatSchema);
export default Chat;
