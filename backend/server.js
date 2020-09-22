const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 8080;
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:8081"
};
  
app.use(cors(corsOptions));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening at http://localhost:${PORT}`)
    })
})