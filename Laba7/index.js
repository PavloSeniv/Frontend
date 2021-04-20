function info() {
    console.log("Інструкція з використання");
    console.log("Позначення - " + "Що позначає");
    console.log("leg - " + "катет");
    console.log("hypotenuse - " + "гіпотенуза");
    console.log("adjacent angle  - " + "прилеглий до катета кут");
    console.log("opposite angle  - " + "протилежний до катета кут");
    console.log("angle - " + "один з двох гострих кутів(коли задана гіпотенуза");
    console.log("");
}

function radian_to_degress(radians) {
    return radians * (180 / Math.PI);
}

function degress_to_radians(degress) {
    return degress * (Math.PI / 180);
}

function triangle(value_1, type_1, value_2, type_2) {

    if (value_1 <= 0 || value_2 <= 0) {
        console.log("Zero or negative input")
        console.log("")
    } else if (type_1 == "leg" && type_2 == "leg") {//Два катети
        var a = value_1;
        var b = value_2;
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        alpha = Math.atan(a / b);
        var alpha = radian_to_degress(alpha);
        beta = Math.atan(b / a);
        var beta = radian_to_degress(beta);
        console.log("a = " + a);
        console.log("b = " + b);
        console.log("c = " + c);
        console.log("alpha = " + alpha);
        console.log("beta = " + beta);
        console.log('"success"');
        console.log("");
    } else if (type_1 == "leg" && type_2 == "hypotenuse") { //Катет та гіпотенуза
        var b = value_1;
        var c = value_2;
        a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
        alpha = Math.atan(a / b);
        var alpha = radian_to_degress(alpha);
        beta = Math.atan(b / a);
        var beta = radian_to_degress(beta);
        console.log("a = " + a);
        console.log("b = " + b);
        console.log("c = " + c);
        console.log("alpha = " + alpha);
        console.log("beta = " + beta);
        console.log('"success"');
        console.log("");
    } else if (type_1 == "leg" && type_2 == "adjacent angle") {//Катет та прилеглий кут
        var b = value_1;
        var alpha = value_2;
        c = b / Math.cos(degress_to_radians(alpha));
        a = b * Math.tan(degress_to_radians(alpha));
        beta = 90 - alpha;
        console.log("a = " + a);
        console.log("b = " + b);
        console.log("c = " + c);
        console.log("alpha = " + alpha);
        console.log("beta = " + beta);
        console.log('"success"');
        console.log("");
    } else if (type_1 == "leg" && type_2 == "opposite angle") { //Катет та протилежний кут
        var b = value_1;
        var beta = value_2;
        c = b / Math.sin(degress_to_radians(beta));
        a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
        alpha = 90 - beta;
        console.log("a = " + a);
        console.log("b = " + b);
        console.log("c = " + c);
        console.log("alpha = " + alpha);
        console.log("beta = " + beta);
        console.log('"success"');
        console.log("");
    } else if (type_1 == "hypotenuse" && type_2 == "angle") { //Гіпотенуза та гострий кут
        var c = value_1;
        var beta = value_2;
        alpha = 90 - beta;
        a = c * Math.cos(degress_to_radians(beta));
        b = c * Math.sin(degress_to_radians(beta));
        console.log("a = " + a);
        console.log("b = " + b);
        console.log("c = " + c);
        console.log("alpha = " + alpha);
        console.log("beta = " + beta);
        console.log('"success"');
        console.log("");
    } else if (type_1 != "leg" || type_1 != "hypotenuse" || type_1 != "adjacent angle" || type_1 != "opposite angle" || type_1 != "angle" || type_2 != "leg" || type_2 != "hypotenuse" || type_2 != "adjacent angle" || type_2 != "opposite angle" || type_2 != "angle") {
        console.log("failed");
    }
}

info();
triangle(25, "leg", 20, "leg");
triangle(7, "leg", 18, "hypotenuse");
triangle(14, "leg", 50, "adjacent angle");
triangle(5, "leg", 60, "opposite angle");
triangle(10, "hypotenuse", 70, "angle");
triangle(0, "leg", 20, "leg");