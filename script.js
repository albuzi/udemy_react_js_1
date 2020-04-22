'use strict';

//2
let money = window.prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

//4
let firstExpenses = prompt('Введите обязательную статью расходов в этом месяце');
let firstExpMoney = prompt('Во сколько обойдется?');
let secondExpenses = prompt('Введите обязательную статью расходов в этом месяце');
let secondExpMoney = prompt('Во сколько обойдется?');

//3
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        [firstExpenses]: firstExpMoney,
        [secondExpenses]: secondExpMoney,
    },
    optionalExpenses: {

    },
    income: [],
    savings: false,
};

console.log(appData.expenses[firstExpenses]);
console.log(appData.expenses[secondExpenses]);

window.alert("Ваш бюджет: " + appData.budget/30);