const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        db.Actors.findAll()
        .then((actors) => {
            return res.render('actorsList',{
                actors
            })
            .catch(error => console.log(error))
        })
    },
    detail : (req,res) => {
        db.Actor.findByPk(req.params.id)
        .then(actor => res.render('actorsDetail', {
            actor
        }) )
        .catch(error => console.log(error))
    }
}