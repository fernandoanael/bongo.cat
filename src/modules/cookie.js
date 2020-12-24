import { CookieConsent } from '@sandstreamdev/cookieconsent';
import '@sandstreamdev/cookieconsent/build/cookieconsent.min.css';
export default function() {
    new CookieConsent({
        "palette": {
          "popup": {
            "background": "#000"
          },
          "button": {
            "background": "#cba477"
          }
        },
        "showLink": false,
        "content": {
          "message": i18n_map["cookies"][preferredLang()]
        },
        "position": "bottom-right"
    })
}
