alert("JavaScript works!");

// Desire Revon
// Project 3 1203
// Workout Session


// Global variables

var trainer           = "John Smith"
var trainee           = "Desire Revon"
var trainingMachines  = [{run:"tredmill", 
						 ride:"bicycle", 
						 walk:"elliptical"}
];
var minutesPerMachine = 15;
var gymOpen           = true;
var beginWorkOut      = true; 
var getOnMachine      = true;
var machineType       = "tredmill";
var total             = 15;

//Object with properties.
var dumbells = { 

	    color:"pink",
 weightPounds: 5,
     quantity: 2, 
        heavy: false,
        
        
        
        }
        
//json data  
var json= {

	"traineeFriends" : {
	       "0001"     : {
	        "name": "David",
	        "age" : 31
	},
	
	"0002"     : {
	   "name" : "Quintin",
	    "age" : 30
	
	},
	
	"0003"     : { 
	   "name" : "Abby",
	    "age" : 31
	    
	} 
	    
	 }
};

	    
	    for (var key in json.traineeFriends){
	    var traineeFriends = json.traineeFriends[key];
	    //friend.name
	    var handledata = function (json){
	    
	    console.log(json);
	    
	    };
};


//Procedure
//Workout Session with Personal Trainer and friends.

function startExcercise(beginWorkout){

if(beginWorkout === true){
getOnMachine == meetTrainer('John', 'Smith');
console.log(getOnMachine); 
isTheGymOpen(true,true);
totalMachines(4)
       
//Procedure Function      
}else{
getOnMachine == meetTrainer('John', 'Smith');
console.log(getOnMachine); 
isGymOpen(false,true);
totalMachines(4);
console.log(!getOnMachine);
}

}


//Boolean function
// I hope the gym is open! 

function isTheGymOpen(lightsOn, signSaysOpen){

if (lightsOn == true && signSaysOpen == true){

if (lightsOn == false && signSaysOpen ==true){

console.log("The sign says open, but the lights are off maybe I should try the door.");
console.log("Yey! The gym is open! I need to show my id, find my friends and find my trainer.");
};
}else{
console.log("I need to contact my trainer and find another gym!");
return false;
}

};


//String Function
// Meet Trainer.

function meetTrainer (id, name ){
var trainerInfo;
trainerInfo == id + "" + name;
return trainerInfo;

};
//Methods
var trainer = {
	    name: "John Smith",
	    age : 28,
	      id: 1243,
   interests: [
   			"body building",
   			"wrestling",
   			"running"],
   			sayNiceToMeetYouDesire: function (){
   			console.log("Nice to meet you Desire!");
   			
   			
   			
   	        }
};

var key = "name"

//Array Function 
// Start on a machine. 

function chooseMachine(machineNumber, machineType){
var i = 0;
console.log("Mr. Smith, which machine should I began working on?");
for( i = 0; i < machineType.length; i++){
for( i = 0; i < 2; i++);{
}

return chooseMachine;
//Mutator
var chooseAction = ['machineAction','machine'];
var i = 1;
for( i = 1; i <machineUser.length; i++){
machineUser.push.apply(machineUser,newArray);

};

}
console.log(machine[i]);


}


//Number function
// Time to put my legs work!

function totalMachines(minutesPerMachine){

var machines = 4;
while(minutesPerMachine == 15){
total === machines * minutesPerMachine;
console.log("Work out time is $" + total);
minutesPerMachine++;
return total;
}

};

console.log("The sign says open, but the lights are off maybe I should try the door.");
console.log("Yey! The gym is open! I need to show my id, find my friends and find my trainer.");
console.log(json);
trainer.sayNiceToMeetYouDesire();//Accessor
console.log(trainer["name"]);
console.log("Mr. Smith, which machine should I began working on?");
console.log(trainingMachines);
console.log(machineType);
console.log(total + " minutes ");




 





startExcercise(true)











  
