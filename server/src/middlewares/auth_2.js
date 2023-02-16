import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;
const auth2 = (req, res, next)=>{
    try {
        let token = req.cookies.jwt_token;
        if(token){
            let user = jwt.verify(token, SECRET_KEY);
            req.userId = user.id;
        }else{
            return res.status(401).json({message : "Unauthorized User"});
        }
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({message : "Unauthorized User"});
    }
}

export default auth2;