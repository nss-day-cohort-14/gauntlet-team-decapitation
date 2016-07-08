"use strict";

let Races = require("./player");

function Human() {
	this.race = "Human";
	this.health = 15;
	this.img = "img/human.jpg";
	this.dead = "img/humanDecap.jpg";
}

Human.prototype = new Races.Hero();

function Elf() {
	this.race = "Elf";
	this.attack = 10;
	this.img = "img/elf.jpg";
	this.dead = "img/elfDecap.jpg";
}

Elf.prototype = new Races.Hero();

function Orc() {
	this.race = "Orc";
	this.img = "img/orc.jpg";
	this.dead = "img/orcDecap.jpg";
}

Orc.prototype = new Races.Enemy();

function Dragon() {
	this.race = "Dragon";
	this.img = "img/dragon.jpg";
	this.dead = "img/dragonDecap.jpg";
}

Dragon.prototype = new Races.Enemy();

module.exports = {Human, Elf, Orc, Dragon};