"use strict";

let PlayerModule = require("./player")
let RaceModule = require("./races")
let ClassesModule = require("./classes")

var NewHero = new ClassesModule.Fire();
console.log(NewHero.health);
console.log(NewHero.attack);
console.log(NewHero.race);
console.log(NewHero.class);