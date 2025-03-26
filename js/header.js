const introMain = document.querySelector(".intro-main");
const frame = document.querySelector(".frame");
const input = document.querySelector(".input");
const body = document.body;

let flag = false;
let flag1 = false;


function openFrame() {
    if (flag) {
        frame.style.display = "none";
        body.style.overflow = "scroll";
        flag = false;
    }
    else{
        frame.style.display = "block";
        body.style.overflow = "hidden";
        flag = true;
    }
}


function openInput() {
    if (flag1) {
        input.style.display = "none";
        body.style.overflow = "scroll";
        flag1 = false;
    }
    else{
        input.style.display = "block";
        body.style.overflow = "hidden";
        flag1 = true;   
    }
}







