angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.myProfile', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/myProfile.html',
        controller: 'myProfileCtrl'
      }
    }
  })

  .state('tabsController.createEvent', {
    url: '/page3',
    views: {
      'tab3': {
        templateUrl: 'templates/createEvent.html',
        controller: 'createEventCtrl'
      }
    }
  })

  .state('tabsController.addPeopleToEvent', {
    url: '/page13',
    views: {
      'tab3': {
        templateUrl: 'templates/addPeopleToEvent.html',
        controller: 'addPeopleToEventCtrl'
      }
    }
  })

  .state('tabsController.events', {
    url: '/page4',
    views: {
      'tab2': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page8',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signUp', {
    url: '/page9',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('tabsController.chat', {
    url: '/page11',
    views: {
      'tab4': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page8')

  

});