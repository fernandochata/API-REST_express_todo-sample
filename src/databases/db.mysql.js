import  mysql from 'mysql2'
import 'dotenv/config';

export const conn = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.MYSQL_DATABASE || 'test',
  ssl: { rejectUnauthorized: false }
}).promise()