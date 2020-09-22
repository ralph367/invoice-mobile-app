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

module.exports = router