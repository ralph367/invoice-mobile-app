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

router.get("/:id", (req, res) => {
    db.Invoice.findAll({ include: [db.Item, db.Customer], where: { id: req.params.id } })
        .then(data => res.send(data));
})

router.put("/:id", (req, res) => {
    db.Invoice.update({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        CustomerId: req.body.CustomerId,
    }, { where: { id: req.params.id } })
        .then(
            db.Invoice_Items.destroy({ where: { invoiceId: req.params.id } })
                .then(
                    req.body.itemId.forEach(item => {
                        db.Invoice_Items.create({
                            invoiceId: req.params.id,
                            itemId: item.id
                        })
                    })

                ).then(res.send("updated"))
        );
})

router.delete("/:id", (req, res) => {
    db.Invoice.destroy({ where: { id: req.params.id } })
        .then(res.send("deleted"));
})

module.exports = router