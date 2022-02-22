$(document).ready(() => {
  let path = "";
  window.location.hostname === '127.0.0.1' && (path = '/public')

  $("#contact-text").terminal(
    {
      help: function () {
        this.echo(
          "\ncat [FILENAME] -  print files\nls  -  list files and directories\ncd [DIRECTORY] -  change path to directory\n"
        );
      },
      cat: function (value) {
        switch (value) {
          case "about.txt": {
            this.echo(
              "\nHi, I am happy that you discovered my file.\n\nMy name is Jakub Vantuch, and I'm a full-stack web developer from Czech republic.\n Apart from endless hours of coding my next passion is guitar.\n I am currently employed part time at ProRocketeers and studying at POJFM.\n For any questions about cooperation don't hesitate to contact me.\n\n I use arch btw."
            );
            break;
          }
          case "contact.txt": {
            this.echo("\nMail: contact@vantuch.dev\n");
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
          "\n[[b;blue;none]about]\tabout.txt\t[[b;blue;none]contact]   contact.txt\t[[b;blue;none]music]\t[[b;blue;none]skills]\t[[b;blue;none]work]\n"
        );
      },
      cd: function (value) {
        switch (value) {
          case "about": {
            window.location.pathname = `${path}/about.html`;
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
          case "work": {
            window.location.pathname = `${path}/work.html`;
            break;
          }
          case "skills": {
            window.location.pathname = `${path}/skills.html`;
            break;
          }
          case "contact": {
            window.location.pathname = `${path}/contact.html`;
            break;
          }
          case "faq": {
            window.location.pathname = `${path}/faq.html`;
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
      prompt: "[root@coffeemachine ~/Contact]$ > ",
    }
  );
});
