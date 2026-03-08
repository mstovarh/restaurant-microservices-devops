const express = require("express");

const app = express();
app.use(express.json());

let deliveries = [];

app.post("/deliver", (req, res) => {

    const delivery = {
        id: deliveries.length + 1,
        item: req.body.item,
        status: "on the way"
    };

    deliveries.push(delivery);

    res.json(delivery);
});

app.get("/deliveries", (req, res) => {
    res.json(deliveries);
});

app.listen(3000, () => {
    console.log("Delivery Service running on port 3000");
});