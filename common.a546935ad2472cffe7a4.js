(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("A36C"),i=n("iWo5"),o=n("qULd");const c=(t,e)=>{let n,c;const s=(t,r,i)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,r);o&&e(o)?o!==n&&(u(),a(o,i)):u()},a=(t,e)=>{n=t,c||(c=n);const i=n;Object(r.f)(()=>i.classList.add("ion-activated")),e()},u=(t=!1)=>{if(!n)return;const e=n;Object(r.f)(()=>e.classList.remove("ion-activated")),t&&c!==n&&n.click(),n=void 0};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>s(t.currentX,t.currentY,o.a),onMove:t=>s(t.currentX,t.currentY,o.b),onEnd:()=>{u(!0),Object(o.e)(),c=void 0}})}},"08jv":function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("mrSG"),i=n("wnxH"),o=n("8Y7J");let c=(()=>{let t=class extends i.a{constructor(){super()}};return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t=Object(r.a)([Object(i.e)({name:"puzzles",cache:{ttl:36e5}})],t),t})()},"3bzS":function(t,e,n){"use strict";n.d(e,"a",function(){return h}),n.d(e,"b",function(){return y});var r=n("8Y7J"),i=n("XNiG"),o=n("zx2A");class c{constructor(t){this.notifier=t}call(t,e){const n=new s(t),r=Object(o.c)(this.notifier,new o.a(n));return r&&!n.seenValue?(n.add(r),e.subscribe(n)):n}}class s extends o.b{constructor(t){super(t),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}const a=r.ab,u=Symbol("__destroy"),l=Symbol("__decoratorApplied");function f(t){return"string"==typeof t?Symbol(`__destroy__${t}`):u}function d(t,e){t[e]||(t[e]=new i.a)}function p(t,e){t[e]&&(t[e].next(),t[e].complete(),t[e]=null)}function m(t){t&&"function"==typeof t.unsubscribe&&t.unsubscribe()}function b(t,e){return function(){var n,r;if(t&&t.call(this),p(this,f()),e.arrayName)return r=this[e.arrayName],void(Array.isArray(r)&&r.forEach(m));if(e.checkProperties)for(const t in this)(null===(n=e.blackList)||void 0===n?void 0:n.includes(t))||m(this[t])}}function h(t={}){return e=>{e[a]?function(t,e){const n=t.\u0275pipe;n.onDestroy=b(n.onDestroy,e)}(e,t):function(t,e){t.prototype.ngOnDestroy=b(t.prototype.ngOnDestroy,e)}(e,t),function(t){t.prototype[l]=!0}(e)}}function y(t,e){return n=>{const r=f(e);return"string"==typeof e?function(t,e,n){const r=t[e];d(t,n),t[e]=function(){r.apply(this,arguments),p(this,n),t[e]=r}}(t,e,r):d(t,r),n.pipe((i=t[r],t=>t.lift(new c(i))));var i}}},"74mu":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return s});const r=(t,e)=>null!==e.closest(t),i=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},c=/^[a-z][a-z0-9+\-.]*:/,s=async(t,e,n,r)=>{if(null!=t&&"#"!==t[0]&&!c.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,n,r)}return!1}},UXun:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("jtHE");function i(t,e,n){let i;return i=t&&"object"==typeof t?t:{bufferSize:t,windowTime:e,refCount:!1,scheduler:n},t=>t.lift(function({bufferSize:t=Number.POSITIVE_INFINITY,windowTime:e=Number.POSITIVE_INFINITY,refCount:n,scheduler:i}){let o,c,s=0,a=!1,u=!1;return function(l){let f;s++,!o||a?(a=!1,o=new r.a(t,e,i),f=o.subscribe(this),c=l.subscribe({next(t){o.next(t)},error(t){a=!0,o.error(t)},complete(){u=!0,c=void 0,o.complete()}})):f=o.subscribe(this),this.add(()=>{s--,f.unsubscribe(),c&&!u&&n&&0===s&&(c.unsubscribe(),c=void 0,o=void 0)})}}(i))}},ZaV5:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});const r=async(t,e,n,r,i)=>{if(t)return t.attachViewToDom(e,n,i,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return r&&r.forEach(t=>o.classList.add(t)),i&&Object.assign(o,i),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},i=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},h3R7:function(t,e,n){"use strict";n.d(e,"a",function(){return r});const r={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const r=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const r=e/n,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},qULd:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return s});const r={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{r.selection()},o=()=>{r.selectionStart()},c=()=>{r.selectionChanged()},s=()=>{r.selectionEnd()},a=t=>{r.impact(t)}},wtIp:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var r=n("wnxH"),i=n("LRne"),o=n("3E0/"),c=n("lJxs"),s=n("vkgz"),a=n("w1tV");const u=btoa("\n  --**--**--\n  --******--\n  -********-\n  -********-\n  -********-\n  --******--\n  ---****---\n  *--****---\n  -******---\n  ---****---\n".replace(/\s+/g,"").match(/.{1,8}/g).map(t=>[...t].reduceRight((t,e)=>+("*"===e)+(t<<1),0)).map(t=>String.fromCharCode(t)).join("")),l=[...Array(20)].map((t,e)=>({id:`__mock-${e}`,title:`Example Puzzle #${e+1} (mock)`,description:`This is an example mock Puzzle #${e+1}\nEnjoy!`,width:10,height:10,goal:u}));var f=n("8Y7J"),d=n("08jv");let p=(()=>{class t{constructor(t){this.puzzlesStore=t}get(e){return Object(i.a)(l.find(t=>t.id===e)).pipe(Object(o.a)(2e3)).pipe(Object(r.j)(this.puzzlesStore),Object(c.a)(e=>t.decode(e)),Object(s.a)(t=>this.puzzlesStore.upsertMany([t])),Object(a.a)())}getAll(){return Object(i.a)(l).pipe(Object(o.a)(2e3)).pipe(Object(r.j)(this.puzzlesStore),Object(c.a)(e=>e.map(e=>t.decode(e))),Object(s.a)(t=>this.puzzlesStore.upsertMany(t)),Object(a.a)())}static encode(t){let e=t.goal.map(t=>t?"1":"0").join("").match(/.{1,8}/g).map(t=>[...t].reduceRight((t,e)=>+e+(t<<1),0)).map(t=>String.fromCharCode(t)).join(""),n=btoa(e);return Object.assign(Object.assign({},t),{goal:n})}static decode(t){let{width:e,height:n,goal:r}=t,i=[...atob(r)].flatMap(t=>[...Array(8)].map((e,n)=>Boolean(t.charCodeAt(0)&1<<n))).slice(0,e*n);return Object.assign(Object.assign({},t),{goal:i})}}return t.\u0275fac=function(e){return new(e||t)(f.Tb(d.a))},t.\u0275prov=f.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},zBCA:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("wnxH"),i=n("8Y7J"),o=n("08jv");let c=(()=>{class t extends r.c{constructor(t){super(t),this.store=t}}return t.\u0275fac=function(e){return new(e||t)(i.Tb(o.a))},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);