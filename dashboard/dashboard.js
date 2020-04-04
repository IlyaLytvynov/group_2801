const TOKEN = JSON.parse(window.localStorage.getItem('USER_TOKEN'));
console.log(TOKEN);
const URL = 'https://bloggers-crm-fe-prod.herokuapp.com/api/categories?q=';
const xhr = new XMLHttpRequest();
xhr.open('GET', URL);
xhr.setRequestHeader(
  'Access-Control-Allow-Headers',
  `Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization`
);
xhr.setRequestHeader('Authorization', `Bearer ${TOKEN.accessToken}`);

xhr.setRequestHeader(
  'Access-Control-Allow-Methods',
  'Access - Control - Allow - Methods, OPTIONS, DELETE, PUT, POST, GET, PATCH;'
);

xhr.send();
xhr.onload = () => {
  console.log(xhr.response);
};

// CSS SCSS
// CORE JS
// OOD in JS
// Webpack babel npm
// authectification
// REACT
