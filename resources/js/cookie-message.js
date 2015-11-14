/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($) {
    $.cookie = function(key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);

function showCookiesMessage(params)
{
    if(params.timeOut==null)params.timeOut = 9999999;
    //if(params.width==null)params.width = 978;
    if(params.height==null)params.height = 30;
    if(params.fontSize==null)params.fontSize = 20;
    if(params.opacity==null)params.opacity = 0.7;
    if(params.fontColor==null)params.fontColor = "#FFFFFF";
    if(params.fontFamily==null)params.fontFamily = "georgia";
    if(params.background==null)params.background = "#2D4563";
    if(params.messageText==null)params.messageText = new Array();
    if(params.messageText[0]==null)params.messageText[0] = "By continuing to use the site you agree to our ";
    if(params.messageText[1]==null)params.messageText[1] = "cookies policy";
    if(params.messageText[2]==null)params.messageText[2] = ".";
    if(params.acceptText==null)params.acceptText = "Accept Cookies";
    if(params.termsLink==null)params.termsLink = "";
    if(params.paddingTop==null)params.paddingTop = 0;
    if(params.acceptPadding==null)params.acceptPadding = 5;
    if(params.acceptMargin==null)params.acceptMargin = 3;

    setTimeout(function(){$("#cookieMessage").fadeOut(1000);},params.timeOut);
	
    if($.cookie("cookiesOk")==null)
    {
       $('body').append('<div id="cookieMessage" style="z-index:9999;position:fixed; bottom:0; width:100%; margin-left:auto; margin-right:auto; height:'+params.height+'px;"><div style="width:'+params.width+'px; margin-right:auto; margin-left:auto;position:relative;"><div id="cookieMessageInner" style="padding-left:10px; padding-top:'+params.paddingTop+'px; bottom:0; margin-left:auto; margin-right:auto; height:'+params.height+'px; background-color:'+params.background+'; opacity:'+params.opacity+'"></div><div id="cookieText" style=" pading-left:10px;color:'+params.fontColor+'; font-size:'+params.fontSize+'px; font-family:'+"'"+params.fontFamily+"'"+'; position:absolute; top:'+params.paddingTop+'px; left:10px;">'+params.messageText[0]+'<a href="'+params.termsLink+'" target="_blank" style="color:'+params.fontColor+'; text-decoration:underline;">'+params.messageText[1]+'</a>'+params.messageText[2]+'</div><div id="acceptCookies" style="float: right; background-color:'+params.background+';font-size:'+params.fontSize+'px;color:'+params.fontColor+'; font-family:'+"'"+params.fontFamily+"'"+'; opacity:1; position:absolute; right:0; top:0; padding:'+params.acceptPadding+'px; margin-right:10px; margin-top:'+params.acceptMargin+'px; cursor: pointer;">'+params.acceptText+'</div></div></div>');
    }
}


	
	