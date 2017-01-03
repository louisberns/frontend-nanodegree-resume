/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Luís Guilherme Berns Silva");

var awesomeThoughts = "I am awesome!"

console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("awesome", "fun");

console.log(funThoughts);

//$("#main").append(funThoughts);

myName = "Louis";
myRole = "Design Programmer";
myContact = "(44) 9999-0000";
myPic = "images/fry.jpg"
standardWelcomeMessage = "Welcome!";

var formattedName = HTMLheaderName.replace("%data%", myName);
var formattedRole = HTMLheaderRole.replace("%data%", myRole);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

//var skills = ["awesomeness", "computer", "internet"];

var bio = {
	"name" : myName,
	"role" : myRole,
	"contact info" : myContact,
	"picture" : myPic,
	"welcome message" : standardWelcomeMessage
}

//$("#main").append(bio);

bio["work"] = "web dev";
bio.education = "Master";

$("#main").append(bio["work"]);
$("#main").append(bio.education);


var cv = {
	"school" : [
	{
		"graduation" : "Administration",
		"info 2" : "cellphone"
	},
	], [
	{
		"info 3" : "information"
	}
	]
}



