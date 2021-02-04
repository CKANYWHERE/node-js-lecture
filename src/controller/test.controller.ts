import {Response,Request} from 'express'
import { connectToDatabase } from '../middleware/coneection';
import { BookEntity } from '../model/book.model';
import { BookRepo } from '../repository/book.repo';

export class TestController {
    
    constructor(
        private readonly repo = new BookRepo()
    ){
        console.log('constructor');
        connectToDatabase();
    }

    getTest = async(req: Request, res: Response) => {
        const book = await this.repo.findBook(req.params.id);
        console.log(book);
        res.render('hello');
    }

    postTest = async(req:Request, res:Response) =>{
        let category = [ Number(req.body.category1), Number(req.body.category2) ,Number(req.body.category3)]
        await this.repo.insertBook(req.body.publisher,req.body.bookName,category);
        res.send('inserted success');
    }

    getJaeYoung = async(req:Request,res:Response) => {
        res.send("I'm jae young")
    }

    getSeoYeon = async(req:Request, res:Response) => {
        res.send("I'm seo yeon")
    }

}