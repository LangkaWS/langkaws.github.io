(() => {
  document.getElementById('js-back-arrow').onclick = () => {
    window.parent.postMessage('closeIFrame', '*');
  }
})();