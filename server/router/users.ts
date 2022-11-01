import express, { Request, Response, NextFunction } from 'express';
const usersRouter = express.Router();

/**
 * 로그인 함수
 * @param id 유저 입력 id
 * @param password  유저 입력 pw
 * @returns 성공시 true 실패시 false
 * @todo 로그인 구현해야함
 */
const login = (id:string, password:string) => {
    return true;
};

/**
 * 유저정보 조회
 * @param id user id
 * @returns 유저정보 object
 */
const getUserInfo = (id:string) => {
    /*
      유저 정보 조회하는 코드  
    */
   const dumyUserInfo = {
        id: 'jaehak9078',
        name: '김재학',
        age: 29,
        gender: 'M',
   }
   return dumyUserInfo;
}

usersRouter.post("/login", (req: Request, res: Response) => {
    const id = req.body.id;
    const pw = req.body.password;

    if (!login(id,pw)) return res.status(401).send('login fail');
});

usersRouter.post("/getUserInfo", (req: Request, res: Response) => {
    const id = req.body.id;
    const userInfo = getUserInfo(id);
    res.send(userInfo);

});



export default usersRouter;