document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Find all the stars inside the skill-item
        const stars = item.querySelectorAll('.bx.bxs-star');
        stars.forEach(star => {
            star.classList.add('bx-spin'); // Adding an animation class
        });
    });

    item.addEventListener('mouseleave', () => {
        // Find all the stars inside the skill-item
        const stars = item.querySelectorAll('.bx.bxs-star');
        stars.forEach(star => {
            star.classList.remove('bx-spin'); // Remove animation class
        });
    });
});

