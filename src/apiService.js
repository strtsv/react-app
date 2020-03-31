import axios from "axios";

export default class ApiService {
  constructor() {
    this.http = axios.create({
      baseURL: "http://localhost:3333/api"
    });
  }

  getArticles = async () => {
    return this.http.get(`/list`);
  };

  storeArticle = async data => {
    return this.http.post(`/article`, data);
  };

  deleteArticle = async id => {
    return this.http.delete(`/article/${id}`);
  };
}
