# API Articles – TP Node.js (Niveau débutant)

## 📌 Description du projet

Ce projet consiste à développer une API REST simple en Node.js avec Express.

L’objectif était de construire une application backend étape par étape en respectant une architecture claire :

Routes → Service → DAO → Base de données

Le projet a été réalisé en suivant les consignes niveau débutant.

---

## 🧱 Ce que j’ai réalisé

### ✔ Configuration de l’application
- Création d’un projet Express vide
- Configuration de `app.js`
- Ajout de `express.json()` et `cors`
- Mise en place des routes

---

### ✔ Mise en place de l’architecture
- Dossier `routes`
- Dossier `services`
- Dossier `dao`
- Séparation claire des responsabilités

---

### ✔ Implémentation progressive

1. Création d’une première route (`GET /articles`)
2. Création du Service (logique métier)
3. Création d’une DAO Memory (simulation des données)
4. Connexion Routes → Service → DAO
5. Tests avec Postman
6. Ajout progressif des autres fonctionnalités

---

### ✔ CRUD complet

L’API permet :

- GET tous les articles
- GET un article par ID
- POST créer un article
- PUT modifier un article
- DELETE supprimer un article

---

### ✔ Connexion à MySQL

- Création de la base `blog_db`
- Création de la table `articles`
- Remplacement de la DAO Memory par une DAO SQL
- Connexion réelle à la base de données
- Tests complets avec MySQL Workbench

---

## 🎯 Objectif pédagogique

- Comprendre l’architecture d’une API REST
- Séparer les couches (Routes / Service / DAO)
- Manipuler MySQL avec Node.js
- Implémenter un CRUD complet
- Tester une API avec Postman

---

## 🛠 Technologies utilisées

- Node.js
- Express
- MySQL
- mysql2
- Postman

---

Projet réalisé dans le cadre d’un TP Node.js – Niveau débutant.
