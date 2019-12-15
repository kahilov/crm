import { observable, action, computed } from "mobx";
import Client from "./Client";
import axios from "axios";
const clientsRoute = "http://localhost:4000/clients";
const updateOwnerRoute = "http://localhost:4000/updateOwner";
const updateEmailRoute = "http://localhost:4000/updateEmail";
const updateSoldRoute = "http://localhost:4000/updateSold";
const addClientRoute = "http://localhost:4000/addClient";
const editClientRoute = "http://localhost:4000/editClient";
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
      if (!owners.find(o => o === client.owner)) {
        owners.push(client.owner);
      }
    }
    this.owners = owners;
    for (let client of this.clients) {
      if (!countries.find(c => c === client.country)) {
        countries.push(client.country);
      }
    }
    this.countries = countries;
  };
  @action editClient = async (id, name, country) => {
    await axios.post(editClientRoute, { id: id, name: name, country: country });
  };
  @action addClient = async (name, country, owner, email) => {
    const client = new Client(name, country, owner, email);
    await axios.post(addClientRoute, { client: client });
  };
  @action updateOwner = async (name, owner) => {
    let formerOwner = this.clients.find(c => c.name === name);
    let id = formerOwner.id;
    await axios.post(updateOwnerRoute, { id: id, owner: owner });
  };
  @action updateEmail = async (name, type) => {
    let client = this.clients.find(c => c.name === name);
    let id = client.id;
    await axios.post(updateEmailRoute, { id: id, email: type });
  };
  @action updateSold = async name => {
    let client = this.clients.find(c => c.name === name);
    let id = client.id;
    await axios.post(updateSoldRoute, { id: id });
  };
}
