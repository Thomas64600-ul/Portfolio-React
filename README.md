# [PORTFOIO DE THOMAS]

[![Version du projet](https://img.shields.io/badge/Version-1.0.0-blue.svg)](link-vers-votre-repo-si-applicable)
[![Licence](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/votre-utilisateur/votre-repo/main.yml?branch=main)](https://github.com/votre-utilisateur/votre-repo/actions) ## Table des Matières

- [Description du Projet](#description-du-projet)
- [Technologies Utilisées](#technologies-utilisées)
- [Fonctionnalités](#fonctionnalités)
- [Structure du Projet](#structure-du-projet)
- [Installation et Démarrage](#installation-et-démarrage)
- [Utilisation](#utilisation)
- [Dépannage (Problèmes Fréquents)](#dépannage-problèmes-fréquents)
- [Crédits](#crédits)
- [Licence](#licence)

## Description du Projet

Ce projet est un portfolio personnel développé en React, conçu pour présenter mes compétences en développement web et mes réalisations. Il s'agit d'une application monopage (SPA) intuitive et moderne, mettant en avant mes projets, mes compétences techniques, mon parcours, et mes coordonnées.

## Technologies Utilisées

* **Front-end:**
    * [React](https://react.dev/) (avec Vite pour le build)
    * [HTML5](https://developer.mozilla.org/fr/docs/Web/HTML)
    * [CSS3](https://developer.mozilla.org/fr/docs/Web/CSS)
    * [JavaScript (ES6+)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
    * [Bootstrap 5](https://getbootstrap.com/) pour le responsive design et les composants UI.
    * [React Icons](https://react-icons.github.io/react-icons/) pour les icônes (Font Awesome, etc.).

## Fonctionnalités

* **Design Responsive:** S'adapte à toutes les tailles d'écran (mobile, tablette, desktop).
* **Navigation Fluide:** Barre de navigation avec liens d'ancrage pour un défilement doux vers les différentes sections de la page.
* **Thème Clair/Sombre (Dark/Light Mode):** Bascule rapide entre les thèmes visuels.
* **Section À Propos:** Présentation personnelle et philosophie de développement.
* **Section Compétences:** Liste des technologies maîtrisées, chargées dynamiquement depuis un fichier JSON.
* **Section Projets:** Affichage de mes réalisations avec descriptions et liens vers GitHub (et démos si disponibles).
* **Section Contact:** Formulaire de contact (ou liens vers les réseaux sociaux/email).
* **Animations et Transitions:** Amélioration de l'expérience utilisateur.

## Structure du Projet

Le projet suit une structure de répertoire standard pour les applications React avec Vite :

portfolio/
├── public/                 # Fichiers statiques servis directement (images, JSON de données)
│   ├── assets/             # Contient les fichiers JSON (skills.json, experience.json, etc.)
│   └── image/              # Contient toutes les images utilisées par l'application
├── src/                    # Code source de l'application React
│   ├── components/         # Composants React réutilisables (Navbar, Header, Skills, etc.)
│   │   ├── about/
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── navbar/
│   │   ├── projet/
│   │   ├── skills/
│   │   ├── themetoggle/    # Contient le composant de basculement de thème
│   │   └── title/
│   ├── pages/              # Composants de page (Home, etc.)
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── Home.jsx
│   │   └── main.jsx        # Point d'entrée de l'application
│   ├── .gitigonre          # Fichiers ignorés par Git
│   ├── eslint.config.js    # Configuration ESLint
│   ├── index.html          # Fichier HTML principal
│   ├── package-lock.json   # Dépendances verrouillées
│   ├── package.json        # Dépendances et scripts du projet
│   └── README.md           # Ce fichier
│   └── vite.config.js      # Configuration de Vite
├── README.md
└── ...
## Installation et Démarrage

Suivez ces étapes pour configurer et exécuter le projet localement :

1.  **Cloner le dépôt :**
    ```bash
    git clone https://github.com/Thomas64600-ul/Portfolio-React.git
    cd Portfolio-React
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Démarrer le serveur de développement :**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
    L'application devrait être accessible à `http://localhost:5173` (ou un autre port si 5173 est déjà utilisé).

4.  **Construire pour la production :**
    ```bash
    npm run build
    # ou
    yarn build
    ```
    Cela créera une version optimisée de votre application dans le dossier `dist/`.

## Utilisation

Une fois l'application lancée, vous pouvez naviguer entre les différentes sections du portfolio en utilisant la barre de navigation. Le bouton de thème en haut à gauche vous permet de basculer entre le mode clair et le mode sombre.

## Dépannage (Problèmes Fréquents)

Si vous rencontrez des problèmes, voici quelques solutions courantes :

* **`SyntaxError: JSON.parse: unexpected character at line 1 column 1`**:
    * **Cause:** Le chemin vers un fichier JSON (ex: `skills.json`) est incorrect ou le fichier n'est pas dans le dossier `public/assets`. Le `Workspace` renvoie une page d'erreur HTML au lieu du JSON.
    * **Solution:** Assurez-vous que tous vos fichiers JSON (et images) sont dans `public/assets/` (ou `public/image/` si vous avez un dossier `image` séparé sous `public`), et que les chemins dans votre code (`Workspace('./assets/skills.json')`) sont corrects. Utilisez l'onglet "Network" des outils de développement de votre navigateur pour vérifier les requêtes.

* **`Uncaught TypeError: React.useContext(...) is null` pour `LinkWithRef` ou similaire**:
    * **Cause:** Un composant (souvent un `<Link>` de `react-router-dom`) essaie d'accéder à un contexte de routage qui n'est pas fourni.
    * **Solution:** Si votre application est monopage et n'utilise pas `react-router-dom`, remplacez tous les `<Link to="...">` par des balises `<a>` HTML standard (ex: `<a href="#section">`). Si vous comptez utiliser `react-router-dom`, assurez-vous d'envelopper votre composant `<App />` avec `<BrowserRouter>` dans `main.jsx`.

* **`Failed to resolve import "react-icons/fa"`**:
    * **Cause:** La bibliothèque `react-icons` n'est pas installée.
    * **Solution:** Exécutez `npm install react-icons` (ou `yarn add react-icons`) et redémarrez votre serveur de développement.

* **Image non affichée (`src` incorrect)**:
    * **Cause:** Les images ne sont pas dans le dossier `public` ou le chemin est incorrect (ex: `./image/avatar.png` au lieu de `/image/avatar.png`).
    * **Solution:** Placez toutes les images accessibles directement par `src` dans `public/image/` et utilisez des chemins absolus `/image/nom.png`.

* **Bouton de thème mal positionné (`position: fixed`)** :
    * **Cause:** Votre CSS pour le bouton de thème utilise `position: fixed` qui le place par rapport à la fenêtre du navigateur, et non dans le flux de la Navbar.
    * **Solution:** Supprimez `position: fixed`, `top`, `right` de la classe CSS de votre bouton de thème (`.darklight-btn`) et utilisez les classes Bootstrap (comme `ms-auto`) pour le positionner dans la Navbar.

## Crédits

* Développé par : **[THOMAS PREVOST SANSAC DE TRAVERSAY]**
* Design inspiré de / Icônes de : **[Ajoutez des crédits si applicable, ex: Font Awesome, Unsplash pour les images de fond]**

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

