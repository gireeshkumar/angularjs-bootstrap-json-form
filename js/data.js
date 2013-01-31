	function buildQs(name, grps){
		
		var groups = [];
		$.each(grps, function(idx, val){
			groups.push(questions(val));
		});

		return {
			name:name,
			groups:groups
		}
	}
	function questions(arr){
		return {questions:arr};
	}

function qs(label, name, help, type){
	 return {label:label, name:name, help:help, type:type};
}







// Data





var projDetails = {
			name:"Project Details",
			groups:[

			           	   {questions:[
				           	   {label:"Project Name", name:"name"
				        	   		,help:"", placeholder:"Project Name"},

				        	   {label:"Technologies", name:"technologies"
				        		   ,help:"Select the technologies or add more if required.", placeholder:"Technologies"
				        			   ,options:["Java","PHP","Python",".Net"]
				        	   },

				        	   {label:"Sever Frameworks",name:"srvframeworks"
				        		   ,help:"Select the Frameworks or add more if required.", placeholder:"Server side Frameworks"
				        			   ,options:["Spring","Coco","Jersy"]
				        	   },
				        	   {label:"Database / Storage",name:"dbstorage"
				        		   ,help:"Database layer", placeholder:"RDBMS / NoSQL etc"
				        			   ,options:["MySql","Oracle","MongoDB","None"]
				        	   }
			        	   ]},

			        	   {questions:[
			        	   		{label:"Application Domain",name:"appdomain"
				        		   ,help:"Application Domain / Category"
				        			   ,options:["Healthcare","Banking"]
				        	   },
				        	   {label:"UI Frameworks",name:"uiframeworks"
				        		   ,help:"Select the Frameworks or add more if required.", placeholder:"UI Frameworks"
				        			   ,options:["JQuery","Angularjs","Backbone"]
				        	   },

				        	   {label:"Customization of existing Frameworks",name:"customfrks", type:"textarea"
				        		   ,help:"Did any of your opensource or commercial Frameworks are customized to suite the project requirements", placeholder:""
				        	   }
								,{label:"Custom internal tools",name:"cutinttools", type:"textarea"
				        		   ,help:"Did we develop / customize any tools for internal development purpose, e.g. Creating an eclipse plugin", placeholder:""
				        	   }
			        	   ]}
			        	]
	};

var projSize =buildQs("Project size",[
							[
	            				{label:"LOC (approx)",name:"loc"
					        	   ,help:"Approximate total line of code"
					           },
					           {label:"Number of Interfaces",name:"numModules"
					        	   ,help:"Number of Interfaces or Services exposed"
					           }
				           ],

				           [
            					{label:"Number of Modules",name:"numModules"
					        	   ,help:"Number of different Modules / layers"
					           },
					           {label:"Number of Function Points",name:"numFP"
					        	   ,help:"Number of functional Points"
					           },
					           {label:"Estimated Effort",name:"effort"
					        	   ,help:"Estimated effort in man hours"
					           },
					           {label:"Current Build",name:"buildEffort"
					        	   ,help:"Total man hours used till now"
					           }
					        ]	
				]);
	var projOthers=buildQs("Project Others..",[
					[
						{label:"Productivity Savings",name:"prodSav"
					        	   ,help:"Any productivity savings ?"
					     },
					     {label:"Custom Frameworks",name:"custFrms"
					        	   ,help:"Did we make any custom Frameworks"
					           },
					    {label:"COE Involment",name:"coeIn"
					        	   ,help:"Involment from Center of Excellence Team"
					           },
					    {label:"Knowledge Transfer Details",name:"ktDetails"
					        	   ,help:"Details about KT done by client / previous vendor"
					           },
					    {label:"Client university / Knowledge Management System",name:"kmSystem"
					        	   ,help:"Availability of Client university or Knowledge management System"
					           },
					    {label:"Internal Project best practices",name:"intProjBPractice"
					        	   ,help:"Details about the best practices followed by the project"
					           },
					    {label:"Technical Challenges",name:"techChallenge",type:"textarea"
					        	   ,help:"Summary about the technical challenges faced in the development/execution of the project"
					           }
					]
		    ]);


var devEnv =buildQs("Development Environment",[
							[
	            				{label:"IDE",name:"idelist"
					        	   ,help:"IDE / Editors"
					        		   ,options:["Eclipse","Visual Studio"]
					           },
					           {label:"Build Tools",name:"buildTools"
					        	   ,help:"Build Scripts"
					        		   ,options:["Hudson","Ant","Maven"]
					           },
					           {label:"Version Controls",name:"versionCntrls"
					        	   ,help:"Version Controls"
					        		   ,options:["Git","SVN","CVS"]
					           },
					           {label:"Deploy Tools",name:"deployTools"
					        	   ,help:"Tools used for application deployment"
					        		   ,options:["OpenDeploy","Hudson"]
					           }
				           ],

				           [
            					{label:"Testing tools",name:"testingTools"
					        	   ,help:"Tools used for testing, Unit, Functional, Web, Performance, DB etc"
					        		   ,options:["QTP","Selenium","JUnit","PHPUnit","JMeter","Rational robot","SilkTest","Watir"
					        		   				,"Rational Functional Tester"]
					           },
					           {label:"Test Management Tools",name:"testmgttools"
					        	   ,help:"Tools used for test management"
					        		   ,options:["HP Quality Center","Rational Quality Manager","Team Foundation Server"]
					           }
					           ,
								{label:"Ticket / Bug Tracking tools",name:"otherTools"
					        	   ,help:"Bug / Ticket tracking tools"
					        		   ,options:["Bugzilla","JIRA","TRAC"]
					           },
					           {label:"Designing / Modeling Tools",name:"designTools"
					        	   ,help:"Tools used for design / modeling"
					        		   ,options:["ArgoUML","Dia","Visio","Rational Software Architect","Visual Paradigm for UML"]
					           },
					           {label:"Other tools",name:"otherTools"
					        	   ,help:"Other tools used in development environment"
					        		   ,options:["FindBugs","PMD"]
					           }
					        ]	
				]);


var team =buildQs("Team",[
							[
	            				
					           {label:"# of Developers [Full time]",name:"devsize"
					        	   ,help:"Total number of developers involved", type:"number"
					           },
					            {label:"# of Developers [Part time]",name:"devsizep"
					        	   ,help:"Total number of developers involved", type:"number"
					           },
					           {label:"QA Team",name:"qasize"
					        	   ,help:"QA Team size", type:"number"
					           },
					           {label:"Project Managers",name:"pmsize"
					        	   ,help:"Management", type:"number"
					           }
				           ],

				           [
            					{label:"Architects",name:"arcsize"
					        	   ,help:"Architects (DB / System etc)", type:"number"
					           },
								{label:"Documentation",name:"docszie"
					        	   ,help:"Technical Documentation / Help", type:"number"
					           },
					           {label:"Team Roles",name:"teamRoles"
					        	   ,help:"Different types of Roles / Designations in the team [ref: ACE Framework]"
					        	   ,options:["Solutions Architect","System Analyst","Software Developer",
					        	   			"Tester","Test Analyst","Test Architect"]
					           },
					           {label:"Others",name:"othersize"
					        	   ,help:"Others involved directly with the project", type:"number"
					           }
					        ]

				    ]);



var projContact =buildQs("Contact Details",[
							[
	            				
					           {label:"Your Name",name:"uid"
					        	   ,help:"Your full Name / UID", type:"text"
					           },
					            {label:"Your Email Address",name:"email"
					        	   ,help:"Contact Email Address", type:"email"
					           }					           
				           ],
				           [
				           	{label:"Additional Comments",name:"addcomments"
					        	   ,help:"Additional Comments about the project", type:"textarea"
					           }
				           ]
				    ]);

var nonfn =buildQs("Non-Functional Req",[
					[
						qs("Response Time [ms]",'rsptime', "Response time in millisecond","number")
					]
		    ]);



	var dep =buildQs("Deployment Environment",[
					[
						{label:"Database",name:"dblist"
					        	   ,help:"Database, Storage"
					        		   ,options:["Oracle","MySql","MongoDB"]
					     },
					     {label:"Server",name:"serverlist"
					        	   ,help:"Server environment"
					        		   ,options:["Tomcat","Weblogic","Websphere","IIS"]
					           },
					    {label:"Deployment",name:"targetDeploy"
					        	   ,help:"Deployment architecture"
					        		   ,options:["Desktop","Mobile","Web","Native Apps"]
					           },
					    {label:"Supported OS",name:"oslist"
					        	   ,help:"Supported OS"
					        		   ,options:["Windows","Linux","iOS","Android"]
					           },
					    {label:"Supported Browsers",name:"brlist"
					        	   ,help:"Supported Browser Environment"
					        		   ,options:["None","Safari","Firefox","Chrome"]
					           }
					]
		    ]);

var optvals = [ "Type IV   (Routine project): low technical and business complexity"
					        		   			 ,"Type III: Low technical complexity but high business complexity"
					        		   			 ,"Type II:  High technical complexity but low business complexity"
					        		   			 ,"Type I    (Complex Project): high technical and business complexity"
					        		   			];

	var mgmcplx =buildQs("Management Complexity",[
					[
						{label:"Types",name:"mgmcomplx",type:"singleselection1"
					        	   ,help:"Management complexity level"
					        		   ,options:optvals,
					        		   	blockHelp: "<br/><b>Type IV</b>   (Routine project): low technical and business complexity"
					        		   				+"<br/><b>Type III</b>: Low technical complexity but high business complexity"
					        		   				+"<br/><b>Type II: </b> High technical complexity but low business complexity"
					        		   				+"<br/><b>Type I</b>    (Complex Project): high technical and business complexity"
					     }
					]
		    ]);


var projMgmnt =buildQs("Project Management",[
							[
	            				
					           {label:"Development Methodology",name:"sdm"
					        	   ,help:"Software Development Methodology"
					        	    ,options:[
					        	    	"Rational Unified Process (RUP)",
					        	    	"eXtreme Programming (XP)",
					        	    	"Scrum",
					        	    	"Waterfall",
					        	    	"PRINCE2",
					        	    	"Prototyping",
					        	    	"Spiral development",
					        	    	"Crystal Clear",
					        	    	"Agile",
					        	    	"Kanban"
					        	    ],
					           },
					           {label:"Management Tools",name:"mgmtools"
					        	   ,help:"Tools used for project cost estimation"
					        	    ,options:[
					        	    	"Microsoft Project",
					        	    	"Team Foundation Server",
					        	    	"GanttProject",
					        	    	"eGroupWare",
					        	    	"MS Office Project Server"
					        	    ],
					           }									           
				           ]
				           ,[
				           	{label:"Project techniques",name:"sdm"
					        	   ,help:"Techniques which can be used as an aid to estimate, track and evaluate different aspects of the project"
					        	    ,options:[
					        	    	"Project Management Body of Knowledge (PMBOK)",
					        	    	"Constructive Cost Model (COCOMO)",
					        	    	"Milestone Trend Analysis (MTA)",
					        	    	"Earned Value (EV) management",
					        	    	"Critical path"
					        	    ],
					           },
					           {label:"Estimation Tools",name:"esttools"
					        	   ,help:"Tools used for project cost estimation"
					        	    ,options:[
					        	    	"COCOMO Suite",
					        	    	"Comparative Estimating Too",
					        	    	"CostXpert",
					        	    	"Function Point Workbench ",
					        	    	"FP Outline"
					        	    ],
					           },
					           {label:"Requirement Management Tools",name:"reqTools"
					        	   ,help:"Tools used for Requirement / change management"
					        	    ,options:[
					        	    	"CaliberRM"
					        	    ],
					           },
					           {label:"Management Challenges",name:"mgrchallenge",type:"textarea"
					        	   ,help:"Summary about the management/operational challenges faced in the development/execution of the project"
					           }		
					           		
				           ]
				    ]);

 
	var questionDataGroups = [projDetails, devEnv, projSize, projOthers, team, nonfn, dep, mgmcplx, projMgmnt, projContact];



