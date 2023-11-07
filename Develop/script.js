// Assignment code here

  var x = prompt("Enter how many characters you want your password to be. It must be at least 8 but not more than 128 characters long.");
  var num1 = parseInt(x);
  if (num1 < 8) {
    while (num1 < 8) {
      alert("Too short!");
      var x = prompt("Enter how many characters you want your password to be. It must be at least 8 but not more than 128 characters long.");
      var num1 = parseInt(x);
      if (num1 > 128) {
        while (num1 > 128) {
          alert("Too long!");
          var x = prompt("Enter how many characters you want your password to be. It must be at least 8 but not more than 128 characters long.");
          var num1 = parseInt(x);
        }
      }
      else {
        alert("Good choice!");
      }
    }
  } else if (num1 >128) {
    while (num1 > 128) {
      alert("Too long!");
      var x = prompt("Enter how many characters you want your password to be. It must be at least 8 but not more than 128 characters long.");
      var num1 = parseInt(x);
      if (num1 < 8) {
        while (num1 < 8) {
          alert("Too short!");
          var x = prompt("Enter how many characters you want your password to be. It must be at least 8 but not more than 128 characters long.");
          var num1 = parseInt(x);
        }
      }
      else {
        alert("Good choice!");
      }
    }
  } else {
    alert("Good choice!");
  }

var lowerc = prompt("Include lowercase letters? Y for yes, N for no.");
while (lowerc) {
  if (lowerc === "Y"){
    alert("Good choice!");
    break;
  }
  else if (lowerc === "N"){
    alert("Good choice!");
    break;
  }
  else {
      var lowerc = prompt("Include lowercase letters? Y for yes, N for no.");
    }
}

var upperc = prompt("Include uppercase letters? Y for yes, N for no.");
while (upperc) {
  if (upperc === "Y"){
    alert("Good choice!");
    break;
  }
  else if (upperc === "N"){
    alert("Good choice!");
    break;
  }
  else {
      var upperc = prompt("Include uppercase letters? Y for yes, N for no.");
    }
}

var numeric = prompt("Include numerics? Y for yes, N for no.");
while (numeric) {
  if (numeric === "Y"){
    alert("Good choice!");
    break;
  }
  else if (numeric === "N"){
    alert("Good choice!");
    break;
  }
  else {
      var numeric = prompt("Include numerics? Y for yes, N for no.");
    }
}

var specc = prompt("Include special characters? Y for yes, N for no.");
while (specc) {
  if (specc === "Y"){
    alert("Good choice!");
    break;
  }
  else if (specc === "N"){
    alert("Good choice!");
    break;
  }
  else {
      var specc= prompt("Include special characters? Y for yes, N for no.");
    }
}

function generatePassword() {

const Low = "abcdefghijklmnopqrstuvwxyz"
const Up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const Num = "0123456789"
const Spec = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

if (lowerc === "Y" && upperc ==="Y" && numeric === "Y" && specc === "Y") {
  const opt5 = Low.concat(Up, Num, Spec);
  function makepw2(length) {
    let result = '';
    const opt5Length = opt5.length;
    let counter = 0;
    while (counter < length) {
      result += opt5.charAt(Math.floor(Math.random() * opt5Length));
      counter += 1;
    }
    return result;
  }
  console.log(makepw2(num1))
}

else if (lowerc === "Y" && upperc ==="Y" && numeric === "Y") {
  const opt4 = Low.concat(Up, Num);
  function makepw3(length) {
    let result = '';
    const opt4Length = opt4.length;
    let counter = 0;
    while (counter < length) {
      result += opt4.charAt(Math.floor(Math.random() * opt4Length));
      counter += 1;
    }
    return result;
  }
  console.log(makepw3(num1))
}

else if (upperc === "Y" && numeric === "Y" && specc === "Y") {
  const opt9 = Up.concat(Num, Spec);
  function makepw4(length) {
    let result = '';
    const opt9Length = opt9.length;
    let counter = 0;
    while (counter < length) {
      result += opt9.charAt(Math.floor(Math.random() * opt9Length));
      counter += 1;
    }
    return result;
  }
  console.log(makepw4(num1))
}

else if (lowerc === "Y" && upperc === "Y" && specc === "Y") {
  const opt10 = Low.concat(Up, Spec);
  function makepw5(length) {
    let result = '';
    const opt10Length = opt10.length;
    let counter = 0;
    while (counter < length) {
      result += opt10.charAt(Math.floor(Math.random() * opt10Length));
      counter += 1;
    }
    return result;
  }
  console.log(makepw5(num1))
}

else if (lowerc === "Y" && numeric === "Y" && specc === "Y") {
  const opt11 = Low.concat(Num, Spec);
  function makepw6(length) {
    let result = '';
    const opt11Length = opt11.length;
    let counter = 0;
    while (counter < length) {
      result += opt11.charAt(Math.floor(Math.random() * opt11Length));
      counter += 1;
    }
    return result;
  }
  console.log(makepw6(num1))
}

else if (lowerc === "Y" && upperc ==="Y") {
  const opt1 = Low.concat(Up);
  function makepw1(length) {
    let result = '';
    const opt1Length = opt1.length;
    let counter = 0;
    while (counter < length) {
      result += opt1.charAt(Math.floor(Math.random() * opt1Length));
      counter += 1;
    }
    return result;
  }
  console.log(makepw1(num1))
}

else if (lowerc === "Y" && numeric === "Y") {
  const opt2 = Low.concat(Num);
  function makepw7(length) {
    let result = '';
    const opt2Length = opt2.length;
    let counter = 0;
    while (counter < length) {
      result += opt2.charAt(Math.floor(Math.random() * opt2Length));
      counter += 1;
    }
    return result;
  }
  console.log(makepw7(num1))
}

else if (lowerc === "Y" && specc === "Y") {
  const opt3 = Low.concat(Spec);
  function makepw8(length) {
    let result = '';
    const opt3Length = opt3.length;
    let counter = 0;
    while (counter < length) {
      result += opt3.charAt(Math.floor(Math.random() * opt3Length));
      counter += 1;
    }
    return result;
  }
  console.log(makepw8(num1))
}


else if (upperc === "Y" && numeric === "Y") {
  const opt6 = Up.concat(Num);
  function makepw9(length) {
    let result = '';
    const opt6Length = opt6.length;
    let counter = 0;
    while (counter < length) {
      result += opt6.charAt(Math.floor(Math.random() * opt6Length));
      counter += 1;
    }
    return result;
  }
  console.log(makepw9(num1))
}

else if (upperc === "Y" && specc === "Y") {
  const opt7 = Up.concat(Spec);
  function makepw10(length) {
    let result = '';
    const opt7Length = opt7.length;
    let counter = 0;
    while (counter < length) {
      result += opt7.charAt(Math.floor(Math.random() * opt7Length));
      counter += 1;
    }
    return result;
  }
  console.log(makepw10(num1))
}

else if (numeric === "Y" && specc === "Y") {
  const opt8 = Num.concat(Spec);
  function makepw11(length) {
    let result = '';
    const opt8Length = opt8.length;
    let counter = 0;
    while (counter < length) {
      result += opt8.charAt(Math.floor(Math.random() * opt8Length));
      counter += 1;
    }
    return result;
  }
  console.log(makepw11(num1))
}

else if (upperc === "Y") {
  const opt12 = Up;
  function makepw12(length) {
    let result = '';
    const opt12Length = opt12.length;
    let counter = 0;
    while (counter < length) {
      result += opt12.charAt(Math.floor(Math.random() * opt12Length));
      counter += 1;
    }
    return result;
  }
  console.log(makepw12(num1))
}

else if (lowerc === "Y") {
  const opt13 = Low;
  function makepw13(length) {
    let result = '';
    const opt13Length = opt13.length;
    let counter = 0;
    while (counter < length) {
      result += opt13.charAt(Math.floor(Math.random() * opt13Length));
      counter += 1;
    }
    return result;
  }
  console.log(makepw13(num1))
}

else if (numeric === "Y") {
  const opt14 = Num;
  function makepw14(length) {
    let result = '';
    const opt14Length = opt14.length;
    let counter = 0;
    while (counter < length) {
      result += opt14.charAt(Math.floor(Math.random() * opt14Length));
      counter += 1;
    }
    return result;
  }
  console.log(makepw14(num1))
}

else if (specc === "Y") {
  const opt15 = Spec;
  function makepw15(length) {
    let result = '';
    const opt15Length = opt15.length;
    let counter = 0;
    while (counter < length) {
      result += opt15.charAt(Math.floor(Math.random() * opt15Length));
      counter += 1;
    }
    return result;
  }
  console.log(makepw15(num1))
}
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
