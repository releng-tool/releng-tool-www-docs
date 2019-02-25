var base = '/en/master';

var ln = window.navigator.language || navigator.browserLanguage;
switch(ln)
{
default:
    // use default
}

new_url = base + window.location.pathname + window.location.search +
    window.location.hash;
window.location.href = new_url;
