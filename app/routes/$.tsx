import { Link } from "@remix-run/react";

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col justify-center min-h-screen text-gray-100">
      <h1 className="text-7xl mx-auto font-extrabold">{`Sorry, page not found :(`}</h1>
      <h2 className=" mx-auto text-2xl">
        {" "}
        <Link to="/">click me!</Link>
      </h2>
    </div>
  );
}
