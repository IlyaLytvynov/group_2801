class SlideShow {
  constructor(rootElement) {
    this.rootElement = rootElement;
  }

  init() {
    this.render();
    this.getData();
  }

  render() {
    this.slides = document.createElement('ul');

    this.rootElement.append(this.slides);
  }

  getData() {
    const xhr = new XMLHttpRequest();
    xhr.open(
      'GET',
      'https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/ads'
    );
    xhr.send();
    xhr.onload = () => {
      const data = JSON.parse(xhr.response);
      for (let obj of data) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const p = document.createElement('p');
        const h3 = document.createElement('h3');

        p.textContent = obj.description;
        h3.textContent = obj.title;
        img.src = obj.img;

        li.append(img);
        li.append(h3);
        li.append(p);

        this.slides.append(li);
      }
    };
  }
}

export { SlideShow };
