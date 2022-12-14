const Koa = require('koa')
const app = new Koa()
const Router = require("@koa/router")
const router = new Router()//引入路由，并实例化路由
const config = require('./utils/config')
const bodyParser = require('koa-bodyparser') //解析post接口的body参数
const DB = require('./utils/query.js')
const sqls = require('./sqls/index.js')
let login = require('./views/Login/index.js')
let user = require('./views/User/index.js')
app.use(bodyParser())
//示例
router.get('/', async ctx => {
    let tables = await DB.query('show tables')
    ctx.response.body = {
        code: 200,
        data: {
            url: ctx.request.url,
            tables: tables
        }
    }
}).get('/home', ctx => {
    let url = ctx.url
    // 从上下文的request对象中获取
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring

    // 从上下文中直接获取
    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring

    ctx.body = {
        code: 200,
        data: {
            url,
            req_query,
            req_querystring,
            ctx_query,
            ctx_querystring
        }
    }
}).get('/about', ctx => {
    ctx.response.body = {
        code: 200,
        data: {
            url: ctx.request.url
        }
    }
}).post('/testpost', ctx => {
    ctx.response.body = {
        code: 200,
        data: ctx.request.body
    }
}).get('/addusertable', async ctx => {
    let res = await DB.query(sqls.addtables)
    ctx.response.body = {
        code: 200,
        data: {
            res
        }
    }
})

router.use('/login', login.routes())// 加载login子路由
router.use('/user', user.routes())// 加载login子路由

app.use(router.routes(), router.allowedMethods())//app.use([地址],中间件|路由|函数体),安装中间件、路由、接受一个函数

//监听端口号
app.listen(config.port, () => {
    console.log(`listening on http://localhost:${config.port}`);
})