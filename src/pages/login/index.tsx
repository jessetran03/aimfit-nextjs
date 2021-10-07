import type { NextPage } from "next";
// import { getExercises, getExerciseById } from '../../requests';
import { useRouter } from "next/router";
import TokenService from "../../services/token-service";
import { useState, FC } from "react";
import Head from "next/head";

const Login: NextPage = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const login = { username, password };
    return await fetch(`http://localhost:9000/api/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
      })
      .then((res) => {
        console.log(history)
        router.push("/");
      })
  };

  return (
    <div className="h-auto">
      <Head>
        <title>Aim to be fit.</title>
        <meta name="description" content="Aim to be fit" />
      </Head>
      <main className="m-10">
        <div className="text-2xl font-semibold">Login</div>
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
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            type="password"
          />
          <button
            className="border-2"
            onClick={(e) => handleLogin(e)}
            type="submit"
          >
            Login
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
