const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
    db.Invoice.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        CustomerId: req.body.CustomerId,
    }).then(newInvoice => {
        req.body.itemId.forEach(item => {
            newInvoice.addItem(item.id)
        });
        res.send(newInvoice);
    });
})

router.get("/", (req, res) => {
    db.Invoice.findAll({
        include: [db.Item, db.Customer]
    }).then(data => res.send(data));
})

module.exports = router