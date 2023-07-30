"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { FaGoogle } from "react-icons/fa6";

function SignInWithGoogleButton() {
  return (
    <button className='btn btn-primary w-56' onClick={() => signIn("google")}>
      Sign in with Google <FaGoogle />
    </button>
  );
}

export default SignInWithGoogleButton;
