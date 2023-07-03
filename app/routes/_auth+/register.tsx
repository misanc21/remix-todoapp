import { SignUp } from "@clerk/remix";

export default function Register() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl py-10 text-gray-100">Hello there!</h1>
      <div className="text-center flex justify-center">
        <SignUp afterSignUpUrl="../home" afterSignInUrl="../home" />
      </div>
    </div>
  );
}
