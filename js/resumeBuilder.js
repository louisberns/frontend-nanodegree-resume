

/*Objects*/
var bio = {
	"name" : "Luís Guilherme Berns Silva",
	"role" : "Web Developer",
	"welcomeMessage" : "Hello, ....",
	"bioPic" : "images/fry.jpg",
	"contacts" : [
		{
			"mobile" : "+55 044 9-9972-5926",
			"email" : "louisuntitled@gmail.com",
			"github" : "louisberns",
			"twitter" : "@louisuntitled",
			"location" : "Brazil"
		}
	],
	"skills" : [ "web development", "project management", "startup foundation" ]
}

var education = {
	"schools" : [
		{
			"name" : "High School",
			"location" : "Gastão Vidigal",
			"degree dates" : "2011 to 2012",
			"url" : "some-url"
		},
		{
			"name" : "Junior School",
			"location" : "Regina Mundi",
			"degree dates" : "2010",
			"url" : "some-url"
		}
	],
	"majors" : [
		{
			"name" : "Administration",
			"location" : "Unicesumar",
			"degree dates" : "2013 to 2017",
			"url" : "some-url"
		}
	],
	"onlineCourses" : [
		{
			"title" : "programming logic",
			"school" : "Soft Blue",
			"dates" : "2010",
			"url" : "some-url"
		},
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
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Silberseg",
			"title" : "associated",
			"location" : "Maringá-PR",
			"dates" : "2011 to 2015",
			"description" : "IT infrastructure and projects for improve proeficiency, and administrative work in the office"
		},
		{
			"employer" : "Unimed Maringá",
			"title" : "PMO internship",
			"location" : "Maringá-PR",
			"dates" : "2015",
			"description" : "Assist the PMO team in projects management, assuming the administrative work in the office, handling documents and controlling"
		},
		{
			"employer" : "Unimed Maringá",
			"title" : "Project Assistant PMO",
			"location" : "Maringá-PR",
			"dates" : "2016 to 2017",
			"description" : "Management of IT projects in the office and development of innovation projects, such as the first Hackathon of Unimed's cooperative"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Hackathon Unimed",
			"dates" : "August, 27 to 28 of 2016",
			"description" : "The first hackathon in the Unimed's cooperative in Brazil, with 130 people forming more than 22 teams. The top three projects was awarded with 5.000 reais each",
			"images" : ["url1", "url2"] 
		},
		{
			"title" : "Project Management Simplified",
			"dates" : "2015",
			"description" : "We created a simplified method for project management in order to engage the whole company with the PMO role there, going thowards PMO maturity",
			"images" : ["url1", "url2"]
		}
	]
}

/*Insert content*/
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);

var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcome);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[0].mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts[0].email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[0].twitter);
$("#topContacts").append(formattedTwitter);

var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts[0].github);
$("#topContacts").append(formattedGitHub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[0].location);
$("#topContacts").append(formattedLocation);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);

} else {}

/*for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var forTitleEmplo = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(forTitleEmplo);

}*/

/*work.jobs.forEach(job) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var forTitleEmplo = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(forTitleEmplo);
}*/

/*$("#workExperience").append(HTMLworkStart);

work.jobs.forEach(function(job){
	var employer = job.employer;
	var title = job.title;

	var formattedEmployer = HTMLworkEmployer.replace("%data%", employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", title);
	var forTitleEmplo = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(forTitleEmplo);
	//return forTitleEmplo;
});*/

function displayWork() {
	$("#workExperience").append(HTMLworkStart);

	work.jobs.forEach(function(job){
		var employer = job.employer;
		var title = job.title;

		var formattedEmployer = HTMLworkEmployer.replace("%data%", employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", title);
		var forTitleEmplo = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(forTitleEmplo);
	});
}

displayWork();