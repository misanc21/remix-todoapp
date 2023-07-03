import { Link } from "@remix-run/react";
import * as React from "react";
import type { NoteId } from "~/types/notes";

const Checkbox: React.FC<NoteId> = ({ idNote, doneNote }) => {
  const [completed, setCompleted] = React.useState(doneNote);
  return (
    <div className="ml-3 flex h-6 items-center">
      <Link to={`?checkboxId=${idNote}-${!doneNote}`}>
        <input
          id={`note-${idNote}`}
          name={`note-${idNote}`}
          type="checkbox"
          className="h-6 w-6 rounded border-gray-00 text-indigo-600 focus:ring-indigo-600"
          checked={completed}
          onChange={() => {
            setCompleted(!completed);
          }}
        />
      </Link>
    </div>
  );
};

export default Checkbox;
