var customDirectiveApp = angular.module('customDirectiveApp', []);
customDirectiveApp.directive('customButton', function () {
    return {
        restrict: 'A',
        replace: true,
        transclude: true,
        template: '<a href="http://www.daum.net" class="myawesomebutton" ng-transclude>' +
            '<i class="icon-ok-sign"></i>' +
            '</a>',
        link: function (scope, element, attrs) {
            // DOM manipulation/events here!
        }
    };
});
