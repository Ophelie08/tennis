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
			},
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


	let matchs16Array = [];
	let matchs8Array = [];
	let matchs4Array = [];

	let matchs16Elements = "";
	let matchs8Elements = "";
	let matchs4Elements = "";
	let matchsMobile = "";


	if(document.querySelector('.js-matchs-16') || document.querySelector('.js-matchs-8')) {
		matchs16Elements = document.querySelectorAll('.js-matchs-16');
		matchs8Elements = document.querySelectorAll('.js-matchs-8');
		matchs4Elements = document.querySelectorAll('.js-matchs-4');
		matchsMobile = document.querySelectorAll('.js-matchs-mobile');

		const matchs16List = [
			{
				visible: true,
				matchs: [
					{
						opponents: [
							{
								name: "THOLEY&nbsp;Léa",
								ranking: "N55",
								score: [2, 1],
								winner: false,
								image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/06/THOLEY-LEA-300x300.png'
							},
							{
								name: "TOMERA&nbsp;Joanna",
								ranking: "-15",
								score: [6, 6],
								winner: true,
								image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/05/TOMERA-JAONNA-300x300.png'
							}
						]
					},
					{
						opponents: [
							{
								name: "---",
								ranking: "---",
								score: ['-', '-'],
								winner: false,
								image: ''
							},
							{
								name: "YEROLYMOS&nbsp;Margot",
								ranking: "N14 (WTA 338)",
								score: ['-', '-'],
								winner: true,
								image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/05/YEROLYMOS-MARGOT-300x300.png'
							}
						]
					},
				]
			},
			{
				visible: false,
				matchs: [
					{
						opponents: [
							{
								name: "",
								ranking: "",
								score: [],
								winner: "",
								image: ""
							},
							{
								name: "",
								ranking: "",
								score: [],
								winner: "",
								image: ""
							}
						]
					},
					{
						opponents: [
							{
								name: "",
								ranking: "",
								score: [],
								winner: "",
								image: ""
							},
							{
								name: "",
								ranking: "",
								score: [],
								winner: "",
								image: ""
							}
						]
					}
				]
			},
			{
				visible: true,
				matchs: [
					{
						opponents: [
							{
								name: "RAMIREZ&nbsp;Evita",
								ranking: "-15",
								score: [6, 6, 3],
								winner: false,
								image: "https://www.wavesopen57.fr/wp-content/uploads/2021/05/RAMIREZ-EVITA-300x300.png"
							},
							{
								name: "BIOLAY&nbsp;Sophia",
								ranking: "N51",
								score: [2, 7, 6],
								winner: true,
								image: "https://www.wavesopen57.fr/wp-content/uploads/2021/06/BIOLAY-SOPHIA-300x300.png"
							}
						]
					},
					{
						opponents: [
							{
								name: "---",
								ranking: "---",
								score: ["-", "-"],
								winner: "",
								image: ""
							},
							{
								name: "GERVAIS&nbsp;Julie",
								ranking: "N17 (WTA 458)",
								score: ["-", "-"],
								winner: true,
								image: "https://www.wavesopen57.fr/wp-content/uploads/2021/05/GERVAIS-JULIE-300x300.png"
							}
						]
					}
				]
			},
			{
				visible: false,
				matchs: [
					{
						opponents: [
							{
								name: "",
								ranking: "",
								score: [],
								winner: "",
								image: ""
							},
							{
								name: "",
								ranking: "",
								score: [],
								winner: "",
								image: ""
							}
						]
					},
					{
						opponents: [
							{
								name: "",
								ranking: "",
								score: [],
								winner: "",
								image: ""
							},
							{
								name: "",
								ranking: "",
								score: [],
								winner: "",
								image: ""
							}
						]
					}
				]
			},
			{
				visible: true,
				matchs: [
					{
						opponents: [
							{
								name: "NICAULT&nbsp;Inès",
								ranking: "-15",
								score: [3, 4],
								winner: false,
								image: "https://www.wavesopen57.fr/wp-content/uploads/2021/05/NICAULT-INES-300x300.png"
							},
							{
								name: "GRAVOUIL&nbsp;Théo",
								ranking: "N54 (WTA 1143)",
								score: [6, 6],
								winner: true,
								image: "https://www.wavesopen57.fr/wp-content/uploads/2021/05/GRAVOUILLE-THEO-300x300.png"
							}
						]
					},
					{
						opponents: [
							{
								name: "---",
								ranking: "---",
								score: ["-", "-"],
								winner: "",
								image: ""
							},
							{
								name: "WARGNIER&nbsp;Lucie",
								ranking: "N30",
								score: [],
								winner: true,
								image: "https://www.wavesopen57.fr/wp-content/uploads/2021/06/WARGNIER-LUCIE-300x300.png"
							}
						]
					}
				]
			}
		];

		const matchs8List = [
			{
				first: false,
				opponents: [
					{
						name: "TOMERA&nbsp;Joanna",
						ranking: "-15",
						score: [1, 3],
						winner: false,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/05/TOMERA-JAONNA-300x300.png'
					},
					{
						name: "YEROLYMOS&nbsp;Margot",
						ranking: "N14 (WTA 338)",
						score: [6, 6],
						winner: true,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/05/YEROLYMOS-MARGOT-300x300.png'
					}
				]
			},
			{
				first: true,
				opponents: [
					{
						name: "ADLER&nbsp;Lou",
						ranking: "N31",
						score: [2, 3],
						winner: false,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/05/ADLER-LOU-300x300.png'
					},
					{
						name: "BENAMAR&nbsp;Schena",
						ranking: "-15",
						score: [6, 6],
						winner: true,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/05/BENAMAR-SCHENA-300x300.png'
					}
				]
			},
			{
				first: false,
				opponents: [
					{
						name: "BIOLAY&nbsp;Sophia",
						ranking: "N51",
						score: [6, 2, 2],
						winner: false,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/06/BIOLAY-SOPHIA-300x300.png'
					},
					{
						name: "GERVAIS&nbsp;Julie",
						ranking: "N17 (WTA 458)",
						score: [1, 6, 6],
						winner: true,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/05/GERVAIS-JULIE-300x300.png'
					}
				]
			},
			{
				first: true,
				opponents: [
					{
						name: "SIBILLE&nbsp;Constance",
						ranking: "N49",
						score: [6, 0, 3],
						winner: false,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/06/SIBILLE-CONSTANCE-300x300.png'
					},
					{
						name: "GIRARD&nbsp;Emmanuelle",
						ranking: "-15",
						score: [4, 6, 6],
						winner: true,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/05/aaemmanuellegirard-300x300.jpg'
					}
				]
			},
			{
				first: false,
				opponents: [
					{
						name: "GRAVOUIL&nbsp;Théo",
						ranking: "N54 (WTA 1143)",
						score: [6, 1, 4],
						winner: false,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/05/GRAVOUILLE-THEO-300x300.png'
					},
					{
						name: "WARGNIER&nbsp;Lucie",
						ranking: "N30",
						score: [3, 6, 6],
						winner: true,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/06/WARGNIER-LUCIE-300x300.png'
					}
				]
			},
			{
				first: true,
				opponents: [
					{
						name: "REZAI&nbsp;Théo",
						ranking: "-2/6",
						score: [0, 'ab'],
						winner: false,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/06/REZAI-ARAVANE-300x300.png'
					},
					{
						name: "DESPERRIER&nbsp;Gaëlle",
						ranking: "N21",
						score: [5, '-'],
						winner: true,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/05/DESPERRIER-GAELLE-300x300.png'
					}
				]
			}
		];

		const matchs4List = [
			{
				first: false,
				opponents: [
					{
						name: "YEROLYMOS&nbsp;Margot",
						ranking: "N14 (WTA 338)",
						score: [6, 6],
						winner: false,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/05/YEROLYMOS-MARGOT-300x300.png'
					},
					{
						name: "BENAMAR&nbsp;Schena",
						ranking: "-15",
						score: [1, 3],
						winner: false,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/05/BENAMAR-SCHENA-300x300.png'
					}
				]
			},
			{
				first: false,
				opponents: [
					{
						name: "GERVAIS&nbsp;Julie",
						ranking: "N17",
						score: [6, 1, 4],
						winner: false,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/05/GERVAIS-JULIE-300x300.png'
					},
					{
						name: "GIRARD&nbsp;Emmanuelle",
						ranking: "-15",
						score: [3, 6, 6],
						winner: false,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/05/aaemmanuellegirard-300x300.jpg'
					},
				]
			},
			{
				first: false,
				opponents: [
					{
						name: "WARGNIER&nbsp;Lucie",
						ranking: "N30",
						score: [6, 1, 4],
						winner: false,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/06/WARGNIER-LUCIE-300x300.png'
					},
					{
						name: "DESPERRIER&nbsp;Gaëlle",
						ranking: "N21 (WTA 700)",
						score: [3, 6, 6],
						winner: false,
						image: 'https://www.wavesopen57.fr/wp-content/uploads/2021/05/DESPERRIER-GAELLE-300x300.png'
					},
				]
			}
		];

		matchs16List.forEach(group => {
			matchs16Array.push(`<ul class="ap-group ${group.visible === false ? 'ap-group--hidden': ''}">`);

				group.matchs.forEach(match => {

					matchs16Array.push('<li>');

						match.opponents.forEach(opponent => {
							matchs16Array.push(`
								<ap-group-card
									name=${opponent.name}
									ranking=${opponent.ranking}
									score=${opponent.score}
									winner=${opponent.winner}
									image=${opponent.image}
								></ap-group-card>`
							)
						})

					matchs16Array.push('</li>');
				})

			matchs16Array.push('</ul>');
		});

		matchs8List.forEach(group => {
			matchs8Array.push(`<ul class="ap-group ${group.first === true ? 'ap-group--first': ''} ${group.visible === false ? 'ap-group--hidden': ''}">`);
				matchs8Array.push(`<li>`);
					group.opponents.forEach(opponent => {
						matchs8Array.push(`
							<ap-group-card
								name=${opponent.name}
								ranking=${opponent.ranking}
								score=${opponent.score}
								winner=${opponent.winner}
								image=${opponent.image}
							></ap-group-card>`
						)
					})
				matchs8Array.push('</li>');
			matchs8Array.push('</ul>');
		});

		matchs4List.forEach(group => {
			matchs4Array.push(`<ul class="ap-group ${group.first === true ? 'ap-group--first': ''} ${group.visible === false ? 'ap-group--hidden': ''}">`);
				matchs4Array.push(`<li>`);
					group.opponents.forEach(opponent => {
						matchs4Array.push(`
							<ap-group-card
								name=${opponent.name}
								ranking=${opponent.ranking}
								score=${opponent.score}
								winner=${opponent.winner}
								image=${opponent.image}
							></ap-group-card>`
						)
					})
				matchs4Array.push('</li>');
			matchs4Array.push('</ul>');
		});

		matchs16Elements.forEach(match => {
			match.innerHTML = matchs16Array.join('')
		});

		matchs8Elements.forEach(match => {
			match.innerHTML = matchs8Array.join('')
		});

		matchs4Elements.forEach(match => {
			match.innerHTML = matchs4Array.join('')
		});
	}



	// Gestion des tabs matchs desktop
	const dataNavDesktop = document.querySelectorAll('[data-nav]');
	const matchs = document.querySelectorAll('.js-matchs');

	dataNavDesktop.forEach(dataNavElement => {
		dataNavElement.addEventListener('click', (event) => {
			const dataNavValue = dataNavElement.dataset.nav;

			dataNavDesktop.forEach(dataNavElement => dataNavElement.parentNode.classList.remove('ap-tabs__li--selected'));
			event.currentTarget.parentNode.classList.add('ap-tabs__li--selected');

			matchs.forEach(match => {
				match.classList.remove('ap-matches--visible');

				if(match.id === dataNavValue) {
					match.classList.add('ap-matches--visible');
				}
			})
		});
	});


	if(document.querySelector('.js-matchs-mobile')) {
		const mobileMatchsContainer = document.querySelector('.js-matchs-mobile');
		const selectMobile = document.querySelector('#selectMatchsMobile');

		mobileMatchsContainer.innerHTML = matchs16Array.join('');

		selectMobile.addEventListener('change', (event) => {
			const selectedValue = selectMobile.options[selectMobile.selectedIndex].value;

			switch(selectedValue) {
				case '16-finale': mobileMatchsContainer.innerHTML = matchs16Array.join('');
				case '8-finale': mobileMatchsContainer.innerHTML = matchs8Array.join('');
				case '4-finale': mobileMatchsContainer.innerHTML = matchs4Array.join('');
			}
		})
	}
})

