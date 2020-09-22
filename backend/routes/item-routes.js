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

module.exports = router