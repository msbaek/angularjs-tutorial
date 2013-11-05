var customServiceApp = angular.module('customServiceApp', []);

customServiceApp
    .service('Math', function () {
        this.multiply = function (a, b) {
            return a * b;
        }
    })
    .service('Str', function() {
        this.greeting = function() {
            return 'Hi there';
        }
    });

customServiceApp.controller('CustomServiceController', ['$scope', 'Math', 'Str', function ($scope, Math, Str) {
    var a = 10;
    var b = 20;

    $scope.result = Math.multiply(a, b);
    $scope.greeting = Str.greeting();
}]);
