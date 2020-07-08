import { RequestHandler } from "express";
import { verify } from "jsonwebtoken";
import HttpError from "../model/http-error";

export const isAuth: RequestHandler = (req, _, next) => {
  if (!req.get("Authorization")) {
    return next(new HttpError("Not Authenticated", 401));
  }
  const token = req.get("Authorization")!.split(" ")[1];

  try {
    let decodedToken = verify(
      token,
      process.env.SECRET_OR_KEY || "supersecret"
    );

    if (typeof decodedToken === "object") {
      req.userId = (<any>decodedToken).id;
      next();
    } else {
      return next(new HttpError("Authentication Failed!", 401));
    }
  } catch (err) {
    return next(new HttpError("Not Authenticated", 401));
  }
};