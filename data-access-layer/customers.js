const {createConnection} = require("mysql2/promise");

// by right not suppose to call like this. 
// You guys suppose to call via MODEL

let connection = async () => {
    await createConnection({
    "host": process.env.DB_HOST,
    "user": process.env.DB_USER,
    "database": process.env.DB_NAME,
    "password": process.env.DB_PASSWORD
})
}

const retrieveAllCustomers = async () => {

    try {
        let [customers] = await connection.execute("SELECT * FROM Customers INNER JOIN Companies ON Customers.company_id = Companies.company_id");
        return customers;
    } catch (error) {
        console.error("Error retrieving all customers", error);
    }
}

module.exports = {retrieveAllCustomers};
