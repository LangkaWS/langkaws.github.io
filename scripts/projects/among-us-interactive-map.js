(() => {

  const initialMenu = document.getElementById('mates-submenu').innerHTML;
  let dragging, dragItem, diffY, diffX, mouseTop, mouseLeft;

  const init = () => {
    const mapButtons = document.getElementsByClassName('map-name');
    for (let i = 0; i < mapButtons.length; i++) {
      mapButtons[i].onclick = () => {
        displayMap(mapButtons[i].id);
      }
    }
  
    document.getElementById('btn-reset').onclick = () => {
      reset();
    };
  
    initDragNDrop();
  }

  const initDragNDrop = () => {
    const icons = document.getElementsByClassName('mate-icon');
    dragging = false;
  
    for (let i = 0; i < icons.length; i++) {
      icons[i].addEventListener('mousedown', drag);
      icons[i].addEventListener('mouseup', drop);
      icons[i].addEventListener('contextmenu', resetElement);
    }
    document.addEventListener('mousemove', move);
  }

  const displayMap = (map) => {
    const list = document.getElementsByClassName('map');
    for (let i = 0; i < list.length; i++) {
      list[i].style.display = 'none';
    }
    document.getElementById(`map-${map}`).style.display = 'block';
  }

  const reset = () => {
    document.getElementById('mates-submenu').innerHTML = initialMenu;
    initDragNDrop();
  }

  const drag = (event) => {
    event.preventDefault();
    dragging = true;
    dragItem = document.getElementById(event.target.id);
    const itemProps = dragItem.getClientRects()[0];
    diffY = event.clientY - itemProps.top;
    diffX = event.clientX - itemProps.left;
  }

  const drop = (event) => {
    event.preventDefault();
    dragging = false;
  }

  const move = (event) => {
    event.preventDefault();
    if (dragging) {
      dragItem.style.position = 'absolute';
      mouseTop  = event.clientY;
      mouseLeft = event.clientX;
      dragItem.style.top  = `${(mouseTop - diffY)}px`;
      dragItem.style.left = `${(mouseLeft - diffX)}px`;
    }
  }

  const resetElement = (event) => {
    event.preventDefault();
    dragItem.style.position = 'static';
  }

  init();

})();