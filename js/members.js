var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
  $scope.item= 'test';
  $http.get('members.json').success(function(data) {
        $scope.members = data;

    });

});
