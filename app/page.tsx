import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

const Root = () => {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="grid justify-center gap-6">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20 ">
          Invoice-r
        </h1>
        <div className="flex gap-4 w-full items-center justify-center">
          <SignUpButton>
            <Button
              variant="default"
              size="lg"
              className="bg-primary text-black "
            >
              Get Started
            </Button>
          </SignUpButton>
          <SignInButton>
            <Button
              size="lg"
              variant="outline"
              className="bg-accent text-white "
            >
              Sign In
            </Button>
          </SignInButton>
        </div>
      </div>
    </div>
  );
};

export default Root;
