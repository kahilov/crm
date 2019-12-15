import React, { Component } from "react";
import { observer, inject } from "mobx-react";
@inject("actionStore", "clientStore")
//adding our GeneralStore as a prop of the ResInput component
@observer
class Actions extends Component {
  inputHandler = e => {
    this.props.actionStore.handleInput(e.target.name, e.target.value);
  };
  addClient = async () => {
    await this.props.clientStore.addClient(
      this.props.actionStore.name,
      this.props.actionStore.country,
      this.props.actionStore.owner,
      this.props.actionStore.email
    );
    this.props.clientStore.getData();
  };
  updateOwner = async () => {
    await this.props.clientStore.updateOwner(
      this.props.actionStore.name,
      this.props.actionStore.owner
    );
    this.props.clientStore.getData();
  };
  updateEmail = () => {
    this.props.clientStore.updateEmail(
      this.props.actionStore.name,
      this.props.actionStore.email
    );
  };
  updateSold = async () => {
   await this.props.clientStore.updateSold(this.props.actionStore.name);
   this.props.clientStore.getData();
  };
  render() {
    const owners = this.props.clientStore.owners;
    return (
      <div>
        <div>
          <h2>Update Client</h2>
          Name
          <input
            className="actions"
            onChange={this.inputHandler}
            name="name"
            placeholder="Name"
          />
          <div className="actions">
            New Owner
            <select
              className="actions"
              name="owner"
              onChange={this.inputHandler}
            >
              <option>Select New Owner</option>
              {owners.map(o => (
                <option value={o}>{o}</option>
              ))}
            </select>
            <button onClick={this.updateOwner}>Transfer</button>
          </div>
          <div className="actions">
            New Email
            <select
              className="actions"
              name="email"
              onChange={this.inputHandler}
            >
              <option>Select New Email Type</option>
              <option value={"A"}>A</option>
              <option value={"B"}>B</option>
              <option value={"C"}>C</option>
              <option value={"D"}>D</option>
            </select>
            <button onClick={this.updateEmail}>Send</button>
          </div>
        </div>
        <div>
          Declare Sold <button onClick={this.updateSold}>Sold</button>
        </div>
        <div>
          <h2>Add Client</h2>
          Name
          <input
            className="actions"
            onChange={this.inputHandler}
            name="name"
            placeholder="Name"
          />
          <div className="actions">
            Email
            <input
              className="actions"
              onChange={this.inputHandler}
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            Owner
            <input
              className="actions"
              onChange={this.inputHandler}
              name="owner"
              placeholder="Owner"
            />
          </div>
          <div className="actions">
            Country
            <input
              className="actions"
              onChange={this.inputHandler}
              name="country"
              placeholder="Country"
            />
          </div>
          <button onClick={this.addClient}>Add Client</button>
        </div>
      </div>
    );
  }
}

export default Actions;
