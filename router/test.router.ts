import { Router } from "express";
import { Request,Response } from "express";


export const getTestRouter = () => {
    const router = Router();

    router.get('/get/:id', (req:Request, res:Response) => {
        console.log(req.params.id);
        res.send('Hello World!!!!!!')
    });

    router.post('/post', (req:Request, res:Response) => {
        console.log(req.body.id);
        console.log(req.body.pw);
        
        res.send('Hello World!!!!!!')
    })
    return router;
}


