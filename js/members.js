var app = angular.module('myApp', []);

app.controller('jsonList', function($scope, $http) {
  $http.get('members.json').then(function(response) {
    $scope.members = response.data;
  });
});
