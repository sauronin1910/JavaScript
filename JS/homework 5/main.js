//  Завдання 1 Number: odd

// {
//     let userNumb = prompt("Введіть число:");

//     if (!isNaN(userNumb)) {
//         let number = Number(userNumb);

//         if (number % 2) {
//             alert("Число не парне")
//         } else {
//             alert("число парне")
//         }

//     } else {
//         alert("Введено некоректне число!")
//     }

// }

// Завдання 2 String: lexics


// {
//     let userInput = prompt("Введіть текст");

//     let badWords = ["патороч", "скотина", "курва", "мєрзость", "лох", "глек", "гнідабас", "фак", "блять"];

//     let containsBadWord = badWords.some(function (word) {
//         return userInput.indexOf(word) !== -1;
//     });

//     if (containsBadWord) {
//         alert("Текст містить погані слова")
//     } else {
//         alert("текст не має поганих слів")
//     }
// }

// Завдання 3 Boolean

// {
// let question1 = confirm("Тобі заважають роги пити з унітазу?");

// let question2 = confirm("Чи звератєш ти увагу, коли люди звуть тебе глеком?");

// let question3 = confirm("ти молодець?");

// alert("  перше питання: " + (question1 ? "так" : "ні") + "\n" +
//     "  друге питання: " + (question2 ? "так" : "ні") + "\n" +
//     " третє запитання: " + (question3 ? "так" : "ні"));;


// }



//  Завдання 4 Boolean: if

// {
//     let question1 = confirm("Тобі заважають роги пити з унітазу?");

//     if (question1) {
//         alert("Сумно((")
//     } else {
//         alert("Роги ще не виросли значить")
//     }

//     let question2 = confirm("Чи звератєш ти увагу, коли люди звуть тебе глеком?");

//     if (question2) {
//         alert("Бути глеком не так погано")
//     } else {
//         alert("Це добре")
//     }

//     let question3 = confirm("ти молодець?");



//     if (question3) {
//         alert("Ні")
//     } else {
//         alert("Правильно, бо молодці сосуть кінці!")
//     }

// }

// Завдання 5 Comparison: sizes

// let sizeInUk = prompt("ВВедіть ваш розмір:");

// if (sizeInUk === "40") {
//     alert("В американській системі у вас 6 розмір, тобто 'S'");
// } else if (sizeInUk === "42") {
//     alert("В американській системі у вас 8 розмір, тобто 'M'");
// } else if (sizeInUk === "44") {
//     alert("В американській системі у вас 10 розмір");
// } else if (sizeInUk === "46") {
//     alert("В американській системі у вас 12 розмір, тобто 'L'");
// } else if (sizeInUk === "48") {
//     alert("В американській системі у вас 14 розмір");
// } else if (sizeInUk === "50") {
//     alert("В американській системі у вас 16 розмір, тобто 'XL'");
// } else if (sizeInUk === "52") {
//     alert("В американській системі у вас 16 розмір");
// } else if (sizeInUk === "54") {
//     alert("В американській системі у вас 16 розмір, тобто 'XXL'");
// }

// Завдання 6 Ternary
// {
//     const question = confirm("Ви чоловік чи жінка?") ? alert("Ви чоловік") : alert("Ви жінка");
// }


//  Завдання 7 Prompt: or

{
    // let age = prompt("Скільки Вам років?");

    // let result = !isNaN(age) ? age : "Ви ввели букви або натиснули 'Скасувати'.";
    // alert("Ваше число: " + result);

    confirm('Ти поїв?') || alert('Їжа у холодильнику')

}