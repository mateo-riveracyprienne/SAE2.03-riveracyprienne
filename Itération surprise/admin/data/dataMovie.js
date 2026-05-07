let HOST_URL = "..";

let DataMovie = {};

DataMovie.add = async function(form){
    let config = {
        method: "POST", // méthode HTTP à utiliser
        body: form // données à envoyer sous forme d'objet FormData
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addMovie", config);
    let data = await answer.json();
    return data;
}

export { DataMovie };