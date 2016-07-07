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
		$('.outputEl').html(`<h1>${NewHero.name} Will kick your ass with ${NewHero.equipment} while having ${NewHero.attack} as attack and ${NewHero.health} as health</h1> `);
		$('.outputElEnemy').html(`<h1>${NewEnemy.name} Will kick your ass with ${NewEnemy.equipment} while having ${NewEnemy.attack} as attack and ${NewEnemy.health} as health</h1> `);
 	})
 }
 buildExtraWeapon();

function buildShield () {
 	$('.shieldBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.Shield();
 		NewHero.name = inputName;
 		buildEnemy ();
		$('.outputEl').html(`<h1>${NewHero.name} Will kick your ass with ${NewHero.equipment} while having ${NewHero.attack} as attack and ${NewHero.health} as health</h1> `);
		$('.outputElEnemy').html(`<h1>${NewEnemy.name} Will kick your ass with ${NewEnemy.equipment} while having ${NewEnemy.attack} as attack and ${NewEnemy.health} as health</h1> `);
 	})
 }
 buildShield();

 function buildIceSpear () {
 	$('.iceSpearBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.IceSpell();
 		NewHero.name = inputName;
 		buildEnemy ();
		$('.outputEl').html(`<h1>${NewHero.name} Will kick your ass with ${NewHero.equipment} while having ${NewHero.attack} as attack and ${NewHero.health} as health</h1> `);
		$('.outputElEnemy').html(`<h1>${NewEnemy.name} Will kick your ass with ${NewEnemy.equipment} while having ${NewEnemy.attack} as attack and ${NewEnemy.health} as health</h1> `);
 	})
 }
 buildIceSpear();

 function buildRobes () {
 	$('.armoredRobesBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.ArmoredRobe();
 		NewHero.name = inputName;
 		buildEnemy ();
		$('.outputEl').html(`<h1>${NewHero.name} Will kick your ass with ${NewHero.equipment} while having ${NewHero.attack} as attack and ${NewHero.health} as health</h1> `);
		$('.outputElEnemy').html(`<h1>${NewEnemy.name} Will kick your ass with ${NewEnemy.equipment} while having ${NewEnemy.attack} as attack and ${NewEnemy.health} as health</h1> `);
 	})
 }
 buildRobes();

 function buildLongBow () {
 	$('.longBowBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.LongBow();
 		NewHero.name = inputName;
 		buildEnemy ();
		$('.outputEl').html(`<h1>${NewHero.name} Will kick your ass with ${NewHero.equipment} while having ${NewHero.attack} as attack and ${NewHero.health} as health</h1> `);
		$('.outputElEnemy').html(`<h1>${NewEnemy.name} Will kick your ass with ${NewEnemy.equipment} while having ${NewEnemy.attack} as attack and ${NewEnemy.health} as health</h1> `);
 	})
 }
 buildLongBow();

 function buildLeatherArmor () {
 	$('.leatherArmorBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.LeatherArmor();
 		NewHero.name = inputName;
 		buildEnemy ();
		$('.outputEl').html(`<h1>${NewHero.name} Will kick your ass with ${NewHero.equipment} while having ${NewHero.attack} as attack and ${NewHero.health} as health</h1> `);
		$('.outputElEnemy').html(`<h1>${NewEnemy.name} Will kick your ass with ${NewEnemy.equipment} while having ${NewEnemy.attack} as attack and ${NewEnemy.health} as health</h1> `);
 	})
 }
 buildLeatherArmor();

 function buildFireBall () {
 	$('.fireBallBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.FireSpell();
 		NewHero.name = inputName;
 		buildEnemy ();
		$('.outputEl').html(`<h1>${NewHero.name} Will kick your ass with ${NewHero.equipment} while having ${NewHero.attack} as attack and ${NewHero.health} as health</h1> `);
		$('.outputElEnemy').html(`<h1>${NewEnemy.name} Will kick your ass with ${NewEnemy.equipment} while having ${NewEnemy.attack} as attack and ${NewEnemy.health} as health</h1> `);
 	})
 }
 buildFireBall();

 function buildProtectionSpell () {
 	$('.protectionSpellBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.ProtectionSpell();
 		NewHero.name = inputName;
 		buildEnemy ();
		$('.outputEl').html(`<h1>${NewHero.name} Will kick your ass with ${NewHero.equipment} while having ${NewHero.attack} as attack and ${NewHero.health} as health</h1> `);
		$('.outputElEnemy').html(`<h1>${NewEnemy.name} Will kick your ass with ${NewEnemy.equipment} while having ${NewEnemy.attack} as attack and ${NewEnemy.health} as health</h1> `);
 	})
 }
 buildProtectionSpell();

function buildEnemy () {
	var determineEnemy;
	determineEnemy=Math.floor(Math.random() * (1-0) + 1);
	if (determineEnemy === 2) {
		NewEnemy = new EquipmentModule.PotionOfProtection();
	} else {
		NewEnemy = new EquipmentModule.CloakOfWisdom();
	}

}











