const   {   retrieveAllCustomers, 
            addNewCustomer,
            updateCustomerDAL
        } = require("../data-access-layer/customers");

const getAllCustomers = async () => {
    const customers = await retrieveAllCustomers();
    return customers;
}

const serviceAddCustomer = async (firstName, lastName, rating, companyId) => {
    await addNewCustomer(firstName, lastName, rating, companyId);
}

const updateCustomerService = async (customer_id, first_Name="",last_Name="", _rating=0, _companyId=0) => {
    await updateCustomerDAL(customer_id, first_Name, last_Name, _rating, _companyId);
}

module.exports = {getAllCustomers, serviceAddCustomer, updateCustomerService};
