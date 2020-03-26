"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class JobSchema extends Schema {
  up() {
    this.create("jobs", table => {
      table.increments();
      table.string('title', 255).nullable().unique().index()
      table.text('description')
      table
        .integer("company_id")
        .unsigned()
        .references("id")
        .inTable("company");
      table.timestamps();
    });
  }

  down() {
    this.drop("jobs");
  }
}

module.exports = JobSchema;
