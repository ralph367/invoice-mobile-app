const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
    db.Item.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }).then(data => res.send(data));
})

router.get("/", (req, res) => {
    db.Item.findAll({
       // include: [db.Item, db.Customer]
    }).then(data => res.send(data));
})

router.get("/:id", (req, res) => {
    db.Item.findAll({where: {id :req.params.id}})
    .then(data => res.send(data));
})

router.put("/:id", (req, res) => {
    console.log(req.body.name)
    db.Item.update({
        name: req.body.name, 
        description: req.body.description,
        price: req.body.price
    }, {where: {id :req.params.id}})
    .then(data => res.send(data));
})

router.delete("/:id", (req, res) => {
    db.Item.destroy({where: {id :req.params.id}})
    .then( res.send("deleted"));
})

module.exports = router