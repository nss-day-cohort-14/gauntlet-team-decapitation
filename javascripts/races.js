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