import _ from "form-serialize";

class Plan {
    constructor(form) {
        this.title = form['titleText'];
        this.desc = form['descText'];
        this.status = form['status'];
        this.dueDate = form['dueDate'];
    }
}

class PlanForm {
    constructor() {
        this.plan = undefined;
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
        let form = this._makeElement("form", "plan-form");
        form.id = "main-form";

        // labels
        let title = this._makeElement("h2", "form-title");
        let desc = this._makeElement("h2", "form-title");
        let status = this._makeElement("h2", "form-title");
        let dueDate = this._makeElement("h2", "form-title");

        // inputs
        let titleText = this._makeElement("input", "form-text");
        let descText = this._makeElement("textarea", ["form-text", "descript-text"]);
        let dropdownMenu = this._createDropDown()
        let calendar = this._createCalendar();

        titleText.name = "titleText";
        descText.name = "descText";
        dropdownMenu.name = "status";
        calendar.name = "dueDate";

        // Buttons
        let submit = this._makeElement("button", ["form-button", "submit-form"]);
        let reset = this._makeElement("button", ["form-button", "reset-form"])
        submit.setAttribute("type", "button")
        reset.setAttribute("type", "button")

        let line = this._makeElement("hr", "form-spacer");
        let lineBreak = this._makeElement("br");

        titleText.setAttribute("type", "text")
        descText.setAttribute("type", "text")

        title.innerHTML = "Title";
        form.appendChild(title);
        form.appendChild(titleText);

        desc.innerHTML = "Description";
        form.appendChild(desc);
        form.appendChild(descText);

        status.innerHTML = "Status";
        form.appendChild(status);
        form.appendChild(dropdownMenu);

        dueDate.innerHTML = "Set due date";
        form.appendChild(dueDate);
        form.appendChild(calendar);

        submit.innerHTML = "Submit";
        submit.addEventListener("click", () => this._submitPlan());
        reset.innerHTML = "Reset";
        reset.addEventListener("click", () => this._resetPlan());

        form.appendChild(submit);
        form.appendChild(reset);

        formContainer.appendChild(form);
        document.getElementById("content").appendChild(formContainer);
    }

    _createDropDown() {
        let dropdown = document.createElement("select");
        dropdown.className = "status-dropdown";

        let notStarted = document.createElement("option");
        notStarted.value = "notStarted";
        notStarted.innerHTML = "Not started";

        let inProg = document.createElement("option");
        inProg.value = "inProg";
        inProg.innerHTML = "In progress";

        let finished = document.createElement("option");
        finished.value = "finished";
        finished.innerHTML = "Finished";

        dropdown.appendChild(notStarted);
        dropdown.appendChild(inProg);
        dropdown.appendChild(finished)

        return dropdown;
    }

    _createCalendar() {
        let calendar = this._makeElement("input", "calendar-form");
        calendar.setAttribute("type", "date");
        return calendar;
    }

    _createObjectives() {
        let checkbox = this._makeElement("input", "form-checkbox")
        checkbox.setAttribute("type", "checkbox");
    }

    _submitPlan() {
        this.plan = new Plan(_(document.getElementById("main-form"), { hash: true }));
    }

    _resetPlan() {
        document.getElementById("main-form").reset();
    }

    render() {
        this._createForm();
    }
}

export { Plan, PlanForm }