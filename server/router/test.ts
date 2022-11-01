import express, { Request, Response, NextFunction } from 'express';
const testRouter = express.Router();

testRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Test!!");
});
testRouter.get("/getTest", (req: Request, res: Response, next: NextFunction) => {
    res.send("getTest!!");
});

export default testRouter;
