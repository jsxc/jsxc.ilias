/* global jsxc */

(function($) {

    function onRosterToggle(event, state) {
      if ($(window).width() < 768) {
         // Do not resize elements on extra small devices (bootstrap definition)
         return;
      }
      
        if (state === 'shown') {
           $('body').addClass('jsxc_rosterVisible');
        } else {
           $('body').removeClass('jsxc_rosterVisible');
        }
    }

    function onRosterReady() {
      if ($('#ilTopBarNav').length > 0) {
         var a = $('<a>');
         a.append('<span class="glyphicons glyphicons-chat">Chat</span>');
         a.click(function() {
           jsxc.gui.roster.toggle();
         });
         
         var li = $('<li>');
         li.attr('id', 'jsxcShowRoster');
         li.append(a);
         
         $('#ilTopBarNav > li').first().after(li);
      }

      if ($(window).width() < 768) {
          // Do not resize elements on extra small devices (bootstrap definition)
          return;
      }

        if ($('#jsxc_roster').hasClass('jsxc_state_hidden')) {
           $('body').removeClass('jsxc_rosterVisible');
        } else {
           $('body').addClass('jsxc_rosterVisible');
        }
    }

    $(function(){
        $(document).on('attached.jsxc', function(){
           $(document).one('ready.roster.jsxc', onRosterReady);
        });
        
        $(document).on('toggle.roster.jsxc', onRosterToggle);

        if (typeof jsxc === 'undefined' || jsxc.storage.getItem("abort")) {
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
