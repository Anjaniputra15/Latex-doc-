import { Pool } from 'pg';

let pool: Pool;

if (!pool) {
  pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    port: parseInt(process.env.PGPORT || '5432', 10),
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    // ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
    ssl: { rejectUnauthorized: false },
  });
}

export default pool;
