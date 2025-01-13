var a = 10;
function globalVariable() {
    var b = 20;
    c = 30;
    //declaring without var makes it global variable
    document.writeln(a);
    document.writeln(c);
}

globalVariable();
document.writeln(a);
document.writeln(b);
document.writeln(c);
