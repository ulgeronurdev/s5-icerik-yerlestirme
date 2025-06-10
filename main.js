// bu satırı silmeyin
import { siteContent } from "./content.js";
console.log("Site içeriği", siteContent);

/* Kodlar buradan aşağıya */

const navLinks = document.querySelectorAll("nav a");
const navData = siteContent["nav"];

Object.keys(navData).forEach((key, index) => {
  navLinks[index].textContent = navData[key];
  navLinks[index].classList.add("italic");
});

const logo = document.getElementById("logo-img");
logo.src = siteContent.images["logo-img"];

const ctaH1 = document.querySelector(".cta h1");
ctaH1.textContent = siteContent.cta.h1;

const ctaBtn = document.querySelector(".cta button");
ctaBtn.textContent = siteContent.cta.button;

const ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent.images["cta-img"];
