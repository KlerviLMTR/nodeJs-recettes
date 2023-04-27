# nodeJs-recettes

Bienvenue !

## MISE EN ROUTE

## ROUTES API

1. Les ingredients : ingredientController.js

- Lister :
    GET /ingredient
- Afficher 
    GET /ingredient/:id
- Creer :
    POST /ingredient/
- Modifier :
    POST /ingredient/:id?action=UPDATE
- Supprimer
    POST /ingredient/:id?action=DELETE


2. Les recettes recetteController.js

- Lister :
    GET /recette
- Afficher 
    GET /recette/:id
- Creer :
    POST /recette/
- Modifier :
    POST /recette/:id?action=UPDATE
- Supprimer
    POST /recette/:id?action=DELETE

3. Les repas repasController.js

- Lister :
    GET /repas
- Afficher 
    GET /repas/:id
- Creer :
    POST /repas/
- Modifier :
    POST /repas/:id?action=UPDATE
- Supprimer
    POST /repas/:id?action=DELETE

    4. L'utilisateur (mono utilisateur simple, pas d'auth)
    - Afficher sa page :
        GET /utilisateur/
    - Modifier : 
        POST /utilisateur/


## Architecture de l'appli

- Appli decoupee en Controleurs - Services - DAO - Modeles
