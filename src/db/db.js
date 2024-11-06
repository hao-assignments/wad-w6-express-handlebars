
const { Pool } = require('pg');

const pool = new Pool({
    user: "quanlybanhang_user",
    host: "dpg-csli3u3tq21c73ej3270-a.oregon-postgres.render.com",
    database: "quanlybanhang",
    password: "tiRhnLNRsiIlq5A0nbyu6xBFWvNjt0zc",
    port: 5432,
    ssl: {
        rejectUnauthorized: false // Render yêu cầu SSL
    }
});

module.exports = pool;
