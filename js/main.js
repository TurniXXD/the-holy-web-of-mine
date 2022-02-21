var codingTextChildren = document.getElementById("coding-text").children;
var musicTextChildren = document.getElementById("music-text").children;

$(document).ready(function () {
  //CODING-MOUSEOVER
  $("#coding-title-container").mouseover(function () {
    $("#coding-breakline").css("transform", "skew(-10deg)"),
      $("#coding-breakline").css("width", "20vh"),
      $("#music-breakline").css("transform", "skew(-10deg)"),
      $("#music-breakline").css("width", "10vh"),
      $("#music-breakline").removeClass("col"),
      $("#music-breakline").addClass("col-1"),
      $("#coding-text-title").css("display", "none"),
      $("#music-text-title").css("display", "none"),
      $("#coding-text").css("opacity", 1),
      $("#coding-title").css("top", "8vh"),
      $("#coding-img").css("transform", "scale(1.6)"),
      $("#coding-img").css("transition", "all 5s ease-in-out"),
      $(codingTextChildren).css("display", "block");
  });
  $("#coding-breakline").mouseover(function () {
    $("#coding-breakline").css("transform", "skew(-10deg)"),
      $("#coding-breakline").css("width", "20vh"),
      $("#music-breakline").css("transform", "skew(-10deg)"),
      $("#music-breakline").css("width", "10vh"),
      $("#music-breakline").removeClass("col"),
      $("#music-breakline").addClass("col-1"),
      $("#coding-text-title").css("display", "none"),
      $("#music-text-title").css("display", "none"),
      $("#coding-text").css("opacity", 1),
      $("#coding-title").css("top", "8vh"),
      $("#coding-img").css("transform", "scale(1.6)"),
      $("#coding-img").css("transition", "all 5s ease-in-out"),
      $(codingTextChildren).css("display", "block");
  });
  //CODING-MOUSEOUT
  $("#coding-title-container").mouseout(function () {
    $("#coding-breakline").css("transform", "skew(0deg)"),
      $("#coding-breakline").css("width", "20vh"),
      $("#music-breakline").css("transform", "skew(0deg)"),
      $("#music-breakline").css("width", "10vh"),
      $("#music-breakline").removeClass("col-1"),
      $("#music-breakline").addClass("col"),
      $("#coding-text-title").css("display", "block"),
      $("#music-text-title").css("display", "block"),
      $("#coding-text").css("opacity", 0),
      $("#coding-title").css("top", "-100vh"),
      $("#coding-img").css("transform", "scale(1.225)"),
      $("#coding-img").css("transition", "all 2s ease-in-out"),
      $(codingTextChildren).css("display", "none");
  });
  $("#coding-breakline").mouseout(function () {
    $("#coding-breakline").css("transform", "skew(0deg)"),
      $("#coding-breakline").css("width", "20vh"),
      $("#music-breakline").css("transform", "skew(0deg)"),
      $("#music-breakline").css("width", "10vh"),
      $("#music-breakline").removeClass("col-1"),
      $("#music-breakline").addClass("col"),
      $("#coding-text-title").css("display", "block"),
      $("#music-text-title").css("display", "block"),
      $("#coding-text").css("opacity", 0),
      $("#coding-title").css("top", "-100vh"),
      $("#coding-img").css("transform", "scale(1.225)"),
      $("#coding-img").css("transition", "all 2s ease-in-out"),
      $(codingTextChildren).css("display", "none");
  });
  //MUSIC-MOUSEOVER
  $("#music-title-container").mouseover(function () {
    $("#music-breakline").css("transform", "skew(10deg)"),
      $("#music-breakline").css("width", "20vh"),
      $("#music-breakline").css("text-align", "left"),
      $("#coding-breakline").css("transform", "skew(10deg)"),
      $("#coding-breakline").css("width", "10vh"),
      $("#coding-breakline").removeClass("col"),
      $("#coding-breakline").addClass("col-1"),
      $("#coding-text-title").css("display", "none"),
      $("#music-text-title").css("display", "none"),
      $("#music-text").css("opacity", 1),
      $("#music-text").css("transition", "all 1s ease-in-out"),
      $("#music-title").css("top", "2.5vh"),
      $("#music-img").css("transform", "scale(1.6)"),
      $("#music-img").css("transition", "all 5s ease-in-out"),
      $(musicTextChildren).css("display", "block");
  });
  $("#music-breakline").mouseover(function () {
    $("#music-breakline").css("transform", "skew(10deg)"),
      $("#music-breakline").css("width", "20vh"),
      $("#music-breakline").css("text-align", "left"),
      $("#coding-breakline").css("transform", "skew(10deg)"),
      $("#coding-breakline").css("width", "10vh"),
      $("#coding-breakline").removeClass("col"),
      $("#coding-breakline").addClass("col-1"),
      $("#coding-text-title").css("display", "none"),
      $("#music-text-title").css("display", "none"),
      $("#music-text").css("opacity", 1),
      $("#music-text").css("transition", "all 1s ease-in-out"),
      $("#music-title").css("top", "2.5vh"),
      $("#music-img").css("transform", "scale(1.6)"),
      $("#music-img").css("transition", "all 5s ease-in-out"),
      $(musicTextChildren).css("display", "block");
  });
  //MUSIC-MOUSEOUT
  $("#music-title-container").mouseout(function () {
    $("#music-breakline").css("transform", "skew(0deg)"),
      $("#music-breakline").css("width", "20vh"),
      $("#coding-breakline").css("transform", "skew(0deg)"),
      $("#coding-breakline").css("width", "10vh"),
      $("#coding-breakline").removeClass("col-1"),
      $("#coding-breakline").addClass("col"),
      $("#coding-text-title").css("display", "block"),
      $("#music-text-title").css("display", "block"),
      $("#music-text").css("opacity", 0),
      $("#music-text").css("transition", "all 0.1s ease-in-out"),
      $("#music-title").css("top", "-100vh"),
      $("#music-img").css("transform", "scale(1.225)"),
      $("#music-img").css("transition", "all 2s ease-in-out"),
      $(musicTextChildren).css("display", "none");
  });
  $("#music-breakline").mouseout(function () {
    $("#music-breakline").css("transform", "skew(0deg)"),
      $("#music-breakline").css("width", "20vh"),
      $("#coding-breakline").css("transform", "skew(0deg)"),
      $("#coding-breakline").css("width", "10vh"),
      $("#coding-breakline").removeClass("col-1"),
      $("#coding-breakline").addClass("col"),
      $("#coding-text-title").css("display", "block"),
      $("#music-text-title").css("display", "block"),
      $("#music-text").css("opacity", 0),
      $("#music-text").css("transition", "all 0.1s ease-in-out"),
      $("#music-title").css("top", "-100vh"),
      $("#music-img").css("transform", "scale(1.225)"),
      $("#music-img").css("transition", "all 2s ease-in-out"),
      $(musicTextChildren).css("display", "none");
  });
});
