angular.module('deepLinking', ['ngRoute', 'ngSanitize'])
    .config(function ($routeProvider) {
        $routeProvider.
            when("/welcome", {templateUrl: 'welcome.html', controller: WelcomeCntl}).
            when("/settings", {templateUrl: 'settings.html', controller: SettingsCntl});
    });

AppCntl.$inject = ['$scope', '$route']
function AppCntl($scope, $route) {
    $scope.$route = $route;

    // initialize the model to something useful
    $scope.person = {
        name: 'anonymous',
        contacts: [
            {type: 'email', url: 'anonymous@example.com'}
        ]
    };
}

function WelcomeCntl($scope) {
    $scope.greet = function () {
        alert("Hello " + $scope.person.name);
    };
}

function SettingsCntl($scope, $location) {
    $scope.cancel = function () {
        $scope.form = angular.copy($scope.person);
    };

    $scope.save = function () {
        angular.copy($scope.form, $scope.person);
        $location.path('/welcome');
    };

    $scope.add = function () {
        $scope.form.contacts.push({type: 'email', value: ''})
    }

    $scope.remove = function (contact) {
        for (var i = 0, ii = $scope.form.contacts.length; i < ii; i++) {
            if (contact === $scope.form.contacts[i])
                $scope.form.contacts.splice(i, 1);
        }
    }

    $scope.cancel();
}
