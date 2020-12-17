window.onload = init();

var dragging;
var dragItem;
var diffY;
var diffX;
/*var count = 1;*/
var baseMenu;
window.onload = function() {
    baseMenu = document.getElementById('mates-submenu').innerHTML;
}

function init() {
    var icons = document.getElementsByClassName('mate-icon');
    dragging = false;
    
    for(var i = 0; i < icons.length; i++) {
        icons[i].addEventListener('mousedown', drag);
        icons[i].addEventListener('mouseup', drop);
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
    
/*  If we want to copy each time we move a token
    var clone = dragItem.cloneNode(true);
    clone.id = dragItem.id + count;
    count++;
    clone.addEventListener("mousedown", drag);
    clone.addEventListener("mouseup", drop);
    dragItem.parentNode.insertBefore(clone, dragItem); */
    var elProps = dragItem.getClientRects()[0];

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
        mTop = event.clientY;
        mLeft = event.clientX;
        dragItem.style.top = (mTop - diffY) + 'px';
        dragItem.style.left = (mLeft - diffX) + 'px';
    }
}

