var base = '/en/master';

var ln = window.navigator.language || navigator.browserLanguage;
ln = ln.substring(0,2);
console.log(ln);
switch(ln)
{
case 'de': base = '/de/master'; break;
case 'jp': base = '/jp/master'; break;
default:
    // use default
}

new_url = base + window.location.pathname + window.location.search +
    window.location.hash;
console.log(new_url);
window.location.href = new_url;
