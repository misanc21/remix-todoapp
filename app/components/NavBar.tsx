import { SignedIn, UserButton } from "@clerk/remix";
import { NavLink } from "@remix-run/react";

export function Navbar() {
  return (
    <nav className="bg-blue-700 flex justify-between">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8 space-x-4 p-4 text-gray-100">
        <SignedIn>
          <NavLink to="/home">Home</NavLink>
        </SignedIn>
        <NavLink to="/">About</NavLink>
      </div>
      <SignedIn>
        <div className="self-center px-1">
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
    </nav>
  );
}
