import { useState, useEffect } from "react";
import { createWorkout } from "../../requests";

const NewWorkoutForm = (setWorkouts: any) => {
  interface Workout {
    id: number;
    user_id: number;
    day: string;
    title: string;
  }

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [day, setDay] = useState<string>("Sunday");
  const [title, setTitle] = useState<string>("New Workout");

  const newWorkout = (input: any) => {
    createWorkout(input);
  };

  return (
    <form className="flex flex-col w-1/3" onSubmit={(e) => e.preventDefault}>
      <input className="border-2" type="text" />
      <select
        className="border-2"
        onSelect={(e) => setDay((e.target as HTMLOptionElement).value)}
      >
        {days.map((day, index) => (
          <option key={index} value={day}>
            {day}
          </option>
        ))}
      </select>
      <button
        className="border-2"
        onClick={(e) => {
          e.preventDefault();
          newWorkout({ user_id: 1, day: "Tuesday", title: "test-next" });
        }}
        type="submit"
      >
        Create new workout
      </button>
      <button
        onClick={(e) => {
          e.preventDefault;
          console.log({ day, title });
        }}
      >
        Click for state
      </button>
    </form>
  );
};

export default NewWorkoutForm;
