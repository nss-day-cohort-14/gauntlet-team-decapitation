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
        $('.raceBtn').prop('disabled', this.value == "" ? true : false);     
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

function buildExtraWeapon () {
 	$('.extraWeaponBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.ExtraWeapon();
 		NewHero.name = inputName;
		$('.outputEl').html(`<h1>${NewHero.name} Will kick your ass with ${NewHero.equipment} while having ${NewHero.attack} as attack and ${NewHero.health} as health</h1> `);
 	})
 }
 buildExtraWeapon();

function buildShield () {
 	$('.shieldBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.Shield();
 		NewHero.name = inputName;
		$('.outputEl').html(`<h1>${NewHero.name} Will kick your ass with ${NewHero.equipment} while having ${NewHero.attack} as attack and ${NewHero.health} as health</h1> `);
 	})
 }
 buildShield();

 function buildIceSpear () {
 	$('.iceSpearBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.IceSpell();
 		NewHero.name = inputName;
		$('.outputEl').html(`<h1>${NewHero.name} Will kick your ass with ${NewHero.equipment} while having ${NewHero.attack} as attack and ${NewHero.health} as health</h1> `);
 	})
 }
 buildIceSpear();

 function buildRobes () {
 	$('.armoredRobesBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.ArmoredRobe();
 		NewHero.name = inputName;
		$('.outputEl').html(`<h1>${NewHero.name} Will kick your ass with ${NewHero.equipment} while having ${NewHero.attack} as attack and ${NewHero.health} as health</h1> `);
 	})
 }
 buildRobes();

 function buildLongBow () {
 	$('.longBowBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.LongBow();
 		NewHero.name = inputName;
		$('.outputEl').html(`<h1>${NewHero.name} Will kick your ass with ${NewHero.equipment} while having ${NewHero.attack} as attack and ${NewHero.health} as health</h1> `);
 	})
 }
 buildLongBow();

 function buildLeatherArmor () {
 	$('.leatherArmorBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.LeatherArmor();
 		NewHero.name = inputName;
		$('.outputEl').html(`<h1>${NewHero.name} Will kick your ass with ${NewHero.equipment} while having ${NewHero.attack} as attack and ${NewHero.health} as health</h1> `);
 	})
 }
 buildLeatherArmor();

 function buildFireBall () {
 	$('.fireBallBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.FireSpell();
 		NewHero.name = inputName;
		$('.outputEl').html(`<h1>${NewHero.name} Will kick your ass with ${NewHero.equipment} while having ${NewHero.attack} as attack and ${NewHero.health} as health</h1> `);
 	})
 }
 buildFireBall();

 function buildProtectionSpell () {
 	$('.protectionSpellBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.ProtectionSpell();
 		NewHero.name = inputName;
		$('.outputEl').html(`<h1>${NewHero.name} Will kick your ass with ${NewHero.equipment} while having ${NewHero.attack} as attack and ${NewHero.health} as health</h1> `);
 	})
 }
 buildProtectionSpell();


