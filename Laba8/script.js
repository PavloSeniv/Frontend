var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim", "Jason"];

for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === "J" || names[i].toLowerCase().charAt(0) === "j") {
        speakBye(names[i]);
    } else {
        speakHello(names[i]);
    }
}
console.log("%c-------------------------------------------------------------------------------------------------------------------------------------", "color:red;");

console.log("%cЯкщо довжина розбитого на символи масиву names_1_split менше довжині початкового масиву names_1, тоді виводиться GoodBye інакше Hello", "color:yellow")
var names_1 = ["Jason", "Mike", "Pablo", "Evelina", "Eve"];
console.log("Початковий масив: " + names_1 + " Довжина масиву: " + names_1.length);
for (var j = 0; j < names_1.length; j++) {
    var names_1_split = names_1[j].split('');
    console.log("Довжина розбитого масиву: " + names_1_split.length);
    if (names_1_split.length < names_1.length) {
        speakBye(names_1_split);
    } else {
        speakHello(names_1_split);
    }
}