import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { NextRequest,NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const docRef = doc(db, "items", id);
    await updateDoc(docRef, data);
    return NextResponse.json({ message: "Item updated successfully!" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update item", details: error });
  }
}
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await deleteDoc(doc(db, "items", id));
    return NextResponse.json({ message: "Item deleted!" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete", details: error });
  }
}
