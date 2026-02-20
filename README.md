# API Articles – TP Node.js

Dans ce projet, j’ai développé une API REST en Node.js avec Express en suivant les consignes du niveau débutant.

J’ai commencé par créer un projet vide et configurer l’application. Ensuite, j’ai mis en place une architecture simple avec une séparation entre les routes, le service et la DAO.

J’ai d’abord travaillé avec une DAO en mémoire pour comprendre le fonctionnement, puis j’ai connecté l’API à une base de données MySQL. La base `blog_db` contient une table `articles` avec un identifiant auto-incrémenté, un titre et un contenu.

L’API permet de réaliser toutes les opérations CRUD :
- récupérer tous les articles
- récupérer un article par son id
- créer un article
- modifier un article
- supprimer un article

Les tests ont été effectués avec Postman et MySQL Workbench.


