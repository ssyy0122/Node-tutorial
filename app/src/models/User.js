"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  login() {
    const body = this.body;
    const { id, psword } = UserStorage.getUserInfo(body.id);
    console.log(id, psword);

    if (id) {
      if (id === body.id && psword === body.psword) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀림" };
    }
    return { success: false, msg: "존재하지않음" };
  }
}
module.exports = User;
