// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

import passport from "passport"
// import { ExtractJwt, Strategy as JwtStrategy, StrategyOptions } from 'passport-jwt';
import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import userModel from "../../model/model1";
const key = process.env.SECRET_KEY

const jwtOpts : StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: '123123'
}

const myPassport = passport.use(new JwtStrategy(jwtOpts, async(jwt_payload, done)=>{
    try{
        const user = await userModel.findOne({username: jwt_payload.username})

        if(!user){
            return done(null, false, {message: '{passport-jwt error} user not found'})
        }

        return done(null, user)
    }catch(error){
        return done(error, false)
    }
}))

export default myPassport
