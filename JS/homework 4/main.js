let taskNumber = prompt("Введіть номер завдання або назву:");

if (taskNumber === "1" || taskNumber.toLowerCase() === "odd") {
    // Завдання 1: Number: odd
    let userNumb = prompt("Введіть число:");

    if (!isNaN(userNumb)) {
        let number = Number(userNumb);

        if (number % 2) {
            alert("Число не парне")
        } else {
            alert("Число парне")
        }

    } else {
        alert("Введено некоректне число!")
    }
} else if (taskNumber === "2" || taskNumber.toLowerCase() === "lexics") {
    // Завдання 2: String: lexics
    let userInput = prompt("Введіть текст");

    let badWords = ["патороч", "скотина", "курва", "мєрзость", "лох", "глек", "гнідабас", "фак", "блять"];

    let containsBadWord = badWords.some(function (word) {
        return userInput.indexOf(word) !== -1;
    });

    if (containsBadWord) {
        alert("Текст містить погані слова")
    } else {
        alert("Текст не має поганих слів")
    }
} else if (taskNumber === "3" || taskNumber.toLowerCase() === "boolean") {
    // Завдання 3: Boolean
    let question1 = confirm("Тобі заважають роги пити з унітазу?");
    let question2 = confirm("Чи звертаєш ти увагу, коли люди звуть тебе глеком?");
    let question3 = confirm("Ти молодець?");

    alert("  Перше питання: " + (question1 ? "Так" : "Ні") + "\n" +
        "  Друге питання: " + (question2 ? "Так" : "Ні") + "\n" +
        "  Третє питання: " + (question3 ? "Так" : "Ні"));
} else if (taskNumber === "4" || taskNumber.toLowerCase() === "boolean: if") {
    // Завдання 4: Boolean: if
    let question1 = confirm("Тобі заважають роги пити з унітазу?");

    if (question1) {
        alert("Сумно((")
    } else {
        alert("Роги ще не виросли значить")
    }

    let question2 = confirm("Чи звертаєш ти увагу, коли люди звуть тебе глеком?");

    if (question2) {
        alert("Бути глеком не так погано")
    } else {
        alert("Це добре")
    }

    let question3 = confirm("Ти молодець?");

    if (question3) {
        alert("Ні")
    } else {
        alert("Правильно, бо молодці сосуть кінці!")
    }
} else if (taskNumber === "5" || taskNumber.toLowerCase() === "comparison: sizes") {
    // Завдання 5: Comparison: sizes
    let sizeInUk = prompt("Введіть ваш розмір:");

    if (sizeInUk === "40") {
        alert("В американській системі у вас 6 розмір, тобто 'S'");
    } else if (sizeInUk === "42") {
        alert("В американській системі у вас 8 розмір, тобто 'M'");
    } else if (sizeInUk === "44") {
        alert("В американській системі у вас 10 розмір");
    } else if (sizeInUk === "46") {
        alert("В американській системі у вас 12 розмір, тобто 'L'");
    } else if (sizeInUk === "48") {
        alert("В американській системі у вас 14 розмір");
    } else if (sizeInUk === "50") {
        alert("В американській системі у вас 16 розмір, тобто 'XL'");
    } else if (sizeInUk === "52") {
        alert("В американській системі у вас 16 розмір");
    } else if (sizeInUk === "54") {
        alert("В американській системі у вас 16 розмір, тобто 'XXL'");
    } else {
        alert("Ви ввели невірний розмір.");
    }
} else if (taskNumber === "6" || taskNumber.toLowerCase() === "ternary") {
    // Завдання 6: Ternary
    const gender = confirm("Ви чоловік чи жінка?") ? "чоловік" : "жінка";
    alert(`Ви ${gender}`);
} else if (taskNumber === "7" || taskNumber.toLowerCase() === "prompt: or") {
    // Завдання 7: Prompt: or
    let age = prompt("Скільки Вам років?") || 0;
    alert("Ваш вік: " + age);
} else if (taskNumber === "8" || taskNumber.toLowerCase() === "confirm: or") {
    // Завдання 8: Confirm: or
    confirm("Щопінг?") || alert("Бяка");
} else if (taskNumber === "9" || taskNumber.toLowerCase() === "confirm: if this days") {
    // Завдання 9: Confirm: if this days
    let question = confirm("Шопінг?");

    if (!question) {
        alert("Бяка");
    }
} else if (taskNumber === "10" || taskNumber.toLowerCase() === "default: or") {
    // Завдання 10: Default: or
    let firstName = prompt("Введіть ваше ім'я:") || "Hlek";
    let lastName = prompt("Введіть ваше прізвище:") || "Hlekovii";
    let middleName = prompt("Введіть ваше по батькові:") || "Hlekanovuch";

    alert("Ваше ПІБ: " + lastName + " " + firstName + " " + middleName);
} else if (taskNumber === "11" || taskNumber.toLowerCase() === "login and password") {
    // Завдання 11: Login and password
    let login = prompt("Введіть логін:");

    if (login === "admin") {
        let password = prompt("Введіть пароль:");

        if (password === "qwerty") {
            alert("Ласкаво просимо, admin!");
        } else {
            alert("Помилка: невірний пароль!");
        }
    } else {
        alert("Помилка: невірний логін!");
    }
} else if (taskNumber === "12" || taskNumber.toLowerCase() === "currency exchange") {
    // Завдання 12: Currency exchange
    let currency = prompt("Введіть валюту (USD, EUR, GBP):").toUpperCase();
    let isBuying = confirm("Бажаєте купити?");

    let rate;

    if (currency === "USD") {
        rate = isBuying ? 39.5 : 37.8;
    } else if (currency === "EUR") {
        rate = isBuying ? 42.2 : 41.6;
    } else if (currency === "GBP") {
        rate = isBuying ? 46.1 : 44.5;
    } else {
        alert("Ви ввели невірну валюту.");
    }

    if (rate) {
        let amount = prompt("Введіть суму на обмін:");
        let result = isBuying ? amount / rate : amount * rate;

        alert(`Ви отримаєте ${result.toFixed(2)} ${currency} за ${amount} UAH`);
    }
} else if (taskNumber === "13" || taskNumber.toLowerCase() === "scissors") {
    // Завдання 13: Scissors
    let userChoice = prompt("Виберіть: камінь, ножиці, або папір").toLowerCase();
    let computerChoice = ["камінь", "ножиці", "папір"][Math.floor(Math.random() * 3)];

    alert(`Комп'ютер обрав: ${computerChoice}`);

    if (userChoice === computerChoice) {
        alert("Нічия!");
    } else if (
        (userChoice === "камінь" && computerChoice === "ножиці") ||
        (userChoice === "ножиці" && computerChoice === "папір") ||
        (userChoice === "папір" && computerChoice === "камінь")
    ) {
        alert("Ви перемогли!");
    } else {
        alert("Ви програли!");
    }
} else {
    alert("Немає такого завдання.");
}



const userChoice = prompt("Виберіть: камінь, ножиці, або папір").toLowerCase();
const computerChoice = ["камінь", "ножиці", "папір"][Math.floor(Math.random() * 3)];

alert(`Комп'ютер обрав: ${computerChoice}`);

const isTie = userChoice === computerChoice;
const userWins = (userChoice === "камінь" && computerChoice === "ножиці") ||
    (userChoice === "ножиці" && computerChoice === "папір") ||
    (userChoice === "папір" && computerChoice === "камінь");

alert(isTie ? "Нічия!" : (userWins ? "Ви перемогли!" : "Ви програли!"));

