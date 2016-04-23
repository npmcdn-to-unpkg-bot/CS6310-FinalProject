angular.module('CS6310').controller('HeaderCtrl', function (UserService, $rootRouter) {
    var ctrl = this;

    ctrl.isLoggedIn = function () {
        return UserService.loggedIn;
    };

    ctrl.logOut = function () {
        UserService.loggedIn = false;
        $rootRouter.navigate(['Log In']);
    };
});