document.addEventListener('DOMContentLoaded', () => {
    const dropdownButtons = document.querySelectorAll('.dept-dropdown button');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // stop click from bubbling to window
            const dropdownContent = button.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', function(event) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dd => {
            if (!dd.contains(event.target)) {
                dd.classList.remove('show');
            }
        });
    });

    // Prevent dropdown from closing if link clicked
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Let the link navigate normally
            e.stopPropagation();
        });
    });
});
