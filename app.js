( function() {

'use strict'

console.log("DBG: app.js");

angular.module("testApp", ['duParallax'])
.controller("mainCtrl", MainCtrl);

MainCtrl.$inject = ['$scope', 'parallaxHelper'];
function MainCtrl( $scope, parallaxHelper) {
  console.log("DBG: mainCtrl");

  $scope.name = "pesho";

  $scope.background = parallaxHelper.createAnimator(-0.5, 150, -150);

  $scope.invertColors = function(elementPosition) {
    var factor = -0.4;
    var pos = Math.min(Math.max(elementPosition.elemY*factor, 0), 255);
    var bg = 255-pos;
    return {
      backgroundColor: 'rgb(' + bg + ', ' + bg + ', ' + bg + ')',
      color: 'rgb(' + pos + ', ' + pos + ', ' + pos + ')'
    };
  }
}

} )();
