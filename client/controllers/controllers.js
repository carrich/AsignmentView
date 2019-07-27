myApp.controller('empController', function ($scope, $route, $routeParams, $http) {
    $scope.getEmployees = function () {
        $http.get('https://velvety-rookery-248023.appspot.com/api/v1/article?catId=1564183106610').then(function (response) {
            $scope.articals = response.data.data;
            console.log($scope.articals)
            $scope.employee_names = []
            angular.forEach(values, function (value, key) {
             if (value.images.length>0){
                 $scope.employee_names .push(value);
             }
            });
            console.log($scope.employee_names)

        });

    };
    $scope.getNew = function () {
        var id = $routeParams.id;
        $http.get('https://velvety-rookery-248023.appspot.com/api/v1/article?catId=' + id).then(function (response) {
            $scope.articals = response.data.data;
        });
    };
    $scope.showEmployee = function () {
		var id = $routeParams.id;
		var catId = $routeParams.catId;
		// alert(id);
		var link =  catId + "&id=" + id;
		console.log(catId);
		console.log(id);
		$http.get('https://velvety-rookery-248023.appspot.com/api/v1/article?catId='+link).then(function (response) {
			$scope.artical = response.data.data;
			console.log($scope.artical)
		});
	};
    $scope.FilterFunction = function (item) {
        return (item.images.length > 0);
    };

// $scope.addEmployee = function(){
// 	//var id = $routeParams.id;
// 	$http.post('/api/employees/', $scope.employee).then(function(response){
// 		//$scope.employee = response.data;
// 		window.location.href = '/';
// 	});
// };
// $scope.updateEmployee = function(){
// 	var id = $routeParams.id;
// 	$http.put('/api/employees/'+ id , $scope.employee).then(function(response){
// 		//$scope.employee = response.data;
// 		window.location.href = '/';
// 	});
// };
// $scope.deleteEmployee = function(id){
// 	var id = id;
// 	$http.delete('/api/employees/'+ id).then(function(response){
// 		$route.reload();
// 	});
// };

})
;