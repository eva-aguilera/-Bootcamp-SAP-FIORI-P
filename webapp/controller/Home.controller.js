sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/bootcamp/sapui5/freestyle/utils/HomeHelper"
], (Controller, HomeHelper) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.freestylee.controller.Home", {
        onInit() {
        },

        onPress: async function () {
            let oDatos = HomeHelper.getDataProducts();
        }
    });
});