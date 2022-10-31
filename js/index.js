const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})

function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "",
        Password : "",
        To : '',
        From : document.getElementById("email").value,
        Subject : "New Message from GTF Website",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
}