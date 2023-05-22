const notification = document.querySelector(".notification");
const btn = document.querySelector(".nav button");
let nightMode = false;

function handelNotificationRemove(){
    notification.style.transform = "translateY(200px)";
    setTimeout(function(){
        notification.parentNode.removeChild(notification);
    }, 700)
}

function handelNightModeClick(){
    if(nightMode){
        document.body.style.backgroundColor = "rgba(36, 154, 148, 0.1)";
        nightMode = false;
    }
    else{
        document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
        nightMode = true;
    }
}

btn.addEventListener("click", handelNightModeClick);

notification.addEventListener("click", handelNotificationRemove);