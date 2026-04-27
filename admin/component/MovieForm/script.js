let templateFile = await fetch('./component/MovieForm/template.html');
let template = await templateFile.text();

let Form = {};

Form.format = function(){
    let html= template;
    return html;
}


export {Form};

