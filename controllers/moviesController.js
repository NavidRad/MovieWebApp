app.controller('moviesController', function ($scope, $http) {

    var onError = function (reason) {
        $scope.error = "Problem in connecting to the server!";
    };

    $http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=04a75541e41ce1c8bc7c17fdb2fb8dfe&language=en-US")
        .then(function (response) {
            var moviesArray = response.data
            $scope.movies = moviesArray.results;
        }, onError);

});