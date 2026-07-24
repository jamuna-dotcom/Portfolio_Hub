// ===============================
// Portfolio JavaScript
// ===============================

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// ===============================
// Sticky Header
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 50);

});

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 0 15px rgba(0,0,0,.3)";
topBtn.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ===============================
// Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

// ===============================
// Typing Effect
// ===============================

const roles = [

"Data Analyst",

"Power BI Developer",

"Python Programmer",

"SQL Enthusiast"

];

let roleIndex = 0;

let charIndex = 0;

const roleElement = document.querySelector(".home-text h2");

function typeEffect(){

if(!roleElement) return;

if(charIndex < roles[roleIndex].length){

roleElement.textContent += roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);

}

else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

if(charIndex>0){

roleElement.textContent=roles[roleIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseEffect,50);

}

else{

roleIndex++;

if(roleIndex>=roles.length){

roleIndex=0;

}

setTimeout(typeEffect,300);

}

}

roleElement.textContent="";

typeEffect();

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Thank you for contacting me! I will get back to you soon.");

form.reset();

});

// ===============================
// Console Message
// ===============================

console.log("Portfolio Loaded Successfully");