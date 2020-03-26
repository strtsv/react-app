'use strict'

const Model = use('Model')

class Company extends Model {
  jobs() {
    return this.hasMany("App/Models/Job")
  }
}

module.exports = Company
