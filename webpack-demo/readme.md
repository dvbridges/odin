# Steps to using npm

In your project directory...

1) initialise npm:

	`$ npm init -y`

2) Install the webpack
	
	```
	$ npm install webpack --save-dev
	$ npm install webpack-cli --save-dev
	```

3) set your project directory structure (just add src and dist folders)

```	
	.webpack-demo
	+-- package.json
	+-- webpack.config.js
	+-- /dist
	|	+-- index.html
	+-- /src
	|	+-- index.js  // entry point
	+-- /node_modules
```

4) Configure the `package.json` file

5) Create a bundle to manage dependencies, e.g., to install `lodash`...
	- Install any dependencies using npm:
	`$ npm install lodash --save`

	- Note:

		- use `--save` for production bundle packages

		- use `--save-dev` for dev packages, like linters, tests etc

6) Import your dependencies into your entry point file, so they can be bundled

	`import _ from 'lodash';`

	By stating what dependencies a module needs, webpack can use this info to build\
	a dependency graph. The graph is used to build an optimised bundle where scripts are\
	executed in the correct order.


7) Modify the `dist/index.html` file and set the script tag to load the bundle (instead of `index.js`)

	`<script src="main.js"><script>` 

8) Run `$ npx webpack` (requires npm version 5.2.0+)

	This will build the `dist/main.js` bundle file using the webpack.\
	Open the `index.html` and you should see `Hello Webpack` on the webpage.

9) If you want, set the `webpack.config.js` configuration file.\
	 This enables far more flexibility that the default cli command (command line interface)A

10) Try and re-run the npx command, but point to the new configuration file:

	`$ npx webpack --config webpack.config.js`

11) Instead of manually running the webpack from the CLI, add some settings to the\
		`package.json` to automatically build your package. Modify the scripts entry to\
		the following. Then call `$ npm run build` instead of `$ npx webpack`.

```		
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"build": "webpack"
	},
```
	



