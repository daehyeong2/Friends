const btn = document.querySelector(".nav button");
const info = document.querySelector(".introduction-left__info");
const infoItems = document.querySelectorAll(".introduction-left__info span");
const tmp = infoItems[2].innerText;
let Nightmode = false

function handelNightModeClick(){
    if(Nightmode){
        document.body.style.backgroundColor = "rgba(36, 154, 148, 0.1)";
        Nightmode=false;
    } else {
        document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
        Nightmode=true;
    }
}

if (info) {
    info.addEventListener("mouseenter", handelInfoMouseEnter);
    info.addEventListener("mouseleave", handelInfoMouseLeave);
}

function handelInfoMouseEnter(){
    info.style.transform = "rotateY(180deg)";
    info.style.backgroundColor = "lightblue";
    infoItems[2].style.transform = "rotateY(180deg)";
    infoItems.forEach(infoItem => {
        infoItem.style.opacity = '0';
    });
    infoItems[2].innerText = "정보";
    infoItems[2].style.opacity = '1';
}

function handelInfoMouseLeave(){
    info.style.transform = "none";
    info.style.backgroundColor = "rgba(0,0,0,0.2)";
    infoItems.forEach(infoItem => {
        infoItem.style.opacity = '1';
    });
    infoItems[2].style.transform = "none";
    infoItems[2].innerText = tmp;
}

btn.addEventListener("click", handelNightModeClick);