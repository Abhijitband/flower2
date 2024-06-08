window.onload = function() {
    const stems = document.querySelectorAll('.stem');
    const leaves = document.querySelectorAll('.leaf');
    const petals = document.querySelectorAll('.petal');

    const elements = [...stems, ...leaves, ...petals];

    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.transition = 'opacity 1s ease-in-out';
            element.style.opacity = 1;
        }, index * 500); // delay each element by 0.5 second
    });
};
