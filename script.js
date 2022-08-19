//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const { message } = require('statuses');

//inquirer to generate questions
inquirer.Prompt(
    [
        {
            type: 'input',
            message:"What's the project title",
            name:'title',
            //validate property to check that the user provided a value
            validate: (value)=>{ if (value){return true} else {return 'add a value to continue'}}
        },
        {

        }  
    ]
)