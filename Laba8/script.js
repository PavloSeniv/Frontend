var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(1) === "J") {
        console.log(speakBye(names[i]));
    } else if (names[i].toLowerCase().charAt(1) === "j") {
        console.log(speakBye(names[i]));
    } else {
        console.log(speakHello(names[i]));
    }
}
