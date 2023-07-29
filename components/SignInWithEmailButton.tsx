import React from "react";
import { MdAlternateEmail } from "react-icons/md";

function SignInWithEmailButton() {
  return (
    <button className='btn btn-neutral'>
      Sign in with Email <MdAlternateEmail />
    </button>
  );
}

export default SignInWithEmailButton;
