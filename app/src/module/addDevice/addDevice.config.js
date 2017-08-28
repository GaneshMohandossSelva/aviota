(function () {
    'use strict';
    angular.module("addDevice", [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('addDevice', {
                            url: "/addDevice"
                            , title: "Add device"
                            , templateUrl: "app/src/module/addDevice/addDevice.html"
                            , controller: "addDeviceCtrl"
                            , params:{
                                userParams:""
                            }
                    })
        }]);
})();