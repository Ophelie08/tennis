class Header extends HTMLElement {

	constructor() {
		super();

		this._selected = "";
	}

	connectedCallback() {
		this._selected = this.getAttribute('selected');

	 	this.innerHTML = `<header class="ap-header">
			<div class="ap-header__bar">
			<a class="ap-link__logo" href="index.html"><img class="ap-header__logo" src="assets/images/logo.svg" alt="logo waop" /></a>
				<div class="ap-burger" id="burger">
					<div class="ap-burger__line"></div>
					<div class="ap-burger__line"></div>
					<div class="ap-burger__line"></div>
				</div>
			</div>

			<nav class="ap-header__nav">
				<ul class="ap-header__nav__ul">
					<li class="ap-header__nav__li ${this._selected === 'home' && 'ap-header__nav__li--selected'}">
						<a class="ap-header__nav__link ap-header__nav__link--selected" href="/">
							<i class="fa-solid fa-home fa-lg"></i>
							<span>Accueil</span>
						</a>
					</li>
					<li class="ap-header__nav__li ${this._selected === 'table' && 'ap-header__nav__li--selected'}">
						<a class="ap-header__nav__link" href="table">
							<i class="fa-solid fa-table-columns fa-lg"></i>
							<span>Tableau</span>
						</a>
					</li>
					<li class="ap-header__nav__li ${this._selected === 'history' && 'ap-header__nav__li--selected'}">
						<a class="ap-header__nav__link" href="history">
							<i class="fa-solid fa-book fa-lg"></i>
							<span>Histoire</span>
						</a>
					</li>
					<li class="ap-header__nav__li ${this._selected === 'players' && 'ap-header__nav__li--selected'}">
						<a class="ap-header__nav__link" href="players">
							<i class="fa-solid fa-users fa-lg"></i>
							<span>Joueuses</span>
						</a>
					</li>
					<li class="ap-header__nav__li ${this._selected === 'program' && 'ap-header__nav__li--selected'}">
						<a class="ap-header__nav__link" href="program">
							<i class="fa-solid fa-list fa-lg"></i>
							<span>Programme</span>
						</a>
					</li>
					<li class="ap-header__nav__li">
						<a class="ap-header__nav__link" href="index.html#live">
							<i class="fa-brands fa-youtube fa-lg"></i>
							<span>Matchs en live</span>
						</a>
					</li>
					<li class="ap-header__nav__li">
					<a class="ap-header__nav__link" target="_blank" href="https://www.youtube.com/channel/UC5cSlOClwHK6FaAH13OU-tw">
						<i class="fa-solid fa-video fa-lg"></i>
						<span>Tous les matchs</span>
					</a>
				</li>
				</ul>
			</nav>
		</header>
	`
	}
}

customElements.define('ap-header', Header);
