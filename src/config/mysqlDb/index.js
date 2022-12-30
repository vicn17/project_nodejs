// get the client
import mysql from "mysql2/promise";

// create the connection to database
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "pottery_ware",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
