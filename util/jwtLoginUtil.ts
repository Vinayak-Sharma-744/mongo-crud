// import userModel from "../model/model1";
import * as jwt from "jsonwebtoken";
import {Request, Response, NextFunction} from "express";
const jwtPass = "123123"

const login = (req: Request , res:Response, next:NextFunction)=>{
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ msg: "invalid token in header or token not present" });
    }
    else{
        try {
            const decoded = jwt.verify(token, jwtPass);
            console.log("decoded : ",decoded );
            
            next();
        } catch (error) {
            return res.status(403).json({ ErrMsg: `Invalid token, ${error}`, msg: "please signUp" });
        }
    }

    
}

export default login