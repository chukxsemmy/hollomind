const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinks) {

    mobileMenuToggle.addEventListener('click', () => {

        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');

        // accessibility
        const isOpen = mobileMenuToggle.classList.contains('active');
        mobileMenuToggle.setAttribute('aria-expanded', isOpen);

        // prevent body scroll when menu is open
        document.body.classList.toggle('menu-open', isOpen);

    });

    // close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');

        });

    });

}

/* ==========================================
   SOLUTION CARDS
========================================== */

const solutionCards = document.querySelectorAll(".solution-card");

solutionCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

/* ===================================
   PLATFORM PARALLAX
=================================== */

const platformWindow = document.querySelector(".platform-window");

if (platformWindow) {

    platformWindow.addEventListener("mousemove", (e) => {

        const rect = platformWindow.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width - .5;

        const y = (e.clientY - rect.top) / rect.height - .5;

        platformWindow.style.transform =
            `perspective(1200px)
rotateY(${x * 5}deg)
rotateX(${-y * 5}deg)`;

    });

    platformWindow.addEventListener("mouseleave", () => {

        platformWindow.style.transform = "";

    });

}

/* ======================================
   PLATFORM IMAGE PARALLAX
====================================== */

const showcase = document.querySelector(".platform-image");

if (showcase) {

    showcase.addEventListener("mousemove", (e) => {

        const rect = showcase.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width - .5;

        const y = (e.clientY - rect.top) / rect.height - .5;

        showcase.style.transform =

            `perspective(1200px)
rotateY(${x * 6}deg)
rotateX(${-y * 6}deg)`;

    });

    showcase.addEventListener("mouseleave", () => {

        showcase.style.transform = "";

    });

}

/* ======================================
   CTA Reveal
====================================== */

gsap.from(".cta-box", {

    scrollTrigger: {

        trigger: ".cta-box",

        start: "top 80%"

    },

    y: 80,

    opacity: 0,

    duration: 1.1,

    ease: "power3.out"

});

/*======================================
Products Hero
======================================*/

gsap.from(".products-hero-text", {

    opacity: 0,

    x: -60,

    duration: 1,

    ease: "power3.out"

});

gsap.from(".products-hero-image", {

    opacity: 0,

    x: 60,

    duration: 1,

    delay: .2,

    ease: "power3.out"

});

/* ==========================================================
   PRODUCT NAVIGATOR
========================================================== */

const navigatorCards = document.querySelectorAll(".navigator-card");

navigatorCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(circle at ${x}px ${y}px,
        rgba(6,182,212,.12),
        rgba(255,255,255,.03) 55%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.03)";

    });

});

/* ==========================================================
   SMARTTRAIN
========================================================== */

const smarttrainImage = document.querySelector(".smarttrain-image");

if (smarttrainImage) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .25

    });

    observer.observe(smarttrainImage);

}

/* ==========================================================
   PRODUCT IMAGE REVEAL
========================================================== */

document.querySelectorAll(".product-image").forEach(image => {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .25

    });

    observer.observe(image);

});


/* ==========================================================
   ANALYTICS ENGINE
========================================================== */

const analyticsItems = document.querySelectorAll(".analytics-item");

const analyticsObserver = new IntersectionObserver(entries => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {

                entry.target.classList.add("show");

            }, index * 120);

        }

    });

}, { threshold: .2 });

analyticsItems.forEach(item => analyticsObserver.observe(item));

/* ==========================================================
   HOLLOMIND STUDIO
========================================================== */

const studioCards = document.querySelectorAll(".studio-card");

const studioObserver = new IntersectionObserver(entries => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {

                entry.target.classList.add("show");

            }, index * 100);

        }

    });

}, { threshold: .2 });

studioCards.forEach(card => studioObserver.observe(card));

/* ==========================================================
   ENTERPRISE INTEGRATIONS
========================================================== */

const integrationCards = document.querySelectorAll(".integration-card");

const integrationObserver = new IntersectionObserver(entries => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {

                entry.target.classList.add("show");

            }, index * 100);

        }

    });

}, { threshold: .15 });

integrationCards.forEach(card => integrationObserver.observe(card));

/* ==========================================================
   PLATFORM HERO
========================================================== */

const platformNodes = document.querySelectorAll(".platform-node");

platformNodes.forEach((node, index) => {

    node.style.animation = `float ${5 + (index * .4)}s ease-in-out infinite`;

});

/* ==========================================================
   PLATFORM OVERVIEW
========================================================== */

const platformFeatures = document.querySelectorAll(".platform-feature");

const platformObserver = new IntersectionObserver(entries => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {

                entry.target.classList.add("show");

            }, index * 120);

        }

    });

}, { threshold: .2 });

platformFeatures.forEach(feature => platformObserver.observe(feature));

/* ==========================================================
   HOW HERO
========================================================== */

gsap.from(".how-hero-content>*", {

    opacity: 0,

    y: 40,

    duration: 1,

    stagger: .15,

    ease: "power3.out"

});

/* ==========================================================
   WORKFLOW
========================================================== */

const workflowSteps = document.querySelectorAll(".workflow-step");

const workflowObserver = new IntersectionObserver(entries => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {

                entry.target.classList.add("show");

            }, index * 120);

        }

    });

}, { threshold: .2 });

workflowSteps.forEach(step => workflowObserver.observe(step));

/* ==========================================================
   RESOURCES HERO
========================================================== */

gsap.from(".resources-hero-content>*", {

    opacity: 0,
    y: 40,
    duration: 1,
    stagger: .15,
    ease: "power3.out"

});

/* ==========================================================
   FEATURED RESOURCES
========================================================== */

document.querySelectorAll(".resource-card").forEach((card, index) => {

    card.style.animationDelay = `${index * .15}s`;

});

/* ==========================================================
   KNOWLEDGE CENTER
========================================================== */

const knowledgeObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".knowledge-content,.knowledge-image").forEach(el => {

    knowledgeObserver.observe(el);

});


/* ==========================================================
   OUR STORY
========================================================== */

gsap.from(".story-image", {

    scrollTrigger: ".story-image",

    opacity: 0,

    x: -80,

    duration: 1

});

gsap.from(".story-content", {

    scrollTrigger: ".story-content",

    opacity: 0,

    x: 80,

    duration: 1

});

/* ==========================================================
   OUR PRINCIPLES
========================================================== */

gsap.from(".principle-card", {

    scrollTrigger: {

        trigger: ".principles-grid",

        start: "top 80%"

    },

    opacity: 0,

    y: 50,

    duration: .9,

    stagger: .12,

    ease: "power3.out"

});


/* ==========================================================
   LEADERSHIP & VISION
========================================================== */

gsap.from(".leadership-content", {

    scrollTrigger: ".leadership-section",

    x: -80,

    opacity: 0,

    duration: 1,

    ease: "power3.out"

});

gsap.from(".leadership-image", {

    scrollTrigger: ".leadership-section",

    x: 80,

    opacity: 0,

    duration: 1,

    ease: "power3.out"

});

gsap.from(".vision-item", {

    scrollTrigger: ".vision-highlights",

    y: 40,

    opacity: 0,

    stagger: .15,

    duration: .8,

    ease: "power3.out"

});

/* ==========================================================
   CONNECT WITH HOLLOMIND
========================================================== */

gsap.from(".connect-card", {

    scrollTrigger: {

        trigger: ".connect-grid",

        start: "top 80%"

    },

    y: 60,

    opacity: 0,

    stagger: .18,

    duration: 1,

    ease: "power3.out"

});

/* ==========================================================
   GLOBAL PRESENCE
========================================================== */

gsap.from(".presence-content", {

    scrollTrigger: ".global-presence",

    x: -80,

    opacity: 0,

    duration: 1,

    ease: "power3.out"

});

gsap.from(".presence-image", {

    scrollTrigger: ".global-presence",

    x: 80,

    opacity: 0,

    duration: 1,

    ease: "power3.out"

});

gsap.from(".presence-stats > div", {

    scrollTrigger: ".presence-stats",

    y: 40,

    opacity: 0,

    stagger: .15,

    duration: .8,

    ease: "power3.out"

});

/* ==========================================================
   LEGAL NAVIGATION
========================================================== */

document.querySelectorAll(".legal-nav-wrapper a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ==========================================================
   LEGAL CONTENT
========================================================== */

gsap.from(".legal-item", {

    scrollTrigger: ".legal-list",

    opacity: 0,

    y: 40,

    duration: .8,

    stagger: .12,

    ease: "power3.out"

});

/* ==========================================================
   TERMS OF SERVICE
========================================================== */

gsap.from("#terms-service .legal-item", {

    scrollTrigger: "#terms-service",

    opacity: 0,

    y: 40,

    duration: .8,

    stagger: .12,

    ease: "power3.out"

});

/* ==========================================================
   COOKIE POLICY
========================================================== */

gsap.from("#cookie-policy .legal-item", {

    scrollTrigger: "#cookie-policy",

    opacity: 0,

    y: 40,

    duration: .8,

    stagger: .12,

    ease: "power3.out"

});

/* ==========================================================
   CONTACT SECTION
========================================================== */

gsap.from(".contact-form-wrapper", {

    scrollTrigger: ".contact-section",

    x: -70,

    opacity: 0,

    duration: 1,

    ease: "power3.out"

});

gsap.from(".contact-card", {

    scrollTrigger: ".contact-sidebar",

    x: 70,

    opacity: 0,

    duration: .8,

    stagger: .12,

    ease: "power3.out"

});


/* ==========================================================
   LEADERSHIP TEAM
========================================================== */

gsap.from(".team-card", {

    scrollTrigger: ".team-grid",

    opacity: 0,

    y: 60,

    duration: .9,

    stagger: .18,

    ease: "power3.out"

});