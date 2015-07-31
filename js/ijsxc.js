/* global jsxc */

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
            RTCPeerConfig: {
               url: './Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/ijsxc/ajax/getTurnCredentials.php'
            },
            loadSettings: function(username, password, cb) {
               $.ajax({
                  type: 'POST',
                  dataType: 'json',
                  url: jsxc.options.root + '/../../ajax/getSettings.php',
                  success: function(d) {
                     cb(d);
                  },
                  error: function() {
                     jsxc.error('XHR error on getsettings.php');

                     cb(false);
                  }
               });
            },
            displayRosterMinimized: function() {
               return $("[href^='logout.php']").length > 0;
            }
        });
    });

})(jQuery);
