(function(){

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){
		$scope.name = "";
		$scope.result = "";
		var comma = ',';

		$scope.calculate = function(name){
			// Check for an empty string
			var splitedString;

			if(!name){
				$scope.result = "Please enter data first";
			} else if(!isNaN(name)){
				$scope.result = "Please do not use numbers :)";
			} else {
				console.log(name);
				splitedString = splitString(name, comma);	
				$scope.result = countLunchMeals(splitedString);
			}
			console.log($scope.result);
		}

		function splitString(stringToSplit, seperator){
			return stringToSplit.split(seperator);
		}

		function countLunchMeals(arrayOfMeals){
			if(arrayOfMeals.length <= 3){
				return "Enjoy!";
			} else if(arrayOfMeals.length > 3){
				return "Too much!";
			} 
		}
	}

})();
