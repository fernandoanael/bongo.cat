import './styles/style.css'
import cookie from './modules/cookie'
import core from './modules/core'
import gtag from './modules/gtag'
import {internationalize} from './modules/internationalize'
$(window).on('load', cookie())
gtag()
core()
$(window).on("languagechange", internationalize)
$(document).on("DOMContentLoaded", internationalize)
