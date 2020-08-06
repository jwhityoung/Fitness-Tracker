const Workout = require("../models/exercise");
const router = require("express").Router();

router.post("/api/workouts", ({body}, res) => {
  Workout.create(body)  
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err)
    });
});


router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id,
        { $push: { exercises: body } }, { new: true, runValidators: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
   Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        //get rid of sort and add 
        .sort({ date: -1 })
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndRemove(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});



module.exports = router;