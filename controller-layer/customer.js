const express = require("express");
const router = express.Router();

const {getAllCustomers} = require("../service-layer/customers");

router.get("/", async (req,res) => {
    console.log("Route hit /customers");
    const customers = await getAllCustomers();
    res.status(200).send({"customers": customers});
})

module.exports = router;
