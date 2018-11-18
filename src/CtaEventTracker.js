import BaseElement from 'BaseElement';
import GTM from 'gtm';

export default class CtaEventTracker extends BaseElement {
	
	constructor(el) {
        super(el);
        this.trackCategory = null;
        this.trackLabel = null;
        this.elText = null;
        this.pageName = document.title;
		this.init();
    }
	
	init() {
        this.el.addEventListener('click', this.onClick.bind(this));
    }
	
}