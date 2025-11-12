import { NextResponse } from "next/server";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase";

export async function GET() {
  const snapShot = await getDocs(collection(db, "tasks"));
  const tasks = snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return NextResponse.json({ tasks });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Create a new task in Firestore
    const newTaskRef = await addDoc(collection(db, "tasks"), {
      title: body.title,
      description: body.description || "",
      completed: false,
      priority: body.priority || "medium",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Return the new task as JSON
    return NextResponse.json({
      id: newTaskRef.id,
      title: body.title,
      description: body.description || "",
      completed: false,
      priority: body.priority || "medium",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  } catch (error) {
    console.log("POST /api/tasks error:", error);
    return NextResponse.json({ error: "Failed to create task" }, { status: 500 });
  }
}
