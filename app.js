const notification = document.querySelector(".notification");

function handelNotificationRemove(){
    notification.style.transform = "translateY(200px)";
    setTimeout(function(){
        notification.parentNode.removeChild(notification);
    }, 700)
}

notification.addEventListener("click", handelNotificationRemove);