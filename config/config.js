require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: "Rs@2022",
    database: "bokdb",
    host: "10.233.121.1",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  test: {
    username: "root",
    password: "",
    database: "",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: "Rs@2022",
    database: "bokdb",
    host: "10.233.121.1",
    dialect: "postgres",
  },
};
