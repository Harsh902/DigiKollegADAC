const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'email_signup',
  password: 'postgres',
  port: 5432,
});

// Create table if it doesn't exist
pool.query(`
  CREATE TABLE IF NOT EXISTS signups (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`).then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
}).catch(err => {
  console.error('Failed to create table:', err);
  process.exit(1);
});

app.post('/api/signup', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email required' });
  try {
    await pool.query('INSERT INTO signups(email) VALUES($1)', [email]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

//app.listen(3000, () => console.log('Server running on port 3000'));