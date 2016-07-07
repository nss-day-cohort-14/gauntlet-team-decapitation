"use strict";


let PlayerModule = require("./player")
let RaceModule = require("./races")
let ClassesModule = require("./classes")
let EquipmentModule = require("./equipment")
let DomManip = require("./domManip")
let $ = require("jquery")

$(document).ready(function(){
    $('.raceBtn').prop('disabled',true);
    $('#name').keyup(function(){
        $('.raceBtn').prop('disabled', this.value === "" ? true : false);     
    })
}); 

DomManip.disableBtns();
// DomManip.enterName();
DomManip.raceClick();
DomManip.warriorEquipmentClick();
DomManip.mageEquipmentClick();
DomManip.archerEquipmentClick();
DomManip.wizardEquipmentClick();

var NewHero;
var NewEnemy;

function buildExtraWeapon () {
 	$('.extraWeaponBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.ExtraWeapon();
 		NewHero.name = inputName;
 		buildEnemy ();
		$('.outputEl').html(`<h3><span class="heroName">${NewHero.name}</span> Will kick your ass with a ${NewHero.equipment} while having <h1>${NewHero.attack}</h1><h3> as attack and </h3><h1>${NewHero.health}</h1><h3> as health</h3> `);
		$('.outputElEnemy').html(`<h3><span class="enemyName">${NewEnemy.name}</span> Will kick your ass with a ${NewEnemy.equipment} while having <h1>${NewEnemy.attack}</h1><h3> as attack and </h3><h1>${NewEnemy.health}</h1><h3> as health</h3> `);
 	})
 }
 buildExtraWeapon();

function buildShield () {
 	$('.shieldBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.Shield();
 		NewHero.name = inputName;
 		buildEnemy ();
		$('.outputEl').html(`<h3><span class="heroName">${NewHero.name}</span> Will kick your ass with a ${NewHero.equipment} while having <h1>${NewHero.attack}</h1><h3> as attack and </h3><h1>${NewHero.health}</h1><h3> as health</h3> `);
		$('.outputElEnemy').html(`<h3><span class="enemyName">${NewEnemy.name}</span> Will kick your ass with a ${NewEnemy.equipment} while having <h1>${NewEnemy.attack}</h1><h3> as attack and </h3><h1>${NewEnemy.health}</h1><h3> as health</h3> `);
 	})
 }
 buildShield();

 function buildIceSpear () {
 	$('.iceSpearBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.IceSpell();
 		NewHero.name = inputName;
 		buildEnemy ();
		$('.outputEl').html(`<h3><span class="heroName">${NewHero.name}</span> Will kick your ass with a ${NewHero.equipment} while having <h1>${NewHero.attack}</h1><h3> as attack and </h3><h1>${NewHero.health}</h1><h3> as health</h3> `);
		$('.outputElEnemy').html(`<h3><span class="enemyName">${NewEnemy.name}</span> Will kick your ass with a ${NewEnemy.equipment} while having <h1>${NewEnemy.attack}</h1><h3> as attack and </h3><h1>${NewEnemy.health}</h1><h3> as health</h3> `);
 	})
 }
 buildIceSpear();

 function buildRobes () {
 	$('.armoredRobesBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.ArmoredRobe();
 		NewHero.name = inputName;
 		buildEnemy ();
		$('.outputEl').html(`<h3><span class="heroName">${NewHero.name}</span> Will kick your ass with a ${NewHero.equipment} while having <h1>${NewHero.attack}</h1><h3> as attack and </h3><h1>${NewHero.health}</h1><h3> as health</h3> `);
		$('.outputElEnemy').html(`<h3><span class="enemyName">${NewEnemy.name}</span> Will kick your ass with a ${NewEnemy.equipment} while having <h1>${NewEnemy.attack}</h1><h3> as attack and </h3><h1>${NewEnemy.health}</h1><h3> as health</h3> `);
 	})
 }
 buildRobes();

 function buildLongBow () {
 	$('.longBowBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.LongBow();
 		NewHero.name = inputName;
 		buildEnemy ();
		$('.outputEl').html(`<h3><span class="heroName">${NewHero.name}</span> Will kick your ass with a ${NewHero.equipment} while having <h1>${NewHero.attack}</h1><h3> as attack and </h3><h1>${NewHero.health}</h1><h3> as health</h3> `);
		$('.outputElEnemy').html(`<h3><span class="enemyName">${NewEnemy.name}</span> Will kick your ass with a ${NewEnemy.equipment} while having <h1>${NewEnemy.attack}</h1><h3> as attack and </h3><h1>${NewEnemy.health}</h1><h3> as health</h3> `);
 	})
 }
 buildLongBow();

 function buildLeatherArmor () {
 	$('.leatherArmorBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.LeatherArmor();
 		NewHero.name = inputName;
 		buildEnemy ();
		$('.outputEl').html(`<h3><span class="heroName">${NewHero.name}</span> Will kick your ass with a ${NewHero.equipment} while having <h1>${NewHero.attack}</h1><h3> as attack and </h3><h1>${NewHero.health}</h1><h3> as health</h3> `);
		$('.outputElEnemy').html(`<h3><span class="enemyName">${NewEnemy.name}</span> Will kick your ass with a ${NewEnemy.equipment} while having <h1>${NewEnemy.attack}</h1><h3> as attack and </h3><h1>${NewEnemy.health}</h1><h3> as health</h3> `);
 	})
 }
 buildLeatherArmor();

 function buildFireBall () {
 	$('.fireBallBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.FireSpell();
 		NewHero.name = inputName;
 		buildEnemy ();
		$('.outputEl').html(`<h3><span class="heroName">${NewHero.name}</span> Will kick your ass with a ${NewHero.equipment} while having <h1>${NewHero.attack}</h1><h3> as attack and </h3><h1>${NewHero.health}</h1><h3> as health</h3> `);
		$('.outputElEnemy').html(`<h3><span class="enemyName">${NewEnemy.name}</span> Will kick your ass with a ${NewEnemy.equipment} while having <h1>${NewEnemy.attack}</h1><h3> as attack and </h3><h1>${NewEnemy.health}</h1><h3> as health</h3> `);
 	})
 }
 buildFireBall();

 function buildProtectionSpell () {
 	$('.protectionSpellBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.ProtectionSpell();
 		NewHero.name = inputName;
 		buildEnemy ();
		$('.outputEl').html(`<h3><span class="heroName">${NewHero.name}</span> Will kick your ass with a ${NewHero.equipment} while having <h1>${NewHero.attack}</h1><h3> as attack and </h3><h1>${NewHero.health}</h1><h3> as health</h3> `);
		$('.outputElEnemy').html(`<h3><span class="enemyName">${NewEnemy.name}</span> Will kick your ass with a ${NewEnemy.equipment} while having <h1>${NewEnemy.attack}</h1><h3> as attack and </h3><h1>${NewEnemy.health}</h1><h3> as health</h3> `);
 	})
 }
 buildProtectionSpell();

function buildEnemy () {
	var determineEnemy;
	determineEnemy=Math.floor(Math.random() * (4) + 1);
	console.log(determineEnemy);
	if (determineEnemy === 2) {
		NewEnemy = new EquipmentModule.PotionOfProtection();
	} else if (determineEnemy === 1) {
		NewEnemy = new EquipmentModule.CloakOfWisdom();
	} else if (determineEnemy === 3) {
		NewEnemy = new EquipmentModule.PlateArmor();
	} else {
		NewEnemy = new EquipmentModule.DoubleDagger();
	}

}











