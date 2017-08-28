(function () {
    'use strict';
    angular.module("addDeviceToEmployee", [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('addDeviceToEmployee', {
                            url: "/addDeviceToEmployee"
                            , title: "Add device to employee"
                            , templateUrl: "app/src/module/addDeviceToEmployee/addDeviceToEmployee.html"
                            , controller: "addDeviceToEmployeeCtrl"
                            , params:{
                                userParams:""
                            }
                    })
        }]);
})();