const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
    db.Customer.create({
        firstname: req.body.firstname,
        secondname: req.body.secondname,
        phone: req.body.phone,
        address: req.body.address,
    }).then(data => res.send(data));
})

router.get("/", (req, res) => {
    db.Customer.findAll({
        //include: [db.Item, db.Customer]
    }).then(data => res.send(data));
})

router.get("/:id", (req, res) => {
    db.Customer.findAll({where: {id :req.params.id}})
    .then(data => res.send(data));
})

router.put("/:id", (req, res) => {
    console.log(req.body.name)
    db.Customer.update({
        firstname: req.body.firstname,
        secondname: req.body.secondname,
        phone: req.body.phone,
        address: req.body.address,
    }, {where: {id :req.params.id}})
    .then(data => res.send(data));
})

router.delete("/:id", (req, res) => {
    db.Customer.destroy({where: {id :req.params.id}})
    .then( res.send("deleted"));
})

module.exports = router