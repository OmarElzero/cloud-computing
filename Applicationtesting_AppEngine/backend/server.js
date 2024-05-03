const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql'); // or 'pg' for PostgreSQL

const app = express();
const port = process.env.PORT || 3000; // Use port 3000 if PORT environment variable is not set

app.use(bodyParser.json());

// Create connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'omarid1233456',//instance ip
//     user: 'root',//your-database-user
//     password: '0<Itmiu-dhmp60a(',//your-database-password
//     database: 'datall55654'//your-database-name
// });

// Route to save user data
app.post('/saveUserData', (req, res) => {
    const userData = req.body;

    // Execute SQL query to insert data into the database
    const query = 'INSERT INTO users (name, age, hobby, id) VALUES (?, ?, ?, ?)';
    pool.query(query, [userData.name, userData.age, userData.hobby, userData.id], (error, results) => {
        if (error) {
            console.error('Error saving data:', error);
            res.status(500).send('Failed to save data');
        } else {
            console.log('Data saved successfully');
            res.status(200).send('Data saved successfully');
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
