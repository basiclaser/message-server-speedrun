import express from "express";

var messageRouter = express.Router();
import {
  getAllMessages,
  createMessage,
  getMessageById,
  updateMessageById,
  deleteMessageById,
} from "./controller.js";

messageRouter
  .route("/")
  // return all messages
  .get(getAllMessages)
  // create new message
  .post(createMessage);

messageRouter
  .route("/:id")
  // get message by id
  .get(getMessageById)
  // update message by id
  .put(updateMessageById)
  // delete message by id
  .delete(deleteMessageById);

export default messageRouter;
