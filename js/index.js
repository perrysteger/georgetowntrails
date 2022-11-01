const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "georgetowntrails@gmail.com",
        Password : "18D92D3B8DBBA7B4C3514251BF64083681B2",
        To : 'georgetowntrails@gmail.com',
        From : "georgetowntrails@gmail.com", //document.getElementById("email").value,
        Subject : "New Message from GTF Website",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
}