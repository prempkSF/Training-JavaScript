isPositive(0);
isEven(200);
isNegative(-11);

function isPositive(y) {

    if (y > 0) {
        document.writeln(y+" Postive");
    }
    else if (y === 0) {
        document.writeln(y+" Zero");
    }
    else {
        document.writeln(y+" Negative");
    }
}



function isEven(x) {
    var x = 6;
    if (x % 2 == 0) {
        document.writeln(x+" Even");
    }
    else {
        document.writeln(x+" Odd");
    }
}

function isNegative(z) {

    if (z > 0) {
        document.writeln(z+" Postive");
    }
    else {
        document.writeln(z+" Negative");
    }
}