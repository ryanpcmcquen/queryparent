/*! queryParent.js v1.2.0 by ryanpcmcquen */
/*global module*/
/*jshint esversion:6*/

const d = document;
const qu = 'querySelector';

const queryParent = (s, p) => {
  const q = (x) => {
    return d[qu](x);
  };
  const qa = (y) => {
    return d[qu + 'All'](y);
  };
  const pa = Array.prototype.slice.call(qa(p));
  (typeof s === 'string') && (s = q(s));
  return pa.filter((n) => {
    return (n.contains(s)) ? n : false;
  }).pop();
};

module.exports = queryParent;
