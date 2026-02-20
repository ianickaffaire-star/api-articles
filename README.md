# API Articles – TP Node.js (Niveau débutant)

## Description

Ce projet consiste à développer une API REST simple en Node.js avec Express.  
L’objectif était de construire l’application progressivement en respectant une architecture claire et structurée :

Routes → Service → DAO → Base de données

Le travail a été réalisé étape par étape conformément aux consignes du niveau débutant.

---

## Travail réalisé

### Configuration de l’application

- Création d’un projet Express vide
- Configuration de l’application dans `app.js`
- Ajout du middleware `express.json()`
- Mise en place de CORS
- Déclaration des routes

---

### Mise en place de l’architecture

Organisation du projet en plusieurs couches :

- `routes` : gestion des requêtes HTTP
- `services` : logique métier
- `dao` : accès aux données

Cette séparation permet de garder un code structuré et cohérent.

---

### Implémentation progressive

Le développement a été réalisé dans l’ordre suivant :

1. Création d’une première route (`GET /articles`)
2. Création du service avec une méthode simple (`getAll`)
3. Création d’une DAO en mémoire (simulation des données)
4. Connexion Routes → Service → DAO
5. Tests avec Postman
6. Ajout progressif des autres fonctionnalités

---

### CRUD complet

L’API permet :

- Récupérer tous les articles
- Récupérer un article par son identifiant
- Créer un article
- Modifier un article
- Supprimer un article

Les codes d’erreur HTTP (400, 404, 500) sont gérés.

---

### Connexion à MySQL

- Création de la base de données `blog_db`
- Création de la table `articles`
- Remplacement de la DAO mémoire par une DAO SQL
- Connexion réelle à MySQL via `mysql2`
- Tests réalisés avec MySQL Workbench et Postman

---

## Objectifs pédagogiques

- Comprendre le fonctionnement d’une API REST
- Mettre en place une architecture structurée
- Séparer les responsabilités dans un projet backend
- Manipuler une base de données MySQL avec Node.js
- Tester une API avec Postman

---

Projet réalisé dans le cadre d’un TP Node.js – Niveau débutant.
