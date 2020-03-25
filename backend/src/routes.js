const express = require('express')
const routes = express.Router()

const OngController = require('./controllers/OngController')
const IncidentController = require ('./controllers/IncidentController')
const ProfileController = require ('./controllers/ProfileController')
const SectionController = require ('./controllers/SectionController')

routes.post('/sessions', SectionController.create)
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)
routes.get('/profile', ProfileController.index)
routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes