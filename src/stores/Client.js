import { observable } from "mobx";

export default class Client {
  @observable name;
  @observable _id = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(2, 10);
  @observable country;
  @observable owner;
  constructor(name, country, owner) {
    this.name = name;
    this.country = country;
    this.owner = owner;
  }
}
