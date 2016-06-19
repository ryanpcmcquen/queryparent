/*! queryParent.js v1.1.0 by ryanpcmcquen */
/*global module*/

var queryParent = function (s, p) {
  var q = function (x) {
    return document.querySelector(x);
  };
  var qa = function (y) {
    return document.querySelectorAll(y);
  };
  var pa = Array.prototype.slice.call(qa(p));
  (typeof s === 'string') && (s = q(s));
  return pa.filter(function (n) {
    return (n.contains(s)) ? n : false;
  })[0];
};

module.exports = queryParent;
