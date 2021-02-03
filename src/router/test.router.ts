import { Router } from "express";
import { Request,Response } from "express";
import { TestController } from '../controller/test.controller';


export const getTestRouter = () => {
    const router = Router();
    const controller = new TestController();

    router.get('/getTest/', controller.getTest);
    router.get('/sy/',controller.getSeoYeon);
    router.get('/jy/',controller.getJaeYoung);

    return router;
}


