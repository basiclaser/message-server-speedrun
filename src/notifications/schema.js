import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    authorID: String,
    matchID: String,
    teamID: String,
    content: String,
    likes: Number,
    dislikes: Number,
    isAReply: Boolean,
    replyTo: String,
    isDeleted: Boolean,
    isEdited: Boolean,
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("message", MessageSchema);
export default Message;
