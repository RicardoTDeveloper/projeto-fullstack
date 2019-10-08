const Spot = require('../models/Spot')

module.exports = {

    async index(req, res){

        const {tech} = req.query

        const spots = await Spot.find({techs: tech})

        return res.json(spots)
        
    },

    async store(req, res){

        // const {filename} = req.file
        const {company, techs, price, thumbnail} = req.body
        const {user_id} = req.headers

        const spot = await Spot.create({
            user: user_id,
            thumbnail,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot)
    }
};