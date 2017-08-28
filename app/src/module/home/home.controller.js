(function () {
    'use strict';

    var app = angular.module('home');
        app.controller('homeCtrl', ['$scope','$state','$filter',  function ($scope, $state, $filter) {
           
			$scope.employee ={
				id: 0,
				name: "",
				email: "",
				department: "",
				designation: "",
				dateOfJoin: Date()
			};

			$scope.hardware = [
				{
					name: "Laptops",
					price: 34000,
					modelYear: 2016,
					condition: "new"
				},
				{
					name: "Monitor",
					price: 7000,
					modelYear: 2016,
					condition: "new"
				},
				{
					name: "Laptops",
					price: 7000,
					modelYear: 2015,
					condition: "new"
				},
				{
					name: "CPU",
					price: 12000,
					modelYear: 2013,
					condition: "new"
				},
				{
					name: "Mouse",
					price: 500,
					modelYear: 2016,
					condition: "new"
				},
					{
					name: "Keyboard",
					price: 400,
					modelYear: 2016,
					condition: "new"
				},
				{
					name: "Pen Drive",
					price: 400,
					modelYear: 2016,
					condition: "new"
				},
				{
					name: "Hard Drive",
					price: 17000,
					modelYear: 2016,
					condition: "new"
				},
			];

			$scope.trackDevice = [{
				id: 0,
				employeeId: 0,
				givenDate: Date(),
				returnDate: Date(),
				deviceCondition: "",
			}];
			
			
			// Add Employee
			$scope.addEmployee = function(emp) {
					
			}
			
			// Add Device to employee
			$scope.addDeviceToEmployee = function(device) {
				
			}
			
			
            
        }]);
})();