import { Model, Document, Schema } from 'mongoose';

export interface IBook{
    Publisher?:string,
    BookName?:string,
    RegisterDate:Date,
    Category:[number],
    PublishedYN?:boolean
}

export interface IBookDocument extends IBook,Document {}
export interface IBookModel extends Model<IBookDocument> {}