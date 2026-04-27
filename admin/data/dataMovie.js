let HOST_URL = "https://mmi.unilim.fr/~riveracyprien1/SAE2.03-riveracyprienne";

let DataMovie = {};

DataMovie.add = async function(){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addMovie");
    let data = await answer.json();
    return data;
}

export { DataMovie };