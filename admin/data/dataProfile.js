let HOST_URL = "..";

let DataProfile = {};

DataProfile.add = async function(form){
    let config = {
        method: "POST", // méthode HTTP à utiliser
        body: form // données à envoyer sous forme d'objet FormData
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addProfile", config);
    let data = await answer.json();
    return data;
}

export { DataProfile };