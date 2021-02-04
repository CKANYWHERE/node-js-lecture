import { Schema } from "mongoose";

export const BookSchema = new Schema({
    Publisher:String,
    BookName:String,
    RegisterDate:Date,
    Category:[Number],
    PublishedYN:Boolean
});