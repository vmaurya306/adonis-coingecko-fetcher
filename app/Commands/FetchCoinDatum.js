"use strict";

const { Command } = require("@adonisjs/ace");
const CoinData = require("../Models/CoinDatum");
const axios = require("axios");
const Database = require("@adonisjs/lucid/src/Database");

class FetchCoinDatum extends Command {
  static get signature() {
    return "fetch:coin:datum";
  }

  static get description() {
    return "Fetches data from Coingecko API and stores it in the database";
  }

  async handle(args, options) {
    const Database = use("Database");

    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/list?include_platform=true"
      );
      const coinList = response.data;
      // Store the fetched data in the database
      const check = await CoinData.createMany(coinList);

      this.info("Coin data fetched and stored successfully.");
    } catch (error) {
      this.error("Error fetching and storing coin data:", error);
    }
  }
}

module.exports = FetchCoinDatum;
