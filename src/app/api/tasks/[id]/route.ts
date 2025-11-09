import { NextResponse } from "next/server";
import { db } from "@/app/lib/firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

// Update a task
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const data = await req.json(); // JSON body from Postman

    const taskRef = doc(db, "tasks", id);
    await updateDoc(taskRef, data);

    return NextResponse.json({ id, ...data, message: "Task updated!" });
  } catch (err) {
    console.error("PUT Error:", err);
    return NextResponse.json({ error: "Failed to update task" }, { status: 500 });
  }
}

// Delete a task
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;

    const taskRef = doc(db, "tasks", id);
    await deleteDoc(taskRef);

    return NextResponse.json({ id, message: "Task deleted!" });
  } catch (err) {
    console.error("DELETE Error:", err);
    return NextResponse.json({ error: "Failed to delete task" }, { status: 500 });
  }
}
