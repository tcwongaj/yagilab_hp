var app = angular.module('myApp', []);

app.controller('jsonList', function($scope, $http) {
  $http.get('members.json').then(function(response) {
    $scope.members = response.data;
  });



});

app.controller('urlCheck', ['$scope', function ($scope) {


  $scope.urlExist = function(url){

     console.log(url);
      if (url == null){
        return false;
      } else {
        return true;
      }
    }

}])
