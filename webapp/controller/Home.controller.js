sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/bootcamp/sapui5/freestylee/utils/HomeHelper",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, HomeHelper, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.freestylee.controller.Home", {
        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
        },

        onPress: async function () {
            let oDatos = await HomeHelper.getDataProducts();
            await HomeHelper.setProductModel(this, oDatos[0].results);
        },

        onItemPress: function (oEvent) {
            console.log("Evento onItemPress ejecutado");
            let oSource = oEvent.getSource();

            let aDatos = oSource.getBindingContext("ProductCollection").getObject();
            console.log("Datos del producto:", aDatos);

            this.oRouter.navTo("detail", {
                ProductID: aDatos.ProductID
            });
        },
        //onChange: function (oEvent) {
        //let oFilter= [];
        //let oSource = oEvent.getSource();
        //let oTable = this.getView().byId("idProductsTable");
        //let oBinding =oTable.getBinding("items");

        //if (oSource.getValue()) {
        //oFilter = new Filter("ProductID", FilterOperator.EQ, oSource.getValue());

        //}
        //oBinding.filter(oFilter);

    //},
        onPress: async function () {
        let oFilter = [];
        let sValue = this.byId("inputID").getValue();

        if (sValue) {
            oFilter = new Filter("ProductID", FilterOperator.EQ, sValue)
        }

        let oDatos = await HomeHelper.getDataProducts([oFilter]);
        await HomeHelper.setProductModel(this, oDatos[0].results);
    },
    });
});