import { Lamp } from './lamp.js';
import { Switcher } from './switcher.js';

function Lighter(rootElement) {
  this.rootElement = rootElement;
}

Lighter.prototype.render = function() {
  this.element = document.createElement('div');
  this.lamp = new Lamp(this.element, 'red');
  this.lamp.render();
  this.switcher = new Switcher(this.element, this.lamp);
  this.switcher.render();
  this.element.style.border = '3px solid blue';
  this.rootElement.append(this.element);
};

export { Lighter };
