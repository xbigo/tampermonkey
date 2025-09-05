// ==UserScript==
// @name         GithubWiderTree
// @namespace    http://tampermonkey.net/
// @version      2025-07-29
// @description  Wider tree view for Github review.
// @author       You
// @match        https://git.autodesk.com/*/*/pull/*/files
// @match        https://git.autodesk.com/*/*/pull/*/commits/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=autodesk.com
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';

    var element = document.querySelector('div[data-target="diff-layout.sidebarContainer"]')
    var newWidth = element.offsetWidth +100;
    element.style.width = newWidth +'px'
    console.log(newWidth +'px')
})();
