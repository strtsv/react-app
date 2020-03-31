"use strict";

const Route = use("Route");

Route.get('/', () => {
  return { greeting: 'Hello in JSON' }
})

Route.group(() => {
  Route.get("get/:id", "ArticleController.show");
  Route.delete("articles/:id", "ArticleController.delete");
  Route.post("create", "ArticleController.create");
  Route.get("list", "ArticleController.index");
}).prefix("api");
