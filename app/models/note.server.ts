import { db } from '~/utils/db.server'
import type {NoteType} from '~/types/notes'
export async function getAllNotes(){
  const notes = await db.note.findMany();
  return notes;
}

export async function createNote(data:NoteType){
  return db.note.create({data});
}