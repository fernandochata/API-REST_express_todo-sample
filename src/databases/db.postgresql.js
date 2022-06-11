import pg from 'pg';

export const pool = new pg.Pool({
    user: process.env.PG_USER || 'postgres',
    host: process.env.PG_HOST || 'localhost',
    database: process.env.PG_DATABASE || 'test',
    password: process.env.PG_PASSWORD  || 'pswd',
    port: process.env.PG_PORT || 5432,
});
