//  --NAVEGAÇÃO POR TABS-- //
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  const ativo = "ativo";
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(ativo);

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(ativo);
      });
      tabContent[index].classList.add(ativo);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();


//  --ACCORDDION LIST-- //
function initAccorddion() {
  const accorddionList = document.querySelectorAll(".js-accorddion dt");
  const ativo = "ativo";
  if (accorddionList.length) {
    accorddionList[0].classList.add(ativo);
    accorddionList[0].nextElementSibling.classList.add(ativo);

    accorddionList.forEach((item) => {
      item.addEventListener("click", activeAccorddion);
    });

    function activeAccorddion() {
      this.classList.toggle(ativo);
      this.nextElementSibling.classList.toggle(ativo);
    }
  }
};
initAccorddion();


//  --SCROLL  SUAVE-- //
  function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");

    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // versão alternativa
  // const topo = section.offsetTop;
  //   window.scrollTo({
  //     top: topo,
  //     behavior: "smooth",
  //   });
  };
  };
  initScrollSuave();
