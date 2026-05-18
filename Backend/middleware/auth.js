import jwt from "jsonwebtoken"
import User from "../model/User.js"

const protect = async (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.startsWith("Bearer") ? req.headers.authorization.split(" ")[1] : null;
  if(token){
    try{
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      if(!req.user){
        res.status(401);
        throw new Error("Not authorized");
      }
      next();
    }catch(error){
      res.status(401);
      throw new Error("Not authorized");
    }
  }else{
    res.status(401);
    throw new Error("Not authorized");
  }
}

const admin =  (req, res, next) => {
if(req.user && req,user.role ==="admin"){
  next();
}else{
  res.status(403);
  throw new Error(message:"Only admin can access this route");
}
}

export {protect,admin}