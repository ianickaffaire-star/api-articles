const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yanickreoumadji",
  database: "blog_db"
});

connection.connect((err) => {
  if (err) {
    console.log("Erreur connexion BDD");
    console.log(err);
  } else {
    console.log("Connecté à MySQL !");
  }
});

module.exports = connection;
