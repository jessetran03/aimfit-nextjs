import { useState, FC } from "react";
import { createWorkout } from "../../requests";

interface IProps {
  renderWorkouts: () => void;
}

const NewWorkoutForm: FC<IProps> = ({ renderWorkouts }) => {
  interface Workout {
    id: number;
    userId: number;
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

  const newWorkout = () => {
    // Function does not accept single quotes
    const input = {
      day,
      title,
    };
    createWorkout(input).then((workout) => renderWorkouts());
  };

  return (
    <form
      className="flex flex-col w-1/3 mt-2"
      onSubmit={(e) => e.preventDefault}
    >
      <input
        className="border-2"
        type="text"
        placeholder="Workout Name"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className="border-2"
        value={day}
        onChange={(e) => setDay(e.target.value)}
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
          newWorkout();
        }}
        type="submit"
      >
        Create new workout
      </button>
    </form>
  );
};

export default NewWorkoutForm;
