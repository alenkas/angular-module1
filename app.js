(function(){

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', LunchCheckController);


	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){
		$scope.name = "";
		$scope.result = "";

		$scope.calculate = function(name){
			
			var splitedEntry, checkEntry;
			var seperator = ',';
			
			// Check for an empty string
			if(!name){
				$scope.result = "Please enter data first";
			} else {
				splitedEntry = splitUserEntry(name, seperator);
				checkEntry = checkUserEntry(splitedEntry);	
			}

			if(checkEntry){
				$scope.result = countIfTooMuch(checkEntry);
			}
			
		}

		function splitUserEntry(stringToSplit, seperator){
			return stringToSplit.split(seperator);
		}
	
		function checkUserEntry(array){
			for(var i = 0; i < array.length; i++){
				// check if there is at least one character with non whitespace
				if(!/\S/.test(array[i])){
					console.log("Empty string is removed");
					array.splice(i, 1);
				}
			}
			return array;

		}

		function countIfTooMuch(array){
			if(array.length <= 3){
				return "Enjoy!";
			} else if(array.length > 3){
				return "Too much!";
			} 
		}
	}

})();
