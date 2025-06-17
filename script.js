document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Account for fixed header height
            behavior: 'smooth'
        });

        // Update active class on nav links
        document.querySelectorAll('.nav-link').forEach(nav => {
            nav.classList.remove('active');
        });
        this.classList.add('active');

        // Highlight the current section with a maroon shade
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active'); // Remove active class from all sections
        });
        targetSection.classList.add('active'); // Add active class to the selected section
    });
});
