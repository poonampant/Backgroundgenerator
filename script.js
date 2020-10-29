/*var listOFAnimal = ["tiger", "cat", "bear", "bird"];
alert(listOFAnimal[0]);*/
/*
var list = ["apple", 3 ,undefined, true,function apple(){
	console.log("apples")
}];
list.shift();
list.pop();
list.push("poonam");
var newlist=list.concat(["hi","ekta","rashika"]);
newlist.sort();*/
var _ =require('loadash');
var array1 =[1,2,3,4,5,6,7,8];
console.log('answer:',_.without(array1,3));
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift();
array.sort();
array.push("kiwi");
array.splice(0,1);
array.reverse();

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
array2[0][1][0];