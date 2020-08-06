
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
exercises:[{
    type: {
        type: String,
        required: "Type of workout is Required"
    },
    name: {
        type: String,
        required: "Name of exercise is Required"
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    distance: {
        type: Number,
    },

}]  

});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
