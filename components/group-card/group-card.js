class GroupCard extends HTMLElement {

	constructor() {
		super();

		this._image = "";
		this._name = "";
		this._ranking = "";
		this._winner = false;
		this._score = [];
	}

	connectedCallback() {
		this._image = this.getAttribute('image');
		this._name = this.getAttribute('name');
		this._ranking = this.getAttribute('ranking');
		this._winner = this.getAttribute('winner');
		this._score = this.getAttribute('score');

		this._scoreArray = this._score.split(',');

	 	this.innerHTML = `
			<div class="ap-group__item ${this._winner === "true" && `ap-group__item--winner`}">
				<div class="ap-group__item__left">
					<div class="ap-group__item__image">
						<img src="${this._image}" alt="" />
					</div>
					<div class="ap-group__item__infos">
						<p class="ap-paragraph ap-paragraph--xs color--white"># ${this._ranking}</p>
						<p class="ap-paragraph ap-paragraph--sm color--white">${this._name}</p>
					</div>
				</div>
				<div class="ap-group__item__right">
				${
					this._scoreArray.forEach(score => {
						return (
							`<p class="ap-paragraph ap-paragraph--sm color--white">${score}</p>`
						)
					})
				}
				</div>
			</div>
		`
	}
}

customElements.define('ap-group-card', GroupCard);
