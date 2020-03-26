"use strict";

const Company = use("App/Models/Company");

class CompanyController {
  async index({ request, response, view }) {
    let companies = await Company.query()
      .orderBy("title")
      .fetch();
    return companies.toJSON();
  }
  async create({ request,response }) {
    const { title, description } = request.all("title", "description");
    const company = new Company();
    company.fill({ title, description });
    await company.save();
    return response.status(201).json(company)
  }
}

module.exports = CompanyController;
