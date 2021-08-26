var app = angular.module("app", ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/cat', {
            templateUrl: "templates/cat.html",
            controller: "catController"
        })
        .when('/dog', {
            templateUrl: 'templates/dog.html',
            controller: "dogController"
        })
        .when('/rat', {
            templateUrl: "templates/rat.html",
            controller: "ratController"
        });
});

app.controller('catController', ['$scope', function($scope){
    $scope.title = "Cat";
}]);
app.controller('dogController', ['$scope', function($scope){
    $scope.title = "Dog";
}]);
app.controller('ratController', ['$scope', function($scope){
    $scope.title = "Rat";
}]);
