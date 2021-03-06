import React, { useEffect } from "react";
import Link from "next/link";
import TokenService from "../services/token-service";

const NavigationBar = () => {
  return (
    <nav className="flex flex-row justify-between w-screen p-5 bg-gray-100 z-15">
      <Link href="/">
        <a>AimFit</a>
      </Link>
      <div className="space-x-5">
        {typeof window !== "undefined" && TokenService.hasAuthToken() ? (
          <Link href="/">
            <a onClick={() => TokenService.clearAuthToken()}>Log Out</a>
          </Link>
        ) : (
          <>
            <Link href="/register">
              <a>Sign Up</a>
            </Link>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </>
        )}
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
