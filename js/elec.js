// zoom to adapt to tablets
document.body.style.zoom="100%"

// modals

//modal variables
var modal = document.getElementsByClassName('modal');
var designModal = document.getElementById('modalDesign');
//var installationModal = document.getElementById('installationModal')
//var repairModal = document.getElementById('repairModal')

//button variables
var designBtn = document.getElementById('designBtn');
//var installationBtn = document.getElementById('installationBtn')
//var repairBtn = document.getElementById('repairBtn')

//variables for closing
var spanClose = document.getElementsByClassName('spanClose');
var btnClose = document.getElementsByClassName('btnClose');



window.onload = function() {
    if(window.location.pathname.match(/\/portfolio/))
    {
        //click functions
        designBtn.onclick = function() {
            designModal.style.display = "block";
        }

        installationBtn.onclick = function() {
            installationModal.style.display = "block";
        };

        repairBtn.onclick = function() {
            repairModal.style.display = "block";
        };

        //close functions
        spanClose.onclick = function () {
            modal.style.display = "none";
        };

        btnClose.onclick = function () {
            modal.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }
};

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