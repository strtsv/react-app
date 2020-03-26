"use strict";

const Job = use("App/Models/Job");

class JobController {
  async index({ request, response, view }) {
    let jobs = await Job.query()
      .orderBy("title")
      .fetch();
    return jobs.toJSON();
  }

  async create({ request,response }) {
    const { title, description, company_id } = request.all("title", "description", "company_id");
    const job = new Job();
    job.fill({ title, description, company_id });
    await job.save();
    return response.status(201).json(job)
  }
  async store({ request, response }) {}
  async show({ params, request, response, view }) {}
  async edit({ params, request, response, view }) {}
  async update({ params, request, response }) {}
  async destroy({ params, request, response }) {}
}

module.exports = JobController;
