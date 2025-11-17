import { connectToDatabase } from "@/lib/mongodb";
import Book from "@/models/Book";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDatabase()
        const books = await Book.find();
        return NextResponse.json(books);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch books" }, { status: 500 });
    }
}