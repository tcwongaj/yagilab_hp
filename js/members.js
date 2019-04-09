var app = angular.module('myApp', []);

var n=10;

app.controller('jsonList', function($scope, $http) {
  $http.get('members.json').then(function(response) {
    $scope.members = response.data;
  });
});

app.controller('urlCheck', ['$scope', function ($scope) {
  $scope.urlExist = function(url){
    if (url == null){
      console.log(url);
      console.log("false");
      console.log(n);
      n=n+10;
      return false;
    } else {
      console.log(url);
      console.log("true");
      return true;
      console.log(n);
      n=n+10;
    }
  }


}])
