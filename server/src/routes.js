const express = require('express')
const multer = require('multer')
const uploadConfig = require('../config/upload')
const Uptime = require('./services/uptime')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')


const routes = express.Router(); 
const upload = multer(uploadConfig)

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)
// req.headers = Acessar Header da requisição.

routes.get('/', (req, res) => {
    
    Uptime.leitura()
    .then((data) => {

        res.render('index', {
            online: Math.abs(data - 100).toFixed(2),
            offline: data,
        })
        
    })
    .catch((err) => {
        console.log(err);
    })
   
})

routes.post('/sessions', SessionController.store)

routes.get('/spots', SpotController.index)
routes.post('/spots', SpotController.store) //upload.single('thumbnail') ,

routes.get('/dashboard', DashboardController.show)

routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes;

