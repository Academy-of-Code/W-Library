var if_char = 'Þ';
var else_char;
var elseif_char;
var while_char;
var var_char;
var function_char;
var const_char;
var let_char;
var return_char;
var class_char;

var input;
var output;

var inputElement = document.getElementById("input")
var outputElement = document.getElementById("output")

function defineInputEle(name){
	inputElement = name
}

function defineOutputEle(name){
	OutputElement = name
}

function replace(){
	output = inputElement.value.replace(if_char, "if")
  output = output.replace(else_char, "else")
  output = output.replace(elseif_char, "else if")
  output = output.replace(while_char, "while")
  output = output.replace(var_char, "var")
  output = output.replace(function_char, "function")
  output = output.replace(const_char, "const")
  output = output.replace(let_char, "let")
  output = output.replace(return_char, "return")
  output = output.replace(class_char, "class")
}


function compile(){
	outputElement.value = null
  try{
  	replace();
    eval(output);
  } catch (err){
  	outputElement.value = err
  }
  /*Log Function*/ (function () {
    if (!console) {
        console = {}
    }
    var old = console.log
    var logger = outputElement
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.value += (JSON && JSON.stringify ? JSON.stringify(message) : String(message))
        } else {
            logger.value += message
        }
    }
  })();
/*Error Function*/ (function () {
    if (!console) {
        console = {}
    }
    var old = console.error
    var logger = outputElement
    console.error = function (message) {
        if (typeof message == 'object') {
            logger.value += (JSON && JSON.stringify ? JSON.stringify(message) : String(message))
        } else {
            logger.value += message
        }
    }
  })();
}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
