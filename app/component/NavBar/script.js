let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();
let templateLiFile = await fetch("./component/NavBar/templateLi.html");
let templateLi = await templateLiFile.text();

let NavBar = {};

NavBar.format = function (hAbout, hHome, hCategory, hProfile) {
  let html = template;
  let list = "";

  html = html.replace("{{hAbout}}", hAbout);
  html = html.replace("{{hHome}}", hHome);
  html = html.replace("{{hCategory}}", hCategory);

  for (let profile of hProfile) {
    let li = templateLi;
    li = li.replace("{{age}}", profile.min_age);
    li = li.replace("{{name}}", profile.name);
    list += li;
  };

  html = html.replace("{{profileList}}", list);
  return html;
};

export { NavBar };
