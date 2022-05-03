class Header extends HTMLElement {
	constructor() {
    // Always call super first in constructor
    super();
	}

	connectedCallback() {
	 this.innerHTML = `test`
	}
}

customElements.define('ap-header', Header);
