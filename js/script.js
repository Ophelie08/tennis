document.addEventListener('DOMContentLoaded', () => {

    const burgerButton = document.querySelector('#burger');
    const header = document.querySelector('.ap-header');
    

    burgerButton.addEventListener('click', function() {
        header.classList.toggle('ap-header--show-nav');
    });
})

