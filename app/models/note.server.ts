import { db } from '~/utils/db.server'
import type {NoteType} from '~/types/notes'
export async function getAllNotes(){
  const notes = await db.note.findMany();
  return notes;
}

export async function createNote(data:NoteType){
  return db.note.create({data});
}

export async function deleteNote(id:number){
  return db.note.delete({where : {
    id:id
  }})
}

export async function markCheckbox(id:number, done:boolean){
  return db.note.update({
   where:{
    id:id
   },
   data:{
    done:done
   }
  })
}

export async function getNoteById(id:number){
  return db.note.findFirst({
    where:{id:id},
    select:{
      id: true,
      title:true
    }
  })
}

export async function updateById(newData:NoteType){
  return db.note.update({
    where: {id:Number(newData.user)},
    data: {title: newData.title}
  })
}