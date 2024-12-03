// Selectors
const languageBar = document.querySelector('.language');
const dropdown = document.querySelector('.language-dropdown');
const currentLanguage = document.querySelector('.current-language');

// Event Listener for toggling dropdown
languageBar.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent event bubbling
  dropdown.classList.toggle('visible'); // Show/Hide dropdown
});

// Add click listeners to dropdown items
document.querySelectorAll('.language-dropdown li').forEach((item) => {
  item.addEventListener('click', (event) => {
    // Update current language display
    const selectedLanguage = event.target.dataset.lang;
    currentLanguage.textContent = selectedLanguage.toUpperCase();

    // Hide dropdown
    dropdown.classList.remove('visible');

    // Perform language switch functionality
    switchLanguage(selectedLanguage);
  });
});

// Define your language data
const languageData = {
    en: {
      "nav-about": "About",
      "nav-solutions": "Travel Solutions",
      "nav-travelers": "Our Travelers",
      "nav-pricing": "Pricing",
      "nav-faq": "FAQ",
      "nav-member": "BE A MEMBER",
      "header-title": "Plan Less.<br /><span>Travel More.</span>",
      "header-desc": "Finding and planning a great itinerary can be stressful and time consuming — Intripid makes it easy.",
      "header-btn": "Start Here!",
      "client-desc": "Enjoy access to the world's <br> best travel advisors & travel deals",
      "footer-desc": "An online platform that encourages travel by removing stress from personal, leisure travel planning.",
      "footer-about": "About",
    "footer-about-intripid": "About Intripid",
    "footer-our-travelers": "Our Travelers",
    "footer-contact-us": "Contact Us",
    "footer-faqs": "FAQs",
    "footer-solutions": "Solutions",
    "footer-personalized-destinations": "Personalized Destinations",
    "footer-expert-advisors": "Expert Travel Advisors",
    "footer-corporate-travel": "Corporate Travel Planning",
    "footer-travel-sponsorship": "Travel Sponsorship",
    "footer-points-rewards": "Travel Points & Rewards Integration",
    "footer-pricing": "Pricing",
    "footer-membership-plans": "Membership Plans",
    "footer-deals-packages": "Deals & Packages",
    "footer-vouchers": "Vouchers",
    "footer-resources": "Resources",
    "footer-brochure": "Intripid Brochure",
    "footer-cutsheet": "Executive Cutsheet",
    "footer-support": "Support",
    "footer-help-center": "Help Center",
    "footer-privacy-safety": "Privacy & Safety",
    "footer-terms-conditions": "Terms & Conditions",
    "footer-privacy-cookies": "Privacy & Cookies Statement",
    "footer-security": "Security",
    "footer-rights": "All rights reserved © 2023 Intripid",
    "footer-privacy-terms": "Privacy/Terms & Conditions"

      
    },
    es: {
      "nav-about": "Acerca de",
      "nav-solutions": "Soluciones de viaje",
      "nav-travelers": "Nuestros viajeros",
      "nav-pricing": "Precios",
      "nav-faq": "Preguntas frecuentes",
      "nav-member": "HAZTE MIEMBRO",
      "header-title": "Planifica menos.<br /><span>Viaja más.</span>",
      "header-desc": "Encontrar y planificar un buen itinerario puede ser estresante y llevar mucho tiempo. Intripid lo hace fácil.",
      "header-btn": "¡Comienza aquí!",
      "client-desc": "Disfruta del acceso a los mejores asesores de viajes y ofertas de viajes del mundo",
      "footer-desc": "Una plataforma en línea que fomenta los viajes eliminando el estrés de la planificación de viajes personales y de ocio.",
      "footer-about": "Acerca de",
    "footer-about-intripid": "Acerca de Intripid",
    "footer-our-travelers": "Nuestros viajeros",
    "footer-contact-us": "Contáctenos",
    "footer-faqs": "Preguntas frecuentes",
    "footer-solutions": "Soluciones",
    "footer-personalized-destinations": "Destinos personalizados",
    "footer-expert-advisors": "Asesores de viaje expertos",
    "footer-corporate-travel": "Planificación de viajes corporativos",
    "footer-travel-sponsorship": "Patrocinio de viajes",
    "footer-points-rewards": "Integración de puntos de viaje y recompensas",
    "footer-pricing": "Precios",
    "footer-membership-plans": "Planes de membresía",
    "footer-deals-packages": "Ofertas y paquetes",
    "footer-vouchers": "Vales",
    "footer-resources": "Recursos",
    "footer-brochure": "Folleto de Intripid",
    "footer-cutsheet": "Hoja ejecutiva",
    "footer-support": "Soporte",
    "footer-help-center": "Centro de ayuda",
    "footer-privacy-safety": "Privacidad y seguridad",
    "footer-terms-conditions": "Términos y condiciones",
    "footer-privacy-cookies": "Declaración de privacidad y cookies",
    "footer-security": "Seguridad",
    "footer-rights": "Todos los derechos reservados © 2023 Intripid",
    "footer-privacy-terms": "Privacidad/Términos y condiciones"
    },
    fr: {
      "nav-about": "À propos",
      "nav-solutions": "Solutions de voyage",
      "nav-travelers": "Nos voyageurs",
      "nav-pricing": "Tarifs",
      "nav-faq": "FAQ",
      "nav-member": "DEVENIR MEMBRE",
      "header-title": "Planifiez moins.<br /><span>Voyagez plus.</span>",
      "header-desc": "Trouver et planifier un bon itinéraire peut être stressant et prendre du temps — Intripid facilite les choses.",
      "header-btn": "Commencez ici!",
      "client-desc": "Accédez aux meilleurs conseillers en voyages et aux meilleures offres de voyage du monde",
      "footer-desc": "Une plateforme en ligne qui encourage les voyages en éliminant le stress de la planification de voyages personnels et de loisirs.",
      "footer-about": "À propos",
"footer-about-intripid": "À propos d'Intripid",
"footer-our-travelers": "Nos voyageurs",
"footer-contact-us": "Contactez-nous",
"footer-faqs": "FAQ",
"footer-solutions": "Solutions",
"footer-personalized-destinations": "Destinations personnalisées",
"footer-expert-advisors": "Conseillers en voyages experts",
"footer-corporate-travel": "Planification des voyages d'affaires",
"footer-travel-sponsorship": "Sponsorship de voyages",
"footer-points-rewards": "Points de voyage et intégration de récompenses",
"footer-pricing": "Tarification",
"footer-membership-plans": "Plans d'abonnement",
"footer-deals-packages": "Offres et forfaits",
"footer-vouchers": "Vouchers",
"footer-resources": "Ressources",
"footer-brochure": "Brochure Intripid",
"footer-cutsheet": "Executive Cutsheet",
"footer-support": "Support",
"footer-help-center": "Centre d'aide",
"footer-privacy-safety": "Confidentialité et sécurité",
"footer-terms-conditions": "Conditions générales",
"footer-privacy-cookies": "Déclaration de confidentialité et de cookies",
"footer-security": "Sécurité",
"footer-rights": "Tous droits réservés © 2023 Intripid",
"footer-privacy-terms": "Confidentialité/Conditions générales"

    },
    de: {
      "nav-about": "Über uns",
      "nav-solutions": "Reiselösungen",
      "nav-travelers": "Unsere Reisenden",
      "nav-pricing": "Preise",
      "nav-faq": "Häufig gestellte Fragen",
      "nav-member": "MITGLIED WERDEN",
      "header-title": "Weniger planen.<br /><span>Mehr reisen.</span>",
      "header-desc": "Das Finden und Planen einer großartigen Reiseroute kann stressig und zeitaufwändig sein — Intripid macht es einfach.",
      "header-btn": "Jetzt starten!",
      "client-desc": "Genießen Sie Zugang zu den besten Reiseberatern und Reiseangeboten der Welt",
      "footer-desc": "Eine Online-Plattform, die Reisen fördert, indem sie den Stress bei der Planung von persönlichen und Freizeitreisen beseitigt.",

      "footer-about": "Über uns",
    "footer-about-intripid": "Über Intripid",
    "footer-our-travelers": "Unsere Reisenden",
    "footer-contact-us": "Kontaktieren Sie uns",
    "footer-faqs": "Häufig gestellte Fragen",
    "footer-solutions": "Lösungen",
    "footer-personalized-destinations": "Personalisierte Reiseziele",
    "footer-expert-advisors": "Reiseexperten",
    "footer-corporate-travel": "Firmenreisplanung",
    "footer-travel-sponsorship": "Reisesponsoring",
    "footer-points-rewards": "Reisepunkte und Belohnungsintegration",
    "footer-pricing": "Preise",
    "footer-membership-plans": "Mitgliedschaftspläne",
    "footer-deals-packages": "Angebote und Pakete",
    "footer-vouchers": "Gutscheine",
    "footer-resources": "Ressourcen",
    "footer-brochure": "Intripid-Broschüre",
    "footer-cutsheet": "Executive Cutsheet",
    "footer-support": "Support",
    "footer-help-center": "Hilfezentrum",
    "footer-privacy-safety": "Datenschutz & Sicherheit",
    "footer-terms-conditions": "Allgemeine Geschäftsbedingungen",
    "footer-privacy-cookies": "Datenschutz- und Cookie-Erklärung",
    "footer-security": "Sicherheit",
    "footer-rights": "Alle Rechte vorbehalten © 2023 Intripid",
    "footer-privacy-terms": "Datenschutz/AGB"
    }
  };
  
  // Switch the language content
  function switchLanguage(lang) {
    const elements = document.querySelectorAll("[data-key]");
    
    elements.forEach(element => {
      const key = element.getAttribute("data-key");
      if (languageData[lang] && languageData[lang][key]) {
        element.innerHTML = languageData[lang][key];
      }
    });
  
    // Update the current language in the language bar
    document.querySelector(".current-language").innerText = lang.toUpperCase();
  }
  
  // Event listeners for language selection
  document.querySelectorAll(".language-dropdown li").forEach(item => {
    item.addEventListener("click", () => {
      const selectedLang = item.getAttribute("data-lang");
      switchLanguage(selectedLang);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const step1Btn = document.getElementById("step1Btn");
    const step2Btn = document.getElementById("step2Btn");
    const stepContents = document.querySelectorAll(".step-content");
  
    // Function to show a specific step
    function showStep(stepNumber) {
      // Remove active class from all contents
      stepContents.forEach((content) => {
        content.classList.remove("active");
      });
  
      // Add active class to the selected step
      document.querySelectorAll(`.step-${stepNumber}`).forEach((content) => {
        content.classList.add("active");
      });
    }
  
    // Event Listeners
    step1Btn.addEventListener("click", () => showStep(1));
    step2Btn.addEventListener("click", () => showStep(2));
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;
  
    // Function to show the current testimonial
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove("active");
        if (i === index) {
          testimonial.classList.add("active");
        }
      });
    }
  
    // Show the next testimonial
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % testimonials.length; // Loop back to the first
      showTestimonial(currentIndex);
    });
  
    // Show the previous testimonial
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; // Loop back to the last
      showTestimonial(currentIndex);
    });
  
    // Initialize slider
    showTestimonial(currentIndex);
  });

  const navLinks = document.getElementById("nav-links");
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

function scrollImage(direction) {
    const wrapper = document.querySelector(".image-wrapper");
    const scrollAmount = wrapper.offsetWidth * 0.8; // Adjust scroll distance (80% of visible width)
    wrapper.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
    // Use a timeout to update arrows after scrolling completes
    setTimeout(updateArrows, 300); // Adjust timeout for smooth scrolling
  }
  function updateArrows() {
    const wrapper = document.querySelector(".image-wrapper");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");
    // Show or hide left arrow
    if (wrapper.scrollLeft > 0) {
      leftArrow.style.display = "block";
    } else {
      leftArrow.style.display = "none";
    }
    // Show or hide right arrow
    if (wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth) {
      rightArrow.style.display = "none";
    } else {
      rightArrow.style.display = "block";
    }
  }
  // Initial arrow state check
  updateArrows();
  
  
  