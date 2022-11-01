import express, { Request, Response, NextFunction } from 'express';
import testRouter from './router/test';
import usersRouter from './router/users';
const http = require('http');
const app = express();
const PORT = 8080;

// qs 모듈 사용하지 않으면 false값으로 설정해야함.
app.use(express.urlencoded({extended: false}));



const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// 라우터 처리
// app.use('/', (req: Request, res: Response, next: NextFunction) => {
//     res.send('Hello express!');
// });
app.use("/users", usersRouter);
app.use("/test", testRouter);
