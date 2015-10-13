angular.module('player1Ctrl', [])
.controller('player1Controller', function ($scope) {
  //data for the doctrine should be pulled in via a factory

  var vm = this;
  vm.stopTimer = function (){
    $scope.$broadcast('timer-stop');
    $scope.timerRunning = false;
  };
});
