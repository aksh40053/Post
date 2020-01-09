var app = angular.module('service', []);
 
app.factory('service', ['$http', function($http) {
 var route = 'posts';
 return {
 add: function (todoName) {
 var model = {
   TodoName: todoName
 }
   return $http.post(route+'todo', model);
 },
 getAllCompletedTodos: function() {
    return $http.get(route+'todo/completed');
 },
 getActiveTodos: function () {
    return $http.get(route+'todo/active');
 },
 get: function () {
   return $http.get(route+'todo');
 },
 update: function(id, isDone, todoName) {
 var model = {
   TodoName: todoName,
   IsDone: isDone
 }
 return $http.put(route+'todo'+id, model);
 }
 };
}]);

