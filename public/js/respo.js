function mobileNav() {
  var x = document.getElementById("nav-mobile");
  var item = document.getElementsByClassName("nav-item-text");
  if (x.style.display === "block") {
    x.style.display = "none";
    for (var i = 0; i < item.length; i++) {
      item[i].style.display = "none";
    }
  } else {
    x.style.display = "block";
    for (var i = 0; i < item.length; i++) {
      item[i].style.display = "block";
    }
  }

  console.log($(".nav-item-text").length);
}
