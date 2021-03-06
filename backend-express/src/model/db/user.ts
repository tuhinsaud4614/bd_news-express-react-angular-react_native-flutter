import { INews } from "./news";
import { Schema, model, Document, Types } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  address?: string;
  resetToken?: string;
  resetTokenExp?: Date;
  resetTokenIsVerified?: boolean;
}

const user = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: String,
  address: String,
  resetToken: String,
  resetTokenExp: Date,
  resetTokenIsVerified: Boolean,
});

export const UserModel = model<IUser>("User", user);

export interface IComment extends Document {
  text: string;
  commenter: IUser | Types.ObjectId;
  news: INews | Types.ObjectId;
}

const comment = new Schema<IComment>({
  text: {
    type: String,
    required: true,
  },
  commenter: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  news: {
    type: Schema.Types.ObjectId,
    ref: "News",
  },
});

export const CommentModel = model<IComment>("Comment", comment);

export interface IFavorite extends Document {
  user: IUser | Types.ObjectId;
  news: INews | Types.ObjectId;
}

const favorite = new Schema<IFavorite>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  news: {
    type: Schema.Types.ObjectId,
    ref: "News",
  },
});

export const FavoriteModel = model<IFavorite>("Favorite", favorite);
