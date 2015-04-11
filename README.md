# ractive-events-keys

*Find more Ractive.js plugins at [ractivejs.org](http://docs.ractivejs.org/latest/plugins)*

Listen for specific keypresses - `enter`, `tab`, `escape`, `space`, `leftarrow`, `uparrow`, `rightarrow`, `downarrow` - on DOM elements.

```html
<input on-tab='submitAndMoveOn()' on-escape='revertEdit()'>
```


## Installation

Install from npm...

```bash
npm install ractive-events-keys
```

...or download it and add it as a script tag to your page:

```html
<script src='ractive.js'></script> <!-- must go first! -->
<script src='ractive-events-keys.js'></script>
```


## Use as a module...

**Note: previous versions of this plugin would 'self-register'. If you are using a module system such as Browserify, Webpack or RequireJS, that's no longer the case - you must explicitly register the plugin.**


### CommonJS

```js
var Ractive = require( 'ractive' );
var keys = require( 'ractive-events-keys' );

// To use the plugin with a specific instance
var ractive = new Ractive({
  el: 'body',
  template: myTemplate,
  events: {
    // just include the ones you need
    escape: keys.escape,
    scape: keys.space
  }
});

// To use it with components
MyComponent = Ractive.extend({
  template: componentTemplate,
  events: {
    escape: keys.escape,
    scape: keys.space
  }
});

// To make handlers globally available to *all* instances
Ractive.events.space = keys.space;
Ractive.events.escape = keys.escape;
```


### AMD

```js
define([ 'ractive', 'ractive-events-keys' ], function ( Ractive, keys ) {
  var ractive = new Ractive({
    el: 'body',
    template: myTemplate,
    events: {
      escape: keys.escape,
      scape: keys.space
    }
  });
});
```


### ES6

```js
import Ractive from 'ractive';
import { escape, space } from 'ractive-events-keys';

var ractive = new Ractive({
  el: 'body',
  template: myTemplate,
  events: { escape, space }
});
```


## Use as a `<script>` tag

If you include ractive-events-keys as a script tag, it will 'self-register' with the global `Ractive` object, and all Ractive instances will be able to use its handlers.



## License

MIT
