function Person(name,age){
    this.name = name;
    this.age = age;
    this.stomach = [];
    
    //return this;
 }
 
 Person.prototype.eat = function(someFood){
     if(this.stomach.length <= 10){
     return this.stomach.push(someFood);
     }
 }
 Person.prototype.poop = function(){
    
         this.stomach = [];
     
 }
 Person.prototype.toString = function(){
     return `"${this.name},${this.age}"`
 }


 function Baby(name,age,favoriteToy){
    Person.call(this,name,age);
    this.favoriteToy = favoriteToy;
 }
 Baby.prototype = Object.create(Person.prototype);
 Baby.prototype.play = function (){
    return `"Playing with ${this.favoriteToy}"`
 }
