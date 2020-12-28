import './styles/style.css'
import cookie from './modules/cookie'
import bongoCat from './modules/bongoCat'
import gtag from './modules/gtag'
import {internationalize} from './modules/internationalize'

// Init modules
bongoCat()
gtag()

// Subscribe  event's callbacks
$(window).on('load', cookie())
$(window).on("languagechange", internationalize)
$(document).on("DOMContentLoaded", internationalize)
