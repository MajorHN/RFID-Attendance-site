document.addEventListener("DOMContentLoaded", () => {
  // Load the header
  fetch("header.html")
    .then(res => res.text())
    .then(html => {
      document.querySelector(".header").innerHTML = html;

      // Highlight active nav link
      const currentPage = location.pathname.split("/").pop();
      const navLinks = document.querySelectorAll(".nav a");

      navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      // Load user data
      return fetch("data/account-sample.json");
    })
    .then(response => response.json())
    .then(data => {
      const username = data.account.username;
      const headerUsername = document.querySelector(".username");
      if (headerUsername) {
        headerUsername.textContent = username;
      }
    })
    .catch(err => {
      console.error("Error loading header or data:", err);
    });
});
