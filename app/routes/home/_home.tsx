import { getAuth } from "@clerk/remix/ssr.server";
import { type DataFunctionArgs, json, redirect } from "@remix-run/node";
import * as React from "react";
import { z } from "zod";
import CreateNote from "~/components/CreateNote";
import EditModal from "~/components/EditModal";
import Notes from "~/components/Notes";
import {
  getAllNotesByIdUser,
  createNote,
  deleteNote,
  markCheckbox,
  updateById,
} from "~/models/note.server";

export async function loader(args: DataFunctionArgs) {
  const { userId } = await getAuth(args);
  if (!userId) return redirect("/");
  const notes = await getAllNotesByIdUser(userId);
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

  return json({ notes });
}

export async function action(args: DataFunctionArgs) {
  const formData = await args.request.formData();
  const { userId } = await getAuth(args);
  const noteSchema = z.object({
    title: z.string().nonempty(),
    user: z.string().nonempty(),
  });

  if (args.request.method == "POST") {
    const note = formData.get("create-note");
    const payload = noteSchema.parse({
      title: note,
      user: userId,
    });
    await createNote(payload);
    return json({ msg: "nota creada" }, { status: 201 });
  }

  if (args.request.method == "PUT") {
    const newTitle = formData.get("updated-note");
    const idToUpdate = formData.get("updated-id");
    console.log(idToUpdate);
    const payload = noteSchema.parse({
      title: newTitle,
      user: idToUpdate,
    });
    await updateById(payload);
    return json({ msg: "nota actualizada" }, { status: 201 });
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
