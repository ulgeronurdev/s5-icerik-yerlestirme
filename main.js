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

const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent.images["accent-img"];

const topContentHeaders = document.querySelectorAll(
  ".top-content .text-content h4"
);
const topContentP = document.querySelectorAll(".top-content .text-content p");

topContentHeaders[0].innerHTML = siteContent["top-content"]["left-h4"];
topContentP[0].textContent = siteContent["top-content"]["left-content"];

topContentHeaders[1].innerHTML = siteContent["top-content"]["right-h4"];
topContentP[1].textContent = siteContent["top-content"]["right-content"];

const bottomContentHeaders = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
const bottomContentParagraphs = document.querySelectorAll(
  ".bottom-content .text-content p"
);

bottomContentHeaders[0].textContent = siteContent["bottom-content"]["left-h4"];
bottomContentParagraphs[0].textContent =
  siteContent["bottom-content"]["left-content"];

bottomContentHeaders[1].textContent =
  siteContent["bottom-content"]["middle-h4"];
bottomContentParagraphs[1].textContent =
  siteContent["bottom-content"]["middle-content"];

bottomContentHeaders[2].textContent = siteContent["bottom-content"]["right-h4"];
bottomContentParagraphs[2].textContent =
  siteContent["bottom-content"]["right-content"];

const contactSection = document.querySelector(".contact");
contactSection.children[0].textContent = siteContent.contact["contact-h4"];
contactSection.children[1].textContent = siteContent.contact.address;
contactSection.children[2].textContent = siteContent.contact.phone;
contactSection.children[3].textContent = siteContent.contact.email;

const footerLink = document.querySelector("footer a");
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add("bold");
//c
