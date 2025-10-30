document.addEventListener('DOMContentLoaded', function() {

    const aboutButton = document.querySelector('.about-btn');
    const aboutSection = document.querySelector('.about-container');

    aboutButton.addEventListener('click', function() {
        
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {

    const aboutButton = document.querySelector('.mus-btn');
    const aboutSection = document.querySelector('.music-container');

    aboutButton.addEventListener('click', function() {
        
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});