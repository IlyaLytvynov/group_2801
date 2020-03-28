class Ajax {
  constructor(url) {
    this.url = url;
  }

  get(successHandler) {
    const xhr = new XMLHttpRequest();
    console.log('3');
    xhr.open('GET', this.url);
    xhr.setRequestHeader('myHeader', 'Hello world');
    xhr.send();
    xhr.onload = () => {
      console.log('4');
      successHandler(xhr.response);
    };
    console.log('5');
  }
}

export { Ajax };
