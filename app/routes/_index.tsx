import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "react-router-dom";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto flex flex-col justify-center min-h-screen text-gray-100">
      <h1 className="text-7xl mx-auto font-extrabold">My To-do App</h1>
      <h2 className=" mx-auto"> the new best way to note!</h2>
      <div className="mx-auto text-gray-700">
        <Link to="/login" className="hover:text-gray-300">
          Login
        </Link>
        <span>/</span>
        <Link to="/register" className="hover:text-gray-300">
          Signup
        </Link>
      </div>
    </div>
  );
}
