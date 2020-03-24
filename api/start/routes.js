"use strict";

const Route = use("Route");

Route.group(() => {
  // Route.get("hotels", "HotelController.index").middleware("cors");
  // Route.post("hotels", "HotelController.create").middleware("cors");

  Route.get("hotels", "HotelController.index");
  Route.post("hotels", "HotelController.create");

  Route.post("auth/login", "UserController.login");
  Route.post("auth/register", "UserController.register");
  Route.get("projects", "ProjectController.index").middleware("auth");
  Route.post("projects", "ProjectController.create").middleware("auth");
  Route.delete("projects/all/:id", "ProjectController.destroy").middleware(
    "auth"
  );
  Route.delete("projects/:id", "ProjectController.delete").middleware("auth");
}).prefix("api");

Route.get("hotels", "HotelController.index");
Route.post("hotels", "HotelController.create");
