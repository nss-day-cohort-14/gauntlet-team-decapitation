"use strict"

let $ = require("jquery")

function heroTemplate (hero) {
    $('.outputEl').html(`<h2>${hero.name}</h2><img class="heroPic" src="${hero.img}"><hr><h5>You are a ${hero.race} ${hero.class} equipped with ${hero.equipment}</h5><h5>Your attack: ${hero.attack}</h5><h5>Your Health: ${hero.health}</h5>`);
}

function enemyTemplate (enemy) {
    $('.outputElEnemy').html(`<h2>${enemy.name}</h2><img class="enemyPic" src="${enemy.img}"><hr><h5>Your enemy is a ${enemy.race} ${enemy.class} equipped with ${enemy.equipment}</h5><h5>Their attack: ${enemy.attack}</h5><h5>Their Health: ${enemy.health}</h5>`);
}

function displayHeroAttack (hero) {
	$('.heroAttack').css("opacity", "100");
	$('.heroAttack').html(`<span class='attack'><h2>${hero.attack}</h2></span>`).animate({
		opacity: 0
	}, 1000, function(){});
}

function displayEnemyAttack (enemy) {
	$('.enemyAttack').css("opacity", "100");
	$('.enemyAttack').html(`<span class='attack'><h2>${enemy.attack}</h2></span>`).animate({
		opacity: 0
	}, 1000, function(){})
}

module.exports = {heroTemplate, enemyTemplate, displayHeroAttack, displayEnemyAttack};