# Collection Savons

![Logo](./public/assets/boutique-logo.png)

Bienvenue sur le projet **Collection Savons** ! Il s'agit d'un site web de démo construit avec React, présentant une collection de savons inspirée par l'histoire de France.

## Description

Ce projet est une application web conçue pour présenter et vendre des savons de luxe. Le site utilise React pour la gestion de l'interface utilisateur, Redux pour la gestion de l'état global de l'application, et React Router pour la navigation. Les fonctionnalités incluent une galerie de produits, un panier d'achat, une page de contact, et des pages d'inscription et de connexion factices.

## Fonctionnalités

- **Accueil** : Présentation de la nouvelle collection de savons.
- **Produits** : Liste et filtre des produits disponibles.
- **Détails du produit** : Informations détaillées sur chaque produit.
- **Panier** : Gestion du panier d'achat avec ajout, suppression et mise à jour des quantités.
- **Inscription et Connexion** : Formulaires factices pour la gestion des utilisateurs.
- **À propos** : Informations sur la boutique et son savoir-faire.
- **Contact** : Formulaire de contact pour les utilisateurs.

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-utilisateur/soaps.git
   cd soaps
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Créez un fichier `.env` à la racine du projet et ajoutez la ligne suivante pour définir l'URL publique :
   ```plaintext
   PUBLIC_URL=https://votre-utilisateur.github.io/soaps
   ```

## Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter les scripts suivants :

- `npm start` : Lance l'application en mode développement.
- `npm run build` : Compile l'application pour la production dans le dossier `build`.
- `npm run deploy` : Déploie l'application sur GitHub Pages.

## Déploiement sur GitHub Pages

1. Créez un fichier `gh-pages` dans votre dépôt :

   ```bash
   npm install --save gh-pages
   ```

2. Ajoutez les lignes suivantes dans votre fichier `package.json` :

   ```json
   "homepage": "https://votre-utilisateur.github.io/soaps",
   "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
   }
   ```

3. Déployez l'application :

   ```bash
   npm run deploy
   ```

4. Dans les paramètres de votre dépôt GitHub, allez dans la section "Pages" et configurez la source pour utiliser la branche `gh-pages` et le dossier `/root`.

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :

1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalite`).
3. Commitez vos changements (`git commit -am 'Ajoute une nouvelle fonctionnalité'`).
4. Pushez votre branche (`git push origin feature/ma-fonctionnalite`).
5. Ouvrez une Pull Request.

## Auteur

Ce projet a été réalisé par [Votre Nom]. Pour toute question ou problème, n'hésitez pas à ouvrir une issue dans le dépôt GitHub.

---

Merci à tous ceux qui ont contribué à ce projet et aux développeurs des outils utilisés dans cette application.
