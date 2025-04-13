/*global QUnit*/

sap.ui.define([
	"ngonzano/project1/controller/ViewOdata.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewOdata Controller");

	QUnit.test("I should test the ViewOdata controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
