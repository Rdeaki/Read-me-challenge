//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const { message } = require('statuses');

//inquirer to generate user questions
inquirer.Prompt(
    [
        {
            type: 'input',
            message:"What's the project title?(REQUIRED)",
            name:'title',
            //validate property to check that the user provided a value
            validate: (value)=>{ if (value){return true} else {return 'add a value to continue'}}
        },
        {
            type: 'input',
            message:'what is the description of the project?(REQUIRED)',
            name:'installation',
            validate: (value)=>{ if (value){return true} else {return 'add a value to continue'}}

        },
        {
            type: 'input',
            message:'provide details about installation of your app?',
            name:'installation',
            validate: (value)=>{ if (value){return true} else {return 'add a value to continue'}}

        },
        {
            type: 'input',
            message:'provide examples of uses for the application?',
            name:'usage',
            validate: (value)=>{ if (value){return true} else {return 'add a value to continue'}}

        },
        {
            //license !!!come back to later!!!
            type: 'List',
            message:'Licensing information',
            name:'License',
            choices: [filler, filler, filler],
            validate: (value)=>{ if (value){return true} else {return 'add a value to continue'}}

        },
        {
            type: 'input',
            message:'GitHub username',
            name:'Git',
            validate: (value)=>{ if (value){return true} else {return 'add a value to continue'}}

        },
        {
            type: 'input',
            message:'email',
            name:'email',
            validate: (value)=>{ if (value){return true} else {return 'add a value to continue'}}

        },        
    ]
)