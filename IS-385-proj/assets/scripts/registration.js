function displayRegistrationSuccess() {
    swal({
        title: 'Registration Complete!',
        text: 'Welcome to Cook It!',
        type: 'success',
        confirmButtonText: "Go Home"
    }).then((result) => {
        window.location = "../../index.html"
    })
}