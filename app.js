var app = angular.module('myApp', ['ui.router']);

//Routing
app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home/movies');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/partial-home.html'
        })
        .state('home.movies', {
            url: '/movies',
            templateUrl: 'templates/partial-home-movies.html',
            controller: 'moviesController'
        })
        .state('home.tvshows', {
            url: '/tvshows',
            templateUrl: 'templates/partial-home-tvshows.html',
            controller: 'tvshowsController'
        })
        .state('movie_detail', {
            url: '/movies/:id',
            templateUrl: 'templates/movie.html',
            controller: 'movieController'
        })
        .state('tvshow_detail', {
            url: '/tvshows/:id',
            templateUrl: 'templates/tvshow.html',
            controller: 'tvshowController'
        });
});

//Removing # from the URL
app.config(["$locationProvider", function ($locationProvider) {
    $locationProvider.html5Mode(true);
}]);