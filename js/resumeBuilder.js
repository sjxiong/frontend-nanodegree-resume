/*
This is empty on purpose! Your code to build the resume will go here.
 */


//var awesomeThoughts = "I am Sophia and I am AWESOME!";
//var funthoughts = awesomeThoughts.replace('AWESOME','fun');
//$("#main").append(funthoughts);
//console.log(awesomeThoughts);

var work = {
"jobs":[
    {
        "employer":"employer1",
        "title":"title1",
        "location":"location1",
        "dates":"1999 to 2002",
        "description":"this is the description of my work experience from work 1, letś try !"
    },
    {
        "employer":"employer2",
        "title":"title2",
        "location":"location2",
        "dates":"2002 till now",
        "description":"Now im going to show the the work experience from my work2, letś try!"
    }
        ]
};

/*for(job in work.jobs){

    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    //$("#workExperience").append(formattedEmployer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);
};*/

function DisplayWork(){

    for(job in work.jobs){

    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    $(".work-entry:last").append(formattedEmployer+formattedTitle);

    var formattedLocation = HTMLlocation.replace("%data%",work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

    };

};

DisplayWork();

$(document).click(function(eventObject) {
  // your code goes here!

  console.log( "x location: " + eventObject.pageX + ", y location: " + eventObject.pageY );

});




var projects = {
    "projects":[
        {
        "title":"title1",
        "date":"date1",
        "description":"description1",
        "images":["URL1","URL2","URL3"]
        },
        {
        "title":"title2",
        "date":"date2",
        "description":"description2",
        "images":["URL1","URL2","URL3"]
        }

                ]
};

var bio = {
    "name":"sophia xiong",
    "role":"web Developer",
    "welcomeMessage":"I'm Sophia",
    "biopic":"images/fry.jpg",
    "contacts":{
        "mobile":18675510082,
        "email":"sjxiong@gmail.com",
        "github":"sjxiong",
        "twitter":"@sjxiong",
        "location":"soest"
    },
    "skills":["Jason","CSS","javascript","dutch"]
};


var formattedname = HTMLheaderName.replace('%data%',bio.name);
var formattedrole = HTMLheaderRole.replace('%data%',bio.role);

var formattedfoto = HTMLbioPic.replace('%data%',bio.biopic);
//console.log(formattedname);
$("#header").append(formattedname,formattedrole,formattedfoto);


$("#main").append(internationalizeButton);

function inName(_name){

    var intName = _name;
    intName = _name.split(" ");
    intName[1] = intName[1].toUpperCase;
    intName[0] = intName[0].slice(0,1).toUpperCase() + intName[0].slice(1).toLowerCase();

    return intName;
};

$("#main").append(inName(bio.name));


if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);

    for(i in bio.skills){
    var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
    $("#skills").append(formattedSkills);
    };

};



var education = {
    "school":[
        {
        "name":"school1",
        "location":"location1",
        "DegreeDate" : 1999,
        "URL":"www.school1.com",
        "majors":["major1","major2","major3"]
        },
        {
        "name":"school2",
        "location":"location2",
        "DegreeDate" : 2002,
        "URL":"www.school2.com",
        "majors":["major1","major2","major3"]
        }
    ],

    "education":[
        {
        "onlineCoursesTitle":"course1",
        "school":"school1",
        "date":"date1",
        "URL":"www.course1.com"
        },
        {
        "onlineCoursesTitle":"course2",
        "school":"school2",
        "date":"date2",
        "URL":"www.course2.com"}
    ]
};

