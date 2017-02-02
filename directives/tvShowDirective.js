app.directive('tvShowDirective', function () {
    return {
        controller: function ($scope, $http, $location, $rootScope, focus) {
            $scope.tvshowchange = function () {

                var onError = function (reason) {
                    $scope.error = "Problem in connecting to the server!";
                };

                if ($scope.tvshowsearch != "" && $scope.tvshowsearch != null) {
                    $http.get("https://api.themoviedb.org/3/search/tv?api_key=04a75541e41ce1c8bc7c17fdb2fb8dfe&language=en-US&query=" + $scope.tvshowsearch)
                        .then(function (response) {
                            var tvshowsArray = response.data
                            $scope.allTvShows = tvshowsArray.results;
                        }, onError);

                    $rootScope.$on('$stateChangeSuccess', function (event, to, toParams, from, fromParams) {
                        $rootScope.tvshowsearch = $scope.tvshowsearch;
                    });
                }
            }

            $scope.$on('tvshowSearchCall', function (event, data) {
                $scope.tvshowchange();
            })

            $scope.checkUrl = function () {
                var url = $location.path();
                if (url == "/home/movies") {
                    return true;
                }
            }

            //Set focus on search input
            focus('tvSearchInput');
        }
    };
});