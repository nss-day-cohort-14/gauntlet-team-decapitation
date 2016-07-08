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
  $("#hiddenbtn").removeClass('hidebtn');
  $("#hiddenbtn").click(function() {
    fight();
  })  
}

function buildEnemy () {
  var determineEnemy;
  determineEnemy=Math.floor(Math.random() * (4) + 1);
	if (counter === 3) {
		NewEnemy = new ClassesModule.Ice();
    console.log("boss");
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
}


function fight () {
    heroCritRoll(NewHero);
    Templates.enemyTemplate(NewEnemy);
    if (NewEnemy.boss === true && NewEnemy.health <1) {
      NewEnemy.health = 0;
      Templates.enemyTemplate(NewEnemy);
    	setTimeout(function(){$('.enemyPic').prop('src', `${NewEnemy.dead}`)}, 15);
    	setTimeout(function(){
      		alert("You Won!");
      		location.reload();}, 1000);
    }
    else if (NewEnemy.health < 1) {
      NewEnemy.health = 0;
      Templates.enemyTemplate(NewEnemy)
      console.log(NewEnemy.health)
      setTimeout(function(){$('.enemyPic').prop('src', `${NewEnemy.dead}`)}, 15);
      setTimeout(function(){
      	  alert("Next Wave");
          buildEnemy(); 
          NewHero.health = resetHealth;
          Templates.heroTemplate(NewHero);
          Templates.enemyTemplate(NewEnemy);}, 1000);
      console.log(NewHero.health);
      console.log(NewEnemy.name);
      console.log(NewEnemy.boss);

    } else {
      enemyCritRoll(NewEnemy);
      Templates.heroTemplate(NewHero);
      if (NewHero.health < 1) {
        NewHero.health = 0;
        Templates.heroTemplate(NewHero);
        $('.heroPic').prop('src', `${NewHero.dead}`);
        setTimeout(function(){
          alert("You Won!");
          location.reload();}, 1000);
          } 
        } 
    }



function heroCritRoll(hero) {
	let critRoll = Math.floor(Math.random() * (100) + 1)
  $('.actionLog').html("")
	if (critRoll >= 85) {
		NewEnemy.health = NewEnemy.health - (NewHero.attack * 1.25);
		$('.actionLog').html(`<p><h1>Critical hit by ${hero.name}</h1></p>`)
	} else if (critRoll <= 15) {
		NewEnemy.health = NewEnemy.health;
		$('.actionLog').html(`<p><h1>${hero.name} just missed!</h1></p>`)
	} else {
		NewEnemy.health = NewEnemy.health - NewHero.attack;
	}
}

function enemyCritRoll(enemy) {
	let critRoll = Math.floor(Math.random() * (100) + 1)
   $('.actionLog').html("")
	if (critRoll >= 85) {
	    NewHero.health = NewHero.health - (NewEnemy.attack * 1.25);
    $('.actionLog').html(`<p><h1>Critical hit by ${enemy.name}</h1></p>`)
	} else if (critRoll <= 15) {
	    NewHero.health = NewHero.health;
		$('.actionLog').html(`<p><h1>${enemy.name} just missed!</h1></p>`)
	} else {
	    NewHero.health = NewHero.health - NewEnemy.attack;
	}
}





