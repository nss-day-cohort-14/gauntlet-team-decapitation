"use strict";

let PlayerModule = require("./player");
let RaceModule = require("./races");
let ClassesModule = require("./classes");
let EquipmentModule = require("./equipment");

var NewHero = new EquipmentModule.Sheild();
console.log(NewHero.health);
console.log(NewHero.attack);
console.log(NewHero.race);
console.log(NewHero.class);
console.log(NewHero.equipment);