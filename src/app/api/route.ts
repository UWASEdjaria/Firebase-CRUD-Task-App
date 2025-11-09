
import { db } from '../lib/firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { NextRequest,NextResponse } from 'next/server';
interface Task {
   id: string; 
   title: string; 
   description: string; 
   completed: boolean; 
   priority: "Low" | "Medium" | "High"; 
   userEmail: string; }



   const col = collection (db,"items");
export async function POST(req:NextRequest){
  try {
     const data = await req.json();
     await addDoc(col,data);
     return NextResponse.json({message:"Item added successfully!" })
  } catch (error) {
    return  NextResponse.json({error:"Failed to add item",details:error})
  }
}


export async function GET() {
  try {
    const snapshot = await getDocs(col);
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch items", details: error });
  }
}
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
