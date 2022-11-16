"use strict";
//스크롤에 따른 메뉴바 색상처리
const navbar = document.querySelector("#navbar");
const home = document.querySelector(".home__container");
const navbarHeight = home.getBoundingClientRect().height;
const arrow1 = document.querySelector("#arrow");
console.log(navbarHeight);
document.addEventListener("scroll", () => {
  //   console.log("이벤트 발생");
  //   console.log(window.scrollY);

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
navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  console.log(link);
  scrollIntoView(link);
  if (link == null) {
    retrun;
  }
});

const contact = document.querySelector("#home");
contact.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  scrollIntoView(link);
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
}
