(function() {
    'use strict';

    var Cookies = window.Cookies.noConflict();

    function changeLang() {
        var lang = this.value;

        var canonical = this.dataset.canonical;
        var path = '/';
        var href;
        var e = document.querySelector("link[hreflang=" + lang +"]");
        if(e) {
            href = e.href;
        } else {
            href = path + canonical;
        }

        Cookies.set('nf_lang', lang, { expires: 365 });

        location.href = href;
    }

    document.getElementById('lang-select').addEventListener('change', changeLang);
    document.getElementById('mobile-lang-select').addEventListener('change', changeLang);
}());
