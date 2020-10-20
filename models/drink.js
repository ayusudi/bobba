'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drink extends Model {
  };
  Drink.init({
    name: { 
      type : DataTypes.STRING,
      notEmpty : true,
      validate : {
        notEmpty : {
          msg : 'Name is required.'
        },
        len : {
          msg : 'Name length minimum 5',
          args : [5]
        },
        nameIncludeBobbaHotIce(value){
          let bobba = false
          let hotIce = false
          if (value.includes('bobba')) {
            bobba = true
          }
          if (value.includes('hot') || value.includes('ice') ) {
            hotIce = true
          }
          if (!bobba || !hotIce) {
            throw 'Name must include Bobba and Hot/Ice'
          }
        }
      }
    },
    rating: {
      validate : {
        notEmpty : {
          msg : 'Rating required as number.'
        },
        min : {
          args : 1,
          msg : 'Minimum rating 1'
        },
        max : {
          args : 5,
          msg : 'Maximum rating 5'
        }
      },
      type : DataTypes.INTEGER
    },
    from: {
      validate : {
        notEmpty : {
          msg : 'From is required.'
        },
      },
      type : DataTypes.STRING
    },
    recipe_created: {
      validate : {
        notEmpty : {
          msg : 'Created recipe is required.'
        },
        isBefore : { 
          args : new Date().toISOString().split('T')[0],
          msg : 'Date of Created recipe must before today'
        }
      },
      type :DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Drink',
    hooks : {
      beforeDestroy : (instance, option) => {
        if (instance.rating > 1){
          throw 'Only rating 1 can be delete'
        }
      }
    }
  });
  return Drink;
};

