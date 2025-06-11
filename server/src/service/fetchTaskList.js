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

export async function fetchUserDetails(emailId) {
  try {
    const query = `
      select * from users where lower(email_id) = '${emailId.toLowerCase()}'
    `;
    console.log(query)

    const result = await pool.query(query);

    console.log("User details",result.rows[0]);
    return result.rows[0]
  } catch (err) {
    console.error("❌ Error fetching data:", err);
  }
}

export async function fetchStandardTaskList(){
  try{
    const query = 'Select * from standard_task'
    const result = await pool.query(query);

    return result.rows
  }catch(err){
    console.error("Error occured while fetching standard task list")
  }
}

export async function updateStandardTaskStatus(userId, date, status) {
  console.log(userId, date, status)
  const query = `
    INSERT INTO users_standard_task_status(user_id, date, status)
    VALUES ($1, $2, $3::JSONB)
  `;
  try {
    const result = await pool.query(query, [userId, date, JSON.stringify(status)]);
    return result;
  } catch (err) {
    console.error("Error occurred while inserting standard task status:", err);
    throw err;
  }
}