var base = '/en';
var ln = window.navigator.language || navigator.browserLanguage;
ln = ln.substring(0,2);
switch(ln) {
case 'en': base = '/en'; break;
case 'de': base = '/de'; break;
case 'es': base = '/es'; break;
case 'ja': base = '/ja'; break;
case 'pl': base = '/pl'; break;
case 'zh_Hans': base = '/zh_Hans'; break;
case 'zh_Hant': base = '/zh_Hant'; break;
default:
    // use default
}

new_url = base +
    window.location.pathname.split('.html')[0] +
    window.location.search +
    window.location.hash;
window.location.href = new_url;
