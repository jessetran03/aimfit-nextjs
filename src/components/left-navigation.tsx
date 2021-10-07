import React, { useEffect } from "react";
import Link from "next/link";
import TokenService from "../services/token-service";

const LeftNavigation = () => {
  return (
    <nav className="fixed z-20 w-48 h-full p-5 bg-gray-200">
      <Link href="/">
        <a>AimFit</a>
      </Link>
      <div className="flex flex-col">
        {typeof window !== "undefined" && TokenService.hasAuthToken() ? (
          <Link href="/">
            <a onClick={() => TokenService.clearAuthToken()}>Log Out</a>
          </Link>
        ) : (
          <>
            <Link href="/register">
              <a className="my-px">Sign Up</a>
            </Link>
            <Link href="/login">
              <a className="my-px">Login</a>
            </Link>
          </>
        )}
        <Link href="/workouts">
          <a className="my-px">Workouts</a>
        </Link>
        <Link href="/exercises">
          <a className="my-px">Exercises</a>
        </Link>
      </div>
    </nav>
  );
};

export default LeftNavigation;
