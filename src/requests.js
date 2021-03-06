import TokenService from './services/token-service';
const endpointURL = "http://localhost:9000/graphql";

async function graphqlRequest(query, variables = {}) {
  const request = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query, variables }),
  };
  if (TokenService.hasAuthToken()) {
    request.headers['authorization'] = 'Bearer ' + TokenService.getAuthToken();
  }
  const response = await fetch(endpointURL, request);
  const responseBody = await response.json();
  console.log(responseBody)
  if (responseBody.errors) {
    const message = responseBody.errors
      .map((error) => error.message)
      .join("\n");
    // throw new Error(message);
    console.log(message)
  }
  return responseBody.data;
}

export async function createUser(input) {
  const mutation = `
  mutation CreateUser($input: CreateUserInput) {
    user: newUser(input: $input) {
      id
      username
    }
  }`;
  const { user } = await graphqlRequest(mutation, { input });
  return user;
}

export async function getExercises() {
  const query = `query {
    exercises {
      id
      name
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
      name
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