## webpack-fullhtml-plugin

tiny plugin, allow you to generate html file

Usage :

    new HtmlPlugin({
      title: `example page`,
      css: ['./reset.css', './style.css'],
      className: `example-scene`,
      js:  ['./commons.js', './bundle.js'],
      filename: `./path/index.html`
    });
    
Output :

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
    
### Licence
MIT

### Author
Hajji Tarik