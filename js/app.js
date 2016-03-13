// var myApp = angular.module('myApp', []);
// myApp.controller('MainController', [function(){
	
// 	var vm = this;
// 	// suppose you wanted to just display text
// 	vm.appointment = "Rachel meeting Dr. Richard!"
	
// 	// suppose you want to have an array of different appointments
// 	vm.appointments = [
// 	  { patientName: "Dolores", doctorName: "Mike" },
// 	  { patientName: "Francesca", doctorName: "Rick" },
// 	  { patientName: "Michelle", doctorName: "Obama" }
// 	];
// }]);


angular.module('myApp',[])//name of app. Array holds third party and custom dependencies etc
	.controller('MainCtrl', function(){
		var vm = this;
		vm.message = "Hello World!!";
		vm.appointment = "Rachel meeting Dr. Richard!";

		vm.appointments = [
				{ doc: "Dr.X", patient: "patientX" },
				{ doc: "Dr.T", patient: "patientT" },
				{ doc: "Dr.Z", patient: "patientZ" }
		];

		vm.firstname = "";
		vm.lastname = "";
	});