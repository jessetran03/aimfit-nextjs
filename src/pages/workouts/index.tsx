import type { NextPage, GetServerSideProps } from "next";
import { useState, useEffect } from 'react';
import { getWorkouts, createWorkout, deleteWorkout } from "../../requests";
import Head from "next/head";
import NavigationBar from "../../components/navigation-bar";

const Workouts: NextPage = () => {

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
  const deleteButton = (id: number) => {
    deleteWorkout(id);
  }
  const newWorkout = (input: any) => {
    createWorkout(input);
  }

  const [workouts, setWorkouts] = useState<Array<Workout>>([]);

  useEffect(() => {
    getWorkouts()
      .then((workouts) => setWorkouts(workouts))
  }, [workouts])

  return (
    <>
      <Head>
        <title>Aim to be fit.</title>
        <meta name="description" content="Aim to be fit" />
      </Head>
      <main>
        <div>Workouts</div>
        <ul className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {workouts.map((workout, index) => (
            <li key={index} className="border-2 p-2 h-40 rounded-xl">
              <h2 className="text-lg font-semibold">{workout?.title}</h2>
              <p className="text-sm text-gray-600">{workout.day}</p>
              <button
                className="border-2 p-1"
                onClick={() => deleteButton(workout.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <form className="flex flex-col w-1/3">
          <input className="border-2" type="text" />
          <select className="border-2">
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
        </form>
      </main>
    </>
  );
};

export default Workouts;
