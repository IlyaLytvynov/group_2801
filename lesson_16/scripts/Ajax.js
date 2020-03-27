const xhr = new XMLHttpRequest();
xhr.open(
  'GET', // method
  'https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/ads'
);

xhr.send();
xhr.onload = function() {
  console.log('2');
  console.log('LOAD!!!', xhr);
};
