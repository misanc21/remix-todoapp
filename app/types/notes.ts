import type {Note } from "@prisma/client"

export interface NoteType  {
  title: Note['title'],
  user: Note['user'],
}