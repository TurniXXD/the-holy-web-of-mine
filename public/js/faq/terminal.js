$(document).ready(() => {
  var path = "";
  var input = "hello world";
  $("#faq-text").terminal(
    {
      h: function () {
        this.echo(
          "\ncat  -  print files\nls  -  list files and directories\ncd  -  change path to directory\n"
        );
      },
      cat: function (value) {
        switch (value) {
          case "about.txt": {
            this.echo(
              "\nHi, I am happy that you discovered my file.\nMy name is Jakub Vantuch,\nand I'm web developer from Czech republic.\nMy goal is to make you look good in digital world too.\nTo contact me navigate yourself\nto contact page or just type: cd contact\n\nI use Arch btw\n"
            );
            break;
          }
          case "sources.txt": {
            //this.echo('[[!ub;#06A0C8;none]jquery.terminal]\n[[!ub;#06A0C8;none]Bootstrap]\n[[!ub;#06A0C8;none]AOS]\n[[!ub;#06A0C8;none]Typewriter effect]');
            this.echo("\njquery.terminal\nBootstrap\nAOS\nTypewriter effect\n");
            break;
          }
          case "contact.txt": {
            this.echo("\nMail: contact@jakubvantuch.eu\n");
            break;
          }
          default: {
            this.echo("\nfile " + value + " doesn't exist\n", {
              finalize: function (div) {
                div.css("color", "red");
              },
            });
            break;
          }
        }
      },
      ls: function () {
        this.echo(
          "\n[[b;blue;none]about]\nabout.txt\n[[b;blue;none]contact]\ncontact.txt\n[[b;blue;none]music]\n[[b;blue;none]skills]\nsources.txt\n[[b;blue;none]work]\n"
        );
      },
      cd: function (value) {
        switch (value) {
          case "about": {
            window.location.href = "http://127.0.0.1:5501/public/about.html";
            break;
          }
          case "about.txt": {
            this.echo("\nabout.txt is not a directory\n");
            break;
          }
          case "contact.txt": {
            this.echo("\ncontact.txt is not a directory\n");
            break;
          }
          case "sources.txt": {
            this.echo("\nsources.txt is not a directory\n");
            break;
          }
          case "work": {
            window.location.href = "http://127.0.0.1:5501/public/work.html";
            break;
          }
          case "skills": {
            window.location.href = "http://127.0.0.1:5501/public/skills.html";
            break;
          }
          case "contact": {
            window.location.href = "http://127.0.0.1:5501/public/contact.html";
            break;
          }
          case "faq": {
            window.location.href = "http://127.0.0.1:5501/public/faq.html";
            break;
          }
          default: {
            this.echo("\ndirectory " + value + " doesn't exist\n");
            break;
          }
        }
      },
    },
    {
      greetings: "",
      prompt: "root@coffeemachine~/FAQ" + path + "$ > ",
    }
  );
  //$('#about-text').css("textAlign", "left");
});
