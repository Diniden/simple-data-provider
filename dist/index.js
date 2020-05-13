!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports["simple-data-provider"]=r():e["simple-data-provider"]=r()}(window,(function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";function n(e){for(var t in e)r.hasOwnProperty(t)||(r[t]=e[t])}Object.defineProperty(r,"__esModule",{value:!0}),n(t(1)),n(t(2)),n(t(4))},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0})},function(e,r,t){"use strict";var n=this&&this.__generator||function(e,r){var t,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function s(u){return function(s){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=r.call(e,a)}catch(e){u=[6,e],n=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}},o=this&&this.__await||function(e){return this instanceof o?(this.v=e,this):new o(e)},u=this&&this.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,t=e[Symbol.asyncIterator];return t?t.call(e):(e="function"==typeof s?s(e):e[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(t){r[t]=e[t]&&function(r){return new Promise((function(n,o){(function(e,r,t,n){Promise.resolve(n).then((function(r){e({value:r,done:t})}),r)})(n,o,(r=e[t](r)).done,r.value)}))}}},a=this&&this.__asyncGenerator||function(e,r,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,u=t.apply(e,r||[]),a=[];return n={},s("next"),s("throw"),s("return"),n[Symbol.asyncIterator]=function(){return this},n;function s(e){u[e]&&(n[e]=function(r){return new Promise((function(t,n){a.push([e,r,t,n])>1||c(e,r)}))})}function c(e,r){try{(t=u[e](r)).value instanceof o?Promise.resolve(t.value.v).then(i,l):f(a[0][2],t)}catch(e){f(a[0][3],e)}var t}function i(e){c("next",e)}function l(e){c("throw",e)}function f(e,r){e(r),a.shift(),a.length&&c(a[0][0],a[0][1])}},s=this&&this.__values||function(e){var r="function"==typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(r,"__esModule",{value:!0});var c=t(3);function i(e){return function(e){return Array.isArray(e)}(e)?c.ProviderType.LIST:function(e){return void 0!==e.constructor&&(e.constructor===Set||e.constructor===Map)}(e)?c.ProviderType.SET:function(e){return"function"==typeof e[Symbol.iterator]}(e)?c.ProviderType.ITERATOR:function(e){return"function"==typeof e[Symbol.asyncIterator]}(e)?c.ProviderType.ITERATOR_ASYNC:function(e){return"object"==typeof e}(e)?c.ProviderType.OBJECT:function(e){return"function"==typeof e}(e)?c.ProviderType.METHOD:c.ProviderType.UNKNOWN}function l(e){return{type:i(e)}}r.values=function(e){return a(this,arguments,(function(){var r,t,a,i,f,y,d,p,v,b,T,h,E,S,O,_,w,P,m,N,R;return n(this,(function(n){switch(n.label){case 0:switch(r=l(e),r.type){case c.ProviderType.LIST:return[3,1];case c.ProviderType.ITERATOR:return[3,8];case c.ProviderType.ITERATOR_ASYNC:return[3,23];case c.ProviderType.SET:return[3,39];case c.ProviderType.OBJECT:return[3,45];case c.ProviderType.METHOD:return[3,52];case c.ProviderType.UNKNOWN:return[3,97];case c.ProviderType.METHOD_SYNC:case c.ProviderType.METHOD_ASYNC:case c.ProviderType.GENERATOR:case c.ProviderType.GENERATOR_ASYNC:return[3,101]}return[3,103];case 1:w=0,T=(t=e).length,n.label=2;case 2:return w<T?[4,o(t[w])]:[3,6];case 3:return[4,n.sent()];case 4:n.sent(),n.label=5;case 5:return++w,[3,2];case 6:return[4,o(void 0)];case 7:return[2,n.sent()];case 8:if(!(S=e).next)return[3,13];_=S.next(),n.label=9;case 9:return _.done?[3,12]:[4,o(_.value)];case 10:return[4,n.sent()];case 11:return n.sent(),_=S.next(),[3,9];case 12:return[3,21];case 13:n.trys.push([13,19,20,21]),a=s(S),i=a.next(),n.label=14;case 14:return i.done?[3,18]:(_=i.value,[4,o(_)]);case 15:return[4,n.sent()];case 16:n.sent(),n.label=17;case 17:return i=a.next(),[3,14];case 18:return[3,21];case 19:return f=n.sent(),P={error:f},[3,21];case 20:try{i&&!i.done&&(m=a.return)&&m.call(a)}finally{if(P)throw P.error}return[7];case 21:return[4,o(void 0)];case 22:return[2,n.sent()];case 23:S=e,n.label=24;case 24:n.trys.push([24,31,32,37]),y=u(S),n.label=25;case 25:return[4,o(y.next())];case 26:return(d=n.sent()).done?[3,30]:(_=d.value,[4,o(_)]);case 27:return[4,n.sent()];case 28:n.sent(),n.label=29;case 29:return[3,25];case 30:return[3,37];case 31:return p=n.sent(),N={error:p},[3,37];case 32:return n.trys.push([32,,35,36]),d&&!d.done&&(R=y.return)?[4,o(R.call(y))]:[3,34];case 33:n.sent(),n.label=34;case 34:return[3,36];case 35:if(N)throw N.error;return[7];case 36:return[7];case 37:return[4,o(void 0)];case 38:return[2,n.sent()];case 39:S=e.values(),_=S.next(),n.label=40;case 40:return _.done?[3,43]:[4,o(_.value)];case 41:return[4,n.sent()];case 42:return n.sent(),_=S.next(),[3,40];case 43:return[4,o(void 0)];case 44:return[2,n.sent()];case 45:v=e,b=Object.values(v),w=0,T=b.length,n.label=46;case 46:return w<T?[4,o(b[w])]:[3,50];case 47:return[4,n.sent()];case 48:n.sent(),n.label=49;case 49:return++w,[3,46];case 50:return[4,o(void 0)];case 51:return[2,n.sent()];case 52:return void 0!==(E=(h=e)(0))?[3,54]:[4,o(void 0)];case 53:return[2,n.sent()];case 54:return c.isIterable(E)?(r.type=c.ProviderType.GENERATOR,[3,63]):[3,55];case 55:return c.isAsyncIterable(E)?(r.type=c.ProviderType.GENERATOR_ASYNC,[3,63]):[3,56];case 56:return E instanceof Promise?(r.type=c.ProviderType.METHOD_ASYNC,[4,o(E)]):[3,60];case 57:return[4,o.apply(void 0,[n.sent()])];case 58:return[4,n.sent()];case 59:return n.sent(),[3,63];case 60:return r.type=c.ProviderType.METHOD_SYNC,[4,o(E)];case 61:return[4,n.sent()];case 62:n.sent(),n.label=63;case 63:switch(r.type){case c.ProviderType.GENERATOR:return[3,64];case c.ProviderType.GENERATOR_ASYNC:return[3,70];case c.ProviderType.METHOD_ASYNC:return[3,78];case c.ProviderType.METHOD_SYNC:return[3,87]}return[3,95];case 64:O=-1,_=(S=E).next(++O),n.label=65;case 65:return _.done?[3,68]:[4,o(_.value)];case 66:return[4,n.sent()];case 67:return n.sent(),_=S.next(++O),[3,65];case 68:return[4,o(void 0)];case 69:return[2,n.sent()];case 70:return O=-1,[4,o((S=E).next(++O))];case 71:_=n.sent(),n.label=72;case 72:return _.done?[3,76]:[4,o(_.value)];case 73:return[4,n.sent()];case 74:return n.sent(),[4,o(S.next(++O))];case 75:return _=n.sent(),[3,72];case 76:return[4,o(void 0)];case 77:return[2,n.sent()];case 78:w=0,n.label=79;case 79:return void 0===E?[3,85]:[4,o(h(++w))];case 80:return void 0!==(E=n.sent())?[3,82]:[4,o(void 0)];case 81:return[2,n.sent()];case 82:return[4,o(E)];case 83:return[4,n.sent()];case 84:return n.sent(),[3,79];case 85:return[4,o(void 0)];case 86:return[2,n.sent()];case 87:w=0,n.label=88;case 88:return void 0===E?[3,93]:void 0!==(E=h(++w))?[3,90]:[4,o(void 0)];case 89:return[2,n.sent()];case 90:return[4,o(E)];case 91:return[4,n.sent()];case 92:return n.sent(),[3,88];case 93:return[4,o(void 0)];case 94:return[2,n.sent()];case 95:return console.warn("The provider could not have it's type determined for iteration. Thus no values will be returned."),[4,o(void 0)];case 96:return[2,n.sent()];case 97:return[4,o(e)];case 98:return[4,n.sent()];case 99:return n.sent(),[4,o(void 0)];case 100:return[2,n.sent()];case 101:return console.warn("Undefined behavior occurred while processing a provider. No values will be returned."),[4,o(void 0)];case 102:return[2,n.sent()];case 103:return console.warn("The provider could not have it's type properly determined for iteration. Thus no values will be returned."),[4,o(void 0)];case 104:return[2,n.sent()]}}))}))}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e){e[e.LIST=0]="LIST",e[e.METHOD=1]="METHOD",e[e.METHOD_SYNC=2]="METHOD_SYNC",e[e.METHOD_ASYNC=3]="METHOD_ASYNC",e[e.GENERATOR=4]="GENERATOR",e[e.GENERATOR_ASYNC=5]="GENERATOR_ASYNC",e[e.ITERATOR=6]="ITERATOR",e[e.ITERATOR_ASYNC=7]="ITERATOR_ASYNC",e[e.OBJECT=8]="OBJECT",e[e.PRIMITIVE=9]="PRIMITIVE",e[e.SET=10]="SET",e[e.UNKNOWN=11]="UNKNOWN"}(r.ProviderType||(r.ProviderType={})),r.isIterable=function(e){return!!e&&"function"==typeof e[Symbol.iterator]},r.isAsyncIterable=function(e){return!!e&&"function"==typeof e[Symbol.asyncIterator]}},function(e,r,t){"use strict";var n=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(o,u){function a(e){try{c(n.next(e))}catch(e){u(e)}}function s(e){try{c(n.throw(e))}catch(e){u(e)}}function c(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,s)}c((n=n.apply(e,r||[])).next())}))},o=this&&this.__generator||function(e,r){var t,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function s(u){return function(s){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=r.call(e,a)}catch(e){u=[6,e],n=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}},u=this&&this.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,t=e[Symbol.asyncIterator];return t?t.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(t){r[t]=e[t]&&function(r){return new Promise((function(n,o){(function(e,r,t,n){Promise.resolve(n).then((function(r){e({value:r,done:t})}),r)})(n,o,(r=e[t](r)).done,r.value)}))}}};Object.defineProperty(r,"__esModule",{value:!0}),r.retrieve=function(e,r){var t,a,s,c;return n(this,void 0,void 0,(function(){var n,i;return o(this,(function(o){switch(o.label){case 0:o.trys.push([0,5,6,11]),t=u(e),o.label=1;case 1:return[4,t.next()];case 2:if((a=o.sent()).done)return[3,4];n=a.value,r(n),o.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return i=o.sent(),s={error:i},[3,11];case 6:return o.trys.push([6,,9,10]),a&&!a.done&&(c=t.return)?[4,c.call(t)]:[3,8];case 7:o.sent(),o.label=8;case 8:return[3,10];case 9:if(s)throw s.error;return[7];case 10:return[7];case 11:return[2]}}))}))}}])}));
//# sourceMappingURL=index.js.map