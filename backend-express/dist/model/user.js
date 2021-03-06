"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, email, avatar, address, resetToken, resetTokenExp, resetTokenIsVerified, id = "") {
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.address = address;
        this.resetToken = resetToken;
        this.resetTokenExp = resetTokenExp;
        this.resetTokenIsVerified = resetTokenIsVerified;
        this.id = id;
    }
    get topMap() {
        return {
            name: this.name,
            email: this.email,
            avatar: this.avatar,
            address: this.address,
        };
    }
}
exports.User = User;
class Favorite {
    constructor(news, user, id = "") {
        this.news = news;
        this.user = user;
        this.id = id;
    }
    get topMap() {
        return {
            news: this.news,
            user: this.user,
        };
    }
}
exports.Favorite = Favorite;
