const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/sql_intro");

router.get("/clients", async function(req, res) {
  query = `SELECT * FROM client`;
  const data = await sequelize.query(query)
  res.send(data)
});

router.post("/client", async function(req, res) {
  res.end();
});

router.put("/transaction", async function(req, res) {
  res.end();
});

module.exports = router;
