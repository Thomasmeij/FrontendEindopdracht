**Netflix-Clone: Installatie Handleiding**

Dit project is een frontend clone van netflix. Het is geschreven in Javascript en maakt gebruik van de REACT, Firebase en Styled-Components. 
De applicatie bevat vier pagina's login, signup, home en content. De Contentpagina is alleen toegankelijk voor geregistreerde gebruikers.
Het opslaan en registreren van gebruikers wordt afgehandeld door firebase. De authenticatie wordt begehouden op elke pagina.
Tot slot wordt via The Movie DB API films en series plus beschrijving weergegeven op de contentpagina.
De styling is een mix van css en styling components.

**Screenshot:**
![img.png](img.png)


**De applicatie is gebouwd met behulp van:**
* [React.js](https://reactjs.org/)
* [Firebase](https://firebase.google.com/)
* [node.js](https://nodejs.org/)


###Installatie van je eigen project:\
1. Maak een eigen account aan op https://www.themoviedb.org/
2. Vraag hier je eigen API key op.
3. Clone deze repo:
```sh
https://github.com/Thomasmeij/FrontendEindopdracht.git
```
4. Installeer alle NPM packages
```sh
npm install
```
5. Maak een .env.local bestand aan onder de directory netflixproject
6. Plaats je eigen API key in dit bestand:
```js
REACT_APP_TMDB_API_KEY= "mijn_api_key"
```
7. Aanmaken van een account op de applicatie
    - optie 1: Creëer een eigen account op de signup-page
    - optie 2: Met de volgende login-gegevens kan worden ingelogd op de applicatie:
```
    - Login email: example@development.com
    - Password: password
```
**Optional:**
Het is mogelijk om een eigen backend te gebruiken










