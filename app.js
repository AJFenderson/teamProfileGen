const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function init() {
    inquirer.prompt([   
    {
        type: "input",
        message: "Type your full name:",
        name: "name",
    },
    {
        type:"input",
        message: "Enter your employee ID",
        name: "id",
    },
    {
        type:"input",
        message: "Enter your email address:",
        name: "email",
    }, 
    {
        type: "list",
        message:"Select your role from the following:",
        name:"role",
        choices: ["Manager","Engineer", "Intern"]
    },
    // switch(x) {
    //     case 'value1':  // if (x === 'value1')
    //       ...
    //       [break]
      
    //     case 'value2':  // if (x === 'value2')
    //       ...
    //       [break]
      
    //     default:
    //       ...
    //       [break]
    //   }
]).then(function(response){
    switch(response.role) {
            case "Engineer":  // if (x === 'value1')
              eng(response);
              break;
          
            case "Manager":  // if (x === 'value2')
              mgr(response);
              break;

              case "Intern":  // if (x === 'value2')
              int(response);  
              break;
          
            default:
              console.log("invalid role");
              break;
          }






})

}
init();




function mgr(response) {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter your office number:",
            name:"officeNumber",
        }

    ]).then(function(mgrResponse){
        var info = [{
        name: response.name,
         id: response.id,
         email: response.email,
         officeNumber: mgrResponse.officeNumber,

    }]
        

        render(info);

    })
}
function eng(response) {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter your github username:",
            name:"github",
        }

    ]).then(function(engResponse){
        var name = response.name
        var id = response.id
        var email = response.email
        var github = engResponse.github

        render(name, id, email, github);

    })
}
function int(response) {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter your school name:",
            name:"school",
        }

    ]).then(function(intResponse){
        var name = response.name
        var id = response.id
        var email = response.email
        var school = intResponse.school

        render(name, id, email, school);

    })
}


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
