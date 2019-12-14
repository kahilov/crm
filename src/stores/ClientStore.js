import { observable, action, computed } from "mobx";
import Client from "./Client";
import axios from "axios";
const clientsRoute = "http://localhost:4000/clients";

export class ClientStore {
  @observable clients = [];
  @observable owners = [];
  @observable countries = [];
  @computed get totalClients() {
    return this.clients.length;
  }
  @action getData = async () => {
    let data = await axios.get(clientsRoute);
    data = data.data[0];
    this.clients = data;
    let owners = [];
    let countries = [];
    for (let client of this.clients) {
      if (!this.owners.find(o => o === client.owner)) {
        owners.push(client.owner);
      }
    }
    this.owners = owners;
    for (let client of this.clients) {
      if (!this.countries.find(c => c === client.country)) {
        let country = client.country;
        countries.push(country);
      }
    }
    this.countries = countries;
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
