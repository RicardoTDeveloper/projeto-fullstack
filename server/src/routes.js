const express = require('express')
const multer = require('multer')
const uploadConfig = require('../config/upload')


const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')


const routes = express.Router(); 
const upload = multer(uploadConfig)

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

routes.post('/sessions', SessionController.store)

routes.post('/spots', upload.single('thumbnail') , SpotController.store)

module.exports = routes;

