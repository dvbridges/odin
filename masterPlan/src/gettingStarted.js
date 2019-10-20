// Sets the start page 

class StartPage {
    constructor() {
        this._container = undefined;
        this._header = undefined;
        this._summary = undefined;
    }

    _makeElement(type, className) {
        let element = document.createElement(type);
        element.className = className;
        return element;
    }

    _formatHeader() {
        let title = this._makeElement("h2", "title-text");
        title.innerHTML = "MasterPlan"
        this._header.appendChild(title)
    }

    _formatSummary() {
        let title = this._makeElement("h1", "title-text");
        let summary = this._makeElement("p", "summary-text");
        let button = this._makeElement("button", "start-button")

        title.innerHTML = "MasterPlan";
        summary.innerHTML = summaryText;
        button.innerHTML = "Begin";

        this._summary.appendChild(title);
        this._summary.appendChild(summary);
        this._summary.appendChild(button);
    }

    render() {
        this._container = this._makeElement("div", "start-container")
        this._header = this._makeElement("header", "title-header");
        this._summary = this._makeElement("div", "summary-container");

        this._formatHeader();
        this._formatSummary();

        this._container.appendChild(this._header)
        this._container.appendChild(this._summary)

        document.getElementById("content").appendChild(this._container);
    }

    clearPage() {
        document.getElementsByClassName("summary-container")[0].innerHTML = "";
    }
}

var summaryText = "Welcome to your MasterPlan.<br/><br/>Create a new project. Projects allow you to keep related plans organised.<br/><br/>. Make a plan: Create a plan, give it a title, a description of what needs doing, then set the status and deadline.<br/><br/>To get started with your projects, click 'Begin'"

export { StartPage };