'use strict';

//What is your name prompt

var userName = prompt('Hi, what is your name?');
console.log(userName);

//Prompt saying get ready to play (alert)

alert('Nice to meet you ' + userName + '. Get ready to play a guessing game about what I love most: Me!');

alert('Answer all of the following questions with Y/N or Yes/No');

//Six Y/N questions (prompts)

//1
var countries = prompt('I have been to more than 5 different countries.').toUpperCase();

if(countries === 'Y' || countries === 'YES') {
    alert('I have only been to 3 countries, but I would love to travel more.');
}   else if (countries === 'N' || countries === 'NO') {
    alert('That is correct, I have only been to 3 different countries.');
}   else {
    alert('Please enter Y or N!');
}

//2
prompt('I speak 4 languages');

//3
prompt('I love bubble tea');

//4
prompt('I really, really love bubble tea');

//5
prompt('I hate snakes');

//6
prompt('I love coding almost as much as bubble tea');


//I am glad we are getting to know each other (alert)
alert('Thanks for playing ' + userName + '! I am glad we are getting to know each other.');
