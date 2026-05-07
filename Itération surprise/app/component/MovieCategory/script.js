let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let Category = {};

Category.format = function (handler) {
  let html = template;
  html = html.replace('{{handler}}', handler);
  return html;
};

export { Category };
