(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function hs(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var cl={exports:{}},Er={},fl={exports:{}},le={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var dl,yd;function Oh(){if(yd)return dl;yd=1;var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function s(c){if(c==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(c)}function l(){try{if(!Object.assign)return!1;var c=new String("abc");if(c[5]="de",Object.getOwnPropertyNames(c)[0]==="5")return!1;for(var h={},m=0;m<10;m++)h["_"+String.fromCharCode(m)]=m;var g=Object.getOwnPropertyNames(h).map(function(v){return h[v]});if(g.join("")!=="0123456789")return!1;var _={};return"abcdefghijklmnopqrst".split("").forEach(function(v){_[v]=v}),Object.keys(Object.assign({},_)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return dl=l()?Object.assign:function(c,h){for(var m,g=s(c),_,v=1;v<arguments.length;v++){m=Object(arguments[v]);for(var P in m)t.call(m,P)&&(g[P]=m[P]);if(r){_=r(m);for(var x=0;x<_.length;x++)i.call(m,_[x])&&(g[_[x]]=m[_[x]])}}return g},dl}/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd;function uy(){if(vd)return le;vd=1;var r=Oh(),t=typeof Symbol=="function"&&Symbol.for,i=t?Symbol.for("react.element"):60103,s=t?Symbol.for("react.portal"):60106,l=t?Symbol.for("react.fragment"):60107,c=t?Symbol.for("react.strict_mode"):60108,h=t?Symbol.for("react.profiler"):60114,m=t?Symbol.for("react.provider"):60109,g=t?Symbol.for("react.context"):60110,_=t?Symbol.for("react.forward_ref"):60112,v=t?Symbol.for("react.suspense"):60113,P=t?Symbol.for("react.memo"):60115,x=t?Symbol.for("react.lazy"):60116,M=typeof Symbol=="function"&&Symbol.iterator;function W(y){for(var C="https://reactjs.org/docs/error-decoder.html?invariant="+y,j=1;j<arguments.length;j++)C+="&args[]="+encodeURIComponent(arguments[j]);return"Minified React error #"+y+"; visit "+C+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ie={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q={};function L(y,C,j){this.props=y,this.context=C,this.refs=Q,this.updater=j||ie}L.prototype.isReactComponent={},L.prototype.setState=function(y,C){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error(W(85));this.updater.enqueueSetState(this,y,C,"setState")},L.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function Y(){}Y.prototype=L.prototype;function de(y,C,j){this.props=y,this.context=C,this.refs=Q,this.updater=j||ie}var ue=de.prototype=new Y;ue.constructor=de,r(ue,L.prototype),ue.isPureReactComponent=!0;var D={current:null},U=Object.prototype.hasOwnProperty,ce={key:!0,ref:!0,__self:!0,__source:!0};function we(y,C,j){var $,G={},fe=null,ne=null;if(C!=null)for($ in C.ref!==void 0&&(ne=C.ref),C.key!==void 0&&(fe=""+C.key),C)U.call(C,$)&&!ce.hasOwnProperty($)&&(G[$]=C[$]);var V=arguments.length-2;if(V===1)G.children=j;else if(1<V){for(var Ae=Array(V),tt=0;tt<V;tt++)Ae[tt]=arguments[tt+2];G.children=Ae}if(y&&y.defaultProps)for($ in V=y.defaultProps,V)G[$]===void 0&&(G[$]=V[$]);return{$$typeof:i,type:y,key:fe,ref:ne,props:G,_owner:D.current}}function Pe(y,C){return{$$typeof:i,type:y.type,key:C,ref:y.ref,props:y.props,_owner:y._owner}}function Le(y){return typeof y=="object"&&y!==null&&y.$$typeof===i}function Se(y){var C={"=":"=0",":":"=2"};return"$"+(""+y).replace(/[=:]/g,function(j){return C[j]})}var Oe=/\/+/g,Ut=[];function Te(y,C,j,$){if(Ut.length){var G=Ut.pop();return G.result=y,G.keyPrefix=C,G.func=j,G.context=$,G.count=0,G}return{result:y,keyPrefix:C,func:j,context:$,count:0}}function ke(y){y.result=null,y.keyPrefix=null,y.func=null,y.context=null,y.count=0,10>Ut.length&&Ut.push(y)}function ct(y,C,j,$){var G=typeof y;(G==="undefined"||G==="boolean")&&(y=null);var fe=!1;if(y===null)fe=!0;else switch(G){case"string":case"number":fe=!0;break;case"object":switch(y.$$typeof){case i:case s:fe=!0}}if(fe)return j($,y,C===""?"."+Ze(y,0):C),1;if(fe=0,C=C===""?".":C+":",Array.isArray(y))for(var ne=0;ne<y.length;ne++){G=y[ne];var V=C+Ze(G,ne);fe+=ct(G,V,j,$)}else if(y===null||typeof y!="object"?V=null:(V=M&&y[M]||y["@@iterator"],V=typeof V=="function"?V:null),typeof V=="function")for(y=V.call(y),ne=0;!(G=y.next()).done;)G=G.value,V=C+Ze(G,ne++),fe+=ct(G,V,j,$);else if(G==="object")throw j=""+y,Error(W(31,j==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":j,""));return fe}function Ve(y,C,j){return y==null?0:ct(y,"",C,j)}function Ze(y,C){return typeof y=="object"&&y!==null&&y.key!=null?Se(y.key):C.toString(36)}function zt(y,C){y.func.call(y.context,C,y.count++)}function et(y,C,j){var $=y.result,G=y.keyPrefix;y=y.func.call(y.context,C,y.count++),Array.isArray(y)?wt(y,$,j,function(fe){return fe}):y!=null&&(Le(y)&&(y=Pe(y,G+(!y.key||C&&C.key===y.key?"":(""+y.key).replace(Oe,"$&/")+"/")+j)),$.push(y))}function wt(y,C,j,$,G){var fe="";j!=null&&(fe=(""+j).replace(Oe,"$&/")+"/"),C=Te(C,fe,$,G),Ve(y,et,C),ke(C)}var $t={current:null};function We(){var y=$t.current;if(y===null)throw Error(W(321));return y}var A={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:D,IsSomeRendererActing:{current:!1},assign:r};return le.Children={map:function(y,C,j){if(y==null)return y;var $=[];return wt(y,$,null,C,j),$},forEach:function(y,C,j){if(y==null)return y;C=Te(null,null,C,j),Ve(y,zt,C),ke(C)},count:function(y){return Ve(y,function(){return null},null)},toArray:function(y){var C=[];return wt(y,C,null,function(j){return j}),C},only:function(y){if(!Le(y))throw Error(W(143));return y}},le.Component=L,le.Fragment=l,le.Profiler=h,le.PureComponent=de,le.StrictMode=c,le.Suspense=v,le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,le.cloneElement=function(y,C,j){if(y==null)throw Error(W(267,y));var $=r({},y.props),G=y.key,fe=y.ref,ne=y._owner;if(C!=null){if(C.ref!==void 0&&(fe=C.ref,ne=D.current),C.key!==void 0&&(G=""+C.key),y.type&&y.type.defaultProps)var V=y.type.defaultProps;for(Ae in C)U.call(C,Ae)&&!ce.hasOwnProperty(Ae)&&($[Ae]=C[Ae]===void 0&&V!==void 0?V[Ae]:C[Ae])}var Ae=arguments.length-2;if(Ae===1)$.children=j;else if(1<Ae){V=Array(Ae);for(var tt=0;tt<Ae;tt++)V[tt]=arguments[tt+2];$.children=V}return{$$typeof:i,type:y.type,key:G,ref:fe,props:$,_owner:ne}},le.createContext=function(y,C){return C===void 0&&(C=null),y={$$typeof:g,_calculateChangedBits:C,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider={$$typeof:m,_context:y},y.Consumer=y},le.createElement=we,le.createFactory=function(y){var C=we.bind(null,y);return C.type=y,C},le.createRef=function(){return{current:null}},le.forwardRef=function(y){return{$$typeof:_,render:y}},le.isValidElement=Le,le.lazy=function(y){return{$$typeof:x,_ctor:y,_status:-1,_result:null}},le.memo=function(y,C){return{$$typeof:P,type:y,compare:C===void 0?null:C}},le.useCallback=function(y,C){return We().useCallback(y,C)},le.useContext=function(y,C){return We().useContext(y,C)},le.useDebugValue=function(){},le.useEffect=function(y,C){return We().useEffect(y,C)},le.useImperativeHandle=function(y,C,j){return We().useImperativeHandle(y,C,j)},le.useLayoutEffect=function(y,C){return We().useLayoutEffect(y,C)},le.useMemo=function(y,C){return We().useMemo(y,C)},le.useReducer=function(y,C,j){return We().useReducer(y,C,j)},le.useRef=function(y){return We().useRef(y)},le.useState=function(y){return We().useState(y)},le.version="16.14.0",le}var wd;function Zl(){return wd||(wd=1,fl.exports=uy()),fl.exports}/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function cy(){if(kd)return Er;kd=1;var r=Zl(),t=60103;if(Er.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var i=Symbol.for;t=i("react.element"),Er.Fragment=i("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var v,P={},x=null,M=null;_!==void 0&&(x=""+_),g.key!==void 0&&(x=""+g.key),g.ref!==void 0&&(M=g.ref);for(v in g)l.call(g,v)&&!c.hasOwnProperty(v)&&(P[v]=g[v]);if(m&&m.defaultProps)for(v in g=m.defaultProps,g)P[v]===void 0&&(P[v]=g[v]);return{$$typeof:t,type:m,key:x,ref:M,props:P,_owner:s.current}}return Er.jsx=h,Er.jsxs=h,Er}var _d;function fy(){return _d||(_d=1,cl.exports=cy()),cl.exports}var b=fy(),Ee=Zl();const eu=hs(Ee);var hl={exports:{}},at={},pl={exports:{}},ml={};/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function dy(){return Ed||(Ed=1,(function(r){var t,i,s,l,c;if(typeof window>"u"||typeof MessageChannel!="function"){var h=null,m=null,g=function(){if(h!==null)try{var A=r.unstable_now();h(!0,A),h=null}catch(y){throw setTimeout(g,0),y}},_=Date.now();r.unstable_now=function(){return Date.now()-_},t=function(A){h!==null?setTimeout(t,0,A):(h=A,setTimeout(g,0))},i=function(A,y){m=setTimeout(A,y)},s=function(){clearTimeout(m)},l=function(){return!1},c=r.unstable_forceFrameRate=function(){}}else{var v=window.performance,P=window.Date,x=window.setTimeout,M=window.clearTimeout;if(typeof console<"u"){var W=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),typeof W!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if(typeof v=="object"&&typeof v.now=="function")r.unstable_now=function(){return v.now()};else{var ie=P.now();r.unstable_now=function(){return P.now()-ie}}var Q=!1,L=null,Y=-1,de=5,ue=0;l=function(){return r.unstable_now()>=ue},c=function(){},r.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):de=0<A?Math.floor(1e3/A):5};var D=new MessageChannel,U=D.port2;D.port1.onmessage=function(){if(L!==null){var A=r.unstable_now();ue=A+de;try{L(!0,A)?U.postMessage(null):(Q=!1,L=null)}catch(y){throw U.postMessage(null),y}}else Q=!1},t=function(A){L=A,Q||(Q=!0,U.postMessage(null))},i=function(A,y){Y=x(function(){A(r.unstable_now())},y)},s=function(){M(Y),Y=-1}}function ce(A,y){var C=A.length;A.push(y);e:for(;;){var j=C-1>>>1,$=A[j];if($!==void 0&&0<Le($,y))A[j]=y,A[C]=$,C=j;else break e}}function we(A){return A=A[0],A===void 0?null:A}function Pe(A){var y=A[0];if(y!==void 0){var C=A.pop();if(C!==y){A[0]=C;e:for(var j=0,$=A.length;j<$;){var G=2*(j+1)-1,fe=A[G],ne=G+1,V=A[ne];if(fe!==void 0&&0>Le(fe,C))V!==void 0&&0>Le(V,fe)?(A[j]=V,A[ne]=C,j=ne):(A[j]=fe,A[G]=C,j=G);else if(V!==void 0&&0>Le(V,C))A[j]=V,A[ne]=C,j=ne;else break e}}return y}return null}function Le(A,y){var C=A.sortIndex-y.sortIndex;return C!==0?C:A.id-y.id}var Se=[],Oe=[],Ut=1,Te=null,ke=3,ct=!1,Ve=!1,Ze=!1;function zt(A){for(var y=we(Oe);y!==null;){if(y.callback===null)Pe(Oe);else if(y.startTime<=A)Pe(Oe),y.sortIndex=y.expirationTime,ce(Se,y);else break;y=we(Oe)}}function et(A){if(Ze=!1,zt(A),!Ve)if(we(Se)!==null)Ve=!0,t(wt);else{var y=we(Oe);y!==null&&i(et,y.startTime-A)}}function wt(A,y){Ve=!1,Ze&&(Ze=!1,s()),ct=!0;var C=ke;try{for(zt(y),Te=we(Se);Te!==null&&(!(Te.expirationTime>y)||A&&!l());){var j=Te.callback;if(j!==null){Te.callback=null,ke=Te.priorityLevel;var $=j(Te.expirationTime<=y);y=r.unstable_now(),typeof $=="function"?Te.callback=$:Te===we(Se)&&Pe(Se),zt(y)}else Pe(Se);Te=we(Se)}if(Te!==null)var G=!0;else{var fe=we(Oe);fe!==null&&i(et,fe.startTime-y),G=!1}return G}finally{Te=null,ke=C,ct=!1}}function $t(A){switch(A){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var We=c;r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(A){A.callback=null},r.unstable_continueExecution=function(){Ve||ct||(Ve=!0,t(wt))},r.unstable_getCurrentPriorityLevel=function(){return ke},r.unstable_getFirstCallbackNode=function(){return we(Se)},r.unstable_next=function(A){switch(ke){case 1:case 2:case 3:var y=3;break;default:y=ke}var C=ke;ke=y;try{return A()}finally{ke=C}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=We,r.unstable_runWithPriority=function(A,y){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var C=ke;ke=A;try{return y()}finally{ke=C}},r.unstable_scheduleCallback=function(A,y,C){var j=r.unstable_now();if(typeof C=="object"&&C!==null){var $=C.delay;$=typeof $=="number"&&0<$?j+$:j,C=typeof C.timeout=="number"?C.timeout:$t(A)}else C=$t(A),$=j;return C=$+C,A={id:Ut++,callback:y,priorityLevel:A,startTime:$,expirationTime:C,sortIndex:-1},$>j?(A.sortIndex=$,ce(Oe,A),we(Se)===null&&A===we(Oe)&&(Ze?s():Ze=!0,i(et,$-j))):(A.sortIndex=C,ce(Se,A),Ve||ct||(Ve=!0,t(wt))),A},r.unstable_shouldYield=function(){var A=r.unstable_now();zt(A);var y=we(Se);return y!==Te&&Te!==null&&y!==null&&y.callback!==null&&y.startTime<=A&&y.expirationTime<Te.expirationTime||l()},r.unstable_wrapCallback=function(A){var y=ke;return function(){var C=ke;ke=y;try{return A.apply(this,arguments)}finally{ke=C}}}})(ml)),ml}var Td;function hy(){return Td||(Td=1,pl.exports=dy()),pl.exports}/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function py(){if(Cd)return at;Cd=1;var r=Zl(),t=Oh(),i=hy();function s(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!r)throw Error(s(227));function l(e,n,o,a,u,f,d,p,E){var T=Array.prototype.slice.call(arguments,3);try{n.apply(o,T)}catch(R){this.onError(R)}}var c=!1,h=null,m=!1,g=null,_={onError:function(e){c=!0,h=e}};function v(e,n,o,a,u,f,d,p,E){c=!1,h=null,l.apply(_,arguments)}function P(e,n,o,a,u,f,d,p,E){if(v.apply(this,arguments),c){if(c){var T=h;c=!1,h=null}else throw Error(s(198));m||(m=!0,g=T)}}var x=null,M=null,W=null;function ie(e,n,o){var a=e.type||"unknown-event";e.currentTarget=W(o),P(a,n,void 0,e),e.currentTarget=null}var Q=null,L={};function Y(){if(Q)for(var e in L){var n=L[e],o=Q.indexOf(e);if(!(-1<o))throw Error(s(96,e));if(!ue[o]){if(!n.extractEvents)throw Error(s(97,e));ue[o]=n,o=n.eventTypes;for(var a in o){var u=void 0,f=o[a],d=n,p=a;if(D.hasOwnProperty(p))throw Error(s(99,p));D[p]=f;var E=f.phasedRegistrationNames;if(E){for(u in E)E.hasOwnProperty(u)&&de(E[u],d,p);u=!0}else f.registrationName?(de(f.registrationName,d,p),u=!0):u=!1;if(!u)throw Error(s(98,a,e))}}}}function de(e,n,o){if(U[e])throw Error(s(100,e));U[e]=n,ce[e]=n.eventTypes[o].dependencies}var ue=[],D={},U={},ce={};function we(e){var n=!1,o;for(o in e)if(e.hasOwnProperty(o)){var a=e[o];if(!L.hasOwnProperty(o)||L[o]!==a){if(L[o])throw Error(s(102,o));L[o]=a,n=!0}}n&&Y()}var Pe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Le=null,Se=null,Oe=null;function Ut(e){if(e=M(e)){if(typeof Le!="function")throw Error(s(280));var n=e.stateNode;n&&(n=x(n),Le(e.stateNode,e.type,n))}}function Te(e){Se?Oe?Oe.push(e):Oe=[e]:Se=e}function ke(){if(Se){var e=Se,n=Oe;if(Oe=Se=null,Ut(e),n)for(e=0;e<n.length;e++)Ut(n[e])}}function ct(e,n){return e(n)}function Ve(e,n,o,a,u){return e(n,o,a,u)}function Ze(){}var zt=ct,et=!1,wt=!1;function $t(){(Se!==null||Oe!==null)&&(Ze(),ke())}function We(e,n,o){if(wt)return e(n,o);wt=!0;try{return zt(e,n,o)}finally{wt=!1,$t()}}var A=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y=Object.prototype.hasOwnProperty,C={},j={};function $(e){return y.call(j,e)?!0:y.call(C,e)?!1:A.test(e)?j[e]=!0:(C[e]=!0,!1)}function G(e,n,o,a){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fe(e,n,o,a){if(n===null||typeof n>"u"||G(e,n,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ne(e,n,o,a,u,f){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=e,this.type=n,this.sanitizeURL=f}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new ne(e,0,!1,e,null,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];V[n]=new ne(n,1,!1,e[1],null,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new ne(e,2,!1,e.toLowerCase(),null,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new ne(e,2,!1,e,null,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new ne(e,3,!1,e.toLowerCase(),null,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new ne(e,3,!0,e,null,!1)}),["capture","download"].forEach(function(e){V[e]=new ne(e,4,!1,e,null,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new ne(e,6,!1,e,null,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new ne(e,5,!1,e.toLowerCase(),null,!1)});var Ae=/[\-:]([a-z])/g;function tt(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ae,tt);V[n]=new ne(n,1,!1,e,null,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ae,tt);V[n]=new ne(n,1,!1,e,"http://www.w3.org/1999/xlink",!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ae,tt);V[n]=new ne(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new ne(e,1,!1,e.toLowerCase(),null,!1)}),V.xlinkHref=new ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach(function(e){V[e]=new ne(e,1,!1,e.toLowerCase(),null,!0)});var kt=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;kt.hasOwnProperty("ReactCurrentDispatcher")||(kt.ReactCurrentDispatcher={current:null}),kt.hasOwnProperty("ReactCurrentBatchConfig")||(kt.ReactCurrentBatchConfig={suspense:null});function Is(e,n,o,a){var u=V.hasOwnProperty(n)?V[n]:null,f=u!==null?u.type===0:a?!1:!(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N");f||(fe(n,o,u,a)&&(o=null),a||u===null?$(n)&&(o===null?e.removeAttribute(n):e.setAttribute(n,""+o)):u.mustUseProperty?e[u.propertyName]=o===null?u.type===3?!1:"":o:(n=u.attributeName,a=u.attributeNamespace,o===null?e.removeAttribute(n):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,a?e.setAttributeNS(a,n,o):e.setAttribute(n,o))))}var bm=/^(.*)[\\\/]/,qe=typeof Symbol=="function"&&Symbol.for,$i=qe?Symbol.for("react.element"):60103,or=qe?Symbol.for("react.portal"):60106,Ln=qe?Symbol.for("react.fragment"):60107,Ru=qe?Symbol.for("react.strict_mode"):60108,Hi=qe?Symbol.for("react.profiler"):60114,Lu=qe?Symbol.for("react.provider"):60109,Mu=qe?Symbol.for("react.context"):60110,xm=qe?Symbol.for("react.concurrent_mode"):60111,bs=qe?Symbol.for("react.forward_ref"):60112,Vi=qe?Symbol.for("react.suspense"):60113,xs=qe?Symbol.for("react.suspense_list"):60120,Ps=qe?Symbol.for("react.memo"):60115,Du=qe?Symbol.for("react.lazy"):60116,ju=qe?Symbol.for("react.block"):60121,Fu=typeof Symbol=="function"&&Symbol.iterator;function Fr(e){return e===null||typeof e!="object"?null:(e=Fu&&e[Fu]||e["@@iterator"],typeof e=="function"?e:null)}function Pm(e){if(e._status===-1){e._status=0;var n=e._ctor;n=n(),e._result=n,n.then(function(o){e._status===0&&(o=o.default,e._status=1,e._result=o)},function(o){e._status===0&&(e._status=2,e._result=o)})}}function Ht(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case or:return"Portal";case Hi:return"Profiler";case Ru:return"StrictMode";case Vi:return"Suspense";case xs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mu:return"Context.Consumer";case Lu:return"Context.Provider";case bs:var n=e.render;return n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case Ps:return Ht(e.type);case ju:return Ht(e.render);case Du:if(e=e._status===1?e._result:null)return Ht(e)}return null}function Os(e){var n="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var o="";break e;default:var a=e._debugOwner,u=e._debugSource,f=Ht(e.type);o=null,a&&(o=Ht(a.type)),a=f,f="",u?f=" (at "+u.fileName.replace(bm,"")+":"+u.lineNumber+")":o&&(f=" (created by "+o+")"),o=`
    in `+(a||"Unknown")+f}n+=o,e=e.return}while(e);return n}function sn(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Bu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Om(e){var n=Bu(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(d){a=""+d,f.call(this,d)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wi(e){e._valueTracker||(e._valueTracker=Om(e))}function Uu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),a="";return e&&(a=Bu(e)?e.checked?"true":"false":e.value),e=a,e!==o?(n.setValue(e),!0):!1}function As(e,n){var o=n.checked;return t({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function zu(e,n){var o=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;o=sn(n.value!=null?n.value:o),e._wrapperState={initialChecked:a,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function $u(e,n){n=n.checked,n!=null&&Is(e,"checked",n,!1)}function Ns(e,n){$u(e,n);var o=sn(n.value),a=n.type;if(o!=null)a==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Rs(e,n.type,o):n.hasOwnProperty("defaultValue")&&Rs(e,n.type,sn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Hu(e,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,o||n===e.value||(e.value=n),e.defaultValue=n}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function Rs(e,n,o){(n!=="number"||e.ownerDocument.activeElement!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}function Am(e){var n="";return r.Children.forEach(e,function(o){o!=null&&(n+=o)}),n}function Ls(e,n){return e=t({children:void 0},n),(n=Am(n.children))&&(e.children=n),e}function sr(e,n,o,a){if(e=e.options,n){n={};for(var u=0;u<o.length;u++)n["$"+o[u]]=!0;for(o=0;o<e.length;o++)u=n.hasOwnProperty("$"+e[o].value),e[o].selected!==u&&(e[o].selected=u),u&&a&&(e[o].defaultSelected=!0)}else{for(o=""+sn(o),n=null,u=0;u<e.length;u++){if(e[u].value===o){e[u].selected=!0,a&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ms(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return t({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vu(e,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(s(92));if(Array.isArray(o)){if(!(1>=o.length))throw Error(s(93));o=o[0]}n=o}n==null&&(n=""),o=n}e._wrapperState={initialValue:sn(o)}}function Wu(e,n){var o=sn(n.value),a=sn(n.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),n.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),a!=null&&(e.defaultValue=""+a)}function qu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}var Ku={html:"http://www.w3.org/1999/xhtml",svg:"http://www.w3.org/2000/svg"};function Gu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ds(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Gu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,Qu=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,a,u){MSApp.execUnsafeLocalFunction(function(){return e(n,o,a,u)})}:e})(function(e,n){if(e.namespaceURI!==Ku.svg||"innerHTML"in e)e.innerHTML=n;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Br(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}function Ki(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var ar={animationend:Ki("Animation","AnimationEnd"),animationiteration:Ki("Animation","AnimationIteration"),animationstart:Ki("Animation","AnimationStart"),transitionend:Ki("Transition","TransitionEnd")},js={},Yu={};Pe&&(Yu=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function Gi(e){if(js[e])return js[e];if(!ar[e])return e;var n=ar[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in Yu)return js[e]=n[o];return e}var Ju=Gi("animationend"),Xu=Gi("animationiteration"),Zu=Gi("animationstart"),ec=Gi("transitionend"),Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tc=new(typeof WeakMap=="function"?WeakMap:Map);function Fs(e){var n=tc.get(e);return n===void 0&&(n=new Map,tc.set(e,n)),n}function Mn(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.effectTag&1026)!==0&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function nc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function rc(e){if(Mn(e)!==e)throw Error(s(188))}function Nm(e){var n=e.alternate;if(!n){if(n=Mn(e),n===null)throw Error(s(188));return n!==e?null:e}for(var o=e,a=n;;){var u=o.return;if(u===null)break;var f=u.alternate;if(f===null){if(a=u.return,a!==null){o=a;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===o)return rc(u),e;if(f===a)return rc(u),n;f=f.sibling}throw Error(s(188))}if(o.return!==a.return)o=u,a=f;else{for(var d=!1,p=u.child;p;){if(p===o){d=!0,o=u,a=f;break}if(p===a){d=!0,a=u,o=f;break}p=p.sibling}if(!d){for(p=f.child;p;){if(p===o){d=!0,o=f,a=u;break}if(p===a){d=!0,a=f,o=u;break}p=p.sibling}if(!d)throw Error(s(189))}}if(o.alternate!==a)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?e:n}function ic(e){if(e=Nm(e),!e)return null;for(var n=e;;){if(n.tag===5||n.tag===6)return n;if(n.child)n.child.return=n,n=n.child;else{if(n===e)break;for(;!n.sibling;){if(!n.return||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}}return null}function lr(e,n){if(n==null)throw Error(s(30));return e==null?n:Array.isArray(e)?Array.isArray(n)?(e.push.apply(e,n),e):(e.push(n),e):Array.isArray(n)?[e].concat(n):[e,n]}function Bs(e,n,o){Array.isArray(e)?e.forEach(n,o):e&&n.call(o,e)}var zr=null;function Rm(e){if(e){var n=e._dispatchListeners,o=e._dispatchInstances;if(Array.isArray(n))for(var a=0;a<n.length&&!e.isPropagationStopped();a++)ie(e,n[a],o[a]);else n&&ie(e,n,o);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function Qi(e){if(e!==null&&(zr=lr(zr,e)),e=zr,zr=null,e){if(Bs(e,Rm),zr)throw Error(s(95));if(m)throw e=g,m=!1,g=null,e}}function Us(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function oc(e){if(!Pe)return!1;e="on"+e;var n=e in document;return n||(n=document.createElement("div"),n.setAttribute(e,"return;"),n=typeof n[e]=="function"),n}var Yi=[];function sc(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>Yi.length&&Yi.push(e)}function ac(e,n,o,a){if(Yi.length){var u=Yi.pop();return u.topLevelType=e,u.eventSystemFlags=a,u.nativeEvent=n,u.targetInst=o,u}return{topLevelType:e,eventSystemFlags:a,nativeEvent:n,targetInst:o,ancestors:[]}}function lc(e){var n=e.targetInst,o=n;do{if(!o){e.ancestors.push(o);break}var a=o;if(a.tag===3)a=a.stateNode.containerInfo;else{for(;a.return;)a=a.return;a=a.tag!==3?null:a.stateNode.containerInfo}if(!a)break;n=o.tag,n!==5&&n!==6||e.ancestors.push(o),o=Yr(a)}while(o);for(o=0;o<e.ancestors.length;o++){n=e.ancestors[o];var u=Us(e.nativeEvent);a=e.topLevelType;var f=e.nativeEvent,d=e.eventSystemFlags;o===0&&(d|=64);for(var p=null,E=0;E<ue.length;E++){var T=ue[E];T&&(T=T.extractEvents(a,n,f,u,d))&&(p=lr(p,T))}Qi(p)}}function zs(e,n,o){if(!o.has(e)){switch(e){case"scroll":Kr(n,"scroll",!0);break;case"focus":case"blur":Kr(n,"focus",!0),Kr(n,"blur",!0),o.set("blur",null),o.set("focus",null);break;case"cancel":case"close":oc(e)&&Kr(n,e,!0);break;case"invalid":case"submit":case"reset":break;default:Ur.indexOf(e)===-1&&ye(e,n)}o.set(e,null)}}var uc,$s,cc,Hs=!1,It=[],an=null,ln=null,un=null,$r=new Map,Hr=new Map,Vr=[],Vs="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Lm="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function Mm(e,n){var o=Fs(n);Vs.forEach(function(a){zs(a,n,o)}),Lm.forEach(function(a){zs(a,n,o)})}function Ws(e,n,o,a,u){return{blockedOn:e,topLevelType:n,eventSystemFlags:o|32,nativeEvent:u,container:a}}function fc(e,n){switch(e){case"focus":case"blur":an=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":$r.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(n.pointerId)}}function Wr(e,n,o,a,u,f){return e===null||e.nativeEvent!==f?(e=Ws(n,o,a,u,f),n!==null&&(n=Jr(n),n!==null&&$s(n)),e):(e.eventSystemFlags|=a,e)}function Dm(e,n,o,a,u){switch(n){case"focus":return an=Wr(an,e,n,o,a,u),!0;case"dragenter":return ln=Wr(ln,e,n,o,a,u),!0;case"mouseover":return un=Wr(un,e,n,o,a,u),!0;case"pointerover":var f=u.pointerId;return $r.set(f,Wr($r.get(f)||null,e,n,o,a,u)),!0;case"gotpointercapture":return f=u.pointerId,Hr.set(f,Wr(Hr.get(f)||null,e,n,o,a,u)),!0}return!1}function jm(e){var n=Yr(e.target);if(n!==null){var o=Mn(n);if(o!==null){if(n=o.tag,n===13){if(n=nc(o),n!==null){e.blockedOn=n,i.unstable_runWithPriority(e.priority,function(){cc(o)});return}}else if(n===3&&o.stateNode.hydrate){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ji(e){if(e.blockedOn!==null)return!1;var n=Qs(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(n!==null){var o=Jr(n);return o!==null&&$s(o),e.blockedOn=n,!1}return!0}function dc(e,n,o){Ji(e)&&o.delete(n)}function Fm(){for(Hs=!1;0<It.length;){var e=It[0];if(e.blockedOn!==null){e=Jr(e.blockedOn),e!==null&&uc(e);break}var n=Qs(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);n!==null?e.blockedOn=n:It.shift()}an!==null&&Ji(an)&&(an=null),ln!==null&&Ji(ln)&&(ln=null),un!==null&&Ji(un)&&(un=null),$r.forEach(dc),Hr.forEach(dc)}function qr(e,n){e.blockedOn===n&&(e.blockedOn=null,Hs||(Hs=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Fm)))}function hc(e){function n(u){return qr(u,e)}if(0<It.length){qr(It[0],e);for(var o=1;o<It.length;o++){var a=It[o];a.blockedOn===e&&(a.blockedOn=null)}}for(an!==null&&qr(an,e),ln!==null&&qr(ln,e),un!==null&&qr(un,e),$r.forEach(n),Hr.forEach(n),o=0;o<Vr.length;o++)a=Vr[o],a.blockedOn===e&&(a.blockedOn=null);for(;0<Vr.length&&(o=Vr[0],o.blockedOn===null);)jm(o),o.blockedOn===null&&Vr.shift()}var pc={},mc=new Map,qs=new Map,Bm=["abort","abort",Ju,"animationEnd",Xu,"animationIteration",Zu,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",ec,"transitionEnd","waiting","waiting"];function Ks(e,n){for(var o=0;o<e.length;o+=2){var a=e[o],u=e[o+1],f="on"+(u[0].toUpperCase()+u.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[a],eventPriority:n},qs.set(a,n),mc.set(a,f),pc[u]=f}}Ks("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Ks("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Ks(Bm,2);for(var gc="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Gs=0;Gs<gc.length;Gs++)qs.set(gc[Gs],0);var Um=i.unstable_UserBlockingPriority,zm=i.unstable_runWithPriority,Xi=!0;function ye(e,n){Kr(n,e,!1)}function Kr(e,n,o){var a=qs.get(n);switch(a===void 0?2:a){case 0:a=$m.bind(null,n,1,e);break;case 1:a=Hm.bind(null,n,1,e);break;default:a=Zi.bind(null,n,1,e)}o?e.addEventListener(n,a,!0):e.addEventListener(n,a,!1)}function $m(e,n,o,a){et||Ze();var u=Zi,f=et;et=!0;try{Ve(u,e,n,o,a)}finally{(et=f)||$t()}}function Hm(e,n,o,a){zm(Um,Zi.bind(null,e,n,o,a))}function Zi(e,n,o,a){if(Xi)if(0<It.length&&-1<Vs.indexOf(e))e=Ws(null,e,n,o,a),It.push(e);else{var u=Qs(e,n,o,a);if(u===null)fc(e,a);else if(-1<Vs.indexOf(e))e=Ws(u,e,n,o,a),It.push(e);else if(!Dm(u,e,n,o,a)){fc(e,a),e=ac(e,a,null,n);try{We(lc,e)}finally{sc(e)}}}}function Qs(e,n,o,a){if(o=Us(a),o=Yr(o),o!==null){var u=Mn(o);if(u===null)o=null;else{var f=u.tag;if(f===13){if(o=nc(u),o!==null)return o;o=null}else if(f===3){if(u.stateNode.hydrate)return u.tag===3?u.stateNode.containerInfo:null;o=null}else u!==o&&(o=null)}}e=ac(e,a,o,n);try{We(lc,e)}finally{sc(e)}return null}var Gr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vm=["Webkit","ms","Moz","O"];Object.keys(Gr).forEach(function(e){Vm.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Gr[n]=Gr[e]})});function yc(e,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||Gr.hasOwnProperty(e)&&Gr[e]?(""+n).trim():n+"px"}function vc(e,n){e=e.style;for(var o in n)if(n.hasOwnProperty(o)){var a=o.indexOf("--")===0,u=yc(o,n[o],a);o==="float"&&(o="cssFloat"),a?e.setProperty(o,u):e[o]=u}}var Wm=t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ys(e,n){if(n){if(Wm[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,e,""));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(!(typeof n.dangerouslySetInnerHTML=="object"&&"__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62,""))}}function Js(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wc=Ku.html;function Vt(e,n){e=e.nodeType===9||e.nodeType===11?e:e.ownerDocument;var o=Fs(e);n=ce[n];for(var a=0;a<n.length;a++)zs(n[a],e,o)}function eo(){}function Xs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _c(e,n){var o=kc(e);e=0;for(var a;o;){if(o.nodeType===3){if(a=e+o.textContent.length,e<=n&&a>=n)return{node:o,offset:n-e};e=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=kc(o)}}function Ec(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ec(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tc(){for(var e=window,n=Xs();n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=Xs(e.document)}return n}function Zs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Cc="$",Sc="/$",ea="$?",ta="$!",na=null,ra=null;function Ic(e,n){switch(e){case"button":case"input":case"select":case"textarea":return!!n.autoFocus}return!1}function ia(e,n){return e==="textarea"||e==="option"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var oa=typeof setTimeout=="function"?setTimeout:void 0,qm=typeof clearTimeout=="function"?clearTimeout:void 0;function ur(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break}return e}function bc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o===Cc||o===ta||o===ea){if(n===0)return e;n--}else o===Sc&&n++}e=e.previousSibling}return null}var sa=Math.random().toString(36).slice(2),cn="__reactInternalInstance$"+sa,to="__reactEventHandlers$"+sa,Qr="__reactContainere$"+sa;function Yr(e){var n=e[cn];if(n)return n;for(var o=e.parentNode;o;){if(n=o[Qr]||o[cn]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=bc(e);e!==null;){if(o=e[cn])return o;e=bc(e)}return n}e=o,o=e.parentNode}return null}function Jr(e){return e=e[cn]||e[Qr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function aa(e){return e[to]||null}function Wt(e){do e=e.return;while(e&&e.tag!==5);return e||null}function xc(e,n){var o=e.stateNode;if(!o)return null;var a=x(o);if(!a)return null;o=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(s(231,n,typeof o));return o}function Pc(e,n,o){(n=xc(e,o.dispatchConfig.phasedRegistrationNames[n]))&&(o._dispatchListeners=lr(o._dispatchListeners,n),o._dispatchInstances=lr(o._dispatchInstances,e))}function Km(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var n=e._targetInst,o=[];n;)o.push(n),n=Wt(n);for(n=o.length;0<n--;)Pc(o[n],"captured",e);for(n=0;n<o.length;n++)Pc(o[n],"bubbled",e)}}function la(e,n,o){e&&o&&o.dispatchConfig.registrationName&&(n=xc(e,o.dispatchConfig.registrationName))&&(o._dispatchListeners=lr(o._dispatchListeners,n),o._dispatchInstances=lr(o._dispatchInstances,e))}function Gm(e){e&&e.dispatchConfig.registrationName&&la(e._targetInst,null,e)}function cr(e){Bs(e,Km)}var fn=null,ua=null,no=null;function Oc(){if(no)return no;var e,n=ua,o=n.length,a,u="value"in fn?fn.value:fn.textContent,f=u.length;for(e=0;e<o&&n[e]===u[e];e++);var d=o-e;for(a=1;a<=d&&n[o-a]===u[f-a];a++);return no=u.slice(e,1<a?1-a:void 0)}function ro(){return!0}function io(){return!1}function nt(e,n,o,a){this.dispatchConfig=e,this._targetInst=n,this.nativeEvent=o,e=this.constructor.Interface;for(var u in e)e.hasOwnProperty(u)&&((n=e[u])?this[u]=n(o):u==="target"?this.target=a:this[u]=o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ro:io,this.isPropagationStopped=io,this}t(nt.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){this.isPersistent=ro},isPersistent:io,destructor:function(){var e=this.constructor.Interface,n;for(n in e)this[n]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=io,this._dispatchInstances=this._dispatchListeners=null}}),nt.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},nt.extend=function(e){function n(){}function o(){return a.apply(this,arguments)}var a=this;n.prototype=a.prototype;var u=new n;return t(u,o.prototype),o.prototype=u,o.prototype.constructor=o,o.Interface=t({},a.Interface,e),o.extend=a.extend,Ac(o),o},Ac(nt);function Qm(e,n,o,a){if(this.eventPool.length){var u=this.eventPool.pop();return this.call(u,e,n,o,a),u}return new this(e,n,o,a)}function Ym(e){if(!(e instanceof this))throw Error(s(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function Ac(e){e.eventPool=[],e.getPooled=Qm,e.release=Ym}var Jm=nt.extend({data:null}),Xm=nt.extend({data:null}),Zm=[9,13,27,32],ca=Pe&&"CompositionEvent"in window,Xr=null;Pe&&"documentMode"in document&&(Xr=document.documentMode);var eg=Pe&&"TextEvent"in window&&!Xr,Nc=Pe&&(!ca||Xr&&8<Xr&&11>=Xr),Rc=" ",qt={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Lc=!1;function Mc(e,n){switch(e){case"keyup":return Zm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function Dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function tg(e,n){switch(e){case"compositionend":return Dc(n);case"keypress":return n.which!==32?null:(Lc=!0,Rc);case"textInput":return e=n.data,e===Rc&&Lc?null:e;default:return null}}function ng(e,n){if(fr)return e==="compositionend"||!ca&&Mc(e,n)?(e=Oc(),no=ua=fn=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nc&&n.locale!=="ko"?null:n.data;default:return null}}var rg={eventTypes:qt,extractEvents:function(e,n,o,a){var u;if(ca)e:{switch(e){case"compositionstart":var f=qt.compositionStart;break e;case"compositionend":f=qt.compositionEnd;break e;case"compositionupdate":f=qt.compositionUpdate;break e}f=void 0}else fr?Mc(e,o)&&(f=qt.compositionEnd):e==="keydown"&&o.keyCode===229&&(f=qt.compositionStart);return f?(Nc&&o.locale!=="ko"&&(fr||f!==qt.compositionStart?f===qt.compositionEnd&&fr&&(u=Oc()):(fn=a,ua="value"in fn?fn.value:fn.textContent,fr=!0)),f=Jm.getPooled(f,n,o,a),u?f.data=u:(u=Dc(o),u!==null&&(f.data=u)),cr(f),u=f):u=null,(e=eg?tg(e,o):ng(e,o))?(n=Xm.getPooled(qt.beforeInput,n,o,a),n.data=e,cr(n)):n=null,u===null?n:n===null?u:[u,n]}},ig={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ig[e.type]:n==="textarea"}var Fc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Bc(e,n,o){return e=nt.getPooled(Fc.change,e,n,o),e.type="change",Te(o),cr(e),e}var Zr=null,ei=null;function og(e){Qi(e)}function oo(e){var n=Dn(e);if(Uu(n))return e}function sg(e,n){if(e==="change")return n}var fa=!1;Pe&&(fa=oc("input")&&(!document.documentMode||9<document.documentMode));function Uc(){Zr&&(Zr.detachEvent("onpropertychange",zc),ei=Zr=null)}function zc(e){if(e.propertyName==="value"&&oo(ei))if(e=Bc(ei,e,Us(e)),et)Qi(e);else{et=!0;try{ct(og,e)}finally{et=!1,$t()}}}function ag(e,n,o){e==="focus"?(Uc(),Zr=n,ei=o,Zr.attachEvent("onpropertychange",zc)):e==="blur"&&Uc()}function lg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oo(ei)}function ug(e,n){if(e==="click")return oo(n)}function cg(e,n){if(e==="input"||e==="change")return oo(n)}var fg={eventTypes:Fc,_isInputEventSupported:fa,extractEvents:function(e,n,o,a){var u=n?Dn(n):window,f=u.nodeName&&u.nodeName.toLowerCase();if(f==="select"||f==="input"&&u.type==="file")var d=sg;else if(jc(u))if(fa)d=cg;else{d=lg;var p=ag}else(f=u.nodeName)&&f.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(d=ug);if(d&&(d=d(e,n)))return Bc(d,o,a);p&&p(e,u,n),e==="blur"&&(e=u._wrapperState)&&e.controlled&&u.type==="number"&&Rs(u,"number",u.value)}},ti=nt.extend({view:null,detail:null}),dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=dg[e])?!!n[e]:!1}function da(){return hg}var $c=0,Hc=0,Vc=!1,Wc=!1,ni=ti.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:da,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var n=$c;return $c=e.screenX,Vc?e.type==="mousemove"?e.screenX-n:0:(Vc=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var n=Hc;return Hc=e.screenY,Wc?e.type==="mousemove"?e.screenY-n:0:(Wc=!0,0)}}),qc=ni.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),ri={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},pg={eventTypes:ri,extractEvents:function(e,n,o,a,u){var f=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout";if(f&&(u&32)===0&&(o.relatedTarget||o.fromElement)||!d&&!f)return null;if(f=a.window===a?a:(f=a.ownerDocument)?f.defaultView||f.parentWindow:window,d){if(d=n,n=(n=o.relatedTarget||o.toElement)?Yr(n):null,n!==null){var p=Mn(n);(n!==p||n.tag!==5&&n.tag!==6)&&(n=null)}}else d=null;if(d===n)return null;if(e==="mouseout"||e==="mouseover")var E=ni,T=ri.mouseLeave,R=ri.mouseEnter,F="mouse";else(e==="pointerout"||e==="pointerover")&&(E=qc,T=ri.pointerLeave,R=ri.pointerEnter,F="pointer");if(e=d==null?f:Dn(d),f=n==null?f:Dn(n),T=E.getPooled(T,d,o,a),T.type=F+"leave",T.target=e,T.relatedTarget=f,o=E.getPooled(R,n,o,a),o.type=F+"enter",o.target=f,o.relatedTarget=e,a=d,F=n,a&&F)e:{for(E=a,R=F,d=0,e=E;e;e=Wt(e))d++;for(e=0,n=R;n;n=Wt(n))e++;for(;0<d-e;)E=Wt(E),d--;for(;0<e-d;)R=Wt(R),e--;for(;d--;){if(E===R||E===R.alternate)break e;E=Wt(E),R=Wt(R)}E=null}else E=null;for(R=E,E=[];a&&a!==R&&(d=a.alternate,!(d!==null&&d===R));)E.push(a),a=Wt(a);for(a=[];F&&F!==R&&(d=F.alternate,!(d!==null&&d===R));)a.push(F),F=Wt(F);for(F=0;F<E.length;F++)la(E[F],"bubbled",T);for(F=a.length;0<F--;)la(a[F],"captured",o);return(u&64)===0?[T]:[T,o]}};function mg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:mg,gg=Object.prototype.hasOwnProperty;function ii(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++)if(!gg.call(n,o[a])||!jn(e[o[a]],n[o[a]]))return!1;return!0}var yg=Pe&&"documentMode"in document&&11>=document.documentMode,Kc={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},dr=null,ha=null,oi=null,pa=!1;function Gc(e,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;return pa||dr==null||dr!==Xs(o)?null:(o=dr,"selectionStart"in o&&Zs(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oi&&ii(oi,o)?null:(oi=o,e=nt.getPooled(Kc.select,ha,e,n),e.type="select",e.target=dr,cr(e),e))}var vg={eventTypes:Kc,extractEvents:function(e,n,o,a,u,f){if(u=f||(a.window===a?a.document:a.nodeType===9?a:a.ownerDocument),!(f=!u)){e:{u=Fs(u),f=ce.onSelect;for(var d=0;d<f.length;d++)if(!u.has(f[d])){u=!1;break e}u=!0}f=!u}if(f)return null;switch(u=n?Dn(n):window,e){case"focus":(jc(u)||u.contentEditable==="true")&&(dr=u,ha=n,oi=null);break;case"blur":oi=ha=dr=null;break;case"mousedown":pa=!0;break;case"contextmenu":case"mouseup":case"dragend":return pa=!1,Gc(o,a);case"selectionchange":if(yg)break;case"keydown":case"keyup":return Gc(o,a)}return null}},wg=nt.extend({animationName:null,elapsedTime:null,pseudoElement:null}),kg=nt.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_g=ti.extend({relatedTarget:null});function so(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}var Eg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cg=ti.extend({key:function(e){if(e.key){var n=Eg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tg[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:da,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sg=ni.extend({dataTransfer:null}),Ig=ti.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:da}),bg=nt.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),xg=ni.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),Pg={eventTypes:pc,extractEvents:function(e,n,o,a){var u=mc.get(e);if(!u)return null;switch(e){case"keypress":if(so(o)===0)return null;case"keydown":case"keyup":e=Cg;break;case"blur":case"focus":e=_g;break;case"click":if(o.button===2)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=ni;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=Sg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=Ig;break;case Ju:case Xu:case Zu:e=wg;break;case ec:e=bg;break;case"scroll":e=ti;break;case"wheel":e=xg;break;case"copy":case"cut":case"paste":e=kg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=qc;break;default:e=nt}return n=e.getPooled(u,n,o,a),cr(n),n}};if(Q)throw Error(s(101));Q=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),Y();var Og=Jr;x=aa,M=Og,W=Dn,we({SimpleEventPlugin:Pg,EnterLeaveEventPlugin:pg,ChangeEventPlugin:fg,SelectEventPlugin:vg,BeforeInputEventPlugin:rg});var ma=[],hr=-1;function ge(e){0>hr||(e.current=ma[hr],ma[hr]=null,hr--)}function Ce(e,n){hr++,ma[hr]=e.current,e.current=n}var dn={},De={current:dn},Ke={current:!1},Fn=dn;function pr(e,n){var o=e.type.contextTypes;if(!o)return dn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var u={},f;for(f in o)u[f]=n[f];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),u}function Ge(e){return e=e.childContextTypes,e!=null}function ao(){ge(Ke),ge(De)}function Qc(e,n,o){if(De.current!==dn)throw Error(s(168));Ce(De,n),Ce(Ke,o)}function Yc(e,n,o){var a=e.stateNode;if(e=n.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var u in a)if(!(u in e))throw Error(s(108,Ht(n)||"Unknown",u));return t({},o,{},a)}function lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Fn=De.current,Ce(De,e),Ce(Ke,Ke.current),!0}function Jc(e,n,o){var a=e.stateNode;if(!a)throw Error(s(169));o?(e=Yc(e,n,Fn),a.__reactInternalMemoizedMergedChildContext=e,ge(Ke),ge(De),Ce(De,e)):ge(Ke),Ce(Ke,o)}var Ag=i.unstable_runWithPriority,ga=i.unstable_scheduleCallback,Xc=i.unstable_cancelCallback,Zc=i.unstable_requestPaint,ya=i.unstable_now,Ng=i.unstable_getCurrentPriorityLevel,uo=i.unstable_ImmediatePriority,ef=i.unstable_UserBlockingPriority,tf=i.unstable_NormalPriority,nf=i.unstable_LowPriority,rf=i.unstable_IdlePriority,of={},Rg=i.unstable_shouldYield,Lg=Zc!==void 0?Zc:function(){},Kt=null,co=null,va=!1,sf=ya(),ft=1e4>sf?ya:function(){return ya()-sf};function fo(){switch(Ng()){case uo:return 99;case ef:return 98;case tf:return 97;case nf:return 96;case rf:return 95;default:throw Error(s(332))}}function af(e){switch(e){case 99:return uo;case 98:return ef;case 97:return tf;case 96:return nf;case 95:return rf;default:throw Error(s(332))}}function hn(e,n){return e=af(e),Ag(e,n)}function lf(e,n,o){return e=af(e),ga(e,n,o)}function uf(e){return Kt===null?(Kt=[e],co=ga(uo,cf)):Kt.push(e),of}function bt(){if(co!==null){var e=co;co=null,Xc(e)}cf()}function cf(){if(!va&&Kt!==null){va=!0;var e=0;try{var n=Kt;hn(99,function(){for(;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}}),Kt=null}catch(o){throw Kt!==null&&(Kt=Kt.slice(e+1)),ga(uo,bt),o}finally{va=!1}}}function ho(e,n,o){return o/=10,1073741821-(((1073741821-e+n/10)/o|0)+1)*o}function _t(e,n){if(e&&e.defaultProps){n=t({},n),e=e.defaultProps;for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}var po={current:null},mo=null,mr=null,go=null;function wa(){go=mr=mo=null}function ka(e){var n=po.current;ge(po),e.type._context._currentValue=n}function ff(e,n){for(;e!==null;){var o=e.alternate;if(e.childExpirationTime<n)e.childExpirationTime=n,o!==null&&o.childExpirationTime<n&&(o.childExpirationTime=n);else if(o!==null&&o.childExpirationTime<n)o.childExpirationTime=n;else break;e=e.return}}function gr(e,n){mo=e,go=mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.expirationTime>=n&&(Pt=!0),e.firstContext=null)}function dt(e,n){if(go!==e&&n!==!1&&n!==0)if((typeof n!="number"||n===1073741823)&&(go=e,n=1073741823),n={context:e,observedBits:n,next:null},mr===null){if(mo===null)throw Error(s(308));mr=n,mo.dependencies={expirationTime:0,firstContext:n,responders:null}}else mr=mr.next=n;return e._currentValue}var pn=!1;function _a(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function Ea(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}function mn(e,n){return e={expirationTime:e,suspenseConfig:n,tag:0,payload:null,callback:null,next:null},e.next=e}function gn(e,n){if(e=e.updateQueue,e!==null){e=e.shared;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}}function df(e,n){var o=e.alternate;o!==null&&Ea(o,e),e=e.updateQueue,o=e.baseQueue,o===null?(e.baseQueue=n.next=n,n.next=n):(n.next=o.next,o.next=n)}function si(e,n,o,a){var u=e.updateQueue;pn=!1;var f=u.baseQueue,d=u.shared.pending;if(d!==null){if(f!==null){var p=f.next;f.next=d.next,d.next=p}f=d,u.shared.pending=null,p=e.alternate,p!==null&&(p=p.updateQueue,p!==null&&(p.baseQueue=d))}if(f!==null){p=f.next;var E=u.baseState,T=0,R=null,F=null,te=null;if(p!==null){var oe=p;do{if(d=oe.expirationTime,d<a){var pt={expirationTime:oe.expirationTime,suspenseConfig:oe.suspenseConfig,tag:oe.tag,payload:oe.payload,callback:oe.callback,next:null};te===null?(F=te=pt,R=E):te=te.next=pt,d>T&&(T=d)}else{te!==null&&(te=te.next={expirationTime:1073741823,suspenseConfig:oe.suspenseConfig,tag:oe.tag,payload:oe.payload,callback:oe.callback,next:null}),ld(d,oe.suspenseConfig);e:{var Me=e,k=oe;switch(d=n,pt=o,k.tag){case 1:if(Me=k.payload,typeof Me=="function"){E=Me.call(pt,E,d);break e}E=Me;break e;case 3:Me.effectTag=Me.effectTag&-4097|64;case 0:if(Me=k.payload,d=typeof Me=="function"?Me.call(pt,E,d):Me,d==null)break e;E=t({},E,d);break e;case 2:pn=!0}}oe.callback!==null&&(e.effectTag|=32,d=u.effects,d===null?u.effects=[oe]:d.push(oe))}if(oe=oe.next,oe===null||oe===p){if(d=u.shared.pending,d===null)break;oe=f.next=d.next,d.next=p,u.baseQueue=f=d,u.shared.pending=null}}while(!0)}te===null?R=E:te.next=F,u.baseState=R,u.baseQueue=te,Ho(T),e.expirationTime=T,e.memoizedState=E}}function hf(e,n,o){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],u=a.callback;if(u!==null){if(a.callback=null,a=u,u=o,typeof a!="function")throw Error(s(191,a));a.call(u)}}}var ai=kt.ReactCurrentBatchConfig,pf=new r.Component().refs;function yo(e,n,o,a){n=e.memoizedState,o=o(a,n),o=o==null?n:t({},n,o),e.memoizedState=o,e.expirationTime===0&&(e.updateQueue.baseState=o)}var vo={isMounted:function(e){return(e=e._reactInternalFiber)?Mn(e)===e:!1},enqueueSetState:function(e,n,o){e=e._reactInternalFiber;var a=At(),u=ai.suspense;a=Vn(a,e,u),u=mn(a,u),u.payload=n,o!=null&&(u.callback=o),gn(e,u),kn(e,a)},enqueueReplaceState:function(e,n,o){e=e._reactInternalFiber;var a=At(),u=ai.suspense;a=Vn(a,e,u),u=mn(a,u),u.tag=1,u.payload=n,o!=null&&(u.callback=o),gn(e,u),kn(e,a)},enqueueForceUpdate:function(e,n){e=e._reactInternalFiber;var o=At(),a=ai.suspense;o=Vn(o,e,a),a=mn(o,a),a.tag=2,n!=null&&(a.callback=n),gn(e,a),kn(e,o)}};function mf(e,n,o,a,u,f,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,f,d):n.prototype&&n.prototype.isPureReactComponent?!ii(o,a)||!ii(u,f):!0}function gf(e,n,o){var a=!1,u=dn,f=n.contextType;return typeof f=="object"&&f!==null?f=dt(f):(u=Ge(n)?Fn:De.current,a=n.contextTypes,f=(a=a!=null)?pr(e,u):dn),n=new n(o,f),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=vo,e.stateNode=n,n._reactInternalFiber=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=f),n}function yf(e,n,o,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,a),n.state!==e&&vo.enqueueReplaceState(n,n.state,null)}function Ta(e,n,o,a){var u=e.stateNode;u.props=o,u.state=e.memoizedState,u.refs=pf,_a(e);var f=n.contextType;typeof f=="object"&&f!==null?u.context=dt(f):(f=Ge(n)?Fn:De.current,u.context=pr(e,f)),si(e,o,u,a),u.state=e.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(yo(e,n,f,o),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&vo.enqueueReplaceState(u,u.state,null),si(e,o,u,a),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.effectTag|=4)}var wo=Array.isArray;function li(e,n,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(s(309));var a=o.stateNode}if(!a)throw Error(s(147,e));var u=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===u?n.ref:(n=function(f){var d=a.refs;d===pf&&(d=a.refs={}),f===null?delete d[u]:d[u]=f},n._stringRef=u,n)}if(typeof e!="string")throw Error(s(284));if(!o._owner)throw Error(s(290,e))}return e}function ko(e,n){if(e.type!=="textarea")throw Error(s(31,Object.prototype.toString.call(n)==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":n,""))}function vf(e){function n(k,w){if(e){var S=k.lastEffect;S!==null?(S.nextEffect=w,k.lastEffect=w):k.firstEffect=k.lastEffect=w,w.nextEffect=null,w.effectTag=8}}function o(k,w){if(!e)return null;for(;w!==null;)n(k,w),w=w.sibling;return null}function a(k,w){for(k=new Map;w!==null;)w.key!==null?k.set(w.key,w):k.set(w.index,w),w=w.sibling;return k}function u(k,w){return k=Gn(k,w),k.index=0,k.sibling=null,k}function f(k,w,S){return k.index=S,e?(S=k.alternate,S!==null?(S=S.index,S<w?(k.effectTag=2,w):S):(k.effectTag=2,w)):w}function d(k){return e&&k.alternate===null&&(k.effectTag=2),k}function p(k,w,S,O){return w===null||w.tag!==6?(w=il(S,k.mode,O),w.return=k,w):(w=u(w,S),w.return=k,w)}function E(k,w,S,O){return w!==null&&w.elementType===S.type?(O=u(w,S.props),O.ref=li(k,w,S),O.return=k,O):(O=Vo(S.type,S.key,S.props,null,k.mode,O),O.ref=li(k,w,S),O.return=k,O)}function T(k,w,S,O){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=ol(S,k.mode,O),w.return=k,w):(w=u(w,S.children||[]),w.return=k,w)}function R(k,w,S,O,N){return w===null||w.tag!==7?(w=_n(S,k.mode,O,N),w.return=k,w):(w=u(w,S),w.return=k,w)}function F(k,w,S){if(typeof w=="string"||typeof w=="number")return w=il(""+w,k.mode,S),w.return=k,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case $i:return S=Vo(w.type,w.key,w.props,null,k.mode,S),S.ref=li(k,null,w),S.return=k,S;case or:return w=ol(w,k.mode,S),w.return=k,w}if(wo(w)||Fr(w))return w=_n(w,k.mode,S,null),w.return=k,w;ko(k,w)}return null}function te(k,w,S,O){var N=w!==null?w.key:null;if(typeof S=="string"||typeof S=="number")return N!==null?null:p(k,w,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case $i:return S.key===N?S.type===Ln?R(k,w,S.props.children,O,N):E(k,w,S,O):null;case or:return S.key===N?T(k,w,S,O):null}if(wo(S)||Fr(S))return N!==null?null:R(k,w,S,O,null);ko(k,S)}return null}function oe(k,w,S,O,N){if(typeof O=="string"||typeof O=="number")return k=k.get(S)||null,p(w,k,""+O,N);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case $i:return k=k.get(O.key===null?S:O.key)||null,O.type===Ln?R(w,k,O.props.children,N,O.key):E(w,k,O,N);case or:return k=k.get(O.key===null?S:O.key)||null,T(w,k,O,N)}if(wo(O)||Fr(O))return k=k.get(S)||null,R(w,k,O,N,null);ko(w,O)}return null}function pt(k,w,S,O){for(var N=null,B=null,H=w,re=w=0,ve=null;H!==null&&re<S.length;re++){H.index>re?(ve=H,H=null):ve=H.sibling;var Z=te(k,H,S[re],O);if(Z===null){H===null&&(H=ve);break}e&&H&&Z.alternate===null&&n(k,H),w=f(Z,w,re),B===null?N=Z:B.sibling=Z,B=Z,H=ve}if(re===S.length)return o(k,H),N;if(H===null){for(;re<S.length;re++)H=F(k,S[re],O),H!==null&&(w=f(H,w,re),B===null?N=H:B.sibling=H,B=H);return N}for(H=a(k,H);re<S.length;re++)ve=oe(H,k,re,S[re],O),ve!==null&&(e&&ve.alternate!==null&&H.delete(ve.key===null?re:ve.key),w=f(ve,w,re),B===null?N=ve:B.sibling=ve,B=ve);return e&&H.forEach(function(En){return n(k,En)}),N}function Me(k,w,S,O){var N=Fr(S);if(typeof N!="function")throw Error(s(150));if(S=N.call(S),S==null)throw Error(s(151));for(var B=N=null,H=w,re=w=0,ve=null,Z=S.next();H!==null&&!Z.done;re++,Z=S.next()){H.index>re?(ve=H,H=null):ve=H.sibling;var En=te(k,H,Z.value,O);if(En===null){H===null&&(H=ve);break}e&&H&&En.alternate===null&&n(k,H),w=f(En,w,re),B===null?N=En:B.sibling=En,B=En,H=ve}if(Z.done)return o(k,H),N;if(H===null){for(;!Z.done;re++,Z=S.next())Z=F(k,Z.value,O),Z!==null&&(w=f(Z,w,re),B===null?N=Z:B.sibling=Z,B=Z);return N}for(H=a(k,H);!Z.done;re++,Z=S.next())Z=oe(H,k,re,Z.value,O),Z!==null&&(e&&Z.alternate!==null&&H.delete(Z.key===null?re:Z.key),w=f(Z,w,re),B===null?N=Z:B.sibling=Z,B=Z);return e&&H.forEach(function(ly){return n(k,ly)}),N}return function(k,w,S,O){var N=typeof S=="object"&&S!==null&&S.type===Ln&&S.key===null;N&&(S=S.props.children);var B=typeof S=="object"&&S!==null;if(B)switch(S.$$typeof){case $i:e:{for(B=S.key,N=w;N!==null;){if(N.key===B){switch(N.tag){case 7:if(S.type===Ln){o(k,N.sibling),w=u(N,S.props.children),w.return=k,k=w;break e}break;default:if(N.elementType===S.type){o(k,N.sibling),w=u(N,S.props),w.ref=li(k,N,S),w.return=k,k=w;break e}}o(k,N);break}else n(k,N);N=N.sibling}S.type===Ln?(w=_n(S.props.children,k.mode,O,S.key),w.return=k,k=w):(O=Vo(S.type,S.key,S.props,null,k.mode,O),O.ref=li(k,w,S),O.return=k,k=O)}return d(k);case or:e:{for(N=S.key;w!==null;){if(w.key===N)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){o(k,w.sibling),w=u(w,S.children||[]),w.return=k,k=w;break e}else{o(k,w);break}else n(k,w);w=w.sibling}w=ol(S,k.mode,O),w.return=k,k=w}return d(k)}if(typeof S=="string"||typeof S=="number")return S=""+S,w!==null&&w.tag===6?(o(k,w.sibling),w=u(w,S),w.return=k,k=w):(o(k,w),w=il(S,k.mode,O),w.return=k,k=w),d(k);if(wo(S))return pt(k,w,S,O);if(Fr(S))return Me(k,w,S,O);if(B&&ko(k,S),typeof S>"u"&&!N)switch(k.tag){case 1:case 0:throw k=k.type,Error(s(152,k.displayName||k.name||"Component"))}return o(k,w)}}var yr=vf(!0),Ca=vf(!1),ui={},xt={current:ui},ci={current:ui},fi={current:ui};function Bn(e){if(e===ui)throw Error(s(174));return e}function Sa(e,n){switch(Ce(fi,n),Ce(ci,e),Ce(xt,ui),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ds(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ds(n,e)}ge(xt),Ce(xt,n)}function vr(){ge(xt),ge(ci),ge(fi)}function wf(e){Bn(fi.current);var n=Bn(xt.current),o=Ds(n,e.type);n!==o&&(Ce(ci,e),Ce(xt,o))}function Ia(e){ci.current===e&&(ge(xt),ge(ci))}var _e={current:0};function _o(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data===ea||o.data===ta))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.effectTag&64)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ba(e,n){return{responder:e,props:n}}var Eo=kt.ReactCurrentDispatcher,ht=kt.ReactCurrentBatchConfig,yn=0,Ie=null,je=null,Fe=null,To=!1;function rt(){throw Error(s(321))}function xa(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!jn(e[o],n[o]))return!1;return!0}function Pa(e,n,o,a,u,f){if(yn=f,Ie=n,n.memoizedState=null,n.updateQueue=null,n.expirationTime=0,Eo.current=e===null||e.memoizedState===null?Mg:Dg,e=o(a,u),n.expirationTime===yn){f=0;do{if(n.expirationTime=0,!(25>f))throw Error(s(301));f+=1,Fe=je=null,n.updateQueue=null,Eo.current=jg,e=o(a,u)}while(n.expirationTime===yn)}if(Eo.current=xo,n=je!==null&&je.next!==null,yn=0,Fe=je=Ie=null,To=!1,n)throw Error(s(300));return e}function wr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ie.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function kr(){if(je===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=Fe===null?Ie.memoizedState:Fe.next;if(n!==null)Fe=n,je=e;else{if(e===null)throw Error(s(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Fe===null?Ie.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Un(e,n){return typeof n=="function"?n(e):n}function Co(e){var n=kr(),o=n.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=e;var a=je,u=a.baseQueue,f=o.pending;if(f!==null){if(u!==null){var d=u.next;u.next=f.next,f.next=d}a.baseQueue=u=f,o.pending=null}if(u!==null){u=u.next,a=a.baseState;var p=d=f=null,E=u;do{var T=E.expirationTime;if(T<yn){var R={expirationTime:E.expirationTime,suspenseConfig:E.suspenseConfig,action:E.action,eagerReducer:E.eagerReducer,eagerState:E.eagerState,next:null};p===null?(d=p=R,f=a):p=p.next=R,T>Ie.expirationTime&&(Ie.expirationTime=T,Ho(T))}else p!==null&&(p=p.next={expirationTime:1073741823,suspenseConfig:E.suspenseConfig,action:E.action,eagerReducer:E.eagerReducer,eagerState:E.eagerState,next:null}),ld(T,E.suspenseConfig),a=E.eagerReducer===e?E.eagerState:e(a,E.action);E=E.next}while(E!==null&&E!==u);p===null?f=a:p.next=d,jn(a,n.memoizedState)||(Pt=!0),n.memoizedState=a,n.baseState=f,n.baseQueue=p,o.lastRenderedState=a}return[n.memoizedState,o.dispatch]}function So(e){var n=kr(),o=n.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=e;var a=o.dispatch,u=o.pending,f=n.memoizedState;if(u!==null){o.pending=null;var d=u=u.next;do f=e(f,d.action),d=d.next;while(d!==u);jn(f,n.memoizedState)||(Pt=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),o.lastRenderedState=f}return[f,a]}function Oa(e){var n=wr();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e=n.queue={pending:null,dispatch:null,lastRenderedReducer:Un,lastRenderedState:e},e=e.dispatch=bf.bind(null,Ie,e),[n.memoizedState,e]}function Aa(e,n,o,a){return e={tag:e,create:n,destroy:o,deps:a,next:null},n=Ie.updateQueue,n===null?(n={lastEffect:null},Ie.updateQueue=n,n.lastEffect=e.next=e):(o=n.lastEffect,o===null?n.lastEffect=e.next=e:(a=o.next,o.next=e,e.next=a,n.lastEffect=e)),e}function kf(){return kr().memoizedState}function Na(e,n,o,a){var u=wr();Ie.effectTag|=e,u.memoizedState=Aa(1|n,o,void 0,a===void 0?null:a)}function Ra(e,n,o,a){var u=kr();a=a===void 0?null:a;var f=void 0;if(je!==null){var d=je.memoizedState;if(f=d.destroy,a!==null&&xa(a,d.deps)){Aa(n,o,f,a);return}}Ie.effectTag|=e,u.memoizedState=Aa(1|n,o,f,a)}function _f(e,n){return Na(516,4,e,n)}function Io(e,n){return Ra(516,4,e,n)}function Ef(e,n){return Ra(4,2,e,n)}function Tf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Cf(e,n,o){return o=o!=null?o.concat([e]):null,Ra(4,2,Tf.bind(null,n,e),o)}function La(){}function Sf(e,n){return wr().memoizedState=[e,n===void 0?null:n],e}function bo(e,n){var o=kr();n=n===void 0?null:n;var a=o.memoizedState;return a!==null&&n!==null&&xa(n,a[1])?a[0]:(o.memoizedState=[e,n],e)}function If(e,n){var o=kr();n=n===void 0?null:n;var a=o.memoizedState;return a!==null&&n!==null&&xa(n,a[1])?a[0]:(e=e(),o.memoizedState=[e,n],e)}function Ma(e,n,o){var a=fo();hn(98>a?98:a,function(){e(!0)}),hn(97<a?97:a,function(){var u=ht.suspense;ht.suspense=n===void 0?null:n;try{e(!1),o()}finally{ht.suspense=u}})}function bf(e,n,o){var a=At(),u=ai.suspense;a=Vn(a,e,u),u={expirationTime:a,suspenseConfig:u,action:o,eagerReducer:null,eagerState:null,next:null};var f=n.pending;if(f===null?u.next=u:(u.next=f.next,f.next=u),n.pending=u,f=e.alternate,e===Ie||f!==null&&f===Ie)To=!0,u.expirationTime=yn,Ie.expirationTime=yn;else{if(e.expirationTime===0&&(f===null||f.expirationTime===0)&&(f=n.lastRenderedReducer,f!==null))try{var d=n.lastRenderedState,p=f(d,o);if(u.eagerReducer=f,u.eagerState=p,jn(p,d))return}catch{}finally{}kn(e,a)}}var xo={readContext:dt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useResponder:rt,useDeferredValue:rt,useTransition:rt},Mg={readContext:dt,useCallback:Sf,useContext:dt,useEffect:_f,useImperativeHandle:function(e,n,o){return o=o!=null?o.concat([e]):null,Na(4,2,Tf.bind(null,n,e),o)},useLayoutEffect:function(e,n){return Na(4,2,e,n)},useMemo:function(e,n){var o=wr();return n=n===void 0?null:n,e=e(),o.memoizedState=[e,n],e},useReducer:function(e,n,o){var a=wr();return n=o!==void 0?o(n):n,a.memoizedState=a.baseState=n,e=a.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},e=e.dispatch=bf.bind(null,Ie,e),[a.memoizedState,e]},useRef:function(e){var n=wr();return e={current:e},n.memoizedState=e},useState:Oa,useDebugValue:La,useResponder:ba,useDeferredValue:function(e,n){var o=Oa(e),a=o[0],u=o[1];return _f(function(){var f=ht.suspense;ht.suspense=n===void 0?null:n;try{u(e)}finally{ht.suspense=f}},[e,n]),a},useTransition:function(e){var n=Oa(!1),o=n[0];return n=n[1],[Sf(Ma.bind(null,n,e),[n,e]),o]}},Dg={readContext:dt,useCallback:bo,useContext:dt,useEffect:Io,useImperativeHandle:Cf,useLayoutEffect:Ef,useMemo:If,useReducer:Co,useRef:kf,useState:function(){return Co(Un)},useDebugValue:La,useResponder:ba,useDeferredValue:function(e,n){var o=Co(Un),a=o[0],u=o[1];return Io(function(){var f=ht.suspense;ht.suspense=n===void 0?null:n;try{u(e)}finally{ht.suspense=f}},[e,n]),a},useTransition:function(e){var n=Co(Un),o=n[0];return n=n[1],[bo(Ma.bind(null,n,e),[n,e]),o]}},jg={readContext:dt,useCallback:bo,useContext:dt,useEffect:Io,useImperativeHandle:Cf,useLayoutEffect:Ef,useMemo:If,useReducer:So,useRef:kf,useState:function(){return So(Un)},useDebugValue:La,useResponder:ba,useDeferredValue:function(e,n){var o=So(Un),a=o[0],u=o[1];return Io(function(){var f=ht.suspense;ht.suspense=n===void 0?null:n;try{u(e)}finally{ht.suspense=f}},[e,n]),a},useTransition:function(e){var n=So(Un),o=n[0];return n=n[1],[bo(Ma.bind(null,n,e),[n,e]),o]}},Gt=null,vn=null,zn=!1;function xf(e,n){var o=Nt(5,null,null,0);o.elementType="DELETED",o.type="DELETED",o.stateNode=n,o.return=e,o.effectTag=8,e.lastEffect!==null?(e.lastEffect.nextEffect=o,e.lastEffect=o):e.firstEffect=e.lastEffect=o}function Pf(e,n){switch(e.tag){case 5:var o=e.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,!0):!1;case 13:return!1;default:return!1}}function Da(e){if(zn){var n=vn;if(n){var o=n;if(!Pf(e,n)){if(n=ur(o.nextSibling),!n||!Pf(e,n)){e.effectTag=e.effectTag&-1025|2,zn=!1,Gt=e;return}xf(Gt,o)}Gt=e,vn=ur(n.firstChild)}else e.effectTag=e.effectTag&-1025|2,zn=!1,Gt=e}}function Of(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Gt=e}function Po(e){if(e!==Gt)return!1;if(!zn)return Of(e),zn=!0,!1;var n=e.type;if(e.tag!==5||n!=="head"&&n!=="body"&&!ia(n,e.memoizedProps))for(n=vn;n;)xf(e,n),n=ur(n.nextSibling);if(Of(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var o=e.data;if(o===Sc){if(n===0){vn=ur(e.nextSibling);break e}n--}else o!==Cc&&o!==ta&&o!==ea||n++}e=e.nextSibling}vn=null}}else vn=Gt?ur(e.stateNode.nextSibling):null;return!0}function ja(){vn=Gt=null,zn=!1}var Fg=kt.ReactCurrentOwner,Pt=!1;function it(e,n,o,a){n.child=e===null?Ca(n,null,o,a):yr(n,e.child,o,a)}function Af(e,n,o,a,u){o=o.render;var f=n.ref;return gr(n,u),a=Pa(e,n,o,a,f,u),e!==null&&!Pt?(n.updateQueue=e.updateQueue,n.effectTag&=-517,e.expirationTime<=u&&(e.expirationTime=0),Qt(e,n,u)):(n.effectTag|=1,it(e,n,a,u),n.child)}function Nf(e,n,o,a,u,f){if(e===null){var d=o.type;return typeof d=="function"&&!rl(d)&&d.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=d,Rf(e,n,d,a,u,f)):(e=Vo(o.type,null,a,null,n.mode,f),e.ref=n.ref,e.return=n,n.child=e)}return d=e.child,u<f&&(u=d.memoizedProps,o=o.compare,o=o!==null?o:ii,o(u,a)&&e.ref===n.ref)?Qt(e,n,f):(n.effectTag|=1,e=Gn(d,a),e.ref=n.ref,e.return=n,n.child=e)}function Rf(e,n,o,a,u,f){return e!==null&&ii(e.memoizedProps,a)&&e.ref===n.ref&&(Pt=!1,u<f)?(n.expirationTime=e.expirationTime,Qt(e,n,f)):Fa(e,n,o,a,f)}function Lf(e,n){var o=n.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(n.effectTag|=128)}function Fa(e,n,o,a,u){var f=Ge(o)?Fn:De.current;return f=pr(n,f),gr(n,u),o=Pa(e,n,o,a,f,u),e!==null&&!Pt?(n.updateQueue=e.updateQueue,n.effectTag&=-517,e.expirationTime<=u&&(e.expirationTime=0),Qt(e,n,u)):(n.effectTag|=1,it(e,n,o,u),n.child)}function Mf(e,n,o,a,u){if(Ge(o)){var f=!0;lo(n)}else f=!1;if(gr(n,u),n.stateNode===null)e!==null&&(e.alternate=null,n.alternate=null,n.effectTag|=2),gf(n,o,a),Ta(n,o,a,u),a=!0;else if(e===null){var d=n.stateNode,p=n.memoizedProps;d.props=p;var E=d.context,T=o.contextType;typeof T=="object"&&T!==null?T=dt(T):(T=Ge(o)?Fn:De.current,T=pr(n,T));var R=o.getDerivedStateFromProps,F=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function";F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==a||E!==T)&&yf(n,d,a,T),pn=!1;var te=n.memoizedState;d.state=te,si(n,a,d,u),E=n.memoizedState,p!==a||te!==E||Ke.current||pn?(typeof R=="function"&&(yo(n,o,R,a),E=n.memoizedState),(p=pn||mf(n,o,p,a,te,E,T))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.effectTag|=4)):(typeof d.componentDidMount=="function"&&(n.effectTag|=4),n.memoizedProps=a,n.memoizedState=E),d.props=a,d.state=E,d.context=T,a=p):(typeof d.componentDidMount=="function"&&(n.effectTag|=4),a=!1)}else d=n.stateNode,Ea(e,n),p=n.memoizedProps,d.props=n.type===n.elementType?p:_t(n.type,p),E=d.context,T=o.contextType,typeof T=="object"&&T!==null?T=dt(T):(T=Ge(o)?Fn:De.current,T=pr(n,T)),R=o.getDerivedStateFromProps,(F=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==a||E!==T)&&yf(n,d,a,T),pn=!1,E=n.memoizedState,d.state=E,si(n,a,d,u),te=n.memoizedState,p!==a||E!==te||Ke.current||pn?(typeof R=="function"&&(yo(n,o,R,a),te=n.memoizedState),(R=pn||mf(n,o,p,a,E,te,T))?(F||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(a,te,T),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(a,te,T)),typeof d.componentDidUpdate=="function"&&(n.effectTag|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.effectTag|=256)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&E===e.memoizedState||(n.effectTag|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&E===e.memoizedState||(n.effectTag|=256),n.memoizedProps=a,n.memoizedState=te),d.props=a,d.state=te,d.context=T,a=R):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&E===e.memoizedState||(n.effectTag|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&E===e.memoizedState||(n.effectTag|=256),a=!1);return Ba(e,n,o,a,f,u)}function Ba(e,n,o,a,u,f){Lf(e,n);var d=(n.effectTag&64)!==0;if(!a&&!d)return u&&Jc(n,o,!1),Qt(e,n,f);a=n.stateNode,Fg.current=n;var p=d&&typeof o.getDerivedStateFromError!="function"?null:a.render();return n.effectTag|=1,e!==null&&d?(n.child=yr(n,e.child,null,f),n.child=yr(n,null,p,f)):it(e,n,p,f),n.memoizedState=a.state,u&&Jc(n,o,!0),n.child}function Df(e){var n=e.stateNode;n.pendingContext?Qc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Qc(e,n.context,!1),Sa(e,n.containerInfo)}var Ua={dehydrated:null,retryTime:0};function jf(e,n,o){var a=n.mode,u=n.pendingProps,f=_e.current,d=!1,p;if((p=(n.effectTag&64)!==0)||(p=(f&2)!==0&&(e===null||e.memoizedState!==null)),p?(d=!0,n.effectTag&=-65):e!==null&&e.memoizedState===null||u.fallback===void 0||u.unstable_avoidThisFallback===!0||(f|=1),Ce(_e,f&1),e===null){if(u.fallback!==void 0&&Da(n),d){if(d=u.fallback,u=_n(null,a,0,null),u.return=n,(n.mode&2)===0)for(e=n.memoizedState!==null?n.child.child:n.child,u.child=e;e!==null;)e.return=u,e=e.sibling;return o=_n(d,a,o,null),o.return=n,u.sibling=o,n.memoizedState=Ua,n.child=u,o}return a=u.children,n.memoizedState=null,n.child=Ca(n,null,a,o)}if(e.memoizedState!==null){if(e=e.child,a=e.sibling,d){if(u=u.fallback,o=Gn(e,e.pendingProps),o.return=n,(n.mode&2)===0&&(d=n.memoizedState!==null?n.child.child:n.child,d!==e.child))for(o.child=d;d!==null;)d.return=o,d=d.sibling;return a=Gn(a,u),a.return=n,o.sibling=a,o.childExpirationTime=0,n.memoizedState=Ua,n.child=o,a}return o=yr(n,e.child,u.children,o),n.memoizedState=null,n.child=o}if(e=e.child,d){if(d=u.fallback,u=_n(null,a,0,null),u.return=n,u.child=e,e!==null&&(e.return=u),(n.mode&2)===0)for(e=n.memoizedState!==null?n.child.child:n.child,u.child=e;e!==null;)e.return=u,e=e.sibling;return o=_n(d,a,o,null),o.return=n,u.sibling=o,o.effectTag|=2,u.childExpirationTime=0,n.memoizedState=Ua,n.child=u,o}return n.memoizedState=null,n.child=yr(n,e,u.children,o)}function Ff(e,n){e.expirationTime<n&&(e.expirationTime=n);var o=e.alternate;o!==null&&o.expirationTime<n&&(o.expirationTime=n),ff(e.return,n)}function za(e,n,o,a,u,f){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:o,tailExpiration:0,tailMode:u,lastEffect:f}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=o,d.tailExpiration=0,d.tailMode=u,d.lastEffect=f)}function Bf(e,n,o){var a=n.pendingProps,u=a.revealOrder,f=a.tail;if(it(e,n,a.children,o),a=_e.current,(a&2)!==0)a=a&1|2,n.effectTag|=64;else{if(e!==null&&(e.effectTag&64)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ff(e,o);else if(e.tag===19)Ff(e,o);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ce(_e,a),(n.mode&2)===0)n.memoizedState=null;else switch(u){case"forwards":for(o=n.child,u=null;o!==null;)e=o.alternate,e!==null&&_o(e)===null&&(u=o),o=o.sibling;o=u,o===null?(u=n.child,n.child=null):(u=o.sibling,o.sibling=null),za(n,!1,u,o,f,n.lastEffect);break;case"backwards":for(o=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&_o(e)===null){n.child=u;break}e=u.sibling,u.sibling=o,o=u,u=e}za(n,!0,o,null,f,n.lastEffect);break;case"together":za(n,!1,null,null,void 0,n.lastEffect);break;default:n.memoizedState=null}return n.child}function Qt(e,n,o){e!==null&&(n.dependencies=e.dependencies);var a=n.expirationTime;if(a!==0&&Ho(a),n.childExpirationTime<o)return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,o=Gn(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=Gn(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}var Uf,$a,zf,$f;Uf=function(e,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},$a=function(){},zf=function(e,n,o,a,u){var f=e.memoizedProps;if(f!==a){var d=n.stateNode;switch(Bn(xt.current),e=null,o){case"input":f=As(d,f),a=As(d,a),e=[];break;case"option":f=Ls(d,f),a=Ls(d,a),e=[];break;case"select":f=t({},f,{value:void 0}),a=t({},a,{value:void 0}),e=[];break;case"textarea":f=Ms(d,f),a=Ms(d,a),e=[];break;default:typeof f.onClick!="function"&&typeof a.onClick=="function"&&(d.onclick=eo)}Ys(o,a);var p,E;o=null;for(p in f)if(!a.hasOwnProperty(p)&&f.hasOwnProperty(p)&&f[p]!=null)if(p==="style")for(E in d=f[p],d)d.hasOwnProperty(E)&&(o||(o={}),o[E]="");else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(U.hasOwnProperty(p)?e||(e=[]):(e=e||[]).push(p,null));for(p in a){var T=a[p];if(d=f?.[p],a.hasOwnProperty(p)&&T!==d&&(T!=null||d!=null))if(p==="style")if(d){for(E in d)!d.hasOwnProperty(E)||T&&T.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in T)T.hasOwnProperty(E)&&d[E]!==T[E]&&(o||(o={}),o[E]=T[E])}else o||(e||(e=[]),e.push(p,o)),o=T;else p==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,d=d?d.__html:void 0,T!=null&&d!==T&&(e=e||[]).push(p,T)):p==="children"?d===T||typeof T!="string"&&typeof T!="number"||(e=e||[]).push(p,""+T):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(U.hasOwnProperty(p)?(T!=null&&Vt(u,p),e||d===T||(e=[])):(e=e||[]).push(p,T))}o&&(e=e||[]).push("style",o),u=e,(n.updateQueue=u)&&(n.effectTag|=4)}},$f=function(e,n,o,a){o!==a&&(n.effectTag|=4)};function Oo(e,n){switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Bg(e,n,o){var a=n.pendingProps;switch(n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ge(n.type)&&ao(),null;case 3:return vr(),ge(Ke),ge(De),o=n.stateNode,o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),e!==null&&e.child!==null||!Po(n)||(n.effectTag|=4),$a(n),null;case 5:Ia(n),o=Bn(fi.current);var u=n.type;if(e!==null&&n.stateNode!=null)zf(e,n,u,a,o),e.ref!==n.ref&&(n.effectTag|=128);else{if(!a){if(n.stateNode===null)throw Error(s(166));return null}if(e=Bn(xt.current),Po(n)){a=n.stateNode,u=n.type;var f=n.memoizedProps;switch(a[cn]=n,a[to]=f,u){case"iframe":case"object":case"embed":ye("load",a);break;case"video":case"audio":for(e=0;e<Ur.length;e++)ye(Ur[e],a);break;case"source":ye("error",a);break;case"img":case"image":case"link":ye("error",a),ye("load",a);break;case"form":ye("reset",a),ye("submit",a);break;case"details":ye("toggle",a);break;case"input":zu(a,f),ye("invalid",a),Vt(o,"onChange");break;case"select":a._wrapperState={wasMultiple:!!f.multiple},ye("invalid",a),Vt(o,"onChange");break;case"textarea":Vu(a,f),ye("invalid",a),Vt(o,"onChange")}Ys(u,f),e=null;for(var d in f)if(f.hasOwnProperty(d)){var p=f[d];d==="children"?typeof p=="string"?a.textContent!==p&&(e=["children",p]):typeof p=="number"&&a.textContent!==""+p&&(e=["children",""+p]):U.hasOwnProperty(d)&&p!=null&&Vt(o,d)}switch(u){case"input":Wi(a),Hu(a,f,!0);break;case"textarea":Wi(a),qu(a);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(a.onclick=eo)}o=e,n.updateQueue=o,o!==null&&(n.effectTag|=4)}else{switch(d=o.nodeType===9?o:o.ownerDocument,e===wc&&(e=Gu(u)),e===wc?u==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=d.createElement(u,{is:a.is}):(e=d.createElement(u),u==="select"&&(d=e,a.multiple?d.multiple=!0:a.size&&(d.size=a.size))):e=d.createElementNS(e,u),e[cn]=n,e[to]=a,Uf(e,n,!1,!1),n.stateNode=e,d=Js(u,a),u){case"iframe":case"object":case"embed":ye("load",e),p=a;break;case"video":case"audio":for(p=0;p<Ur.length;p++)ye(Ur[p],e);p=a;break;case"source":ye("error",e),p=a;break;case"img":case"image":case"link":ye("error",e),ye("load",e),p=a;break;case"form":ye("reset",e),ye("submit",e),p=a;break;case"details":ye("toggle",e),p=a;break;case"input":zu(e,a),p=As(e,a),ye("invalid",e),Vt(o,"onChange");break;case"option":p=Ls(e,a);break;case"select":e._wrapperState={wasMultiple:!!a.multiple},p=t({},a,{value:void 0}),ye("invalid",e),Vt(o,"onChange");break;case"textarea":Vu(e,a),p=Ms(e,a),ye("invalid",e),Vt(o,"onChange");break;default:p=a}Ys(u,p);var E=p;for(f in E)if(E.hasOwnProperty(f)){var T=E[f];f==="style"?vc(e,T):f==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&Qu(e,T)):f==="children"?typeof T=="string"?(u!=="textarea"||T!=="")&&Br(e,T):typeof T=="number"&&Br(e,""+T):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(U.hasOwnProperty(f)?T!=null&&Vt(o,f):T!=null&&Is(e,f,T,d))}switch(u){case"input":Wi(e),Hu(e,a,!1);break;case"textarea":Wi(e),qu(e);break;case"option":a.value!=null&&e.setAttribute("value",""+sn(a.value));break;case"select":e.multiple=!!a.multiple,o=a.value,o!=null?sr(e,!!a.multiple,o,!1):a.defaultValue!=null&&sr(e,!!a.multiple,a.defaultValue,!0);break;default:typeof p.onClick=="function"&&(e.onclick=eo)}Ic(u,a)&&(n.effectTag|=4)}n.ref!==null&&(n.effectTag|=128)}return null;case 6:if(e&&n.stateNode!=null)$f(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(s(166));o=Bn(fi.current),Bn(xt.current),Po(n)?(o=n.stateNode,a=n.memoizedProps,o[cn]=n,o.nodeValue!==a&&(n.effectTag|=4)):(o=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),o[cn]=n,n.stateNode=o)}return null;case 13:return ge(_e),a=n.memoizedState,(n.effectTag&64)!==0?(n.expirationTime=o,n):(o=a!==null,a=!1,e===null?n.memoizedProps.fallback!==void 0&&Po(n):(u=e.memoizedState,a=u!==null,o||u===null||(u=e.child.sibling,u!==null&&(f=n.firstEffect,f!==null?(n.firstEffect=u,u.nextEffect=f):(n.firstEffect=n.lastEffect=u,u.nextEffect=null),u.effectTag=8))),o&&!a&&(n.mode&2)!==0&&(e===null&&n.memoizedProps.unstable_avoidThisFallback!==!0||(_e.current&1)!==0?Re===$n&&(Re=Ro):((Re===$n||Re===Ro)&&(Re=Lo),hi!==0&&ot!==null&&(Qn(ot,Qe),pd(ot,hi)))),(o||a)&&(n.effectTag|=4),null);case 4:return vr(),$a(n),null;case 10:return ka(n),null;case 17:return Ge(n.type)&&ao(),null;case 19:if(ge(_e),a=n.memoizedState,a===null)return null;if(u=(n.effectTag&64)!==0,f=a.rendering,f===null){if(u)Oo(a,!1);else if(Re!==$n||e!==null&&(e.effectTag&64)!==0)for(f=n.child;f!==null;){if(e=_o(f),e!==null){for(n.effectTag|=64,Oo(a,!1),u=e.updateQueue,u!==null&&(n.updateQueue=u,n.effectTag|=4),a.lastEffect===null&&(n.firstEffect=null),n.lastEffect=a.lastEffect,a=n.child;a!==null;)u=a,f=o,u.effectTag&=2,u.nextEffect=null,u.firstEffect=null,u.lastEffect=null,e=u.alternate,e===null?(u.childExpirationTime=0,u.expirationTime=f,u.child=null,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null):(u.childExpirationTime=e.childExpirationTime,u.expirationTime=e.expirationTime,u.child=e.child,u.memoizedProps=e.memoizedProps,u.memoizedState=e.memoizedState,u.updateQueue=e.updateQueue,f=e.dependencies,u.dependencies=f===null?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),a=a.sibling;return Ce(_e,_e.current&1|2),n.child}f=f.sibling}}else{if(!u)if(e=_o(f),e!==null){if(n.effectTag|=64,u=!0,o=e.updateQueue,o!==null&&(n.updateQueue=o,n.effectTag|=4),Oo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!f.alternate)return n=n.lastEffect=a.lastEffect,n!==null&&(n.nextEffect=null),null}else 2*ft()-a.renderingStartTime>a.tailExpiration&&1<o&&(n.effectTag|=64,u=!0,Oo(a,!1),n.expirationTime=n.childExpirationTime=o-1);a.isBackwards?(f.sibling=n.child,n.child=f):(o=a.last,o!==null?o.sibling=f:n.child=f,a.last=f)}return a.tail!==null?(a.tailExpiration===0&&(a.tailExpiration=ft()+500),o=a.tail,a.rendering=o,a.tail=o.sibling,a.lastEffect=n.lastEffect,a.renderingStartTime=ft(),o.sibling=null,n=_e.current,Ce(_e,u?n&1|2:n&1),o):null}throw Error(s(156,n.tag))}function Ug(e){switch(e.tag){case 1:Ge(e.type)&&ao();var n=e.effectTag;return n&4096?(e.effectTag=n&-4097|64,e):null;case 3:if(vr(),ge(Ke),ge(De),n=e.effectTag,(n&64)!==0)throw Error(s(285));return e.effectTag=n&-4097|64,e;case 5:return Ia(e),null;case 13:return ge(_e),n=e.effectTag,n&4096?(e.effectTag=n&-4097|64,e):null;case 19:return ge(_e),null;case 4:return vr(),null;case 10:return ka(e),null;default:return null}}function Ha(e,n){return{value:e,source:n,stack:Os(n)}}var zg=typeof WeakSet=="function"?WeakSet:Set;function Va(e,n){var o=n.source,a=n.stack;a===null&&o!==null&&(a=Os(o)),o!==null&&Ht(o.type),n=n.value,e!==null&&e.tag===1&&Ht(e.type);try{console.error(n)}catch(u){setTimeout(function(){throw u})}}function $g(e,n){try{n.props=e.memoizedProps,n.state=e.memoizedState,n.componentWillUnmount()}catch(o){Kn(e,o)}}function Hf(e){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Kn(e,o)}else n.current=null}function Hg(e,n){switch(n.tag){case 0:case 11:case 15:case 22:return;case 1:if(n.effectTag&256&&e!==null){var o=e.memoizedProps,a=e.memoizedState;e=n.stateNode,n=e.getSnapshotBeforeUpdate(n.elementType===n.type?o:_t(n.type,o),a),e.__reactInternalSnapshotBeforeUpdate=n}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(s(163))}function Vf(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&a()}o=o.next}while(o!==n)}}function Wf(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var a=o.create;o.destroy=a()}o=o.next}while(o!==n)}}function Vg(e,n,o){switch(o.tag){case 0:case 11:case 15:case 22:Wf(3,o);return;case 1:if(e=o.stateNode,o.effectTag&4)if(n===null)e.componentDidMount();else{var a=o.elementType===o.type?n.memoizedProps:_t(o.type,n.memoizedProps);e.componentDidUpdate(a,n.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}n=o.updateQueue,n!==null&&hf(o,n,e);return;case 3:if(n=o.updateQueue,n!==null){if(e=null,o.child!==null)switch(o.child.tag){case 5:e=o.child.stateNode;break;case 1:e=o.child.stateNode}hf(o,n,e)}return;case 5:e=o.stateNode,n===null&&o.effectTag&4&&Ic(o.type,o.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:o.memoizedState===null&&(o=o.alternate,o!==null&&(o=o.memoizedState,o!==null&&(o=o.dehydrated,o!==null&&hc(o))));return;case 19:case 17:case 20:case 21:return}throw Error(s(163))}function qf(e,n,o){switch(typeof nl=="function"&&nl(n),n.tag){case 0:case 11:case 14:case 15:case 22:if(e=n.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var a=e.next;hn(97<o?97:o,function(){var u=a;do{var f=u.destroy;if(f!==void 0){var d=n;try{f()}catch(p){Kn(d,p)}}u=u.next}while(u!==a)})}break;case 1:Hf(n),o=n.stateNode,typeof o.componentWillUnmount=="function"&&$g(n,o);break;case 5:Hf(n);break;case 4:Yf(e,n,o)}}function Kf(e){var n=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,n!==null&&Kf(n)}function Gf(e){return e.tag===5||e.tag===3||e.tag===4}function Qf(e){e:{for(var n=e.return;n!==null;){if(Gf(n)){var o=n;break e}n=n.return}throw Error(s(160))}switch(n=o.stateNode,o.tag){case 5:var a=!1;break;case 3:n=n.containerInfo,a=!0;break;case 4:n=n.containerInfo,a=!0;break;default:throw Error(s(161))}o.effectTag&16&&(Br(n,""),o.effectTag&=-17);e:t:for(o=e;;){for(;o.sibling===null;){if(o.return===null||Gf(o.return)){o=null;break e}o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.effectTag&2||o.child===null||o.tag===4)continue t;o.child.return=o,o=o.child}if(!(o.effectTag&2)){o=o.stateNode;break e}}a?Wa(e,o,n):qa(e,o,n)}function Wa(e,n,o){var a=e.tag,u=a===5||a===6;if(u)e=u?e.stateNode:e.stateNode.instance,n?o.nodeType===8?o.parentNode.insertBefore(e,n):o.insertBefore(e,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(e,o)):(n=o,n.appendChild(e)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=eo));else if(a!==4&&(e=e.child,e!==null))for(Wa(e,n,o),e=e.sibling;e!==null;)Wa(e,n,o),e=e.sibling}function qa(e,n,o){var a=e.tag,u=a===5||a===6;if(u)e=u?e.stateNode:e.stateNode.instance,n?o.insertBefore(e,n):o.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(qa(e,n,o),e=e.sibling;e!==null;)qa(e,n,o),e=e.sibling}function Yf(e,n,o){for(var a=n,u=!1,f,d;;){if(!u){u=a.return;e:for(;;){if(u===null)throw Error(s(160));switch(f=u.stateNode,u.tag){case 5:d=!1;break e;case 3:f=f.containerInfo,d=!0;break e;case 4:f=f.containerInfo,d=!0;break e}u=u.return}u=!0}if(a.tag===5||a.tag===6){e:for(var p=e,E=a,T=o,R=E;;)if(qf(p,R,T),R.child!==null&&R.tag!==4)R.child.return=R,R=R.child;else{if(R===E)break e;for(;R.sibling===null;){if(R.return===null||R.return===E)break e;R=R.return}R.sibling.return=R.return,R=R.sibling}d?(p=f,E=a.stateNode,p.nodeType===8?p.parentNode.removeChild(E):p.removeChild(E)):f.removeChild(a.stateNode)}else if(a.tag===4){if(a.child!==null){f=a.stateNode.containerInfo,d=!0,a.child.return=a,a=a.child;continue}}else if(qf(e,a,o),a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return,a.tag===4&&(u=!1)}a.sibling.return=a.return,a=a.sibling}}function Ka(e,n){switch(n.tag){case 0:case 11:case 14:case 15:case 22:Vf(3,n);return;case 1:return;case 5:var o=n.stateNode;if(o!=null){var a=n.memoizedProps,u=e!==null?e.memoizedProps:a;e=n.type;var f=n.updateQueue;if(n.updateQueue=null,f!==null){for(o[to]=a,e==="input"&&a.type==="radio"&&a.name!=null&&$u(o,a),Js(e,u),n=Js(e,a),u=0;u<f.length;u+=2){var d=f[u],p=f[u+1];d==="style"?vc(o,p):d==="dangerouslySetInnerHTML"?Qu(o,p):d==="children"?Br(o,p):Is(o,d,p,n)}switch(e){case"input":Ns(o,a);break;case"textarea":Wu(o,a);break;case"select":n=o._wrapperState.wasMultiple,o._wrapperState.wasMultiple=!!a.multiple,e=a.value,e!=null?sr(o,!!a.multiple,e,!1):n!==!!a.multiple&&(a.defaultValue!=null?sr(o,!!a.multiple,a.defaultValue,!0):sr(o,!!a.multiple,a.multiple?[]:"",!1))}}}return;case 6:if(n.stateNode===null)throw Error(s(162));n.stateNode.nodeValue=n.memoizedProps;return;case 3:n=n.stateNode,n.hydrate&&(n.hydrate=!1,hc(n.containerInfo));return;case 12:return;case 13:if(o=n,n.memoizedState===null?a=!1:(a=!0,o=n.child,Ya=ft()),o!==null)e:for(e=o;;){if(e.tag===5)f=e.stateNode,a?(f=f.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(f=e.stateNode,u=e.memoizedProps.style,u=u!=null&&u.hasOwnProperty("display")?u.display:null,f.style.display=yc("display",u));else if(e.tag===6)e.stateNode.nodeValue=a?"":e.memoizedProps;else if(e.tag===13&&e.memoizedState!==null&&e.memoizedState.dehydrated===null){f=e.child.sibling,f.return=e,e=f;continue}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===o)break;for(;e.sibling===null;){if(e.return===null||e.return===o)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}Jf(n);return;case 19:Jf(n);return;case 17:return}throw Error(s(163))}function Jf(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new zg),n.forEach(function(a){var u=ey.bind(null,e,a);o.has(a)||(o.add(a),a.then(u,u))})}}var Wg=typeof WeakMap=="function"?WeakMap:Map;function Xf(e,n,o){o=mn(o,null),o.tag=3,o.payload={element:null};var a=n.value;return o.callback=function(){Fo||(Fo=!0,Ja=a),Va(e,n)},o}function Zf(e,n,o){o=mn(o,null),o.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var u=n.value;o.payload=function(){return Va(e,n),a(u)}}var f=e.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(o.callback=function(){typeof a!="function"&&(wn===null?wn=new Set([this]):wn.add(this),Va(e,n));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})}),o}var qg=Math.ceil,Ao=kt.ReactCurrentDispatcher,ed=kt.ReactCurrentOwner,Ne=0,Ga=8,Et=16,Ot=32,$n=0,No=1,td=2,Ro=3,Lo=4,Qa=5,K=Ne,ot=null,X=null,Qe=0,Re=$n,Mo=null,Yt=1073741823,di=1073741823,Do=null,hi=0,jo=!1,Ya=0,nd=500,z=null,Fo=!1,Ja=null,wn=null,Bo=!1,pi=null,mi=90,Hn=null,gi=0,Xa=null,Uo=0;function At(){return(K&(Et|Ot))!==Ne?1073741821-(ft()/10|0):Uo!==0?Uo:Uo=1073741821-(ft()/10|0)}function Vn(e,n,o){if(n=n.mode,(n&2)===0)return 1073741823;var a=fo();if((n&4)===0)return a===99?1073741823:1073741822;if((K&Et)!==Ne)return Qe;if(o!==null)e=ho(e,o.timeoutMs|0||5e3,250);else switch(a){case 99:e=1073741823;break;case 98:e=ho(e,150,100);break;case 97:case 96:e=ho(e,5e3,250);break;case 95:e=2;break;default:throw Error(s(326))}return ot!==null&&e===Qe&&--e,e}function kn(e,n){if(50<gi)throw gi=0,Xa=null,Error(s(185));if(e=zo(e,n),e!==null){var o=fo();n===1073741823?(K&Ga)!==Ne&&(K&(Et|Ot))===Ne?Za(e):(st(e),K===Ne&&bt()):st(e),(K&4)===Ne||o!==98&&o!==99||(Hn===null?Hn=new Map([[e,n]]):(o=Hn.get(e),(o===void 0||o>n)&&Hn.set(e,n)))}}function zo(e,n){e.expirationTime<n&&(e.expirationTime=n);var o=e.alternate;o!==null&&o.expirationTime<n&&(o.expirationTime=n);var a=e.return,u=null;if(a===null&&e.tag===3)u=e.stateNode;else for(;a!==null;){if(o=a.alternate,a.childExpirationTime<n&&(a.childExpirationTime=n),o!==null&&o.childExpirationTime<n&&(o.childExpirationTime=n),a.return===null&&a.tag===3){u=a.stateNode;break}a=a.return}return u!==null&&(ot===u&&(Ho(n),Re===Lo&&Qn(u,Qe)),pd(u,n)),u}function $o(e){var n=e.lastExpiredTime;if(n!==0||(n=e.firstPendingTime,!hd(e,n)))return n;var o=e.lastPingedTime;return e=e.nextKnownPendingLevel,e=o>e?o:e,2>=e&&n!==e?0:e}function st(e){if(e.lastExpiredTime!==0)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=uf(Za.bind(null,e));else{var n=$o(e),o=e.callbackNode;if(n===0)o!==null&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var a=At();if(n===1073741823?a=99:n===1||n===2?a=95:(a=10*(1073741821-n)-10*(1073741821-a),a=0>=a?99:250>=a?98:5250>=a?97:95),o!==null){var u=e.callbackPriority;if(e.callbackExpirationTime===n&&u>=a)return;o!==of&&Xc(o)}e.callbackExpirationTime=n,e.callbackPriority=a,n=n===1073741823?uf(Za.bind(null,e)):lf(a,rd.bind(null,e),{timeout:10*(1073741821-n)-ft()}),e.callbackNode=n}}}function rd(e,n){if(Uo=0,n)return n=At(),sl(e,n),st(e),null;var o=$o(e);if(o!==0){if(n=e.callbackNode,(K&(Et|Ot))!==Ne)throw Error(s(327));if(_r(),e===ot&&o===Qe||Wn(e,o),X!==null){var a=K;K|=Et;var u=ad();do try{Qg();break}catch(p){sd(e,p)}while(!0);if(wa(),K=a,Ao.current=u,Re===No)throw n=Mo,Wn(e,o),Qn(e,o),st(e),n;if(X===null)switch(u=e.finishedWork=e.current.alternate,e.finishedExpirationTime=o,a=Re,ot=null,a){case $n:case No:throw Error(s(345));case td:sl(e,2<o?2:o);break;case Ro:if(Qn(e,o),a=e.lastSuspendedTime,o===a&&(e.nextKnownPendingLevel=el(u)),Yt===1073741823&&(u=Ya+nd-ft(),10<u)){if(jo){var f=e.lastPingedTime;if(f===0||f>=o){e.lastPingedTime=o,Wn(e,o);break}}if(f=$o(e),f!==0&&f!==o)break;if(a!==0&&a!==o){e.lastPingedTime=a;break}e.timeoutHandle=oa(qn.bind(null,e),u);break}qn(e);break;case Lo:if(Qn(e,o),a=e.lastSuspendedTime,o===a&&(e.nextKnownPendingLevel=el(u)),jo&&(u=e.lastPingedTime,u===0||u>=o)){e.lastPingedTime=o,Wn(e,o);break}if(u=$o(e),u!==0&&u!==o)break;if(a!==0&&a!==o){e.lastPingedTime=a;break}if(di!==1073741823?a=10*(1073741821-di)-ft():Yt===1073741823?a=0:(a=10*(1073741821-Yt)-5e3,u=ft(),o=10*(1073741821-o)-u,a=u-a,0>a&&(a=0),a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*qg(a/1960))-a,o<a&&(a=o)),10<a){e.timeoutHandle=oa(qn.bind(null,e),a);break}qn(e);break;case Qa:if(Yt!==1073741823&&Do!==null){f=Yt;var d=Do;if(a=d.busyMinDurationMs|0,0>=a?a=0:(u=d.busyDelayMs|0,f=ft()-(10*(1073741821-f)-(d.timeoutMs|0||5e3)),a=f<=u?0:u+a-f),10<a){Qn(e,o),e.timeoutHandle=oa(qn.bind(null,e),a);break}}qn(e);break;default:throw Error(s(329))}if(st(e),e.callbackNode===n)return rd.bind(null,e)}}return null}function Za(e){var n=e.lastExpiredTime;if(n=n!==0?n:1073741823,(K&(Et|Ot))!==Ne)throw Error(s(327));if(_r(),e===ot&&n===Qe||Wn(e,n),X!==null){var o=K;K|=Et;var a=ad();do try{Gg();break}catch(u){sd(e,u)}while(!0);if(wa(),K=o,Ao.current=a,Re===No)throw o=Mo,Wn(e,n),Qn(e,n),st(e),o;if(X!==null)throw Error(s(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,ot=null,qn(e),st(e)}return null}function Kg(){if(Hn!==null){var e=Hn;Hn=null,e.forEach(function(n,o){sl(o,n),st(o)}),bt()}}function id(e,n){var o=K;K|=1;try{return e(n)}finally{K=o,K===Ne&&bt()}}function od(e,n){var o=K;K&=-2,K|=Ga;try{return e(n)}finally{K=o,K===Ne&&bt()}}function Wn(e,n){e.finishedWork=null,e.finishedExpirationTime=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,qm(o)),X!==null)for(o=X.return;o!==null;){var a=o;switch(a.tag){case 1:a=a.type.childContextTypes,a!=null&&ao();break;case 3:vr(),ge(Ke),ge(De);break;case 5:Ia(a);break;case 4:vr();break;case 13:ge(_e);break;case 19:ge(_e);break;case 10:ka(a)}o=o.return}ot=e,X=Gn(e.current,null),Qe=n,Re=$n,Mo=null,di=Yt=1073741823,Do=null,hi=0,jo=!1}function sd(e,n){do{try{if(wa(),Eo.current=xo,To)for(var o=Ie.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}if(yn=0,Fe=je=Ie=null,To=!1,X===null||X.return===null)return Re=No,Mo=n,X=null;e:{var u=e,f=X.return,d=X,p=n;if(n=Qe,d.effectTag|=2048,d.firstEffect=d.lastEffect=null,p!==null&&typeof p=="object"&&typeof p.then=="function"){var E=p;if((d.mode&2)===0){var T=d.alternate;T?(d.updateQueue=T.updateQueue,d.memoizedState=T.memoizedState,d.expirationTime=T.expirationTime):(d.updateQueue=null,d.memoizedState=null)}var R=(_e.current&1)!==0,F=f;do{var te;if(te=F.tag===13){var oe=F.memoizedState;if(oe!==null)te=oe.dehydrated!==null;else{var pt=F.memoizedProps;te=pt.fallback===void 0?!1:pt.unstable_avoidThisFallback!==!0?!0:!R}}if(te){var Me=F.updateQueue;if(Me===null){var k=new Set;k.add(E),F.updateQueue=k}else Me.add(E);if((F.mode&2)===0){if(F.effectTag|=64,d.effectTag&=-2981,d.tag===1)if(d.alternate===null)d.tag=17;else{var w=mn(1073741823,null);w.tag=2,gn(d,w)}d.expirationTime=1073741823;break e}p=void 0,d=n;var S=u.pingCache;if(S===null?(S=u.pingCache=new Wg,p=new Set,S.set(E,p)):(p=S.get(E),p===void 0&&(p=new Set,S.set(E,p))),!p.has(d)){p.add(d);var O=Zg.bind(null,u,E,d);E.then(O,O)}F.effectTag|=4096,F.expirationTime=n;break e}F=F.return}while(F!==null);p=Error((Ht(d.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`+Os(d))}Re!==Qa&&(Re=td),p=Ha(p,d),F=f;do{switch(F.tag){case 3:E=p,F.effectTag|=4096,F.expirationTime=n;var N=Xf(F,E,n);df(F,N);break e;case 1:E=p;var B=F.type,H=F.stateNode;if((F.effectTag&64)===0&&(typeof B.getDerivedStateFromError=="function"||H!==null&&typeof H.componentDidCatch=="function"&&(wn===null||!wn.has(H)))){F.effectTag|=4096,F.expirationTime=n;var re=Zf(F,E,n);df(F,re);break e}}F=F.return}while(F!==null)}X=cd(X)}catch(ve){n=ve;continue}break}while(!0)}function ad(){var e=Ao.current;return Ao.current=xo,e===null?xo:e}function ld(e,n){e<Yt&&2<e&&(Yt=e),n!==null&&e<di&&2<e&&(di=e,Do=n)}function Ho(e){e>hi&&(hi=e)}function Gg(){for(;X!==null;)X=ud(X)}function Qg(){for(;X!==null&&!Rg();)X=ud(X)}function ud(e){var n=dd(e.alternate,e,Qe);return e.memoizedProps=e.pendingProps,n===null&&(n=cd(e)),ed.current=null,n}function cd(e){X=e;do{var n=X.alternate;if(e=X.return,(X.effectTag&2048)===0){if(n=Bg(n,X,Qe),Qe===1||X.childExpirationTime!==1){for(var o=0,a=X.child;a!==null;){var u=a.expirationTime,f=a.childExpirationTime;u>o&&(o=u),f>o&&(o=f),a=a.sibling}X.childExpirationTime=o}if(n!==null)return n;e!==null&&(e.effectTag&2048)===0&&(e.firstEffect===null&&(e.firstEffect=X.firstEffect),X.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=X.firstEffect),e.lastEffect=X.lastEffect),1<X.effectTag&&(e.lastEffect!==null?e.lastEffect.nextEffect=X:e.firstEffect=X,e.lastEffect=X))}else{if(n=Ug(X),n!==null)return n.effectTag&=2047,n;e!==null&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}if(n=X.sibling,n!==null)return n;X=e}while(X!==null);return Re===$n&&(Re=Qa),null}function el(e){var n=e.expirationTime;return e=e.childExpirationTime,n>e?n:e}function qn(e){var n=fo();return hn(99,Yg.bind(null,e,n)),null}function Yg(e,n){do _r();while(pi!==null);if((K&(Et|Ot))!==Ne)throw Error(s(327));var o=e.finishedWork,a=e.finishedExpirationTime;if(o===null)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,o===e.current)throw Error(s(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var u=el(o);if(e.firstPendingTime=u,a<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:a<=e.firstSuspendedTime&&(e.firstSuspendedTime=a-1),a<=e.lastPingedTime&&(e.lastPingedTime=0),a<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===ot&&(X=ot=null,Qe=0),1<o.effectTag?o.lastEffect!==null?(o.lastEffect.nextEffect=o,u=o.firstEffect):u=o:u=o.firstEffect,u!==null){var f=K;K|=Ot,ed.current=null,na=Xi;var d=Tc();if(Zs(d)){if("selectionStart"in d)var p={start:d.selectionStart,end:d.selectionEnd};else e:{p=(p=d.ownerDocument)&&p.defaultView||window;var E=p.getSelection&&p.getSelection();if(E&&E.rangeCount!==0){p=E.anchorNode;var T=E.anchorOffset,R=E.focusNode;E=E.focusOffset;try{p.nodeType,R.nodeType}catch{p=null;break e}var F=0,te=-1,oe=-1,pt=0,Me=0,k=d,w=null;t:for(;;){for(var S;k!==p||T!==0&&k.nodeType!==3||(te=F+T),k!==R||E!==0&&k.nodeType!==3||(oe=F+E),k.nodeType===3&&(F+=k.nodeValue.length),(S=k.firstChild)!==null;)w=k,k=S;for(;;){if(k===d)break t;if(w===p&&++pt===T&&(te=F),w===R&&++Me===E&&(oe=F),(S=k.nextSibling)!==null)break;k=w,w=k.parentNode}k=S}p=te===-1||oe===-1?null:{start:te,end:oe}}else p=null}p=p||{start:0,end:0}}else p=null;ra={activeElementDetached:null,focusedElem:d,selectionRange:p},Xi=!1,z=u;do try{Jg()}catch(Z){if(z===null)throw Error(s(330));Kn(z,Z),z=z.nextEffect}while(z!==null);z=u;do try{for(d=e,p=n;z!==null;){var O=z.effectTag;if(O&16&&Br(z.stateNode,""),O&128){var N=z.alternate;if(N!==null){var B=N.ref;B!==null&&(typeof B=="function"?B(null):B.current=null)}}switch(O&1038){case 2:Qf(z),z.effectTag&=-3;break;case 6:Qf(z),z.effectTag&=-3,Ka(z.alternate,z);break;case 1024:z.effectTag&=-1025;break;case 1028:z.effectTag&=-1025,Ka(z.alternate,z);break;case 4:Ka(z.alternate,z);break;case 8:T=z,Yf(d,T,p),Kf(T)}z=z.nextEffect}}catch(Z){if(z===null)throw Error(s(330));Kn(z,Z),z=z.nextEffect}while(z!==null);if(B=ra,N=Tc(),O=B.focusedElem,p=B.selectionRange,N!==O&&O&&O.ownerDocument&&Ec(O.ownerDocument.documentElement,O)){for(p!==null&&Zs(O)&&(N=p.start,B=p.end,B===void 0&&(B=N),"selectionStart"in O?(O.selectionStart=N,O.selectionEnd=Math.min(B,O.value.length)):(B=(N=O.ownerDocument||document)&&N.defaultView||window,B.getSelection&&(B=B.getSelection(),T=O.textContent.length,d=Math.min(p.start,T),p=p.end===void 0?d:Math.min(p.end,T),!B.extend&&d>p&&(T=p,p=d,d=T),T=_c(O,d),R=_c(O,p),T&&R&&(B.rangeCount!==1||B.anchorNode!==T.node||B.anchorOffset!==T.offset||B.focusNode!==R.node||B.focusOffset!==R.offset)&&(N=N.createRange(),N.setStart(T.node,T.offset),B.removeAllRanges(),d>p?(B.addRange(N),B.extend(R.node,R.offset)):(N.setEnd(R.node,R.offset),B.addRange(N)))))),N=[],B=O;B=B.parentNode;)B.nodeType===1&&N.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof O.focus=="function"&&O.focus(),O=0;O<N.length;O++)B=N[O],B.element.scrollLeft=B.left,B.element.scrollTop=B.top}Xi=!!na,ra=na=null,e.current=o,z=u;do try{for(O=e;z!==null;){var H=z.effectTag;if(H&36&&Vg(O,z.alternate,z),H&128){N=void 0;var re=z.ref;if(re!==null){var ve=z.stateNode;switch(z.tag){case 5:N=ve;break;default:N=ve}typeof re=="function"?re(N):re.current=N}}z=z.nextEffect}}catch(Z){if(z===null)throw Error(s(330));Kn(z,Z),z=z.nextEffect}while(z!==null);z=null,Lg(),K=f}else e.current=o;if(Bo)Bo=!1,pi=e,mi=n;else for(z=u;z!==null;)n=z.nextEffect,z.nextEffect=null,z=n;if(n=e.firstPendingTime,n===0&&(wn=null),n===1073741823?e===Xa?gi++:(gi=0,Xa=e):gi=0,typeof tl=="function"&&tl(o.stateNode,a),st(e),Fo)throw Fo=!1,e=Ja,Ja=null,e;return(K&Ga)!==Ne||bt(),null}function Jg(){for(;z!==null;){var e=z.effectTag;(e&256)!==0&&Hg(z.alternate,z),(e&512)===0||Bo||(Bo=!0,lf(97,function(){return _r(),null})),z=z.nextEffect}}function _r(){if(mi!==90){var e=97<mi?97:mi;return mi=90,hn(e,Xg)}}function Xg(){if(pi===null)return!1;var e=pi;if(pi=null,(K&(Et|Ot))!==Ne)throw Error(s(331));var n=K;for(K|=Ot,e=e.current.firstEffect;e!==null;){try{var o=e;if((o.effectTag&512)!==0)switch(o.tag){case 0:case 11:case 15:case 22:Vf(5,o),Wf(5,o)}}catch(a){if(e===null)throw Error(s(330));Kn(e,a)}o=e.nextEffect,e.nextEffect=null,e=o}return K=n,bt(),!0}function fd(e,n,o){n=Ha(o,n),n=Xf(e,n,1073741823),gn(e,n),e=zo(e,1073741823),e!==null&&st(e)}function Kn(e,n){if(e.tag===3)fd(e,e,n);else for(var o=e.return;o!==null;){if(o.tag===3){fd(o,e,n);break}else if(o.tag===1){var a=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(wn===null||!wn.has(a))){e=Ha(n,e),e=Zf(o,e,1073741823),gn(o,e),o=zo(o,1073741823),o!==null&&st(o);break}}o=o.return}}function Zg(e,n,o){var a=e.pingCache;a!==null&&a.delete(n),ot===e&&Qe===o?Re===Lo||Re===Ro&&Yt===1073741823&&ft()-Ya<nd?Wn(e,Qe):jo=!0:hd(e,o)&&(n=e.lastPingedTime,n!==0&&n<o||(e.lastPingedTime=o,st(e)))}function ey(e,n){var o=e.stateNode;o!==null&&o.delete(n),n=0,n===0&&(n=At(),n=Vn(n,e,null)),e=zo(e,n),e!==null&&st(e)}var dd;dd=function(e,n,o){var a=n.expirationTime;if(e!==null){var u=n.pendingProps;if(e.memoizedProps!==u||Ke.current)Pt=!0;else{if(a<o){switch(Pt=!1,n.tag){case 3:Df(n),ja();break;case 5:if(wf(n),n.mode&4&&o!==1&&u.hidden)return n.expirationTime=n.childExpirationTime=1,null;break;case 1:Ge(n.type)&&lo(n);break;case 4:Sa(n,n.stateNode.containerInfo);break;case 10:a=n.memoizedProps.value,u=n.type._context,Ce(po,u._currentValue),u._currentValue=a;break;case 13:if(n.memoizedState!==null)return a=n.child.childExpirationTime,a!==0&&a>=o?jf(e,n,o):(Ce(_e,_e.current&1),n=Qt(e,n,o),n!==null?n.sibling:null);Ce(_e,_e.current&1);break;case 19:if(a=n.childExpirationTime>=o,(e.effectTag&64)!==0){if(a)return Bf(e,n,o);n.effectTag|=64}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null),Ce(_e,_e.current),!a)return null}return Qt(e,n,o)}Pt=!1}}else Pt=!1;switch(n.expirationTime=0,n.tag){case 2:if(a=n.type,e!==null&&(e.alternate=null,n.alternate=null,n.effectTag|=2),e=n.pendingProps,u=pr(n,De.current),gr(n,o),u=Pa(null,n,a,e,u,o),n.effectTag|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0){if(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ge(a)){var f=!0;lo(n)}else f=!1;n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,_a(n);var d=a.getDerivedStateFromProps;typeof d=="function"&&yo(n,a,d,e),u.updater=vo,n.stateNode=u,u._reactInternalFiber=n,Ta(n,a,e,o),n=Ba(null,n,a,!0,f,o)}else n.tag=0,it(null,n,u,o),n=n.child;return n;case 16:e:{if(u=n.elementType,e!==null&&(e.alternate=null,n.alternate=null,n.effectTag|=2),e=n.pendingProps,Pm(u),u._status!==1)throw u._result;switch(u=u._result,n.type=u,f=n.tag=ry(u),e=_t(u,e),f){case 0:n=Fa(null,n,u,e,o);break e;case 1:n=Mf(null,n,u,e,o);break e;case 11:n=Af(null,n,u,e,o);break e;case 14:n=Nf(null,n,u,_t(u.type,e),a,o);break e}throw Error(s(306,u,""))}return n;case 0:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:_t(a,u),Fa(e,n,a,u,o);case 1:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:_t(a,u),Mf(e,n,a,u,o);case 3:if(Df(n),a=n.updateQueue,e===null||a===null)throw Error(s(282));if(a=n.pendingProps,u=n.memoizedState,u=u!==null?u.element:null,Ea(e,n),si(n,a,null,o),a=n.memoizedState.element,a===u)ja(),n=Qt(e,n,o);else{if((u=n.stateNode.hydrate)&&(vn=ur(n.stateNode.containerInfo.firstChild),Gt=n,u=zn=!0),u)for(o=Ca(n,null,a,o),n.child=o;o;)o.effectTag=o.effectTag&-3|1024,o=o.sibling;else it(e,n,a,o),ja();n=n.child}return n;case 5:return wf(n),e===null&&Da(n),a=n.type,u=n.pendingProps,f=e!==null?e.memoizedProps:null,d=u.children,ia(a,u)?d=null:f!==null&&ia(a,f)&&(n.effectTag|=16),Lf(e,n),n.mode&4&&o!==1&&u.hidden?(n.expirationTime=n.childExpirationTime=1,n=null):(it(e,n,d,o),n=n.child),n;case 6:return e===null&&Da(n),null;case 13:return jf(e,n,o);case 4:return Sa(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=yr(n,null,a,o):it(e,n,a,o),n.child;case 11:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:_t(a,u),Af(e,n,a,u,o);case 7:return it(e,n,n.pendingProps,o),n.child;case 8:return it(e,n,n.pendingProps.children,o),n.child;case 12:return it(e,n,n.pendingProps.children,o),n.child;case 10:e:{a=n.type._context,u=n.pendingProps,d=n.memoizedProps,f=u.value;var p=n.type._context;if(Ce(po,p._currentValue),p._currentValue=f,d!==null)if(p=d.value,f=jn(p,f)?0:(typeof a._calculateChangedBits=="function"?a._calculateChangedBits(p,f):1073741823)|0,f===0){if(d.children===u.children&&!Ke.current){n=Qt(e,n,o);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var E=p.dependencies;if(E!==null){d=p.child;for(var T=E.firstContext;T!==null;){if(T.context===a&&(T.observedBits&f)!==0){p.tag===1&&(T=mn(o,null),T.tag=2,gn(p,T)),p.expirationTime<o&&(p.expirationTime=o),T=p.alternate,T!==null&&T.expirationTime<o&&(T.expirationTime=o),ff(p.return,o),E.expirationTime<o&&(E.expirationTime=o);break}T=T.next}}else d=p.tag===10&&p.type===n.type?null:p.child;if(d!==null)d.return=p;else for(d=p;d!==null;){if(d===n){d=null;break}if(p=d.sibling,p!==null){p.return=d.return,d=p;break}d=d.return}p=d}it(e,n,u.children,o),n=n.child}return n;case 9:return u=n.type,f=n.pendingProps,a=f.children,gr(n,o),u=dt(u,f.unstable_observedBits),a=a(u),n.effectTag|=1,it(e,n,a,o),n.child;case 14:return u=n.type,f=_t(u,n.pendingProps),f=_t(u.type,f),Nf(e,n,u,f,a,o);case 15:return Rf(e,n,n.type,n.pendingProps,a,o);case 17:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:_t(a,u),e!==null&&(e.alternate=null,n.alternate=null,n.effectTag|=2),n.tag=1,Ge(a)?(e=!0,lo(n)):e=!1,gr(n,o),gf(n,a,u),Ta(n,a,u,o),Ba(null,n,a,!0,e,o);case 19:return Bf(e,n,o)}throw Error(s(156,n.tag))};var tl=null,nl=null;function ty(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var n=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(n.isDisabled||!n.supportsFiber)return!0;try{var o=n.inject(e);tl=function(a){try{n.onCommitFiberRoot(o,a,void 0,(a.current.effectTag&64)===64)}catch{}},nl=function(a){try{n.onCommitFiberUnmount(o,a)}catch{}}}catch{}return!0}function ny(e,n,o,a){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function Nt(e,n,o,a){return new ny(e,n,o,a)}function rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ry(e){if(typeof e=="function")return rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bs)return 11;if(e===Ps)return 14}return 2}function Gn(e,n){var o=e.alternate;return o===null?(o=Nt(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.effectTag=0,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null),o.childExpirationTime=e.childExpirationTime,o.expirationTime=e.expirationTime,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{expirationTime:n.expirationTime,firstContext:n.firstContext,responders:n.responders},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function Vo(e,n,o,a,u,f){var d=2;if(a=e,typeof e=="function")rl(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Ln:return _n(o.children,u,f,n);case xm:d=8,u|=7;break;case Ru:d=8,u|=1;break;case Hi:return e=Nt(12,o,n,u|8),e.elementType=Hi,e.type=Hi,e.expirationTime=f,e;case Vi:return e=Nt(13,o,n,u),e.type=Vi,e.elementType=Vi,e.expirationTime=f,e;case xs:return e=Nt(19,o,n,u),e.elementType=xs,e.expirationTime=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lu:d=10;break e;case Mu:d=9;break e;case bs:d=11;break e;case Ps:d=14;break e;case Du:d=16,a=null;break e;case ju:d=22;break e}throw Error(s(130,e==null?e:typeof e,""))}return n=Nt(d,o,n,u),n.elementType=e,n.type=a,n.expirationTime=f,n}function _n(e,n,o,a){return e=Nt(7,e,a,n),e.expirationTime=o,e}function il(e,n,o){return e=Nt(6,e,null,n),e.expirationTime=o,e}function ol(e,n,o){return n=Nt(4,e.children!==null?e.children:[],e.key,n),n.expirationTime=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function iy(e,n,o){this.tag=n,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=o,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function hd(e,n){var o=e.firstSuspendedTime;return e=e.lastSuspendedTime,o!==0&&o>=n&&e<=n}function Qn(e,n){var o=e.firstSuspendedTime,a=e.lastSuspendedTime;o<n&&(e.firstSuspendedTime=n),(a>n||o===0)&&(e.lastSuspendedTime=n),n<=e.lastPingedTime&&(e.lastPingedTime=0),n<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function pd(e,n){n>e.firstPendingTime&&(e.firstPendingTime=n);var o=e.firstSuspendedTime;o!==0&&(n>=o?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:n>=e.lastSuspendedTime&&(e.lastSuspendedTime=n+1),n>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=n))}function sl(e,n){var o=e.lastExpiredTime;(o===0||o>n)&&(e.lastExpiredTime=n)}function Wo(e,n,o,a){var u=n.current,f=At(),d=ai.suspense;f=Vn(f,u,d);e:if(o){o=o._reactInternalFiber;t:{if(Mn(o)!==o||o.tag!==1)throw Error(s(170));var p=o;do{switch(p.tag){case 3:p=p.stateNode.context;break t;case 1:if(Ge(p.type)){p=p.stateNode.__reactInternalMemoizedMergedChildContext;break t}}p=p.return}while(p!==null);throw Error(s(171))}if(o.tag===1){var E=o.type;if(Ge(E)){o=Yc(o,E,p);break e}}o=p}else o=dn;return n.context===null?n.context=o:n.pendingContext=o,n=mn(f,d),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),gn(u,n),kn(u,f),f}function al(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function md(e,n){e=e.memoizedState,e!==null&&e.dehydrated!==null&&e.retryTime<n&&(e.retryTime=n)}function ll(e,n){md(e,n),(e=e.alternate)&&md(e,n)}function ul(e,n,o){o=o!=null&&o.hydrate===!0;var a=new iy(e,n,o),u=Nt(3,null,null,n===2?7:n===1?3:0);a.current=u,u.stateNode=a,_a(u),e[Qr]=a.current,o&&n!==0&&Mm(e,e.nodeType===9?e:e.ownerDocument),this._internalRoot=a}ul.prototype.render=function(e){Wo(e,this._internalRoot,null,null)},ul.prototype.unmount=function(){var e=this._internalRoot,n=e.containerInfo;Wo(null,e,null,function(){n[Qr]=null})};function yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function oy(e,n){if(n||(n=e?e.nodeType===9?e.documentElement:e.firstChild:null,n=!(!n||n.nodeType!==1||!n.hasAttribute("data-reactroot"))),!n)for(var o;o=e.lastChild;)e.removeChild(o);return new ul(e,0,n?{hydrate:!0}:void 0)}function qo(e,n,o,a,u){var f=o._reactRootContainer;if(f){var d=f._internalRoot;if(typeof u=="function"){var p=u;u=function(){var T=al(d);p.call(T)}}Wo(n,d,e,u)}else{if(f=o._reactRootContainer=oy(o,a),d=f._internalRoot,typeof u=="function"){var E=u;u=function(){var T=al(d);E.call(T)}}od(function(){Wo(n,d,e,u)})}return al(d)}function sy(e,n,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:a==null?null:""+a,children:e,containerInfo:n,implementation:o}}uc=function(e){if(e.tag===13){var n=ho(At(),150,100);kn(e,n),ll(e,n)}},$s=function(e){e.tag===13&&(kn(e,3),ll(e,3))},cc=function(e){if(e.tag===13){var n=At();n=Vn(n,e,null),kn(e,n),ll(e,n)}},Le=function(e,n,o){switch(n){case"input":if(Ns(e,o),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var a=o[n];if(a!==e&&a.form===e.form){var u=aa(a);if(!u)throw Error(s(90));Uu(a),Ns(a,u)}}}break;case"textarea":Wu(e,o);break;case"select":n=o.value,n!=null&&sr(e,!!o.multiple,n,!1)}},ct=id,Ve=function(e,n,o,a,u){var f=K;K|=4;try{return hn(98,e.bind(null,n,o,a,u))}finally{K=f,K===Ne&&bt()}},Ze=function(){(K&(1|Et|Ot))===Ne&&(Kg(),_r())},zt=function(e,n){var o=K;K|=2;try{return e(n)}finally{K=o,K===Ne&&bt()}};function gd(e,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yi(n))throw Error(s(200));return sy(e,n,null,o)}var ay={Events:[Jr,Dn,aa,we,D,cr,function(e){Bs(e,Gm)},Te,ke,Zi,Qi,_r,{current:!1}]};return(function(e){var n=e.findFiberByHostInstance;return ty(t({},e,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(o){return o=ic(o),o===null?null:o.stateNode},findFiberByHostInstance:function(o){return n?n(o):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Yr,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"}),at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ay,at.createPortal=gd,at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternalFiber;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):Error(s(268,Object.keys(e)));return e=ic(n),e=e===null?null:e.stateNode,e},at.flushSync=function(e,n){if((K&(Et|Ot))!==Ne)throw Error(s(187));var o=K;K|=1;try{return hn(99,e.bind(null,n))}finally{K=o,bt()}},at.hydrate=function(e,n,o){if(!yi(n))throw Error(s(200));return qo(null,e,n,!0,o)},at.render=function(e,n,o){if(!yi(n))throw Error(s(200));return qo(null,e,n,!1,o)},at.unmountComponentAtNode=function(e){if(!yi(e))throw Error(s(40));return e._reactRootContainer?(od(function(){qo(null,null,e,!1,function(){e._reactRootContainer=null,e[Qr]=null})}),!0):!1},at.unstable_batchedUpdates=id,at.unstable_createPortal=function(e,n){return gd(e,n,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},at.unstable_renderSubtreeIntoContainer=function(e,n,o,a){if(!yi(o))throw Error(s(200));if(e==null||e._reactInternalFiber===void 0)throw Error(s(38));return qo(e,n,o,!1,a)},at.version="16.14.0",at}var Sd;function my(){if(Sd)return hl.exports;Sd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),hl.exports=py(),hl.exports}var gy=my();const yy=hs(gy),vy=()=>b.jsx("footer",{children:b.jsxs("div",{className:"wrapper displayContainer",children:[b.jsx("p",{children:"Copyright 2020"}),b.jsxs("p",{children:["Created By ",b.jsx("a",{href:"https://andrefacey.com",children:"Andre Facey"})," at"," ",b.jsx("a",{href:"https://junocollege.com",target:"_blank",rel:"noopener noreferrer",children:"Juno College"})]}),b.jsxs("p",{children:["Design Inspiration from"," ",b.jsx("a",{href:"https://scottrs.ca",target:"_blank",rel:"noopener noreferrer",children:"Scott Sobere-Yu"})," ","and"," ",b.jsx("a",{href:"https://dribbble.com/shots/6250762-Kanban-Board",target:"_blank",rel:"noopener noreferrer",children:"Nikita"})]})]})});/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function ki(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ki=function(t){return typeof t}:ki=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ki(r)}function wy(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function ky(r,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(r,s.key,s)}}function _y(r,t,i){return t&&ky(r.prototype,t),r}function Ey(r,t,i){return t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i,r}function se(r){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{},s=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(i).filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable}))),s.forEach(function(l){Ey(r,l,i[l])})}return r}function Ah(r,t){return Ty(r)||Cy(r,t)||Sy()}function Ty(r){if(Array.isArray(r))return r}function Cy(r,t){var i=[],s=!0,l=!1,c=void 0;try{for(var h=r[Symbol.iterator](),m;!(s=(m=h.next()).done)&&(i.push(m.value),!(t&&i.length===t));s=!0);}catch(g){l=!0,c=g}finally{try{!s&&h.return!=null&&h.return()}finally{if(l)throw c}}return i}function Sy(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var Id=function(){},tu={},Nh={},Iy=null,Rh={mark:Id,measure:Id};try{typeof window<"u"&&(tu=window),typeof document<"u"&&(Nh=document),typeof MutationObserver<"u"&&(Iy=MutationObserver),typeof performance<"u"&&(Rh=performance)}catch{}var by=tu.navigator||{},bd=by.userAgent,xd=bd===void 0?"":bd,ps=tu,Ue=Nh,Ko=Rh;ps.document;var nu=!!Ue.documentElement&&!!Ue.head&&typeof Ue.addEventListener=="function"&&typeof Ue.createElement=="function";~xd.indexOf("MSIE")||~xd.indexOf("Trident/");var tn="___FONT_AWESOME___",Lh="fa",Mh="svg-inline--fa",xy="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var gl={GROUP:"group",PRIMARY:"primary",SECONDARY:"secondary"},Dh=ps.FontAwesomeConfig||{};function Py(r){var t=Ue.querySelector("script["+r+"]");if(t)return t.getAttribute(r)}function Oy(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}if(Ue&&typeof Ue.querySelector=="function"){var Ay=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ay.forEach(function(r){var t=Ah(r,2),i=t[0],s=t[1],l=Oy(Py(i));l!=null&&(Dh[s]=l)})}var Ny={familyPrefix:Lh,replacementClass:Mh,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Nl=se({},Ny,Dh);Nl.autoReplaceSvg||(Nl.observeMutations=!1);var lt=se({},Nl);ps.FontAwesomeConfig=lt;var nn=ps||{};nn[tn]||(nn[tn]={});nn[tn].styles||(nn[tn].styles={});nn[tn].hooks||(nn[tn].hooks={});nn[tn].shims||(nn[tn].shims=[]);var Lt=nn[tn],Ry=[],Ly=function r(){Ue.removeEventListener("DOMContentLoaded",r),Rl=1,Ry.map(function(t){return t()})},Rl=!1;nu&&(Rl=(Ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ue.readyState),Rl||Ue.addEventListener("DOMContentLoaded",Ly));var ru="pending",jh="settled",es="fulfilled",ts="rejected",My=function(){},Fh=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",Dy=typeof setImmediate>"u"?setTimeout:setImmediate,vi=[],Ll;function jy(){for(var r=0;r<vi.length;r++)vi[r][0](vi[r][1]);vi=[],Ll=!1}function ns(r,t){vi.push([r,t]),Ll||(Ll=!0,Dy(jy,0))}function Fy(r,t){function i(l){iu(t,l)}function s(l){Si(t,l)}try{r(i,s)}catch(l){s(l)}}function Bh(r){var t=r.owner,i=t._state,s=t._data,l=r[i],c=r.then;if(typeof l=="function"){i=es;try{s=l(s)}catch(h){Si(c,h)}}Uh(c,s)||(i===es&&iu(c,s),i===ts&&Si(c,s))}function Uh(r,t){var i;try{if(r===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&(typeof t=="function"||ki(t)==="object")){var s=t.then;if(typeof s=="function")return s.call(t,function(l){i||(i=!0,t===l?zh(r,l):iu(r,l))},function(l){i||(i=!0,Si(r,l))}),!0}}catch(l){return i||Si(r,l),!0}return!1}function iu(r,t){(r===t||!Uh(r,t))&&zh(r,t)}function zh(r,t){r._state===ru&&(r._state=jh,r._data=t,ns(By,r))}function Si(r,t){r._state===ru&&(r._state=jh,r._data=t,ns(Uy,r))}function $h(r){r._then=r._then.forEach(Bh)}function By(r){r._state=es,$h(r)}function Uy(r){r._state=ts,$h(r),!r._handled&&Fh&&global.process.emit("unhandledRejection",r._data,r)}function zy(r){global.process.emit("rejectionHandled",r)}function mt(r){if(typeof r!="function")throw new TypeError("Promise resolver "+r+" is not a function");if(!(this instanceof mt))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],Fy(r,this)}mt.prototype={constructor:mt,_state:ru,_then:null,_data:void 0,_handled:!1,then:function(t,i){var s={owner:this,then:new this.constructor(My),fulfilled:t,rejected:i};return(i||t)&&!this._handled&&(this._handled=!0,this._state===ts&&Fh&&ns(zy,this)),this._state===es||this._state===ts?ns(Bh,s):this._then.push(s),s.then},catch:function(t){return this.then(null,t)}};mt.all=function(r){if(!Array.isArray(r))throw new TypeError("You must pass an array to Promise.all().");return new mt(function(t,i){var s=[],l=0;function c(g){return l++,function(_){s[g]=_,--l||t(s)}}for(var h=0,m;h<r.length;h++)m=r[h],m&&typeof m.then=="function"?m.then(c(h),i):s[h]=m;l||t(s)})};mt.race=function(r){if(!Array.isArray(r))throw new TypeError("You must pass an array to Promise.race().");return new mt(function(t,i){for(var s=0,l;s<r.length;s++)l=r[s],l&&typeof l.then=="function"?l.then(t,i):t(l)})};mt.resolve=function(r){return r&&ki(r)==="object"&&r.constructor===mt?r:new mt(function(t){t(r)})};mt.reject=function(r){return new mt(function(t,i){i(r)})};var Tr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $y(r){if(!(!r||!nu)){var t=Ue.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=r;for(var i=Ue.head.childNodes,s=null,l=i.length-1;l>-1;l--){var c=i[l],h=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(h)>-1&&(s=c)}return Ue.head.insertBefore(t,s),r}}var Hy="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function rs(){for(var r=12,t="";r-- >0;)t+=Hy[Math.random()*62|0];return t}function Hh(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vy(r){return Object.keys(r||{}).reduce(function(t,i){return t+"".concat(i,'="').concat(Hh(r[i]),'" ')},"").trim()}function Vh(r){return Object.keys(r||{}).reduce(function(t,i){return t+"".concat(i,": ").concat(r[i],";")},"")}function Wh(r){return r.size!==Tr.size||r.x!==Tr.x||r.y!==Tr.y||r.rotate!==Tr.rotate||r.flipX||r.flipY}function qh(r){var t=r.transform,i=r.containerWidth,s=r.iconWidth,l={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(t.x*32,", ").concat(t.y*32,") "),h="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),m="rotate(".concat(t.rotate," 0 0)"),g={transform:"".concat(c," ").concat(h," ").concat(m)},_={transform:"translate(".concat(s/2*-1," -256)")};return{outer:l,inner:g,path:_}}var yl={x:0,y:0,width:"100%",height:"100%"};function Pd(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||t)&&(r.attributes.fill="black"),r}function Wy(r){return r.tag==="g"?r.children:[r]}function qy(r){var t=r.children,i=r.attributes,s=r.main,l=r.mask,c=r.maskId,h=r.transform,m=s.width,g=s.icon,_=l.width,v=l.icon,P=qh({transform:h,containerWidth:_,iconWidth:m}),x={tag:"rect",attributes:se({},yl,{fill:"white"})},M=g.children?{children:g.children.map(Pd)}:{},W={tag:"g",attributes:se({},P.inner),children:[Pd(se({tag:g.tag,attributes:se({},g.attributes,P.path)},M))]},ie={tag:"g",attributes:se({},P.outer),children:[W]},Q="mask-".concat(c||rs()),L="clip-".concat(c||rs()),Y={tag:"mask",attributes:se({},yl,{id:Q,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,ie]},de={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:Wy(v)},Y]};return t.push(de,{tag:"rect",attributes:se({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(Q,")")},yl)}),{children:t,attributes:i}}function Ky(r){var t=r.children,i=r.attributes,s=r.main,l=r.transform,c=r.styles,h=Vh(c);if(h.length>0&&(i.style=h),Wh(l)){var m=qh({transform:l,containerWidth:s.width,iconWidth:s.width});t.push({tag:"g",attributes:se({},m.outer),children:[{tag:"g",attributes:se({},m.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:se({},s.icon.attributes,m.path)}]}]})}else t.push(s.icon);return{children:t,attributes:i}}function Gy(r){var t=r.children,i=r.main,s=r.mask,l=r.attributes,c=r.styles,h=r.transform;if(Wh(h)&&i.found&&!s.found){var m=i.width,g=i.height,_={x:m/g/2,y:.5};l.style=Vh(se({},c,{"transform-origin":"".concat(_.x+h.x/16,"em ").concat(_.y+h.y/16,"em")}))}return[{tag:"svg",attributes:l,children:t}]}function Qy(r){var t=r.prefix,i=r.iconName,s=r.children,l=r.attributes,c=r.symbol,h=c===!0?"".concat(t,"-").concat(lt.familyPrefix,"-").concat(i):c;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:se({},l,{id:h}),children:s}]}]}function Yy(r){var t=r.icons,i=t.main,s=t.mask,l=r.prefix,c=r.iconName,h=r.transform,m=r.symbol,g=r.title,_=r.maskId,v=r.titleId,P=r.extra,x=r.watchable,M=x===void 0?!1:x,W=s.found?s:i,ie=W.width,Q=W.height,L=l==="fak",Y=L?"":"fa-w-".concat(Math.ceil(ie/Q*16)),de=[lt.replacementClass,c?"".concat(lt.familyPrefix,"-").concat(c):"",Y].filter(function(Le){return P.classes.indexOf(Le)===-1}).filter(function(Le){return Le!==""||!!Le}).concat(P.classes).join(" "),ue={children:[],attributes:se({},P.attributes,{"data-prefix":l,"data-icon":c,class:de,role:P.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(ie," ").concat(Q)})},D=L&&!~P.classes.indexOf("fa-fw")?{width:"".concat(ie/Q*16*.0625,"em")}:{};M&&(ue.attributes[xy]=""),g&&ue.children.push({tag:"title",attributes:{id:ue.attributes["aria-labelledby"]||"title-".concat(v||rs())},children:[g]});var U=se({},ue,{prefix:l,iconName:c,main:i,mask:s,maskId:_,transform:h,symbol:m,styles:se({},D,P.styles)}),ce=s.found&&i.found?qy(U):Ky(U),we=ce.children,Pe=ce.attributes;return U.children=we,U.attributes=Pe,m?Qy(U):Gy(U)}lt.measurePerformance&&Ko&&Ko.mark&&Ko.measure;var vl=function(t,i,s,l){var c=Object.keys(t),h=c.length,m=i,g,_,v;for(s===void 0?(g=1,v=t[c[0]]):(g=0,v=s);g<h;g++)_=c[g],v=m(v,t[_],_,t);return v};function Kh(r,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=i.skipHooks,l=s===void 0?!1:s,c=Object.keys(t).reduce(function(h,m){var g=t[m],_=!!g.icon;return _?h[g.iconName]=g.icon:h[m]=g,h},{});typeof Lt.hooks.addPack=="function"&&!l?Lt.hooks.addPack(r,c):Lt.styles[r]=se({},Lt.styles[r]||{},c),r==="fas"&&Kh("fa",t)}var Od=Lt.styles,Jy=Lt.shims,Gh=function(){var t=function(l){return vl(Od,function(c,h,m){return c[m]=vl(h,l,{}),c},{})};t(function(s,l,c){return l[3]&&(s[l[3]]=c),s}),t(function(s,l,c){var h=l[2];return s[c]=c,h.forEach(function(m){s[m]=c}),s});var i="far"in Od;vl(Jy,function(s,l){var c=l[0],h=l[1],m=l[2];return h==="far"&&!i&&(h="fas"),s[c]={prefix:h,iconName:m},s},{})};Gh();Lt.styles;function Ad(r,t,i){if(r&&r[t]&&r[t][i])return{prefix:t,iconName:i,icon:r[t][i]}}function Qh(r){var t=r.tag,i=r.attributes,s=i===void 0?{}:i,l=r.children,c=l===void 0?[]:l;return typeof r=="string"?Hh(r):"<".concat(t," ").concat(Vy(s),">").concat(c.map(Qh).join(""),"</").concat(t,">")}var Xy=function(t){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(s,l){var c=l.toLowerCase().split("-"),h=c[0],m=c.slice(1).join("-");if(h&&m==="h")return s.flipX=!0,s;if(h&&m==="v")return s.flipY=!0,s;if(m=parseFloat(m),isNaN(m))return s;switch(h){case"grow":s.size=s.size+m;break;case"shrink":s.size=s.size-m;break;case"left":s.x=s.x-m;break;case"right":s.x=s.x+m;break;case"up":s.y=s.y-m;break;case"down":s.y=s.y+m;break;case"rotate":s.rotate=s.rotate+m;break}return s},i):i};function Ml(r){this.name="MissingIcon",this.message=r||"Icon unavailable",this.stack=new Error().stack}Ml.prototype=Object.create(Error.prototype);Ml.prototype.constructor=Ml;var ms={fill:"currentColor"},Yh={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};se({},ms,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var ou=se({},Yh,{attributeName:"opacity"});se({},ms,{cx:"256",cy:"364",r:"28"}),se({},Yh,{attributeName:"r",values:"28;14;28;28;14;28;"}),se({},ou,{values:"1;0;1;1;0;1;"});se({},ms,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),se({},ou,{values:"1;0;0;0;0;1;"});se({},ms,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),se({},ou,{values:"0;0;1;1;0;0;"});Lt.styles;function Nd(r){var t=r[0],i=r[1],s=r.slice(4),l=Ah(s,1),c=l[0],h=null;return Array.isArray(c)?h={tag:"g",attributes:{class:"".concat(lt.familyPrefix,"-").concat(gl.GROUP)},children:[{tag:"path",attributes:{class:"".concat(lt.familyPrefix,"-").concat(gl.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(lt.familyPrefix,"-").concat(gl.PRIMARY),fill:"currentColor",d:c[1]}}]}:h={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:t,height:i,icon:h}}Lt.styles;var Zy=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function ev(){var r=Lh,t=Mh,i=lt.familyPrefix,s=lt.replacementClass,l=Zy;if(i!==r||s!==t){var c=new RegExp("\\.".concat(r,"\\-"),"g"),h=new RegExp("\\--".concat(r,"\\-"),"g"),m=new RegExp("\\.".concat(t),"g");l=l.replace(c,".".concat(i,"-")).replace(h,"--".concat(i,"-")).replace(m,".".concat(s))}return l}var tv=(function(){function r(){wy(this,r),this.definitions={}}return _y(r,[{key:"add",value:function(){for(var i=this,s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];var h=l.reduce(this._pullDefinitions,{});Object.keys(h).forEach(function(m){i.definitions[m]=se({},i.definitions[m]||{},h[m]),Kh(m,h[m]),Gh()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,s){var l=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(l).map(function(c){var h=l[c],m=h.prefix,g=h.iconName,_=h.icon;i[m]||(i[m]={}),i[m][g]=_}),i}}]),r})();function nv(){lt.autoAddCss&&!Ld&&($y(ev()),Ld=!0)}function rv(r,t){return Object.defineProperty(r,"abstract",{get:t}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(function(s){return Qh(s)})}}),Object.defineProperty(r,"node",{get:function(){if(nu){var s=Ue.createElement("div");return s.innerHTML=r.html,s.children}}}),r}function Rd(r){var t=r.prefix,i=t===void 0?"fa":t,s=r.iconName;if(s)return Ad(ov.definitions,i,s)||Ad(Lt.styles,i,s)}function iv(r){return function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(t||{}).icon?t:Rd(t||{}),l=i.mask;return l&&(l=(l||{}).icon?l:Rd(l||{})),r(s,se({},i,{mask:l}))}}var ov=new tv,Ld=!1,Dl={transform:function(t){return Xy(t)}},sv=iv(function(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,s=i===void 0?Tr:i,l=t.symbol,c=l===void 0?!1:l,h=t.mask,m=h===void 0?null:h,g=t.maskId,_=g===void 0?null:g,v=t.title,P=v===void 0?null:v,x=t.titleId,M=x===void 0?null:x,W=t.classes,ie=W===void 0?[]:W,Q=t.attributes,L=Q===void 0?{}:Q,Y=t.styles,de=Y===void 0?{}:Y;if(r){var ue=r.prefix,D=r.iconName,U=r.icon;return rv(se({type:"icon"},r),function(){return nv(),lt.autoA11y&&(P?L["aria-labelledby"]="".concat(lt.replacementClass,"-title-").concat(M||rs()):(L["aria-hidden"]="true",L.focusable="false")),Yy({icons:{main:Nd(U),mask:m?Nd(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:ue,iconName:D,transform:se({},Tr,s),symbol:c,title:P,maskId:_,titleId:M,extra:{attributes:L,styles:de,classes:ie}})})}}),wl={exports:{}},kl,Md;function av(){if(Md)return kl;Md=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return kl=r,kl}var _l,Dd;function lv(){if(Dd)return _l;Dd=1;var r=av();function t(){}function i(){}return i.resetWarningCache=t,_l=function(){function s(h,m,g,_,v,P){if(P!==r){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}s.isRequired=s;function l(){return s}var c={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:i,resetWarningCache:t};return c.PropTypes=c,c},_l}var jd;function uv(){return jd||(jd=1,wl.exports=lv()()),wl.exports}var cv=uv();const ee=hs(cv);function Fd(r,t){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);t&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,s)}return i}function bn(r){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Fd(Object(i),!0).forEach(function(s){Cr(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):Fd(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}function is(r){"@babel/helpers - typeof";return is=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},is(r)}function Cr(r,t,i){return t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i,r}function fv(r,t){if(r==null)return{};var i={},s=Object.keys(r),l,c;for(c=0;c<s.length;c++)l=s[c],!(t.indexOf(l)>=0)&&(i[l]=r[l]);return i}function Jh(r,t){if(r==null)return{};var i=fv(r,t),s,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(l=0;l<c.length;l++)s=c[l],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(i[s]=r[s])}return i}function jl(r){return dv(r)||hv(r)||pv(r)||mv()}function dv(r){if(Array.isArray(r))return Fl(r)}function hv(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function pv(r,t){if(r){if(typeof r=="string")return Fl(r,t);var i=Object.prototype.toString.call(r).slice(8,-1);if(i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set")return Array.from(r);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Fl(r,t)}}function Fl(r,t){(t==null||t>r.length)&&(t=r.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=r[i];return s}function mv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gv(r){var t,i=r.beat,s=r.fade,l=r.beatFade,c=r.bounce,h=r.shake,m=r.flash,g=r.spin,_=r.spinPulse,v=r.spinReverse,P=r.pulse,x=r.fixedWidth,M=r.inverse,W=r.border,ie=r.listItem,Q=r.flip,L=r.size,Y=r.rotation,de=r.pull,ue=(t={"fa-beat":i,"fa-fade":s,"fa-beat-fade":l,"fa-bounce":c,"fa-shake":h,"fa-flash":m,"fa-spin":g,"fa-spin-reverse":v,"fa-spin-pulse":_,"fa-pulse":P,"fa-fw":x,"fa-inverse":M,"fa-border":W,"fa-li":ie,"fa-flip":Q===!0,"fa-flip-horizontal":Q==="horizontal"||Q==="both","fa-flip-vertical":Q==="vertical"||Q==="both"},Cr(t,"fa-".concat(L),typeof L<"u"&&L!==null),Cr(t,"fa-rotate-".concat(Y),typeof Y<"u"&&Y!==null&&Y!==0),Cr(t,"fa-pull-".concat(de),typeof de<"u"&&de!==null),Cr(t,"fa-swap-opacity",r.swapOpacity),t);return Object.keys(ue).map(function(D){return ue[D]?D:null}).filter(function(D){return D})}function yv(r){return r=r-0,r===r}function Xh(r){return yv(r)?r:(r=r.replace(/[\-_\s]+(.)?/g,function(t,i){return i?i.toUpperCase():""}),r.substr(0,1).toLowerCase()+r.substr(1))}var vv=["style"];function wv(r){return r.charAt(0).toUpperCase()+r.slice(1)}function kv(r){return r.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,i){var s=i.indexOf(":"),l=Xh(i.slice(0,s)),c=i.slice(s+1).trim();return l.startsWith("webkit")?t[wv(l)]=c:t[l]=c,t},{})}function Zh(r,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var s=(t.children||[]).map(function(g){return Zh(r,g)}),l=Object.keys(t.attributes||{}).reduce(function(g,_){var v=t.attributes[_];switch(_){case"class":g.attrs.className=v,delete t.attributes.class;break;case"style":g.attrs.style=kv(v);break;default:_.indexOf("aria-")===0||_.indexOf("data-")===0?g.attrs[_.toLowerCase()]=v:g.attrs[Xh(_)]=v}return g},{attrs:{}}),c=i.style,h=c===void 0?{}:c,m=Jh(i,vv);return l.attrs.style=bn(bn({},l.attrs.style),h),r.apply(void 0,[t.tag,bn(bn({},l.attrs),m)].concat(jl(s)))}var ep=!1;try{ep=!0}catch{}function _v(){if(!ep&&console&&typeof console.error=="function"){var r;(r=console).error.apply(r,arguments)}}function Bd(r){if(r&&is(r)==="object"&&r.prefix&&r.iconName&&r.icon)return r;if(Dl.icon)return Dl.icon(r);if(r===null)return null;if(r&&is(r)==="object"&&r.prefix&&r.iconName)return r;if(Array.isArray(r)&&r.length===2)return{prefix:r[0],iconName:r[1]};if(typeof r=="string")return{prefix:"fas",iconName:r}}function El(r,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Cr({},r,t):{}}var Ev=["forwardedRef"];function St(r){var t=r.forwardedRef,i=Jh(r,Ev),s=i.icon,l=i.mask,c=i.symbol,h=i.className,m=i.title,g=i.titleId,_=i.maskId,v=Bd(s),P=El("classes",[].concat(jl(gv(i)),jl(h.split(" ")))),x=El("transform",typeof i.transform=="string"?Dl.transform(i.transform):i.transform),M=El("mask",Bd(l)),W=sv(v,bn(bn(bn(bn({},P),x),M),{},{symbol:c,title:m,titleId:g,maskId:_}));if(!W)return _v("Could not find icon",v),null;var ie=W.abstract,Q={ref:t};return Object.keys(i).forEach(function(L){St.defaultProps.hasOwnProperty(L)||(Q[L]=i[L])}),Tv(ie[0],Q)}St.displayName="FontAwesomeIcon";St.propTypes={beat:ee.bool,border:ee.bool,beatFade:ee.bool,bounce:ee.bool,className:ee.string,fade:ee.bool,flash:ee.bool,mask:ee.oneOfType([ee.object,ee.array,ee.string]),maskId:ee.string,fixedWidth:ee.bool,inverse:ee.bool,flip:ee.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ee.oneOfType([ee.object,ee.array,ee.string]),listItem:ee.bool,pull:ee.oneOf(["right","left"]),pulse:ee.bool,rotation:ee.oneOf([0,90,180,270]),shake:ee.bool,size:ee.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ee.bool,spinPulse:ee.bool,spinReverse:ee.bool,symbol:ee.oneOfType([ee.bool,ee.string]),title:ee.string,titleId:ee.string,transform:ee.oneOfType([ee.string,ee.object]),swapOpacity:ee.bool};St.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Tv=Zh.bind(null,eu.createElement);/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var Cv={prefix:"fas",iconName:"bars",icon:[448,512,[],"f0c9","M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]},Sv={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"]},Iv={prefix:"fas",iconName:"chevron-left",icon:[320,512,[],"f053","M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"]},bv={prefix:"fas",iconName:"chevron-right",icon:[320,512,[],"f054","M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"]},xv={prefix:"fas",iconName:"search",icon:[512,512,[],"f002","M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]},su={prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]};const Ai="https://taskboard-apis-production.up.railway.app/tasks",be={Success:"Success",API_Error:"API_Error",Unknown_Error:"Unknown_Error"};async function Pv(r){const t=r?`?ownerId=${r}`:"";try{const i=await fetch(Ai+t);if(!i.ok)return{status:be.API_Error,response:i};const s=await i.json();return{status:be.Success,data:s}}catch{return{status:be.Unknown_Error}}}async function Ov(r){try{const t=await fetch(Ai,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(r)});if(!t.ok)return{status:be.API_Error,response:t};const i=await t.json();return{status:be.Success,data:i}}catch{return{status:be.Unknown_Error}}}async function Av(r){try{const t=await fetch(`${Ai}/${r.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(r)});if(!t.ok)return{status:be.API_Error,response:t};const i=await t.json();return{status:be.Success,data:i}}catch{return{status:be.Unknown_Error}}}async function Nv(r){try{const t=await fetch(`${Ai}/${r}`,{method:"DELETE"});if(!t.ok)return{status:be.API_Error,response:t};const i=await t.json();return{status:be.Success,data:i}}catch{return{status:be.Unknown_Error}}}async function Rv(r){try{const t=await fetch(`${Ai}/bulk-delete`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({ids:r})});return t.ok?{status:be.Success}:{status:be.API_Error,response:t}}catch{return{status:be.Unknown_Error}}}const tp="SweetAlert2:",Lv=r=>{const t=[];for(let i=0;i<r.length;i++)t.indexOf(r[i])===-1&&t.push(r[i]);return t},np=r=>r.charAt(0).toUpperCase()+r.slice(1),Tl=r=>Object.keys(r).map(t=>r[t]),yt=r=>Array.prototype.slice.call(r),Je=r=>{console.warn(`${tp} ${typeof r=="object"?r.join(" "):r}`)},rr=r=>{console.error(`${tp} ${r}`)},Ud=[],Mv=r=>{Ud.includes(r)||(Ud.push(r),Je(r))},rp=(r,t)=>{Mv(`"${r}" is deprecated and will be removed in the next major release. Please use "${t}" instead.`)},gs=r=>typeof r=="function"?r():r,au=r=>r&&typeof r.toPromise=="function",Ni=r=>au(r)?r.toPromise():Promise.resolve(r),lu=r=>r&&Promise.resolve(r)===r,Lr=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Dv=r=>typeof r=="object"&&r.jquery,zd=r=>r instanceof Element||Dv(r),jv=r=>{const t={};return typeof r[0]=="object"&&!zd(r[0])?Object.assign(t,r[0]):["title","html","icon"].forEach((i,s)=>{const l=r[s];typeof l=="string"||zd(l)?t[i]=l:l!==void 0&&rr(`Unexpected type of ${i}! Expected "string" or "Element", got ${typeof l}`)}),t},Fv="swal2-",ip=r=>{const t={};for(const i in r)t[r[i]]=Fv+r[i];return t},I=ip(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","header","content","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),_i=ip(["success","warning","info","question","error"]),xe=()=>document.body.querySelector(`.${I.container}`),Ri=r=>{const t=xe();return t?t.querySelector(r):null},Xe=r=>Ri(`.${r}`),me=()=>Xe(I.popup),op=()=>Xe(I.icon),sp=()=>Xe(I.title),vt=()=>Xe(I.content),ap=()=>Xe(I["html-container"]),lp=()=>Xe(I.image),up=()=>Xe(I["progress-steps"]),ys=()=>Xe(I["validation-message"]),jt=()=>Ri(`.${I.actions} .${I.confirm}`),An=()=>Ri(`.${I.actions} .${I.deny}`),Bv=()=>Xe(I["input-label"]),vs=()=>Ri(`.${I.loader}`),er=()=>Ri(`.${I.actions} .${I.cancel}`),ws=()=>Xe(I.actions),cp=()=>Xe(I.header),fp=()=>Xe(I.footer),ks=()=>Xe(I["timer-progress-bar"]),uu=()=>Xe(I.close),Uv=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,cu=()=>{const r=yt(me().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((i,s)=>(i=parseInt(i.getAttribute("tabindex")),s=parseInt(s.getAttribute("tabindex")),i>s?1:i<s?-1:0)),t=yt(me().querySelectorAll(Uv)).filter(i=>i.getAttribute("tabindex")!=="-1");return Lv(r.concat(t)).filter(i=>gt(i))},dp=()=>!fu()&&!document.body.classList.contains(I["no-backdrop"]),fu=()=>document.body.classList.contains(I["toast-shown"]),zv=()=>me().hasAttribute("data-loading"),Sr={previousBodyPadding:null},Be=(r,t)=>{if(r.textContent="",t){const s=new DOMParser().parseFromString(t,"text/html");yt(s.querySelector("head").childNodes).forEach(l=>{r.appendChild(l)}),yt(s.querySelector("body").childNodes).forEach(l=>{r.appendChild(l)})}},Li=(r,t)=>{if(!t)return!1;const i=t.split(/\s+/);for(let s=0;s<i.length;s++)if(!r.classList.contains(i[s]))return!1;return!0},$v=(r,t)=>{yt(r.classList).forEach(i=>{!Tl(I).includes(i)&&!Tl(_i).includes(i)&&!Tl(t.showClass).includes(i)&&r.classList.remove(i)})},ut=(r,t,i)=>{if($v(r,t),t.customClass&&t.customClass[i]){if(typeof t.customClass[i]!="string"&&!t.customClass[i].forEach)return Je(`Invalid type of customClass.${i}! Expected string or iterable object, got "${typeof t.customClass[i]}"`);ae(r,t.customClass[i])}};function du(r,t){if(!t)return null;switch(t){case"select":case"textarea":case"file":return Mt(r,I[t]);case"checkbox":return r.querySelector(`.${I.checkbox} input`);case"radio":return r.querySelector(`.${I.radio} input:checked`)||r.querySelector(`.${I.radio} input:first-child`);case"range":return r.querySelector(`.${I.range} input`);default:return Mt(r,I.input)}}const hp=r=>{if(r.focus(),r.type!=="file"){const t=r.value;r.value="",r.value=t}},pp=(r,t,i)=>{!r||!t||(typeof t=="string"&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(s=>{r.forEach?r.forEach(l=>{i?l.classList.add(s):l.classList.remove(s)}):i?r.classList.add(s):r.classList.remove(s)}))},ae=(r,t)=>{pp(r,t,!0)},Ft=(r,t)=>{pp(r,t,!1)},Mt=(r,t)=>{for(let i=0;i<r.childNodes.length;i++)if(Li(r.childNodes[i],t))return r.childNodes[i]},Ei=(r,t,i)=>{i===`${parseInt(i)}`&&(i=parseInt(i)),i||parseInt(i)===0?r.style[t]=typeof i=="number"?`${i}px`:i:r.style.removeProperty(t)},ze=(r,t="flex")=>{r.style.display=t},$e=r=>{r.style.display="none"},$d=(r,t,i,s)=>{const l=r.querySelector(t);l&&(l.style[i]=s)},_s=(r,t,i)=>{t?ze(r,i):$e(r)},gt=r=>!!(r&&(r.offsetWidth||r.offsetHeight||r.getClientRects().length)),Hv=()=>!gt(jt())&&!gt(An())&&!gt(er()),Hd=r=>r.scrollHeight>r.clientHeight,mp=r=>{const t=window.getComputedStyle(r),i=parseFloat(t.getPropertyValue("animation-duration")||"0"),s=parseFloat(t.getPropertyValue("transition-duration")||"0");return i>0||s>0},Vv=(r,t)=>{if(typeof r.contains=="function")return r.contains(t)},hu=(r,t=!1)=>{const i=ks();gt(i)&&(t&&(i.style.transition="none",i.style.width="100%"),setTimeout(()=>{i.style.transition=`width ${r/1e3}s linear`,i.style.width="0%"},10))},Wv=()=>{const r=ks(),t=parseInt(window.getComputedStyle(r).width);r.style.removeProperty("transition"),r.style.width="100%";const i=parseInt(window.getComputedStyle(r).width),s=parseInt(t/i*100);r.style.removeProperty("transition"),r.style.width=`${s}%`},gp=()=>typeof window>"u"||typeof document>"u",qv=`
 <div aria-labelledby="${I.title}" aria-describedby="${I.content}" class="${I.popup}" tabindex="-1">
   <div class="${I.header}">
     <ul class="${I["progress-steps"]}"></ul>
     <div class="${I.icon}"></div>
     <img class="${I.image}" />
     <h2 class="${I.title}" id="${I.title}"></h2>
     <button type="button" class="${I.close}"></button>
   </div>
   <div class="${I.content}">
     <div id="${I.content}" class="${I["html-container"]}"></div>
     <input class="${I.input}" />
     <input type="file" class="${I.file}" />
     <div class="${I.range}">
       <input type="range" />
       <output></output>
     </div>
     <select class="${I.select}"></select>
     <div class="${I.radio}"></div>
     <label for="${I.checkbox}" class="${I.checkbox}">
       <input type="checkbox" />
       <span class="${I.label}"></span>
     </label>
     <textarea class="${I.textarea}"></textarea>
     <div class="${I["validation-message"]}" id="${I["validation-message"]}"></div>
   </div>
   <div class="${I.actions}">
     <div class="${I.loader}"></div>
     <button type="button" class="${I.confirm}"></button>
     <button type="button" class="${I.deny}"></button>
     <button type="button" class="${I.cancel}"></button>
   </div>
   <div class="${I.footer}"></div>
   <div class="${I["timer-progress-bar-container"]}">
     <div class="${I["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Kv=()=>{const r=xe();return r?(r.parentNode.removeChild(r),Ft([document.documentElement,document.body],[I["no-backdrop"],I["toast-shown"],I["has-column"]]),!0):!1};let Vd;const Yn=r=>{Nn.isVisible()&&Vd!==r.target.value&&Nn.resetValidationMessage(),Vd=r.target.value},Gv=()=>{const r=vt(),t=Mt(r,I.input),i=Mt(r,I.file),s=r.querySelector(`.${I.range} input`),l=r.querySelector(`.${I.range} output`),c=Mt(r,I.select),h=r.querySelector(`.${I.checkbox} input`),m=Mt(r,I.textarea);t.oninput=Yn,i.onchange=Yn,c.onchange=Yn,h.onchange=Yn,m.oninput=Yn,s.oninput=g=>{Yn(g),l.value=s.value},s.onchange=g=>{Yn(g),s.nextSibling.value=s.value}},Qv=r=>typeof r=="string"?document.querySelector(r):r,Yv=r=>{const t=me();t.setAttribute("role",r.toast?"alert":"dialog"),t.setAttribute("aria-live",r.toast?"polite":"assertive"),r.toast||t.setAttribute("aria-modal","true")},Jv=r=>{window.getComputedStyle(r).direction==="rtl"&&ae(xe(),I.rtl)},Xv=r=>{const t=Kv();if(gp()){rr("SweetAlert2 requires document to initialize");return}const i=document.createElement("div");i.className=I.container,t&&ae(i,I["no-transition"]),Be(i,qv);const s=Qv(r.target);s.appendChild(i),Yv(r),Jv(s),Gv()},pu=(r,t)=>{r instanceof HTMLElement?t.appendChild(r):typeof r=="object"?Zv(r,t):r&&Be(t,r)},Zv=(r,t)=>{r.jquery?ew(t,r):Be(t,r.toString())},ew=(r,t)=>{if(r.textContent="",0 in t)for(let i=0;i in t;i++)r.appendChild(t[i].cloneNode(!0));else r.appendChild(t.cloneNode(!0))},Ii=(()=>{if(gp())return!1;const r=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&typeof r.style[i]<"u")return t[i];return!1})(),tw=()=>{const r=document.createElement("div");r.className=I["scrollbar-measure"],document.body.appendChild(r);const t=r.getBoundingClientRect().width-r.clientWidth;return document.body.removeChild(r),t},nw=(r,t)=>{const i=ws(),s=vs(),l=jt(),c=An(),h=er();!t.showConfirmButton&&!t.showDenyButton&&!t.showCancelButton&&$e(i),ut(i,t,"actions"),Cl(l,"confirm",t),Cl(c,"deny",t),Cl(h,"cancel",t),rw(l,c,h,t),t.reverseButtons&&(i.insertBefore(h,s),i.insertBefore(c,s),i.insertBefore(l,s)),Be(s,t.loaderHtml),ut(s,t,"loader")};function rw(r,t,i,s){if(!s.buttonsStyling)return Ft([r,t,i],I.styled);ae([r,t,i],I.styled),s.confirmButtonColor&&(r.style.backgroundColor=s.confirmButtonColor),s.denyButtonColor&&(t.style.backgroundColor=s.denyButtonColor),s.cancelButtonColor&&(i.style.backgroundColor=s.cancelButtonColor)}function Cl(r,t,i){_s(r,i[`show${np(t)}Button`],"inline-block"),Be(r,i[`${t}ButtonText`]),r.setAttribute("aria-label",i[`${t}ButtonAriaLabel`]),r.className=I[t],ut(r,i,`${t}Button`),ae(r,i[`${t}ButtonClass`])}function iw(r,t){typeof t=="string"?r.style.background=t:t||ae([document.documentElement,document.body],I["no-backdrop"])}function ow(r,t){t in I?ae(r,I[t]):(Je('The "position" parameter is not valid, defaulting to "center"'),ae(r,I.center))}function sw(r,t){if(t&&typeof t=="string"){const i=`grow-${t}`;i in I&&ae(r,I[i])}}const aw=(r,t)=>{const i=xe();if(!i)return;iw(i,t.backdrop),!t.backdrop&&t.allowOutsideClick&&Je('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),ow(i,t.position),sw(i,t.grow),ut(i,t,"container");const s=document.body.getAttribute("data-swal2-queue-step");s&&(i.setAttribute("data-queue-step",s),document.body.removeAttribute("data-swal2-queue-step"))},pe={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},lw=["input","file","range","select","radio","checkbox","textarea"],uw=(r,t)=>{const i=vt(),s=pe.innerParams.get(r),l=!s||t.input!==s.input;lw.forEach(c=>{const h=I[c],m=Mt(i,h);dw(c,t.inputAttributes),m.className=h,l&&$e(m)}),t.input&&(l&&cw(t),hw(t))},cw=r=>{if(!Ye[r.input])return rr(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${r.input}"`);const t=yp(r.input),i=Ye[r.input](t,r);ze(i),setTimeout(()=>{hp(i)})},fw=r=>{for(let t=0;t<r.attributes.length;t++){const i=r.attributes[t].name;["type","value","style"].includes(i)||r.removeAttribute(i)}},dw=(r,t)=>{const i=du(vt(),r);if(i){fw(i);for(const s in t)r==="range"&&s==="placeholder"||i.setAttribute(s,t[s])}},hw=r=>{const t=yp(r.input);r.customClass&&ae(t,r.customClass.input)},mu=(r,t)=>{(!r.placeholder||t.inputPlaceholder)&&(r.placeholder=t.inputPlaceholder)},Mi=(r,t,i)=>{if(i.inputLabel){r.id=I.input;const s=document.createElement("label"),l=I["input-label"];s.setAttribute("for",r.id),s.className=l,ae(s,i.customClass.inputLabel),s.innerText=i.inputLabel,t.insertAdjacentElement("beforebegin",s)}},yp=r=>{const t=I[r]?I[r]:I.input;return Mt(vt(),t)},Ye={};Ye.text=Ye.email=Ye.password=Ye.number=Ye.tel=Ye.url=(r,t)=>(typeof t.inputValue=="string"||typeof t.inputValue=="number"?r.value=t.inputValue:lu(t.inputValue)||Je(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t.inputValue}"`),Mi(r,r,t),mu(r,t),r.type=t.input,r);Ye.file=(r,t)=>(Mi(r,r,t),mu(r,t),r);Ye.range=(r,t)=>{const i=r.querySelector("input"),s=r.querySelector("output");return i.value=t.inputValue,i.type=t.input,s.value=t.inputValue,Mi(i,r,t),r};Ye.select=(r,t)=>{if(r.textContent="",t.inputPlaceholder){const i=document.createElement("option");Be(i,t.inputPlaceholder),i.value="",i.disabled=!0,i.selected=!0,r.appendChild(i)}return Mi(r,r,t),r};Ye.radio=r=>(r.textContent="",r);Ye.checkbox=(r,t)=>{const i=du(vt(),"checkbox");i.value=1,i.id=I.checkbox,i.checked=!!t.inputValue;const s=r.querySelector("span");return Be(s,t.inputPlaceholder),r};Ye.textarea=(r,t)=>{r.value=t.inputValue,mu(r,t),Mi(r,r,t);const i=s=>parseInt(window.getComputedStyle(s).paddingLeft)+parseInt(window.getComputedStyle(s).paddingRight);if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(me()).width),l=()=>{const c=r.offsetWidth+i(me())+i(vt());c>s?me().style.width=`${c}px`:me().style.width=null};new MutationObserver(l).observe(r,{attributes:!0,attributeFilter:["style"]})}return r};const pw=(r,t)=>{const i=ap();ut(i,t,"htmlContainer"),t.html?(pu(t.html,i),ze(i,"block")):t.text?(i.textContent=t.text,ze(i,"block")):$e(i),uw(r,t),ut(vt(),t,"content")},mw=(r,t)=>{const i=fp();_s(i,t.footer),t.footer&&pu(t.footer,i),ut(i,t,"footer")},gw=(r,t)=>{const i=uu();Be(i,t.closeButtonHtml),ut(i,t,"closeButton"),_s(i,t.showCloseButton),i.setAttribute("aria-label",t.closeButtonAriaLabel)},yw=(r,t)=>{const i=pe.innerParams.get(r),s=op();if(i&&t.icon===i.icon){qd(s,t),Wd(s,t);return}if(!t.icon&&!t.iconHtml)return $e(s);if(t.icon&&Object.keys(_i).indexOf(t.icon)===-1)return rr(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`),$e(s);ze(s),qd(s,t),Wd(s,t),ae(s,t.showClass.icon)},Wd=(r,t)=>{for(const i in _i)t.icon!==i&&Ft(r,_i[i]);ae(r,_i[t.icon]),ww(r,t),vw(),ut(r,t,"icon")},vw=()=>{const r=me(),t=window.getComputedStyle(r).getPropertyValue("background-color"),i=r.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<i.length;s++)i[s].style.backgroundColor=t},qd=(r,t)=>{r.textContent="",t.iconHtml?Be(r,Kd(t.iconHtml)):t.icon==="success"?Be(r,`
      <div class="swal2-success-circular-line-left"></div>
      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
      <div class="swal2-success-circular-line-right"></div>
    `):t.icon==="error"?Be(r,`
      <span class="swal2-x-mark">
        <span class="swal2-x-mark-line-left"></span>
        <span class="swal2-x-mark-line-right"></span>
      </span>
    `):Be(r,Kd({question:"?",warning:"!",info:"i"}[t.icon]))},ww=(r,t)=>{if(t.iconColor){r.style.color=t.iconColor,r.style.borderColor=t.iconColor;for(const i of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])$d(r,i,"backgroundColor",t.iconColor);$d(r,".swal2-success-ring","borderColor",t.iconColor)}},Kd=r=>`<div class="${I["icon-content"]}">${r}</div>`,kw=(r,t)=>{const i=lp();if(!t.imageUrl)return $e(i);ze(i,""),i.setAttribute("src",t.imageUrl),i.setAttribute("alt",t.imageAlt),Ei(i,"width",t.imageWidth),Ei(i,"height",t.imageHeight),i.className=I.image,ut(i,t,"image")};let Xt=[];const _w=function(r){rp("Swal.queue()","async/await");const t=this;Xt=r;const i=(l,c)=>{Xt=[],l(c)},s=[];return new Promise(l=>{(function c(h,m){h<Xt.length?(document.body.setAttribute("data-swal2-queue-step",h),t.fire(Xt[h]).then(g=>{typeof g.value<"u"?(s.push(g.value),c(h+1)):i(l,{dismiss:g.dismiss})})):i(l,{value:s})})(0)})},vp=()=>xe()&&xe().getAttribute("data-queue-step"),Ew=(r,t)=>t&&t<Xt.length?Xt.splice(t,0,r):Xt.push(r),Tw=r=>{typeof Xt[r]<"u"&&Xt.splice(r,1)},Cw=r=>{const t=document.createElement("li");return ae(t,I["progress-step"]),Be(t,r),t},Sw=r=>{const t=document.createElement("li");return ae(t,I["progress-step-line"]),r.progressStepsDistance&&(t.style.width=r.progressStepsDistance),t},Iw=(r,t)=>{const i=up();if(!t.progressSteps||t.progressSteps.length===0)return $e(i);ze(i),i.textContent="";const s=parseInt(t.currentProgressStep===void 0?vp():t.currentProgressStep);s>=t.progressSteps.length&&Je("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),t.progressSteps.forEach((l,c)=>{const h=Cw(l);if(i.appendChild(h),c===s&&ae(h,I["active-progress-step"]),c!==t.progressSteps.length-1){const m=Sw(t);i.appendChild(m)}})},bw=(r,t)=>{const i=sp();_s(i,t.title||t.titleText,"block"),t.title&&pu(t.title,i),t.titleText&&(i.innerText=t.titleText),ut(i,t,"title")},xw=(r,t)=>{const i=cp();ut(i,t,"header"),Iw(r,t),yw(r,t),kw(r,t),bw(r,t),gw(r,t)},Pw=(r,t)=>{const i=xe(),s=me();t.toast?(Ei(i,"width",t.width),s.style.width="100%"):Ei(s,"width",t.width),Ei(s,"padding",t.padding),t.background&&(s.style.background=t.background),$e(ys()),Ow(s,t)},Ow=(r,t)=>{r.className=`${I.popup} ${gt(r)?t.showClass.popup:""}`,t.toast?(ae([document.documentElement,document.body],I["toast-shown"]),ae(r,I.toast)):ae(r,I.modal),ut(r,t,"popup"),typeof t.customClass=="string"&&ae(r,t.customClass),t.icon&&ae(r,I[`icon-${t.icon}`])},wp=(r,t)=>{Pw(r,t),aw(r,t),xw(r,t),pw(r,t),nw(r,t),mw(r,t),typeof t.didRender=="function"?t.didRender(me()):typeof t.onRender=="function"&&t.onRender(me())},Aw=()=>gt(me()),kp=()=>jt()&&jt().click(),Nw=()=>An()&&An().click(),Rw=()=>er()&&er().click();function Lw(...r){const t=this;return new t(...r)}function Mw(r){class t extends this{_main(s,l){return super._main(s,Object.assign({},r,l))}}return t}const bi=r=>{let t=me();t||Nn.fire(),t=me();const i=ws(),s=vs();!r&&gt(jt())&&(r=jt()),ze(i),r&&($e(r),s.setAttribute("data-button-to-replace",r.className)),s.parentNode.insertBefore(s,r),ae([t,i],I.loading),ze(s),t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()},Dw=100,J={},jw=()=>{J.previousActiveElement&&J.previousActiveElement.focus?(J.previousActiveElement.focus(),J.previousActiveElement=null):document.body&&document.body.focus()},Fw=r=>new Promise(t=>{if(!r)return t();const i=window.scrollX,s=window.scrollY;J.restoreFocusTimeout=setTimeout(()=>{jw(),t()},Dw),typeof i<"u"&&typeof s<"u"&&window.scrollTo(i,s)}),Bw=()=>J.timeout&&J.timeout.getTimerLeft(),_p=()=>{if(J.timeout)return Wv(),J.timeout.stop()},Ep=()=>{if(J.timeout){const r=J.timeout.start();return hu(r),r}},Uw=()=>{const r=J.timeout;return r&&(r.running?_p():Ep())},zw=r=>{if(J.timeout){const t=J.timeout.increase(r);return hu(t,!0),t}},$w=()=>J.timeout&&J.timeout.isRunning();let Gd=!1;const Bl={};function Hw(r="data-swal-template"){Bl[r]=this,Gd||(document.body.addEventListener("click",Vw),Gd=!0)}const Vw=r=>{for(let t=r.target;t&&t!==document;t=t.parentNode)for(const i in Bl){const s=t.getAttribute(i);if(s){Bl[i].fire({template:s});return}}},Ir={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,onBeforeOpen:void 0,onOpen:void 0,willOpen:void 0,didOpen:void 0,onRender:void 0,didRender:void 0,onClose:void 0,onAfterClose:void 0,willClose:void 0,didClose:void 0,onDestroy:void 0,didDestroy:void 0,scrollbarPadding:!0},Ww=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","onAfterClose","onClose","onDestroy","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],qw={animation:'showClass" and "hideClass',onBeforeOpen:"willOpen",onOpen:"didOpen",onRender:"didRender",onClose:"willClose",onAfterClose:"didClose",onDestroy:"didDestroy"},Kw=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Tp=r=>Object.prototype.hasOwnProperty.call(Ir,r),Gw=r=>Ww.indexOf(r)!==-1,Ul=r=>qw[r],Qw=r=>{Tp(r)||Je(`Unknown parameter "${r}"`)},Yw=r=>{Kw.includes(r)&&Je(`The parameter "${r}" is incompatible with toasts`)},Jw=r=>{Ul(r)&&rp(r,Ul(r))},Xw=r=>{for(const t in r)Qw(t),r.toast&&Yw(t),Jw(t)},Zw=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:jv,bindClickHandler:Hw,clickCancel:Rw,clickConfirm:kp,clickDeny:Nw,deleteQueueStep:Tw,enableLoading:bi,fire:Lw,getActions:ws,getCancelButton:er,getCloseButton:uu,getConfirmButton:jt,getContainer:xe,getContent:vt,getDenyButton:An,getFocusableElements:cu,getFooter:fp,getHeader:cp,getHtmlContainer:ap,getIcon:op,getImage:lp,getInputLabel:Bv,getLoader:vs,getPopup:me,getQueueStep:vp,getTimerLeft:Bw,getTimerProgressBar:ks,getTitle:sp,getValidationMessage:ys,increaseTimer:zw,insertQueueStep:Ew,isDeprecatedParameter:Ul,isLoading:zv,isTimerRunning:$w,isUpdatableParameter:Gw,isValidParameter:Tp,isVisible:Aw,mixin:Mw,queue:_w,resumeTimer:Ep,showLoading:bi,stopTimer:_p,toggleTimer:Uw},Symbol.toStringTag,{value:"Module"}));function Qd(){if(!pe.innerParams.get(this))return;const t=pe.domCache.get(this);$e(t.loader);const i=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));i.length?ze(i[0],"inline-block"):Hv()&&$e(t.actions),Ft([t.popup,t.actions],I.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1}function e1(r){const t=pe.innerParams.get(r||this),i=pe.domCache.get(r||this);return i?du(i.content,t.input):null}const t1=()=>{Sr.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Sr.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Sr.previousBodyPadding+tw()}px`)},n1=()=>{Sr.previousBodyPadding!==null&&(document.body.style.paddingRight=`${Sr.previousBodyPadding}px`,Sr.previousBodyPadding=null)},r1=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Li(document.body,I.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,ae(document.body,I.iosfix),o1(),i1()}},i1=()=>{!navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)&&me().scrollHeight>window.innerHeight-44&&(xe().style.paddingBottom="44px")},o1=()=>{const r=xe();let t;r.ontouchstart=i=>{t=s1(i)},r.ontouchmove=i=>{t&&(i.preventDefault(),i.stopPropagation())}},s1=r=>{const t=r.target,i=xe();return a1(r)||l1(r)?!1:t===i||!Hd(i)&&t.tagName!=="INPUT"&&!(Hd(vt())&&vt().contains(t))},a1=r=>r.touches&&r.touches.length&&r.touches[0].touchType==="stylus",l1=r=>r.touches&&r.touches.length>1,u1=()=>{if(Li(document.body,I.iosfix)){const r=parseInt(document.body.style.top,10);Ft(document.body,I.iosfix),document.body.style.top="",document.body.scrollTop=r*-1}},Cp=()=>!!window.MSInputMethodContext&&!!document.documentMode,zl=()=>{const r=xe(),t=me();r.style.removeProperty("align-items"),t.offsetTop<0&&(r.style.alignItems="flex-start")},c1=()=>{typeof window<"u"&&Cp()&&(zl(),window.addEventListener("resize",zl))},f1=()=>{typeof window<"u"&&Cp()&&window.removeEventListener("resize",zl)},d1=()=>{yt(document.body.children).forEach(t=>{t===xe()||Vv(t,xe())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))})},h1=()=>{yt(document.body.children).forEach(t=>{t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})},gu={swalPromiseResolve:new WeakMap};function Sp(r,t,i,s){fu()?Yd(r,s):(Fw(i).then(()=>Yd(r,s)),J.keydownTarget.removeEventListener("keydown",J.keydownHandler,{capture:J.keydownListenerCapture}),J.keydownHandlerAdded=!1),t.parentNode&&!document.body.getAttribute("data-swal2-queue-step")&&t.parentNode.removeChild(t),dp()&&(n1(),u1(),f1(),h1()),p1()}function p1(){Ft([document.documentElement,document.body],[I.shown,I["height-auto"],I["no-backdrop"],I["toast-shown"]])}function Go(r){const t=me();if(!t)return;r=m1(r);const i=pe.innerParams.get(this);if(!i||Li(t,i.hideClass.popup))return;const s=gu.swalPromiseResolve.get(this);Ft(t,i.showClass.popup),ae(t,i.hideClass.popup);const l=xe();Ft(l,i.showClass.backdrop),ae(l,i.hideClass.backdrop),g1(this,t,i),s(r)}const m1=r=>typeof r>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},r),g1=(r,t,i)=>{const s=xe(),l=Ii&&mp(t),{onClose:c,onAfterClose:h,willClose:m,didClose:g}=i;y1(t,m,c),l?v1(r,t,s,i.returnFocus,g||h):Sp(r,s,i.returnFocus,g||h)},y1=(r,t,i)=>{t!==null&&typeof t=="function"?t(r):i!==null&&typeof i=="function"&&i(r)},v1=(r,t,i,s,l)=>{J.swalCloseEventFinishedCallback=Sp.bind(null,r,i,s,l),t.addEventListener(Ii,function(c){c.target===t&&(J.swalCloseEventFinishedCallback(),delete J.swalCloseEventFinishedCallback)})},Yd=(r,t)=>{setTimeout(()=>{typeof t=="function"&&t(),r._destroy()})};function Ip(r,t,i){const s=pe.domCache.get(r);t.forEach(l=>{s[l].disabled=i})}function bp(r,t){if(!r)return!1;if(r.type==="radio"){const s=r.parentNode.parentNode.querySelectorAll("input");for(let l=0;l<s.length;l++)s[l].disabled=t}else r.disabled=t}function w1(){Ip(this,["confirmButton","denyButton","cancelButton"],!1)}function k1(){Ip(this,["confirmButton","denyButton","cancelButton"],!0)}function _1(){return bp(this.getInput(),!1)}function E1(){return bp(this.getInput(),!0)}function T1(r){const t=pe.domCache.get(this),i=pe.innerParams.get(this);Be(t.validationMessage,r),t.validationMessage.className=I["validation-message"],i.customClass&&i.customClass.validationMessage&&ae(t.validationMessage,i.customClass.validationMessage),ze(t.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedBy",I["validation-message"]),hp(s),ae(s,I.inputerror))}function C1(){const r=pe.domCache.get(this);r.validationMessage&&$e(r.validationMessage);const t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),Ft(t,I.inputerror))}function S1(){return pe.domCache.get(this).progressSteps}class I1{constructor(t,i){this.callback=t,this.remaining=i,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}increase(t){const i=this.running;return i&&this.stop(),this.remaining+=t,i&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Jd={email:(r,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(r)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(r,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(r)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function b1(r){r.inputValidator||Object.keys(Jd).forEach(t=>{r.input===t&&(r.inputValidator=Jd[t])})}function x1(r){(!r.target||typeof r.target=="string"&&!document.querySelector(r.target)||typeof r.target!="string"&&!r.target.appendChild)&&(Je('Target parameter is not valid, defaulting to "body"'),r.target="body")}function P1(r){b1(r),r.showLoaderOnConfirm&&!r.preConfirm&&Je(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),r.animation=gs(r.animation),x1(r),typeof r.title=="string"&&(r.title=r.title.split(`
`).join("<br />")),Xv(r)}const xp=["swal-title","swal-html","swal-footer"],O1=r=>{const t=typeof r.template=="string"?document.querySelector(r.template):r.template;if(!t)return{};const i=t.content||t;return j1(i),Object.assign(A1(i),N1(i),R1(i),L1(i),M1(i),D1(i,xp))},A1=r=>{const t={};return yt(r.querySelectorAll("swal-param")).forEach(i=>{tr(i,["name","value"]);const s=i.getAttribute("name");let l=i.getAttribute("value");typeof Ir[s]=="boolean"&&l==="false"&&(l=!1),typeof Ir[s]=="object"&&(l=JSON.parse(l)),t[s]=l}),t},N1=r=>{const t={};return yt(r.querySelectorAll("swal-button")).forEach(i=>{tr(i,["type","color","aria-label"]);const s=i.getAttribute("type");t[`${s}ButtonText`]=i.innerHTML,t[`show${np(s)}Button`]=!0,i.hasAttribute("color")&&(t[`${s}ButtonColor`]=i.getAttribute("color")),i.hasAttribute("aria-label")&&(t[`${s}ButtonAriaLabel`]=i.getAttribute("aria-label"))}),t},R1=r=>{const t={},i=r.querySelector("swal-image");return i&&(tr(i,["src","width","height","alt"]),i.hasAttribute("src")&&(t.imageUrl=i.getAttribute("src")),i.hasAttribute("width")&&(t.imageWidth=i.getAttribute("width")),i.hasAttribute("height")&&(t.imageHeight=i.getAttribute("height")),i.hasAttribute("alt")&&(t.imageAlt=i.getAttribute("alt"))),t},L1=r=>{const t={},i=r.querySelector("swal-icon");return i&&(tr(i,["type","color"]),i.hasAttribute("type")&&(t.icon=i.getAttribute("type")),i.hasAttribute("color")&&(t.iconColor=i.getAttribute("color")),t.iconHtml=i.innerHTML),t},M1=r=>{const t={},i=r.querySelector("swal-input");i&&(tr(i,["type","label","placeholder","value"]),t.input=i.getAttribute("type")||"text",i.hasAttribute("label")&&(t.inputLabel=i.getAttribute("label")),i.hasAttribute("placeholder")&&(t.inputPlaceholder=i.getAttribute("placeholder")),i.hasAttribute("value")&&(t.inputValue=i.getAttribute("value")));const s=r.querySelectorAll("swal-input-option");return s.length&&(t.inputOptions={},yt(s).forEach(l=>{tr(l,["value"]);const c=l.getAttribute("value"),h=l.innerHTML;t.inputOptions[c]=h})),t},D1=(r,t)=>{const i={};for(const s in t){const l=t[s],c=r.querySelector(l);c&&(tr(c,[]),i[l.replace(/^swal-/,"")]=c.innerHTML.trim())}return i},j1=r=>{const t=xp.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);yt(r.querySelectorAll("*")).forEach(i=>{if(i.parentNode!==r)return;const s=i.tagName.toLowerCase();t.indexOf(s)===-1&&Je(`Unrecognized element <${s}>`)})},tr=(r,t)=>{yt(r.attributes).forEach(i=>{t.indexOf(i.name)===-1&&Je([`Unrecognized attribute "${i.name}" on <${r.tagName.toLowerCase()}>.`,`${t.length?`Allowed attributes are: ${t.join(", ")}`:"To set the value, use HTML within the element."}`])})},Pp=10,F1=r=>{const t=xe(),i=me();typeof r.willOpen=="function"?r.willOpen(i):typeof r.onBeforeOpen=="function"&&r.onBeforeOpen(i);const l=window.getComputedStyle(document.body).overflowY;$1(t,i,r),setTimeout(()=>{U1(t,i)},Pp),dp()&&(z1(t,r.scrollbarPadding,l),d1()),!fu()&&!J.previousActiveElement&&(J.previousActiveElement=document.activeElement),B1(i,r),Ft(t,I["no-transition"])},B1=(r,t)=>{typeof t.didOpen=="function"?setTimeout(()=>t.didOpen(r)):typeof t.onOpen=="function"&&setTimeout(()=>t.onOpen(r))},Op=r=>{const t=me();if(r.target!==t)return;const i=xe();t.removeEventListener(Ii,Op),i.style.overflowY="auto"},U1=(r,t)=>{Ii&&mp(t)?(r.style.overflowY="hidden",t.addEventListener(Ii,Op)):r.style.overflowY="auto"},z1=(r,t,i)=>{r1(),c1(),t&&i!=="hidden"&&t1(),setTimeout(()=>{r.scrollTop=0})},$1=(r,t,i)=>{ae(r,i.showClass.backdrop),t.style.setProperty("opacity","0","important"),ze(t),setTimeout(()=>{ae(t,i.showClass.popup),t.style.removeProperty("opacity")},Pp),ae([document.documentElement,document.body],I.shown),i.heightAuto&&i.backdrop&&!i.toast&&ae([document.documentElement,document.body],I["height-auto"])},H1=(r,t)=>{t.input==="select"||t.input==="radio"?G1(r,t):["text","email","number","tel","textarea"].includes(t.input)&&(au(t.inputValue)||lu(t.inputValue))&&Q1(r,t)},V1=(r,t)=>{const i=r.getInput();if(!i)return null;switch(t.input){case"checkbox":return W1(i);case"radio":return q1(i);case"file":return K1(i);default:return t.inputAutoTrim?i.value.trim():i.value}},W1=r=>r.checked?1:0,q1=r=>r.checked?r.value:null,K1=r=>r.files.length?r.getAttribute("multiple")!==null?r.files:r.files[0]:null,G1=(r,t)=>{const i=vt(),s=l=>Y1[t.input](i,$l(l),t);au(t.inputOptions)||lu(t.inputOptions)?(bi(jt()),Ni(t.inputOptions).then(l=>{r.hideLoading(),s(l)})):typeof t.inputOptions=="object"?s(t.inputOptions):rr(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`)},Q1=(r,t)=>{const i=r.getInput();$e(i),Ni(t.inputValue).then(s=>{i.value=t.input==="number"?parseFloat(s)||0:`${s}`,ze(i),i.focus(),r.hideLoading()}).catch(s=>{rr(`Error in inputValue promise: ${s}`),i.value="",ze(i),i.focus(),r.hideLoading()})},Y1={select:(r,t,i)=>{const s=Mt(r,I.select),l=(c,h,m)=>{const g=document.createElement("option");g.value=m,Be(g,h),g.selected=Xd(m,i.inputValue),c.appendChild(g)};t.forEach(c=>{const h=c[0],m=c[1];if(Array.isArray(m)){const g=document.createElement("optgroup");g.label=h,g.disabled=!1,s.appendChild(g),m.forEach(_=>l(g,_[1],_[0]))}else l(s,m,h)}),s.focus()},radio:(r,t,i)=>{const s=Mt(r,I.radio);t.forEach(c=>{const h=c[0],m=c[1],g=document.createElement("input"),_=document.createElement("label");g.type="radio",g.name=I.radio,g.value=h,Xd(h,i.inputValue)&&(g.checked=!0);const v=document.createElement("span");Be(v,m),v.className=I.label,_.appendChild(g),_.appendChild(v),s.appendChild(_)});const l=s.querySelectorAll("input");l.length&&l[0].focus()}},$l=r=>{const t=[];return typeof Map<"u"&&r instanceof Map?r.forEach((i,s)=>{let l=i;typeof l=="object"&&(l=$l(l)),t.push([s,l])}):Object.keys(r).forEach(i=>{let s=r[i];typeof s=="object"&&(s=$l(s)),t.push([i,s])}),t},Xd=(r,t)=>t&&t.toString()===r.toString(),J1=(r,t)=>{r.disableButtons(),t.input?Ap(r,t,"confirm"):yu(r,t,!0)},X1=(r,t)=>{r.disableButtons(),t.returnInputValueOnDeny?Ap(r,t,"deny"):Np(r,t,!1)},Z1=(r,t)=>{r.disableButtons(),t(Lr.cancel)},Ap=(r,t,i)=>{const s=V1(r,t);t.inputValidator?e0(r,t,s):r.getInput().checkValidity()?i==="deny"?Np(r,t,s):yu(r,t,s):(r.enableButtons(),r.showValidationMessage(t.validationMessage))},e0=(r,t,i)=>{r.disableInput(),Promise.resolve().then(()=>Ni(t.inputValidator(i,t.validationMessage))).then(l=>{r.enableButtons(),r.enableInput(),l?r.showValidationMessage(l):yu(r,t,i)})},Np=(r,t,i)=>{t.showLoaderOnDeny&&bi(An()),t.preDeny?Promise.resolve().then(()=>Ni(t.preDeny(i,t.validationMessage))).then(l=>{l===!1?r.hideLoading():r.closePopup({isDenied:!0,value:typeof l>"u"?i:l})}):r.closePopup({isDenied:!0,value:i})},Zd=(r,t)=>{r.closePopup({isConfirmed:!0,value:t})},yu=(r,t,i)=>{t.showLoaderOnConfirm&&bi(),t.preConfirm?(r.resetValidationMessage(),Promise.resolve().then(()=>Ni(t.preConfirm(i,t.validationMessage))).then(l=>{gt(ys())||l===!1?r.hideLoading():Zd(r,typeof l>"u"?i:l)})):Zd(r,i)},t0=(r,t,i,s)=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1),i.toast||(t.keydownHandler=l=>i0(r,l,s),t.keydownTarget=i.keydownListenerCapture?window:me(),t.keydownListenerCapture=i.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},Hl=(r,t,i)=>{const s=cu();if(s.length)return t=t+i,t===s.length?t=0:t===-1&&(t=s.length-1),s[t].focus();me().focus()},Rp=["ArrowRight","ArrowDown","Right","Down"],n0=["ArrowLeft","ArrowUp","Left","Up"],r0=["Escape","Esc"],i0=(r,t,i)=>{const s=pe.innerParams.get(r);s&&(s.stopKeydownPropagation&&t.stopPropagation(),t.key==="Enter"?o0(r,t,s):t.key==="Tab"?s0(t,s):[...Rp,...n0].includes(t.key)?a0(t.key):r0.includes(t.key)&&l0(t,s,i))},o0=(r,t,i)=>{if(!t.isComposing&&t.target&&r.getInput()&&t.target.outerHTML===r.getInput().outerHTML){if(["textarea","file"].includes(i.input))return;kp(),t.preventDefault()}},s0=(r,t)=>{const i=r.target,s=cu();let l=-1;for(let c=0;c<s.length;c++)if(i===s[c]){l=c;break}r.shiftKey?Hl(t,l,-1):Hl(t,l,1),r.stopPropagation(),r.preventDefault()},a0=r=>{const t=jt(),i=An(),s=er();if(![t,i,s].includes(document.activeElement))return;const l=Rp.includes(r)?"nextElementSibling":"previousElementSibling",c=document.activeElement[l];c&&c.focus()},l0=(r,t,i)=>{gs(t.allowEscapeKey)&&(r.preventDefault(),i(Lr.esc))},u0=(r,t,i)=>{pe.innerParams.get(r).toast?c0(r,t,i):(f0(t),d0(t),h0(r,t,i))},c0=(r,t,i)=>{t.popup.onclick=()=>{const s=pe.innerParams.get(r);s.showConfirmButton||s.showDenyButton||s.showCancelButton||s.showCloseButton||s.timer||s.input||i(Lr.close)}};let os=!1;const f0=r=>{r.popup.onmousedown=()=>{r.container.onmouseup=function(t){r.container.onmouseup=void 0,t.target===r.container&&(os=!0)}}},d0=r=>{r.container.onmousedown=()=>{r.popup.onmouseup=function(t){r.popup.onmouseup=void 0,(t.target===r.popup||r.popup.contains(t.target))&&(os=!0)}}},h0=(r,t,i)=>{t.container.onclick=s=>{const l=pe.innerParams.get(r);if(os){os=!1;return}s.target===t.container&&gs(l.allowOutsideClick)&&i(Lr.backdrop)}};function p0(r,t={}){Xw(Object.assign({},t,r)),J.currentInstance&&J.currentInstance._destroy(),J.currentInstance=this;const i=m0(r,t);P1(i),Object.freeze(i),J.timeout&&(J.timeout.stop(),delete J.timeout),clearTimeout(J.restoreFocusTimeout);const s=y0(this);return wp(this,i),pe.innerParams.set(this,i),g0(this,s,i)}const m0=(r,t)=>{const i=O1(r),s=Object.assign({},Ir,t,i,r);return s.showClass=Object.assign({},Ir.showClass,s.showClass),s.hideClass=Object.assign({},Ir.hideClass,s.hideClass),r.animation===!1&&(s.showClass={popup:"swal2-noanimation",backdrop:"swal2-noanimation"},s.hideClass={}),s},g0=(r,t,i)=>new Promise(s=>{const l=c=>{r.closePopup({isDismissed:!0,dismiss:c})};gu.swalPromiseResolve.set(r,s),t.confirmButton.onclick=()=>J1(r,i),t.denyButton.onclick=()=>X1(r,i),t.cancelButton.onclick=()=>Z1(r,l),t.closeButton.onclick=()=>l(Lr.close),u0(r,t,l),t0(r,J,i,l),H1(r,i),F1(i),v0(J,i,l),w0(t,i),setTimeout(()=>{t.container.scrollTop=0})}),y0=r=>{const t={popup:me(),container:xe(),content:vt(),actions:ws(),confirmButton:jt(),denyButton:An(),cancelButton:er(),loader:vs(),closeButton:uu(),validationMessage:ys(),progressSteps:up()};return pe.domCache.set(r,t),t},v0=(r,t,i)=>{const s=ks();$e(s),t.timer&&(r.timeout=new I1(()=>{i("timer"),delete r.timeout},t.timer),t.timerProgressBar&&(ze(s),setTimeout(()=>{r.timeout&&r.timeout.running&&hu(t.timer)})))},w0=(r,t)=>{if(!t.toast){if(!gs(t.allowEnterKey))return _0();k0(r,t)||Hl(t,-1,1)}},k0=(r,t)=>t.focusDeny&&gt(r.denyButton)?(r.denyButton.focus(),!0):t.focusCancel&&gt(r.cancelButton)?(r.cancelButton.focus(),!0):t.focusConfirm&&gt(r.confirmButton)?(r.confirmButton.focus(),!0):!1,_0=()=>{document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};function E0(r){const t=me(),i=pe.innerParams.get(this);if(!t||Li(t,i.hideClass.popup))return Je("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s={};Object.keys(r).forEach(c=>{Nn.isUpdatableParameter(c)?s[c]=r[c]:Je(`Invalid parameter to update: "${c}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)});const l=Object.assign({},i,s);wp(this,l),pe.innerParams.set(this,l),Object.defineProperties(this,{params:{value:Object.assign({},this.params,r),writable:!1,enumerable:!0}})}function T0(){const r=pe.domCache.get(this),t=pe.innerParams.get(this);t&&(r.popup&&J.swalCloseEventFinishedCallback&&(J.swalCloseEventFinishedCallback(),delete J.swalCloseEventFinishedCallback),J.deferDisposalTimer&&(clearTimeout(J.deferDisposalTimer),delete J.deferDisposalTimer),C0(t),S0(this))}const C0=r=>{typeof r.didDestroy=="function"?r.didDestroy():typeof r.onDestroy=="function"&&r.onDestroy()},S0=r=>{delete r.params,delete J.keydownHandler,delete J.keydownTarget,eh(pe),eh(gu)},eh=r=>{for(const t in r)r[t]=new WeakMap},Lp=Object.freeze(Object.defineProperty({__proto__:null,_destroy:T0,_main:p0,close:Go,closeModal:Go,closePopup:Go,closeToast:Go,disableButtons:k1,disableInput:E1,disableLoading:Qd,enableButtons:w1,enableInput:_1,getInput:e1,getProgressSteps:S1,hideLoading:Qd,resetValidationMessage:C1,showValidationMessage:T1,update:E0},Symbol.toStringTag,{value:"Module"}));let Vl;class Mr{constructor(...t){if(typeof window>"u")return;typeof Promise>"u"&&rr("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),Vl=this;const i=Object.freeze(this.constructor.argsToParams(t));Object.defineProperties(this,{params:{value:i,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);pe.promise.set(this,s)}then(t){return pe.promise.get(this).then(t)}finally(t){return pe.promise.get(this).finally(t)}}if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)){const r=new Date,t=localStorage.getItem("swal-initiation");t?(r.getTime()-Date.parse(t))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const i=document.createElement("audio");i.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",i.loop=!0,document.body.appendChild(i),setTimeout(()=>{i.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${r}`)}Object.assign(Mr.prototype,Lp);Object.assign(Mr,Zw);Object.keys(Lp).forEach(r=>{Mr[r]=function(...t){if(Vl)return Vl[r](...t)}});Mr.DismissReason=Lr;Mr.version="10.16.7";const Nn=Mr;Nn.default=Nn;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=()=>{};var th={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=function(r){const t=[];let i=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},b0=function(r){const t=[];let i=0,s=0;for(;i<r.length;){const l=r[i++];if(l<128)t[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[i++];t[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[i++],h=r[i++],m=r[i++],g=((l&7)<<18|(c&63)<<12|(h&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(g>>10)),t[s++]=String.fromCharCode(56320+(g&1023))}else{const c=r[i++],h=r[i++];t[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|h&63)}}return t.join("")},Dp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],h=l+1<r.length,m=h?r[l+1]:0,g=l+2<r.length,_=g?r[l+2]:0,v=c>>2,P=(c&3)<<4|m>>4;let x=(m&15)<<2|_>>6,M=_&63;g||(M=64,h||(x=64)),s.push(i[v],i[P],i[x],i[M])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Mp(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):b0(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=i[r.charAt(l++)],m=l<r.length?i[r.charAt(l)]:0;++l;const _=l<r.length?i[r.charAt(l)]:64;++l;const P=l<r.length?i[r.charAt(l)]:64;if(++l,c==null||m==null||_==null||P==null)throw new x0;const x=c<<2|m>>4;if(s.push(x),_!==64){const M=m<<4&240|_>>2;if(s.push(M),P!==64){const W=_<<6&192|P;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class x0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const P0=function(r){const t=Mp(r);return Dp.encodeByteArray(t,!0)},jp=function(r){return P0(r).replace(/\./g,"")},Fp=function(r){try{return Dp.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=()=>O0().__FIREBASE_DEFAULTS__,N0=()=>{if(typeof process>"u"||typeof th>"u")return;const r=th.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},R0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Fp(r[1]);return t&&JSON.parse(t)},vu=()=>{try{return I0()||A0()||N0()||R0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},L0=r=>vu()?.emulatorHosts?.[r],Bp=()=>vu()?.config,Up=r=>vu()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,s)=>{i?this.reject(i):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function D0(r){return(await fetch(r,{credentials:"include"})).ok}const Ti={};function j0(){const r={prod:[],emulator:[]};for(const t of Object.keys(Ti))Ti[t]?r.emulator.push(t):r.prod.push(t);return r}function F0(r){let t=document.getElementById(r),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),i=!0),{created:i,element:t}}let nh=!1;function B0(r,t){if(typeof window>"u"||typeof document>"u"||!Es(window.location.host)||Ti[r]===t||Ti[r]||nh)return;Ti[r]=t;function i(x){return`__firebase__banner__${x}`}const s="__firebase__banner",c=j0().prod.length>0;function h(){const x=document.getElementById(s);x&&x.remove()}function m(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function g(x,M){x.setAttribute("width","24"),x.setAttribute("id",M),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function _(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{nh=!0,h()},x}function v(x,M){x.setAttribute("id",M),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function P(){const x=F0(s),M=i("text"),W=document.getElementById(M)||document.createElement("span"),ie=i("learnmore"),Q=document.getElementById(ie)||document.createElement("a"),L=i("preprendIcon"),Y=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const de=x.element;m(de),v(Q,ie);const ue=_();g(Y,L),de.append(Y,W,Q,ue),document.body.appendChild(de)}c?(W.innerText="Preview backend disconnected.",Y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,W.innerText="Preview backend running in this workspace."),W.setAttribute("id",M)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",P):P()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function U0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function z0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function H0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function V0(){const r=He();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function W0(){try{return typeof indexedDB=="object"}catch{return!1}}function q0(){return new Promise((r,t)=>{try{let i=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{t(l.error?.message||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="FirebaseError";class Rn extends Error{constructor(t,i,s){super(i),this.code=t,this.customData=s,this.name=K0,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(t,i,s){this.service=t,this.serviceName=i,this.errors=s}create(t,...i){const s=i[0]||{},l=`${this.service}/${t}`,c=this.errors[t],h=c?G0(c,s):"Error",m=`${this.serviceName}: ${h} (${l}).`;return new Rn(l,m,s)}}function G0(r,t){return r.replace(Q0,(i,s)=>{const l=t[s];return l!=null?String(l):`<${s}?>`})}const Q0=/\{\$([^}]+)}/g;function Y0(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Ar(r,t){if(r===t)return!0;const i=Object.keys(r),s=Object.keys(t);for(const l of i){if(!s.includes(l))return!1;const c=r[l],h=t[l];if(rh(c)&&rh(h)){if(!Ar(c,h))return!1}else if(c!==h)return!1}for(const l of s)if(!i.includes(l))return!1;return!0}function rh(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(r){const t=[];for(const[i,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function J0(r,t){const i=new X0(r,t);return i.subscribe.bind(i)}class X0{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,s){let l;if(t===void 0&&i===void 0&&s===void 0)throw new Error("Missing Observer.");Z0(t,["next","error","complete"])?l=t:l={next:t,error:i,complete:s},l.next===void 0&&(l.next=Sl),l.error===void 0&&(l.error=Sl),l.complete===void 0&&(l.complete=Sl);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Z0(r,t){if(typeof r!="object"||r===null)return!1;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}function Sl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(r){return r&&r._delegate?r._delegate:r}class Nr{constructor(t,i,s){this.name=t,this.instanceFactory=i,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const s=new M0;if(this.instancesDeferred.set(i,s),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(nk(t))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[i,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(t=Jn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Jn){return this.instances.has(t)}getOptions(t=Jn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:i});for(const[c,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);s===m&&h.resolve(l)}return l}onInit(t,i){const s=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(s)??new Set;l.add(t),this.onInitCallbacks.set(s,l);const c=this.instances.get(s);return c&&t(c,s),()=>{l.delete(t)}}invokeOnInitCallbacks(t,i){const s=this.onInitCallbacks.get(i);if(s)for(const l of s)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tk(t),options:i}),this.instances.set(t,s),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Jn){return this.component?this.component.multipleInstances?t:Jn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tk(r){return r===Jn?void 0:r}function nk(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new ek(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(he||(he={}));const ik={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},ok=he.INFO,sk={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},ak=(r,t,...i)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),l=sk[t];if(l)console[l](`[${s}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zp{constructor(t){this.name=t,this._logLevel=ok,this._logHandler=ak,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in he))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ik[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...t),this._logHandler(this,he.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...t),this._logHandler(this,he.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,he.INFO,...t),this._logHandler(this,he.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,he.WARN,...t),this._logHandler(this,he.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...t),this._logHandler(this,he.ERROR,...t)}}const lk=(r,t)=>t.some(i=>r instanceof i);let ih,oh;function uk(){return ih||(ih=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ck(){return oh||(oh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $p=new WeakMap,Wl=new WeakMap,Hp=new WeakMap,Il=new WeakMap,wu=new WeakMap;function fk(r){const t=new Promise((i,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",h)},c=()=>{i(xn(r.result)),l()},h=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",h)});return t.then(i=>{i instanceof IDBCursor&&$p.set(i,r)}).catch(()=>{}),wu.set(t,r),t}function dk(r){if(Wl.has(r))return;const t=new Promise((i,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",h),r.removeEventListener("abort",h)},c=()=>{i(),l()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",h),r.addEventListener("abort",h)});Wl.set(r,t)}let ql={get(r,t,i){if(r instanceof IDBTransaction){if(t==="done")return Wl.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Hp.get(r);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return xn(r[t])},set(r,t,i){return r[t]=i,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function hk(r){ql=r(ql)}function pk(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const s=r.call(bl(this),t,...i);return Hp.set(s,t.sort?t.sort():[t]),xn(s)}:ck().includes(r)?function(...t){return r.apply(bl(this),t),xn($p.get(this))}:function(...t){return xn(r.apply(bl(this),t))}}function mk(r){return typeof r=="function"?pk(r):(r instanceof IDBTransaction&&dk(r),lk(r,uk())?new Proxy(r,ql):r)}function xn(r){if(r instanceof IDBRequest)return fk(r);if(Il.has(r))return Il.get(r);const t=mk(r);return t!==r&&(Il.set(r,t),wu.set(t,r)),t}const bl=r=>wu.get(r);function gk(r,t,{blocked:i,upgrade:s,blocking:l,terminated:c}={}){const h=indexedDB.open(r,t),m=xn(h);return s&&h.addEventListener("upgradeneeded",g=>{s(xn(h.result),g.oldVersion,g.newVersion,xn(h.transaction),g)}),i&&h.addEventListener("blocked",g=>i(g.oldVersion,g.newVersion,g)),m.then(g=>{c&&g.addEventListener("close",()=>c()),l&&g.addEventListener("versionchange",_=>l(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const yk=["get","getKey","getAll","getAllKeys","count"],vk=["put","add","delete","clear"],xl=new Map;function sh(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(xl.get(t))return xl.get(t);const i=t.replace(/FromIndex$/,""),s=t!==i,l=vk.includes(i);if(!(i in(s?IDBIndex:IDBObjectStore).prototype)||!(l||yk.includes(i)))return;const c=async function(h,...m){const g=this.transaction(h,l?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[i](...m),l&&g.done]))[0]};return xl.set(t,c),c}hk(r=>({...r,get:(t,i,s)=>sh(t,i)||r.get(t,i,s),has:(t,i)=>!!sh(t,i)||r.has(t,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(kk(i)){const s=i.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(i=>i).join(" ")}}function kk(r){return r.getComponent()?.type==="VERSION"}const Kl="@firebase/app",ah="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new zp("@firebase/app"),_k="@firebase/app-compat",Ek="@firebase/analytics-compat",Tk="@firebase/analytics",Ck="@firebase/app-check-compat",Sk="@firebase/app-check",Ik="@firebase/auth",bk="@firebase/auth-compat",xk="@firebase/database",Pk="@firebase/data-connect",Ok="@firebase/database-compat",Ak="@firebase/functions",Nk="@firebase/functions-compat",Rk="@firebase/installations",Lk="@firebase/installations-compat",Mk="@firebase/messaging",Dk="@firebase/messaging-compat",jk="@firebase/performance",Fk="@firebase/performance-compat",Bk="@firebase/remote-config",Uk="@firebase/remote-config-compat",zk="@firebase/storage",$k="@firebase/storage-compat",Hk="@firebase/firestore",Vk="@firebase/ai",Wk="@firebase/firestore-compat",qk="firebase",Kk="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="[DEFAULT]",Gk={[Kl]:"fire-core",[_k]:"fire-core-compat",[Tk]:"fire-analytics",[Ek]:"fire-analytics-compat",[Sk]:"fire-app-check",[Ck]:"fire-app-check-compat",[Ik]:"fire-auth",[bk]:"fire-auth-compat",[xk]:"fire-rtdb",[Pk]:"fire-data-connect",[Ok]:"fire-rtdb-compat",[Ak]:"fire-fn",[Nk]:"fire-fn-compat",[Rk]:"fire-iid",[Lk]:"fire-iid-compat",[Mk]:"fire-fcm",[Dk]:"fire-fcm-compat",[jk]:"fire-perf",[Fk]:"fire-perf-compat",[Bk]:"fire-rc",[Uk]:"fire-rc-compat",[zk]:"fire-gcs",[$k]:"fire-gcs-compat",[Hk]:"fire-fst",[Wk]:"fire-fst-compat",[Vk]:"fire-vertex","fire-js":"fire-js",[qk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new Map,Qk=new Map,Ql=new Map;function lh(r,t){try{r.container.addComponent(t)}catch(i){rn.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,i)}}function xi(r){const t=r.name;if(Ql.has(t))return rn.debug(`There were multiple attempts to register component ${t}.`),!1;Ql.set(t,r);for(const i of ss.values())lh(i,r);for(const i of Qk.values())lh(i,r);return!0}function Vp(r,t){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(t)}function Rt(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new Di("app","Firebase",Yk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(t,i,s){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=Kk;function Wp(r,t={}){let i=r;typeof t!="object"&&(t={name:t});const s={name:Gl,automaticDataCollectionEnabled:!0,...t},l=s.name;if(typeof l!="string"||!l)throw Pn.create("bad-app-name",{appName:String(l)});if(i||(i=Bp()),!i)throw Pn.create("no-options");const c=ss.get(l);if(c){if(Ar(i,c.options)&&Ar(s,c.config))return c;throw Pn.create("duplicate-app",{appName:l})}const h=new rk(l);for(const g of Ql.values())h.addComponent(g);const m=new Jk(i,s,h);return ss.set(l,m),m}function Xk(r=Gl){const t=ss.get(r);if(!t&&r===Gl&&Bp())return Wp();if(!t)throw Pn.create("no-app",{appName:r});return t}function br(r,t,i){let s=Gk[r]??r;i&&(s+=`-${i}`);const l=s.match(/\s|\//),c=t.match(/\s|\//);if(l||c){const h=[`Unable to register library "${s}" with version "${t}":`];l&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&c&&h.push("and"),c&&h.push(`version name "${t}" contains illegal characters (whitespace or "/")`),rn.warn(h.join(" "));return}xi(new Nr(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="firebase-heartbeat-database",e_=1,Pi="firebase-heartbeat-store";let Pl=null;function qp(){return Pl||(Pl=gk(Zk,e_,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Pi)}catch(i){console.warn(i)}}}}).catch(r=>{throw Pn.create("idb-open",{originalErrorMessage:r.message})})),Pl}async function t_(r){try{const i=(await qp()).transaction(Pi),s=await i.objectStore(Pi).get(Kp(r));return await i.done,s}catch(t){if(t instanceof Rn)rn.warn(t.message);else{const i=Pn.create("idb-get",{originalErrorMessage:t?.message});rn.warn(i.message)}}}async function uh(r,t){try{const s=(await qp()).transaction(Pi,"readwrite");await s.objectStore(Pi).put(t,Kp(r)),await s.done}catch(i){if(i instanceof Rn)rn.warn(i.message);else{const s=Pn.create("idb-set",{originalErrorMessage:i?.message});rn.warn(s.message)}}}function Kp(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=1024,r_=30;class i_{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new s_(i),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ch();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>r_){const l=a_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){rn.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ch(),{heartbeatsToSend:i,unsentEntries:s}=o_(this._heartbeatsCache.heartbeats),l=jp(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return rn.warn(t),""}}}function ch(){return new Date().toISOString().substring(0,10)}function o_(r,t=n_){const i=[];let s=r.slice();for(const l of r){const c=i.find(h=>h.agent===l.agent);if(c){if(c.dates.push(l.date),fh(i)>t){c.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),fh(i)>t){i.pop();break}s=s.slice(1)}return{heartbeatsToSend:i,unsentEntries:s}}class s_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return W0()?q0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await t_(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return uh(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return uh(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function fh(r){return jp(JSON.stringify({version:2,heartbeats:r})).length}function a_(r){if(r.length===0)return-1;let t=0,i=r[0].date;for(let s=1;s<r.length;s++)r[s].date<i&&(i=r[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(r){xi(new Nr("platform-logger",t=>new wk(t),"PRIVATE")),xi(new Nr("heartbeat",t=>new i_(t),"PRIVATE")),br(Kl,ah,r),br(Kl,ah,"esm2020"),br("fire-js","")}l_("");function Gp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u_=Gp,Qp=new Di("auth","Firebase",Gp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new zp("@firebase/auth");function c_(r,...t){as.logLevel<=he.WARN&&as.warn(`Auth (${Fi}): ${r}`,...t)}function Yo(r,...t){as.logLevel<=he.ERROR&&as.error(`Auth (${Fi}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(r,...t){throw _u(r,...t)}function Ct(r,...t){return _u(r,...t)}function ku(r,t,i){const s={...u_(),[t]:i};return new Di("auth","Firebase",s).create(t,{appName:r.name})}function Zn(r){return ku(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function f_(r,t,i){const s=i;if(!(t instanceof s))throw s.name!==t.constructor.name&&Bt(r,"argument-error"),ku(r,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _u(r,...t){if(typeof r!="string"){const i=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(i,...s)}return Qp.create(r,...t)}function q(r,t,...i){if(!r)throw _u(t,...i)}function Zt(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Yo(t),new Error(t)}function on(r,t){r||Zt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(){return typeof self<"u"&&self.location?.href||""}function d_(){return dh()==="http:"||dh()==="https:"}function dh(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(d_()||$0()||"connection"in navigator)?navigator.onLine:!0}function p_(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t,i){this.shortDelay=t,this.longDelay=i,on(i>t,"Short delay should be less than long delay!"),this.isMobile=U0()||H0()}get(){return h_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(r,t){on(r.emulator,"Emulator should always be set here");const{url:i}=r.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{static initialize(t,i,s){this.fetchImpl=t,i&&(this.headersImpl=i),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],y_=new Bi(3e4,6e4);function Tu(r,t){return r.tenantId&&!t.tenantId?{...t,tenantId:r.tenantId}:t}async function jr(r,t,i,s,l={}){return Jp(r,l,async()=>{let c={},h={};s&&(t==="GET"?h=s:c={body:JSON.stringify(s)});const m=ji({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:t,headers:g,...c};return z0()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Es(r.emulatorConfig.host)&&(_.credentials="include"),Yp.fetch()(await Xp(r,r.config.apiHost,i,m),_)})}async function Jp(r,t,i){r._canInitEmulator=!1;const s={...m_,...t};try{const l=new w_(r),c=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw Qo(r,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const m=c.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qo(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Qo(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Qo(r,"user-disabled",h);const v=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw ku(r,v,_);Bt(r,v)}}catch(l){if(l instanceof Rn)throw l;Bt(r,"network-request-failed",{message:String(l)})}}async function v_(r,t,i,s,l={}){const c=await jr(r,t,i,s,l);return"mfaPendingCredential"in c&&Bt(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function Xp(r,t,i,s){const l=`${t}${i}?${s}`,c=r,h=c.config.emulator?Eu(r.config,l):`${r.config.apiScheme}://${l}`;return g_.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}class w_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,s)=>{this.timer=setTimeout(()=>s(Ct(this.auth,"network-request-failed")),y_.get())})}}function Qo(r,t,i){const s={appName:r.name};i.email&&(s.email=i.email),i.phoneNumber&&(s.phoneNumber=i.phoneNumber);const l=Ct(r,t,s);return l.customData._tokenResponse=i,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_(r,t){return jr(r,"POST","/v1/accounts:delete",t)}async function ls(r,t){return jr(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function __(r,t=!1){const i=Dr(r),s=await i.getIdToken(t),l=Cu(s);q(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,h=c?.sign_in_provider;return{claims:l,token:s,authTime:Ci(Ol(l.auth_time)),issuedAtTime:Ci(Ol(l.iat)),expirationTime:Ci(Ol(l.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Ol(r){return Number(r)*1e3}function Cu(r){const[t,i,s]=r.split(".");if(t===void 0||i===void 0||s===void 0)return Yo("JWT malformed, contained fewer than 3 sections"),null;try{const l=Fp(i);return l?JSON.parse(l):(Yo("Failed to decode base64 JWT payload"),null)}catch(l){return Yo("Caught error parsing JWT payload as JSON",l?.toString()),null}}function hh(r){const t=Cu(r);return q(t,"internal-error"),q(typeof t.exp<"u","internal-error"),q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(r,t,i=!1){if(i)return t;try{return await t}catch(s){throw s instanceof Rn&&E_(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function E_({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ci(this.lastLoginAt),this.creationTime=Ci(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(r){const t=r.auth,i=await r.getIdToken(),s=await Oi(r,ls(t,{idToken:i}));q(s?.users.length,t,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const c=l.providerUserInfo?.length?Zp(l.providerUserInfo):[],h=S_(r.providerData,c),m=r.isAnonymous,g=!(r.email&&l.passwordHash)&&!h?.length,_=m?g:!1,v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new Jl(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(r,v)}async function C_(r){const t=Dr(r);await us(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function S_(r,t){return[...r.filter(s=>!t.some(l=>l.providerId===s.providerId)),...t]}function Zp(r){return r.map(({providerId:t,...i})=>({providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(r,t){const i=await Jp(r,{},async()=>{const s=ji({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,h=await Xp(r,l,"/v1/token",`key=${c}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&Es(r.emulatorConfig.host)&&(g.credentials="include"),Yp.fetch()(h,g)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function b_(r,t){return jr(r,"POST","/v2/accounts:revokeToken",Tu(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){q(t.idToken,"internal-error"),q(typeof t.idToken<"u","internal-error"),q(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):hh(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){q(t.length!==0,"internal-error");const i=hh(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:s,refreshToken:l,expiresIn:c}=await I_(t,i);this.updateTokensAndExpiration(s,l,Number(c))}updateTokensAndExpiration(t,i,s){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,i){const{refreshToken:s,accessToken:l,expirationTime:c}=i,h=new xr;return s&&(q(typeof s=="string","internal-error",{appName:t}),h.refreshToken=s),l&&(q(typeof l=="string","internal-error",{appName:t}),h.accessToken=l),c&&(q(typeof c=="number","internal-error",{appName:t}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new xr,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(r,t){q(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Tt{constructor({uid:t,auth:i,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new T_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Jl(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const i=await Oi(this,this.stsTokenManager.getToken(this.auth,t));return q(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return __(this,t)}reload(){return C_(this)}_assign(t){this!==t&&(q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>({...i})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new Tt({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(t){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),i&&await us(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(Zn(this.auth));const t=await this.getIdToken();return await Oi(this,k_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){const s=i.displayName??void 0,l=i.email??void 0,c=i.phoneNumber??void 0,h=i.photoURL??void 0,m=i.tenantId??void 0,g=i._redirectEventId??void 0,_=i.createdAt??void 0,v=i.lastLoginAt??void 0,{uid:P,emailVerified:x,isAnonymous:M,providerData:W,stsTokenManager:ie}=i;q(P&&ie,t,"internal-error");const Q=xr.fromJSON(this.name,ie);q(typeof P=="string",t,"internal-error"),Tn(s,t.name),Tn(l,t.name),q(typeof x=="boolean",t,"internal-error"),q(typeof M=="boolean",t,"internal-error"),Tn(c,t.name),Tn(h,t.name),Tn(m,t.name),Tn(g,t.name),Tn(_,t.name),Tn(v,t.name);const L=new Tt({uid:P,auth:t,email:l,emailVerified:x,displayName:s,isAnonymous:M,photoURL:h,phoneNumber:c,tenantId:m,stsTokenManager:Q,createdAt:_,lastLoginAt:v});return W&&Array.isArray(W)&&(L.providerData=W.map(Y=>({...Y}))),g&&(L._redirectEventId=g),L}static async _fromIdTokenResponse(t,i,s=!1){const l=new xr;l.updateFromServerResponse(i);const c=new Tt({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:s});return await us(c),c}static async _fromGetAccountInfoResponse(t,i,s){const l=i.users[0];q(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?Zp(l.providerUserInfo):[],h=!(l.email&&l.passwordHash)&&!c?.length,m=new xr;m.updateFromIdToken(s);const g=new Tt({uid:l.localId,auth:t,stsTokenManager:m,isAnonymous:h}),_={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new Jl(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=new Map;function en(r){on(r instanceof Function,"Expected a class definition");let t=ph.get(r);return t?(on(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,ph.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}em.type="NONE";const mh=em;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(r,t,i){return`firebase:${r}:${t}:${i}`}class Pr{constructor(t,i,s){this.persistence=t,this.auth=i,this.userKey=s;const{config:l,name:c}=this.auth;this.fullUserKey=Jo(this.userKey,l.apiKey,c),this.fullPersistenceKey=Jo("persistence",l.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await ls(this.auth,{idToken:t}).catch(()=>{});return i?Tt._fromGetAccountInfoResponse(this.auth,i,t):null}return Tt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,s="authUser"){if(!i.length)return new Pr(en(mh),t,s);const l=(await Promise.all(i.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let c=l[0]||en(mh);const h=Jo(s,t.config.apiKey,t.name);let m=null;for(const _ of i)try{const v=await _._get(h);if(v){let P;if(typeof v=="string"){const x=await ls(t,{idToken:v}).catch(()=>{});if(!x)break;P=await Tt._fromGetAccountInfoResponse(t,x,v)}else P=Tt._fromJSON(t,v);_!==c&&(m=P),c=_;break}}catch{}const g=l.filter(_=>_._shouldAllowMigration);return!c._shouldAllowMigration||!g.length?new Pr(c,t,s):(c=g[0],m&&await c._set(h,m.toJSON()),await Promise.all(i.map(async _=>{if(_!==c)try{await _._remove(h)}catch{}})),new Pr(c,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(im(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(tm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(sm(t))return"Blackberry";if(am(t))return"Webos";if(nm(t))return"Safari";if((t.includes("chrome/")||rm(t))&&!t.includes("edge/"))return"Chrome";if(om(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(i);if(s?.length===2)return s[1]}return"Other"}function tm(r=He()){return/firefox\//i.test(r)}function nm(r=He()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function rm(r=He()){return/crios\//i.test(r)}function im(r=He()){return/iemobile/i.test(r)}function om(r=He()){return/android/i.test(r)}function sm(r=He()){return/blackberry/i.test(r)}function am(r=He()){return/webos/i.test(r)}function Su(r=He()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function x_(r=He()){return Su(r)&&!!window.navigator?.standalone}function P_(){return V0()&&document.documentMode===10}function lm(r=He()){return Su(r)||om(r)||am(r)||sm(r)||/windows phone/i.test(r)||im(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(r,t=[]){let i;switch(r){case"Browser":i=gh(He());break;case"Worker":i=`${gh(He())}-${r}`;break;default:i=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${Fi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const s=c=>new Promise((h,m)=>{try{const g=t(c);h(g)}catch(g){m(g)}});s.onAbort=i,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const s of this.queue)await s(t),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(r,t={}){return jr(r,"GET","/v2/passwordPolicy",Tu(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=6;class R_{constructor(t){const i=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??N_,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,i),this.validatePasswordCharacterOptions(t,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(t,i){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(i.meetsMinPasswordLength=t.length>=s),l&&(i.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let s;for(let l=0;l<t.length;l++)s=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,i,s,l,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(t,i,s,l){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yh(this),this.idTokenSubscription=new yh(this),this.beforeStateQueue=new O_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=en(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Pr.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await ls(this,{idToken:t}),s=await Tt._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(s)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Rt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,h=s?._redirectEventId,m=await this.tryRedirectSignIn(t);(!c||c===h)&&m?.user&&(s=m.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await us(t)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=p_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Rt(this.app))return Promise.reject(Zn(this));const i=t?Dr(t):null;return i&&q(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Rt(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await A_(this),i=new R_(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Di("auth","Firebase",t())}onAuthStateChanged(t,i,s){return this.registerStateListener(this.authStateSubscription,t,i,s)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,s){return this.registerStateListener(this.idTokenSubscription,t,i,s)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(s.tenantId=this.tenantId),await b_(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,i){const s=await this.getOrInitRedirectPersistenceManager(i);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&en(t)||this._popupRedirectResolver;q(i,this,"argument-error"),this.redirectPersistenceManager=await Pr.create(this,[en(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,s,l){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(m,this,"internal-error"),m.then(()=>{h||c(this.currentUser)}),typeof i=="function"){const g=t.addObserver(i,s,l);return()=>{h=!0,g()}}else{const g=t.addObserver(i);return()=>{h=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=um(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&c_(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ts(r){return Dr(r)}class yh{constructor(t){this.auth=t,this.observer=null,this.addObserver=J0(i=>this.observer=i)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function M_(r){Iu=r}function D_(r){return Iu.loadJS(r)}function j_(){return Iu.gapiScript}function F_(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(r,t){const i=Vp(r,"auth");if(i.isInitialized()){const l=i.getImmediate(),c=i.getOptions();if(Ar(c,t??{}))return l;Bt(l,"already-initialized")}return i.initialize({options:t})}function U_(r,t){const i=t?.persistence||[],s=(Array.isArray(i)?i:[i]).map(en);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t?.popupRedirectResolver)}function z_(r,t,i){const s=Ts(r);q(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const l=!1,c=cm(t),{host:h,port:m}=$_(t),g=m===null?"":`:${m}`,_={url:`${c}//${h}${g}/`},v=Object.freeze({host:h,port:m,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){q(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),q(Ar(_,s.config.emulator)&&Ar(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,Es(h)?(D0(`${c}//${h}${g}`),B0("Auth",!0)):H_()}function cm(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function $_(r){const t=cm(r),i=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!i)return{host:"",port:null};const s=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const c=l[1];return{host:c,port:vh(s.substr(c.length+1))}}else{const[c,h]=s.split(":");return{host:c,port:vh(h)}}}function vh(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function H_(){function r(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return Zt("not implemented")}_getIdTokenResponse(t){return Zt("not implemented")}_linkToIdToken(t,i){return Zt("not implemented")}_getReauthenticationResolver(t){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(r,t){return v_(r,"POST","/v1/accounts:signInWithIdp",Tu(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="http://localhost";class nr extends fm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new nr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):Bt("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:l,...c}=i;if(!s||!l)return null;const h=new nr(s,l);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(t){const i=this.buildRequest();return Or(t,i)}_linkToIdToken(t,i){const s=this.buildRequest();return s.idToken=i,Or(t,s)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Or(t,i)}buildRequest(){const t={requestUri:V_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=ji(i)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends bu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ui{constructor(){super("facebook.com")}static credential(t){return nr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Cn.credentialFromTaggedObject(t)}static credentialFromError(t){return Cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Cn.credential(t.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ui{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return nr._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:s}=t;if(!i&&!s)return null;try{return Jt.credential(i,s)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Ui{constructor(){super("github.com")}static credential(t){return nr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Sn.credentialFromTaggedObject(t)}static credentialFromError(t){return Sn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Sn.credential(t.oauthAccessToken)}catch{return null}}}Sn.GITHUB_SIGN_IN_METHOD="github.com";Sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Ui{constructor(){super("twitter.com")}static credential(t,i){return nr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return In.credentialFromTaggedObject(t)}static credentialFromError(t){return In.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:s}=t;if(!i||!s)return null;try{return In.credential(i,s)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,s,l=!1){const c=await Tt._fromIdTokenResponse(t,s,l),h=wh(s);return new Rr({user:c,providerId:h,_tokenResponse:s,operationType:i})}static async _forOperation(t,i,s){await t._updateTokensIfNecessary(s,!0);const l=wh(s);return new Rr({user:t,providerId:l,_tokenResponse:s,operationType:i})}}function wh(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends Rn{constructor(t,i,s,l){super(i.code,i.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,cs.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,i,s,l){return new cs(t,i,s,l)}}function dm(r,t,i,s){return(t==="reauthenticate"?i._getReauthenticationResolver(r):i._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?cs._fromErrorAndOperation(r,c,t,s):c})}async function W_(r,t,i=!1){const s=await Oi(r,t._linkToIdToken(r.auth,await r.getIdToken()),i);return Rr._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q_(r,t,i=!1){const{auth:s}=r;if(Rt(s.app))return Promise.reject(Zn(s));const l="reauthenticate";try{const c=await Oi(r,dm(s,l,t,r),i);q(c.idToken,s,"internal-error");const h=Cu(c.idToken);q(h,s,"internal-error");const{sub:m}=h;return q(r.uid===m,s,"user-mismatch"),Rr._forOperation(r,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&Bt(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K_(r,t,i=!1){if(Rt(r.app))return Promise.reject(Zn(r));const s="signIn",l=await dm(r,s,t),c=await Rr._fromIdTokenResponse(r,s,l);return i||await r._updateCurrentUser(c.user),c}function G_(r,t,i,s){return Dr(r).onIdTokenChanged(t,i,s)}function Q_(r,t,i){return Dr(r).beforeAuthStateChanged(t,i)}const fs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(fs,"1"),this.storage.removeItem(fs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=1e3,J_=10;class pm extends hm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const s=this.storage.getItem(i),l=this.localCache[i];s!==l&&t(i,l,s)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=t.key;i?this.detachListener():this.stopPolling();const l=()=>{const h=this.storage.getItem(s);!i&&this.localCache[s]===h||this.notifyListeners(s,h)},c=this.storage.getItem(s);P_()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,J_):l()}notifyListeners(t,i){this.localCache[t]=i;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:s}),!0)})},Y_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}pm.type="LOCAL";const X_=pm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm extends hm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}mm.type="SESSION";const gm=mm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(l=>l.isListeningto(t));if(i)return i;const s=new Cs(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:s,eventType:l,data:c}=i.data,h=this.handlersMap[l];if(!h?.size)return;i.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const m=Array.from(h).map(async _=>_(i.origin,c)),g=await Z_(m);i.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:g})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(r="",t=10){let i="";for(let s=0;s<t;s++)i+=Math.floor(Math.random()*10);return r+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,h;return new Promise((m,g)=>{const _=xu("",20);l.port1.start();const v=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:l,onMessage(P){const x=P;if(x.data.eventId===_)switch(x.data.status){case"ack":clearTimeout(v),c=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),m(x.data.response);break;default:clearTimeout(v),clearTimeout(c),g(new Error("invalid_response"));break}}},this.handlers.add(h),l.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:_,data:i},[l.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return window}function tE(r){Dt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function nE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rE(){return navigator?.serviceWorker?.controller||null}function iE(){return ym()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="firebaseLocalStorageDb",oE=1,ds="firebaseLocalStorage",wm="fbase_key";class zi{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Ss(r,t){return r.transaction([ds],t?"readwrite":"readonly").objectStore(ds)}function sE(){const r=indexedDB.deleteDatabase(vm);return new zi(r).toPromise()}function Xl(){const r=indexedDB.open(vm,oE);return new Promise((t,i)=>{r.addEventListener("error",()=>{i(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(ds,{keyPath:wm})}catch(l){i(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(ds)?t(s):(s.close(),await sE(),t(await Xl()))})})}async function kh(r,t,i){const s=Ss(r,!0).put({[wm]:t,value:i});return new zi(s).toPromise()}async function aE(r,t){const i=Ss(r,!1).get(t),s=await new zi(i).toPromise();return s===void 0?null:s.value}function _h(r,t){const i=Ss(r,!0).delete(t);return new zi(i).toPromise()}const lE=800,uE=3;class km{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xl(),this.db)}async _withRetries(t){let i=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(i++>uE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ym()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cs._getInstance(iE()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await nE(),!this.activeServiceWorker)return;this.sender=new eE(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||rE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Xl();return await kh(t,fs,"1"),await _h(t,fs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(s=>kh(s,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(s=>aE(s,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>_h(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const c=Ss(l,!1).getAll();return new zi(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],s=new Set;if(t.length!==0)for(const{fbase_key:l,value:c}of t)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(t,i){this.localCache[t]=i;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}km.type="LOCAL";const cE=km;new Bi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(r,t){return t?en(t):(q(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu extends fm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Or(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Or(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Or(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function fE(r){return K_(r.auth,new Pu(r),r.bypassAuthState)}function dE(r){const{auth:t,user:i}=r;return q(i,t,"internal-error"),q_(i,new Pu(r),r.bypassAuthState)}async function hE(r){const{auth:t,user:i}=r;return q(i,t,"internal-error"),W_(i,new Pu(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(t,i,s,l,c=!1){this.auth=t,this.resolver=s,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:s,postBody:l,tenantId:c,error:h,type:m}=t;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:i,sessionId:s,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return fE;case"linkViaPopup":case"linkViaRedirect":return hE;case"reauthViaPopup":case"reauthViaRedirect":return dE;default:Bt(this.auth,"internal-error")}}resolve(t){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=new Bi(2e3,1e4);async function mE(r,t,i){if(Rt(r.app))return Promise.reject(Ct(r,"operation-not-supported-in-this-environment"));const s=Ts(r);f_(r,t,bu);const l=_m(s,i);return new Xn(s,"signInViaPopup",t,l).executeNotNull()}class Xn extends Em{constructor(t,i,s,l,c){super(t,i,l,c),this.provider=s,this.authWindow=null,this.pollId=null,Xn.currentPopupAction&&Xn.currentPopupAction.cancel(),Xn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return q(t,this.auth,"internal-error"),t}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const t=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xn.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,pE.get())};t()}}Xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE="pendingRedirect",Xo=new Map;class yE extends Em{constructor(t,i,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,s),this.eventId=null}async execute(){let t=Xo.get(this.auth._key());if(!t){try{const s=await vE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(i){t=()=>Promise.reject(i)}Xo.set(this.auth._key(),t)}return this.bypassAuthState||Xo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vE(r,t){const i=_E(t),s=kE(r);if(!await s._isAvailable())return!1;const l=await s._get(i)==="true";return await s._remove(i),l}function wE(r,t){Xo.set(r._key(),t)}function kE(r){return en(r._redirectPersistence)}function _E(r){return Jo(gE,r.config.apiKey,r.name)}async function EE(r,t,i=!1){if(Rt(r.app))return Promise.reject(Zn(r));const s=Ts(r),l=_m(s,t),h=await new yE(s,l,i).execute();return h&&!i&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,t)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=600*1e3;class CE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(i=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!SE(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){if(t.error&&!Tm(t)){const s=t.error.code?.split("auth/")[1]||"internal-error";i.onError(Ct(this.auth,s))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const s=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=TE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eh(t))}saveEventToCache(t){this.cachedEventUids.add(Eh(t)),this.lastProcessedEventTime=Date.now()}}function Eh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function Tm({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function SE(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tm(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(r,t={}){return jr(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xE=/^https?/;async function PE(r){if(r.config.emulator)return;const{authorizedDomains:t}=await IE(r);for(const i of t)try{if(OE(i))return}catch{}Bt(r,"unauthorized-domain")}function OE(r){const t=Yl(),{protocol:i,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?i==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===s}if(!xE.test(i))return!1;if(bE.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=new Bi(3e4,6e4);function Th(){const r=Dt().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let i=0;i<r.CP.length;i++)r.CP[i]=null}}function NE(r){return new Promise((t,i)=>{function s(){Th(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Th(),i(Ct(r,"network-request-failed"))},timeout:AE.get()})}if(Dt().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Dt().gapi?.load)s();else{const l=F_("iframefcb");return Dt()[l]=()=>{gapi.load?s():i(Ct(r,"network-request-failed"))},D_(`${j_()}?onload=${l}`).catch(c=>i(c))}}).catch(t=>{throw Zo=null,t})}let Zo=null;function RE(r){return Zo=Zo||NE(r),Zo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=new Bi(5e3,15e3),ME="__/auth/iframe",DE="emulator/auth/iframe",jE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BE(r){const t=r.config;q(t.authDomain,r,"auth-domain-config-required");const i=t.emulator?Eu(t,DE):`https://${r.config.authDomain}/${ME}`,s={apiKey:t.apiKey,appName:r.name,v:Fi},l=FE.get(r.config.apiHost);l&&(s.eid=l);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${i}?${ji(s).slice(1)}`}async function UE(r){const t=await RE(r),i=Dt().gapi;return q(i,r,"internal-error"),t.open({where:document.body,url:BE(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jE,dontclear:!0},s=>new Promise(async(l,c)=>{await s.restyle({setHideOnLeave:!1});const h=Ct(r,"network-request-failed"),m=Dt().setTimeout(()=>{c(h)},LE.get());function g(){Dt().clearTimeout(m),l(s)}s.ping(g).then(g,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$E=500,HE=600,VE="_blank",WE="http://localhost";class Ch{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qE(r,t,i,s=$E,l=HE){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...zE,width:s.toString(),height:l.toString(),top:c,left:h},_=He().toLowerCase();i&&(m=rm(_)?VE:i),tm(_)&&(t=t||WE,g.scrollbars="yes");const v=Object.entries(g).reduce((x,[M,W])=>`${x}${M}=${W},`,"");if(x_(_)&&m!=="_self")return KE(t||"",m),new Ch(null);const P=window.open(t||"",m,v);q(P,r,"popup-blocked");try{P.focus()}catch{}return new Ch(P)}function KE(r,t){const i=document.createElement("a");i.href=r,i.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="__/auth/handler",QE="emulator/auth/handler",YE=encodeURIComponent("fac");async function Sh(r,t,i,s,l,c){q(r.config.authDomain,r,"auth-domain-config-required"),q(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:i,redirectUrl:s,v:Fi,eventId:l};if(t instanceof bu){t.setDefaultLanguage(r.languageCode),h.providerId=t.providerId||"",Y0(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[v,P]of Object.entries({}))h[v]=P}if(t instanceof Ui){const v=t.getScopes().filter(P=>P!=="");v.length>0&&(h.scopes=v.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const v of Object.keys(m))m[v]===void 0&&delete m[v];const g=await r._getAppCheckToken(),_=g?`#${YE}=${encodeURIComponent(g)}`:"";return`${JE(r)}?${ji(m).slice(1)}${_}`}function JE({config:r}){return r.emulator?Eu(r,QE):`https://${r.authDomain}/${GE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="webStorageSupport";class XE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gm,this._completeRedirectFn=EE,this._overrideRedirectResult=wE}async _openPopup(t,i,s,l){on(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Sh(t,i,s,Yl(),l);return qE(t,c,xu())}async _openRedirect(t,i,s,l){await this._originValidation(t);const c=await Sh(t,i,s,Yl(),l);return tE(c),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:l,promise:c}=this.eventManagers[i];return l?Promise.resolve(l):(on(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(t);return this.eventManagers[i]={promise:s},s.catch(()=>{delete this.eventManagers[i]}),s}async initAndGetManager(t){const i=await UE(t),s=new CE(t);return i.register("authEvent",l=>(q(l?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=i,s}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(Al,{type:Al},l=>{const c=l?.[0]?.[Al];c!==void 0&&i(!!c),Bt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=PE(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return lm()||nm()||Su()}}const ZE=XE;var Ih="@firebase/auth",bh="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nT(r){xi(new Nr("auth",(t,{options:i})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;q(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:um(r)},_=new L_(s,l,c,g);return U_(_,i),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,s)=>{t.getProvider("auth-internal").initialize()})),xi(new Nr("auth-internal",t=>{const i=Ts(t.getProvider("auth").getImmediate());return(s=>new eT(s))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),br(Ih,bh,tT(r)),br(Ih,bh,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=300,iT=Up("authIdTokenMaxAge")||rT;let xh=null;const oT=r=>async t=>{const i=t&&await t.getIdTokenResult(),s=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(s&&s>iT)return;const l=i?.token;xh!==l&&(xh=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function sT(r=Xk()){const t=Vp(r,"auth");if(t.isInitialized())return t.getImmediate();const i=B_(r,{popupRedirectResolver:ZE,persistence:[cE,X_,gm]}),s=Up("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const h=oT(c.toString());Q_(i,h,()=>h(i.currentUser)),G_(i,m=>h(m))}}const l=L0("auth");return l&&z_(i,`http://${l}`),i}function aT(){return document.getElementsByTagName("head")?.[0]??document}M_({loadJS(r){return new Promise((t,i)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=l=>{const c=Ct("internal-error");c.customData=l,i(c)},s.type="text/javascript",s.charset="UTF-8",aT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nT("Browser");var lT="firebase",uT="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */br(lT,uT,"app");const cT={apiKey:"AIzaSyCf4r4_JiAWZjMYxHx2oPdOOPBunUeG9zg",authDomain:"taskboard-drethedev.firebaseapp.com",databaseURL:"https://taskboard-drethedev.firebaseio.com",projectId:"taskboard-drethedev",storageBucket:"taskboard-drethedev.appspot.com",messagingSenderId:"868447749524",appId:"1:868447749524:web:bc280f2ee21da6c3fe7b81"},fT=Wp(cT),Ou=sT(fT);async function dT(){const r=new Jt,{user:t}=await mE(Ou,r);return t}function hT(){return Ou.signOut()}const Cm=Ee.createContext(null),pT=({children:r})=>{const[t,i]=Ee.useState(null),[s,l]=Ee.useState(!0);Ee.useEffect(function(){Ou.onAuthStateChanged(_=>{_&&i({id:_.uid}),l(!1)})},[]);const m={user:t,checkForUser:s,setUser:i,signInUser:async()=>{try{const g=await dT();i({id:g.uid}),l(!0)}catch(g){Nn.fire({title:"Oops!",text:"There was an error signing in: "+g,icon:"error",confirmButtonText:"OK"})}},logoutUser:async()=>{try{await hT(),i(null),l(!0)}catch(g){Nn.fire({title:"Oops!",text:"There was an error while logging out: "+g,icon:"error",confirmButtonText:"OK"})}}};return b.jsx(Cm.Provider,{value:m,children:r})};function Au(){const r=Ee.useContext(Cm);if(!r)throw Error("`useUser` can only be used within `UserContext.Provider`");return r}const Sm=Ee.createContext(null),mT=({children:r})=>{const[t,i]=Ee.useState(!1),[s,l]=Ee.useState([]),{checkForUser:c,user:h}=Au(),[m,g]=Ee.useState("all"),[_,v]=Ee.useState(""),P=["TODO","IN_PROGRESS","COMPLETED"];async function x(D){const U=await Ov(D);U.status===be.Success&&de(U.data)}async function M(D){(await Nv(D)).status===be.Success&&L(D)}async function W(D){const U=await Av(D);U.status===be.Success&&ie(U.data)}function ie(D){l(U=>U.map(ce=>ce.id===D.id?D:ce))}async function Q(D){(await Rv(D)).status===be.Success&&Y(D)}function L(D){l(U=>U.filter(ce=>ce.id!==D))}function Y(D){l(U=>U.filter(ce=>!D.includes(ce.id)))}function de(D){l(U=>[...U,D])}Ee.useEffect(function(){c||Pv(h?.id).then(U=>{U.status==="Success"&&l(U.data)}).finally(()=>i(!0))},[c,h]);const ue={taskStatus:P,taskItems:s,numOfTasks:s.length,loadComplete:t,searchTerms:_,listFilter:m,setSearchTerms:v,setListFilter:g,createNewTask:x,removeTask:M,modifyTask:W,removeManyTasks:Q};return b.jsx(Sm.Provider,{value:ue,children:r})};function ir(){const r=Ee.useContext(Sm);if(!r)throw Error("`useTasks` must be used within the `TaskContext.Provider`");return r}const Nu=Ee.createContext({}),gT=({children:r})=>{const[t,i]=Ee.useState(""),s={theme:t,setTheme:i};return b.jsx(Nu.Provider,{value:s,children:r})},yT=()=>{const{theme:r,setTheme:t}=Ee.useContext(Nu),{user:i,signInUser:s,logoutUser:l}=Au(),{taskItems:c,loadComplete:h,removeManyTasks:m}=ir(),g=c.length,_=()=>{t&&t(r==="dark"?"":"dark")},v=()=>{const P=c.map(({id:x})=>x);m(P)};return b.jsxs("div",{className:"settings",children:[h?i?b.jsx("button",{onClick:l,className:"btn btn--green btn__taskBoard btn__taskBoard--auth",children:"Log Out"}):b.jsx("button",{onClick:s,className:"btn btn--red btn__taskBoard btn__taskBoard--auth",children:"Sign In With Google"}):null,b.jsx("button",{onClick:v,className:"btn btn--black btn__taskBoard btn__taskBoard--clear",disabled:g===0,children:"Clear Task Board"}),b.jsx("input",{className:"themeToggle__checkbox sr-only",type:"checkbox",name:"themeToggle",id:"themeToggle",onChange:_,defaultChecked:r==="dark"}),b.jsxs("label",{className:"themeToggle__label",htmlFor:"themeToggle",children:[r==="dark"?"Light":"Dark"," Mode"," ",b.jsx("span",{className:"themeToggle__toggler"})]})]})},vT=()=>{const[r,t]=eu.useState(!1);return b.jsx("header",{children:b.jsxs("div",{className:"wrapper displayContainer",children:[b.jsxs("div",{className:"header__text",children:[b.jsx("h1",{children:"Task Board"}),b.jsx("p",{children:"Add and track tasks to increase productivity!"})]}),b.jsxs("div",{className:"header__buttons",children:[b.jsxs("h2",{onClick:()=>t(i=>!i),children:[b.jsx("span",{children:"Settings "}),b.jsx("span",{className:"header__menuToggleIcon",children:b.jsx(St,{icon:r?su:Sv})})]}),r&&b.jsx(yT,{})]})]})})};function wT(){const{searchTerms:r,setSearchTerms:t}=ir(),i=l=>{t(l.target.value)},s=()=>{t("")};return b.jsxs("div",{className:"inputContainer__searchBar",children:[b.jsx("label",{htmlFor:"searchTerms",className:"srOnly",children:"Search for task items"}),b.jsx("input",{className:"taskBoard__searchBar",type:"search",name:"searchTerms",id:"searchTerms",placeholder:"search",onChange:i,value:r}),r?b.jsxs(b.Fragment,{children:[b.jsx("label",{htmlFor:"searchBarBtn",className:"srOnly",children:"Button to clear the search terms"}),b.jsx("button",{id:"searchBarBtn",className:"taskBoard__searchBarBtn",onClick:s,children:b.jsx(St,{className:"taskBoard__searchBarIcon--clear",icon:su,"aria-hidden":"true"})})]}):b.jsx(St,{className:"taskBoard__searchBarIcon",icon:xv,"aria-hidden":"true"})]})}const On={Todo:"TODO",InProgress:"IN_PROGRESS",Completed:"COMPLETED"};function kT(){const{setListFilter:r}=ir(),t=i=>{r&&r(i)};return b.jsx("fieldset",{className:"taskBoard__listFilter",children:b.jsxs("div",{className:"inputContainer__filter",children:[b.jsx("legend",{className:"srOnly",children:"Filter the task items by list"}),b.jsx("input",{type:"radio",className:"srOnly taskBoard__filterInput",name:"listFilter",id:"filterAll",value:"all",onChange:()=>t("all"),defaultChecked:!0}),b.jsx("label",{className:"btn btn--black",htmlFor:"filterAll",children:"All"}),b.jsx("input",{type:"radio",className:"srOnly taskBoard__filterInput",name:"listFilter",id:"filterOpen",value:"todo",onChange:()=>t(On.Todo)}),b.jsx("label",{className:"btn btn--red",htmlFor:"filterOpen",children:"Todo"}),b.jsx("input",{type:"radio",className:"srOnly taskBoard__filterInput",name:"listFilter",id:"filterInProgress",value:"inProgress",onChange:()=>t(On.InProgress)}),b.jsx("label",{className:"btn btn--blue",htmlFor:"filterInProgress",children:"In Progress"}),b.jsx("input",{type:"radio",className:"srOnly taskBoard__filterInput",name:"listFilter",id:"filterComplete",value:"complete",onChange:()=>t(On.Completed)}),b.jsx("label",{className:"btn btn--green",htmlFor:"filterComplete",children:"Complete"})]})})}const _T=()=>b.jsxs("section",{className:"taskBoard__menu",children:[b.jsx(kT,{}),b.jsx(wT,{})]}),ET=(r,t)=>{const i=new RegExp(r,"i");return t.filter(({description:l})=>i.test(l))};var wi={exports:{}};/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/var TT=wi.exports,Ph;function CT(){return Ph||(Ph=1,(function(r,t){(function(i,s){s(r,t)})(TT,function(i,s){var l=typeof Map=="function"?new Map:(function(){var v=[],P=[];return{has:function(M){return v.indexOf(M)>-1},get:function(M){return P[v.indexOf(M)]},set:function(M,W){v.indexOf(M)===-1&&(v.push(M),P.push(W))},delete:function(M){var W=v.indexOf(M);W>-1&&(v.splice(W,1),P.splice(W,1))}}})(),c=function(P){return new Event(P,{bubbles:!0})};try{new Event("test")}catch{c=function(x){var M=document.createEvent("Event");return M.initEvent(x,!0,!1),M}}function h(v){if(!v||!v.nodeName||v.nodeName!=="TEXTAREA"||l.has(v))return;var P=null,x=null,M=null;function W(){var D=window.getComputedStyle(v,null);D.resize==="vertical"?v.style.resize="none":D.resize==="both"&&(v.style.resize="horizontal"),D.boxSizing==="content-box"?P=-(parseFloat(D.paddingTop)+parseFloat(D.paddingBottom)):P=parseFloat(D.borderTopWidth)+parseFloat(D.borderBottomWidth),isNaN(P)&&(P=0),Y()}function ie(D){{var U=v.style.width;v.style.width="0px",v.offsetWidth,v.style.width=U}v.style.overflowY=D}function Q(D){for(var U=[];D&&D.parentNode&&D.parentNode instanceof Element;)D.parentNode.scrollTop&&U.push({node:D.parentNode,scrollTop:D.parentNode.scrollTop}),D=D.parentNode;return U}function L(){if(v.scrollHeight!==0){var D=Q(v),U=document.documentElement&&document.documentElement.scrollTop;v.style.height="",v.style.height=v.scrollHeight+P+"px",x=v.clientWidth,D.forEach(function(ce){ce.node.scrollTop=ce.scrollTop}),U&&(document.documentElement.scrollTop=U)}}function Y(){L();var D=Math.round(parseFloat(v.style.height)),U=window.getComputedStyle(v,null),ce=U.boxSizing==="content-box"?Math.round(parseFloat(U.height)):v.offsetHeight;if(ce<D?U.overflowY==="hidden"&&(ie("scroll"),L(),ce=U.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(v,null).height)):v.offsetHeight):U.overflowY!=="hidden"&&(ie("hidden"),L(),ce=U.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(v,null).height)):v.offsetHeight),M!==ce){M=ce;var we=c("autosize:resized");try{v.dispatchEvent(we)}catch{}}}var de=function(){v.clientWidth!==x&&Y()},ue=(function(D){window.removeEventListener("resize",de,!1),v.removeEventListener("input",Y,!1),v.removeEventListener("keyup",Y,!1),v.removeEventListener("autosize:destroy",ue,!1),v.removeEventListener("autosize:update",Y,!1),Object.keys(D).forEach(function(U){v.style[U]=D[U]}),l.delete(v)}).bind(v,{height:v.style.height,resize:v.style.resize,overflowY:v.style.overflowY,overflowX:v.style.overflowX,wordWrap:v.style.wordWrap});v.addEventListener("autosize:destroy",ue,!1),"onpropertychange"in v&&"oninput"in v&&v.addEventListener("keyup",Y,!1),window.addEventListener("resize",de,!1),v.addEventListener("input",Y,!1),v.addEventListener("autosize:update",Y,!1),v.style.overflowX="hidden",v.style.wordWrap="break-word",l.set(v,{destroy:ue,update:Y}),W()}function m(v){var P=l.get(v);P&&P.destroy()}function g(v){var P=l.get(v);P&&P.update()}var _=null;typeof window>"u"||typeof window.getComputedStyle!="function"?(_=function(P){return P},_.destroy=function(v){return v},_.update=function(v){return v}):(_=function(P,x){return P&&Array.prototype.forEach.call(P.length?P:[P],function(M){return h(M)}),P},_.destroy=function(v){return v&&Array.prototype.forEach.call(v.length?v:[v],m),v},_.update=function(v){return v&&Array.prototype.forEach.call(v.length?v:[v],g),v}),s.default=_,i.exports=s.default})})(wi,wi.exports)),wi.exports}var ST=CT();const IT=hs(ST),Im=r=>{const{type:t,taskValue:i,closeForm:s}=r,{createNewTask:l,modifyTask:c,removeTask:h}=ir(),{user:m}=Au(),g=t==="staging"?r.status:r.id,[_,v]=Ee.useState(i||"");Ee.useEffect(()=>{const L=document.querySelector(`#taskFormInput_${g}`);L&&L!==document.activeElement&&(IT(L),L.value="",L.focus(),L.value=_)},[g,_]);const P=L=>{const Y=L.currentTarget;setTimeout(()=>{Y.contains(document.activeElement)||s()},5)},x=L=>{v(L.target.value)},M=()=>v(""),W=async L=>{await h(L),s()},ie=async L=>{await c({id:L,description:_}),s()};async function Q(L){L.preventDefault(),t==="edit"?await ie(r.id):await l({description:_,status:r.status,ownerId:m?.id??null}),s()}return b.jsxs(b.Fragment,{children:[b.jsx("h3",{className:"taskForm__heading",children:t==="edit"?"Edit Task":"New Task"}),b.jsxs("form",{action:"#",onSubmit:Q,onBlur:P,className:"taskForm",children:[b.jsx("label",{htmlFor:`taskFormInput_${g}`,className:"srOnly",children:"Task Item"}),b.jsx("textarea",{className:"taskForm__input",id:`taskFormInput_${g}`,name:"taskFormInput",onChange:x,value:_}),_&&b.jsxs(b.Fragment,{children:[b.jsx("label",{htmlFor:`taskBtn__clear--${g}`,className:"srOnly",children:"Clear task input"}),b.jsx("button",{id:`taskBtn__clear--${g}`,type:"button",onClick:M,className:"btn btn--black",children:"Clear"})]}),t==="edit"&&b.jsxs(b.Fragment,{children:[b.jsx("label",{htmlFor:`taskBtn__delete--${g}`,className:"srOnly",children:"Delete task"}),b.jsx("button",{id:`taskBtn__delete--${g}`,type:"button",onClick:()=>W(r.id),className:"btn btn--red",children:"Delete"})]}),b.jsx("label",{htmlFor:`taskBtn__save--${g}`,className:"srOnly",children:"Save task input"}),b.jsx("button",{id:`taskBtn__save--${g}`,className:"btn btn--green",disabled:_.length===0,children:t==="edit"?"Save":"Add"})]})]})},bT=({id:r,task:t,status:i})=>{const[s,l]=Ee.useState(!1),{taskStatus:c,modifyTask:h}=ir(),m=P=>{let M=c.indexOf(i)+P;M=M<0?0:M>=c.length?c.length-1:M,i!==c[M]&&h({id:r,status:c[M]})},g=()=>{m(-1)},_=()=>{m(1)},v=()=>{l(P=>!P)};return b.jsxs("li",{className:`taskItem taskItem--${i}`,children:[i!==On.Todo&&b.jsxs(b.Fragment,{children:[b.jsx("label",{htmlFor:`btnPrev--${r}`,className:"srOnly",children:"Move task to the previous status"}),b.jsxs("button",{id:`btnPrev--${r}`,className:"taskItem__btn taskItem__btn--prev",onClick:g,children:[b.jsx(St,{icon:Iv,"aria-hidden":"true"}),b.jsx("span",{className:"srOnly",children:"Move task to the previous status"})]})]}),s?b.jsx(Im,{id:r,type:"edit",taskValue:t,closeForm:()=>l(!1)}):b.jsxs(b.Fragment,{children:[b.jsx("label",{htmlFor:`taskItem--${r}`,className:"srOnly",children:"Click or focus on the text of the task to enter edit mode and modify or delete the task"}),b.jsx("button",{id:`taskItem--${r}`,className:"taskItem__text",onClick:v,onFocus:v,children:t})]}),i!==On.Completed&&b.jsxs(b.Fragment,{children:[b.jsx("label",{htmlFor:`btnNext--${r}`,className:"srOnly",children:"Move task to the previous status"}),b.jsxs("button",{id:`btnNext--${r}`,className:"taskItem__btn taskItem__btn--next",onClick:_,children:[b.jsx(St,{icon:bv,"aria-hidden":"true"}),b.jsx("span",{className:"srOnly",children:"Click to move task to the next status"})]})]})]})},xT={[On.Todo]:"Todo",[On.InProgress]:"In Progress",[On.Completed]:"Completed"},PT=({status:r,tasks:t})=>{const[i,s]=Ee.useState(!1),[l,c]=Ee.useState(!1),{removeManyTasks:h}=ir(),m=()=>c(v=>!v),g=()=>s(v=>!v),_=async()=>{const v=t.map(P=>P.id);await h(v),c(!1)};return b.jsxs("div",{className:"taskList",children:[b.jsxs("div",{className:`taskList__header taskList__header--${r}`,children:[b.jsx("label",{htmlFor:`taskListMenuBtn--${r}`,className:"srOnly",children:"Click the button to toggle the task list menu to clear the task list's items"}),b.jsxs("button",{id:`taskListMenuBtn--${r}`,className:l?"btn taskList__menuBtn taskList__menuBtn--active":"btn taskList__menuBtn",onClick:m,children:[b.jsx("span",{className:"srOnly",children:"Toggle the task list's menu"}),l?b.jsx(St,{icon:su}):b.jsx(St,{icon:Cv})]}),b.jsxs("h2",{className:"taskList__headingText",children:[xT[r],t.length>0&&b.jsx("span",{className:"taskList__count",children:t.length})]}),l?b.jsxs(b.Fragment,{children:[b.jsx("label",{htmlFor:`taskListClearBtn--${r}`,className:"srOnly",children:"Click the button to clear the task list's items"}),b.jsx("button",{id:`taskListClearBtn--${r}`,onClick:_,className:"btn btn--black taskList__clearBtn",disabled:t.length===0,children:"Clear List"})]}):b.jsxs(b.Fragment,{children:[b.jsx("label",{htmlFor:`taskListAddBtn--${r}`,className:"srOnly",children:"Click the button to toggle the add new task form"}),b.jsx("button",{id:`taskListAddBtn--${r}`,onClick:g,className:"btn taskList__addBtn",disabled:i,children:"Add Task"})]})]}),b.jsxs("ul",{className:"taskList__list",children:[i&&b.jsx("li",{className:`taskItem taskItem--${r}`,children:b.jsx(Im,{type:"staging",status:r,closeForm:()=>s(!1)})}),t.map(({id:v,description:P,status:x})=>b.jsx(bT,{id:v,task:P,status:x},v))]})]})},OT=()=>{const{taskItems:r,taskStatus:t,searchTerms:i,listFilter:s}=ir();let l=r;i!==void 0&&r.length&&(l=ET(i,r));const c=s==="all"?t:[s];return b.jsx("section",{className:"taskLists",children:c.map(h=>{const m=l.filter(g=>g.status===h);return b.jsx(PT,{status:h,tasks:m},h)})})},AT=()=>{const{theme:r}=Ee.useContext(Nu);return b.jsxs("div",{className:`pageContainer ${r}`,children:[b.jsx(vT,{}),b.jsx("main",{children:b.jsxs("div",{className:"wrapper",children:[b.jsx(_T,{}),b.jsx(OT,{})]})}),b.jsx(vy,{})]})};yy.render(b.jsx(eu.StrictMode,{children:b.jsx(pT,{children:b.jsx(gT,{children:b.jsx(mT,{children:b.jsx(AT,{})})})})}),document.getElementById("root"));
