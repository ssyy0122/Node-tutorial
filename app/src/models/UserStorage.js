"use strict";

class UserStorage {
  static #users = {
    id: ["ssyy", "개발자", "김팀장"],
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
  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUsers, info) => {
      newUsers[info] = users[info][idx];
      return newUsers;
    }, {});
    console.log(userInfo);
    return userInfo;
  }
}
module.exports = UserStorage;
