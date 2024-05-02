// Route to get user data
app.get('/getUserData', (req, res) => {
    const name = req.query.name;
    // Execute SQL query to retrieve user data based on the provided name
    const query = 'SELECT * FROM users WHERE name = ?';
    pool.query(query, [name], (error, results) => {
        if (error) {
            console.error('Error fetching user data:', error);
            res.status(500).json({ error: 'Failed to fetch user data' });
        } else {
            if (results.length > 0) {
                res.status(200).json({ exists: true, name: name, userData: results[0] });
            } else {
                res.status(200).json({ exists: false, name: name });
            }
        }
    });
});
