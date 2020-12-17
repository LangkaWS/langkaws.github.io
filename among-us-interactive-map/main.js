function displayMap(map) {
    let list = document.getElementsByClassName('map');
    for(let i = 0; i < list.length; i++) {
        list[i].style.display = 'none';
    }
    document.getElementById(map).style.display = 'block';
}