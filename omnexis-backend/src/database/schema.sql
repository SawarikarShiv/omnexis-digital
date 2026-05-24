CREATE TABLE IF NOT EXISTS register_users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    phone VARCHAR(15) UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'user',
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO register_users 
(full_name, email, phone, password, role)
VALUES 
('Admin User', 'admin@gmail.com', '9999999999', '$2a$10$YourHashedPasswordHerePleaseChangeIt123', 'admin')
ON CONFLICT DO NOTHING;

INSERT INTO register_users
(full_name, email, phone, password, role)
VALUES
('Shivshankar Sawarikar', 'sawarikarshivshankar365@gmail.com', '9021216925', '$2a$10$YourHashedPasswordHerePleaseChangeIt123', 'user')
ON CONFLICT DO NOTHING;