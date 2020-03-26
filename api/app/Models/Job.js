"use strict";

const Model = use("Model");

class Job extends Model {
  company() {
    return this.belongsTo("App/Models/Company");
  }
}

module.exports = Job;
