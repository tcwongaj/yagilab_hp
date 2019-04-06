var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
  $scope.item= 'test';
  $http.get('http://www.io.mei.titech.ac.jp/members.json').success(function(data) {
        $scope.members = data;

    });

});
