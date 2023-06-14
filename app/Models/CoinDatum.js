"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class CoinDatum extends Model {
  static get table() {
    return "coin_data";
  }

  static get primaryKey() {
    return "id";
  }

  static get createdAtColumn() {
    return "createdAt";
  }

  static get updatedAtColumn() {
    return "updatedAt";
  }
}

CoinDatum.columns = {
  id: "string",
  symbol: "string",
  name: "string",
  platforms: "json",
};

module.exports = CoinDatum;
