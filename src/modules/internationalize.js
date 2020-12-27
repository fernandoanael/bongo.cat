const link_StrayRogue = "<a href=\"https://twitter.com/StrayRogue\" target=\"_blank\">@StrayRogue</a>";
const link_DitzyFlama = "<a href=\"https://twitter.com/DitzyFlama\" target=\"_blank\">@DitzyFlama</a>";
const link_EricHuber = "<a href=\"https://erics.site/?utm_source=bongo.cat\" target=\"_blank\">Eric Huber</a> (<a href=\"https://twitter.com/Externalizable\" target=\"_blank\">@Externalizable</a>)";

const i18n_map = {
    "Bongos": {
        "en": "Bongos",
        "ca": "Bongos"
    },
    "Cymbal": {
        "en": "Cymbal",
        "ca": "Plat"
    },
    "Cowbell": {
        "en": "Cowbell",
        "ca": "Esquellot"
    },
    "Tambourine": {
        "en": "Tambourine",
        "ca": "Pandereta"
    },
    "Meow": {
        "en": "Meow",
        "ca": "Miol"
    },
    "SPACE": {
        "en": "SPACE",
        "ca": "ESPAI"
    },
    "Piano": {
        "en": "Piano",
        "ca": "Piano"
    },
    "Marimba": {
        "en": "Marimba",
        "ca": "Marimba"
    },
    "Keyboard": {
        "en": "Keyboard",
        "ca": "Teclat"
    },
    "LEFT": {
        "en": "LEFT",
        "ca": "ESQUERRA"
    },
    "RIGHT": {
        "en": "RIGHT",
        "ca": "DRETA"
    },
    "MEOW": {
        "en": "MEOW",
        "ca": "MIOL"
    },
    "other-lang": {
        "en": "<a href=\"/?lang=ca\">En català</a>",
        "ca": "<a href=\"/?lang=en\">In English</a>"
    },
    "courtesy": {
        "en": "Art courtesy of " + link_StrayRogue,
        "ca": "Art per cortesia de " + link_StrayRogue
    },
    "meme": {
        "en": "Meme by " + link_DitzyFlama,
        "ca": "Meme de " + link_DitzyFlama
    },
    "website": {
        "en": "Website by " + link_EricHuber,
        "ca": "Lloc web d&#39" + link_EricHuber
    },
    "cookies": {
        "en": "This website uses cookies to analyze traffic via anonymized and aggregated data.",
        "ca": "Aquest lloc web utilitza galetes per analitzar el trànsit mitjançant dades agregades i anonimitzades."
    }
};
var supportedLanguages = { "ca": true, "en": true };
function preferredLang() {
    const urlParams = new URLSearchParams(window.location.search);
    var urlLang = urlParams.get("lang");
    if (urlLang !== null && supportedLanguages[urlLang]) {
        return urlLang;
    }

    var langs = window.navigator.languages;
    for (var i = 0; i < langs.length; i++) {
        /* 2 is the length of ISO 639-1 language codes
         * which are the start of BCP-47 codes
         */
        var code = langs[i].substring(0, 2);
        var l = supportedLanguages[code];
        if (l) {
            return code;
        }
    }
    return "en";
};


function internationalize() {
    var lang = preferredLang();
    $("[i18n]").each(function () {
        var id = $(this).attr("i18n");
        this.innerHTML = i18n_map[id][lang];
    });
}

export {i18n_map, internationalize, preferredLang}
