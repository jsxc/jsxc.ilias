/*!
 * ijsxc v1.0.0-beta1 - 2014-10-29
 * 
 * Copyright (c) 2014 Klaus Herberth <klaus@jsxc.org> <br>
 * Released under the MIT license
 * 
 * Please see http://jsxc.org/
 * 
 * @author Klaus Herberth <klaus@jsxc.org>
 * @version 1.0.0-beta1
 * @license MIT
 */

/* global jsxc, sjsxc, initPreferences, $, configureLinksInMessage:true, SOGoResizableTableInterface, ResourcesURL, onLoginClick, onFieldKeyDown */

(function($) {

    function onRosterToggle(event, state, duration) {
        var wrapper = $('#fixed_content');

        var roster_width = (state === 'shown') ? $('#jsxc_roster').outerWidth() : 0;

        wrapper.animate({
            right: (roster_width) + 'px'
        }, duration);
    }

    function onRosterReady() {

        var roster_right = parseFloat($('#jsxc_roster').css('right'));
        var mr = (204 + ($.isNumeric(roster_right) ? roster_right : 0));

        $('#fixed_content').css('right', mr + 'px');
    }

    $(function(){

        if (typeof ijsxc === 'undefined' || typeof ijsxc.config === 'undefined') {
            jsxc.error('No config for ijsxc found! Look at ijsxc.config.sample.js.');
            return;
        }

        var enable = JSON.parse(localStorage.getItem('ijsxc.enable'));
        ijsxc.config.enable = (typeof enable === 'undefined' || enable === null)? ijsxc.config.enable : enable;

        $(document).on('ready.roster.jsxc', onRosterReady);
        $(document).on('toggle.roster.jsxc', onRosterToggle);
        
        if (jsxc.storage.getItem("abort")) {
            return;
        }

        jsxc.init({
            loginForm: {
                form: '#form_',
	            jid: '#username',
	            pass: '#password'
            },
            logoutElement: $("[href^='logout.php']"),
            checkFlash: false,
            rosterAppend: 'body',
            root: '/ilias/Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/ijsxc/js/jsxc',
            turnCredentialsPath: './Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/ijsxc/ajax/getturncredentials.php',
//            formFound: function() {
//                var submit = pt("submit");
//                submit.stopObserving("click", onLoginClick);
//
//                var userName = pt("userName");
//                userName.stopObserving("keydown", onFieldKeyDown);
//
//                var passw = pt("password");
//                passw.stopObserving("keydown", onFieldKeyDown);
//
//                $('#connectForm').submit(onLoginClick);
//                $('#submit').click(function() {
//                    $('#connectForm').submit();
//                });
//                $('#userName, #password').keypress(function(ev) {
//                    if (ev.which !== 13) {
//                        return;
//                    }
//
//                    $('#connectForm').submit();
//                });
//            },
            loadSettings: function() {
                return ijsxc.config;
            }
        });
    });

})(jQuery);
