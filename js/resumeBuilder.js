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

var education = {
	"schools": [
		{
			"name": "East Stroudsburg University",
			"location": "East Stroudsburg, PA",
			"degree": "BS",
			"majors": ["Computer Science"],
			"dates": 2017,
			"url": "http://www.esu.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2017,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "RotoGrinders.com",
			"title": "Python Developer",
			"dates": 2017,
			"description": "Worked as a python programmer, developed auditing, data scraping, and Twitter automation programs."
		},
		{
			"employer": "FD Software Enterprises",
			"title": "Junior Programmer",
			"dates": 2016,
			"description": "Contributed to the Android application development tasks such as UI development, testing, and coding."
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "DFS-Twitter-Alerts",
			"dates": 2017,
			"description": "This project uses the Python library, Tweepy, to capture a live stream of tweets from members of one of RotoGrinders Twitter lists and automatically send the tweet and metadata as a message in a private Slack channel",
			"images": [
				"http://diysolarpanelsv.com/images/twitter-logo-clipart-free-20.jpg"
			]
		},
		{
			"title": "FanDuel Contests",
			"dates": 2017,
			"description": "This project uses the FanDuel API to collect metadata for finished FanDuel contests specified by the user. It retrieves the data, organizes it into a JSON format, then uploads the .json file to an Amazon Web Services S3 bucket.",
			"images": [
				"http://www.underconsideration.com/brandnew/archives/fanduel_monogram_detail.png"
			]
		}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
