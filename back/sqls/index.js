module.exports = {
    addtables:
        "CREATE TABLE IF NOT EXISTS `user_tbl`(" +
        "`user_id` INT UNSIGNED AUTO_INCREMENT," +
        "`user_name` VARCHAR(100) NOT NULL," +
        " `password` VARCHAR(100) NOT NULL," +
        "`submission_date` DATE," +
        "PRIMARY KEY ( `user_id` )" +
        ")ENGINE=InnoDB DEFAULT CHARSET=utf8;",
    addUser(id, name, password, submission_date) {
        return (
            `INSERT INTO user_tbl(user_id, user_name,password ,submission_date)` +
            `VALUES` +
            `(${id}, '${name}','${password}','${submission_date}');`
        )
    },
    getUserList:
        "SELECT * FROM user_tbl;",
    login(name, password) {
        return (
            `SELECT * from user_tbl WHERE user_name='${name}' AND password='${password}';`
        )
    }
}