document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.addEventListener("click", function() {
            // Remove 'highlight' class from all sections
            sections.forEach(sec => sec.classList.remove("highlight"));
            // Add 'highlight' class to clicked section
            section.classList.add("highlight");
        });
    });
});