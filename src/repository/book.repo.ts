import { BookEntity } from '../model/book.model';
import { IBookDocument } from '../model/book.type';

export class BookRepo{

    async findBook(bookOid:string){
        const content = await BookEntity.findById({_id:bookOid});
        if(content){
            return content;
        }
        else{
            return {
                SectionName:'',
                Content:'',
                BookOid:'',
                Remark:['']
            }
        }
    }

    async insertBook(publisher:string, bookName:string, category:number[]){
        const newBook = new BookEntity({
            Publisher: publisher,
            BookName: bookName,
            RegisterDate: new Date(),
            Category: category,
            PublishedYN: false,
          });

        await newBook.save();
    }
}