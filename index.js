const express = require("express");
require("dotenv").config();

let app = express();

const customerRoutes = require("./controller-layer/customer");

async function main(){
    app.use("/customers", customerRoutes);
}

main();

let port = 3001;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})

