"use strict";

const Route = use("Route");

Route.group(() => {
  Route.get("companies", "CompanyController.index");
  Route.post("companies/create", "CompanyController.create");

  Route.post("auth/login", "UserController.login");
  Route.post("auth/register", "UserController.register");
  Route.get("jobs", "JobController.index");
  Route.post("jobs/create", "JobController.create");
  Route.delete("jobs/all/:id", "JobController.destroy").middleware("auth");
  Route.delete("projects/:id", "ProjectController.delete").middleware("auth");
}).prefix("api");

Route.get("get/:id", "ArticleController.show");
Route.post("create", "ArticleController.create");
Route.get("list", "ArticleController.index");
