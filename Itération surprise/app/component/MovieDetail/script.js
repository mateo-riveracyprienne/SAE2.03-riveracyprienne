let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let Detail = {};

Detail.format = function (MovieDetail) {
  let html = template;
  html = html.replace("{{title}}", MovieDetail.name);
  html = html.replace("{{image}}", MovieDetail.image);
  html = html.replace("{{synopsis}}", MovieDetail.description);
  html = html.replace("{{realisateur}}", MovieDetail.director);
  html = html.replace("{{annee}}", MovieDetail.year);
  html = html.replace("{{categorie}}", MovieDetail.category);
  html = html.replace("{{age}}", MovieDetail.min_age);
  html = html.replace("{{url}}", MovieDetail.trailer);
  return html;
};


export { Detail };
