const Router = require('@koa/router');
const DB = require('../../utils/query.js')
let router = new Router();
router.get('/', async ctx => {
    let userInfo = await DB.query(`SELECT * from user_tbl WHERE user_name='${ctx.query.userName}' AND password='${ctx.query.passWord}';`)
    ctx.response.body = {
        code: userInfo.length >= 1 ? 200 : 401,
        data: {
            userInfo
        }
    }
})
module.exports = router