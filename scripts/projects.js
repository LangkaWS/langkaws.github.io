(() => {

  const createProjects = (projectsArray) => {
    projectsArray.reverse().forEach(project => {
      const tile            = createTile();

      const title           = createTitle(project);
      const preview         = createPreview();
      const tileElements    = [title, preview];
      tileElements.forEach(element => tile.append(element));

      const img             = createImg(project);
      const overlay         = createOverlay(project);
      const previewElements = [img, overlay];
      previewElements.forEach(element => preview.append(element));

      if (isMobile) {
        const closeBtn      = createCloseBtn();
        overlay.append(closeBtn);
      }
      const year            = createYear(project);
      const description     = createDescription(project);
      const techs           = createTechsSection(project);
      const overlayElements = [year, description, techs];
      overlayElements.forEach(element => overlay.append(element));
      if (project.url !== '#') {
        const link          = createLink(project);
        overlay.append(link);
      }

      document.getElementById('js-projects-showcase').append(tile);
    });
  }

  const createTile = () => {
    const tile     = document.createElement('DIV');
    tile.className = 'project__tile';
    if (isMobile) {
      addMobileOnClickEvent(tile);
    }
    return tile;
  }
  
  const addMobileOnClickEvent = (element) => {
    element.onclick = function() {
      openOverlay(element);
    }
  }

  const openOverlay = (element) => {
    element.getElementsByClassName('project__tile__overlay')[0].classList.toggle('project__tile__overlay--show');
  }

  const createTitle = (project) => {
    const title     = document.createElement('H3');
    title.innerHTML = project.name;
    return title;
  }

  const createPreview = () => {
    const preview     = document.createElement('DIV');
    preview.className = 'project__tile__preview';
    return preview;
  }

  const createImg = (project) => {
    const img     = document.createElement('IMG');
    img.className = 'project__tile__img';
    img.setAttribute('src', `resources/images/${project.name.toLowerCase().replace(/ /g, '-')}.png`);
    img.setAttribute('onerror', `this.src='resources/images/default.png'`);
    return img;
  }

  const createOverlay = () => {
    const overlay     = document.createElement('DIV');
    overlay.className = 'project__tile__overlay';
    return overlay;
  }

  const createYear = (project) => {
    const year = document.createElement('P');
    year.className = 'project__tile__year';
    year.innerHTML = `Année : ${project.year}`;
    return year;
  }

  const createDescription = (project) => {
    const descr     = document.createElement('P');
    descr.className = 'project__tile__description';
    descr.innerHTML = project.description;
    return descr;
  }

  const createTechsSection = (project) => {
    const section     = document.createElement('DIV');
    section.className = 'project__tile__tech-list';
    project.tech.forEach(tech => {
      const techDiv = createTech(tech);
      section.append(techDiv);
    });
    return section;
  }

  const createTech = (tech) => {
    const techDiv     = document.createElement('DIV');
    techDiv.className = 'project__tile__tech';
    techDiv.innerHTML = tech.toLowerCase();
    return techDiv;
  }

  const createCloseBtn = () => {
    const closeBtn     = document.createElement('I');
    closeBtn.className = 'fas fa-times btn-close';
    return closeBtn;
  }

  const createLink = (project) => {
    const buttonLink = document.createElement('BUTTON');
    buttonLink.className = 'project__tile__link btn btn-primary';
    buttonLink.innerHTML = 'Découvrir <i class="fas fa-share-square external-link-icon"></i>';
    buttonLink.onclick   = function() {
      openProject(project);
    }
    return buttonLink;
  }

  const openProject = (project) => {
    if (project.url !== '#') {
      closeOpenedProjectWindows();
      const iframe = createProjectWindow(project);
      document.getElementById('js-projects-showcase').append(iframe);
    }
  }

  const closeOpenedProjectWindows = () => {
    const openedProjectIframes = document.getElementsByClassName('project__iframe');
    while (openedProjectIframes.length > 0) {
      openedProjectIframes[0].parentNode.removeChild(openedProjectIframes[0]);
    }
  }

  const createProjectWindow = (project) => {
    const iframe     = document.createElement('IFRAME');
    iframe.id        = `iframe__${project.name.toLowerCase().replace(' ', '-')}`;
    iframe.className = 'project__iframe';
    iframe.setAttribute('title', project.name);
    iframe.setAttribute('src', project.url);
    disableParentScrolling();
    return iframe;
  }

  window.addEventListener('message', (event) => {
    if (event.data === 'closeIFrame') {
      closeOpenedProjectWindows();
      restoreParentScrolling();
    }
  });

  const disableParentScrolling = () => {
    document.body.classList.add('no-scroll');
  }

  const restoreParentScrolling = () => {
    document.body.classList.remove('no-scroll');
  }
  
  createProjects(projects);
  
})();