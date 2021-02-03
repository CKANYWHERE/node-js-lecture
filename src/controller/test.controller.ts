import {Response,Request} from 'express'

export class TestController {
    
    getTest = async(req: Request, res: Response) => {
        res.render('hello');
    }

    getJaeYoung = async(req:Request,res:Response) => {
        res.send("I'm jae young")
    }

    getSeoYeon = async(req:Request, res:Response) => {
        res.send("I'm seo yeon")
    }

}