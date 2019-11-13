const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// app.use((req, res) => {
//     res.json({
//         msg : "홈페이지에 오신걸 환영합니다!"
//     })
// });

const port = 1541;

const routeUsers  = require("./routes/api/users");
const routeProducts = require("./routes/api/products");
const routeOrders = require("./routes/api/orders");

app.listen(port ,console.log("서버를 시작합니다."));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

const dbAddress = "mongodb+srv://user1:aa1234@cluster0-nbev1.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(dbAddress, {useNewUrlParser : true, useUnifiedTopology: true})
    .then(() => console.log("몽고 서버에 접속합니다."))
    .catch(err => console.log(err.message));

app.use("/users", routeUsers);
app.use("/products", routeProducts);
app.use("/orders", routeOrders);


app.use((req, res) => {
    res.json({
        msg : "홈페이지에 오신걸 환영합니다!"
    })
});