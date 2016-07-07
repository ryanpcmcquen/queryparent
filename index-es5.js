/*! queryParent.js v1.2.0 by ryanpcmcquen */
/*global module*/

var d = document;
var qu = 'querySelector';

var queryParent = function (s, p) {
  var q = function (x) {
    return d[qu](x);
  };
  var qa = function (y) {
    return d[qu + 'All'](y);
  };
  var pa = Array.prototype.slice.call(qa(p));
  (typeof s === 'string') && (s = q(s));
  return pa.filter(function (n) {
    return (n.contains(s)) ? n : false;
  }).pop();
};

module.exports = queryParent;
