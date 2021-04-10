console.log ("We're connected")
var passwordText = document.getElementById("password");
var submitBtn = document.getElementById("passBtn1");

// Add event listener to generate button
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  listOfPassword();
});


//Declaration of variables
  
  var lC = "abcdefghijklmnopqrstuvwxyz".split("");
  var uC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var nums = "0123456789".split("");
  var SpecChar = "!@#$%^&*()".split("");

  var availPasswordChoice = [];

  //ask user length of password

  function listOfPassword() {

    var passwordLength1= prompt("How many characters would you like in password?");

    //change user input to an integer

    passwordLength1 = parseInt(passwordLength1);

    while (passwordLength1 < 8 || passwordLength1 > 128)

      passwordLength1 = prompt("Length must be between 8 and 128 characters.  How many characters would you like for password?");


    //confirm if user wants upper case letters
    var upperCase = confirm ("would you like upper case letters in password?\nok = yes;cancel = No");

    if (upperCase) {
      availPasswordChoice = availPasswordChoice.concat(uC);

      console.log(availPasswordChoice);

    }

    //confirm if user wants lower case letters
    var lowerCase = confirm ("would you like lower case letters in password?\nok = yes;cancel = No");

    if (lowerCase) {
      availPasswordChoice = availPasswordChoice.concat(lC);

      console.log(availPasswordChoice);

    }

    //confirm if user wants numbers
    var numberString = confirm ("would you like numbers in password?\nok = yes;cancel = No");

    if (numberString) {
      availPasswordChoice = availPasswordChoice.concat(nums);

      console.log(availPasswordChoice);

    }

    //confirm if user wants special characters
    var specialString = confirm ("would you like special characters in password?\nok = yes;cancel = No");

    if (specialString) {
      availPasswordChoice = availPasswordChoice.concat(SpecChar);

      console.log(availPasswordChoice);

    }

      var userPassword = "";

      for (var i = 0; i < passwordLength1; i++) {
        var rand = Math.floor(Math.random() * availPasswordChoice.length);

        userPassword += availPasswordChoice[rand];

        console.log(userPassword);

      }
      console.log(userPassword);

      passwordText.textContent = userPassword;


  }
