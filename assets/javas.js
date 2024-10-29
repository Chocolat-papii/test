<script>
    // Set up the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class to the section
                entry.target.classList.add('visible');
                // Unobserve the section once the animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Trigger animation when 10% of the section is visible

    // Observe all sections with class 'section'
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });


const checkBox = document.getElementById('check');
checkBox.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('menu-open');
    } else {
        document.body.classList.remove('menu-open');
    }
});


</script>