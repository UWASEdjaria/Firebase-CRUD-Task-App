import { NextRequest, NextResponse } from "next/server";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";


const col = collection(db, "items"); // reference ya collection

// CREATE - POST
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    await addDoc(col, data);
    return NextResponse.json({ message: "Item added successfully!" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add item", details: error });
  }
}

// READ - GET
export async function GET() {
  try {
    const snapshot = await getDocs(col);
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch items", details: error });
  }
}
