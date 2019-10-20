import { StartPage } from "./gettingStarted.js";
import { PlanForm, Plan } from "./planner.js";

let page = new StartPage();
let planTemplate = new PlanForm()

page.render();

// Add navbar imports
// set navbar
// nav bar currently only adds new todo
// Styled nice! 
//
// Title - get started page
// Continues to new page with navbar
// Only show getting started on initial visit, or if there are no todos
//

document.getElementsByClassName("start-button")[0].addEventListener("click", (event) => {
    console.log(`${event.target} clicked`);
    page.clearPage()
    planTemplate.render()
})

// Add event listener to new planTemplate, and decide what happens
// What should happen

/* 
On get started, clear the page
Have the layout of projects and plans
Create a project and add plans to that project
I.e., Current active project is the one selected, and any form gets added to that.
Be able to move plans across projects? That comes later with the advent of a new drop down menu on each project

App Controller - overlord
Project Libary - Parent to all projects
Projects are containers that list plans. Projects keep plans organised, and render them
Plans - last child - They are forms and objects that are called and passed to projects

Layout

Presented in columns, and nested (project > multiple tickets (plans))

Project - show title
>> Ticket - title, priority, due date - on click, open a plan-form with the plan details written and allow editing
>> Tickets are not forms, they are containers of plan-form information. 
*   
*/