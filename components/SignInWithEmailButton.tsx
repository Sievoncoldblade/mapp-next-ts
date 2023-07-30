"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { MdAlternateEmail } from "react-icons/md";

function SignInWithEmailButton() {
  return (
    <button className='btn btn-neutral w-56' onClick={() => signIn()}>
      Sign in with Email <MdAlternateEmail />
    </button>
  );
}

export default SignInWithEmailButton;
