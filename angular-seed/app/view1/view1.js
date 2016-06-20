'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
//line chart data
var lineData = {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
    datasets: [{
        fillColor: "rgba(255,255,255,0)",
        strokeColor: "rgba(63,169,245,1)",
        pointColor: "rgba(63,169,245,1)",
        pointStrokeColor: "#fff",
        data: [65, 59, 90, 81, 56, 55, 40]
    }, {
        fillColor: "rgba(255,255,255,0)",
        strokeColor: "rgba(102,45,145,1)",
        pointColor: "rgba(102,45,145,1)",
        pointStrokeColor: "#fff",
        data: [28, 48, 40, 19, 96, 27, 100]
    }]
}

var lineOptions = {
    animation: true,
    pointDot: true,
    scaleOverride : true,
    scaleShowGridLines : false,
    scaleShowLabels : true,
    scaleSteps : 4,
	scaleStepWidth : 25,
	scaleStartValue : 25,
};



//radar chart data
var radarData = {
	labels : ["Eating","Drinking","Sleeping","Designing","Coding","Partying","Running"],
	datasets : [
		{
			 fillColor: "rgba(102,45,145,.1)",
			 strokeColor: "rgba(102,45,145,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : [65,59,90,81,56,55,40]
		},
		{
	        fillColor: "rgba(63,169,245,.1)",
            strokeColor: "rgba(63,169,245,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [28,48,40,19,96,27,100]
		}
	]
}



//Create Line chart
var ctx = document.getElementById("lineChart").getContext("2d");
var myNewChart = new Chart(ctx).Line(lineData, lineOptions);

//Create Radar chart
var ctx2 = document.getElementById("radarChart").getContext("2d");
var myNewChart = new Chart(ctx2).Radar(radarData);




}]);