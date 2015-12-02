app.controller("navCtrl", ["$scope", "$rootScope", "$log", ($scope, $rootScope, $log) => {
  $scope.loggedIn = false;


  $scope.logout = () => {
    $log.info("logout")
  }
}]);
