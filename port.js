document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionID = this.getAttribute('href').substring(1);
            const section = document.getElementById(sectionID);

            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});

