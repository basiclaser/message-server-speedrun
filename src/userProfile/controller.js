import Message from "./schema.js";
export function getAllMessages(req, res) {
  Message.find({}, function (err, messages) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(messages);
    }
  })
    .sort({ timePosted: -1 })
    .limit(10);
}
export function createMessage(req, res) {
  Message.create(req.body, function (err, message) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(message);
    }
  });
}
export function getMessageById(req, res) {
  Message.findById(req.params.id, function (err, message) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(message);
    }
  });
}
export function updateMessageById(req, res) {
  Message.findByIdAndUpdate(req.params.id, req.body, function (err, message) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(message);
    }
  });
}
export function deleteMessageById(req, res) {
  Message.findByIdAndDelete(req.params.id, function (err, message) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(message);
    }
  });
}

// writing logic or instructions that operations on DATA

// req.body
// cors
