"use strict";

const Project = use("App/Models/Project");

class ProjectController {
  async index({ auth }) {
    const user = await auth.getUser();
    return await user.projects().fetch();
  }
  async create({ auth, request }) {
    const user = await auth.getUser();
    const { title } = request.all();
    const project = new Project();
    project.fill({ title });
    return await user.projects().save(project);
  }
  async destroy({ auth, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const project = await Project.find(id);
    return await user.projects().delete(project);
  }
  async delete({ auth, params }) {
    const user = await auth.getUser();
    const id = params.id;
    const project = await Project.find(id);
    if (project.id !== user.id) {
      return response.status(403);
    }
    await project.delete();
    return project;
  }
}

module.exports = ProjectController;
