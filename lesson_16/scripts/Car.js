class Car {
  constructor(root) {
    this.root = root;
    this.coordinates = {
      x: 0
    };
  }

  render() {
    this.element = document.createElement('div');
    const size = '100px';

    this.element.style.width = size;
    this.element.style.height = size;
    this.element.style.transform = `translateX(${this.coordinates.x}px)`;
    this.element.style.border = '1px solid red';

    this.root.append(this.element);
  }

  initInterval() {
    const self = this;
    const intervalHandler = () => {
      // callback
      console.log('second');
      console.log(self, this); // потеря контекста
      this.coordinates.x += 10;
      this.element.style.transform = `translateX(${this.coordinates.x}px)`;
    };
    setInterval(intervalHandler, 300);
  }
}

export { Car };
