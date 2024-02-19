//  Завдання 1
// {
//     const userName = prompt("Як Вас звати?");
//     alert("Вітаємо Вас " + userName);
// }

// Завдання 2

// {
//     const someWords = prompt("Введіть декілька слів через кому");
//     let someWord = someWords.split(",").join(" блін")
//     alert(someWord)

// }

//  Завдання 3

// {
//     let str = "cANBerRa";
//     let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
//     console.log(result);
// }

//  Завдання 4

// {
//     let str = prompt("введіть слова через пробіл")

//     let wordStr = str.split(" ");
//     let contsStr = wordStr.length;
//     alert(wordStr + contsStr);

// }

// Завдання 5

// {
//     const name1 = prompt("напишіть ваше ім'я").trim();

//     const surname1 = prompt("Напишіть ваше прізвище").trim();

//     const surname2 = prompt("по батькові?").trim();

//     let fullName = name1[0].toUpperCase() + name1.slice(1).toLowerCase() + " " +
//         surname1[0].toUpperCase() + surname1.slice(1).toLowerCase() + " " +
//         surname2[0].toUpperCase() + surname2.slice(1).toLowerCase() + " ";

//     alert(fullName);

// }

//  Завдання 6

// {
//     let str = "Було жарко. Василь пив пиво вприкуску з креветками"
//     let result = str.split("пиво").join("чай")
//     console.log(result) //"Було жарко. Василь пив чай уприкуску з креветками"

// }

// Завдання 7

// {

// {
//     let str = "якийсь текст, в якому є один тег <br /> і всяке інше";

//     let startIndex = str.indexOf("<");

//     let endIndex = str.indexOf(">", startIndex) + 1;

//     let result = str.slice(0, startIndex) + str.slice(endIndex);

//     console.log(result);

// }

// }



//  Завдання 8
// {

//     let str = "якийсь текст у якому є один тег <br /> і всяке інше"

//     let startIndex = str.indexOf("<");

//     let endIndex = str.indexOf(">", startIndex) + 1;

//     let result = str.slice(0, startIndex) + str.slice(startIndex, endIndex).toUpperCase() + str.slice(endIndex);

//     console.log(result);
// }

//  Завдання 9

// {
//     let userInput = prompt(" введіть якийсь текс із використанням \\n:");


//     userInput = userInput.split("\\n").join("\n");

//     console.log(userInput);
// }


//  Завдання 10 ютуб
{
    const youtubeRegex = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;


    let userInput = prompt("Введіть текст з посиланням на YouTube відео:");


    let videoId = userInput.match(youtubeRegex)[1];


    let embeddedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;


    document.write(embeddedCode);

}
