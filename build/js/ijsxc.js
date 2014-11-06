/*!
 * ijsxc v1.0.0 - 2014-11-06
 * 
 * Copyright (c) 2014 Klaus Herberth <klaus@jsxc.org> <br>
 * Released under the MIT license
 * 
 * Please see http://jsxc.org/
 * 
 * @author Klaus Herberth <klaus@jsxc.org>
 * @version 1.0.0
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

        $(document).on('ready.roster.jsxc', onRosterReady);
        $(document).on('toggle.roster.jsxc', onRosterToggle);
        
        if (jsxc.storage.getItem("abort")) {
            return;
        }

        jsxc.init({
            app_name: 'Ilias',
            loginForm: {
                form: '#form_',
	            jid: '#username',
	            pass: '#password'
            },
            logoutElement: $("[href^='logout.php']"),
            checkFlash: false,
            rosterAppend: 'body',
            root: '/ilias/Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/ijsxc/js/jsxc',
            turnCredentialsPath: './Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/ijsxc/ajax/getTurnCredentials.php',
            loadSettings: function() {
               var data = null;

               $.ajax({
                  async: false,
                  type: 'POST',
                  dataType: 'json',
                  url: jsxc.options.root + '/../../ajax/getSettings.php',
                  success: function(d) {
                     data = d;
                  },
                  error: function() {
                     jsxc.error('XHR error on getsettings.php');
                  }
               });

               return data;
            }
        });
    });

})(jQuery);
