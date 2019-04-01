
 var bio = {"name":"Sangy Hanumasagar",
			"role":" ",
			"contact": {"Email": "sangyh@gatech.edu", 
						"Cell": "+1-512-578-8164",
						"City":"Atlanta,GA",
						"Github":"sangyh",
						"LinkedIn": "https://www.linkedin.com/in/sangyh/"},
			"picture":"images/me.jpg",
			"welcome":"Hello! Thanks for visiting my personal page. I am currently wrapping up my PhD at Georgia Tech,\
			where I applied laboratory and computational techniques to understand the behavior of granular media \
			under cyclic loading. I enjoy Data Science and Machine Learning, and extracting patterns out of data \
			to help drive business decisions. In my free time, I enjoy reading about\
			startups, learning about new technologies and running. I love coffee, chocolates and dogs. <br>",
			"skills":["Programming Languages: Python, SQL, MATLAB, Javascript",
					"Data Visualization: D3, Matplotlib, Paraview, Power BI",
					"Software Suites: AutoCAD, ArcGIS, MS Office"]
		};

var courses=["Algorithm Design", "Numerical Linear Algebra", "Modeling & Simulaiton", "Probability and Statistics", 
			"Computaitonal Data Analysis", "Machine Learning", "Deep Learning", "Intro to Big Data Analysis"]


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
		"name": "Georgia Institute of Technology",
		"city": "Atlanta, GA, USA",
		"degree": "MS",
		"major": "Computational Science and Engineering",
		"dates":2019
	},
	{
		"name": "The University of Texas at Austin",
		"city": "Austin, TX, USA",
		"degree": "MS",
		"major": "Civil Engineering (Geotechnical)",
		"dates":2013
	}]
};

var work={"jobs":[{"title":"Graduate Student",
			"employer":"Georgia Institute of Technology",
			"location":"Atlanta, GA",
			"dates":"Aug 2015-present",
			"description":["Doctoral Graduate Student in Geosystems Engineering"]},
			{"title":"Geotechnical Engineer",
			"employer":"Golder Associates Inc.",
			"location":"Atlanta, GA",
			"dates":"Aug 2013-Aug 2015",
			"description":["Planned and executed field reconnaissance surveys, site characterization,\
							and construction quality assurance visits", "Prepared reports,\
							technical calculations and engineering design"]}]
		};

var projects={"projs":[{"title":"Simulation and quantification of performance of roadway systems using geogrid reinforcements",
				"dates":"Dec-2016 - present",
				"description":["Designed & developed lab-scale traffic simulation equipment for measuring road-specimen \
				performance to repeated traffic loading","Developed numerical simulation studies using python-based \
				particle-simulation framework YADE to model the response of aggregate/soil particles in roads","Developed multi-variate \
							regression model to forecast rutting depths for new road design and loading scenarios \
							using features like layer thicknesses, moisture, material type and operational life"]},
]};



//dispaly header name and role
$("#header").append(HTMLheaderName.replace("%data%",bio.name));
$("#header").append(HTMLheaderRole.replace("%data%",bio.role));

//dispaly contact
var displayContact=(function(){
	var formattedCell = HTMLmobile.replace("%data%",bio.contact.Cell);
	var formattedEmail = HTMLemail.replace("%data%",bio.contact.Email);
	var formattedCity = HTMLlocation.replace("%data%",bio.contact.City);
	var formattedGithub = HTMLgithub.replace("%data%","<a href='https://github.com/sangyh'\
>"+bio.contact.Github+"<\a>");
	var formattedLinkedIn = HTMLblog.replace("%data%","<a href='https://www.linkedin.com/in/sangyh/'\
>" +bio.contact.LinkedIn+"</a>");
	
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
		var formattedSkills=HTMLskills.replace("%data%",skill);
		$("#skills").append(formattedSkills);

	});
	//HTMLskillsStart.append(HTMLskills);
}

if (courses.length!=0) {
	$("#header").append(HTMLcoursesStart);

	courses.forEach (function(course) {
		var formattedCourse=HTMLcourses.replace("%data%",course);
		$("#courses").append(formattedCourse);
	});
	//HTMLskillsStart.append(HTMLskills);
}

var displayProjects=(function(){
	projects.projs.forEach(function(proj) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%","<a href='https://github.com/sangyh/granular_particle_simulation'>"+proj.title+"</a>");
		//$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",proj.dates);
		$(".project-entry:last").append(formattedTitle+formattedDates);

		proj.description.forEach(function(desc){
			var formattedDescription= HTMLprojectDescription.replace("%data%",desc);
			$(".project-entry:last").append(formattedDescription);
		})	

	});
});

displayProjects();


var displayEducation=(function(){
	education.schools.forEach(function(school) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",school.name);

		var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
		$(".education-entry:last").append(formattedName+formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%",school.dates);
		$(".education-entry:last").append(formattedDates);

		var formattedCity = HTMLschoolLocation.replace("%data%",school.city);
		$(".education-entry:last").append(formattedCity);

		var formattedMajor = HTMLschoolMajor.replace("%data%",school.major);
		$(".education-entry:last").append(formattedMajor);

	});
});

displayEducation();

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

		/*var formattedDescription= HTMLworkDescription.replace("%data%",job.description);
		*/
		job.description.forEach (function(desc) {
			var formattedDescription=HTMLworkDescription.replace("%data%",desc);
			$(".work-entry:last").append(formattedDescription);

		});
		

	});
});

displayWork();
$(document).click(function(loc) {
  // your code goes here
  var x=loc.pageX;
  var y=loc.pageY;
  logClicks(x,y);
});