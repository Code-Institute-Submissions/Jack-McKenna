function sendMail(contactForm) {
    emailjs.send("gmail", "jackmck", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_location": contactForm.location.value,
        "work_requested": contactForm.message.value
    })
    .then(
        function (response) {
            swal({
                title: "Your email has been submitted!",
                icon: "success"
            });
        },
        function (error) {
            swal({
                title: "There has been an error!",
                text: "Please try again later or email example@example.com",
                icon: "error"
            });
        });
}