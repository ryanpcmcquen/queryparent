/*! queryParent.js v1.1.0 by ryanpcmcquen */
/*global module*/
/*jshint esversion:6*/

const queryParent = (s, p) => {
  const q = (x) => {
    return document.querySelector(x);
  };
  const qa = (y) => {
    return document.querySelectorAll(y);
  };
  const pa = Array.prototype.slice.call(qa(p));
  (typeof s === 'string') && (s = q(s));
  return pa.filter((n) => {
    return (n.contains(s)) ? n : false;
  })[0];
};

module.exports = queryParent;
