import { getAuth } from "@clerk/remix/ssr.server";
import { type DataFunctionArgs, json, redirect } from "@remix-run/node";
import { z } from "zod";
import CreateNote from "~/components/CreateNote";
import Notes from "~/components/Notes";
import { getAllNotes, createNote, deleteNote } from "~/models/note.server";

export async function loader(args: DataFunctionArgs) {
  const notes = await getAllNotes();
  return json({ notes });
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
  return (
    <>
      <CreateNote />
      <Notes />
    </>
  );
}
