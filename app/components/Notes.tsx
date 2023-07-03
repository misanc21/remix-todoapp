import { useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/home/_home";

export default function Notes() {
  const { notes } = useLoaderData<typeof loader>();
  return (
    <div className=" mx-auto flex justify-center px-40 flex-col pt-24">
      <h2 className=" self-center text-slate-200 text-4xl">Notes</h2>
      <ul>
        {notes.map((note) => (
          <li className=" text-center" key={note.id}>
            {note.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
