import { observable } from "mobx";

export default class Client {
  @observable name;
  @observable id = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(2, 10);
  @observable country;
  @observable owner;
  @observable email;
  constructor(name, country, owner, email) {
    this.name = name;
    this.country = country;
    this.owner = owner;
    this.email = email;
  }
}
