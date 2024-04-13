const mysql = require('mysql2')

export const mysqlpool = mysql.createPool ({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.query; // รับ ID ของรายการที่ต้องการลบ

    try {
      const promisePool = mysqlpool.promise();
      // ดำเนินการลบข้อมูลจากฐานข้อมูล
      const [result] = await promisePool.query(
        'DELETE FROM vdo WHERE id = ?', [id]
      );

      // ตรวจสอบว่าลบข้อมูลสำเร็จหรือไม่
      if (result.affectedRows > 0) {
        res.status(200).json({ message: 'Data deleted successfully' });
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
    } catch (error) {
      console.error('Error deleting data:', error);
      res.status(500).json({ message: 'Failed to delete data' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
