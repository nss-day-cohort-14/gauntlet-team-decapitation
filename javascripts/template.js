"use strict"

let $ = require("jquery")

function heroTemplate (hero) {
	// $('.outputEl').html(`<h3><span class="heroName">${hero.name}</span> Will kick your ass with a ${hero.equipment} while having <h1>${hero.attack}</h1><h3> as attack and </h3><h1>${hero.health}</h1><h3> as health</h3> `);
	$('.outputEl').html(`<h2>${hero.name}</h2><img src="${hero.img}"><hr><h5>You are a ${hero.race} ${hero.class} equipped with ${hero.equipment}</h5><h5>Your attack: ${hero.attack}</h5><h5>Your Health: ${hero.health}</h5>`);
}

function enemyTemplate (enemy) {
	// $('.outputElEnemy').html(`<h3><span class="enemyName">${enemy.name}</span> Will kick your ass with a ${enemy.equipment} while having <h1>${enemy.attack}</h1><h3> as attack and </h3><h1>${enemy.health}</h1><h3> as health</h3> `);
	$('.outputElEnemy').html(`<h2>${enemy.name}</h2><img src="${enemy.img}"><hr><h5>Your enemy is a ${enemy.race} ${enemy.class} equipped with ${enemy.equipment}</h5><h5>Their attack: ${enemy.attack}</h5><h5>Their Health: ${enemy.health}</h5>`);
}

module.exports = {heroTemplate, enemyTemplate};