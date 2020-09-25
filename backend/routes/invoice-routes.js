const express = require("express");
const router = express.Router();
const db = require("../models");
const nodemailer = require("nodemailer");

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
                .catch((e) => console.log(e))
        ).catch((e) => console.log(e))
})

router.delete("/:id", (req, res) => {
    db.Invoice.destroy({ where: { id: req.params.id } })
        .then(res.send("deleted"));
})

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});

router.post("/send", (req, res) => {
    var price = '';
    var email = '';
    var name = '';
    var items = [];
    db.Invoice.findAll({ include: [db.Item, db.Customer], where: { id: req.body.id } })
        .then(data => {
            data.forEach((info) => {
                email = info.Customer.address;
                name = info.Customer.firstname;
                price = info.price
            });
            data[0].Items.forEach((item, key) => {
                items[key] = "Item name: " + item.name + " Item price: " + item.price
            })
        }).then(data => {
            var mailOptions = {
                from: 'victor_baines@hotmail.com',
                to: email,
                subject: "Invoice for M." + name,
                text: 'Here is a list of your items ' +items + "\n Total price: " + price
            };        
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            })
        }).finally(console.log("Email Sent"))
})

module.exports = router