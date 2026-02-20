

class IDAOArticle {

  findAll() {
    throw new Error("La méthode findAll doit être implémentée");
  }

  findById(id) {
    throw new Error("La méthode findById doit être implémentée");
  }

  create(article) {
    throw new Error("La méthode create doit être implémentée");
  }

  update(id, article) {
    throw new Error("La méthode update doit être implémentée");
  }

  delete(id) {
    throw new Error("La méthode delete doit être implémentée");
  }
}

module.exports = IDAOArticle;
