"use strict";

function Player() {
	this.name = "bgeirbnrjgn";
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

// module.exports = {Hero};
// module.exports = {Enemy};