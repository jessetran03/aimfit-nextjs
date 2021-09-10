import React from "react";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className="flex flex-row justify-between w-screen p-5 bg-gray-100 z-15">
      <Link href="/">
        <a>AimFit</a>
      </Link>
      <div className="space-x-5">
        <Link href="/register">
          <a>Sign Up</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/workouts">
          <a>Workouts</a>
        </Link>
        <Link href="/exercises">
          <a>Exercises</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
