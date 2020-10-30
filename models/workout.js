const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please enter exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Please enter exercise type"
                },
                duration: {
                    type: Number,
                    required: "Please enter exercise type"
                },
                weight: {
                    type: Number,
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        
        ]

    },
    { toJSON: {
        virtuals: true
    }}

)


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;