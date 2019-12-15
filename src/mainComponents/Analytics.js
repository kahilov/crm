import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import EmailsSent from "../badgeComponets/EmailsSent";
import NewClients from "../badgeComponets/NewClients";
import OutstandingClients from "../badgeComponets/OutstandingClients";
import HottestCountry from "../badgeComponets/HottestCountry";
import SalesByCountry from "../chartComponents/SalesByCountry";
import TopEmployees from "../chartComponents/TopEmployees";
@inject("clientStore")
@observer
class Analytics extends Component {
  getNewClients = () => {
    let newClientArr = [];
    let clients = this.props.clientStore.clients;
    const date = new Date();
    let year = date.getFullYear();
    year = String(year);
    let month = date.getMonth();
    month = month < 10 ? "0" + (month + 1) : month + 1;
    month = String(month);
    for (let client of clients) {
      if (client.firstContact) {
        if (
          client.firstContact.includes(year) &&
          client.firstContact.includes(month)
        ) {
          newClientArr.push(client);
        }
      }
    }
    return newClientArr.length;
  };
  getEmailsSent = () => {
    let emailsSentArr = [];
    let clients = this.props.clientStore.clients;
    emailsSentArr = clients.filter(c => c.emailType != "null");
    return emailsSentArr.length;
  };
  getOutstandingClients = () => {
    let goodClientArr = [];
    let clients = this.props.clientStore.clients;
    goodClientArr = clients.filter(c => c.sold);
    return goodClientArr.length;
  };
  getCountryData = () => {
    let clients = this.props.clientStore.clients;
    let countries = this.props.clientStore.countries;
    countries = countries.map(c => (c = [c]));
    for (let client of clients) {
      if (client.sold) {
        let countryIndex = countries.findIndex(c => c[0] === client.country);
        countries[countryIndex].push(client.country);
      }
    }
    return countries;
  };
  getHottestCountry = () => {
    let hottestCountry = "";
    let soldNum = 0;
    let countries = this.getCountryData();
    for (let country of countries) {
      if (country.length > soldNum) {
        soldNum = country.length;
        hottestCountry = country[0];
      }
    }
    return hottestCountry;
  };
  getTopEmployees = () => {
    let firstInSales = 0;
    let secondInSales = 0;
    let thirdInSales = 0;
    let topThree = [];
    let clients = this.props.clientStore.clients;
    let owners = this.props.clientStore.owners;
    owners = owners.map(c => (c = [c]));
    for (let client of clients) {
      if (client.sold) {
        let ownerIndex = owners.findIndex(o => o[0] === client.owner);
        owners[ownerIndex].push(client.owner);
      }
    }
    for (let owner of owners) {
      if (firstInSales == 0) {
        firstInSales = owner.length;
        topThree.push(owner);
      } else if (secondInSales == 0) {
        secondInSales = owner.length;
        topThree.push(owner);
      } else if (thirdInSales == 0) {
        thirdInSales = owner.length;
        topThree.push(owner);
      } else if (owner.length > thirdInSales && owner.length < secondInSales) {
        thirdInSales = owner.length;
        topThree.splice(2, 1, owner);
      } else if (owner.length > secondInSales && owner.length < firstInSales) {
        secondInSales = owner.length;
        topThree.splice(1, 1, owner);
      } else if (owner.length > firstInSales) {
        firstInSales = owner.length;
        topThree.splice(0, 1, owner);
      }
    }
    return topThree;
  };
  render() {
    if (this.props.clientStore.countries.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      let newClients = this.getNewClients();
      let emailsSent = this.getEmailsSent();
      let outstandingClients = this.getOutstandingClients();
      let salesByCountry = this.getCountryData();
      let hottestCountry = this.getHottestCountry();
      let topEmployees = this.getTopEmployees();
      console.log(salesByCountry);
      return (
        <div>
          <div className="badges">
            <NewClients num={newClients} />
            <EmailsSent num={emailsSent} />
            <OutstandingClients num={outstandingClients} />
            <HottestCountry country={hottestCountry} />
          </div>
          <div className="charts">
            Countries By Sales
            <SalesByCountry data={salesByCountry} />
            Top Three Employees by Sales
            <TopEmployees top={topEmployees} />
          </div>
        </div>
      );
    }
  }
}
export default Analytics;
