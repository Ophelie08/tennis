class PlayerCard extends HTMLElement {

	constructor() {
		super();

		this._image = "";
		this._name = "";
		this._nationality = "";
		this._flag = "";
		this._ranking = "";
		this._age = "";
		this._club = "";
	}

	connectedCallback() {
		this._image = this.getAttribute('image');
		this._name = this.getAttribute('name');
		this._nationality = this.getAttribute('nationality');
		this._flag = this.getAttribute('flag');
		this._ranking = this.getAttribute('ranking');
		this._age = this.getAttribute('age');
		this._club = this.getAttribute('club');

	 	this.innerHTML = `
		 <div class="ap-player-card" style="background-image: url('${this._image}')">
				<div class="ap-player-card__content">
					<h5 class="ap-heading ap-heading--h5 ap-heading--primary">${this._name}</h5>
					<h5 class="ap-heading ap-heading--h5 ap-heading--primary"><img class="ap-drapeau" src="${this._flag}" alt="#" />FR</h5>
					<p class="ap-paragraph ap-paragraph--primary ap-paragraph--sm">${this._ranking} &nbsp; ${this._age}</p>
					<p class="ap-paragraph ap-paragraph--primary ap-paragraph--sm margin-top--8"><i class="fa-solid fa-tennis-ball"></i>${this._club}</p>
				</div>
			</div>
	`
	}
}

customElements.define('ap-player-card', PlayerCard);
