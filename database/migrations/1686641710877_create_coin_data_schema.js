'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateCoinDataSchema extends Schema {
  up () {
    this.create('create_coin_data', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('create_coin_data')
  }
}

module.exports = CreateCoinDataSchema
