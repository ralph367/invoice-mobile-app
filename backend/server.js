const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const invoiceRoutes = require("./routes/invoice-routes");
app.use("/api/invoices", invoiceRoutes);

const itemRoutes = require("./routes/item-routes");
app.use("/api/items", itemRoutes);

const customerRoutes = require("./routes/customer-routes");
app.use("/api/customers", customerRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening at http://localhost:${PORT}`)
    })
})