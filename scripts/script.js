const displayMenu = () => {
  document.getElementById('dropdownNav').classList.toggle('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown') && !event.target.matches('.dropdown__title')) {
    const dropdownNav = document.getElementById('dropdownNav');
    if (dropdownNav.classList.contains('show')) {
      dropdownNav.classList.remove('show');
    }
  }
}

const detectMobile = () => {
  const regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return navigator.userAgent.match(regex) ? true : false ;
};

const isMobile = detectMobile();