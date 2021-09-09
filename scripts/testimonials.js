(() => {
  const testimonials = [
    {
      "author": "Ny Hakanto Ratrema",
      "position": "CEO",
      "company": "Ichtus IT",
      "text": "Aurore monte très rapidement en compétences sur les différentes technologies même celles dont elle n'en a pas eu encore connaissance. Elle se donne a fond sur les sujets qu'on lui confie et persévère malgré les éventuelles difficultés."
    },
    {
      "author": "Matthieu Regnauld",
      "position": "Formateur",
      "company": "ENI",
      "text": "Aurore apprend vite et s'investit pleinement dans les projets qui lui sont confiés. Nul doute qu'elle ira loin !"
    }
  ];

  (function createTestimonials(testimonialsArray) {
    testimonialsArray.forEach(testimony => {
      const testimonyTile = document.createElement('DIV');
      testimonyTile.className = 'testimony';

      const testimonyText = document.createElement('P');
      testimonyText.className = 'testimony__text';
      testimonyText.innerHTML = testimony.text;

      const testimonyAuthor = document.createElement('P');
      testimonyAuthor.className = 'testimony__author';
      testimonyAuthor.innerHTML = `${testimony.author} <br /> ${testimony.position}, ${testimony.company}` ;

      testimonyTile.appendChild(testimonyText);
      testimonyTile.appendChild(testimonyAuthor);

      document.getElementById('js-testimonials-showcase').append(testimonyTile);
    });  
  })(testimonials);
})();