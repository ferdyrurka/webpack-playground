import '../assets/css/app.css';

export function init() {
    console.log("init app :)");
}

export function initHtml() {
    const h1 = document.createElement('h1');
    h1.innerText = "Hello Webpack";

    document.body.append(h1);
}
