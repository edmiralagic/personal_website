function createDot(x, y) {
    let elem = document.createElement("div");
    if(Math.floor(Math.random()*10) > 6) {
        elem.setAttribute("class", "medium-star");
    } else {
        elem.setAttribute("class", "small-star");
    }
    elem.setAttribute("style", "left:" + x + "px;top:" + y + "px;");
    document.getElementsByTagName("body")[0].appendChild(elem);
    elem.animate({left: "+=500"}, 2000);
    elem.animate({left: "-=300"}, 1000);
    return elem;
}

function anotherDot() {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * (window.innerHeight/5));
    createDot(x,y);
}

for(let i = 0; i < 200; i++) {
    anotherDot();
}

