const express = require('express');
const fs = require('fs');
module.exports.getAllrandomUser = (req, res, next) => {
  const { limit } = req.query;

  let rawdata = fs.readFileSync('public/data.json');
  let users = JSON.parse(rawdata);
  let limitedUsers = users.slice(0, limit);

  res.send(limitedUsers);
};

// module.exports.saveATool = (req, res) => {
//   console.log(req.query);
//   tools.push(req.body);
//   res.send(tools);
// };

module.exports.getArandomUser = (req, res) => {
  let rawdata = fs.readFileSync('public/data.json');
  let users = JSON.parse(rawdata);
  const randomIndex = Math.ceil(Math.random() * users.length);

  let randomUser = users.find((user) => user.Id === String(randomIndex));

  res.send(randomUser);
};

// module.exports.updateTool = (req, res) => {
//   // const newData = req.body;
//   const { id } = req.params;
//   const filter = { _id: id };

//   const newData = tools.find(tool => tool.id === Number(id));

//   newData.id = id;
//   newData.name = req.body.name;

//   res.send(newData);

// };

// module.exports.deleteTool = (req, res) => {
//   const { id } = req.params;
//   const filter = { _id: id };

//   tools = tools.filter(tool => tool.id !== Number(id));

//   res.send(tools);
// };
