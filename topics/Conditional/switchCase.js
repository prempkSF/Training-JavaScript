function dayOfWeek(day) {
    //switch Case works with String, boolean, number
    switch (day) {
        case 1:
        {
            document.writeln("Monday");
            break;
        }
        case 2:
        {
            document.writeln("Tuesday");
            break;
        }
        case 3:
        {
            document.writeln("Wednesday");
            break;
        }
        case 4:
        {
            document.writeln("Thursday");
            break;
        }
        case 5:
        {
            document.writeln("Friday");
            break;
        }
        case 6:
        {
            document.writeln("Saturday");
            break;
        }
        case 7:
        {
            document.writeln("Sunday");
            break;
        }
        default:
        {
            document.writeln("Invalid Day")
        }
    }
}

dayOfWeek(2)