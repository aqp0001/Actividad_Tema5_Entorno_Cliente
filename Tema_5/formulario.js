Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "aqp0001@alu.medac.es",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);