import { db } from '~/utils/db.server'

export async function getAllNotes(){
  const notes = await db.note.findMany();
  return notes;
}