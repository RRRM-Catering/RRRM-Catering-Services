
document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
      });
    });
  }

  // Gallery category filters
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const category = button.dataset.filter;

      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      galleryItems.forEach(function (item) {
        const itemCategory = item.dataset.category;

        if (
          category === "all" ||
          category === itemCategory
        ) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Smooth scrolling for page links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (targetId && targetId.length > 1) {
        const target = document.querySelector(targetId);

        if (target) {
          event.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });

  // Catering inquiry form
  const inquiryForm = document.querySelector("#inquiry-form");

  if (inquiryForm) {
    inquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name =
        inquiryForm.querySelector('[name="name"]')?.value.trim() || "";

      const email =
        inquiryForm.querySelector('[name="email"]')?.value.trim() || "";

      const phone =
        inquiryForm.querySelector('[name="phone"]')?.value.trim() || "";

      const eventType =
        inquiryForm.querySelector('[name="event"]')?.value || "";

      const eventDate =
        inquiryForm.querySelector('[name="date"]')?.value || "";

      const guests =
        inquiryForm.querySelector('[name="guests"]')?.value || "";

      const message =
        inquiryForm.querySelector('[name="message"]')?.value.trim() || "";

      const subject = encodeURIComponent(
        "Catering Inquiry - " + name
      );

      const body = encodeURIComponent(
        "RRRM CATERING SERVICES - CUSTOMER INQUIRY\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Event Type: " + eventType + "\n" +
        "Event Date: " + eventDate + "\n" +
        "Number of Guests: " + guests + "\n\n" +
        "Additional Details:\n" + message
      );

      // PALITAN ITO ng totoong business email address
      const businessEmail = "YOUR-EMAIL@example.com";

      if (businessEmail === "YOUR-EMAIL@example.com") {
        alert(
          "Salamat sa iyong inquiry, " + name +
          "! I-set muna ang business email sa script.js para direktang maipadala ang inquiry."
        );
        return;
      }

      window.location.href =
        "mailto:" + businessEmail +
        "?subject=" + subject +
        "&body=" + body;
    });
  }

  // Automatically update the copyright year
  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Back-to-top button
  const backToTop = document.querySelector("#back-to-top");

  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  console.log("RRRM CATERING SERVICES website is ready!");
});
