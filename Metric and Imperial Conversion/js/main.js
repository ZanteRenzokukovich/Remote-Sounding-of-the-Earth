document.getElementById('hide').style.display = 'none';

function clickLength(){
       document.getElementById('hide').style.display = '';
       let amountEnter = userEnter.value;
       document.getElementById('resultLength').innerHTML = "<strong>Conversion Result:</strong> " + amountEnter;

}

document.getElementById('hide-2').style.display = 'none';