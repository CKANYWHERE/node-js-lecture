import { model } from "mongoose";
import { BookSchema } from "./book.schema";
import { IBookDocument } from "./book.type";


export const BookEntity = model<IBookDocument>("Book",BookSchema,"Book");