const { Drink } = require('../models/index')
const bintang = require('../helpers/bintang')
const dateBahasa = require('../helpers/dateBahasa')

class DrinkController {
  static listBobba(req, res) {
    Drink.findAll()
      .then(data => {
        res.render('home', { drinks: data, dateBahasa, bintang })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static formAdd(req, res) {
    let errors
    if (req.query.errors) {
      errors = JSON.parse(req.query.errors)
    }
    res.render('formAdd', { errors })
  }

  static createBobba(req, res) {
    let { name, rating, from, recipe_created } = req.body
    Drink.create({ name, rating, from, recipe_created })
      .then(data => res.redirect('/'))
      .catch(err => {
        if (err.name === 'SequelizeValidationError') {
          let arrayOfErr = []
          err.errors.forEach(el => {
            arrayOfErr.push(el.message)
          })
          res.redirect(`/add?errors=${JSON.stringify(arrayOfErr)}`)
        } else {
          res.send(err)
        }
      })
  }

  static deleteById(req, res) {
    Drink.destroy({
      where : {
        id : +req.params.id
      },
      individualHooks : true
    })
    .then(data => res.redirect('/'))
    .catch(err => {
      res.send(err)
    })
  }
}


module.exports = DrinkController