!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).flexsearch={})}(this,(function(t){"use strict";function e(t,e){return void 0!==t?t:e}function i(t){const e=new Array(t);for(let i=0;i<t;i++)e[i]=n();return e}function n(){return Object.create(null)}function s(t,e){return e.length-t.length}function r(t){return t.constructor===Array}function h(t){return"string"==typeof t}function o(t){return"object"==typeof t}function l(t){return"function"==typeof t}function f(t,e,i,n){if(t&&(e&&(t=a(t,e)),this.matcher&&(t=a(t,this.matcher)),this.stemmer&&t.length>1&&(t=a(t,this.stemmer)),n&&t.length>1&&(t=function(t){let e="",i="";for(let n,s=0,r=t.length;s<r;s++)(n=t[s])!==i&&(e+=i=n);return e}(t)),i||""===i)){const e=t.split(i);return this.filter?function(t,e){const i=t.length,n=[];for(let s=0,r=0;s<i;s++){const i=t[s];i&&!e[i]&&(n[r++]=i)}return n}(e,this.filter):e}return t}const c=/[\p{Z}\p{S}\p{P}\p{C}]+/u;function u(t,e){const i=function(t){return Object.keys(t)}(t),n=i.length,s=[];let r="",h=0;for(let o,l,f=0;f<n;f++)o=i[f],l=t[o],l?(s[h++]=d(e?"(?!\\b)"+o+"(\\b|_)":o),s[h++]=l):r+=(r?"|":"")+o;return r&&(s[h++]=d(e?"(?!\\b)("+r+")(\\b|_)":"("+r+")"),s[h]=""),s}function a(t,e){for(let i=0,n=e.length;i<n&&(t=t.replace(e[i],e[i+1]));i+=2);return t}function d(t){return new RegExp(t,"g")}function g(t){return f.call(this,(""+t).toLowerCase(),!1,c,!1)}const p={},m={};function x(t){y(t,"add"),y(t,"append"),y(t,"search"),y(t,"update"),y(t,"remove")}function y(t,e){t[e+"Async"]=function(){const t=this,i=arguments,n=i[i.length-1];let s;l(n)&&(s=n,delete i[i.length-1]);const r=new Promise((function(n){setTimeout((function(){t.async=!0;const s=t[e].apply(t,i);t.async=!1,n(s)}))}));return s?(r.then(s),this):r}}function b(t,e,i,s){const r=t.length;let h,o,l=[],f=0;s&&(s=[]);for(let c=r-1;c>=0;c--){const u=t[c],a=u.length,d=n();let g=!h;for(let t=0;t<a;t++){const n=u[t],a=n.length;if(a)for(let t,u,p=0;p<a;p++)if(u=n[p],h){if(h[u]){if(!c)if(i)i--;else if(l[f++]=u,f===e)return l;(c||s)&&(d[u]=1),g=!0}if(s&&(o[u]=(t=o[u])?++t:t=1,t<r)){const e=s[t-2]||(s[t-2]=[]);e[e.length]=u}}else d[u]=1}if(s)h||(o=d);else if(!g)return[];h=d}if(s)for(let t,n,r=s.length-1;r>=0;r--){t=s[r],n=t.length;for(let s,r=0;r<n;r++)if(s=t[r],!h[s]){if(i)i--;else if(l[f++]=s,f===e)return l;h[s]=1}}return l}function k(t,e){const i=n(),s=n(),r=[];for(let e=0;e<t.length;e++)i[t[e]]=1;for(let t,n=0;n<e.length;n++){t=e[n];for(let e,n=0;n<t.length;n++)e=t[n],i[e]&&(s[e]||(s[e]=1,r[r.length]=e))}return r}function w(t){this.limit=!0!==t&&t,this.cache=n(),this.queue=[]}function z(t,e,i){o(t)&&(t=t.query);let n=this.cache.get(t);return n||(n=this.search(t,e,i),this.cache.set(t,n)),n}w.prototype.set=function(t,e){if(!this.cache[t]){let e=this.queue.length;e===this.limit?delete this.cache[this.queue[e-1]]:e++;for(let t=e-1;t>0;t--)this.queue[t]=this.queue[t-1];this.queue[0]=t}this.cache[t]=e},w.prototype.get=function(t){const e=this.cache[t];if(this.limit&&e){const e=this.queue.indexOf(t);if(e){const t=this.queue[e-1];this.queue[e-1]=this.queue[e],this.queue[e]=t}}return e},w.prototype.del=function(t){for(let e,i,n=0;n<this.queue.length;n++)i=this.queue[n],e=this.cache[i],-1!==e.indexOf(t)&&(this.queue.splice(n--,1),delete this.cache[i])};const q={"memory":{charset:"latin:extra",resolution:3,minlength:4,fastupdate:!1},"performance":{resolution:3,minlength:3,optimize:!1,context:{depth:2,resolution:1}},"match":{charset:"latin:extra",tokenize:"reverse"},"score":{charset:"latin:advanced",resolution:20,minlength:3,context:{depth:3,resolution:9}},"default":{}};
/**!
   * FlexSearch.js
   * Copyright 2018-2021 Nextapps GmbH
   * Author: Thomas Wilkerling
   * Licence: Apache-2.0
   * https://github.com/nextapps-de/flexsearch
   */
class _{constructor(t,s){if(!(this instanceof _))return new _(t);let r,o,l;t?(r=(t=function(t){if(h(t))q[t]||console.warn("Preset not found: "+t),t=q[t];else{const e=t.preset;e&&(e[e]||console.warn("Preset not found: "+e),t=Object.assign({},e[e],t))}return t}(t)).charset,o=t.lang,h(r)&&(-1===r.indexOf(":")&&(r+=":default"),r=m[r]),h(o)&&(o=p[o])):t={};let f,c,a=t.context||{};this.encode=t.encode||r&&r.encode||g,this.register=s||n(),this.resolution=f=t.resolution||9,this.tokenize=l=r&&r.tokenize||t.tokenize||"strict",this.depth="strict"===l&&a.depth,this.bidirectional=e(a.bidirectional,!0),this.optimize=c=e(t.optimize,!0),this.fastupdate=e(t.fastupdate,!0),this.minlength=t.minlength||1,this.boost=t.boost,this.map=c?i(f):n(),this.resolution_ctx=f=a.resolution||1,this.ctx=c?i(f):n(),this.rtl=r&&r.rtl||t.rtl,this.matcher=(l=t.matcher||o&&o.matcher)&&u(l,!1),this.stemmer=(l=t.stemmer||o&&o.stemmer)&&u(l,!0),this.filter=(l=t.filter||o&&o.filter)&&function(t){const e=n();for(let i=0,n=t.length;i<n;i++)e[t[i]]=1;return e}(l),this.cache=(l=t.cache)&&new w(l)}append(t,e){return this.add(t,e,!0)}add(t,e,i,s){if(e&&(t||0===t)){if(!s&&!i&&this.register[t])return this.update(t,e);const r=(e=this.encode(e)).length;if(r){const s=n(),h=n(),o=this.depth,l=this.resolution;for(let f=0;f<r;f++){let c=e[this.rtl?r-1-f:f],u=c.length;if(c&&u>=this.minlength&&(o||!h[c])){let a=O(l,r,f),d="";switch(this.tokenize){case"full":if(u>3){for(let e=0;e<u;e++)for(let n=u;n>e;n--)if(n-e>=this.minlength){const s=O(l,r,f,u,e);d=c.substring(e,n),this.push_index(h,d,s,t,i)}break}case"reverse":if(u>2){for(let e=u-1;e>0;e--)if(d=c[e]+d,d.length>=this.minlength){const n=O(l,r,f,u,e);this.push_index(h,d,n,t,i)}d=""}case"forward":if(u>1){for(let e=0;e<u;e++)d+=c[e],d.length>=this.minlength&&this.push_index(h,d,a,t,i);break}default:if(this.boost&&(a=Math.min(a/this.boost(e,c,f)|0,l-1)),this.push_index(h,c,a,t,i),o&&r>1&&f<r-1){const h=n(),l=this.resolution_ctx,u=c,a=Math.min(o+1,r-f);h[u]=1;for(let n=1;n<a;n++)if(c=e[this.rtl?r-1-f-n:f+n],c&&c.length>=this.minlength&&!h[c]){h[c]=1;const e=O(l+(r/2>l?0:1),r,f,a-1,n-1),o=this.bidirectional&&c>u;this.push_index(s,o?u:c,e,t,i,o?c:u)}}}}}this.fastupdate||(this.register[t]=1)}}return this}push_index(t,e,i,s,r,h){let o=h?this.ctx:this.map;if((!t[e]||h&&!t[e][h])&&(this.optimize&&(o=o[i]),h?((t=t[e]||(t[e]=n()))[h]=1,o=o[h]||(o[h]=n())):t[e]=1,o=o[e]||(o[e]=[]),this.optimize||(o=o[i]||(o[i]=[])),(!r||-1===o.indexOf(s))&&(o[o.length]=s,this.fastupdate))){const t=this.register[s]||(this.register[s]=[]);t[t.length]=o}}search(t,e,i){i||(!e&&o(t)?t=(i=t).query:o(e)&&(i=e));let r,h,l,f=[],c=0;if(i&&(e=i.limit,c=i.offset||0,h=i.context,l=i.suggest),t&&(r=(t=this.encode(t)).length,r>1)){const e=n(),i=[];for(let n,s=0,h=0;s<r;s++)if(n=t[s],n&&n.length>=this.minlength&&!e[n]){if(!(this.optimize||l||this.map[n]))return f;i[h++]=n,e[n]=1}r=(t=i).length}if(!r)return f;e||(e=100);let u,a,d,g=this.depth&&r>1&&!1!==h,p=0;for(g?(u=t[0],p=1):r>1&&t.sort(s);p<r;p++){if(d=t[p],g?(a=this.add_result(f,l,e,c,2===r,d,u),l&&!1===a&&f.length||(u=d)):a=this.add_result(f,l,e,c,1===r,d),a)return a;if(l&&p===r-1){let t=f.length;if(!t){if(g){g=0,p=-1;continue}return f}if(1===t)return v(f[0],e,c)}}return b(f,e,c,l)}add_result(t,e,i,n,s,r,h){let o=[],l=h?this.ctx:this.map;if(this.optimize||(l=j(l,r,h,this.bidirectional)),l){let e=0;const f=Math.min(l.length,h?this.resolution_ctx:this.resolution);for(let t,c,u=0,a=0;u<f&&(t=l[u],!(t&&(this.optimize&&(t=j(t,r,h,this.bidirectional)),n&&t&&s&&(c=t.length,c<=n?(n-=c,t=null):(t=t.slice(n),n=0)),t&&(o[e++]=t,s&&(a+=t.length,a>=i)))));u++);if(e)return s?v(o,i,0):void(t[t.length]=o)}return!e&&o}contain(t){return!!this.register[t]}update(t,e){return this.remove(t).add(t,e)}remove(t,e){const i=this.register[t];if(i){if(this.fastupdate)for(let e,n=0;n<i.length;n++)e=i[n],e.splice(e.indexOf(t),1);else P(this.map,t,this.resolution,this.optimize),this.depth&&P(this.ctx,t,this.resolution_ctx,this.optimize);e||delete this.register[t],this.cache&&this.cache.del(t)}return this}serialize(){return{reg:this.register,opt:this.optimize,map:this.map,ctx:this.ctx}}static deserialize(t,e){const i=new _(e);return i.optimize=t.opt,i.register=t.reg,i.map=t.map,i.ctx=t.ctx,i}}function O(t,e,i,n,s){return i&&t>1?e+(n||0)<=t?i+(s||0):(t-1)/(e+(n||0))*(i+(s||0))+1|0:0}function v(t,e,i){var n;return 1===t.length?t=t[0]:(n=t,t=[].concat.apply([],n)),i||t.length>e?t.slice(i,i+e):t}function j(t,e,i,n){if(i){const s=n&&e>i;t=(t=t[s?e:i])&&t[s?i:e]}else t=t[e];return t}function P(t,e,i,n,s){let h=0;if(r(t))if(s){const i=t.indexOf(e);-1!==i?t.length>1&&(t.splice(i,1),h++):h++}else{s=Math.min(t.length,i);for(let r,o=0;o<s;o++)r=t[o],r&&(h=P(r,e,i,n,s),n||h||delete t[o])}else for(let r in t)h=P(t[r],e,i,n,s),h||delete t[r];return h}_.prototype.searchCache=z,x(_.prototype);
/**!
   * FlexSearch.js
   * Copyright 2018-2021 Nextapps GmbH
   * Author: Thomas Wilkerling
   * Licence: Apache-2.0
   * https://github.com/nextapps-de/flexsearch
   */
class A{constructor(t){if(!(this instanceof A))return new A(t);const i=t.document||t.doc||t;let s;this.tree=[],this.field=[],this.marker=[],this.register=n(),this.key=(s=i.key||i.id)&&M(s,this.marker)||"id",this.fastupdate=e(t.fastupdate,!0),this.storetree=(s=i.store)&&!0!==s&&[],this.store=s&&n(),this.tag=(s=i.tag)&&M(s,this.marker),this.tagindex=s&&n(),this.cache=(s=t.cache)&&new w(s),t.cache=!1,this.worker=t.worker,this.async=!1,this.index=class{constructor(t,e){const i=n();let s=e.index||e.field||e;h(s)&&(s=[s]);for(let e,n,r=0;r<s.length;r++)e=s[r],h(e)||(n=e,e=e.field),n=o(n)?Object.assign({},t,n):t,this.worker||(i[e]=new _(n,this.register)),this.tree[r]=M(e,this.marker),this.field[r]=e;if(this.storetree){let t=e.store;h(t)&&(t=[t]);for(let e=0;e<t.length;e++)this.storetree[e]=M(t[e],this.marker)}return i}}.call(this,t,i)}add(t,e,i){if(o(t)&&(t=C(e=t,this.key)),e&&(t||0===t)){if(!i&&this.register[t])return this.update(t,e);for(let n,s,r=0;r<this.field.length;r++)s=this.field[r],n=this.tree[r],h(n)&&(n=[n]),I(e,n,this.marker,0,this.index[s],t,n[0],i);if(this.tag){let s=C(e,this.tag),r=n();h(s)&&(s=[s]);for(let e,n,h=0;h<s.length;h++)if(e=s[h],!r[e]&&(r[e]=1,n=this.tagindex[e]||(this.tagindex[e]=[]),(!i||-1===n.indexOf(t))&&(n[n.length]=t,this.fastupdate))){const e=this.register[t]||(this.register[t]=[]);e[e.length]=n}}if(this.store&&(!i||!this.store[t])){let i;if(this.storetree){i=n();for(let t,n=0;n<this.storetree.length;n++)t=this.storetree[n],h(t)?i[t]=e[t]:E(e,i,t,0,t[0])}this.store[t]=i||e}}return this}append(t,e){return this.add(t,e,!0)}update(t,e){return this.remove(t).add(t,e)}remove(t){if(o(t)&&(t=C(t,this.key)),this.register[t]){for(let e=0;e<this.field.length&&(this.index[this.field[e]].remove(t,!this.worker),!this.fastupdate);e++);if(this.tag&&!this.fastupdate)for(let e in this.tagindex){const i=this.tagindex[e],n=i.indexOf(t);-1!==n&&(i.length>1?i.splice(n,1):delete this.tagindex[e])}this.store&&delete this.store[t],delete this.register[t]}return this}search(t,e,i,n){i||(!e&&o(t)?t=(i=t).query:o(e)&&(i=e,e=0));let s,l,f,c,u,a,d=[],g=[],p=0;if(i)if(r(i))f=i,i=null;else{if(s=i.pluck,f=s||i.index||i.field,c=i.tag,l=this.store&&i.enrich,u="and"===i.bool,e=i.limit||100,a=i.offset||0,c&&(h(c)&&(c=[c]),!t)){for(let t,i=0;i<c.length;i++)t=T.call(this,c[i],e,a,l),t&&(d[d.length]=t,p++);return p?d:[]}h(f)&&(f=[f])}f||(f=this.field),u=u&&(f.length>1||c&&c.length>1);const m=!n&&(this.worker||this.async)&&[];for(let s,r,o,l=0;l<f.length;l++){let x;if(r=f[l],h(r)||(x=r,r=r.field),m)m[l]=this.index[r].searchAsync(t,e,x||i);else{if(s=n?n[l]:this.index[r].search(t,e,x||i),o=s&&s.length,c&&o){const t=[];let i=0;u&&(t[0]=[s]);for(let e,n,s=0;s<c.length;s++)e=c[s],n=this.tagindex[e],o=n&&n.length,o&&(i++,t[t.length]=u?[n]:n);i&&(s=u?b(t,e||100,a||0):k(s,t),o=s.length)}if(o)g[p]=r,d[p++]=s;else if(u)return[]}}if(m){const n=this;return new Promise((function(s){Promise.all(m).then((function(r){s(n.search(t,e,i,r))}))}))}if(!p)return[];if(s&&(!l||!this.store))return d[0];for(let t,e=0;e<g.length;e++){if(t=d[e],t.length&&l&&(t=D.call(this,t)),s)return t;d[e]={"field":g[e],"result":t}}return d}contain(t){return!!this.register[t]}get(t){return this.store[t]}set(t,e){return this.store[t]=e,this}serialize(){const t={tag:this.tagIndex,reg:this.register,store:this.store,field:this.field,index:{}};return Object.entries(this.index).forEach((([e,i])=>{t.index[e]=i.serialize()})),t}static deserialize(t,e){const i=new A(e);return i.tagIndex=t.tag,i.register=t.reg,i.store=t.store,i.field=t.field,Object.entries(t.index).forEach((([e,n])=>{i.index[e].import(n),i.index[e].register=t.reg})),i}}function M(t,e){const i=t.split(":");let n=0;for(let s=0;s<i.length;s++)(t=i[s]).indexOf("[]")>=0&&(t=t.substring(0,t.length-2))&&(e[n]=!0),t&&(i[n++]=t);return n<i.length&&(i.length=n),n>1?i:i[0]}function C(t,e){if(h(e))t=t[e];else for(let i=0;t&&i<e.length;i++)t=t[e[i]];return t}function E(t,e,i,s,h){if(t=t[h],s===i.length-1)e[h]=t;else if(t)if(r(t)){e=e[h]=new Array(t.length);for(let n=0;n<t.length;n++)E(t,e,i,s,n)}else e=e[h]||(e[h]=n()),h=i[++s],E(t,e,i,s,h)}function I(t,e,i,n,s,h,o,l){if(t=t[o])if(n===e.length-1){if(r(t)){if(i[n]){for(let e=0;e<t.length;e++)s.add(h,t[e],!0,!0);return}t=t.join(" ")}s.add(h,t,l,!0)}else if(r(t))for(let r=0;r<t.length;r++)I(t,e,i,n,s,h,r,l);else o=e[++n],I(t,e,i,n,s,h,o,l)}function T(t,e,i,n){let s=this.tagindex[t],r=s&&s.length-i;if(r&&r>0)return(r>e||i)&&(s=s.slice(i,i+e)),n&&(s=D.call(this,s)),{"tag":t,"result":s}}function D(t){const e=new Array(t.length);for(let i,n=0;n<t.length;n++)i=t[n],e[n]={"id":i,"doc":this.store[i]};return e}A.prototype.searchCache=z,x(A.prototype),t.Document=A,t.Index=_,Object.defineProperty(t,"__esModule",{value:!0})}));
