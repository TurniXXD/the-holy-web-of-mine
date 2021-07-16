import '@css/index.css';
var $ = require('jquery');
require('jquery.terminal')($);

window.onload = function () {
  typeWriter()
  terminal()
};

//https://www.youtube.com/watch?v=POX3dT-pB4E&t=1066s&ab_channel=TraversyMedia
const typeWriter = () => {
	// ES6 Class
	class TypeWriterH {
		constructor(txtElement, words, wait = 3000) {
			this.txtElement = txtElement;
			this.words = words;
			this.txt = '';
			this.wordIndex = 0;
			this.wait = parseInt(wait, 10);
			this.type();
			this.isDeleting = false;
		}

		type() {
			// Current index of word
			const current = this.wordIndex % this.words.length;
			// Get full text of current word
			const fullTxt = this.words[current];

			// Check if deleting
			if(this.isDeleting) {
				// Remove char
				this.txt = fullTxt.substring(0, this.txt.length - 1);
			} else {
				// Add char
				this.txt = fullTxt.substring(0, this.txt.length + 1);
			}

			// Insert txt into element
			this.txtElement.innerHTML = `${this.txt}`;

			// Initial Type Speed
			let typeSpeed = 75;

			if(this.isDeleting) {
				typeSpeed /= 2;
			}

			// If word is complete
			if(!this.isDeleting && this.txt === fullTxt) {
				// Make pause at end
				typeSpeed = this.wait;
				// Set delete to true
				this.isDeleting = true;
			} else if(this.isDeleting && this.txt === '') {
				this.isDeleting = false;
				// Move to next word
				this.wordIndex++;
				// Pause before start typing
				typeSpeed = 500;
			}

			setTimeout(() => this.type(), typeSpeed);
		}
	}

	// Init On DOM Load
	document.addEventListener('DOMContentLoaded', initTypewriterHello());

	// Init App
	function initTypewriterHello() {
		const txtElement = document.querySelector('#hello-text');
		const words = JSON.parse(txtElement.getAttribute('data-words'));
		const wait = txtElement.getAttribute('data-wait');
		// Init TypeWriter
		new TypeWriterH(txtElement, words, wait);
	}
};

const terminal = () => {
  var path = '';
  var input = 'hello world'
  $('#about-text').terminal({
    h: function() {
      this.echo('\ncat  -  print files\nls  -  list files and directories\ncd  -  change path to directory\n');
    },
    cat: function(value) {
      switch (value) {
        case 'about.txt':
          {
            this.echo("\nHi, I am happy that you discovered my file.\nMy name is Jakub Vantuch,\nand I'm web developer from Czech republic.\nMy goal is to make you look good in digital world too.\nTo contact me navigate yourself\nto contact page or just type: cd contact\n\nI use Arch btw\n");
            break;
          }
        case 'sources.txt':
          {
            //this.echo('[[!ub;#06A0C8;none]jquery.terminal]\n[[!ub;#06A0C8;none]Bootstrap]\n[[!ub;#06A0C8;none]AOS]\n[[!ub;#06A0C8;none]Typewriter effect]');
            this.echo('\njquery.terminal\nBootstrap\nAOS\nTypewriter effect\n');
            break;
          }
        case 'contact.txt':
          {
            this.echo('\nTel: +420 735023812\nMail: contact@jakubvantuch.eu\n');
            break;
          }
        default:
          {
            this.echo('\nfile ' + value + " doesn't exist\n", {finalize: function(div) {div.css("color", "red");}})
            break;
          }
      }
    },
    ls: function() {
      this.echo('\n[[b;blue;none]about]\nabout.txt\n[[b;blue;none]contact]\ncontact.txt\n[[b;blue;none]music]\n[[b;blue;none]skills]\nsources.txt\n[[b;blue;none]work]\n')
    },
    cd: function(value) {
      switch (value){
        case 'about':
          {
            window.location.href = `${window.location.origin}/about.html`;
            break;
          }
        case 'about.txt':
          {
            this.echo('\nabout.txt is not a directory\n')
            break;
          }
        case 'contact.txt':
          {
            this.echo('\ncontact.txt is not a directory\n')
            break;
          }
        case 'sources.txt':
          {
            this.echo('\nsources.txt is not a directory\n')
            break;
          }
        case 'work':
          {
            window.location.href = `${window.location.origin}/work.html`;
            break;
          }
        case 'skills':
          {
            window.location.href = `${window.location.origin}/skills.html`;
            break;
          }
        case 'contact':
          {
            window.location.href = `${window.location.origin}/contact.html`;
            break;
          }
        case 'faq':
          {
            window.location.href = `${window.location.origin}/faq.html`;
            break;
          }
        default: 
          {
            this.echo('\ndirectory ' + value + " doesn't exist\n")
            break;
          }
      }
    }
  },
  {
    greetings: '', 
    prompt: 'root@code~/About' + path + '$ > ',
  }
  );
  //$('#about-text').css("textAlign", "left");
};

function toggleMode() {
  var checkBox = document.getElementById("toggleModeSwitch");
	var textUserFriendly = document.getElementById("toggle-user-friendly-text");
	var textProfessional = document.getElementById("toggle-professional-text");
	var aboutTextContainer = document.getElementById("about-text-container");
	var aboutTextContainerUF = document.getElementById("about-text-container-u-f");
	var aboutTextUF = document.getElementById("about-text-u-f");
	var helloContainer = document.getElementById("hello-container");
  if (checkBox.checked == true){
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
