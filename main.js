
// footer-start Время обучение:

// находим в теле HTML контейнер, куда будем выводить результат
let res = document.getElementById("place");

// объявляем наши даты
let current = new Date(); // сегодня
let old = new Date("2021-07-01"); // !!! год-месяц-день !!!

// сначала находим количество дней между датами
let days = Math.ceil(Math.abs(old.getTime() - current.getTime()) / (1000 * 3600 * 24));
let year = Math.floor(days / 365); // вычисляем кол-во лет. Math.floor убирает остаток.
let months = Math.floor((days - (year * 365)) / 30); // отняв года, вычисляем месяцы

// осталось вывести полученную информацию в контейнер:
res.innerHTML = 'обучение ' + year + ' год, ' + months + ' месяцев.';

// Конец - Время обучение::
