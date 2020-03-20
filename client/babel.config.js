module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				"modules": "systemjs"
			}
		],
	],
	plugins: [
		"@babel/plugin-proposal-class-properties",
	],
}

