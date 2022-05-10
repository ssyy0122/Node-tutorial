"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  login() {
    const client = this.body;
    const { id, psword } = UserStorage.getUserInfo(body.id);

    if (id) {
      if (id === client.id && psword === client.psword) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀림" };
    }
    return { success: false, msg: "존재하지않음" };
  }
  register() {
    const client = this.body;
    UserStorage.save(client);
  }
}
module.exports = User;
