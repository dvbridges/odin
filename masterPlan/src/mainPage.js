class MainPage {
    constructor() {}

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

        let projectBoxTitle = this._makeElement("h2", "title-text");
        let projectBoxDesc = this._makeElement("h2", "title-text");

        projectBoxTitle.innerHTML = project.title;
        projectBoxDesc.innerHTML = project.desc;

        titleContainer.appendChild(projectBoxTitle);
        descContainer.appendChild(projectBoxDesc);

        projectDetails.appendChild(titleContainer);
        projectDetails.appendChild(descContainer);
        projectBox.appendChild(projectDetails);
        return projectBox;
    }

    _createLayout() {
        let mainContainer = document.createElement("div");
        mainContainer.className = "main-container";
        //mainContainer.appendChild(this._makeProject({ title: "Project", desc: "Description" }))
        document.getElementById("content").appendChild(mainContainer);
    }

    _makePlan(plan) {

        let planBox = this._makeElement("div", "plan-container");
        let planDetails = this._makeElement("div", "plan-details");
        if (plan) {
            let titleContainer = this._makeElement("div", "project-title-container")
            let descContainer = this._makeElement("div", "project-desc-container")

            titleContainer.innerHTML = plan.title
            descContainer.innerHTML = plan.desc

            planDetails.appendChild(titleContainer);
            planDetails.appendChild(descContainer);
            planBox.appendChild(planDetails);
        }

        // add "new" button
        let btn = this._makeElement("button", "new-plan-button");
        btn.innerHTML = "New plan";
        planBox.appendChild(btn)
        return planBox;
    }

    addProject(project) {
        let newproj = this._makeProject(project);
        let newPlan = this._makePlan();
        newproj.appendChild(newPlan);
        document.getElementsByClassName("main-container")[0].appendChild(newproj);
    }

    makePlan(plan) {
        let newplan = this._makePlan(plan);
        return newplan;
    }

    addPlan(project, plan) {
        project.lastElementChild.lastElementChild.remove()
        project.appendChild(plan);

    }

    render() {
        this._createLayout();
    }
}

export { MainPage }