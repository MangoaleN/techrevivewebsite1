// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close mobile menu after selecting a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Automatically update copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form: prepare an enquiry in WhatsApp
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const business = document.getElementById("businessName").value.trim();
    const email = document.getElementById("customerEmail").value.trim();
    const service = document.getElementById("serviceType").value;
    const message = document.getElementById("customerMessage").value.trim();

    if (!name || !business || !email || !service || !message) {
        alert("Please complete all fields before continuing.");
        return;
    }

    const enquiry = `Hello TechRevive Solutions!

I would like to enquire about your services.

Name: ${name}
Business: ${business}
Email: ${email}
Service: ${service}

My business challenge:
${message}

Please contact me to discuss the next steps.

Thank you.`;

    const whatsappURL = "https://wa.me/27662053384?text=" +
        encodeURIComponent(enquiry);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
});

// Reveal sections as the visitor scrolls
const revealElements = document.querySelectorAll(
    ".service-card, .solution-card, .about-content, .about-highlight, .contact-form"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });
}