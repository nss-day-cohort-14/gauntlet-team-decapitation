(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let PlayerModule = require("./player")
let RaceModule = require("./races")
var NewHero = new RaceModule.Dragon();
console.log(NewHero.race);
},{"./player":2,"./races":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{"./player":2}]},{},[1])


//# sourceMappingURL=bundle.js.map
