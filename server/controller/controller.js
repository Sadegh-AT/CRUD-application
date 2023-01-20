var Userdb = require("../model/model");

//create and save new user

exports.create = (req, res) => {
  //validate request

  if (req.body) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }

  //new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  // save user in the databse
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(); //1:44:21
    });
};

exports.find = (req, res) => {};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};
