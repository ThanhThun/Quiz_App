const mongoose = require("mongoose");
const { use } = require("../routes/auth");

//Khung chua thuoc tinh Room
const roomScema = new mongoose.Schema({
  title: {
    type: String,
    require:true,
  },
  publishedDate: { //ngày phát hành
    type: String
  },
  genres: { //thể loại câu hỏi
    type: [String], //chuoi ky tu - nhieu the loai
  },
  questionId: [
    {
    type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    }
  ],
  useId:{
    type: mongoose.Schema.Types.ObjectId,
      ref: "User",
  }
  }
);

let Room = mongoose.model("Room", roomScema);
module.exports = {Room};


