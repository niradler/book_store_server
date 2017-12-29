const env = require('dotenv').config()
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      user : 'root',
      password : process.env.DB_PASS,
      database : process.env.DB_NAME
    }
  });
export default knex