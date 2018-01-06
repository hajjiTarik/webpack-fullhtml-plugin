"use strict";
import path from 'path';

export default class {
  constructor(options) {
    if (arguments.length > 1) {
      throw new Error(`Please check you options and be sure to pass the correct params`);
    }

    this.options = { ...options };
  }

  jsHandler = (js) => {
    const _js = js instanceof Array ? js : [js];
    let tmp = "";
    if (_js.length === 0) return html;
    for (let i = 0; i < _js.length; i++) {
      tmp += '<script type="text/javascript" src="' + _js[i] + '"></script>\n';
    }
    return tmp;
  };

  cssHandler = (css, html) => {
    const _css = css instanceof Array ? css : [css];
    let tmp = "";
    if (_css.length === 0) return html;
    for (let i = 0; i < _css.length; i++) {
      tmp += '<link rel="stylesheet" type="text/css" href="' + _css[i] + '"/>\n';
    }
    return tmp;
  };

  initialTemplate = ({ title, classname, css, js }, cssHandler, jsHandler) => {
    let html = '<!DOCTYPE html>\n';
    html += '<html>\n';
    html += '<head>\n';
    html += '<meta charset="UTF-8">\n';
    html += '<title>' + title + '</title>\n';

    html += cssHandler(css);

    html += '</head>\n';
    html += '<body>\n';
    html += '<div class="' + classname + '"></div>\n';

    html += jsHandler(js);

    html += '</body>\n';
    html += '</html>';

    return html;
  };


  apply(compiler) {
    const { options, cssHandler, jsHandler } = this;
    const filename = options.filename;
    let file = null;
    if (path.resolve(filename) === path.normalize(filename)) {
      options.filename = path.relative(compiler.options.output.path, filename);
    }

    compiler.plugin("emit", (compilation, callback) => {

      file = this.initialTemplate(options, cssHandler, jsHandler);
      compilation.assets[this.options.filename] = {
        source: function () {
          return file;
        },
        size: function () {
          return file.length;
        }
      };

      callback();
    });
  }
}