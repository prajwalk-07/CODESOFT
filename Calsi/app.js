var displayValue=""
let screen=document.querySelector("#display")
function clearDisplay(){
    displayValue=""
    screen.value=displayValue
}
function display(value){
    displayValue+=value
    screen.value=displayValue
}
function result() {
    try {
      displayValue = eval(displayValue);
      screen.value = displayValue;
    } catch(error) {
      screen.value = 'Error';
    }
  }
