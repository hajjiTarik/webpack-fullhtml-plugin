# webpack-fullhtml-plugin

 - Tiny plugin,
 - Simple usage
 - Full custom options
 
 
### Usage :
    
```js
import FullHTMLPlugin from 'webpack-fullhtml-plugin';

new FullHTMLPlugin({
  title: `example page`,
  css: ['./reset.css', './style.css'],
  classname: `example-scene`,
  js:  ['./commons.js', './bundle.js'],
  filename: `./path/index.html`
}); 
```
    
### Output :

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>example page</title>
        <link rel="stylesheet" type="text/css" href="./reset.css"/>
        <link rel="stylesheet" type="text/css" href="./style.css"/>
    </head>
    <body>
        <div class="example-scene"></div>
        <script type="text/javascript" src="./commons.js"></script>
        <script type="text/javascript" src="./bundle.js"></script>
    </body>
</html>
```

### Multiple Html output

to have more output you just need to duplicate the instantiation of the plugin
```js
new FullHTMLPlugin(...options); 
new FullHTMLPlugin(...options); 
new FullHTMLPlugin(...options); 
```

### Licence
MIT

### Author
Hajji Tarik
