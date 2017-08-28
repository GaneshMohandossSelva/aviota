(function () {
    'use strict';
    var app = angular.module('addDevice');
        app.controller('addDeviceCtrl', ['$scope','$state','$filter','inlineEdit',  function ($scope, $state, $filter, inlineEdit) {
			$scope.editor = new inlineEdit($scope.record);
			$scope.collection = [
				{	name: "Laptops",price: 34000,modelYear: 2016,condition: "new"},
				{	name: "Monitor",price: 7000,modelYear: 2016,condition: "new"},
				{	name: "Laptops",price: 7000,modelYear: 2015,condition: "new"},
				{	name: "CPU",price: 12000,modelYear: 2013,condition: "new"},
				{	name: "Mouse",price: 500,modelYear: 2016,condition: "new"},
				{	name: "Keyboard",price: 400,modelYear: 2016,condition: "new"},
				{	name: "Pen Drive",price: 400,modelYear: 2016,condition: "new"},
				{	name: "Hard Drive",	price: 17000,modelYear: 2016,condition: "new"},
			]; 		   		            
			$scope.addDevice = function(obj) {
				$scope.collection.push(obj);
				$scope.device=[];
				$scope.editor.setData($scope.collection);
				localStorage.setItem("deviceList", JSON.stringify($scope.collection));
			}
			
			$scope.$watch('collection',function(newValue, oldValue){
				var devObj = localStorage.getItem("deviceList");
				$scope.collection = JSON.parse(devObj);
			});
    }])
    .factory("inlineEdit", function(){
        return function(recordCache, Resource){
			var deviceObj = {};
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
			this.setData = function(data) {
				deviceObj = data;
			};
			this.getData = function () {
				return deviceObj;
			}
        }
    });
	
})();