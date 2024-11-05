const pool = require('./db');

// Ví dụ dùng để thực hiện truy vấn
(async () => {
    const data = (await pool.query("select * from Categories")).rows;
    console.log(data);
})()
