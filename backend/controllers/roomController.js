const { json } = require("express")
const {Room} = require("../models/Room.js")

const roomController = {
    //add question
    addRoom: async(req, res) => {
        try {
            const newRoom = new Room(req.body);
            const savedRoom = await newRoom.save();
            res.status(200).json(savedRoom);
           
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = roomController;