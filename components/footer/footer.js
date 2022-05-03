class Footer extends HTMLElement {

	connectedCallback() {
	 this.innerHTML = `<footer class="ap-footer bg--black padding-bottom--80">
		<div class="ap-container">
			<div class="ap-grid">
				<div class="ap-grid__column ap-grid__column--md--4"> <!-- de 0 à 991px on reste avec des colonnes de 100% puis à 992px les colonnes passent à 33.333% -->
					<h4 class="ap-heading ap-heading--h4 ap-heading--primary margin-bottom--8 margin-bottom-md--24">Partenaires principaux</h4>
					<div class="ap-logo-partenaire">
						<img class="ap-logo__partenaire" src="assets/images/logo-moselle.png" alt="#" />
						<img class="ap-logo__partenaire" src="assets/images/logo-moulin.png" alt="#" />
						<img class="ap-logo__partenaire" src="assets/images/logo-waves.png" alt="#" />
						<img class="ap-logo__partenaire" src="assets/images/grand-est-logo.png" alt="#" />
					</div>
				</div>
				<div class="ap-grid__column ap-grid__column--md--4 margin-top--40 margin-top-md--0"> <!-- de 0 à 991px on reste avec des colonnes de 100% puis à 992px les colonnes passent à 33.333% -->
					<h4 class="ap-heading ap-heading--h4 ap-heading--primary">Contact</h4>
					<p class="ap-paragraph ap-paragraph--primary ap-paragraph--sm margin-top--8"><a class="ap-link ap-link--white" href="tel:06-07-76-24-33"><i class="fa-solid fa-phone"></i>Tél : 06 07 76 24 33</a></p>
					<p class="ap-paragraph ap-paragraph--primary ap-paragraph--sm margin-top--8"><a class="ap-link ap-link--white" href="mailto:contact@wavesopen57.com"><i class="fa-solid fa-envelope"></i>contact@wavesopen57.com</a></p>
					<p class="ap-paragraph ap-paragraph--primary ap-paragraph--sm margin-top--8"><a class="ap-link ap-link--white" href="www.wavesopen57.com"><i class="fa-solid fa-computer"></i>www.wavesopen57.com</a></p>
					<div class="ap-logo-social-network margin-top--24">
						<a class="ap-link ap-link--white" href="https://fr-fr.facebook.com/wavesopen57/"><i class="fa-brands fa-facebook fa-xl"></i></a>
						<a class="ap-link ap-link--white" href="https://twitter.com/wavesopen57"><i class="fa-brands fa-twitter fa-xl"></i></a>
						<a class="ap-link ap-link--white" href="https://www.instagram.com/wavesopen57/?hl=fr"><i class="fa-brands fa-instagram fa-xl"></i></a>
						<a class="ap-link ap-link--white" href="https://www.youtube.com/channel/UC5cSlOClwHK6FaAH13OU-tw"><i class="fa-brands fa-youtube fa-xl"></i></a>
					</div>
				</div>
				<div class="ap-grid__column ap-grid__column--md--4 margin-top--40  margin-top-md--0"> <!-- de 0 à 991px on reste avec des colonnes de 100% puis à 992px les colonnes passent à 33.333% -->
					<h4 class="ap-heading ap-heading--h4 ap-heading--primary">Copyright</h4>
					<p class="ap-paragraph ap-paragraph--primary ap-paragraph--xs margin-top--8">Copyright WAVES OPEN 2022 - developpé par <a class="ap-link ap-link--ap" href="https://www.agilepartner.net/">agilepartner</a></p>
				</div>
			</div>
		</div>
	</footer>
	`
	}
}

customElements.define('ap-footer', Footer);
