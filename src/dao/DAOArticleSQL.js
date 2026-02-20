const connection = require("../config/db");

class DAOArticleSQL {

  findAll(callback) {
    connection.query("SELECT * FROM articles", (err, results) => {
      if (err) {
        console.log("Erreur SQL findAll");
        return callback(err, null);
      }
      callback(null, results);
    });
  }

  findById(id, callback) {
    connection.query(
      "SELECT * FROM articles WHERE id = ?",
      [id],
      (err, results) => {
        if (err) {
          console.log("Erreur SQL findById");
          return callback(err, null);
        }

        if (results.length === 0) {
          return callback(null, null);
        }

        callback(null, results[0]);
      }
    );
  }

  create(article, callback) {
    connection.query(
      "INSERT INTO articles (titre, contenu) VALUES (?, ?)",
      [article.titre, article.contenu],
      (err, results) => {
        if (err) {
          console.log("Erreur SQL create");
          return callback(err, null);
        }

        article.id = results.insertId;
        callback(null, article);
      }
    );
  }

  update(id, article, callback) {
    connection.query(
      "UPDATE articles SET titre = ?, contenu = ? WHERE id = ?",
      [article.titre, article.contenu, id],
      (err, results) => {
        if (err) {
          console.log("Erreur SQL update");
          return callback(err, null);
        }

        if (results.affectedRows === 0) {
          return callback(null, null);
        }

        callback(null, { id, ...article });
      }
    );
  }

  delete(id, callback) {
    connection.query(
      "DELETE FROM articles WHERE id = ?",
      [id],
      (err, results) => {
        if (err) {
          console.log("Erreur SQL delete");
          return callback(err, null);
        }

        if (results.affectedRows === 0) {
          return callback(null, false);
        }

        callback(null, true);
      }
    );
  }
}

module.exports = DAOArticleSQL;
