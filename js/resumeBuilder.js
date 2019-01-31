/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {"name":"Sangy Hanumasagar",
			"role":"Civil Engineer + Web Developer",
			"contact": {"Email": "sangyh@gatech.edu", 
						"Cell": "+1-512-578-8164",
						"City":"Atlanta,GA",
						"Github":"sangyh",
						"LinkedIn": "https://www.linkedin.com/in/sangy-hanumasagar-43292029/"},
			"picture":"images/me.jpeg",
			"welcome":"Hello! Please reach out to me if I could be pof any help or just to say hi! ",
			"skills": ["front-end programming", "python", "civil engineering design"]};

var education = {
	"schools": [
	{
		"name": "Georgia Institute of Technology",
		"city": "Atlanta, GA, USA",
		"degree": "PhD",
		"major": "Civil Engineering (Geosystems)",
		"dates":2019
	},
	{
		"name": "The University of Texas at Austin",
		"city": "Austin, TX, USA",
		"degree": "MS",
		"major": "Civil Engineering (Geotechnical)",
		"dates":2013
	} ],
	"MOOCs": [
	{"source":"Coursera",
	"course": "Introduction to Machine Learning",
	"instructor_uni":"Stanford University",
	"dates":2017,
	"url":"https://www.coursera.org/learn/machine-learning/home/welcome"
	},
	{"source":"Coursera",
	"course": "HTML,CSS and Javascript for Web Developers",
	"instructor_uni":"Univerity of Michigan",
	"dates":2016,
	"url":"https://www.coursera.org/learn/html-css-javascript-for-web-developers/home/welcome"
	},
	{"source":"Udacity",
	"course": "Introduction to Data Anslysis",
	"instructor_uni":"Udacity",
	"dates":2017,
	"url":"https://classroom.udacity.com/courses/ud170"
	},
	{"source":"Udacity",
	"course": "Javascript Basics",
	"instructor_uni":"Udacity",
			"past":[{}],
	"dates":2017,
	"url":"https://classroom.udacity.com/courses/ud804"}]
};

var work={"jobs":[{"title":"Graduate Student",
			"employer":"Georgia Institute of Technology",
			"location":"Atlanta, GA",
			"dates":"Aug 2015-present",
			"description":"Doctoral Graduate Student in Geosystems Engineering"},
			{"title":"Geotechnical Engineer",
			"employer":"Golder Associates Inc.",
			"location":"Atlanta, GA",
			"dates":"Aug 2013-Aug 2015",
			"description":"Planned and executed field reconnaissance surveys, site characterization,\
							and construction quality assurance visits, accompanied with report writing,\
							technical calculations and engineering design"}]
		};

var projects={01:{"title":"Rutting Simulation",
				"dates":"Dec-2016 - present",
				"description":"Understand pavement behavior"},
			02:{"title":"Reinforcemen of Dredged Material",
				"dates":"Aug-2011 - Aug-2013",
				"description":"Beneficially use waste material like dredged soil with industrial by-products"}
};



//dispaly header name and role
$("#header").append(HTMLheaderName.replace("%data%",bio.name));
$("#header").append(HTMLheaderRole.replace("%data%",bio.role));

//dispaly contact
var displayContact=(function(){
	var formattedCell = HTMLmobile.replace("%data%",bio.contact.Cell);
	var formattedEmail = HTMLemail.replace("%data%",bio.contact.Email);
	var formattedCity = HTMLlocation.replace("%data%",bio.contact.City);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contact.Github);
	var formattedLinkedIn = HTMLblog.replace("%data%",bio.contact.LinkedIn);
	
	$("#topContacts").append(formattedCell);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLinkedIn);
	$("#topContacts").append(formattedCity);
});
displayContact();

//for bio pic and welcome message
$("#header").append(HTMLbioPic.replace("%data%",bio.picture));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcome));


if (bio.skills.length!=0) {
	$("#header").append(HTMLskillsStart);

	bio.skills.forEach (function(skill) {
		var formattedSkill=HTMLskills.replace("%data%",skill);
		$("#skills").append(formattedSkill);

	});
	//HTMLskillsStart.append(HTMLskills);
}

var displayWork=(function(){
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
		var formattedEmployerTitle=formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",job.dates);
		$(".work-entry:last").append(formattedDates);

		var formattedlocation= HTMLworkLocation.replace("%data%",job.location);
		$(".work-entry:last").append(formattedlocation);

		var formattedDescription= HTMLworkDescription.replace("%data%",job.description);
		$(".work-entry:last").append(formattedDescription);

	});
});

displayWork();

$(document).click(function(loc) {
  // your code goes here
  var x=loc.pageX;
  var y=loc.pageY;
  logClicks(x,y);
});