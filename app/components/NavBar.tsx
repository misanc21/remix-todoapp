import { NavLink } from "@remix-run/react";

export function NavBar() {
  return (
    <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 space-x-4 p-4">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/">About</NavLink>
      </div>
    </nav>
  );
}
