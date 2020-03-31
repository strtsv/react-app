"use strict";

const Article = use("App/Models/Article");

class ArticleController {
  async index({ request, response, view }) {
    let articles = await Article.query()
      .orderBy("title")
      .fetch();
    return articles.toJSON();
  }

  async create({ request, response, view }) {
    const { title, body } = request.all("title", "body");
    const article = await Article.create({
      title,
      body
    });
    return response.status(201).json(article);
  }

  async show({ params, request, response, view }) {
    const { id } = params;
    const article = await Article.find(id);
    return response.status(201).json(article);
  }

  async delete({ params, request, response }) {
    const article = await Article.find(params.id);
    await article.delete();
    return response.status(200).json({
      message: "Article deletead successfully"
    });
  }
}

module.exports = ArticleController;
