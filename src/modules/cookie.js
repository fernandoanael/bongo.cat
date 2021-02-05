import { CookieConsent } from '@sandstreamdev/cookieconsent';
import '@sandstreamdev/cookieconsent/build/cookieconsent.min.css';
import {i18n_map, preferredLang} from './internationalize'
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
