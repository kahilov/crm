import { observable, action, computed } from "mobx";
import Client from "./Client";
const Data = require("../data/data.json");

export class ClientStore {
  @observable clients = [];
  @observable owners = [];
  @observable countries = [];
  @computed get totalClients() {
    return this.clients.length;
  }
  @action formatDate = () => {
    this.clients.forEach(c => c.firstContact = c.firstContact.slice(0,10));
  };
  @action getClients = () => {
    Data.forEach(d => this.clients.push(d));
  };
  @action getOwners = () => {
    for (let client of Data) {
      if (!this.owners.find(o => o === client.owner)) {
        this.owners.push(client.owner);
      }
    }
  };
  @action getCountries = () => {
    for (let client of Data) {
      if (!this.countries.find(c => c === client.country)) {
        let country = client.country
        this.countries.push(country);
      }
    }
  };
  @action editClient = (id, name, country) => {
    let clientIndex = this.clients.findIndex(c => c._id === id);
    this.clients[clientIndex].name = name;
    this.clients[clientIndex].country = country;
  };
  @action addClient = (name, country, owner) => {
    this.clients.push(new Client(name, country, owner));
  };
  @action updateOwner = (name, owner) => {
    let formerOwnerInd = this.clients.findIndex(c => c.name === name);
    this.clients[formerOwnerInd].owner = owner;
  };
  @action updateEmail = (name, type) => {
    let ownerInd = this.clients.findIndex(c => c.name === name);
    this.clients[ownerInd].emailType = type;
  };
  @action updateSold = name => {
    let ownerInd = this.clients.findIndex(c => c.name === name);
    this.clients[ownerInd].sold = true;
  };
}
