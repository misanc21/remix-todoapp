import { type DataFunctionArgs, json } from "@remix-run/node";
import Notes from "~/components/Notes";
import { getAllNotes } from "~/models/note.server";

export async function loader(_: DataFunctionArgs) {
  const notes = await getAllNotes();
  return json({ notes });
}

export default function Home() {
  return (
    <>
      <div>Here is gonna be the form</div>
      <Notes />
    </>
  );
}
