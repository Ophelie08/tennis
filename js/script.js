document.addEventListener('DOMContentLoaded', () => {

	// "document" est notre document HTML, on va aller chercher la div #burger dans notre document grâce à querySelector et on le place dans une constante qu'on appelle burgerButton
	const burgerButton = document.querySelector('#burger');

	// On écoute tous les clics qui peuvent se produire sur le bouton burgerButton, dès qu'un clic est détecté on appelle une fonction qui va toggle la class show-nav sur le body
	burgerButton.addEventListener('click', function() {
		document.body.classList.toggle('show-nav');
	});
})

