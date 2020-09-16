
import JWT from "jsonwebtoken";
import { User } from "../../models/User.model";
import express from 'express';

interface req extends express.Request {
    decoded : String
}

export const checkIFUserIsSuperAdmin = async (
  req: req,
  res: express.Response,
  next: any
) => {
  try {
    if (req.headers.authorization && req.headers.authorization.length > 0) {
      const token = req.headers.authorization.split(" ")[1];
      const payload: any = await JWT.verify(token, process.env.JWT_SECRET_KEY);
      let userToCheck: any = await User.findOne{where : { id : payload.id}});
      req.decoded = payload;
      if (userToCheck.isAdmin && userToCheck.userType === "super") {
        next();
      } else {
        res.status(401).json({
          message: "Only super admin can perform this operation!",
        });
      }
    } else {
      res.status(401).json({
        message: "Auth token not in attached in request header",
      });
    }
  } catch (err) {
    res.status(400).json({ message: `Error with token. ${err.message}` });
  }
};
