/*! queryParent.js v1.0.0 by ryanpcmcquen */
/*global module*/
/*jshint esversion:6*/
const queryParent = (s, p) => {
  const q = (x) => {
    return document.querySelector(x);
  };
  (typeof s === 'string') && (s = q(s)) && (p = q(p));
  return (s.parentNode === p) ? p : queryParent(s.parentNode, p);
};

module.exports = queryParent;