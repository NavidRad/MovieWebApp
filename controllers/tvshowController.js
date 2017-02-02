app.controller('tvshowController', function ($scope, $http, $stateParams) {
    $http.get("https://api.themoviedb.org/3/tv/" + $stateParams.id + "?api_key=04a75541e41ce1c8bc7c17fdb2fb8dfe&language=en-US")
        .then(function (response) {
            $scope.tvshow = response.data;
        });
});