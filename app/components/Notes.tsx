import { useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/home/_home";
import NoteOptions from "~/components/NoteOptions";

export default function Notes() {
  const { notes } = useLoaderData<typeof loader>();
  if (!notes) return <h1>no hay notas jsjsjs</h1>;
  return (
    <div className=" mx-auto flex justify-center px-40 flex-col pt-24">
      <fieldset>
        <legend className="font-semibold leading-6 text-slate-200 text-center text-4xl">
          My to-do's
        </legend>
        <div className="mt-4 divide-y-2 divide-indigo-600 border-b-2 border-t-2 border-indigo-600">
          {notes.map((note) => (
            <div key={note.id} className="relative flex items-start py-4 px-2">
              <NoteOptions idNote={note.id} />
              <div className="min-w-0 flex-1 text-sm leading-6">
                <label
                  htmlFor={`note-${note.id}`}
                  className="select-none font-semibold text-gray-200"
                >
                  {note.title}
                </label>
              </div>
              <div className="ml-3 flex h-6 items-center">
                <input
                  id={`note-${note.id}`}
                  name={`note-${note.id}`}
                  type="checkbox"
                  className="h-6 w-6 rounded border-gray-00 text-indigo-600 focus:ring-indigo-600"
                  checked={note.done}
                />
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
