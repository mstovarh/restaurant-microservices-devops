const express = require("express");

const app = express();
app.use(express.json());

let kitchenOrders = [];

app.post("/prepare", (req, res) => {

    const order = {
        id: kitchenOrders.length + 1,
        item: req.body.item,
        status: "preparing"
    };

    kitchenOrders.push(order);

    res.json(order);
});

app.get("/kitchen/orders", (req, res) => {
    res.json(kitchenOrders);
});

app.listen(3000, () => {
    console.log("Kitchen Service running on port 3000");
});