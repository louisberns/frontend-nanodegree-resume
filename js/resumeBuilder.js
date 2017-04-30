/*Objects*/
var bio = {
	"name" : "Luis Guilherme Berns Silva",
	"role" : "UX Designer",
	"welcomeMessage" : "I'm passionate for User Experience and how technology can help people to achieve their goals and dreams.",
	"bioPic" : "images/me.jpg",
	"contacts" : [
		{
			"mobile" : "+55 044 9 9972-5926",
			"email" : "louisuntitled@gmail.com",
			"github" : "/louisberns",
			"linkedin" : "/in/louisberns",
			"location" : "Maringá-PR - Brazil"
		}
	],
	"contactsURL" : [
		{
			"emailURL" : "louisuntitled@gmail.com",
			"githubURL" : "https://github.com/louisberns",
			"linkedinURL" : "http://www.linkedin.com/in/louisberns"
		}
	],
	"skills" : [ "HTML/CSS", "Javascript/jQuery", "Project Management", "SCRUM", "Inkscape" ],
	"display" : function () {
		var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedPic);

		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcome);

		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);

		var formattedName = HTMLheaderName.replace("%data%", bio.name.toUpperCase());
		$("#header").prepend(formattedName);

		bio.contacts.forEach(function(contact) {
			/*var formattedMobile = HTMLmobile.replace("%data%", contact.mobile);*/
			var formattedEmail = HTMLemail.replace("%data%", contact.email);
			var formattedlinkedin = HTMLlinkedin.replace("%data%", contact.linkedin);
			var formattedGitHub = HTMLgithub.replace("%data%", contact.github);
			var formattedLocation = HTMLlocation.replace("%data%", contact.location);
			var displayContacts = formattedEmail + formattedlinkedin + formattedGitHub + formattedLocation;

			$("#topContacts").append(displayContacts);
		});
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			bio.skills.forEach(function(n){
				var skill = n;
				var formattedSkills = HTMLskills.replace("%data%", skill);
				$("#skills").append(formattedSkills);
			});
		}

		for (var x = 0; bio.contactsURL.length > x; x++) {
			switch (bio.contactsURL[x]) {
				case bio.contactsURL[0]:
					var formattedURL = bio.contactsURL[x];
					$(".contact-url").attr("href", formattedURL);
					break;
				case bio.contactsURL[1]:
					var formattedURL = bio.contactsURL[x];
					$(".contact-url").attr("href", formattedURL);
					break;
				case bio.contactsURL[2]:
					var formattedURL = bio.contactsURL[x];
					$(".contact-url").attr("href", formattedURL);
					break;
			}
		}
	}
}

var education = {
	"schools" : [
		{
			"name" : "Unicesumar",
			"location" : "Maringá-PR, Brazil",
			"degree" : "BS",
			"majors" : ["Administration"],
			"dates" : "2013 to 2017",
			"url" : "some-url"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Git Hub",
			"school" : "Udacity",
			"dates" : "2017",
			"url" : "some-url"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "2017",
			"url" : "some-url"
		},
		{
			"title" : "Programming Logic",
			"school" : "Soft Blue",
			"dates" : "2013",
			"url" : "some-url"
		},
		{
			"title" : "HTML & CSS",
			"school" : "Codecademy",
			"dates" : "2013",
			"url" : "some-url"
		}
	],
	"display" : function() {
		$("#education").append(HTMLschoolStart);

		education.schools.forEach(function(school) {
			var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
			var displaySchool = formattedSchoolName + formattedSchoolLocation + formattedSchoolDegree + formattedSchoolMajor + formattedSchoolDates;

			$(".education-entry:last").append(displaySchool);
		});

		education.onlineCourses.forEach(function(course) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
			var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
			/*var formattedURL = HTMLonlineURL.replace("%data%", course.url);*/
			var displayCourses = formattedTitle + formattedSchool + formattedDates;

			$(".education-entry:last").append(displayCourses);
		});

	}
}

var work = {
	"jobs" : [
		{
			"employer" : "Smart Sprint",
			"title" : "Web Developer",
			"location" : "Maringá-PR",
			"dates" : "JAN/2017 - PRESENT",
			"description" : "E-business development focusing on digital marketing results and better User Experience, improving results with client’s interaction and data analysis.",
			"bulletPoints" : [
				"Web development using agile method and learning with the final client in beta process.",
				"Applied Material Design from Google in web development projects.",
				"Analyse results and user data to improve SEO and User Experience (UX)."
			]
		},
		{
			"employer" : "Unimed Maringá",
			"title" : "Project Assistant",
			"location" : "Maringá-PR",
			"dates" : "MAR/2016 - PRESENT",
			"description" : "Project Manager of Innovation and Technology projects, working with multidisciplinary teams in healthcare sector.",
			"bulletPoints" : [
				"Project manager of 1st hackathon produced by this cooperative health insurance in Brazil.",
				"Manage series of projects focused on information technology in the healthcare system.",
				"Include learning process between the development of project management methodology used by PMO."
			]
		},
		{
			"employer" : "Unimed Maringá",
			"title" : "Project Internship",
			"location" : "Maringá-PR",
			"dates" : "MAR/2015 - MAR/2016",
			"description" : "Assist the PMO team in projects management, assuming the administrative work in the office, handling documents and controlling acquisitions.",
			"bulletPoints" : [
				"Improved project management methodology and created material for others professionals learn easily how to do it.",
				"Assist on project management and keeping follow-ups managing projects documents and acquisitions.",
				"Search and study knew tools and technologies to create or increment projects in health sector."
			]
		}
	],
	"display" : function () {
		$("#workExperience").append(HTMLworkStart);

		work.jobs.forEach(function(job){
			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
			var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
			var forTitleEmplo = formattedEmployer + formattedTitle + formattedWorkLocation + formattedWorkDates + formattedWorkDescription + HTMLworkOrderedTitle;

			$(".work-entry:last").append(forTitleEmplo);
			for (x = 0; job.bulletPoints.length > x; x++) {
					var formattedBulletPoints = HTMLworkBulletPoints.replace("%data%", job.bulletPoints[x]);
					$(".work-list:last").append(formattedBulletPoints);
			}
		});
	}
}

var projects = {
	"project" : [
		{
			"title" : "Alphagreen",
			"dates" : "2017",
			"description" : "Fully responsible institucional site for a real estate business, including available real estate deals gallery \n Developed site with stages of validation with the end user and collecting feedbacks for improve User Experience \n Clean code, no frameworks for stylish web design and minimal content making easier user access in any device or connection",
			"bulletPoints" : [
				"Fully responsible institucional site for a real estate business, including available real estate deals gallery.",
				"Developed site with stages of validation with the end user and collecting feedbacks for improve User Experience.",
				"Clean code, no frameworks for stylish web design and minimal content making easier user access in any device or connection."
			],
			"url" : "http://www.negociosalphagreen.com.br/",
			"images" : ["images/197x148.gif", "images/197x148.gif"]
		},
		{
			"title" : "Oh Yeah",
			"dates" : "2017",
			"description" : "Fully responsible e-commerce with design patterns from Google for a target market \n Developed site with stages of validation with the end user and collecting feedbacks for improve User Experience \n Constant market and results analysis for applying improvements in market strategies",
			"bulletPoints" : [
				"Fully responsible e-commerce with design patterns from Google for a target market.",
				"Developed site with stages of validation with the end user and collecting feedbacks for improve User Experience.",
				"Constant market and results analysis for applying improvements in market strategies."
			],
			"url" : "http://www.ohyeahshop.com.br/",
			"images" : ["images/197x148.gif", "images/197x148.gif"]
		}
	],
	"display" : function() {
		for (var n = 0; projects.project.length > n; n++) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[n].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[n].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[n].description);
			var formattedProjectURL = HTMLprojectURL.replace("%data%", projects.project[n].url);
			var formattedProjectImages = [];
			var formattedProjectBullets = [];

			var projectDisplay = formattedProjectTitle + formattedProjectDates + formattedProjectDescription + 	HTMLprojectOrdered;
			$(".project-entry:last").append(projectDisplay);

			for (var x = 0; projects.project[n].bulletPoints.length > x; x++) {
				formattedProjectBullets = HTMLprojectBullets.replace("%data%", projects.project[n].bulletPoints[x]);
				$(".project-bullet-list:last").append(formattedProjectBullets);
			}

			$(".project-entry:last").append(formattedProjectURL);

			for (var c = 0; projects.project[n].images.length > c; c++) {
				formattedProjectImages = HTMLprojectImage.replace("%data%", projects.project[n].images[c]);
				$(".project-entry:last").append(formattedProjectImages);
			}
		}
	}
}


/*Insert content*/

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

/*$("#header").append(internationalizeButton);

function inName(name) {
	var changeName = [];
	changeName = name.split(" ");
	changeName[0] = changeName[0].slice(0, 1).toUpperCase() + changeName[0].slice(1).toLowerCase();
	changeName[1] = changeName[1].toUpperCase();

	return changeName[0] + " " + changeName[1];
}*/
