// 数据库连接池
const pool = require('./pool');
function query(sql) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, conn) {
            if (err) {
                reject(err)
                console.log('数据库连接失败');
            } else {
                console.log('数据库链接成功');
                conn.query(sql, function (err, result) {
                    if (err) {
                        reject(err)
                        console.log('数据库查询失败');
                    } else {
                        resolve(result)
                        conn.release();
                    }
                })
            }
        })
    })

}
exports.query = query

// var mysql = require('mysql');

// function query(sql) {
//     var connection = mysql.createConnection({
//         host: 'localhost', // 连接的本地mysql
//         user: 'root', // 用户名
//         password: 'root', // 密码
//         port: '3306', // 端口号
//         database: 'game' // 表名
//     });
//     return new Promise((resolve, reject) => {
//         connection.connect(); // 建立链接
//         connection.query(sql, function (err, result) {
//             if (err) {
//                 reject(err.message)
//                 return;
//             }
//             resolve(result)
//             // console.log(result);
//         });
//         connection.end();
//     })

// }
// exports.query = query