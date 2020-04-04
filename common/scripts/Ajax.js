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

  post(successHandler, errorHandler, data) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', this.url);
    xhr.setRequestHeader('content-type', 'application/json');
    const sendData = typeof data === 'string' ? data : JSON.stringify(data);
    xhr.send(sendData);
    xhr.onload = () => {
      if (xhr.status >= 400) {
        return errorHandler(xhr);
      }
      successHandler(xhr.response);
    };
    xhr.onerror = () => {
      errorHandler(xhr);
    };
  }
}

export { Ajax };
