var stable = 'latest';
var base = '/en/' + stable;

var ln = window.navigator.language || navigator.browserLanguage;
ln = ln.substring(0,2);
switch(ln)
{
case 'de': base = '/de/' + stable; break;
case 'jp': base = '/jp/' + stable; break;
default:
    // use default
}

new_url = base + window.location.pathname + window.location.search +
    window.location.hash;
window.location.href = new_url;
