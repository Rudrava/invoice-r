import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div className="grid place-items-center h-screen">
      <SignIn />
    </div>
  );
};

export default SignInPage;
