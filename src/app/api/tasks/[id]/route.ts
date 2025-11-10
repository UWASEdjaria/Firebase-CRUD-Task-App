import { NextRequest, NextResponse } from "next/server";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase";

// Update task
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const data = await req.json();
    await updateDoc(doc(db, "tasks", id), data);
    return NextResponse.json({ id, ...data, message: "Task updated!" });
  } catch {
    return NextResponse.json({ error: "Failed to update task" }, { status: 500 });
  }
}

// Delete task
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await deleteDoc(doc(db, "tasks", params.id));
    return NextResponse.json({ id: params.id, message: "Task deleted!" });
  } catch {
    return NextResponse.json({ error: "Failed to delete task" }, { status: 500 });
  }
}