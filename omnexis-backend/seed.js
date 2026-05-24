require('dotenv').config();
const pool = require('./src/config/db');
const bcrypt = require('bcryptjs');

async function seed() {
  try {
    const hash1 = await bcrypt.hash('Admin@123', 10);
    const hash2 = await bcrypt.hash('Shiv@123', 10);

    const query = `
      INSERT INTO register_users (full_name, email, phone, password, role)
      VALUES 
      ('Admin User', 'admin@gmail.com', '9999999999', $1, 'admin'),
      ('Shivshankar Sawarikar', 'sawarikarshivshankar365@gmail.com', '9021216925', $2, 'user')
      ON CONFLICT (email) DO UPDATE SET password = EXCLUDED.password;
    `;

    await pool.query(query, [hash1, hash2]);
    console.log('Database updated successfully with hashed passwords!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await pool.end();
  }
}

seed();
