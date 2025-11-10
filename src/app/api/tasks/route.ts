import { db } from "@/app/lib/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, "tasks"));
    const tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return NextResponse.json(tasks);
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch tasks" }, 
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const docRef = await addDoc(collection(db, "tasks"), data);
    return NextResponse.json({ 
      id: docRef.id, 
      ...data 
    });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { error: "Failed to create task" }, 
      { status: 500 }
    );
  }
}