"use client";

import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">"Oh, hi Mark."</h1>
      <p className="text-lg mb-6">Join the club</p>

      {/* Meta (Facebook) Login Button */}
   
    </div>
  );
};

export default LoginPage;
