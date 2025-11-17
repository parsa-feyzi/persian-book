import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publisher: String,
    translator: String,
    description: String,
    image: String,
    price: Number,
    discount: Number,
    category: String,
    details: {
        weight: Number,
        paper: String,
        pageNumber: Number,
        edition: String,
        publishDate: String,
        cover: String
    }
})

export default mongoose.models.Book || mongoose.model("Book", bookSchema);