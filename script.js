// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);

// Trigger once on load
reveal();

// Navbar Background Effect on Scroll
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(10, 10, 15, 0.95)";
        navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.5)";
    } else {
        navbar.style.background = "rgba(10, 10, 15, 0.8)";
        navbar.style.boxShadow = "none";
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});
