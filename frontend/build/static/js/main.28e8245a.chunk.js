(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(t,e,n){t.exports=n(84)},52:function(t,e,n){},84:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n.n(r),o=n(40),i=n.n(o),c=(n(52),n(43)),u=n(0),l=function(){return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"Do Diary"),a.a.createElement("h2",null,"We are doing for you"))},s=n(3),h=n(11),f=n(13),p=n(14),d=n.n(p);function v(){v=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new L(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var d={};c(d,a,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(x([])));g&&g!==e&&n.call(g,a)&&(d=g);var m=p.prototype=h.prototype=Object.create(d);function E(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var r;this._invoke=function(a,o){function i(){return new e(function(r,i){!function r(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function x(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,c(m,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},E(b.prototype),c(b.prototype,o,function(){return this}),t.AsyncIterator=b,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(m),c(m,i,"Generator"),c(m,a,function(){return this}),c(m,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var y=function(){var t=!0,e=Object(h.b)(),n=Object(r.useState)(!0),o=Object(s.a)(n,2),i=o[0],c=o[1],u=Object(r.useState)(""),l=Object(s.a)(u,2),p=l[0],y=l[1],g=Object(r.useState)(""),m=Object(s.a)(g,2),E=m[0],b=m[1],w=Object(r.useState)(""),O=Object(s.a)(w,2),S=O[0],L=O[1],x=Object(h.c)(function(t){return t.login}).loading;return Object(r.useEffect)(function(){t&&(e(function(){var t=Object(f.a)(v().mark(function t(e){var n,r;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:"LOAD_USER_REQUEST"}),t.next=4,d.a.get("/api/v1/me");case 4:n=t.sent,r=n.data,e({type:"LOAD_USER_SUCCESS",payload:r.message}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e({type:"LOAD_USER_FAIL",payload:t.t0.response.data.message});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()),t=!1)},[e]),a.a.createElement("form",{className:"auth-container"},a.a.createElement("h1",null,i?"Login ":"Register "),a.a.createElement("label",{style:i?{display:"none"}:{display:"block"},htmlFor:"name"},"Name:"),a.a.createElement("input",{style:i?{display:"none"}:{display:"block"},type:"text",id:"name",placeholder:"Enter your name",onChange:function(t){return y(t.target.value)}}),a.a.createElement("label",{htmlFor:"email"},"Email:"),a.a.createElement("input",{type:"text",id:"email",placeholder:"Enter your mail",onChange:function(t){return b(t.target.value)}}),a.a.createElement("label",{htmlFor:"password"},"Password"),a.a.createElement("input",{type:"password",id:"password",placeholder:"Enter password",onChange:function(t){return L(t.target.value)}}),a.a.createElement("div",null,a.a.createElement("button",{onClick:i?function(t){t.preventDefault(),e(function(t,e){return function(){var n=Object(f.a)(v().mark(function n(r){var a,o;return v().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:"LOGIN_REQUEST"}),n.next=4,d.a.post("/api/v1/login",{email:t,password:e},{headers:{"Content-Type":"application/json"}});case 4:a=n.sent,o=a.data,r({type:"LOGIN_SUCCESS",payload:o.message}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),r({type:"LOGIN_FAIL",payload:n.t0.response.data.message});case 12:case"end":return n.stop()}},n,null,[[0,9]])}));return function(t){return n.apply(this,arguments)}}()}(E,S))}:function(t){t.preventDefault(),e(function(t,e,n){return function(){var r=Object(f.a)(v().mark(function r(a){var o,i;return v().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:"REGISTER_REQUEST"}),r.next=4,d.a.post("/api/v1/register",{name:t,email:e,password:n},{headers:{"Content-Type":"application/json"}});case 4:o=r.sent,i=o.data,a({type:"REGISTER_SUCCESS",payload:i.message}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),a({type:"REGISTER_FAIL",payload:r.t0.response.data.message});case 12:case"end":return r.stop()}},r,null,[[0,9]])}));return function(t){return r.apply(this,arguments)}}()}(p,E,S))},type:"submit",disabled:x},i?"Login":"Register"),a.a.createElement("button",{onClick:function(){return c(!i)},type:"reset"},i?"New Here":"Already have an acconut")))},g=n(9),m=n(27),E=n(26),b=n(28),w=n(29),O=n(16);function S(){S=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new L(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var d={};c(d,a,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(x([])));y&&y!==e&&n.call(y,a)&&(d=y);var g=p.prototype=h.prototype=Object.create(d);function m(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var r;this._invoke=function(a,o){function i(){return new e(function(r,i){!function r(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function x(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(E.prototype),c(E.prototype,o,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new E(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},m(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var L=[{name:"Maths",notes:[{heading:"Heading",date:"09/09/2022",pageno:0,text:"Text"}]}],x=function(){var t=Object(h.b)(),e=Object(O.d)(),n=!0,o=Object(r.useState)(""),i=Object(s.a)(o,2),c=i[0],u=i[1],l=Object(r.useState)("Anonymous"),p=Object(s.a)(l,2),y=p[0],x=p[1],j=Object(r.useState)(0),_=Object(s.a)(j,2),R=_[0],C=_[1],k=Object(r.useState)(0),A=Object(s.a)(k,2),T=A[0],G=A[1],U=Object(r.useState)(L),N=Object(s.a)(U,2),I=N[0],F=N[1],D=Object(r.useState)(!0),P=Object(s.a)(D,2),Q=P[0],M=P[1],Y=Object(r.useState)(!0),H=Object(s.a)(Y,2),J=H[0],W=H[1];Object(r.useEffect)(function(){n&&(B(),n=!1)},[]);var B=function(){var t=Object(f.a)(S().mark(function t(){var e,n;return S().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("/api/v1/user");case 3:e=t.sent,0!==(n=e.data).subjects.length?(L=n.subjects,F(n.subjects)):F(L=[{name:"Subject",notes:[{heading:"Heading",date:"09/09/2022",pageno:0,text:"Text"}]}]),u(n.email),x(n.name),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}},t,null,[[0,10]])}));return function(){return t.apply(this,arguments)}}(),q=function(t){return function(e){""!==e.target.id&&(G(0),C(t))}},z=function(t){var e;"next"===t.target.id?(e=(T+1)%L[R].notes.length,G(e)):"prev"===t.target.id&&(e=(L[R].notes.length-1+T)%L[R].notes.length,G(e))},K=function(t){L[t.target.id].name=t.target.value,F(Object(g.a)(L))},V=function(t){return function(e){L.length>1&&(R===L.length-1&&C(R-1),L=[].concat(Object(g.a)(L.slice(0,t)),Object(g.a)(L.slice(t+1))),F(Object(g.a)(L)))}},X=function(t){"text"===t.target.type?L[R].notes[T].heading=t.target.value:L[R].notes[T].text=t.target.value,F(Object(g.a)(L))},Z=function(){var t=Object(f.a)(S().mark(function t(n){var r,a;return S().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,d.a.post("/api/v1/update",{email:c,Subjects:I},{headers:{"Content-Type":"application/json"}});case 4:r=t.sent,a=r.data,e.success(a.message),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e.error(t.t0);case 12:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}();return a.a.createElement(r.Fragment,null,a.a.createElement("h1",{className:"diary-username"},"Welcome ",a.a.createElement("br",null),y," "),a.a.createElement("div",{className:"diary-container"},a.a.createElement("div",{className:"subject-container"},a.a.createElement("h2",null,"Subject"),a.a.createElement("ul",null,I.map(function(t,e){return a.a.createElement("li",{id:"".concat(e),key:e,onClick:q(e)},a.a.createElement("input",{onChange:K,id:"".concat(e),disabled:Q,type:"text",value:t.name}),a.a.createElement(E.a,{onClick:V(e)}))})),a.a.createElement("div",null,a.a.createElement(m.a,{onClick:function(){if(L.length<10){var t=new Date,e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear();t=n+"/"+e+"/"+r,L.push({name:"Subject",notes:[{heading:"heading",date:t,pageno:0,text:"text"}]}),F(L),C(L.length-1)}}}),a.a.createElement(b.a,{onClick:function(){M(!Q)}}))),a.a.createElement("div",{className:"page-container"},a.a.createElement("h2",null,I[R].name),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("input",{onChange:X,disabled:J,type:"text",value:I[R].notes[T].heading})),a.a.createElement("div",null,a.a.createElement("p",null,I[R].notes[T].date)),a.a.createElement("div",null,a.a.createElement("p",null,"Page no: ",a.a.createElement("span",null,T+1)))),a.a.createElement("textarea",{disabled:J,value:I[R].notes[T].text,rows:14,onChange:X}),a.a.createElement("div",{className:"page-icons"},a.a.createElement(w.b,{id:"prev",onClick:z}),a.a.createElement(E.a,{onClick:function(){console.log("delete"),L[R].notes.length>1&&(T===L[R].notes.length-1&&G(T-1),L[R].notes=[].concat(Object(g.a)(L[R].notes.slice(0,T)),Object(g.a)(L[R].notes.slice(T+1))),F(Object(g.a)(L)))}}),a.a.createElement(m.a,{onClick:function(){var t=new Date,e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear();t=n+"/"+e+"/"+r,L[R].notes.push({heading:"heading",date:t,pageno:L[R].notes.length,text:"text"}),F(Object(g.a)(L)),G(L[R].notes.length-1)}}),a.a.createElement(b.a,{onClick:function(){W(!J)}}),a.a.createElement(w.a,{id:"next",onClick:z})))),a.a.createElement("button",{onClick:Z,className:"diary-btn diary-save"},"Save"),a.a.createElement("button",{onClick:function(){t(function(){var t=Object(f.a)(v().mark(function t(e){var n,r;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:"LOGOUT_REQUEST"}),t.next=4,d.a.get("/api/v1/logout");case 4:n=t.sent,r=n.data,e({type:"LOGOUT_SUCCESS",payload:r.message}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e({type:"LOGOUT_FAILURE",payload:t.t0.response.data.message});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}())},className:"diary-btn diary-logout"},"Logout"))},j=function(){return a.a.createElement("div",{className:"footer-copyrights"},a.a.createElement("p",null,"Copyright \xa9",a.a.createElement("a",{href:"https://www.google.com/"},"www.proxmair.com")))},_=function(){var t=Object(h.b)(),e=Object(O.d)(),n=Object(h.c)(function(t){return t.login}),o=n.message,i=n.error,s=n.isAuthenticated;return Object(r.useEffect)(function(){i&&(e.error(i),t({type:"CLEAR_ERRORS"})),o&&(e.success(o),t({type:"CLEAR_MESSAGE"}))},[e,i,o,t]),a.a.createElement(c.a,null,a.a.createElement(l,null),a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/",element:s?a.a.createElement(x,null):a.a.createElement(y,null)})),a.a.createElement(j,null))},R=n(44),C=n(18),k=Object(C.b)({loading:!0},{GET_USER_REQUEST:function(t){t.loading=!0},GET_USER_SUCCESS:function(t,e){t.loading=!1,t.subjects=e.payload},GET_USER_FAILURE:function(t,e){t.loading=!1,t.error=e.payload},CLEAR_ERRORS:function(t){t.error=null}}),A=Object(C.b)({},{LOGIN_REQUEST:function(t){t.loading=!0,t.isAuthenticated=!1},LOGIN_SUCCESS:function(t,e){t.loading=!1,t.isAuthenticated=!0,t.message=e.payload},LOGIN_FAIL:function(t,e){t.loading=!1,t.isAuthenticated=!1,t.error=e.payload},REGISTER_REQUEST:function(t){t.loading=!0,t.isAuthenticated=!1},REGISTER_SUCCESS:function(t,e){t.loading=!1,t.isAuthenticated=!0,t.message=e.payload},REGISTER_FAIL:function(t,e){t.loading=!1,t.isAuthenticated=!1,t.error=e.payload},LOGOUT_REQUEST:function(t){t.loading=!0},LOGOUT_SUCCESS:function(t,e){t.loading=!1,t.isAuthenticated=!1,t.user=null,t.message=e.payload},LOGOUT_FAILURE:function(t,e){t.loading=!1,t.isAuthenticated=!0,t.error=e.payload},CLEAR_ERRORS:function(t){t.error=null},CLEAR_MESSAGE:function(t){t.message=null},LOAD_USER_REQUEST:function(t){t.loading=!0,t.isAuthenticated=!1},LOAD_USER_SUCCESS:function(t,e){t.loading=!1,t.isAuthenticated=!0,t.message=e.payload},LOAD_USER_FAIL:function(t,e){t.loading=!1,t.isAuthenticated=!1,t.error=e.payload}}),T=Object(C.a)({reducer:{user:k,login:A}}),G={position:O.b.TOP_CENTER,timeout:2e3,transition:O.c.SCALE};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h.a,{store:T},a.a.createElement(O.a,Object.assign({template:R.a},G),a.a.createElement(_,null)))))}},[[45,2,1]]]);
//# sourceMappingURL=main.28e8245a.chunk.js.map