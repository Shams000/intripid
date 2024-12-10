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


// questions
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;

    // Toggle active class
    item.classList.toggle("active");

    // Close other accordion items
    document.querySelectorAll(".accordion-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });
  });
});

// table
document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("pricingToggle");
  const annuallyContent = document.querySelector(".pricing-content.annually");
  const annuallyContent2 = document.querySelector(".pricing-content1.annually");
  const quarterlyContent = document.querySelector(".pricing-content.quarterly");

  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      annuallyContent2.classList.remove("active");
      annuallyContent.classList.remove("active");
      quarterlyContent.classList.add("active");
    } else {
      annuallyContent2.classList.add("active");
      quarterlyContent.classList.remove("active");
      annuallyContent.classList.add("active");
    }
  });
});


  document.querySelector(".BTNpr2").addEventListener("click", function () {
    // Example: Redirect to contact page
    window.location.href = "contact.html";
  });
  document.querySelector(".BTNprf").addEventListener("click", function () {
    // Example: Redirect to contact page
    window.location.href = "contact.html";
  });
