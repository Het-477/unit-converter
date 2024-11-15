const unit = prompt("Enter a measurement (in cm)");

function isNumber(input) {
    if (typeof Number(input) === "number" && !isNaN(Number(input))) {
        return true
    } else {
        return false
    }
}

function convertCmToInch(cm) {
    const inch = cm / 2.54;
    return inch;
}

function convertCmToMetre(cm) {
    const meter = cm / 100;
    return meter;
}

function convertCmToMillimeter(cm) {
    const millimeter = cm * 10;
    return millimeter;
}

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