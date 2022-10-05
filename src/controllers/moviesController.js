const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        db.Movie.findAll()
        .then((movies) => {
            return res.render('moviesList',{
                movies
            })
            .catch(error => console.log(error));
        })
    },
    new : (req,res) => {
        const newAct = {
            order: [['release_date', 'DESC']]
        };
        db.Movie.findAll()
        .then((movies) => {
            return res.render('moviesList',{
                movies
            })
            .catch(error => console.log(error));
        })
    },
    recommended : (req,res) => {
        const recom = {
            order: [['release_date', 'DESC']],
            limit: 5
        };
        db.Movie.findAll()
        .then((movies) => {
            return res.render('moviesList',{
                movies
            })
            .catch(error => console.log(error));
        }) 
    },
    detail : (req,res) => {
        db.Movie.findByPk(req.params.id)
        .then(movie => res.render('moviesDetail', {
            movie
        }))
        .catch(error => console.log(error));
    }
}

