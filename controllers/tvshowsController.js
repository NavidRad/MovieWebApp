app.controller('tvshowsController', function ($scope, $http) {

    var onError = function (reason) {
        $scope.error = "Problem in connecting to the server!";
    };

    $http.get("https://api.themoviedb.org/3/tv/top_rated?api_key=04a75541e41ce1c8bc7c17fdb2fb8dfe&language=en-US")
        .then(function (response) {
            var tvshowsArray = response.data
            $scope.tvshows = tvshowsArray.results;
        }, onError);
});