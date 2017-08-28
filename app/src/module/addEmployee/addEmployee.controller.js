(function () {
    'use strict';

    var app = angular.module('addEmployee');
        app.controller('addEmployeeCtrl', ['$scope','$state','$filter','inlineEditEmployee',  function ($scope, $state, $filter, inlineEditEmployee) {
            $scope.editor = new inlineEditEmployee($scope.record);
			$scope.employeeObj = [
					{	id: 1,	name: "Ganesh",email: "ganesh@ganesh.com",	department: "ICT",	designation: "SSE",dateOfJoin: new Date()},
					{	id: 2,	name: "MS",email: "ms@ganesh.com",	department: "ICT",	designation: "PM",dateOfJoin: new Date()},
					{	id: 3,	name: "CK",email: "ck@ganesh.com",	department: "ICT",	designation: "Lead",dateOfJoin: new Date()}
				]
			
			$scope.addEmployee = function(obj) {
				obj.dateOfJoin=new Date();
				$scope.employeeObj.push(obj);
				$scope.employee=[];
				localStorage.setItem("employeeList", JSON.stringify($scope.employeeObj));
			}
			
			$scope.$watch('employeeObj',function(newValue, oldValue){
				var empObj = localStorage.getItem("employeeList");
				$scope.employeeObj = JSON.parse(empObj);
			});
			
		}])
		.factory("inlineEditEmployee", function(){
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
					this.recordCache = {};
				};
			}
		});
})();