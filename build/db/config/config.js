'use strict';

var dotenv = require('dotenv');

dotenv.config();

var config = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    operatorsAliases: false
  },
  test: {
    username: process.env.db_username_test,
    password: process.env.db_password_test,
    database: 'ah_db_test',
    host: 'localhost',
    dialect: 'postgres'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres"
  }
};

module.exports = config;