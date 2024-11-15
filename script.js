// takes input form the user via prompt 
const unit = prompt("Enter a measurement (in cm)");

// Checks if the entered input is a number or not
function isNumber(input) {
    if (typeof Number(input) === "number" && !isNaN(Number(input))) {
        return true
    } else {
        return false
    }
}

// converts cm to inch
function convertCmToInch(cm) {
    const inch = cm / 2.54;
    return inch;
}

// converts cm to meter
function convertCmToMetre(cm) {
    const meter = cm / 100;
    return meter;
}

// converts cm to millimeter 
function convertCmToMillimeter(cm) {
    const millimeter = cm * 10;
    return millimeter;
}

// converts cm to yard  
function convertCmToYard(cm) {
    const yard = cm / 91.44;
    return yard;
}


if (!isNumber(unit)) {
    alert("your entered input is not a number, refresh the page again to renter.");
} else {
    alert(`Your converted measurements:\n 
            centimeters: ${unit} \n
            cm to millimeter: ${convertCmToMillimeter(unit)}
            cm to meters: ${convertCmToMetre(unit)}
            cm to inches: ${convertCmToInch(unit)}
            cm to yard: ${convertCmToYard(unit)}
            `);
}