//  1 Завдання

// let a = 5;
// let b, c;

// b = (a * 5);
// b = (c = (b / 2));



// 2 Завдання

// let howOldAY = prompt("Скільки Вам років?");

// let year = prompt("який зараз рік?");

// let dateBirth = year - howOldAY;

// alert("Ви народились y  " + dateBirth + " році");



// 3 Завдання

// let tempC = prompt("яка зараз температура в °С? ");

// let tempF = (tempC * 9 / 5) + 32;

// alert("Температура  " + tempF + " °F");



//  4 Завдання

// let a = prompt("перший доданок");

// let b = prompt("другий доданок");

// let result = Math.floor(a / b);

// alert("результата " + result);



//  5 Завдання

// const buySell = prompt("Ви хочете продати чи купити?");

// const sell = "продати"; // якщо пишу "продати" то пишу скільки доларів продаю і відповідно скільки отримую грн, наприклад: 100 доларів продаю отримую 3750 грн

// const buy = "купити"; // якщо пишу "купити" тоді  то пишу на яку суму гривень купляю долари, наприклад на 4050 грн значить 100 доларів куплю

// const rate = 37.5;
// const rate1 = 40.5;

// const howMany = prompt("Скільки?");
// let exchange = buySell == "продати" ? (howMany * rate).toFixed(2) : (howMany / rate1).toFixed(2);

// alert(`результат: ${exchange}`); // не досконало, але зробив як є



// 6 завдання

// const red = prompt("введіть значення для ред від 16 до 255:");
// const green = prompt("введіть значення для ред від 16 до 255:");
// const blue = prompt("введіть значення для ред від 16 до 255:");

// let redHex = (+red).toString(16);
// let greenHex = (+green).toString(16);
// let blueHex = (+blue).toString(16);

// redHex = redHex.length < 2 ? "0" + redHex : redHex;
// greenHex = greenHex.length < 2 ? "0" + greenHex : greenHex;
// blueHex = blueHex.length < 2 ? "0" + blueHex : blueHex;

// const cssColor = "#" + redHex + greenHex + blueHex;

// alert("Колір у форматі #RRGGBB: " + cssColor);




//  7 Завдання 

const howManyfloors = prompt("Скільки поверхів?");

const howManyAparts = prompt("Скільки квартир на поверсі?");

const apart = prompt("номер квартири?");

let enterance = Math.floor((Math.ceil(apart / howManyAparts) / howManyfloors));

let floor = Math.floor(apart % howManyAparts);


alert("під'їзд " + enterance);
alert("поверх " + floor);

