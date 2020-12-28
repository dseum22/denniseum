feather.replace();
$(document).ready(function () {
    // set copyright year
    $('#year').text(new Date().getFullYear());

    // img loading
    $('.row').imagesLoaded(function () {
        $('.row').masonry({ percentPosition: true });
    });

    // set links
    $('.links-ex').each(function (elemnent) {
        let self = this;
        let data = $(self).data('storage');
        if (data) {
            storage.ref().child(`files/${data}.zip`).getDownloadURL().then(function (url) {
                $(self).prop('href', url);
            });
        }
    });
});