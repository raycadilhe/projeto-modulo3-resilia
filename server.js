const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const otherRoutes = jsonServer.otherRoutes('routes.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.use(otherRoutes)

server.listen(3000, () => { console.log('JSON Server está rodando') })
