"use strict";

class UserStorage {
  static #users = {
    id: ["오종진", "개발자", "김팀장"],
    psword: ["1111", "1234", "123456"],
    name: ["dd", "ss", "ff"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}
module.exports = UserStorage;
