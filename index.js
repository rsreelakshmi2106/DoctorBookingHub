const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router('db.json')

const middleware = jsonServer.defaults()

const port=3000

server.use(middleware)
server.use(router)

server.listen(port,()=>{
    console.log('Doctor Appointment details on port '+port);
})