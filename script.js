// These are the variables I will need to calulate the area of a square.
let length = 0
let width = 0

// This script will link our button to JavaScript. Ideally, I can use the variables for my calculations.
document.getElementById('button1').addEventListener('click', calculate)

// This function will use the variables to calculate the answers. It should work.
function calculate () {
  length = document.getElementById('textbox').value
  width = document.getElementById('textbox').value
  length = parseInt(length)
  width = parseInt(width)
  alert(length * width)
}
