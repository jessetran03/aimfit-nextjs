import type { NextPage, GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import { getWorkouts, createWorkout, deleteWorkout } from "../../requests";
import Head from "next/head";
import TokenService from "../../services/token-service";
import NewWorkoutForm from "../../components/workouts/NewWorkoutForm";

const Workouts: NextPage = () => {
  interface Workout {
    id: number;
    userId: number;
    day: string;
    title: string;
  }

  const deleteButton = (id: number) => {
    deleteWorkout(id).then(() => renderWorkouts());
  };

  const [workouts, setWorkouts] = useState<Array<Workout>>([]);

  const renderWorkouts = () => {
    getWorkouts().then((workouts) => setWorkouts(workouts));
  };

  useEffect(() => {
    renderWorkouts();
  }, []);

  return (
    <>
      <Head>
        <title>Aim to be fit.</title>
        <meta name="description" content="Aim to be fit" />
      </Head>

      <main className="m-10">
        <div>Workouts</div>
        <ul className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {workouts?.length > 0
            ? workouts.map((workout, index) => (
                <li key={index} className="h-40 p-2 border-2 rounded-xl">
                  <h2 className="text-lg font-semibold">{workout?.title}</h2>
                  <p className="text-sm text-gray-600">{workout.day}</p>
                  <button
                    className="p-1 border-2"
                    onClick={() => deleteButton(workout.id)}
                  >
                    Delete
                  </button>
                </li>
              ))
            : "No Workouts"}
        </ul>
        <NewWorkoutForm renderWorkouts={renderWorkouts} />
        {/* <form className="flex flex-col w-1/3">
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
        </form> */}
      </main>
    </>
  );
};

export default Workouts;
