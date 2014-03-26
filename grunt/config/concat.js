module.exports = {
	bundle: {
		src: 'src/<%= pkg.name %>.js',
		dest: 'tmp/<%= pkg.name %>.js'
	},
	options: {
		process: true
	}
};
