var GLOBALS = {};

GLOBALS.body = document.body;
GLOBALS.$window = $(window);
GLOBALS.$body = $('body');
GLOBALS.$main = $('main.around-main');
GLOBALS.$interview = $('div.interviews-modal');
GLOBALS.$title = $('h1.main-header-title');
GLOBALS.state = {
    ismobile: GLOBALS.$body.hasClass('ismobile'),
    isandroid: GLOBALS.$body.hasClass('AndroidOS'),
    isios: GLOBALS.$body.hasClass('iOS')
};
GLOBALS.methods = {
    validate: {
        email: function (val) {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            return reg.test(val);
        }
    }
};