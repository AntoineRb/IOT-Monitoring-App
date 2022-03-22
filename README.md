# IOT monitoring App



# Context :
	Application réalisée dans le cadre d'un test de développeur informatique pour WeBreathe.

- # Sujet :
-   Création d’une BDD répertoriant les modules, leurs détails et l’historique de fonctionnement.
    
-   Création d’un formulaire, pour inscrire de nouveaux modules
    
-   Création d’une page de visualisation de l’état de fonctionnement des modules comme la valeur mesurée actuelle, durée de fonctionnement, nombre de données envoyées, état de marche ainsi qu’un graphique permettant de suivre l’évolution de la valeur mesurée.
    

-   Sur l’interface, des notifications visuelles en cas de dysfonctionnement d’un module.
    
-   Création d’un script de génération automatique d’état des modules.
    
-   Les modules doivent générer des données numériques sur la mesure qu’ils effectuent (température, vitesse, etc.) et en stocker l’historique dans une base de données. Les modules peuvent tomber en panne puis refonctionner, tout cela de façon aléatoire. La génération de l’historique doit continuer lors de la navigation sur l’interface web de votre test.


***
# Conception 

## UML

### Usecase
<img src="./Docs/uml/img/usecase.png"/>

### Diagramme de Classes
<img src="./Docs/uml/img/classes.png"/>

---

## Wireframes

### Page de visualisation des modules
<img src="./Docs/wireframes/modules-page.png"/>

### Page de Visualisation des détails d'un module
<img src="./Docs/wireframes/detail-page.png"/>

### Page de Vérification des logs d'un module
<img src="./Docs/wireframes/logs-page.png"/>

---
# Techno:

  

### languages:

*  ```Javascript``` : Pour sont écosystem riche du côté ```frontend``` et ```backend```.

  

*  ```Typescript``` : Pour renforcer la solidité du code en respectant un ```typage stict```.

  ---

**Frontend** :

*  ```React``` : Pour la création de composants ainsi que l'utilisation du DOM virtuel dans le but de créer une single page application.
* ```Sass``` : Pour éviter la redondance dans l'écriture des fichiers de styles.

---

# Backend :

*  ###  ```NodeJS``` :

	*  ```Koa``` ( **framework** ) : ```léger et modulable``` car on installe seulement les dépendances que l'on utilise.

	*  ```Prisma``` : **( ORM )** Pour la Crétion des models de la **BDD**, créer un **CRUD** facilement ainsi que **générer des requêtes SQL** sécurisées.

	*  ```Postgresql``` :  **( Base de données )** Solide système de gestion de base de données relationel et non relationel.

---




# Mise en place de l'environement de travail :

## 1-Installer NodesJs

* ```NodeJs``` : Obligation pour utiliser **Nodes Package Manager ( npm )**  dans le but d'installer les dépendances liées à ce projet.
	* [Installer NodesJs](https://nodejs.org/en/download/package-manager/) 

## 2-Installer les dépendances du projet

- ### Installer les dépendances liées au Server :
	* Dans votre terminal vous devez exécuter à la racine du projet  la commande ci-dessous dans le but d'installer toutes les dépendances listé dans le fichier **package.son**.
		* `npm install`

- ### Installer les dépendances liées à l'application frontend :
- Rendez-vous  dans le dossier`frontend/src` en suivant cette commande : 
	- `cd frontend/src`

- Vous pouvez maintenant installer les dépendances liées au frontend :
	- `npm install`




## 3-Mise En place de la BDD ( Postgres )

Installation et Création de **DB** et de **ROLE** : https://doc.ubuntu-fr.org/postgresql

[Documentation Officiel de Postgres](https://www.postgresql.org/docs/14/index.html)


## 4-Définir les variables d'environnement 

### Configuration du Serveur et de  la Base De Données
- Créer un fichier ``.env`` à la racine du projet puis y saisir ceci :

    - ``DATABASE_URL="postgresql://USER_NAME:PASSWORD@localhost:5432/DB_NAME?schema=public"``
	    - Cette variable correspond à **l'URL de votre base de données.**
	    - Vous devez remplacer **"USER_NAME:PASSWORD"** par vos identifiants de Base De Données Postgres
        - ``5432`` : Port part défaut de **Postgres**
        - ``DB_NAME`` :  Nom de votre **BDD**
        - ``PORT="8080"``Port sur lequel le serveur démarre (vous pouvez le remplacer si une de vos applications tourne déjà sur celui-ci ).

### Configuration de l'Application frontend
- Vous devez ouvrir  le fichier ``config.ts``  en suivant le chemin ci-dessous:
	- ``frontend/src/services/config.ts`` 
	- Remplacer le port ci-dessous par celui que vous avez définis ultérieurement  dans le fichier ``.env`` 
	``const  BASE_URL = "http://localhost:8080";``
	Cette variable représente **l'URL de base pour effectuer des requêtes au serveur.** Si vous n'avez pas changer le port du serveur vous n'avez pas besoin de modifier cette variable
	

## 5-Initialiser la Base de Données

- Une fois que vous avez mis en place la base de données ainsi que l'environnement, vous pouvez lancer lancer la ``Migration de la Base De Données`` dans le but de **créer les tables, les relations etc...**
	- Pour ce faire vous devez exécuter cette commande dans votre terminal :
	`` npx prisma migrate dev init ``
	- Pour finir on vous demandera de **saisir un nom** pour cette nouvelle migration.
## 6-Mise en route de l'application
- ### Démarrer le serveur :
	- Dans votre terminal exécuter la commande `npm start` à la racine du projet.
- ### Démarrer l'application  :
	- Ouvrir un second  terminal.
	 - Naviguer jusque `frontend/src` en utilisant cette commande `cd frontend/cd`
	 - Une fois dans dans le dossier src vous pouvez démarrer le projet avec cette commande :
		 - `npm start` 
     


