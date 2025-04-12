const express = require('express');
const sql = require('mssql');
const app = express();
const PORT = process.env.PORT || 3000;

const config = {
  user: 'dubai',
  password: '@dubai350',
  server: '49.43.227.12', // Your public IP
  port: 1433,
  database: 'TestDB',
  options: {
    encrypt: false, // Set to true if you're using SSL
    trustServerCertificate: true
  }
};

app.get('/', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query('SELECT * FROM users');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
