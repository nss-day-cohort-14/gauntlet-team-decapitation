"use strict"

let $ = require("jquery")

function heroTemplate (hero) {
	$('.outputEl').html(`<h3><span class="heroName">${hero.name}</span> Will kick your ass with a ${hero.equipment} while having <h1>${hero.attack}</h1><h3> as attack and </h3><h1>${hero.health}</h1><h3> as health</h3> `);
}

function enemyTemplate (enemy) {
	$('.outputElEnemy').html(`<h3><span class="enemyName">${enemy.name}</span> Will kick your ass with a ${enemy.equipment} while having <h1>${enemy.attack}</h1><h3> as attack and </h3><h1>${enemy.health}</h1><h3> as health</h3> `);
}

module.exports = {heroTemplate, enemyTemplate};