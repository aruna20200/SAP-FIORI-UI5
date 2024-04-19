sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ui5sample.controller.Home", {
            onInit: function () {

            },
            onCalculate:function(OEVent){
                debugger;
                // const iFirstNumber = this.getView().byId("idFirstNumber").getvalue()
                // const oView = this.getView().byId("idFirstNumber").getvalue()
                //Get The Values
                const oView = this.getView(),
                iFirstNumber = parseInt(oView.byId("idFirstNumber").getValue()),
                iSecondNumber = parseInt(oView.byId("idSecondNumber").getValue());
                //Addition Of the Values
                const iResult = iFirstNumber + iSecondNumber;
                // Print The Result
                alert(iResult)
            },
            onInitiateJsonModel:function(){
                const OPerson = {
                    name:"Artihcus",
                    age:"5"
                }
                debugger;
            }
        });
    });
