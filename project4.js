alert("JavaScript works!");

//Desire Revon
//SDI Project 4
//March 22, 2012
//Library 


//1: Does a string follow a 123-456-7890 pattern like a phone number? //Regular Expressions


var confirmNum = function(number){
             var regEx = /^\(?([0-9]{3})?[-. ]([0-9]{3})[-. ]([0-9]{4})$/;
              // ^ tells javascript to identify the string inside of my code 
             // ? tells javascript that the number will have an area code within parenthesis 
             // [0-9] tells js that the number can be any within that range and {3} says thats the amount it can contain
             //[-. ] lets js know that there is a - in between numbers 
             // $ also tells java to search through the script for the string
             
             if (regEx.test(number)){
             
                var confirmValid = ("This number is invalid.");
             	}else{
             	var confirmValid = ("This is a valid number.");
             
             };
             return confirmValid 
             
};


//2:Is the string a URL? (Does is start with http: or https:?)

var checkUrl = function (url){
			var regEx = /^(http[s]:)/
			if (regEx.test(url)){
			
			   var urlValid = ("This is not a valid url.")
			   
			   }else{
			   
			   var urlValid = ("This is a valid url.")
			
			};
  			return urlValid           
};

		
//3:Find the number of hours or days difference between two dates.

var oneDay = 1000*60*60*24; // Hours, Minutes and Milliseconds
var d1 = new Date(2012,01,05); // Dates are from 0-11 in Javascipt. (01 = February)
var d2 = new Date(2012,01,14);

//No built in function to calculate difference in dates so I used getTime.
 var valueDiffDates = Math.abs((d1.getTime() - d2.getTime())/(oneDay));



//4:Given a string version of a number such as "42", return the value as an actual Number, such as 42.


var actualNum = function(){
var onlyNum = parseInt("42")

};
return actualNum
 

 //5:Find the smallest value in an array that is greater than a given number.

Array.prototype.smValueGrtThan = function(anyNum){
var minNum = Number.POSITIVE_INFINITY;

 
 for(i=0; i <this.length; i++) if (anyNum<this[i] && this[i]< minNum) minNum= this[i];
 return minNum

};



//6:Fing the total value of just the numbers in an array that is greater than a given number.

Array.prototype.sumOnlyNum = function(sum){
var sum =0;
for (var i=0; i<this.length; i++) {
  if (!isNaN(parseInt(this[i]))) { sum += this[i]; }
}
return sum;

};



// Console Logs 


console.log(confirmNum("(210)-555-5555"));//#1 Returns number invalid because it doesn't contain information from the Regular Expression.
console.log(checkUrl("facebook.com/"));//#2 Returns invalid because the email does not contain a valid url.
console.log(valueDiffDates);//#3 Returns difference in days 
console.log(parseInt("42"));//#4 OUTPUTS string as number only.

var numArray=[5,12,19,33,42,23,12];
console.log(numArray.smValueGrtThan(6));// #5 Returns the smallest value when you enter a given number.

var comboArray = [10,20,30,40,'w','x','y','z'];
console.log(comboArray.sumOnlyNum());//#6 Gives me the some of only numbers 











