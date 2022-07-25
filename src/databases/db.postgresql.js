
import pg from 'pg';
import 'dotenv/config';

export const pool = new pg.Pool({
    user: process.env.PG_USER || 'fernando',
    host: process.env.PG_HOST || 'localhost',
    database: process.env.PG_DATABASE || 'postgres',
    password: process.env.PG_PASSWORD  || 'pswd',
    port: process.env.PG_PORT || 5432,
    ssl: { rejectUnauthorized: false  }
});

