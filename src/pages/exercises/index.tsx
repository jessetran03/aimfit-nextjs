import type { NextPage, GetServerSideProps } from 'next'
import { getExercises, getExerciseById } from '../../requests';
import Head from 'next/head'

interface Exercise {
  id: number;
  exercise_name: string;
  muscle: string;
}

interface IExerciseProps {
  exercises: Array<Exercise>
}

const Exercises: NextPage<IExerciseProps> = (props) => {
  const { exercises } = props;
  return (
    <div className="h-auto">
      <Head>
        <title>Aim to be fit.</title>
        <meta name="description" content="Aim to be fit" />
      </Head>
      <main className="m-10">
        <div className="text-2xl font-semibold">Exercises</div>
        <ul className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {exercises.map((exercise, index) => (
            <li key={index} className="border-2 p-2 h-40 rounded-xl">
              <h2 className="text-lg font-semibold">{exercise.exercise_name}</h2>
              <p className="text-sm text-gray-600">{exercise.muscle}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const exercises = await getExercises()
  return {
    props: {
      exercises
    },
  }
}

export default Exercises
