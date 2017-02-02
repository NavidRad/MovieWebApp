app.directive('movieDirective', function () {
    return {
        controller: function ($scope, $http, $location, $rootScope, focus) {
            $scope.moviechange = function () {

                var onError = function (reason) {
                    $scope.error = "Problem in connecting to the server!";
                };

                if ($scope.moviesearch != "" && $scope.moviesearch != null) {
                    $http.get("https://api.themoviedb.org/3/search/movie?api_key=04a75541e41ce1c8bc7c17fdb2fb8dfe&language=en-US&query=" + $scope.moviesearch)
                        .then(function (response) {
                            var moviesArray = response.data
                            $scope.allMovies = moviesArray.results;
                        }, onError);

                    $rootScope.$on('$stateChangeSuccess', function (event, to, toParams, from, fromParams) {
                        $rootScope.moviesearch = $scope.moviesearch;
                    });
                }
            }

            $scope.$on('movieSearchCall', function (event, data) {
                $scope.moviechange();
            })

            $scope.checkUrl = function () {
                var url = $location.path();
                if (url == "/home/movies") {
                    return true;
                }
            }

            //Set focus on search input
            focus('movieSearchInput');
        }
    };
});