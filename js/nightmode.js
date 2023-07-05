const NIGHTMODE_KEY = "nightmode";
const night = localStorage.getItem(NIGHTMODE_KEY);

function handelNightModeClick(){
    if(localStorage.getItem(NIGHTMODE_KEY)==="on"){
        localStorage.setItem(NIGHTMODE_KEY, "off");
        console.log(true);
    } else {
        localStorage.setItem(NIGHTMODE_KEY, "on");
        console.log(false);
    }
    document.body.classList.toggle("nightMode");
}

if(night==="on"){
    document.body.classList.toggle("nightMode");
}

btn.addEventListener("click", handelNightModeClick);