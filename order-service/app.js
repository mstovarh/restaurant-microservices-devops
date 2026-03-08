const express = require("express");

const app = express();
app.use(express.json());

let orders = [];

app.post("/orders", (req, res) => {

    const order = {
        id: orders.length + 1,
        item: req.body.item,
        status: "received"
    };

    orders.push(order);

    res.json(order);
});

app.get("/orders", (req, res) => {
    res.json(orders);
});

app.listen(3000, () => {
    console.log("Order Service running on port 3000");
});