function Task1() {
    console.log("%cЯкщо ім’я починається з літери j або J, то застосунок виводить Goodbye JSomeName, інакше – Hello SomeName.", "color:yellow");
    console.log("%c----------------------------------------------------------------------------------------------------------------------------------------", "color:red;");
    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim", "jason"];
    console.log("Початковий масив: " + names);
    for (var i = 0; i < names.length; i++) {
        if (names[i].charAt(0) === "J" || names[i].toLowerCase().charAt(0) === "j") {
            speakBye(names[i]);
        } else {
            speakHello(names[i]);
        }
    }
}

Task1();
console.log("%c----------------------------------------------------------------------------------------------------------------------------------------", "color:magenta;");

function Task2() {
    console.log("%cЯкщо довжина розбитого на символи масиву names_1_split менше довжині початкового масиву names_1, то застосунок виводить Goodbye JSomeName, інакше – Hello SomeName.", "color:yellow");
    console.log("%c----------------------------------------------------------------------------------------------------------------------------------------", "color:red;");
    var names_1 = ["Jason", "Mike", "Pablo", "Evelina", "Eve"];
    console.log("Початковий масив: " + names_1 + ". Довжина заданого масиву: " + names_1.length);
    for (var j = 0; j < names_1.length; j++) {
        var names_1_split = names_1[j].split('');
        console.log("Довжина розбитого масиву: " + names_1_split.length);
        if (names_1_split.length < names_1.length) {
            speakBye(names_1_split);
        } else {
            speakHello(names_1_split);
        }
    }
}

Task2();
console.log("%c----------------------------------------------------------------------------------------------------------------------------------------", "color:magenta;");

function Task3() {
    console.log("%cЯкщо сума ASCII-кодів літер імен менша або дорівнює 600, то застосунок виводить Goodbye JSomeName, інакше – Hello SomeName.", "color:yellow");
    console.log("%c----------------------------------------------------------------------------------------------------------------------------------------", "color:red;");
    var names_2 = ["Arthur", "Pavlo", "Mykhailo", "Diana"];
    console.log("Початковий масив:" + names_2);
    for (var k = 0; k < names_2.length; k++) {
        var names_2_split = names_2[k].split('');
        console.log("Розбите на літери ім'я: " + names_2_split);
        var names_2_ASCII = names_2_split
            .map(function (char) { //Створення нового масиву з чисел ASCII літер
                return char.charCodeAt(0);
            })
            .reduce(function (current, previous) { //До попередньго числа додаємо наступне і отримуємо суму
                return previous + current;
            });
        console.log("Сума ASCII кодів літер імені: " + names_2_ASCII);
        if (names_2_ASCII <= 600) {
            speakBye(names_2[k]);
        } else {
            speakHello(names_2[k]);
        }
        console.log("%c----------------------------------------------------------------------------------------------------------------------------------------", "color:green;");
    }
}

Task3();
console.log("%c----------------------------------------------------------------------------------------------------------------------------------------", "color:magenta;");