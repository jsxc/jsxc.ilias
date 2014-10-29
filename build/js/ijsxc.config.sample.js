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

/**
 * Rename/copy this file to ijsxc.config.js and adjust the settings.
 */

var ijsxc = {};
ijsxc.config = {
    /** enable chat by default? */
    enable: true,
    xmpp: {
        /** url to bosh server binding. */
        url: '/http-bind/',

        /** domain part of your jid */
        domain: 'localhost',

        /** which resource should be used? Blank, means random. */
        resource: '',

        /** Allow user to overwrite xmpp settings? */
        overwrite: true,

        /** Should chat start on login? */
        onlogin: true
    }
};

