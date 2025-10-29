import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publisher: String,
    translator: String,
    edition: String,
    description: String,
    image: String,
    price: Number,
    discount: Number,
    category: String,
    weight: Number
})

export default mongoose.models.Book || mongoose.model("Book", bookSchema);