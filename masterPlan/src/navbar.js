// Sets the start page 

class NavBar {
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

    _formatHeader() {
        let container = this._makeElement("div", "nav-container")

        let title = this._makeElement("h2", "title-text");
        title.innerHTML = "MasterPlan"

        let spacer = this._makeElement("div", "nav-spacer")

        let newProject = this._makeElement("button", ["project-button", "new-project-button"]);
        newProject.innerHTML = "New project"

        let resetProject = this._makeElement("button", ["project-button", "reset-project-button"]);
        resetProject.innerHTML = "Reset projects"

        container.appendChild(title);
        container.appendChild(spacer);
        container.appendChild(newProject);
        container.appendChild(resetProject);
        return container;
    }

    render() {
        document.getElementById("content").appendChild(this._formatHeader());
    }

    showButtons(show = false) {
        if (show) {
            document.getElementsByClassName("nav-container")[0].style.display = "flex";
        }
    }
}

export { NavBar };