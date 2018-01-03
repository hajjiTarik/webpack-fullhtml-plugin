function HtmlPlugin(options) {
  this.options = options;
}

HtmlPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', (compilation, callback) => {
    var html = '<!DOCTYPE html>\n';
    html+= '<html>\n';
    html+= '<head>\n';
    html+= '<meta charset="UTF-8">\n';
    html+= '<title>'+this.options.title+'</title>\n';
    html+= '<link rel="stylesheet" type="text/css" href="'+this.options.css+'"/>\n';
    html+= '</head>\n';
    html+= '<body>\n';
    html+= '<div class="'+this.options.className+'"></div>\n';
    html+= '<script type="text/javascript" src="'+this.options.js+'"></script>\n';
    html+= '</body>\n';
    html+= '</html>';

    compilation.assets[this.options.filename] = {
      source: function() {
        return html;
      },
      size: function() {
        return html.length;
      }
    };

    callback();
  });
};

module.exports = HtmlPlugin;