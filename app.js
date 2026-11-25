//DOM Elements
const workoutName = document.getElementById("workout-name");
const workoutDescription = document.getElementById("workout-description");
const exerciseList = document.getElementById("exercise-list");
const generateWorkoutBtn = document.getElementById("generate-workout-btn");

//Workout Data
const workouts = [
    {
        name: "Upper Body Strength",
        description: "Build strength across your chest, back, and arms.",
        exercises: [
        "Bench Press - 3 sets of 10",
        "Barbell Row - 3 sets of 10",
        "Push Ups - 3 sets of 12",
        "Dumbbell Curls - 3 sets of 10"
        ]
    },

    {
        name: "Lower Body Strength",
        description: "Build stronger legs with compound lower-body exercises.",
        exercises: [
        "Squats - 3 sets of 8",
        "Deadlifts - 3 sets of 5",
        "Walking Lunges - 3 sets of 12",
        "Calf Raises - 3 sets of 10"
        ]
    },

    {
        name: "Full Body Workout",
        description: "Train every muscle group in one awesome session.",
        exercises: [
        "Squats - 3 sets of 8",
        "Bench Press - 3 sets of 10",
        "Deadlifts - 3 sets of 5",
        "Stanley Press - 3 sets of 10",
        "Barbell Rows - 3 sets of 10"
        ]
    },

    {
        name: "Bodyweight Conditioning",
        description: "Improve your conditioning without equipment.",
        exercises: [
        "Bodyweight squats - 3 sets of 8",
        "Push Ups - 3 sets of 10",
        "Sprints - 3 sets of 20 seconds",
        "Jumping Jacks - 3 sets of 10"
        ]
    }
];


//Generate Workout Function
function generateWorkout() {
    //Select a random workout
    const randomIndex = Math.floor(Math.random() * workouts.length);
    const randomWorkout = workouts[randomIndex]

    //Display workout
    workoutName.textContent = randomWorkout.name;
    workoutDescription.textContent = randomWorkout.description;
    exerciseList.textContent = "";

    //Loop through array to view exercises
    for (let i = 0; i < randomWorkout.exercises.length; i++) {
        const exerciseItem = document.createElement("li");
        exerciseItem.className = "exercise-list-item";
        exerciseItem.textContent = randomWorkout.exercises[i]
        exerciseList.appendChild(exerciseItem);
    }
}

generateWorkoutBtn.addEventListener("click", generateWorkout);






