# DOM Manipulation

This folder contains examples of using JavaScript to manipulate 
the Document Object Model (DOM).

The DOM is a tree-like representation of the contents of a 
webpage or document.

A NODE in the DOM is any object in the DOM hierarchy, whereas
an element is one specific node. 

Nodes are targeted using CSS-style selectors:
e.g., : `<div class="display"></div>` can be selected as follows:
- div
- div.display
- .display

using commands: 
```
const myObj = document.querySelector('.display')
```

Use event listeners to make the webpage dynamic. Event listeners
enable your webpage to respond to events, such as mouse clicks.

