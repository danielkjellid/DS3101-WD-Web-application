$(document).ready(function() {

    const menu = $('nav.nav');
    const menuBtn = $('button.menu-btn');

    let toggle = (el) => {
        if (el.hasClass('hidden')) {
            el.removeClass('hidden');
            el.addClass('block');
        } else {
            el.removeClass('block');
            el.addClass('hidden');
        }
    }

    menuBtn.on('click', function() {
        toggle(menu);
    });
});
