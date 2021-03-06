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
}

document.getElementsByClassName("new-project-button")[0].addEventListener("click", () => {
    startPage.active ? false : projectTemplate.render();
})

document.getElementById("content").addEventListener("click", (event) => {

    if (event.target && event.target.matches("button.start-button")) {
        startPage.clearPage()
        mainPage.render()
    }
    if (event.target && event.target.matches("input.plan-checkbox")) {
        setTimeout(() => event.target.parentNode.parentNode.remove(), 100);
    }

    if (event.target.matches("button.project-delete-button")) {
        setTimeout(() => event.target.parentNode.parentNode.parentNode.remove(), 100);
    }

    if (event.target && event.target.matches("button.new-plan-button")) {
        planTemplate.project = event.target.parentNode.parentNode
        planTemplate.render()
    }

    if (event.target && event.target.matches("button.submit-form")) {
        mainPage.addProject(projectTemplate.project);
        localStorage.setItem('user-projects', document.body.innerHTML);
    }

    if (event.target && event.target.matches("button.submit-plan")) {
        let plan = mainPage.makePlan(planTemplate.plan);
        mainPage.addPlan(planTemplate.project, plan);
        localStorage.setItem('user-projects', document.body.innerHTML);
    }

    if (event.target && event.target.matches("button.edit-plan")) {
        let plan = mainPage.makePlan(planTemplate.plan);
        mainPage.updatePlan(planTemplate.project, plan);
        localStorage.setItem('user-projects', document.body.innerHTML);
    }

    /*Open plan template for editing*/
    if (event.target && event.target.matches("div.plan-element")) {
        planTemplate.project = event.target.parentNode
        let tempPlan = {
            title: event.target.parentNode.children[0].innerText,
            desc: event.target.parentNode.children[1].innerText,
            status: event.target.parentNode.children[2].innerText,
            dueDate: event.target.parentNode.children[3].innerText,
            priority: event.target.parentNode.children[4].innerText
        }
        planTemplate.render(tempPlan);
    }

    if (event.target && event.target.matches("button.reset-project-button")) {
        if (startPage.active == true) { return }
        if (window.confirm("Are you sure you want to clear all projects?")) {
            localStorage.removeItem("user-projects");
            localStorage.removeItem("projectN");
            location.reload(true)
        }
    }
})