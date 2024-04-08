const express = require("express");
const router = express.Router();

const {getAllCustomers, serviceAddCustomer} = require("../service-layer/customers");

router.get("/", async (req,res) => {
    const customers = await getAllCustomers();
    res.status(200).send({"customers": customers});
})

router.post("/create", async(req,res)=> {

    console.log("REQ.BODY HERE", req.body);
    let {first_name, last_name, rating, company_id} = req.body;
    // rating = parseInt(rating);
    // company_id = parseInt(company_id);
    
    await serviceAddCustomer(first_name, last_name, rating, company_id);
    res.sendStatus(201);
    // res.status(201).json({"message":"success"});
    // res.status(201) this will stuck
})

module.exports = router;
