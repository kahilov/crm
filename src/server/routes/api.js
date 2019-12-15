const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/sql_intro");

router.get("/clients", async function(req, res) {
  query = `SELECT * FROM client`;
  const data = await sequelize.query(query);
  res.send(data);
});

router.post("/updateOwner", async function(req, res) {
  let id = req.body.id;
  let owner = req.body.owner;
  query = `UPDATE client SET owner = '${owner}' WHERE id = '${id}'`;
  await sequelize.query(query);
  res.end();
});

router.post("/updateEmail", async function(req, res) {
  let id = req.body.id;
  let email = req.body.email;
  query = `UPDATE client SET emailType = '${email}' WHERE id = '${id}'`;
  await sequelize.query(query);
  res.end();
});
router.post("/updateSold", async function(req, res) {
  let id = req.body.id;
  query = `UPDATE client SET sold = true WHERE id = '${id}'`;
  await sequelize.query(query);
  res.end();
});
router.post("/addClient", async function(req, res) {
  let client = req.body.client;
  let id = client.id;
  let name = client.name;
  let email = client.email;
  let country = client.country;
  let owner = client.owner;
  query = `INSERT INTO client
  VALUES('${id}','${name}','${email}',null,null,null,'${country}','${owner}')`;
  await sequelize.query(query);
  res.end();
});

router.post("/editClient", async function(req, res) {
  let id = req.body.id;
  let name = req.body.name;
  let country = req.body.country;
  query = `UPDATE client SET name = '${name}', country = '${country}' WHERE id = '${id}'`;
  await sequelize.query(query);
  res.end();
});
module.exports = router;
