var app = angular.module('SBL',['ngRoute', 'ngAnimate']);

app.config([
    '$routeProvider', '$locationProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'templates/home.html',
                controller: 'defaultControl',
                activetab: 'home'
            })
            .when('/services', {
                templateUrl: 'templates/services.html',
                controller: 'defaultControl',
                activetab: 'services'
            })
            .when('/careers', {
                templateUrl: 'templates/careers.html',
                controller: 'defaultControl',
                activetab: 'careers'
            })
            .when('/about', {
                templateUrl: 'templates/about.html',
                controller: 'defaultControl',
                activetab: 'about'
            })
            .when('/contact', {
                templateUrl: 'templates/contact.html',
                controller: 'defaultControl',
                activetab: 'contact'
            })
            .otherwise('/home', {
                templateUrl: 'templates/home.html',
                controller: 'defaultControl',
                activetab: 'home'
            });
//        $locationProvider.html5Mode(true);
    }
]);

app.controller('defaultControl', function ($scope, $route) {
    $scope.route = $route;
});

app.directive('holderFix', function () {
    return {
        link: function (scope, element, attrs) {
            Holder.run({ images: element[0], nocss: true });
        }
    };
});