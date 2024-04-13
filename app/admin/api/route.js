import { NextResponse } from "next/server";
const mysql = require('mysql2')
export const mysqlpool = mysql.createPool ({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

export async function POST(request) {
  try {
    const data = await request.json();
    const sql = `INSERT INTO vdo (title, headline, content, youtube) VALUES (?, ?, ?, ?)`;
    const promisePool = mysqlpool.promise();
    const [result] = await promisePool.query(sql, [data.title, data.headline, data.content, data.youtube]);
    return NextResponse.json({ success: true, message: 'successfully' });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json({ success: false, message: 'Error adding data to database' });
  }
}
