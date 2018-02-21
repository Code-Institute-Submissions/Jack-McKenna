function sendMail(contactForm) {
    emailjs.send("gmail", "jackmck", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_location": contactForm.location.value,
        "work_requested": contactForm.message.value
    })
    .then(
        function(response) {
            window.alert("Your email has been sent!!",response);
            location.reload();
        },
        function(error) {
            window.alert("FAILED TO SEND", error)
        });
}