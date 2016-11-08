var myApp=angular.module('myApp', []);
myApp.filter("fil",function()
{
return function(name)
{
  // console.log(name);
if(name =="prerna")
{
  return "kukreti";
}
else
{
  return "no";
}
}
});

myApp.controller("namesCtrl", function($scope){
  var employee=
    [{name:"prerna" ,age:22},{name:"ruchika",age:22}];
  $scope.employee=employee;

  });
