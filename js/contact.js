// init feather, luxon, and verifyset
feather.replace();
let DateTime = luxon.DateTime;
let verifyset = reloadVerify();

$(document).ready(function () {
    // set copyright year
    $('#year').text(new Date().getFullYear());

    // form submission
    $('form[name="responseForm"]').submit(function (event) {
        event.preventDefault();
        checkVerify(verifyset);
        if (!this.checkValidity()) {
            event.stopPropagation();
        } else {
            let temp = $('button[type="submit"]').html();
            $('form[name="responseForm"] fieldset').prop('disabled', true);
            $('button[type="submit"]').html('<div class="spinner-border" role="status"> <span class="visually-hidden">Loading...</span> </div>');
            db.collection('responses').doc(DateTime.local().setZone('America/Chicago').toFormat('yyyy-MM-dd hh:mm:ss a')).set({ name: $('input[name="firstname"]').val() + $('input[name="lastname"]').val(), email: $('input[name="email"]').val(), message: $('textarea[name="message"]').val() }).then(function () {
                $('button[type="submit"]').html(temp);
                verifyset = reloadVerify();
                $('form[name="responseForm"] fieldset').prop('disabled', false);
                $('form[name="responseForm"]').trigger('reset').removeClass('was-validated');
                pushAlert(['success', 'Success: the response was successfully sent!']);
            }).catch(function () {
                pushAlert(['danger', 'Error: there was a database error; please try again']);
            });
        }
        $(this).addClass('was-validated');
    });
});

function pushAlert(msgset) {
    $('form[name="responseForm"]').parent().append(`<div class="alert alert-${msgset[0]} mt-3" role="alert">${msgset[1]}</div>`);
    setTimeout(function () {
        // auto fadeout animation
        $('.alert').fadeOut(1000, function () {
            $(this).alert('close');
        });
    }, 2000);
}

function reloadVerify() {
    const a = randomInt(9);
    const b = randomInt(9);
    const verifyset = [a, b];
    $('[data-verify="label"]').text(`What is ${a.toString()} times ${b.toString()}?`);
    return verifyset;
};

function checkVerify(verifyset) {
    let verifycode = $('[data-verify="input"]');
    if (verifyset[0] * verifyset[1] === parseInt(verifycode.val())) {
        verifycode[0].setCustomValidity('');
    } else {
        verifycode[0].setCustomValidity('invalid');
    }
}

function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}