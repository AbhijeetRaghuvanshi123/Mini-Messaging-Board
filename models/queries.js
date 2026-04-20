import { pool } from "./pool.js";

const getMessages = async () => {
    const rows = await pool.query("SELECT DISTINCT ON (username) username, added FROM messages ORDER BY username, added DESC");
    return rows;
}

const addMessage = async ( message) => {
    await pool.query("INSERT INTO messages (text, username, added) VALUES( $1, $2, NOW())", [message.text, message.user]);
}

const getMessage = async ( user ) => {
    const rows = await pool.query("SELECT * FROM messages WHERE username = $1", [`${user}`]);
    return rows.rows;
}

const db = { getMessages, addMessage, getMessage};
export default db;