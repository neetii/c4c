from database import get_connection

def create_tables():
    conn = get_connection()
    cursor = conn.cursor()
    
    # Create users table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS contact_submissions (
            id SERIAL PRIMARY KEY,
            first_name VARCHAR(100) NOT NULL,
            last_name VARCHAR(100) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    ''')

    # Create donations table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS donations (
            id SERIAL PRIMARY KEY,
            amount DECIMAL(10, 2) NOT NULL,
            donor_name VARCHAR(255),
            donor_email VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    ''')

    conn.commit()
    cursor.close()
    conn.close()