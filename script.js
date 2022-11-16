"use strict";
//스크롤에 따른 메뉴바 색상처리
const navbar = document.querySelector("#navbar");
const home = document.querySelector(".home__container");
const navbarHeight = home.getBoundingClientRect().height;
const arrow1 = document.querySelector("#arrow");
console.log(navbarHeight);
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--bold");
    arrow1.classList.add("arrow--display");
  } else {
    navbar.classList.remove("navbar--bold");
    arrow1.classList.remove("arrow--display");
  }
});

//스크롤에 따른 메뉴바 고정

const navbarMenu = document.querySelector(".navbar__menu");
const navbarMenuItem = document.querySelectorAll(".navbar__menu__item");
navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  // console.log(link);
  scrollIntoView(link);
  // console.log(target[0]);
  console.log(navbarMenuItem[1]);
  for (let i = 0; i < navbarMenuItem.length; i++) {
    navbarMenuItem[i].classList.remove("clicks");
  }
  target.classList.add("clicks");

  if (link == null) {
    retrun;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});

const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

const contact = document.querySelector("#home");
contact.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  scrollIntoView(link);
  console.log(target);
  if (link == null) {
    retrun;
  }
});

const arrow = document.querySelector("#arrow");
arrow.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  scrollIntoView(link);
  if (link == null) {
    retrun;
  }
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
  selectNavItem(navItems[sectionIds.indexOf(selector)]);
}

const project = document.querySelector(".project_category");
project.addEventListener("click", (e) => {
  const project_1 = document.querySelectorAll(".project");
  const target = e.target;
  const filter = target.dataset.filter;
  // const type = project_1.dataset.type;
  // console.log(project_1.dataset.type);
  // console.log(target.dataset);
  // console.log(filter);
  console.log(project_1[2].dataset.type);
  if (filter == "*") {
    for (let i = 0; i < project_1.length; i++) {
      project_1[i].classList.remove("none");
    }
  }
  if (filter == "BackEnd") {
    for (let i = 0; i < project_1.length; i++) {
      if (project_1[i].dataset.type == filter) {
        project_1[i].classList.add("see");
        project_1[i].classList.remove("none");
      } else {
        project_1[i].classList.add("none");
      }
    }
  }
  if (filter == "FrontEnd") {
    for (let i = 0; i < project_1.length; i++) {
      if (project_1[i].dataset.type == filter) {
        project_1[i].classList.add("see");
        project_1[i].classList.remove("none");
      } else {
        project_1[i].classList.add("none");
      }
    }
  }
});

const sectionIds = [
  "#home",
  "#intro",
  "#Skill",
  "#project",
  "#testimonials",
  "#contact",
];

const sections = sectionIds.map((id) => document.querySelector(id));
// console.log(sections)
const navItems = sectionIds.map((Id) =>
  document.querySelector(`[data-link='${Id}']`)
);
// console.log(navItems)
let selectedNavIndex = 0;
let selectedNavItem = navItems[0];
function selectNavItem(selected) {
  selectedNavItem.classList.remove("active");
  selectedNavItem = selected;
  selectedNavItem.classList.add("active");
}
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      console.log("y");
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      // console.log(index)
      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
      console.log(selectedNavIndex);
    }
  });
};
const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach((section) => observer.observe(section));
window.addEventListener("wheel", () => {
  if (window.scrollY === 0) {
    selectedNavIndex = 0;
  } else if (
    window.scrollY + window.innerHeight ===
    document.body.clientHeight
  ) {
    selectedNavIndex = navItems.length - 1;
  }
  selectNavItem(navItems[selectedNavIndex]);
});
