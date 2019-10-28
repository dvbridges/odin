// Sets the start page 

class StartPage {
    constructor() {
        this.active = false;
    }

    _makeElement(type, className) {
        let element = document.createElement(type);
        element.className = className;
        return element;
    }

    _formatTitle() {
        let titleContainer = this._makeElement("div", "start-title-container")
        let title = this._makeElement("h1", "start-title-text");

        title.innerHTML = "MasterPlan";
        titleContainer.appendChild(title);
        return titleContainer;
    }

    _formatSummary() {

        let summaryContainer = this._makeElement("div", "summary-container");
        let button = this._makeElement("button", "start-button")
        let mainTitle = this._makeElement("h1", "summary-text")
        mainTitle.innerHTML = t
        summaryContainer.appendChild(mainTitle)

        let titles = [t1, t2, t3, t4];
        let ps = [t1text, t2text, t3text, t4text];
        for (let i = 0; i < 4; i++) {
            let titleText = this._makeElement("h2", "summary-text")
            let pText = this._makeElement("p", "summary-text")
            titleText.innerHTML = titles[i]
            pText.innerHTML = ps[i]
            summaryContainer.appendChild(titleText);
            summaryContainer.appendChild(pText);
        }
        button.innerHTML = "Begin";
        summaryContainer.appendChild(button)

        return summaryContainer
    }

    render() {
        let container = this._makeElement("div", "start-container")

        container.appendChild(this._makeElement("hr", "hr-line"))
        container.appendChild(this._formatTitle())
        container.appendChild(this._makeElement("hr", "hr-line"))
        container.appendChild(this._formatSummary())
        container.appendChild(this._makeElement("hr", "hr-line"))
        container.appendChild(this._makeElement("div", "summary-container"))
        container.appendChild(this._makeElement("hr", "hr-line"))

        document.getElementById("content").appendChild(container);
        this.active = true;
    }

    clearPage() {
        document.getElementsByClassName("start-container")[0].style.display = "none";
        this.active = false;
    }
}

export { StartPage };
let t = "Welcome to your MasterPlan";
let t1 = "Create projects"
let t1text = "Create projects to keep related plans organised."
let t2 = "Create plans"
let t2text = "A project is a collection of plans. Create a plan, give it a title, description, status, priority level with intuitive color indicator and deadline."
let t3 = "Change plans"
let t3text = "Even the best laid plans have gone awry - Click plans to edit the information, such as changing their status."
let t4 = "Deleting projects and plans"
let t4text = "You can delete unwanted projects or plans using the delete and checkbox buttons. Reset your entire project page using the reset button in the navigation bar."
let t5 = "Now lets begin!"