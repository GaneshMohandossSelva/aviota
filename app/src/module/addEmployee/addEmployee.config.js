(function () {
    'use strict';
    angular.module("addEmployee", [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('addEmployee', {
                            url: "/addEmployee"
                            , title: "Add employee"
                            , templateUrl: "app/src/module/addEmployee/addEmployee.html"
                            , controller: "addEmployeeCtrl"
                            , params:{
                                userParams:""
                            }
                    })
        }]);
})();