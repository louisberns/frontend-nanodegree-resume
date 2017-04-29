/*Objects*/
var bio = {
	"name" : "Louis Berns",
	"role" : "Web Developer",
	"welcomeMessage" : "I'm passionate for User Experience and how technology can help people to achieve their goals and dreams.",
	"bioPic" : "images/me.jpg",
	"contacts" : [
		{
			"mobile" : "+55 044 9 9972-5926",
			"email" : "louisuntitled@gmail.com",
			"github" : "/louisberns",
			"twitter" : "@louisuntitled",
			"location" : "Maringá-PR, Brazil"
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

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);

		bio.contacts.forEach(function(contact) {
			var formattedMobile = HTMLmobile.replace("%data%", contact.mobile);
			var formattedEmail = HTMLemail.replace("%data%", contact.email);
			var formattedTwitter = HTMLtwitter.replace("%data%", contact.twitter);
			var formattedGitHub = HTMLgithub.replace("%data%", contact.github);
			var formattedLocation = HTMLlocation.replace("%data%", contact.location);
			var displayContacts = formattedMobile + formattedEmail + formattedTwitter + formattedGitHub + formattedLocation;

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
			var formattedURL = HTMLonlineURL.replace("%data%", course.url);
			var displayCourses = formattedTitle + formattedSchool + formattedDates + formattedURL;

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
			"description" : "E-business development focusing on digital marketing results and better User Experience, improving results with client’s interaction and data analysis."
		},
		{
			"employer" : "Unimed Maringá",
			"title" : "Project Assistant",
			"location" : "Maringá-PR",
			"dates" : "MAR/2016 - PRESENT",
			"description" : "Project Manager of Innovation and Technology projects, working with multidisciplinary teams in healthcare sector."
		},
		{
			"employer" : "Unimed Maringá",
			"title" : "Project Internship",
			"location" : "Maringá-PR",
			"dates" : "MAR/2015 - MAR/2016",
			"description" : "Assist the PMO team in projects management, assuming the administrative work in the office, handling documents and controlling acquisitions."
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
			var forTitleEmplo = formattedEmployer + formattedTitle + formattedWorkLocation + formattedWorkDates + formattedWorkDescription;

			$(".work-entry:last").append(forTitleEmplo);
		});
	}
}

var projects = {
	"project" : [
		{
			"title" : "Alphagreen",
			"dates" : "2017",
			"description" : "Fully responsible institucional site for a real estate business, including available real estate deals gallery \n Developed site with stages of validation with the end user and collecting feedbacks for improve User Experience \n Clean code, no frameworks for stylish web design and minimal content making easier user access in any device or connection",
			"images" : ["images/197x148.gif", "images/197x148.gif"]
		},
		{
			"title" : "Oh Yeah",
			"dates" : "2017",
			"description" : "Fully responsible e-commerce with design patterns from Google for a target market \n Developed site with stages of validation with the end user and collecting feedbacks for improve User Experience \n Constant market and results analysis for applying improvements in market strategies",
			"images" : ["images/197x148.gif", "images/197x148.gif"]
		}
	],
	"display" : function() {
		for (var n = 0; projects.project.length > n; n++) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[n].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[n].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[n].description);
			var formattedProjectImages = [];

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

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
$("mapDiv").append(googleMap);

/*$("#header").append(internationalizeButton);

function inName(name) {
	var changeName = [];
	changeName = name.split(" ");
	changeName[0] = changeName[0].slice(0, 1).toUpperCase() + changeName[0].slice(1).toLowerCase();
	changeName[1] = changeName[1].toUpperCase();

	return changeName[0] + " " + changeName[1];
}*/
