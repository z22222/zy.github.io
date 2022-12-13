const mysql = require("mysql");
const pool = mysql.createPool({
    host: "127.0.0.1", // 主机地址
    port: 3306,
    database: "game", // 数据库名字
    user: "root", // 连接数据库的用户名
    password: "root", // 连接数据库密码
    connectionLimit: 20, // 连接池最大连接数
    multipleStatements: true // 允许执行多条sql语句
})
module.exports = pool;
