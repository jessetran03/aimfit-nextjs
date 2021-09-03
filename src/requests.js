const endpointURL = "http://localhost:9000/graphql";

async function graphqlRequest(query, variables = {}) {
  const response = await fetch(endpointURL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  const responseBody = await response.json();
  if (responseBody.errors) {
    const message = responseBody.errors
      .map((error) => error.message)
      .join("\n");
    throw new Error(message);
  }
  return responseBody.data;
}

export async function getExercises() {
  const query = `query {
    exercises {
      id
      exercise_name
      muscle
    }
  }`;
  const { exercises } = await graphqlRequest(query);
  return exercises;
}

export async function getExerciseById(id) {
  const query = `query {
    exercise (id: ${id}) {
      id
      exercise_name
      muscle
    }
  }`;
  const { exercise } = await graphqlRequest(query);
  return exercise;
}

export async function getWorkouts() {
  const query = `query {
    workouts {
      id
      day
      title
    }
  }`;
  const { workouts } = await graphqlRequest(query);
  return workouts;
}

export async function createWorkout(input) {
  const mutation = `
    mutation CreateWorkout($input: CreateWorkoutInput) {
    workout: newWorkout(input: $input) {
      id
    }
  }`;
  const { workout } = await graphqlRequest(mutation, { input });
  return workout;
}

export async function deleteWorkout(id) {
  const mutation = `
  mutation DeleteWorkout($id: ID!) {
    deleteWorkout(id: $id)
  }`
  await graphqlRequest(mutation, { id });
  return("Successfully deleted")
}
