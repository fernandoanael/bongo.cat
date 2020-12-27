import './styles/style.css'
import cookie from './modules/cookie'
import core from './modules/core'
import gtag from './modules/gtag'
$(window).on('load', cookie())
gtag()
core()
