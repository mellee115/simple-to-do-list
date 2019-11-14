let app = angular.module('todoApp', []);


function TodoCtrl($http,$scope) {

  this.http = $http;


  this.selected =true;
  this.todos = [
    {text: 'learn AngularJS', done: false},
    {text: 'send a message to Grace', done: false},
    {text: 'buy some marble cheese', done: true}
  ];
  
  this.filters = [
    {label: 'All', showTodo: function(todo) {return true;}},
    {label: 'Active', showTodo: function(todo) {return !todo.done;}},
    {label: 'Complete', showTodo: function(todo) {return todo.done;}}
  ]
}

TodoCtrl.prototype.addToDo = function(todo){
    let todo_object = {text:todo,done:false};
    this.todos.push(todo_object);
}


TodoCtrl.prototype.clearComplete = function(){

    for(let i = this.todos.length - 1;i >= 0;i--){
      if(this.todos[i].done){
        this.todos.splice(i,1);
      }
    }
}

app.controller('TodoCtrl', TodoCtrl);
