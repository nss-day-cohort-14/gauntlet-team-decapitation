"use strict";


let PlayerModule = require("./player")
let RaceModule = require("./races")
let ClassesModule = require("./classes")
let EquipmentModule = require("./equipment")
let DomManip = require("./domManip")
let $ = require("jquery")
let Templates = require("./template")

$(document).ready(function(){
    $('.raceBtn').prop('disabled',true);
    $('#name').keyup(function(){
        $('.raceBtn').prop('disabled', this.value === "" ? true : false);     
    })
}); 

DomManip.disableBtns();
DomManip.humanClick();
DomManip.elfClick();
DomManip.warriorEquipmentClick();
DomManip.mageEquipmentClick();
DomManip.archerEquipmentClick();
DomManip.wizardEquipmentClick();

var NewHero;
var NewEnemy;
var resetHealth;
var counter = 1;

function buildExtraWeapon () {
 	$('.extraWeaponBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.ExtraWeapon();
 		NewHero.name = inputName;
 		resetHealth = NewHero.health;
 		addFightButton();
 		buildEnemy ();
		Templates.heroTemplate(NewHero);
		Templates.enemyTemplate(NewEnemy);
		console.log(NewHero.race);
 	})
 }
 buildExtraWeapon();

function buildShield () {
 	$('.shieldBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.Shield();
 		NewHero.name = inputName;
 		resetHealth = NewHero.health;
 		addFightButton();
 		buildEnemy ();
		Templates.heroTemplate(NewHero);
		Templates.enemyTemplate(NewEnemy);
 	})
 }
 buildShield();

 function buildIceSpear () {
 	$('.iceSpearBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.IceSpell();
 		NewHero.name = inputName;
 		resetHealth = NewHero.health;
 		addFightButton();
 		buildEnemy ();
		Templates.heroTemplate(NewHero);
		Templates.enemyTemplate(NewEnemy);
 	})
 }
 buildIceSpear();

 function buildRobes () {
 	$('.armoredRobesBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.ArmoredRobe();
 		NewHero.name = inputName;
 		resetHealth = NewHero.health;
 		addFightButton();
 		buildEnemy ();
		Templates.heroTemplate(NewHero);
		Templates.enemyTemplate(NewEnemy);
 	})
 }
 buildRobes();

 function buildLongBow () {
 	$('.longBowBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.LongBow();
 		NewHero.name = inputName;
 		resetHealth = NewHero.health;
 		addFightButton();
 		buildEnemy ();
		Templates.heroTemplate(NewHero);
		Templates.enemyTemplate(NewEnemy);
 	})
 }
 buildLongBow();

 function buildLeatherArmor () {
 	$('.leatherArmorBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.LeatherArmor();
 		NewHero.name = inputName;
 		resetHealth = NewHero.health;
 		addFightButton();
 		buildEnemy ();
		Templates.heroTemplate(NewHero);
		Templates.enemyTemplate(NewEnemy);
 	})
 }
 buildLeatherArmor();

 function buildFireBall () {
 	$('.fireBallBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.FireSpell();
 		NewHero.name = inputName;
 		resetHealth = NewHero.health;
 		addFightButton();
 		buildEnemy ();
		Templates.heroTemplate(NewHero);
		Templates.enemyTemplate(NewEnemy);
 	})
 }
 buildFireBall();

 function buildProtectionSpell () {
 	$('.protectionSpellBtn').click(function () {
 		var inputName = $('#name').val();
 		NewHero = new EquipmentModule.ProtectionSpell();
 		NewHero.name = inputName;
 		resetHealth = NewHero.health;
 		addFightButton();
 		buildEnemy ();
		Templates.heroTemplate(NewHero);
		Templates.enemyTemplate(NewEnemy);
 	})

 }
 buildProtectionSpell();

function addFightButton () {
  $("#hiddenbtn").removeClass();
  $("#hiddenbtn").click(function() {
    fight();
  })  
}

function buildEnemy () {
  var determineEnemy;
  determineEnemy=Math.floor(Math.random() * (4) + 1);
	if (counter === 3) {
		NewEnemy = new ClassesModule.Ice();
	}  
  	else if (determineEnemy === 2) {
    	NewEnemy = new EquipmentModule.PotionOfProtection();
    	counter ++;
  } else if (determineEnemy === 1) {
    	NewEnemy = new EquipmentModule.CloakOfWisdom();
    	counter ++;
  } else if (determineEnemy === 3) {
    	NewEnemy = new EquipmentModule.PlateArmor();
    	counter ++;
  } else {
    	NewEnemy = new EquipmentModule.DoubleDagger();
    	counter ++;
  }
  console.log(counter);
}


function fight () {
	heroCritRoll();
    Templates.enemyTemplate(NewEnemy);
    if (NewEnemy.health < 1) {
      alert("Enemy is dead");
      alert("Next Wave");
      NewHero.health = resetHealth;
      Templates.heroTemplate(NewHero);
      console.log(NewHero.health);
      console.log(NewEnemy.name);
      buildEnemy();
      Templates.enemyTemplate(NewEnemy);
    } else {
      enemyCritRoll();
      Templates.heroTemplate(NewHero);
      if (NewHero.health < 1) {
        alert("Hero is Dead");
      } else { 
        console.log("heroHealth", NewHero.health);
        console.log("enemyHealth", NewEnemy.health);
        console.log("end turn");
    } 
  } 
}


function heroCritRoll() {
	let critRoll = Math.floor(Math.random() * (100) + 1)
	if (critRoll >= 85) {
		NewEnemy.health = NewEnemy.health - (NewHero.attack * 1.25);
		console.log("Critical Hit on the enemy!");
	} else if (critRoll <= 15) {
		NewEnemy.health = NewEnemy.health;
		console.log("The hero missed, you idiot!");
	} else {
		NewEnemy.health = NewEnemy.health - NewHero.attack;
	}
}

function enemyCritRoll() {
	let critRoll = Math.floor(Math.random() * (100) + 1)
	if (critRoll >= 85) {
	    NewHero.health = NewHero.health - (NewEnemy.attack * 1.25);
		console.log("Critical Hit on the hero!");
	} else if (critRoll <= 15) {
	    NewHero.health = NewHero.health;
		console.log("The enemy missed, you idiot!");
	} else {
	    NewHero.health = NewHero.health - NewEnemy.attack;
	}
}





