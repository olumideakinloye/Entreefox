function notification(){
    document.getElementById('notification').style.width = "100vw";
    document.getElementById('notification').style.transition = "ease-in-out 0.5s";
    document.getElementById('notification').style.opacity = 1
}

function back(){
    document.getElementById('notification').style.width = 0;
    document.getElementById('notification').style.opacity = 0;
}


let follow = document.querySelector('.follow');
// function follow(){
//     document.getElementsByClassName('.follow').innerHTML = "Following";
// }