var gobble = require( 'gobble' );

gobble.cwd( __dirname );

var lib = gobble( 'src' )
	.transform( 'babel', {
		blacklist: [ 'es6.modules', 'useStrict' ],
		sourceMap: false
	})
	.transform( 'esperanto-bundle', {
		entry: 'ractive-events-keys',
		type: 'umd',
		name: '__PLACEHOLDER__',
		sourceMap: false,
		strict: true
	})
	.transform( function ( input ) {
		// this is an egregious hack, and totally brittle. YOLO
		return input.replace( '(global.__PLACEHOLDER__ = {})', 'global.Ractive.events' );
	});

module.exports = gobble([
	lib,
	lib.transform( 'uglifyjs', {
		ext: '.min.js',
		sourceMap: false
	})
]);