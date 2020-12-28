feather.replace();
$(document).ready(function () {
    // set copyright year
    $('#year').text(new Date().getFullYear());

    // toggle card lists
    $('.li-toggler').click(function () {
        $(this).next('.li-desc').fadeToggle(300);
        $(this).children('.feather').css({ transition: '.3s' }).toggleClass('rotate');
    });
});