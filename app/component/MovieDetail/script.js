let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let Detail = {};

Detail.format = function (MovieDetail) {
  let html = template;
  html.replace("{{title}}", MovieDetail.name);
  html.replace("{{image}}", MovieDetail.image);
  html.replace("{{synopsis}}", MovieDetail.description);
  html.replace("{{realisateur}}", MovieDetail.director);
  html.replace("{{annee}}", MovieDetail.year);
  html.replace("{{categorie}}", MovieDetail.category);
  html.replace("{{age}}", MovieDetail.min_age);
  html.replace("{{url}}", MovieDetail.trailer);
  return html;
};


export { Detail };
