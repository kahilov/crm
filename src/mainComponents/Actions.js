import React, { Component } from "react";
import { observer, inject } from "mobx-react";
@inject("actionStore", "clientStore")
//adding our GeneralStore as a prop of the ResInput component
@observer
class Actions extends Component {
  inputHandler = e => {
    this.props.actionStore.handleInput(e.target.name, e.target.value);
  };
  addClient = () => {
    this.props.clientStore.addClient(
      this.props.actionStore.name,
      this.props.actionStore.country,
      this.props.actionStore.owner
    );
  };
  updateOwner = () => {
    this.props.clientStore.updateOwner(
      this.props.actionStore.name,
      this.props.actionStore.owner
    );
  };
  updateEmail = () => {
    this.props.clientStore.updateEmail(
      this.props.actionStore.name,
      this.props.actionStore.email
    );
  };
  updateSold = () =>{
      this.props.clientStore.updateSold(this.props.actionStore.name)
  }
  render() {
    const owners = this.props.clientStore.owners;
    return (
      <div>
        <div>
          Update Client
          <input onChange={this.inputHandler} name="name" placeholder="Name" />
          <select name="owner" onChange={this.inputHandler}>
            <option>Select New Owner</option>
            {owners.map(o => (
              <option value={o}>{o}</option>
            ))}
          </select>
          <button onClick={this.updateOwner}>Transfer</button>
          <select name="email" onChange={this.inputHandler}>
            <option>Select New Email Type</option>
            <option value={"A"}>A</option>
            <option value={"B"}>B</option>
            <option value={"C"}>C</option>
            <option value={"D"}>D</option>
          </select>
          <button onClick={this.updateEmail}>Send</button>
          <button onClick={this.updateSold}>Declare</button>
        </div>
        <div>
          Add Client
          <input onChange={this.inputHandler} name="name" placeholder="Name" />
          <input
            onChange={this.inputHandler}
            name="owner"
            placeholder="Owner"
          />
          <input
            onChange={this.inputHandler}
            name="country"
            placeholder="Country"
          />
          <button onClick={this.addClient}>Add Client</button>
        </div>
      </div>
    );
  }
}

export default Actions;
