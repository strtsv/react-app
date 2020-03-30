'use strict'

const Article = use("App/Models/Article");

class ArticleController {
  async index ({ request, response, view }) {
    let articles = await Article.query()
      .orderBy("title")
      .fetch();
    return articles.toJSON();
  }

  async create ({ request, response, view }) {
    const { title, body, created } = request.all("title", "body", "created");
    const article = new Article();
    article.fill({ title, body, created });
    await article.save();
    return response.status(201).json(article)
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
    const { id } = params;
    const article = await Article.find(id);
    return response.status(201).json(article)
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = ArticleController
