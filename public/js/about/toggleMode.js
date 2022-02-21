function toggleMode() {
  var checkBox = document.getElementById("toggleModeSwitch");
  var textUserFriendly = document.getElementById("toggle-user-friendly-text");
  var textProfessional = document.getElementById("toggle-professional-text");
  var aboutTextContainer = document.getElementById("about-text-container");
  var aboutTextContainerUF = document.getElementById(
    "about-text-container-u-f"
  );
  var aboutTextUF = document.getElementById("about-text-u-f");
  var helloContainer = document.getElementById("hello-container");
  if (checkBox.checked == true) {
    textProfessional.style.display = "block";
    textUserFriendly.style.display = "none";
    aboutTextContainer.style.display = "none";
    helloContainer.style.display = "none";
    aboutTextUF.style.display = "block";
    aboutTextContainerUF.style.display = "block";
  } else {
    textProfessional.style.display = "none";
    textUserFriendly.style.display = "block";
    aboutTextContainer.style.display = "block";
    aboutTextContainer.style.marginLeft = "15px";
    helloContainer.style.display = "block";
    aboutTextUF.style.display = "none";
    aboutTextContainerUF.style.display = "none";
  }
}

function toggleModeOnLoad() {
  var textUserFriendly = document.getElementById("toggle-user-friendly-text");
  var textProfessional = document.getElementById("toggle-professional-text");
  var aboutTextContainer = document.getElementById("about-text-container");
  var helloContainer = document.getElementById("hello-container");
  textProfessional.style.display = "none";
  textUserFriendly.style.display = "block";
  aboutTextContainer.style.display = "block";
  aboutTextContainer.style.marginLeft = "15px";
  helloContainer.style.display = "block";
  helloContainer.style.height = "5%";
  helloContainer.style.marginLeft = "15px";
}
