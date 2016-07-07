"use strict"

 var $ = require('jquery');
 let EquipmentModule = require("./equipment")



 function disableBtns () {
 	$('.classesBtn').prop('disabled', true);
 	$('.equipBtn').prop('disabled', true);
 	$('.raceBtn').prop('disabled', true);
 }

 function raceClick () {
 	$('.raceBtn').click(function () {
 		$('.classesBtn').removeAttr('disabled');
 	});
 }

 function warriorEquipmentClick () {
 	$('.warriorBtn').click(function () {
 		$('.equipBtn').prop('disabled', true);
 		$('.warriorEquipBtn').removeAttr('disabled');
 	});
 }

 function mageEquipmentClick () {
 	$('.mageBtn').click(function () {
 		$('.equipBtn').prop('disabled', true);
 		$('.mageEquipBtn').removeAttr('disabled');
 	});
 }

 function archerEquipmentClick () {
 	$('.archerBtn').click(function () {
 		$('.equipBtn').prop('disabled', true);
 		$('.archerEquipBtn').removeAttr('disabled');
 	});
 }

 function wizardEquipmentClick () {
 	$('.wizardBtn').click(function () {
 		$('.equipBtn').prop('disabled', true);
 		$('.wizardEquipBtn').removeAttr('disabled');
 	});
 }



module.exports = {
	disableBtns, 
	raceClick, 
	warriorEquipmentClick, 
	mageEquipmentClick, 
	archerEquipmentClick, 
	wizardEquipmentClick,
};
