(function () {
    'use strict';
    var app = angular.module('addDeviceToEmployee');
        app.controller('addDeviceToEmployeeCtrl', ['$scope','$state','$filter','inlineEditDeviceToEmployee','inlineEdit',  function ($scope, $state, $filter, inlineEditDeviceToEmployee, inlineEdit) {
			
			var deviceObj = localStorage.getItem("deviceList");
			$scope.devices = JSON.parse(deviceObj);
			
			var employeeObj = localStorage.getItem("employeeList");
			$scope.employees = JSON.parse(employeeObj);
			
			$scope.editor = new inlineEditDeviceToEmployee($scope.record);
			
			$scope.addDevice = function(obj) {
				$scope.collection.push(obj);
				$scope.device=[];
			}
    }])
    .factory("inlineEditDeviceToEmployee", function(){
        return function(recordCache, Resource){
            this.recordCache = recordCache;
            this.resource = Resource;
            this.edit = function(record){
                angular.extend(this.recordCache = record, {editing:true});
            };
            this.cancel = function(){
                delete this.recordCache.editing;
                this.recordCache = {};
            };
            this.save = function(){
                delete this.recordCache.editing;
                console.log(JSON.stringify(this.recordCache));
				localStorage.setItem("addedDeviceListToEmployee", JSON.stringify(this.recordCache));
                this.recordCache = {};
            };
        }
    });
	
})();