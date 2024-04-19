sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("ui5sample.controller.Home", {
            onInit: function () {
                const oPerson = {
                    employee: {
                        EmployeeName: "John Doe",
                        EmployeeAge: 40,
                        ContractStarted: new Date(),
                        Email: "john.doe@gmail.com"
                    }
                }
                const oJsonModel = new JSONModel(oPerson);
                this.getView().setModel(oJsonModel, "employeeModel");


            }
            
            
            
        });
    });
