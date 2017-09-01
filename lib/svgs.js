'use strict';

var req = require.context('../svgicons', true, /\.svg$/);

req.keys().forEach(function (fileName) {
  var m = req(fileName);
  var name = fileName.slice(2).replace('.svg', '');
  if (m && m.default) {
    m = m.default;
  }
  exports[name] = m;
});