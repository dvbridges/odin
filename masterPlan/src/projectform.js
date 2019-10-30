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
        let buttonContainer = this._makeElement("div", "form-button-container")

        let submit = this._makeElement("button", ["form-button", "submit-form"]);
        let reset = this._makeElement("button", ["form-button", "reset-form"])
        let cancel = this._makeElement("button", "form-button")

        submit.setAttribute("type", "button")
        reset.setAttribute("type", "button")
        cancel.setAttribute("type", "button")

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
        cancel.innerHTML = "Cancel";
        cancel.addEventListener("click", () => this._cancelPlan());

        buttonContainer.appendChild(submit);
        buttonContainer.appendChild(reset);
        buttonContainer.appendChild(cancel);

        form.appendChild(buttonContainer);
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

    _cancelPlan() {
        this.active = false;
        document.getElementById("main-form").reset();
        document.getElementsByClassName("form-container")[0].remove()
    }

    render() {
        if (!this.active) {
            this.active = true;
            this._createForm();
        }
    }
}

export { Project, ProjectForm };