import _ from "form-serialize";

class Plan {
    constructor(form) {
        this.title = form['titleText'];
        this.desc = form['descText'];
        this.status = form['status'];
        this.dueDate = form['dueDate'];
        this.priority = form['priority'];
    }
}

class PlanForm {
    constructor() {
        this.active = false;
        this.plan = undefined;
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

    _createForm(plan) {
        let formContainer = this._makeElement("div", "form-container")
        let form = this._makeElement("form", "plan-form");
        form.id = "main-form";

        // labels
        let title = this._makeElement("h2", "form-title");
        let desc = this._makeElement("h2", "form-title");
        let status = this._makeElement("h2", "form-title");
        let priority = this._makeElement("h2", "form-title");
        let dueDate = this._makeElement("h2", "form-title");

        // inputs
        let titleText = this._makeElement("input", "form-text");
        let descText = this._makeElement("textarea", ["form-text", "descript-text"]);
        let statusDropdownMenu = this._createStatusDropDown()
        let priorityDropdownMenu = this._createPriorityDropDown()
        let calendar = this._createCalendar();

        if (plan) {
            titleText.value = plan.title;
            descText.value = plan.desc;
            statusDropdownMenu.value = plan.status;
            priorityDropdownMenu.value = plan.priority;
            calendar.value = plan.dueDate;
        }

        titleText.name = "titleText";
        descText.name = "descText";
        statusDropdownMenu.name = "status";
        priorityDropdownMenu.name = "priority";
        calendar.name = "dueDate";

        // Buttons
        let buttonContainer = this._makeElement("div", "form-button-container")
        let submitClass = plan === undefined ? ["form-button", "submit-plan"] : ["form-button", "edit-plan"]
        let submit = this._makeElement("button", submitClass);
        let reset = this._makeElement("button", ["form-button", "reset-plan"])
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

        status.innerHTML = "Status";
        form.appendChild(status);
        form.appendChild(statusDropdownMenu);

        priority.innerHTML = "Priority";
        form.appendChild(priority);
        form.appendChild(priorityDropdownMenu);

        dueDate.innerHTML = "Set due date";
        form.appendChild(dueDate);
        form.appendChild(calendar);

        submit.innerHTML = "Submit";
        submit.addEventListener("click", () => this._submitPlan());
        reset.innerHTML = "Reset";
        reset.addEventListener("click", () => this._resetPlan());
        cancel.innerHTML = "Cancel";
        cancel.addEventListener("click", () => this._cancelPlan());

        buttonContainer.appendChild(submit);
        buttonContainer.appendChild(reset);
        buttonContainer.appendChild(cancel);

        form.appendChild(buttonContainer);
        formContainer.appendChild(form);
        document.getElementById("content").appendChild(formContainer);
    }

    _createStatusDropDown() {
        let dropdown = document.createElement("select");
        dropdown.className = "status-dropdown";

        let notStarted = document.createElement("option");
        notStarted.value = "Not started";
        notStarted.innerHTML = "Not started";

        let inProg = document.createElement("option");
        inProg.value = "In progress";
        inProg.innerHTML = "In progress";

        let finished = document.createElement("option");
        finished.value = "Finished";
        finished.innerHTML = "Finished";

        dropdown.appendChild(notStarted);
        dropdown.appendChild(inProg);
        dropdown.appendChild(finished)

        return dropdown;
    }

    _createPriorityDropDown() {
        let dropdown = document.createElement("select");
        dropdown.className = "status-dropdown";

        let low = document.createElement("option");
        low.value = low.innerHTML = "Low";

        let medium = document.createElement("option");
        medium.value = medium.innerHTML = "Medium";

        let high = document.createElement("option");
        high.value = high.innerHTML = "High";

        dropdown.appendChild(low);
        dropdown.appendChild(medium);
        dropdown.appendChild(high);

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
        document.getElementsByClassName("form-container")[0].remove()
        this.active = false;
    }

    _resetPlan() {
        document.getElementById("main-form").reset();
    }

    _cancelPlan() {
        this.active = false;
        document.getElementById("main-form").reset();
        document.getElementsByClassName("form-container")[0].remove()
    }

    render(plan) {
        if (!this.active) {
            this._createForm(plan);
            this.active = true;
        }
    }
}

export { Plan, PlanForm }