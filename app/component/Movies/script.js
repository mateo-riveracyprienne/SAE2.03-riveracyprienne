let templateFile = await fetch("./component/Movies/template.html");
let template = await templateFile.text();
let templateLiFile = await fetch("./component/Movies/templateLi.html");
let templateLi = await templateLiFile.text();

let Movies = {};

Movies.format = function (DataMovie, tab) {
  let html = template;
  let movieLi = "";

  if (DataMovie == null){
    html.replace("{{movieList}}", "<p class='movies__error'>Aucun film disponible pour le moment.</p>");
  }
    for (let movie of DataMovie) {
        let li = templateLi;
        li = li.replace("{{title}}", movie.name);
        li = li.replace("{{image}}", movie.image);
        movieLi += li;
    }
  html = html.replace("{{movieList}}", movieLi);
  return html;
};

export { Movies };
