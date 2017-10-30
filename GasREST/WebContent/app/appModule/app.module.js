angular.module('appModule', ['ngRoute'])
.config(function($routeProvider){
    $routeProvider
        .when('/gas', {
            template: '<gas-list></gas-list>'
        })
        .when('/gas/:id', {
            template: '<gas-list></gas-list>'
        })
        .otherwise({
            template: '<not-found></not-found>'
        })
});