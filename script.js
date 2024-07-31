document.addEventListener("DOMContentLoaded", function() {
    let position = 0;
    const headings = document.querySelectorAll("h2");

    function updatePosition() {
        document.body.style.setProperty('--position', position);
        animateHeadings();
    }

    function animateHeadings() {
        headings.forEach(heading => {
            heading.style.animation = "none"; // Reset animation
            void heading.offsetWidth; // Trigger reflow
            heading.style.animation = "nom 0.7s ease forwards";
        });
    }

    document.getElementById("increase").addEventListener("click", function() {
        if (position < 2) { // Assuming you have 3 sections (0, 1, 2)
            position += 1;
            updatePosition();
        }
    });

    document.getElementById("decrease").addEventListener("click", function() {
        if (position > 0) {
            position -= 1;
            updatePosition();
        }
    });

    updatePosition(); // Initialize the position
});
