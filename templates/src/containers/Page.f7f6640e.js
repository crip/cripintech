webpackJsonp([1],{163:function(e,t,n){!function(t,r){e.exports=r(n(0))}(0,function(e){"use strict";function t(e){return e.replace(/(-|:)(.)/g,function(e,t,n){return n.toUpperCase()})}function n(e){var n={};return e.split(";").filter(function(e){return""!==e.trim()}).forEach(function(e){var r,a=e.split(":");if(a.length>1){var o=function(e){return/^-ms-/.test(e)&&(e=e.substr(1)),t(e)}(a[0].trim()),l=(r=a.slice(1).join(":").trim(),/^\d+$/.test(r)?Number(r):r.replace(/'/g,'"'));n[o]=l}}),n}function r(u,c,d){var s,m=d.map._;if(u.nodeType===o.COMMENT)return null;if(u.nodeType===o.TEXT){var f=(s=u.textContent,i.innerHTML=s,i.textContent);return m?m(f):f}for(var p=u.tagName.toLowerCase(),M=d.map[p],g={},h=0;h<u.attributes.length;h++){var w=u.attributes[h].name,y=u.attributes[h].value;g[w]=y}g.key=c.toString();for(var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce(function(r,o){if(/^on.*/.test(o))return r;var l=o;/^(data|aria)-/.test(o)||(l=t(o));var i=a[l]||l;return r[i]="style"===i?n(e.style):e[o],r},{})}(g),b=[],j=0;j<u.childNodes.length;j++){var C=u.childNodes[j],x=c+"."+j;if(!(l.indexOf(p)>-1&&C.nodeType===o.TEXT&&(C.textContent=C.textContent.trim(),""===C.textContent))){var I=r(C,x,d);null!==I&&b.push(I)}}return"style"!==p||M||m?(0===b.length&&(b=null),M?e.createElement(M,L,b):m?m(p,L,b):e.createElement(p,L,b)):(L.dangerouslySetInnerHTML={__html:b[0]},e.createElement(p,L,null))}e=e&&e.hasOwnProperty("default")?e.default:e;var a={for:"htmlFor",class:"className",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",datetime:"dateTime",enctype:"encType",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},o={ELEMENT:1,TEXT:3,COMMENT:8},l=["table","tbody","thead","tfoot","tr"],i=document.createElement("div");return function(e){var t={map:(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).map||{}},n=document.createElement("div");n.innerHTML=e.trim();for(var a=[],o=0;o<n.childNodes.length;o++)a.push(n.childNodes[o]);var l=a.map(function(e,n){return r(e,n,t)}).filter(function(e){return null!==e});return 1===l.length?l[0]:l}})},192:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.SmallHeader=t.HeroHeader=void 0;var o=a(["\n  position: relative;\n  overflow: hidden;\n"],["\n  position: relative;\n  overflow: hidden;\n"]),l=a(["\n  background-color: var(--main-color-dark);\n  color: white;\n  padding-top: 80px;\n"],["\n  background-color: var(--main-color-dark);\n  color: white;\n  padding-top: 80px;\n"]),i=a(["\n  max-width: var(--main-width);\n  margin: 0 auto;\n"],["\n  max-width: var(--main-width);\n  margin: 0 auto;\n"]),u=a(["\n  position: relative;\n  top: -1px;\n  width: 101%;\n  height: auto;\n"],["\n  position: relative;\n  top: -1px;\n  width: 101%;\n  height: auto;\n"]),c=n(0),d=r(c),s=n(52),m=n(193),f=r(m),p=n(18),M=r(p),g=M.default.div(o),h=M.default.div(l),w=(0,M.default)(s.Flex)(i),y=M.default.img(u),L=function(e){var t=e.children;return d.default.createElement(g,null,d.default.createElement(h,null,d.default.createElement(w,{alignItems:"baseline"},t)),d.default.createElement(y,{src:f.default}))},b=function(e){var t=e.children;return d.default.createElement(g,null,d.default.createElement(h,null,d.default.createElement(w,{alignItems:"center",justifyContent:"center"},t)))};t.HeroHeader=L,t.SmallHeader=b},193:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDQwIDE4OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTQ0MCAxODk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMjJFQUFBO30KCS5zdDF7ZmlsbDojM0IwMDdGO30KCS5zdDJ7ZmlsbDojMjQxMjREO30KPC9zdHlsZT4KPHRpdGxlPndhdmVzPC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CjxnIGlkPSJQYWdlLTMiPgoJPGcgaWQ9ImhvbWUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAtMzkzLjAwMDAwMCkiPgoJCTxnIGlkPSJiZy1jb2xvcnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDQuMDAwMDAwLCAwLjAwMDAwMCkiPgoJCQk8ZyBpZD0id2F2ZXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5MS4wMDAwMDAsIDM5Mi41MDAwMDApIj4KCQkJCTxwYXRoIGlkPSJSZWN0YW5nbGUtMiIgY2xhc3M9InN0MCIgZD0iTTExNDcuNyw1LjljMCwwLTg3OC4xLDE3LjMtOTEzLjMsMjAuM0MyMjYsMjcsMTA4LjIsMTAuMSwxMTQuOCwxMS40CgkJCQkJYzE4NC43LDM3LjEsNDExLjYsMTI3LjUsNTM3LjgsMTQzLjRjMjgyLjQsMzUuNSw1NDkuMS04Mi43LDU0OS4xLTgyLjdMMTE0Ny43LDUuOXoiLz4KCQkJCTxwYXRoIGlkPSJSZWN0YW5nbGUtMl8xXyIgY2xhc3M9InN0MSIgZD0iTTE0OTQsMC41TDY0NC42LDAuOWMwLDAtMTA5LjcsNy40LTQzLjUsMjcuMWMxMzAuNywzOC44LDI1OC43LDgyLjIsMzQyLjUsOTIuNwoJCQkJCWMyNzkuNCwzNS4yLDU0My45LTgwLjMsNTQ5LjQtODIuN2MwLjEsMCwwLjctMC40LDAuNy0wLjRMMTQ5NCwwLjV6Ii8+CgkJCQk8cGF0aCBpZD0iUmVjdGFuZ2xlLTJfMl8iIGNsYXNzPSJzdDIiIGQ9Ik00My42LDAuNWwxMzU3LjMsMGw0OC44LDBjMCwwLTQzLjcsMS40LTUxLjksMS44Yy03My43LDIuOS0xODQuNSwxMS43LTMxMSwzNy4xCgkJCQkJQzkwMi4yLDc2LjQsNjc1LjMsMTY2LjksNTQ5LjEsMTgyLjhjLTIwNi4yLDI2LTQwNC4xLTMwLjEtNDk1LjgtNjIuM0MxOS40LDEwOC43LDAsMTAwLjEsMCwxMDAuMUw0My42LDAuNXoiLz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K"},194:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=i(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 10;\n"],["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 10;\n"]),d=i(["\n  max-width: var(--main-width);\n  margin: 0 auto;\n"],["\n  max-width: var(--main-width);\n  margin: 0 auto;\n"]),s=n(0),m=r(s),f=n(14),p=n(52),M=n(18),g=r(M),h=n(53),w=g.default.div(c),y=(0,g.default)(p.Flex)(d),L=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){return m.default.createElement(w,{as:"header",role:"banner"},m.default.createElement(y,{p:3,alignItems:"center",justifyContent:"space-between"},m.default.createElement(p.Box,null,m.default.createElement(f.Link,{exact:!0,to:"/"},m.default.createElement(h.LogoFull,null)))))}}]),t}(s.Component);t.default=(0,f.withSiteData)(L)},56:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var o=a(["\n  color: white;\n  text-align: center;\n  padding: 1.5em 0;\n\n  @media (max-width: 32em) {\n    padding: 0 16px 1.5em;\n    font-size: 2.5em;\n  }\n"],["\n  color: white;\n  text-align: center;\n  padding: 1.5em 0;\n\n  @media (max-width: 32em) {\n    padding: 0 16px 1.5em;\n    font-size: 2.5em;\n  }\n"]),l=a(["\n  max-width: 800px;\n  margin: 0 auto;\n\n  p {\n    font-size: 1.2em;\n    line-height: 1.68;\n    margin-bottom: 2em;\n    color: #444;\n  }\n\n  a {\n    color: var(--main-color);\n    text-decoration: none;\n  }\n\n  h3 {\n    font-size: 1.5em;\n    margin-bottom: 0;\n  }\n"],["\n  max-width: 800px;\n  margin: 0 auto;\n\n  p {\n    font-size: 1.2em;\n    line-height: 1.68;\n    margin-bottom: 2em;\n    color: #444;\n  }\n\n  a {\n    color: var(--main-color);\n    text-decoration: none;\n  }\n\n  h3 {\n    font-size: 1.5em;\n    margin-bottom: 0;\n  }\n"]),i=n(0),u=r(i),c=n(14),d=n(163),s=r(d),m=n(18),f=r(m),p=n(52),M=n(192),g=n(194),h=r(g),w=f.default.h1(o),y=(0,f.default)(p.Box)(l);t.default=(0,c.withRouteData)(function(e){var t=e.page;return u.default.createElement("div",null,u.default.createElement(c.Head,{title:t.title}),u.default.createElement(h.default,null),u.default.createElement(M.SmallHeader,null,u.default.createElement(w,null,t.title)),u.default.createElement(y,{p:3},(0,s.default)(t.contents)))})}});
//# sourceMappingURL=Page.f7f6640e.js.map