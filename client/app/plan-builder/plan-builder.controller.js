'use strict';

angular.module('rockridge')
  .controller('PlanBuilderCtrl', function($rootScope, $scope, $location, $state,
    Auth, User) {

    // Define plan object that will be used and accessed by the different planning states.
    // TODO: If plan is partially complete, this should fetch previously entered data from DB.
    $scope.plan = {};
    $scope.selectedSection = 0;
    // keep a memory of what sections are complete and started
    $scope.sections = {
      complete: [],
      enabled: []
    };

    // TODO: Create method to set default values of $scope.plan if not already defined.

    // open up first question in accordion automatically
    var nextStep = function(){
      setTimeout(function(){
        var title = $($('.ui.accordion').find('.title')[0]).attr('data-title');
        if(!$scope.sections.complete[title]){
          $($('.ui.accordion').find('.title')[0]).removeClass('disabled');
          $('.ui.accordion').accordion('open', 0);
          $scope.sections.enabled[title] = true;
        }
      }, 1000);
    };
    nextStep();

    $scope.previous = null;
    $scope.next = null;
    $scope.isCollapsed = true;
    $scope.pctComplete = 40;
    $scope.accordionSection = 0;
    $scope.user = {};
    $scope.signup = function() {
      $('.ui.modal').modal('hide');
      Auth.createUser($scope.user)
      .then(function(user) {
        User.get().$promise
        .then(function(userOb) {
          // stringify plan b/c OrientDB won't allow keys/fields with spaces
          var plan = JSON.stringify($scope.plan);
          Auth.savePlan(userOb['@rid'], plan);
          // Auth.getPlan('#12:662')
          // .then(function(plan) {
          //   console.log(plan);
          // });
        });
      });
    };

    // Defines the order of how pages are displayed to the user.
    var order = [
      'plan-builder.start',
      'plan-builder.basics',
      'plan-builder.nws',
      'plan-builder.tax',
      'plan-builder.msa',
      'plan-builder.risk',
      'plan-builder.retire'
    ];

    // data that controls the semantic-ui steps element
    $scope.steps = [{
        icon: 'fa fa-play icon',
        title: 'start',
        isActive: 'active',
        isComplete: false,
        key: order[0]
      }, {
        icon: 'fa fa-question icon',
        title: 'basic',
        isActive: 'disabled',
        isComplete: false,
        key: order[1]
      }, {
        icon: 'dollar icon',
        title: 'net worth',
        isActive: 'disabled',
        isComplete: false,
        key: order[2]
      }, {
        icon: 'fa fa-university icon',
        title: 'taxes',
        isActive: 'disabled',
        isComplete: false,
        key: order[3]
      },
      //TODO: why does pie char icon not work??
      {
        icon: 'bar chart icon',
        title: 'budget',
        isActive: 'disabled',
        isComplete: false,
        key: order[4]
      }, {
        icon: 'fa fa-exclamation-triangle icon',
        title: 'risk',
        isActive: 'disabled',
        isComplete: false,
        key: order[5]
      }, {
        icon: 'smile icon',
        title: 'retire',
        isActive: 'disabled',
        isComplete: false,
        key: order[6]
      }
    ];

    $scope.navToStep = function(step, fromState) {
      angular.forEach($scope.steps, function(item) {
        if (fromState && fromState.name === item.key) {
          item.isComplete = true;
        }
        if (item.title === step.title || item.key === step.name) {
          item.isActive = 'active';
        } else if (item.isComplete) {
          item.isActive = '';
        } else {
          item.isActive = 'disabled';
        }
      });
    };

    // Sets the title, progress bar, and the 'previous' and 'next' links.
    var updateRelationals = function(focus) {
      $scope.heading = focus.data.title;
      var index = order.indexOf(focus.name);
      // ui-router does not currently support dynamic sref: https://github.com/angular-ui/ui-router/issues/1208
      $scope.previous = order[index - 1] ? order[index - 1] : false;
      $scope.next = order[index + 1] ? order[index + 1] : false;
      // set all previous steps to complete
      angular.forEach($scope.steps, function(item, i) {
        if (i < index) {
          item.isComplete = true;
        }
      });
      $scope.navToStep(focus);
    };
    updateRelationals($state.current);

    // Update page heading and navbar on state change within plan-builder.
    // From docs: https://github.com/angular-ui/ui-router/wiki#wiki-state-change-events
    $scope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams) {
        if (order.indexOf(toState.name) >= 0) {
          updateRelationals(toState);
          $scope.navToStep(toState, fromState);
          nextStep();
        }
      }
    );

    $scope.nextQuestion = function(){
      var sectionComplete = true;

      var len = $('.content.active').length;
      // make sure all required inputs are filled in
      // before moving to the next question
      var inputs = $('.content.active').find('input, select, button');
      inputs.each(function(index){
        if($(this).attr('ng-required') && !$(this).val()){
          $(this).parent().addClass('ui error');
          sectionComplete = false;
        }
      });
      // if all inputs complete, open next question or step
      if(sectionComplete || len === 0){
        //remove all error classes
        $('.content.active').find('.error').each(function(index){
          $(this).removeClass('error');
        });
        var lastQuestion = $('.green.checkmark.icon').length-1;
        // if all questions complete, move to next step
        var title = null;
        if($scope.selectedSection === lastQuestion || len === 0){
          title = $('.title.active').attr('data-title');
          $scope.sections.complete[title] = true;
          $scope.selectedSection = 0;
          $state.go($scope.next);
        } else { // move to next section
          title = $('.title.active').attr('data-title');
          $scope.sections.complete[title] = true;
          $scope.selectedSection++;
          title = $($('.ui.accordion')
              .find('.title')[$scope.selectedSection]).attr('data-title');
          $scope.sections.enabled[title] = true;
          $('.ui.accordion').accordion('open', $scope.selectedSection);
        }
      }
    };

    // prompt user to signup and save
    $scope.showModal = function() {
      $('.ui.modal').modal('show');
    };

    $scope.savePlan = function() {
      Auth.savePlan($scope.plan);
    };
  });
