
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('9st0uI7lfeI2ncewu');
})();
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_h85s22s', 'template_t796ryu', event.target,"9st0uI7lfeI2ncewu")
            .then(function () {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Su consulta fue enviada',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}