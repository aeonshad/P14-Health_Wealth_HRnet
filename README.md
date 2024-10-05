# HRnet

## Description

HRnet est une application de gestion des ressources humaines qui permet de gérer facilement les employés. Elle offre des fonctionnalités telles que l'ajout, la suppression et la validation des employés, ainsi qu'une interface utilisateur intuitive.

## Table des matières

-   [Fonctionnalités](#fonctionnalités)
-   [Dépendances utilisées](#dépendances-utilisées)
-   [Structure du projet](#structure-du-projet)
-   [Installation](#installation)
-   [Utilisation](#utilisation)

## Fonctionnalités

-   Gestion des employés : Ajoutez, supprimez et modifiez les informations des employés.
-   Validation des formulaires : Utilisation de Zod pour la validation des données.
-   Interface utilisateur réactive : Conçue avec Tailwind CSS pour une expérience utilisateur fluide.
-   Système de cache pour le stockage des données des employés.
-   Affichage des messages d'erreur dans les formulaires.
-   Table avec recherche et tri intégrés.

## Dépendances utilisées

-   **React** : Bibliothèque JavaScript pour construire l'interface utilisateur.
-   **Redux** : Gestion de l'état de l'application.
-   **Redux Persist** : Persistant l'état de Redux à travers les rechargements de page.
-   **React Router** : Navigation entre les différentes pages de l'application.
-   **Tailwind CSS** : Framework CSS pour un design moderne et réactif.
-   **React Hook Form** : Gestion des formulaires.
-   **Zod** : Validation des schémas de données.
-   **UUID** : Génération d'identifiants uniques pour les employés.
-   **React Ease Modal** : Gestion des modales dans l'application.
-   **React Dropdown Select** : Composant de sélection pour une meilleure interface utilisateur.
-   **Lucide React** : Bibliothèque d'icônes React.
-   **Next Themes** : Gestion des thèmes (clair/sombre) dans l'application.
-   **React Datepicker** : Sélecteur de date pour une meilleure expérience utilisateur.
-   **React Data Table Component** : Composant pour afficher des tableaux de données de manière performante.

## Installation

1. Clone le dépôt :

    ```bash
    git clone https://github.com/aeonshad/P14-Health_Wealth_HRnet
    ```

2. Accédez au répertoire du projet :

    ```bash
    cd hrnet
    ```

3. Installez les dépendances :
    ```bash
    npm install
    ```

## Utilisation

Pour démarrer l'application en mode développement, exécutez :

```bash
npm run start
```

Ouvrez votre navigateur et accédez à [http://localhost:3000](http://localhost:3000).

