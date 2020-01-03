const url = require('url');

const myURL = new URL(
    'https://www.lego.com/en-us'
);

//serialized URL
console.log(myURL.href);
console.log(myURL.toString());
//host (root domain)
console.log(myURL.host);
//host name (does not get port)
console.log(myURL.hostname);
//pathname
console.log(myURL.pathname);
//serialized query
console.log(myURL.search);
//params object
console.log(myURL.searchParams);
//add param
myURL.searchParams.append('abc','123');
console.log(myURL.searchParams);
//loop through params
//myURL.searchParams.forEach(value, name) => console.log(``)