import type { NextPage } from "next";
import { createUser } from "../../requests";
import { useState, FC } from "react";
import Head from "next/head";

const Register: NextPage = () => {
  const [username, setUsername] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleRegister = () => {
    // Function does not accept single quotes
    const input = {
      username,
      firstName,
      lastName,
      password,
    };
    createUser(input).then((user) => alert('User created'));
  };

  return (
    <div className="h-auto">
      <Head>
        <title>Aim to be fit.</title>
        <meta name="description" content="Aim to be fit" />
      </Head>
      <main className="m-10">
        <div className="text-2xl font-semibold">Sign Up</div>
        <form
          className="flex flex-col w-1/3 mt-2"
          onSubmit={(e) => e.preventDefault}
        >
          <input
            className="border-2"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border-2"
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="border-2"
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="border-2"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="border-2"
            onClick={(e) => {
              e.preventDefault();
              handleRegister();
            }}
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
