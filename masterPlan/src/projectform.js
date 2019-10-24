import _ from "form-serialize";


class Project {
    constructor(form) {
        this.title = form['titleText'];
        this.desc = form['descText'];
    }
}

class ProjectForm {
    constructor() {
        this.active = false;
        this.project = undefined;
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

    _createForm() {
        let formContainer = this._makeElement("div", "form-container")
        let form = this._makeElement("form", "project-form");
        form.id = "main-form";

        // labels
        let title = this._makeElement("h2", "form-title");
        let desc = this._makeElement("h2", "form-title");

        // inputs
        let titleText = this._makeElement("input", "form-text");
        let descText = this._makeElement("textarea", ["form-text", "descript-text"]);

        titleText.name = "titleText";
        descText.name = "descText";

        // Buttons
        let submit = this._makeElement("button", ["form-button", "submit-form"]);
        let reset = this._makeElement("button", ["form-button", "reset-form"])
        submit.setAttribute("type", "button")
        reset.setAttribute("type", "button")

        titleText.setAttribute("type", "text")
        descText.setAttribute("type", "text")

        title.innerHTML = "Title";
        form.appendChild(title);
        form.appendChild(titleText);

        desc.innerHTML = "Description";
        form.appendChild(desc);
        form.appendChild(descText);

        submit.innerHTML = "Submit";
        submit.addEventListener("click", () => this._submitProject());
        reset.innerHTML = "Reset";
        reset.addEventListener("click", () => this._resetProject());

        form.appendChild(submit);
        form.appendChild(reset);

        formContainer.appendChild(form);
        document.getElementById("content").appendChild(formContainer);
    }

    _submitProject() {
        this.project = new Project(_(document.getElementById("main-form"), { hash: true }));
        this.active = false;
        document.getElementsByClassName("form-container")[0].remove()
    }

    _resetProject() {
        document.getElementById("main-form").reset();
    }

    render() {
        if (!this.active) {
            this.active = true;
            this._createForm();
        }
    }
}

export { Project, ProjectForm };