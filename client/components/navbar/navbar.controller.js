'use strict';

angular.module('rockridge')
.controller('NavbarCtrl', function($scope, $state, $location, Auth) {

  $scope.menu = [{
    'title': 'Home',
    'link': 'main',
    'shown': true
  }, {
    'title': 'About',
    'link': 'about',
    'shown': true
  }, {
    'title': 'Dashboard',
    'link': 'dashboard',
    'shown': 'isLoggedIn()'
  }, {
    'title': 'Start Planning',
    'link': 'plan-builder.start',
    'shown': '!isLoggedIn()',
    'abstractLink': 'plan-builder'
  }, {
    'title': 'Rockridge University',
    'class': 'fa fa-graduation-cap',
    'link': 'university.welcome',
    'shown': true,
    'abstractLink': 'university'
  }];

  $scope.user = {};

  $scope.logout = function() {
    Auth.logout();
    $location.path('/');
  };

  $scope.signup = function() {
    $('.ui.modal').modal('hide');
    Auth.createUser()
    .then(function(user){});
  };

  $scope.login = function() {
    $('.ui.modal').modal('hide');
    Auth.login()
    .then(function(user){});
  };

  $scope.isLoggedIn = function() {
    return Auth.isLoggedIn();
  };

  // Sets active class on sidebar.
  $scope.isActive = function(viewLocation) {
    return $state.includes(viewLocation);
  };

  $scope.showModal = function(type) {
    $scope.modalType = type;
    $('.ui.modal').modal('show');
  };

});
