let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let Detail = {};

Detail.format = function (DataMovie) {
  let html = template;
  html.replace("{{title}}", DataMovie.name);
  html.replace("{{image}}", DataMovie.image);
  html.replace("{{synopsis}}", DataMovie.description);
  html.replace("{{realisateur}}", DataMovie.director);
  html.replace("{{annee}}", DataMovie.year);
  html.replace("{{categorie}}", DataMovie.category);
  html.replace("{{age}}", DataMovie.min_age);
  html.replace("{{url}}", DataMovie.trailer);
  return html;
}


export { Detail };
