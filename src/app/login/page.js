"use client";

import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">"Oh, hi Mark."</h1>
      <p className="text-lg mb-6">Join the club</p>

      {/* Google Login Button */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="px-6 py-3 mb-4 bg-red-500 hover:bg-red-700 text-xl rounded shadow-lg"
      >
        Sign in with Google
      </button>

      {/* Facebook Login Button */}
      <button
        onClick={() => signIn("facebook", { callbackUrl: "/" })}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-xl rounded shadow-lg"
      >
        Sign in with Facebook
      </button>
    </div>
  );
};

export default LoginPage;
