# WebPack 2 - Intermediate webpack usage

The following will explain the use of 

This procedure assumes use of Node JS and npm


## Install weback
Go to your directory and use

```shell
npm init -y
npm install webpack --save-dev
npm install webpack-cli --save-dev
```

## Congfigure package.json
Modify scripts object

```javascript
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"build": "webpack",
"watch": "webpack -- watch"
},
```
You can now use `npm run-script build`, or just `npm run build`. \
You can have webpack watch for any changes, without the need to rebuild, using `npm run watch`.

## Add webpack configuration file
Create a file: `webpack.config.js`
Webpack acquires this file by default and reads the properties that are exported. \
The following shows how to create a module that exports an object that has properties that
tell webpack how to bundle your app.

## Give webpack the entry point and where you want bundle created

```javascript
// require NodeJS helper function for resolving paths - gets your absolute path
const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "dist") // Set abs path of output directory - uses 'path' helper
	}
};
```

## Build and run your new configuration

When you have created your `webpack.config.js` file, you can run it using:

```console
npx webpack --config webpack.config.js 
//or
npm run build
```
Now, you can go to the build (`dist`) directory specified in the webpack config file, \
and run the code using Node:

```shell
node bundle.js
```
## Add more JS files 
Webpack dependency graph starts at the entry point, parsing the file looking for statements, such as \

- import
- export 
- require

Webpack will mark the paths specified in those commands as dependencies. E.g., `./file2` is marked \
as a dependency.

`file1.js`
```javascript
import {fooString} from "./file2.js";
```

`file2.js`
```javascript
foo = "foo";
export defailt {foo};
```

## Using Loaders

A loader allows any type of asset to be treated as a module. \
Loaders can be used to pull in an asset which fits a regular expression,\ 
and performs a transformation on them using a specific module. \
This gets converted to JS and added to the dependency graph. \
You define Loaders in the `webpack.config.js` file.

```javascript

module: {
	rules: 

	[
		test: /\.js$/,         // For any JS file
		use: ["babel-loader",
			  "Some-other-loader"
			 ]  // Perform these transformations
	],

	/*We can also set options of loaders, using objects.
	In the next example, we load jpegs, but limit them
	in size using the options property.
	*/

	[{
		test: /\.jpe?g$/,
		use: 
		[
			{loader: "file-loader",
			options: {
				limit: 10000  // limts size of image in bytes
			}}
		]
	}]
}

```
## Using loaders to import images into your app, as assets 

In the last example, the test will look for any jpegs, and apply the `file-loader` module. \
The `loader` property contains the reference to the `file-loader` module, which should be stored in the `node_modules` folder. \
You must first install this module using `npm install file-loader --dev`, as it is not a built-in. \
Going a step further, you can also apply image compression after the image is imported using a relevant module. \
Now, you can import images as assets into your javascript using the file-loader loader. \
The image will show up as an asset when you build your app, and will be copied to your build directory. \
A weakness of loaders is that it will only apply transformations to single files before adding them to the dependency graph.

## Using plugin