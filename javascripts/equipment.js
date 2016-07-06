"use strict";

let Equipment = require("./classes");

function ExtraWeapon () {
  this.attack += Math.floor(Math.random() * (15 - 10) + 10);
  this.equipment = "Extra Weapon";
}
// Place holder for event listner
ExtraWeapon.prototype = new Equipment.Warrior();

function Sheild () {
  this.health += Math.floor(Math.random() * (10 - 5) + 5);
  this.equipment = "Sheild";
}
// Place holder for event listner
Sheild.prototype = new Equipment.Warrior();

function IceSpell () {
  this.attack += Math.floor(Math.random() * (10 - 5) + 5);
  this.equipment = "Ice Spell";
}
// Place holder for event listner
IceSpell.prototype = new Equipment.Mage();

function ArmoredRobe () {
  this.health += Math.floor(Math.random() * (15 - 10) + 10);
  this.equipment = "Armored Robe";
}
// Place holder for event listner
ArmoredRobe.prototype = new Equipment.Mage();

function LongBow () {
  this.attack += Math.floor(Math.random() * (15 - 5) + 5);
  this.equipment = "Long Bow";
}
// Place holder for event listner
LongBow.prototype = new Equipment.Archer();

function LeatherArmor () {
  this.health += Math.floor(Math.random() * (15 - 5) + 5);
  this.equipment = "Leather Armor";
}
// Place holder for event listner
LeatherArmor.prototype = new Equipment.Archer();

function FireSpell () {
  this.attack += Math.floor(Math.random() * (10 - 5) + 5);
  this.equipment = "Fire Spell";
}
// Place holder for event listner
FireSpell.prototype = new Equipment.Wizard();

function ProtectionSpell () {
  this.health += Math.floor(Math.random() * (15 - 10) + 10);
  this.equipment = "Protection Spell";
}
// Place holder for event listner
ProtectionSpell.prototype = new Equipment.Wizard();

function DoubleDagger () {
  this.attack += Math.floor(Math.random() * (15 - 10) + 10);
  this.equipment = "Double Dagger";
}
// Place holder for event listner
DoubleDagger.prototype = new Equipment.Beserker();

function PlateArmor () {
  this.health += Math.floor(Math.random() * (10 - 5) + 5);
  this.equipment = "Plate Armor";
}
// Place holder for event listner
PlateArmor.prototype = new Equipment.Beserker();

function PotionOfProtection () {
  this.health += Math.floor(Math.random() * (10 - 5) + 5);
  this.equipment = "Potion of Protection";
}
// Place holder for event listner
PotionOfProtection.prototype = new Equipment.Shaman();

function CloakOfWisdom () {
  this.health += Math.floor(Math.random() * (10 - 5) + 5);
  this.equipment = "Cloak of Wisdom";
}
// Place holder for event listner
CloakOfWisdom.prototype = new Equipment.Shaman();

module.exports = {
  ExtraWeapon,
  Sheild,
  IceSpell,
  ArmoredRobe,
  LongBow, 
  LeatherArmor, 
  FireSpell, 
  ProtectionSpell, 
  DoubleDagger, 
  PlateArmor,
  PotionOfProtection,
  CloakOfWisdom
};

