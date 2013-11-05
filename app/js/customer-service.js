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

customServiceApp.filter('reverse', function() {
   return function(input, uppercase, postfix) {
       var out = '';
       for(var i = 0; i < input.length; i++) {
           out = input.charAt(i) + out;
       }
       if(uppercase) {
           out = out.toUpperCase();
       }
       if(postfix) {
           return out + postfix;
       }
       return out;
   }
});
