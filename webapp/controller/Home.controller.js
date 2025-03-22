sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/bootcamp/sapui5/freestylee/utils/HomeHelper"
], (Controller, HomeHelper) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.freestylee.controller.Home", {
        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
        },

        onPress: async function(){
            let oDatos = await HomeHelper.getDataProducts(); 
            await HomeHelper.setProductModel(this, oDatos[0].results);
        },

        onItemPress: function(oEvent){
            console.log("Evento onItemPress ejecutado");
            let oSource = oEvent.getSource();

            let aDatos = oSource.getBindingContext("ProductCollection").getObject();
            console.log("Datos del producto:", aDatos);

            this.oRouter.navTo("detail", {
                ProductID: aDatos.ProductID
            });
        }
    });
});