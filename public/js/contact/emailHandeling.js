//CONTACT FORM HANDELING
$("#submit").click(function (event) {
  var name = $("#frmNameA").val();
  var email = $("#frmEmailA").val();
  var phone = $("#frmPhoneNumA").val();
  var message = $("#frmMessageA").val();
  statusElm.empty();

  if (name.length < 1) {
    name.classList.add("invalid-entry");
    event.preventDefault();
  }

  if (email.length < 5 || !email.includes("@") || !email.includes(".")) {
    email.classList.add("invalid-entry");
    event.preventDefault();
  }

  if (phone.length < 1 || phone.isNaN()) {
    phone.classList.add("invalid-entry");
    event.preventDefault();
  }

  if (message.length < 1) {
    message.classList.add("invalid-entry");
    event.preventDefault();
  }
});
