'use strict';

/* The sideboard view should provide the following functionality:
    - display links to any tutorials that are in progress
    - display links to favorited/bookmarked tutorials
    - determine and display links to recommended tutorials
*/
angular.module('rockridge')
.controller('TutorialsCtrl', function($scope) {
  $scope.filter = 'favorites';
  $('.ui.video').video();
  // TODO: Get relevant tutorial links from the university
});
