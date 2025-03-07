import React, { Component } from "react";
import { observer, inject } from "mobx-react";
@inject("clientStore")
@observer
class Clients extends Component {
  editClient = async e => {
    let id = e.currentTarget.id;
    console.log(id)
    let name = prompt("Please Input New Name");
    let country =  prompt("Please Input New Country");
    await this.props.clientStore.editClient(id,name, country);
    this.props.clientStore.getData();
  };
  render() {
    const clientStore = this.props.clientStore;
    return (
      <div>
        <table style={{ width: "100%" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>First Contact</th>
            <th>Sold</th>
            <th>Country</th>
            <th>Owner</th>
          </tr>
          {clientStore.clients.map(c => (
            <tr id = {c.id} onDoubleClick={this.editClient}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.firstContact}</td>
              {c.sold ? <td> Yes</td> :<td>No</td>}
              <td> {c.country}</td>
              <td>{c.owner}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default Clients;


