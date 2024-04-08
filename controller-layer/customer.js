const express = require("express");
const router = express.Router();

const   {   getAllCustomers, 
            serviceAddCustomer,
            updateCustomerService
        } = require("../service-layer/customers");

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

router.patch("/update/:customer_id", async(req,res)=>{
    
    let first_name="";
    let last_name="";
    let rating=0;
    let company_id=0;
    let customerId = req.params.customer_id;

    console.log("controller layer hit", req.body);

    if(req.body.first_name){
        first_name = req.body.first_name;
    }
    if (req.body.last_name){
        last_name = req.body.last_name;
    }
    if (req.body.rating){
        rating = req.body.rating;
    }
    if (req.body.company_id){
        company_id = req.body.company_id;
    }
    await updateCustomerService(customerId, first_name, last_name, rating, company_id);
    res.sendStatus(202);
})

module.exports = router;
