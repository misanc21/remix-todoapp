import { getAuth } from "@clerk/remix/ssr.server";
import { type DataFunctionArgs, json, redirect } from "@remix-run/node";
import * as React from "react";
import { z } from "zod";
import CreateNote from "~/components/CreateNote";
import EditModal from "~/components/EditModal";
import Notes from "~/components/Notes";
import {
  getAllNotes,
  createNote,
  deleteNote,
  markCheckbox,
  getNoteById,
} from "~/models/note.server";

export async function loader(args: DataFunctionArgs) {
  const notes = await getAllNotes();
  const url = new URL(args.request.url);
  const checkboxId = url.searchParams.get("checkboxId");
  if (checkboxId) {
    const urlContent = checkboxId.split("-");
    const id = Number(urlContent[0]);
    const status = urlContent[1] === "true";

    await markCheckbox(id, status);
    return (
      json({ notes, msg: "nota actualizada", status: 201 }), redirect("/home")
    );
  }
  const getNoteToUpdate = url.searchParams.get("getNoteId");
  if (getNoteToUpdate) {
    const idToUpdate = Number(getNoteToUpdate);
    const noteGotten = await getNoteById(idToUpdate);
    return json(
      { notes, msg: "nota obtenida", status: 201, noteGotten },
      redirect("/home")
    );
  }

  return json({ notes, noteGotten: { id: "", title: "" } });
}

export async function action(args: DataFunctionArgs) {
  const formData = await args.request.formData();
  const { userId } = await getAuth(args);
  if (args.request.method == "POST") {
    const note = formData.get("create-note");
    const noteSchema = z.object({
      title: z.string().nonempty(),
      user: z.string().nonempty(),
    });
    const payload = noteSchema.parse({
      title: note,
      user: userId,
    });
    await createNote(payload);
    return json({ msg: "nota creada" }, { status: 201 });
  }

  if (args.request.method == "DELETE") {
    const idNote = Number(formData.get("noteId"));
    console.log("entra a delete");
    await deleteNote(idNote);
    return redirect("/home");
  }
}

export default function Home() {
  const [open, setOpen] = React.useState({
    open: false,
    note: {
      id: 0,
      title: "",
    },
  });
  return (
    <>
      <CreateNote />
      <Notes open={open} setOpen={setOpen} />
      <EditModal open={open} setOpen={setOpen} />
    </>
  );
}
