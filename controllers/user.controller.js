const express = require('express');
const fs = require('fs');
module.exports.getArandomUser = (req, res, next) => {
  const { limit } = req.query;
  // const limit=req.query
  // fs.readFile('__dir' + '/public/data.json', function (err, data) {
  //   // Display the file content
  //   console.log(data);
  // });
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

// module.exports.getToolDetail = (req, res) => {
//   const {id} = req.params;
//   console.log(id);
//   // const filter = {_id: id};
//   const foundTool = tools.find(tool => tool.id === Number(id));
//   res.status(200).send({
//     success: true,
//     messages: "Success",
//     data: foundTool
//   });
//   // res.status(500).send({
//   //   success: false,
//   //   error: "Internal server error."
//   // });
// };

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
