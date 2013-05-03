/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        'backbone-modelbinder': [ 'webjars!jquery.js', 'webjars!backbone.js', 'webjars!underscore.js' ]
    }
});
