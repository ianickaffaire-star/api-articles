const express = require("express");
const router = express.Router();

const articleService = require("../services/article.service");

router.get("/articles", (req, res) => {

  articleService.getAllArticles((err, articles) => {
    if (err) {
      return res.status(500).json({
        code: "500",
        message: "Erreur serveur",
        data: null
      });
    }

    res.json({
      code: "200",
      message: "Liste récupérée",
      data: articles
    });
  });

});


router.get("/articles/:id", (req, res) => {

  const id = parseInt(req.params.id);

  articleService.getArticleById(id, (err, article) => {

    if (err) {
      return res.status(500).json({
        code: "500",
        message: "Erreur serveur",
        data: null
      });
    }

    if (!article) {
      return res.status(404).json({
        code: "404",
        message: "Article non trouvé",
        data: null
      });
    }

    res.json({
      code: "200",
      message: "Article récupéré",
      data: article
    });

  });

});


router.post("/articles", (req, res) => {

  const newArticle = req.body;

  if (!newArticle.titre || !newArticle.contenu) {
    return res.status(400).json({
      code: "400",
      message: "Données invalides",
      data: null
    });
  }

  articleService.createArticle(newArticle, (err, article) => {

    if (err) {
      return res.status(500).json({
        code: "500",
        message: "Erreur serveur",
        data: null
      });
    }

    res.status(201).json({
      code: "201",
      message: "Article créé",
      data: article
    });

  });

});


router.put("/articles/:id", (req, res) => {

  const id = parseInt(req.params.id);
  const updatedData = req.body;

  articleService.updateArticle(id, updatedData, (err, article) => {

    if (err) {
      return res.status(500).json({
        code: "500",
        message: "Erreur serveur",
        data: null
      });
    }

    if (!article) {
      return res.status(404).json({
        code: "404",
        message: "Article non trouvé",
        data: null
      });
    }

    res.json({
      code: "200",
      message: "Article mis à jour",
      data: article
    });

  });

});


router.delete("/articles/:id", (req, res) => {

  const id = parseInt(req.params.id);

  articleService.deleteArticle(id, (err, success) => {

    if (err) {
      return res.status(500).json({
        code: "500",
        message: "Erreur serveur",
        data: null
      });
    }

    if (!success) {
      return res.status(404).json({
        code: "404",
        message: "Article non trouvé",
        data: null
      });
    }

    res.json({
      code: "200",
      message: "Article supprimé",
      data: null
    });

  });

});


module.exports = router;
