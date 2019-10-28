import { Project } from "./projectform";

class MainPage {
    constructor() {
        this._projectN = localStorage.getItem("projectN") === undefined ? 0 : Number(localStorage.getItem("projectN"));

    }

    _makeElement(type, className) {
        let element = document.createElement(type);
        if (className !== undefined) {
            if (typeof className === "object") {
                element.classList.add(...className)
            } else {
                element.className = className
            }
        }
        return element;
    }

    _makeProject(project) {
        let projectBox = this._makeElement("div", "project-container");

        let projectDetails = this._makeElement("div", "project-details");
        let titleContainer = this._makeElement("div", "project-title-container");
        let descContainer = this._makeElement("div", "project-desc-container");
        let statusContainer = this._makeElement("div", "project-title-container");
        let dueDateContainer = this._makeElement("div", "project-title-container");
        let deleteContainer = this._makeElement("div", "project-title-container");

        let projectBoxTitle = this._makeElement("h2", "title-text");
        let projectBoxDesc = this._makeElement("h2", "title-text");
        let projectBoxStatus = this._makeElement("h2", "title-text");
        let projectBoxDueDate = this._makeElement("h2", "title-text");
        let projectDelete = this._makeElement("button", "project-delete-button")

        projectBoxTitle.innerHTML = project.title === undefined ? `Project ${this._projectN}` : project.title;
        projectBoxDesc.innerHTML = project.desc === undefined ? 'Description' : project.desc;
        projectBoxStatus.innerHTML = "Status";
        projectBoxDueDate.innerHTML = "Due Date";
        projectDelete.innerHTML = "Delete";

        titleContainer.appendChild(projectBoxTitle);
        descContainer.appendChild(projectBoxDesc);
        statusContainer.appendChild(projectBoxStatus);
        dueDateContainer.appendChild(projectBoxDueDate);
        deleteContainer.appendChild(projectDelete);

        projectDetails.appendChild(titleContainer);
        projectDetails.appendChild(descContainer);
        projectDetails.appendChild(statusContainer);
        projectDetails.appendChild(dueDateContainer);
        projectDetails.appendChild(deleteContainer);

        projectBox.appendChild(projectDetails);
        return projectBox;
    }

    _createLayout() {
        let mainContainer = document.createElement("div");
        mainContainer.className = "main-container";
        document.getElementById("content").appendChild(mainContainer);
    }

    _makePlan(plan) {

        let priorityCols = { Low: "#7CBB00", Medium: "#FFBB00", High: "#F65314" }
        let planBox = this._makeElement("div", "plan-container");
        let planDetails = this._makeElement("div", "plan-details");

        if (plan) {
            let checkContainer = this._makeElement("div", ["plan-element", "plan-checkbox-container"]);
            let titleContainer = this._makeElement("div", ["plan-element", "project-title-container"]);
            let descContainer = this._makeElement("div", ["plan-element", "project-desc-container"]);
            let statusContainer = this._makeElement("div", ["plan-element", "project-title-container"])
            let dueDateContainer = this._makeElement("div", ["plan-element", "project-title-container"]);
            let priorityContainer = this._makeElement("div", ["plan-element", "project-title-container"]);

            titleContainer.innerHTML = plan.title;
            descContainer.innerHTML = plan.desc;
            statusContainer.innerHTML = plan.status;
            dueDateContainer.innerHTML = plan.dueDate;
            priorityContainer.innerHTML = plan.priority;
            priorityContainer.style.display = "none";

            let checkbox = this._makeElement("input", "plan-checkbox");
            checkbox.setAttribute("type", "checkbox");
            checkContainer.appendChild(checkbox);

            planDetails.appendChild(titleContainer);
            planDetails.appendChild(descContainer);
            planDetails.appendChild(statusContainer);
            planDetails.appendChild(dueDateContainer);
            planDetails.appendChild(priorityContainer);
            planDetails.appendChild(checkContainer);
            planDetails.style.background = plan.status === "Finished" ? "silver" : priorityCols[plan.priority];

            planBox.appendChild(planDetails);
        }

        return planBox;
    }

    _makeAddPlanButton() {
        // add "new" button
        let planBox = this._makeElement("div", "plan-container");
        let btn = this._makeElement("button", "new-plan-button");
        btn.innerHTML = "New plan";
        planBox.appendChild(btn)
        return planBox
    }

    addProject(project) {
        this._projectN += 1;
        localStorage.setItem("projectN", this._projectN)
        let newproj = this._makeProject(project);
        let button = this._makeAddPlanButton();
        newproj.appendChild(button);
        document.getElementsByClassName("main-container")[0].appendChild(newproj);
    }

    makePlan(plan) {
        let newplan = this._makePlan(plan);
        return newplan;
    }

    addPlan(project, plan) {
        project.insertBefore(plan, project.lastElementChild)
    }

    updatePlan(project, plan) {
        project.replaceWith(plan.lastElementChild)
    }

    render() {
        this._createLayout();
    }
}

export { MainPage }