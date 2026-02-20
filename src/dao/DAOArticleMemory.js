class DAOArticleMemory {

  constructor() {
    this.articles = [
      { id: 1, titre: "Article 1", contenu: "Contenu article 1" },
      { id: 2, titre: "Article 2", contenu: "Contenu article 2" }
    ];
  }

  findAll() {
    return this.articles;
  }

  findById(id) {
    return this.articles.find(article => article.id === id);
  }

  create(article) {
    this.articles.push(article);
    return article;
  }

  update(id, updatedData) {
    const article = this.findById(id);

    if (!article) return null;

    article.titre = updatedData.titre || article.titre;
    article.contenu = updatedData.contenu || article.contenu;

    return article;
  }

  delete(id) {
    const index = this.articles.findIndex(article => article.id === id);

    if (index === -1) return false;

    this.articles.splice(index, 1);
    return true;
  }
}

module.exports = DAOArticleMemory;
