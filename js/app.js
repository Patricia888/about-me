'use strict';

//What is your name prompt

var userName = prompt('Hi, what is your name?');
console.log(userName);

//Alert saying get ready to play

alert('Nice to meet you ' + userName + '. Get ready to play a guessing game about what I love most: Me!');

alert('Answer all of the following questions with Y/N or Yes/No');

//Six Y/N questions (prompts)

//1
var countries = prompt('I have been to more than 5 different countries.').toUpperCase();
console.log(countries);

if(countries === 'Y' || countries === 'YES') {
    alert('I have only been to 3 countries, but I would love to travel more.');
}   else if (countries === 'N' || countries === 'NO') {
    alert('That is correct, I have only been to 3 different countries.');
}   else {
    alert('Please enter Y or N!');
}

//2
var languages = prompt('I speak 4 languages').toUpperCase();
console.log(languages);

if(languages === 'Y' || languages === 'YES') {
    alert('Correct! I speak English, Spanish, Mandarin, and ASL. I can\'t wait until I can add JavaScript to the list.');
}   else if (languages === 'N' || languages === 'NO') {
    alert('Nope, I do speak four. Soon to be 5 once I have mastered JavaScript!');
}   else {
    alert('Please enter Y or N!');
}

//3
var bubbleTea = prompt('I love bubble tea').toUpperCase();
console.log(bubbleTea);

if(bubbleTea === 'Y' || bubbleTea === 'YES') {
    alert('True. One of my favorite endulgences.');
}   else if (bubbleTea === 'N' || bubbleTea === 'NO') {
    alert('Bubble tea is awesome! I love all the different types.');
}   else {
    alert('Please enter Y or N!');
}

//4
var reallyLoveBubbleTea = prompt('I really, really love bubble tea').toUpperCase();
console.log(reallyLoveBubbleTea);

if(reallyLoveBubbleTea === 'Y' || reallyLoveBubbleTea === 'YES') {
    alert('Definitely true. I once walked 3 hours to get to the nearest bubble tea store.');
}   else if (reallyLoveBubbleTea === 'N' || reallyLoveBubbleTea === 'NO') {
    alert('.... I am obviously not speaking to a fellow bubble tea lover.');
}   else {
    alert('Please enter Y or N!');
}

//5
var scarySnakes = prompt('I hate snakes').toUpperCase();
console.log(scarySnakes);

if(scarySnakes === 'Y' || scarySnakes === 'YES') {
    alert('I am actually not a snake hater. Some of them can even be quite cute.');
}   else if (scarySnakes === 'N' || scarySnakes === 'NO') {
    alert('I agree, snakes are not bad!');
}   else {
    alert('Please enter Y or N!');
}

//6
var loveCoding = prompt('I love coding almost as much as bubble tea').toUpperCase();
console.log(loveCoding);

if(loveCoding === 'Y' || loveCoding === 'YES') {
    alert('Yes, I am having fun so far.');
}   else if (loveCoding === 'N' || loveCoding === 'NO') {
    alert('Really? You must be pulling my leg.');
}   else {
    alert('Please enter Y or N!');
}


//I am glad we are getting to know each other (alert)
alert('Thanks for playing ' + userName + '! I am glad we are getting to know each other.');

