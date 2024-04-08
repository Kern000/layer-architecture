const {retrieveAllCustomers, addNewCustomer} = require("../data-access-layer/customers");

const getAllCustomers = async () => {
    const customers = await retrieveAllCustomers();
    return customers;
}

const serviceAddCustomer = async (firstName, lastName, rating, companyId) => {
    await addNewCustomer(firstName, lastName, rating, companyId);
}


module.exports = {getAllCustomers, serviceAddCustomer};
