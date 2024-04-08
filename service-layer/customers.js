const {retrieveAllCustomers} = require("../data-access-layer/customers");

const getAllCustomers = async () => {
    const customers = await retrieveAllCustomers();
    return customers;
}

module.exports = {getAllCustomers};
