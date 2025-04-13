sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"

    /**
     * @param {sap.ui.core.mvc.Controller} Controller
     * @param {sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.Filter} Filter
     * @param {typeof sap.ui.model.FilterOperator} FilterOperator
     */

], (Controller, MessageToast, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("ngonzano.project1.controller.ViewOdata", {
        onInit() {
            MessageToast.show("Vista cargada 👌");
            const oJSONModel = new sap.ui.model.json.JSONModel();
            const oView = this.getView()
            const sUrl = sap.ui.require.toUrl("ngonzano/project1/model/SelectionScreenMenu.json");
            oJSONModel.loadData(sUrl);

            oView.setModel(oJSONModel, "selectionScreenMenu")


        },
        onFilter: function (oEvent) {
            const oData = this.getView().getModel("selectionScreenMenu").getData()
            let filters = []
            if (oData.ShipName !== "") {
                filters.push(new Filter("ShipName", FilterOperator.Contains, oData.ShipName))
            }
            if (oData.CountryKey !== "") {
                filters.push(new Filter("Country", FilterOperator.EQ, oData.CountryKey))
            }

            const oList = this.getView().byId("list1")
            const oBinding = oList.getBinding("items")

            oBinding.filter(filters)

        },
        onClearFilters: function () {
            const oModelSelScreen = this.getView().getModel("selectionScreenMenu")
            oModelSelScreen.setProperty("/CountryKey", "")
            oModelSelScreen.setProperty("/ShipName", "")

            const oList = this.getView().byId("list1")
            const oBinding = oList.getBinding('itens')
            oBinding.filter([])
        }
    });
});