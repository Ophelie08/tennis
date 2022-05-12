class WinnerCard extends HTMLElement {

	constructor() {
		super();

		this._image = "";
		this._date = "";
		this._firstPlace = "";
		this._secondPlace = "";
	}

	connectedCallback() {
		this._image = this.getAttribute('image');
		this._date = this.getAttribute('date');
		this._firstPlace = this.getAttribute('first-place');
		this._secondPlace = this.getAttribute('second-place');

	 	this.innerHTML = `
        	<div class="ap-winner-card" style="background-image: url('${this._image}')">
            	<h3 class="ap-heading ap-heading--h3 ap-heading--primary font-weight-400">${this._date}</h3>
            	<h4 class="ap-heading ap-heading--h4 ap-heading--primary margin-top--64"><i class="fa-solid fa-trophy color--gold"></i>${this._firstPlace}</h4>
            	<h5 class="ap-heading ap-heading--h5 ap-heading--primary margin-top--16"><i class="fa-solid fa-trophy"></i>${this._secondPlace}</h5>
        	</div>
		`
	}
}

customElements.define('ap-winner-card', WinnerCard);
