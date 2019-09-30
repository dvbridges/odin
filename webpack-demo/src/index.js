import _ from 'lodash';

function component() {
  const element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work 
	// because the underscore needs to be defined.
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
