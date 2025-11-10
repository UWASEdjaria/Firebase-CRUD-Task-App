import { NextResponse } from "next/server";
import { db } from "@/app/lib/firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

// Update a task
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = params?.id;
  if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 });

  try {
    const data = await req.json();
    const taskRef = doc(db, "tasks", id);
    await updateDoc(taskRef, data);
    return NextResponse.json({ id, ...data, message: "Task updated!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to update task" }, { status: 500 });
  }
}

// Delete a task
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = params?.id;
  if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 });

  try {
    const taskRef = doc(db, "tasks", id);
    await deleteDoc(taskRef);
    return NextResponse.json({ id, message: "Task deleted!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to delete task" }, { status: 500 });
  }
}
