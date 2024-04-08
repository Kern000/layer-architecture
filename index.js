const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

let app = express();

const customerRoutes = require("./controller-layer/customer");

app.use(express.json());
// app.use(bodyParser.json());

async function main(){
    app.use("/customers", customerRoutes);
}

main();

let port = 3001;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})

