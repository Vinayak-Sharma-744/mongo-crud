import userModel from "../model/model1";
import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
const jwtPass = "123123";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const username = req.body.username;
    const findUser = await userModel.findOne({ username: username });
    if (!findUser) {
      var token = jwt.sign({ username: username }, jwtPass);
    //   res.status(200).json({ token });
    console.log(token);
    
    } else {
      res
        .status(411)
        .json({
          ErrMsg: `Invalid token`,
          mes: "user already exists go to login",
        });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default signUp;
