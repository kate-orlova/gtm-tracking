export default class BaseElement {
	constructor(el) {
        this.el = el;
        this.isInited = false;
        this.listenerList = [];
    }
	
	init() {
        throw new Error('init() method is not implemented');
    }
	
	setVariables() {
        throw new Error('setVariables() is not implemented');
    }
	
	addListeners() {
        throw new Error('addListeners() is not implemented');
    }
	
	addListener(elem, eventName, eventCallback) {
        if (!elem || typeof elem.addEventListener !== 'function') return;

        elem.addEventListener(eventName, eventCallback);
        this.listenerList.push({
            elem,
            eventName,
            eventCallback
        });
    }
	
	removeListeners() {
        this.listenerList.forEach((listener) => {
            const { elem, eventName, eventCallback } = listener;

            elem.removeEventListener(eventName, eventCallback);
        });

        this.listenerList = [];
    }
}