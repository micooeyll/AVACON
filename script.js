const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(top < windowHeight - 120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

/* ==========================================
   HERO TEXT ANIMATION
========================================== */

const heroItems = document.querySelectorAll(".hero-item");

function animateHero(){

    const trigger = window.scrollY;

    heroItems.forEach((item,index)=>{

        if(trigger > (index*120)){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",animateHero);

animateHero();



/* ===========================
   INDEX NAVBAR
=========================== */

const header = document.querySelector("header");

if(document.body.classList.contains("home-page")){

    header.classList.add("hidden-nav");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 250){

            header.classList.remove("hidden-nav");
            header.classList.add("show-nav");

        }else{

            header.classList.remove("show-nav");
            header.classList.add("hidden-nav");

        }

    });

}