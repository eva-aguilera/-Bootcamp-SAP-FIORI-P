sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/bootcamp/sapui5/freestylee/utils/HomeHelper",
], (Controller, HomeHelper) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.freestylee.controller.Home", {
        onInit() {
        },
        onPress: async function () {
            let oDatos = await HomeHelper.getDataProducts();
            await HomeHelper.setProductModel(this,oDatos[0].results);
        }


    });
});