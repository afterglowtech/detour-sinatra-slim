define(['app'], function (app) {
  app.detour.registerController([
    'contactsController',
    [        '$scope', '$detour',
    function ($scope,   $detour) {
      $scope.contacts = [{
        id: 1,
        name: 'Alice',
        items: [{
          id: 'a',
          type: 'phone number',
          value: '555-1234-1234'
        },{
          id: 'b',
          type: 'email',
          value: 'alice@mailinator.com'
        }]
      }, {
        id: 42,
        name: 'Bob',
        items: [{
          id: 'a',
          type: 'blog',
          value: 'http://bob.blogger.com'
        },{
          id: 'b',
          type: 'fax',
          value: '555-999-9999'
        }]
      }, {
        id: 123,
        name: 'Eve',
        items: [{
          id: 'a',
          type: 'full name',
          value: 'Eve Adamsdottir'
        }]
      }];

      $scope.goToRandom = function () {
        /*jshint eqeqeq:false */
        var contacts = $scope.contacts, id;
        do {
          id = contacts[Math.floor(contacts.length * Math.random())].id;
        } while (id == $detour.params.contactId);
        $detour.transitionTo('contacts.detail', { contactId: id });
      };
    }]
  ]);
});
