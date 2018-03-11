//var app = angular.module('miApp', []);
var app = angular.module('miApp', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

app.controller('materialController', function($scope) {

    var material = this;
    
    material.saludo = "Hola!";
    material.flag = false;
    
    material.activeTab=0;
    material.selectAllFlag= false;
    material.selectAllFlagListToWork = false;
    material.listToWork =  [];
    material.list = [
        { text: 'spring', done: true },
        { text: 'java ee', done: false },
        { text: 'git', done: true }
    ];

    material.addTodo = function() {
        material.list.push({ text: material.todoText, done: false });
        material.todoText = '';
        material.active=1;
    };


    material.countSelected = function() {
        var count = 0;
        angular.forEach(material.list, function(todo) {
            count += todo.done ? 1 : 0;
        });
        return count;
    };

    material.elegir = function() {
        var oldlist = material.list;
        material.list = [];
        angular.forEach(oldlist, function(todo) {
            if (!todo.done) 
                material.list.push(todo);
            else  
                material.listToWork.push(todo) ;
        });
        material.activeTab=0
    };

    material.deselegir = function(){
        var oldlist = material.listToWork;
        material.listToWork=[];
        angular.forEach(oldlist,function(todo){
            if (todo.done) {
                material.list.push(todo);
            } else {
                material.listToWork.push(todo);
            }
        });
    }

    material.toggleAllTodo = function(){
        if(material.selectAllFlag){
            angular.forEach( material.list ,function(element){
                element.done = true;
            });
        }
        else{
            angular.forEach( material.list, function(element){
                element.done= false;
            });
        }
        
    }

    material.toggleAllListToWork = function(){
        if(material.selectAllFlagListToWork){
            angular.forEach( material.listToWork , function(element) {
                element.done= true;
            });
        }else{
            angular.forEach( material.listToWork , function(element){
                element.done= false;
            });
        }
    };

    material.toggle = function() {
        material.flag = material.flag === true ? false : true;
    }
});