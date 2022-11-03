const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})

// Elastic email/SMTPjs test

// function sendEmail() {
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "georgetowntrails@gmail.com",
//         Password : "18D92D3B8DBBA7B4C3514251BF64083681B2",
//         To : 'georgetowntrails@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "New Message from GTF Website",
//         Body : "Name: " + document.getElementById("name").value
//             + "<br> Email: " + document.getElementById("email").value
//             + "<br> Phone: " + document.getElementById("phone").value
//             + "<br> Message: " + document.getElementById("message").value
//     }).then(
//       message => alert(message)
//     );
// }

//EmailJS Test

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "contact_service";
    const templateID = "contact_form";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }