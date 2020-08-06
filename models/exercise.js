
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newWorkout = new Schema({

    type: {
        type: String,
        required: "Type of workout is Required"
    },

    weight: {
        type: Number,
    },

    sets: {
        type: Number,
    },

    reps: {
        type: Number,
    },

    duration: {
        type: Number,
    },

    distance: {
        type: Number,
    },

    date: {
        type: Date,
        default: Date.now
    }

});

const Workout = mongoose.model("workout", newWorkout);

module.exports = Workout;
