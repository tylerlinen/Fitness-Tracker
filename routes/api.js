const router = require("express").Router();
const Workout = require("../models/workout")


router.get("/api/exercise", (req, res) => {
 Workout.find({}).then(dbWorkout => res.json(dbWorkout))
})




module.exports = router;