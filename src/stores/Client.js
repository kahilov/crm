import { observable } from "mobx";

export default class Client {
  @observable name;
  @observable _id = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(2, 10);
  @observable country;
  @observable owner;
  @observable email;
  constructor(id ,name, country, owner,email) {
    this.id = id
    this.name = name;
    this.country = country;
    this.owner = owner;
    this.email = email;
  }
}
