document.addEventListener('DOMContentLoaded', () => {

	if(document.querySelector('#burger')) {
		// "document" est notre document HTML, on va aller chercher la div #burger dans notre document grâce à querySelector et on le place dans une constante qu'on appelle burgerButton
		const burgerButton = document.querySelector('#burger');

		// On écoute tous les clics qui peuvent se produire sur le bouton burgerButton, dès qu'un clic est détecté on appelle une fonction qui va toggle la class show-nav sur le body
		burgerButton.addEventListener('click', function() {
			document.body.classList.toggle('show-nav');
		});
	}


	// De la même manière que pour le burger menu on va aller chercher dans notre document HTML l'élément qui se nomme #playersArea et s'il existe (if)
	// alors on le stocke dans une constante qui se nomme playersArea
	if(document.querySelector('#playersArea')) {
		const playersArea = document.querySelector('#playersArea');

		// Création d'un tableau [] d'objets {}.
		// Un objet {} est un ensemble de propriétés
		// Une propriété est l'association d'une clé et d'une valeur (image = clé et 'assets/images/balle-tennis.jpg' = valeur)
		const players = [
			{
				image: 'assets/images/tennis-ball.jpg',
				name: 'Reggianini Sarah',
				nationality: 'FR',
				flag: 'assets/images/flags/fr.jpg',
				ranking: '# 15/1',
				age: '16 ans',
				club: 'T.C GUENANGE'
			},
			{
				image: 'assets/images/balle-tennis.jpg',
				name: 'Reggianini Sarah',
				nationality: 'FR',
				flag: 'assets/images/flags/fr.jpg',
				ranking: '# 15/1',
				age: '16 ans',
				club: 'T.C GUENANGE'
			}
		];

		// On créé un tableau [] playersElements vide. Plus tard il sera peuplé avec le code HTML de ap-player-card
		let playersElements = [];

		// Pour chaque objet player qui se trouve dans mon tableau players alors je pousse à l'aide de la méthode .push() le code html de ap-player-card
		players.forEach(player => {
			playersElements.push(`<div class="ap-grid__column ap-grid__column--md--3 margin-bottom--32">
				<ap-player-card
					image="${player.image}"
					name="${player.name}"
					nationality="${player.nationality}"
					flag="${player.flag}"
					ranking="${player.ranking}"
					age="${player.age}"
					club="${player.club}"
				></ap-player-card>
			</div>`
			)
		})

		// à l'intérieur de mon élément #playersArea je vais placer mon tableau de players
		playersArea.innerHTML = playersElements.join('');
	}
})

