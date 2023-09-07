//Person
//Create a method in the Person class which returns how another person's age compares. Given the
//instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the
//following format:
//{other person name} is {older than / younger than / the same age as} me.

function Person(name,age){
   this.name = name;
   this.age = age;
  this.stomach = [];
    
    //return this;
 }
 
Person.prototype.compareAge = function (obj){
    if(this.age > obj.age){
        return `${obj.name} is younger than me`;
    } else if(this.age < obj.age){
        return `${obj.name} is older than me`;
    } else{
        return `${obj.name} the same age as me.`;
    }
}



//Person Constructor
//Write a Person Constructor that initializes name and age from arguments.
//All instances of Person should initialize with an empty stomach array.
//Give instances of Person the ability to .eat("someFood"):
//When eating an edible, it should be pushed into the stomach.
//The eat method should have no effect if there are 10 items in the stomach.
//Give instances of Person the ability to .poop():
//When an instance poops, its stomach should empty.
//Give instances of Person a method .toString():
//It should return a string with name and age. Example: "Mary, 50"



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
 