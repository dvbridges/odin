import { NavBar } from "./navbar.js";
import { StartPage } from "./gettingStarted.js";
import { ProjectForm } from "./projectform.js";
import { PlanForm } from "./planner.js";
import { MainPage } from "./mainPage.js";

let navBar = new NavBar()
let startPage = new StartPage();
let mainPage = new MainPage();
let planTemplate = new PlanForm();
let projectTemplate = new ProjectForm();

navBar.render();
if (localStorage.getItem("user-projects")) {
    document.body.innerHTML = localStorage.getItem("user-projects").trim();
} else {
    startPage.render();
    document.getElementsByClassName("start-button")[0].addEventListener("click", (event) => {
        startPage.clearPage()
        mainPage.render()
    })
}

document.getElementsByClassName("project-button")[0].addEventListener("click", () => {
    startPage.active ? false : projectTemplate.render();
})

document.getElementById("content").addEventListener("click", (event) => {
    if (event.target && event.target.matches("button.submit-form")) {
        mainPage.addProject(projectTemplate.project);
    }
})

document.getElementById("content").addEventListener("click", (event) => {
    if (event.target && event.target.matches("button.new-plan-button")) {
        planTemplate.project = event.target.parentNode.parentNode
        planTemplate.render();
    } else if (event.target && event.target.matches("button.submit-plan")) {
        let plan = mainPage.makePlan(planTemplate.plan);
        mainPage.addPlan(planTemplate.project, plan);
    } else if (event.target && event.target.matches("button.edit-plan")) {
        let plan = mainPage.makePlan(planTemplate.plan);
        mainPage.updatePlan(planTemplate.project, plan);
    } else if (event.target && event.target.matches("div.plan-element")) {
        planTemplate.project = event.target.parentNode
        let tempPlan = {
            title: event.target.parentNode.children[1].innerText,
            desc: event.target.parentNode.children[2].innerText,
            status: event.target.parentNode.children[3].innerText,
            dueDate: event.target.parentNode.children[4].innerText,
            priority: event.target.parentNode.children[5].innerText
        }
        planTemplate.render(tempPlan);
    }
    localStorage.setItem('user-projects', document.body.innerHTML);

})