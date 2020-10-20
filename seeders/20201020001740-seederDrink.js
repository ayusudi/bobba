'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      {"name":"Ice Bobba Tea","rating":3,"from":"Tokyo","recipe_created":"2015-10-22", createdAt: new Date(), updatedAt: new Date() },
      {"name":"Hot Bobba Tea","rating":1,"from":"Taiwan","recipe_created":"2017-12-12", createdAt: new Date(), updatedAt: new Date() },
      {"name":"Ice Marsmallow Milk Tea Bobba","rating":5,"from":"China","recipe_created":"2020-01-11", createdAt: new Date(), updatedAt: new Date() },
      {"name":"Ice Milk Brown Sugar Bobba","rating":5,"from":"Taiwan","recipe_created":"2020-08-17", createdAt: new Date(), updatedAt: new Date() },
      {"name":"Hot Sweet Milk Bobba","rating":4,"from":"Tokyo","recipe_created":"2018-08-01", createdAt: new Date(), updatedAt: new Date() }
  ]
  return queryInterface.bulkInsert('Drinks', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Drinks', null, {});
  }
};
