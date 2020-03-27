function Switcher(rootElement, lamp) {
  this.rootElement = rootElement;
  this.lamp = lamp;
}

Switcher.prototype.render = function() {
  this.btn = document.createElement('button');
  this.btn.style.background = 'aqua';
  this.btn.textContent = 'on/off';
  this.btn.addEventListener('click', () => {
    this.toggle();
  });
  this.rootElement.append(this.btn);
};
Switcher.prototype.toggle = function() {
  this.lamp.toggle();
};

export { Switcher };
