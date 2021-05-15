function info() {
    console.log("%cІнструкція з використання", "color:black;background-color:white;");
    console.log("Позначення - Що позначає");
    console.log("leg - катет");
    console.log("hypotenuse - гіпотенуза");
    console.log("adjacent angle  - прилеглий до катета кут");
    console.log("opposite angle  - протилежний до катета кут");
    console.log("angle - один з двох гострих кутів(коли задана гіпотенуза");
    console.log("%c----------------------------------------------------------", "color:magenta;");
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
    console.log("");

}

function triangle(value_1, type_1, value_2, type_2) {
    let a, b, c, alpha, beta;
    if (value_1 <= 0 || value_2 <= 0) {
        console.log('%c"Zero or negative input"', "color:aqua;");
        console.log("%c----------------------------------------------------------", "color:orange;");
    } else if (type_1 === "leg" && type_2 === "leg") {
        a = value_1;
        b = value_2;
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        alpha = radian_to_degrees(Math.atan(a / b));
        beta = radian_to_degrees(Math.atan(b / a));
        console.log('%cДва катети', "color:deeppink;");
        console_result(a, b, c, alpha, beta);
        console.log("%c----------------------------------------------------------", "color:orange;");
    } else if (type_1 === "leg" && type_2 === "hypotenuse") {
        if (value_1 > value_2) {
            console.log("%cКатет більший за гіпотенузу", "color:red;")
        } else {
            b = value_1;
            {
                c = value_2;
                a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
                alpha = radian_to_degrees(Math.atan(a / b));
                beta = radian_to_degrees(Math.atan(b / a));
                console.log('%cКатет b та гіпотенуза', "color:deeppink;");
                console_result(a, b, c, alpha, beta);
            }
            a = value_1;
            {
                c = value_2;
                b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
                alpha = radian_to_degrees(Math.atan(a / b));
                beta = radian_to_degrees(Math.atan(b / a));
                console.log('%cКатет a та гіпотенуза', "color:deeppink;");
                console_result(a, b, c, alpha, beta);
            }
        }
        console.log("%c----------------------------------------------------------", "color:orange;");
    } else if (type_1 === "leg" && type_2 === "adjacent angle") {
        if (value_2 >= 90) {
            console.log("%cНегострі кути", "color:red;")
        } else {
            b = value_1;
            {
                alpha = value_2;
                c = b / Math.cos(degrees_to_radians(alpha));
                a = b * Math.tan(degrees_to_radians(alpha));
                beta = 90 - alpha;
                console.log('%cКатет b та прилеглий кут alpha', "color:deeppink;");
                console_result(a, b, c, alpha, beta);
            }
            a = value_1;
            {
                beta = value_2;
                c = a / Math.cos(degrees_to_radians(beta));
                b = a * Math.tan(degrees_to_radians(beta));
                alpha = 90 - beta;
                console.log('%cКатет a та прилеглий кут beta', "color:deeppink;");
                console_result(a, b, c, alpha, beta);
            }
        }
        console.log("%c----------------------------------------------------------", "color:orange;");
    } else if (type_1 === "leg" && type_2 === "opposite angle") {
        if (value_2 >= 90) {
            console.log("%cНегострі кути", "color:red;")
        } else {
            b = value_1;
            {
                beta = value_2;
                c = b / Math.sin(degrees_to_radians(beta));
                a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
                alpha = 90 - beta;
                console.log('%cКатет b та протилежний кут beta', "color:deeppink;");
                console_result(a, b, c, alpha, beta);
            }
            a = value_1;
            {
                alpha = value_2;
                c = a / Math.sin(degrees_to_radians(alpha));
                b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
                beta = 90 - alpha;
                console.log('%cКатет a та протилежний кут alpha', "color:deeppink;");
                console_result(a, b, c, alpha, beta);
            }
        }
        console.log("%c----------------------------------------------------------", "color:orange;");
    } else if (type_1 === "hypotenuse" && type_2 === "angle") {
        if (value_2 >= 90) {
            console.log("%cНегострі кути", "color:red;")
        } else {
            beta = value_2;
            {
                c = value_1;
                beta = value_2;
                alpha = 90 - beta;
                a = c * Math.cos(degrees_to_radians(beta));
                b = c * Math.sin(degrees_to_radians(beta));
                console.log('%cГіпотенуза та кут beta', "color:deeppink;");
                console_result(a, b, c, alpha, beta);
            }
            c = value_1;
            {
                alpha = value_2;
                beta = 90 - alpha;
                a = c * Math.cos(degrees_to_radians(alpha));
                b = c * Math.sin(degrees_to_radians(alpha));
                console.log('%cГіпотенуза та кут alpha', "color:deeppink;");
                console_result(a, b, c, alpha, beta);
            }
        }
        console.log("%c----------------------------------------------------------", "color:orange;");
    } else if (type_1 !== "leg" || type_1 !== "hypotenuse" || type_1 !== "adjacent angle" || type_1 !== "opposite angle" || type_1 !== "angle" ||
        type_2 !== "leg" || type_2 !== "hypotenuse" || type_2 !== "adjacent angle" || type_2 !== "opposite angle" || type_2 !== "angle") {
        console.log('%c"failed"', "color:red;");
        console.log("%c----------------------------------------------------------", "color:orange;");
    }
}

info(); // Інструкція

//Задання коефіціентів
triangle(25, "leg", 20, "leg");
triangle(7, "leg", 18, "hypotenuse");
triangle(14, "leg", 50, "adjacent angle");
triangle(5, "leg", 60, "opposite angle");
triangle(10, "hypotenuse", 70, "angle");

//Перевірка на правильність вводу типу або значення
triangle(0, "leg", 20, "leg");
triangle(-5, "leg", 20, "leg");
triangle(2, "leg", 20, "lg");
triangle(10, "hypotenuseq", 70, "angle1");
triangle(30, "leg", 18, "hypotenuse");
triangle(14, "leg", 95, "adjacent angle");
triangle(5, "leg", 180, "opposite angle");
triangle(10, "hypotenuse", 90, "angle");

