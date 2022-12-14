const Router = require('@koa/router');
const DB = require('../../utils/query.js')
const sqls = require('../../sqls/index.js')
const dayjs = require('dayjs')
let router = new Router();
router.get('/getList', async ctx => {
    let userList = await DB.query(sqls.getUserList)
    ctx.response.body = {
        code: 200,
        data: {
            userList
        }
    }
})
router.post('/add', async ctx => {
    let { id, name, password } = ctx.request.body
    let date = dayjs().format('YYYY-MM-DD')
    let max = await DB.query('select max(user_id) from user_tbl') //查询最大值
    let res = await DB.query(sqls.addUser(id ? id : Object.values(max[0])[0] + 1, name, password, date))
    ctx.response.body = {
        data: {
            code: 200,
            res
        }
    }
})

module.exports = router