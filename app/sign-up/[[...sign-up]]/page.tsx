import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="grid place-items-center h-screen">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
