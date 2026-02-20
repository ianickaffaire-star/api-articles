const DAOArticleSQL = require("../dao/DAOArticleSQL");

class ArticleService {

  constructor() {
    this.dao = new DAOArticleSQL();
  }

  getAllArticles(callback) {
    this.dao.findAll(callback);
  }

  getArticleById(id, callback) {
    this.dao.findById(id, callback);
  }

  createArticle(article, callback) {
    this.dao.create(article, callback);
  }

  updateArticle(id, article, callback) {
    this.dao.update(id, article, callback);
  }

  deleteArticle(id, callback) {
    this.dao.delete(id, callback);
  }
}

module.exports = new ArticleService();
