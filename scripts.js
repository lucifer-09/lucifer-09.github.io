document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const form = document.querySelector('#contact form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent! Thank you for contacting me.');
        form.reset();
    });
});
