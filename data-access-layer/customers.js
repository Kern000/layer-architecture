const {createConnection} = require("mysql2/promise");

let connection;

async function main(){
    connection = await createConnection({
    "host": process.env.DB_HOST,
    "user": process.env.DB_USER,
    "database": process.env.DB_NAME,
    "password": process.env.DB_PASSWORD
    })
}

const retrieveAllCustomers = async () => {

    try {
        await main();
        let [customers] = await connection.execute("SELECT * FROM Customers INNER JOIN Companies ON Customers.company_id = Companies.company_id");
        return customers;
    } catch (error) {
        console.error("Error retrieving all customers", error);
    }
}

const addNewCustomer = async (firstName, lastName, rating, companyId) => {
    try {
        await main();
        let query = 'INSERT INTO Customers (first_name, last_name, rating, company_id) VALUES (?, ?, ?, ?)';
        let bindings = [firstName, lastName, rating, companyId];
        await connection.execute(query, bindings);
        console.log("added new customer");
    } catch (error){
        console.error("Error adding new customer", error);
    }
}

const updateCustomerDAL = async (customer_id, first_Name="",last_Name="", _rating=0, _companyId=0) => {

    await main();
    try {
        let queryString = `UPDATE Customers SET`
        let customerId = customer_id;

        if (first_Name){
            queryString += ` first_name="${first_Name}",`
        }
        if (last_Name){
            queryString += ` last_name="${last_Name}",`
        }
        if (_rating){
            queryString += ` rating="${_rating}"`
        }
        if (_companyId){
            queryString += ` company_id="${_companyId}"`
        }

        queryString += ` WHERE customer_id="${customerId}"`

        console.log("processed query string here", queryString);
        await connection.execute(queryString);
    } catch(error) {
        console.error("error", error);
    }
}



module.exports = {retrieveAllCustomers, addNewCustomer, updateCustomerDAL};
