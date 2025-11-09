import { db } from "@/app/lib/firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const { id, ...data } = await request.json();
    
    if (!id) {
      return NextResponse.json(
        { error: "Task ID is required" },
        { status: 400 }
      );
    }

    const docRef = doc(db, "items", id);
    await updateDoc(docRef, data);
    
    return NextResponse.json({ 
      id, 
      ...data,
      message: "Task updated successfully" 
    });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { error: "Failed to update task" }, 
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    
    if (!id) {
      return NextResponse.json(
        { error: "Task ID is required" },
        { status: 400 }
      );
    }

    await deleteDoc(doc(db, "items", id));
    
    return NextResponse.json({ 
      message: "Task deleted successfully",
      id
    });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { error: "Failed to delete task" }, 
      { status: 500 }
    );
  }
}