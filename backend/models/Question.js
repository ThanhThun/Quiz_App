const mongoose = require("mongoose");

//Khung chua thuoc tinh question
const questionSchema = new mongoose.Schema({
  content: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 255
    },
    option1: {
      type: String,
      required: true,
    },
    option2: {
      type: String,
      required: true,
    },
    option3: {
      type: String,
      required: true,
    },
    option4: {
      type: String,
      required: true,
    },
    correctOption: {
      type: Number,
      required: true,
      min: 1,
      max: 4
    },
    points: {
      type: Number,
      required: true,
      default: 1
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    }
  }
);

let Question = mongoose.model("Question", questionSchema);
module.exports = {Question};