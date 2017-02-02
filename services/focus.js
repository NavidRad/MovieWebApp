app.factory('focus', function ($timeout, $window, $rootScope) {
    return function (id) {
        $timeout(function () {
            var element = $window.document.getElementById(id);
            if (element) {
                element.focus();
            }
            
            if ($rootScope.moviesearch != "" && $rootScope.moviesearch != null) {
                $rootScope.$broadcast('movieSearchCall', {
                    
                });
            }

            if ($rootScope.tvshowsearch != "" && $rootScope.tvshowsearch != null) {
                $rootScope.$broadcast('tvshowSearchCall', {

                });
            }
        });
    };
});