$(document).ready(() => {
  var path = "";
  var input = "hello world";
  $("#about-text").terminal(
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
              "\nHi, I am happy that you discovered my file.\n\nMy name is Jakub Vantuch, and I'm a full-stack web developer from Czech republic.\n Apart from endless hours of coding my next passion is guitar.\n I am currently employed part time at ProRocketeers as web developer.\n For any questions about cooperation don't hesitate to contact me.\n\n I use arch btw."
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
      prompt: "root@coffeemachine~/About" + path + "$ > ",
    }
  );
  //$('#about-text').css("textAlign", "left");
});