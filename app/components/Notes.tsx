import { useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/home/_home";
import NoteOptions from "~/components/NoteOptions";
import Checkbox from "~/components/Checkbox";

const Notes = ({ open, setOpen }: any) => {
  const { notes } = useLoaderData<typeof loader>();

  if (!notes) return <h1>no hay notas jsjsjs</h1>;
  return (
    <div className=" mx-auto flex justify-center sm:px-40 px-7 flex-col pt-24 mb-16">
      <fieldset>
        <legend className="font-semibold leading-6 text-slate-200 text-center text-4xl">
          Your to-do's
        </legend>
        <div className="mt-4 divide-y-2 divide-indigo-600 border-b-2 border-t-2 border-indigo-600">
          {notes.map((note) => (
            <div key={note.id} className="relative flex items-start py-4 px-2">
              <NoteOptions
                idNote={note.id}
                open={open}
                setOpen={setOpen}
                noteTitle={note.title}
                doneNote={note.done}
              />
              <Checkbox idNote={note.id} doneNote={note.done} />
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default Notes;
