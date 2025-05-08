// fetchTaskList.js
import pool from '../utility/db.js'; // Use .js extension with ES Modules

export async function fetchTaskList() {
  try {
    const query = `
      SELECT u.name, t.description, utd.status
      FROM user_task_details utd
      JOIN "user" u ON utd.user_id = u.id
      JOIN task t ON utd.task_id = t.id
      LIMIT 10;
    `;

    const result = await pool.query(query);

    console.log("User Tasks:");
    return result.rows
  } catch (err) {
    console.error("❌ Error fetching data:", err);
  }
}
