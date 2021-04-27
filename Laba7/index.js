function info() {
    console.log("%cІнструкція з використання", "color:black;background-color:white;");
    console.log("Позначення - Що позначає");
    console.log("leg_a - катет a");
    console.log("leg_b - катет b");
    console.log("hypotenuse - гіпотенуза");
    console.log("adjacent angle  - прилеглий до катета кут");
    console.log("opposite angle  - протилежний до катета кут");
    console.log("angle(_beta,_alpha) - один з двох гострих кутів(коли задана гіпотенуза");
    console.log("%c--------------------------", "color:yellow;");
}

function radian_to_degrees(radians) {
    return radians * (180 / Math.PI);
}

function degrees_to_radians(degrees) {
    return degrees * (Math.PI / 180);
}

function console_result(a, b, c, alpha, beta) {
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + c);
    console.log("alpha = " + alpha);
    console.log("beta = " + beta);
    console.log('%c"success"', "color:green;");
    console.log("%c--------------------------", "color:yellow;");
}

function triangle(value_1, type_1, value_2, type_2) {
    let a, b, c, alpha, beta;

    if (type_1 === "leg_a" && type_2 === "leg_b") {
        a = value_1;
        b = value_2;
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        alpha = radian_to_degrees(Math.atan(a / b));
        beta = radian_to_degrees(Math.atan(b / a));
        console.log('%cДва катети', "color:deeppink;");
        console_result(a, b, c, alpha, beta);
    } else if (type_1 === "leg_b" && type_2 === "hypotenuse") {
        b = value_1;
        c = value_2;
        a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
        alpha = radian_to_degrees(Math.atan(a / b));
        beta = radian_to_degrees(Math.atan(b / a));
        console.log('%cКатет b та гіпотенуза', "color:deeppink;");
        console_result(a, b, c, alpha, beta);
    } else if (type_1 === "leg_a" && type_2 === "hypotenuse") {
        a = value_1;
        c = value_2;
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        alpha = radian_to_degrees(Math.atan(a / b));
        beta = radian_to_degrees(Math.atan(b / a));
        console.log('%cКатет a та гіпотенуза', "color:deeppink;");
        console_result(a, b, c, alpha, beta);
    } else if (type_1 === "leg_b" && type_2 === "adjacent angle") {
        b = value_1;
        alpha = value_2;
        c = b / Math.cos(degrees_to_radians(alpha));
        a = b * Math.tan(degrees_to_radians(alpha));
        beta = 90 - alpha;
        console.log('%cКатет b та прилеглий кут alpha', "color:deeppink;");
        console_result(a, b, c, alpha, beta);
    } else if (type_1 === "leg_a" && type_2 === "adjacent angle") {
        a = value_1;
        beta = value_2;
        c = a / Math.cos(degrees_to_radians(beta));
        b = a * Math.tan(degrees_to_radians(beta));
        alpha = 90 - beta;
        console.log('%cКатет a та прилеглий кут beta', "color:deeppink;");
        console_result(a, b, c, alpha, beta);
    } else if (type_1 === "leg_b" && type_2 === "opposite angle") {
        b = value_1;
        beta = value_2;
        c = b / Math.sin(degrees_to_radians(beta));
        a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
        alpha = 90 - beta;
        console_result(a, b, c, alpha, beta);
    } else if (type_1 === "leg_a" && type_2 === "opposite angle") {
        a = value_1;
        alpha = value_2;
        c = a / Math.sin(degrees_to_radians(alpha));
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        beta = 90 - alpha;
        console.log('%cКатет a та протилежний кут alpha', "color:deeppink;");
        console_result(a, b, c, alpha, beta);
    } else if (type_1 === "hypotenuse" && type_2 === "angle_beta") {
        c = value_1;
        beta = value_2;
        alpha = 90 - beta;
        a = c * Math.cos(degrees_to_radians(beta));
        b = c * Math.sin(degrees_to_radians(beta));
        console.log('%cГіпотенуза та кут beta', "color:deeppink;");
        console_result(a, b, c, alpha, beta);
    } else if (type_1 === "hypotenuse" && type_2 === "angle_alpha") {
        c = value_1;
        alpha = value_2;
        beta = 90 - alpha;
        a = c * Math.cos(degrees_to_radians(alpha));
        b = c * Math.sin(degrees_to_radians(alpha));
        console.log('%cГіпотенуза та кут alpha', "color:deeppink;");
        console_result(a, b, c, alpha, beta);
    } else if (value_1 <= 0 || value_2 <= 0) {
        console.log('%c"Zero or negative input"', "color:aqua;");
        console.log("%c--------------------------", "color:yellow;");
    } else if (type_1 !== "leg" || type_1 !== "hypotenuse" || type_1 !== "adjacent angle" || type_1 !== "opposite angle" || type_1 !== "angle" || type_2 !== "leg" || type_2 !== "hypotenuse" || type_2 !== "adjacent angle" || type_2 !== "opposite angle" || type_2 !== "angle") {
        console.log('%c"failed"', "color:red;");
        console.log("%c--------------------------", "color:yellow;");
    }
}

info();
triangle(25, "leg_a", 20, "leg_b");
triangle(7, "leg_b", 18, "hypotenuse");
triangle(7, "leg_a", 18, "hypotenuse");
triangle(14, "leg_b", 50, "adjacent angle");
triangle(14, "leg_a", 50, "adjacent angle");
triangle(5, "leg_b", 60, "opposite angle");
triangle(5, "leg_a", 60, "opposite angle");
triangle(10, "hypotenuse", 70, "angle_beta");
triangle(10, "hypotenuse", 70, "angle_alpha");
//Перевірка на правильність вводу
triangle(0, "leg", 20, "leg");
triangle(2, "leg", 20, "lg");
triangle(10, "hypotenuseq", 70, "angle");