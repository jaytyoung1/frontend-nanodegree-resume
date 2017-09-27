/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
var email = "jaytyoung1@udacity.com";
var newEmail = email.replace("udacity", "gmail");

console.log(email);
console.log(newEmail);

var awesomeThoughts = "I am Jay and I am AWESOME!";

var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");

$("#main").append(funThoughts);
*/

var bio = {
	"name": "Jay Young",
	"role": "Python Developer",
	"contact": {
		"mobile": "610-984-2470",
		"email": "jaytyoung1@gmail.com",
		"github": "jaytyoung1",
		"twitter": "j_yo5",
		"location": "Pen Argyl, PA"
	},
	"welcomeMessage": "",
	"skills": ["Python programming", "Web scraping", "PostgreSQL", "HTML", "CSS", "JavaScript"],
	"bioPic": "images/headshot.png"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
