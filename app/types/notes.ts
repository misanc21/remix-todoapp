import type {Note } from "@prisma/client"

export interface NoteType  {
  id?:Note['id'],
  title: Note['title'],
  user: Note['user'],
}

export interface NoteId {
  idNote:Note['id'],
  doneNote?:Note['done']
  noteTitle?:Note['title']
  open?:any;
  setOpen?:any;
  titleNote?:any
}