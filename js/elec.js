// zoom to adapt to tablets
document.body.style.zoom="100%"

// email submit JS
$('#contact-Form').submit(function(e) {
    var name = document.getElementById('usr')
    var email = document.getElementById('email')
    var text = document.getElementById('comment')

    if (!name.value || !email.value || !text.value) {
        alertify.error('Not all entries are valid. Please review and submit')
    } else {
        e.preventDefault()
        $(this).get(0).reset()
        alertify.success('Your message has been sent!')
    }
});