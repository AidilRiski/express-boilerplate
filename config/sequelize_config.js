require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: 'postgres',
  },
  production: {
    username: process.env.PRODUCTION_POSTGRES_USER,
    password: process.env.PRODUCTION_POSTGRES_PASSWORD,
    database: process.env.PRODUCTION_POSTGRES_DB,
    host: process.env.PRODUCTION_POSTGRES_HOST,
    port: process.env.PRODUCTION_POSTGRES_PORT,
    dialect: 'postgres',
  },
}