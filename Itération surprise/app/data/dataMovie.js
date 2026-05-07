// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "..";//"https://mmi.unilim.fr/~riveracyprien1/SAE2.03-riveracyprienne"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

DataMovie.requestMovies = async function(form){
    let config = {
        method: "POST", // méthode HTTP à utiliser
        body: form // données à envoyer sous forme d'objet FormData
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies", config);
    // answer est la réponse du serveur à la requête fetch.
    // On utilise ensuite la méthode json() pour extraire de cette réponse les données au format JSON.
    // Ces données (data) sont automatiquement converties en objet JavaScript.
    let data = await answer.json();
    // Enfin, on retourne ces données.
    return data;
}

DataMovie.requestMoviesDetails = async function(id){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readMovieDetails&id=" + id);
    let data = await answer.json();
    return data;
}

export { DataMovie };
