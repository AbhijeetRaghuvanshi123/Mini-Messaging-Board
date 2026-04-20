import { Client } from "pg";
import '../config/env.js'

const SQL = `CREATE TABLE messages(
    text TEXT,
    username TEXT,
    added TIMESTAMPTZ
    );
    
    INSERT INTO messages(text , username, added) 
    VALUES
      ('Hi There!' , 'Amando', NOW()),
      ('Hello World!', 'Charles', NOW());
    `;

const main = async () => {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done")
}

main();