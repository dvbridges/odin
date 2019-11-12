// require NodeJS helper function for resolving paths - gets your absolute path
const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "dist") // Set abs path of output directory - uses 'path' helper
	},

	module: {
		rules: [
			{
				test: /\.jpe?g$/,
				use: "file-loader"
			}
		]
	}
};
