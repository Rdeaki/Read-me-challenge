//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const { message } = require('statuses');

//inquirer to generate user questions
inquirer.Prompt(
    [
        {
            type: 'input',
            message:"What's the project title?",
            name:'title',
            //validate property to check that the user provided a value
            validate: (value)=>{ if (value){return true} else {return 'add a value to continue'}}
        },
        {
            type: 'input',
            message:'what is the description of the project?',
            name:'description',
            validate: (value)=>{ if (value){return true} else {return 'add a value to continue'}}

        },
        {
            type: 'input',
            message:'Provide details about installation of your app?',
            name:'installation',
            validate: (value)=>{ if (value){return true} else {return 'add a value to continue'}}

        },
        {
            type: 'input',
            message:'Provide examples of uses for the application?',
            name:'usage',
            validate: (value)=>{ if (value){return true} else {return 'add a value to continue'}}

        },
        {
            //license !!!come back to later!!!
            type: 'List',
            message:'Provide licensing information',
            name:'License',
            choices: [filler, filler, filler],
            validate: (value)=>{ if (value){return true} else {return 'add a value to continue'}}

        },
        {
            type: 'input',
            message:'Provide a list of contributers',
            name:'contributions',
            validate: (value)=>{ if (value){return true} else {return 'add a value to continue'}}

        },
        {
            type: 'input',
            message:'Provide GitHub username',
            name:'git',
            validate: (value)=>{ if (value){return true} else {return 'add a value to continue'}}

        },
        {
            type: 'input',
            message:'Provide email',
            name:'email',
            validate: (value)=>{ if (value){return true} else {return 'add a value to continue'}}

        },   
    ]
).then(({
    title,
    description,
    installation,
    usage,
    license,
    contributions,
    git,
    email,
}))
//table
const generateFile = (data) => {
    return `
# ${data.title}


${data.badge}


## Description

${data.description}

## Table of Contents