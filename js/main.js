// main.js
var app = angular.module('movieApp', ['ngGrid', 'restangular', 'ui.bootstrap']);

// Configure the application
app.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('api/index.php'); 
});

// Define the controller
app.controller('movieCtrl', function($scope, Restangular, $modal) {
	$scope.selections = [];
	$scope.editDisabled = true;
   	$scope.movieData = [];
	$scope.gridOptions = {
		data: 'movieData',
		columnDefs: [
			{ field: 'id', visible: false},	
			{ field: 'title', displayName: 'Movie Title', width: "30%",cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><span ng-cell-text title="{{COL_FIELD}}">{{COL_FIELD}}</span></div>'},
			{ field: 'description', displayName: 'Description',cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><span ng-cell-text title="{{COL_FIELD}}">{{COL_FIELD}}</span></div>'}],
		multiSelect: false,
		keepLastSelected: false,
		selectedItems: $scope.selections,
		afterSelectionChange:function() {
			console.log($scope.selections);
			if ($scope.selections != "" ) {
				$scope.editDisabled = false;
			} else {
				$scope.editDisabled = true;
            }
		}
	 };

	Restangular.all('movieApp').getList().then(function(result) {
		for (var i=0; i<result.length; i++) {
			$scope.movieData.push(result[i].plain());
		}
	});
	
	$scope.open = function () {
		$scope.movies = {
			id: $scope.selections[0].id,
			title: $scope.selections[0].title,
			description: $scope.selections[0].description
		};
		
		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'movieContent.html',
			controller: 'MovieEditCtrl',
			size: '',
			resolve: {
				movies: function () {
					return $scope.movies;
				}
			}
		});
		
		modalInstance.result.then(function (selectedItem) {
			var intIndex = selectedItem.id - 1;
			$scope.movieData[intIndex].title = selectedItem.title;
			$scope.movieData[intIndex].description = selectedItem.description;
		});
	};
});

app.controller('MovieEditCtrl', function ($scope, $modalInstance, movies) {
	$scope.movies= movies;

	$scope.save = function () {
		$modalInstance.close($scope.movies);
	};
});