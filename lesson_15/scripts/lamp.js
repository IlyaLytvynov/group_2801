function Lamp(rootElement, color) {
  this.rootElement = rootElement;
  this.color = color;
  this.element = null;
  this.isEnabled = false;
}

Lamp.prototype.render = function() {
  this.element = document.createElement('div');
  this.element.style.border = '1px solid red';
  this.element.style.borderRadius = '50%';
  this.element.style.width = '80px';
  this.element.style.height = '80px';

  this.rootElement.append(this.element);
};

Lamp.prototype.toggle = function() {
  if (this.isEnabled) {
    this.toggleOff();
  } else {
    this.toggleOn();
  }
};

Lamp.prototype.toggleOn = function() {
  this.isEnabled = true;
  this.element.style.backgroundColor = this.color;
};

Lamp.prototype.toggleOff = function() {
  this.isEnabled = false;
  this.element.style.backgroundColor = '';
};

export { Lamp };
