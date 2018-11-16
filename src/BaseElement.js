export default class BaseElement {
	constructor(el) {
        this.el = el;
        this.isInited = false;
        this.listenerList = [];
    }
	
	init() {
        throw new Error('Init() method is not implemented');
    }
}