import { SignUp } from "@clerk/remix";

export default function Register() {
  return (
    <div>
      <h1>Sign Up route</h1>
      <SignUp afterSignUpUrl="../home" afterSignInUrl="../home" />
    </div>
  );
}
