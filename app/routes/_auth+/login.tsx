import { SignIn } from "@clerk/remix";

export default function Login() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl py-10 text-gray-100">
        Let's note it!
      </h1>
      <div className="text-center flex justify-center">
        <SignIn afterSignInUrl="/home" />
      </div>
    </div>
  );
}
