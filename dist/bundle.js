(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let PlayerModule = require("./player")
let RaceModule = require("./races")
let ClassesModule = require("./classes")

var NewHero = new ClassesModule.Fire();
console.log(NewHero.health);
console.log(NewHero.attack);
console.log(NewHero.race);
console.log(NewHero.class);
},{"./classes":2,"./player":3,"./races":4}],2:[function(require,module,exports){
	"use strict"

let Classes = require("./races")
let Races = require("./player")


function Warrior () {
	this.health += Math.floor(Math.random() * (80 - 60) + 60);
	this.attack += Math.floor(Math.random() * (20 - 10) + 10);
	this.class = "Warrior";
}
// Place holder for event listner
Warrior.prototype = new Classes.Human();

function Mage () {
	this.health += Math.floor(Math.random() * (60 - 40) + 40);
	this.attack += Math.floor(Math.random() * (40 - 30) + 30);
	this.class = "Mage";
}
// Place holder for event listner
Mage.prototype = new Classes.Human();

function Archer () {
	this.health += Math.floor(Math.random() * (70 - 50) + 50);
	this.attack += Math.floor(Math.random() * (30 - 20) + 20);
	this.class = "Archer";
}
// Place holder for event listner
Archer.prototype = new Classes.Human();

function Wizard () {
	this.health += Math.floor(Math.random() * (55 - 45) + 45);
	this.attack += Math.floor(Math.random() * (35 - 25 ) + 25);
	this.class = "Wizard";
}
// Place holder for event listner
Wizard.prototype = new Classes.Human();

function Beserker () {
	this.health += Math.floor(Math.random() * (75 - 55) + 55);
	this.attack += Math.floor(Math.random() * (25 - 15) + 15);
	this.class = "Beserker";
}
// Place holder for event listner
Beserker.prototype = new Classes.Orc();

function Shaman () {
	this.health += Math.floor(Math.random() * (70 - 50) + 50);
	this.attack += Math.floor(Math.random() * (30 - 20) + 20);
	this.class = "Shaman";
}
// Place holder for event listner
Shaman.prototype = new Classes.Orc();

function Fire () {
	this.health += Math.floor(Math.random() * (100 - 75) + 75);
	this.attack += Math.floor(Math.random() * (40 - 5) + 5);
	this.class = "Fire";
}
// Place holder for event listner
Fire.prototype = new Classes.Dragon();

function Ice () {
	this.health += Math.floor(Math.random() * (100 - 75) + 75);
	this.attack += Math.floor(Math.random() * (40 - 5) + 5);
	this.class = "Ice";
}
// Place holder for event listner
Ice.prototype = new Classes.Dragon();


module.exports = {Warrior, Mage, Archer, Wizard, Beserker, Shaman, Fire, Ice};
},{"./player":3,"./races":4}],3:[function(require,module,exports){
"use strict";

function Player() {
	this.names = "bgeirbnrjgn";
	this.health = null;
	this.attack = null;
	this.race = null;
	this.class = null;
	this.equipment = null;
}

function Hero() {
	
}

Hero.prototype = new Player();

function Enemy() {
	
}

Enemy.prototype = new Player();

module.exports = {Hero, Enemy};
},{}],4:[function(require,module,exports){
"use strict";

let Races = require("./player")

function Human() {
	this.race = "Human";
	this.health = 15;
}

Human.prototype = new Races.Hero();

function Elf() {
	this.race = "Elf";
	this.attack = 10;
}

Elf.prototype = new Races.Hero();

function Orc() {
	this.race = "Orc"
}

Orc.prototype = new Races.Enemy();

function Dragon() {
	this.race = "Dragon"
}

Dragon.prototype = new Races.Enemy();

module.exports = {Human, Elf, Orc, Dragon}
},{"./player":3}]},{},[1])


//# sourceMappingURL=bundle.js.map
