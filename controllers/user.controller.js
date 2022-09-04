const express = require('express');
const fs = require('fs');
module.exports.getAllrandomUser = (req, res, next) => {
  const { limit } = req.query;

  let rawdata = fs.readFileSync('public/data.json');
  let users = JSON.parse(rawdata);
  let limitedUsers = users.slice(0, limit);

  res.send(limitedUsers);
};

module.exports.getArandomUser = (req, res) => {
  let rawdata = fs.readFileSync('public/data.json');
  let users = JSON.parse(rawdata);
  const randomIndex = Math.ceil(Math.random() * users.length);

  let randomUser = users.find((user) => user.Id === String(randomIndex));

  res.send(randomUser);
};

module.exports.saveAuser = (req, res) => {
  const { gender, name, contact, address, photoUrl } = req.body;

  let rawdata = fs.readFileSync('public/data.json');
  let users = JSON.parse(rawdata);
  let generatedId = users.length + 1;
  req.body.Id = generatedId;
  users.push(req.body);

  fs.readFile('public/data.json', (err, data) => {
    if (err) {
      res.send('somethong went wrong!');
    } else if (!gender) {
      res.send('Please!Add a gender');
    } else if (!name) {
      res.send('Please!Add a name');
    } else if (!contact) {
      res.send('Please!Add a contact');
    } else if (!address) {
      res.send('Please!Add an address');
    } else if (!photoUrl) {
      res.send('Please!Add a photoUr');
    } else if (data) {
      res.write('data successfully added');
      fs.writeFileSync('public/data.json', JSON.stringify(users));
      res.end();
    }
  });
};

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  let rawdata = fs.readFileSync('public/data.json');
  let users = JSON.parse(rawdata);

  if (isNaN(id)) {
    res.send('Plese Enter a valid id');
  } else {
    let requireUser = users.find((user) => user.Id === id);
    if (requireUser) {
      users = users.filter((user) => user.Id !== id);
      fs.writeFileSync('public/data.json', JSON.stringify(users));

      res.send('User successfully deleted');
    } else {
      res.send('User not exist! ');
    }
  }
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
