// Conversion Metre
function coversionToMetre(){
    centimetre.value = metre.value * 100;
    inch.value = metre.value * 39.3701;
    feet.value = metre.value * 3.28084;
}

// Conversion Centimetre
function conversionToCentimetre(){
    inch.value = centimetre.value * 0.393701;
    feet.value = centimetre.value * 0.0328084;
    metre.value = centimetre.value * 0.01;
}

// Conversion Inch
function conversionToInch(){
    feet.value = inch.value * 0.0833333;
    metre.value = inch.value * 0.0254;
    centimetre.value = inch.value * 2.54;
}

// Conversion Feet
function conversionToFeet(){
    metre.value = feet.value * 0.3048;
    centimetre.value = feet.value * 30.48;
    inch.value = feet.value * 12;
}


// Conversion Millimetre
let milles =
// Conversion Yard
let yardes =
// Conversion Kilometre
let kilometres =

document.getElementById('millimetre').innerHTML = 'PUKRARARA';
document.getElementById('yard').innerHTML = 'PUKRARARA';
document.getElementById('kilometre').innerHTML = 'PUKRARARA';