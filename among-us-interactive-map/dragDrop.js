var dragging;
var dragItem;
var diffY;
var diffX;
var baseMenu;
window.onload = function() {
    baseMenu = document.getElementById('mates-submenu').innerHTML;
    init();
}

function init() {
    let icons = document.getElementsByClassName('mate-icon');
    dragging = false;
    
    for(let i = 0; i < icons.length; i++) {
        icons[i].addEventListener('mousedown', drag);
        icons[i].addEventListener('mouseup', drop);
        icons[i].addEventListener('contextmenu', resetEl);
    }
}
document.addEventListener('mousemove', move);

function reset() {
    document.getElementById('mates-submenu').innerHTML = baseMenu;
    init();
}

function drag(event) {
    event.preventDefault();
    dragging = true;

    dragItem = document.getElementById(event.target.id);
    
    let elProps = dragItem.getClientRects()[0];

    diffY = event.clientY - elProps.top;
    diffX = event.clientX - elProps.left;
}

function drop(event) {
    event.preventDefault();
    dragging = false;
}

function move(event) {
    event.preventDefault();
    if(dragging) {
        dragItem.style.position = 'absolute';
        mTop  = event.clientY;
        mLeft = event.clientX;
        dragItem.style.top  = (mTop - diffY)  + 'px';
        dragItem.style.left = (mLeft - diffX) + 'px';
    }
}

function resetEl(event) {
    event.preventDefault();
    dragItem.style.position = 'static';
}
