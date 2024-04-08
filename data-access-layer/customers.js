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

module.exports = {retrieveAllCustomers};
