var phoneApp = angular.module('phoneApp', []);

phoneApp.controller('PhoneListController', ['$scope', '$http', function ($scope, $http) {
    $http({method: 'GET', url: 'http://localhost:3000/phones'}).success(function (data) {
        $scope.phones = data;
    });
}]);
