document.addEventListener("DOMContentLoaded",function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(function(e){e.addEventListener("click",function(){var t=e.dataset.target,n=document.getElementById(t);e.classList.toggle("is-active"),n.classList.toggle("is-active")})}),baguetteBox.run(".container"),normalizeBrightness(),document.querySelector(".notification > button.delete").addEventListener("click",function(e){e.target.parentElement.style.display="none"},!1)});
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.baguetteBox=e()}(this,function(){"use strict";var t,e,n,o,i,a='<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',s='<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',l='<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',r={},u={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},c={},d=[],f=0,g=!1,p={},b=!1,m=/.+\.(gif|jpe?g|png|webp)/i,v={},h=[],y=null,w=function(t){-1!==t.target.id.indexOf("baguette-img")&&I()},k=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,q()},x=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,j()},C=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,I()},E=function(t){p.count++,p.count>1&&(p.multitouch=!0),p.startX=t.changedTouches[0].pageX,p.startY=t.changedTouches[0].pageY},B=function(t){if(!b&&!p.multitouch){t.preventDefault?t.preventDefault():t.returnValue=!1;var e=t.touches[0]||t.changedTouches[0];e.pageX-p.startX>40?(b=!0,q()):e.pageX-p.startX<-40?(b=!0,j()):p.startY-e.pageY>100&&I()}},T=function(){p.count--,p.count<=0&&(p.multitouch=!1),b=!1},N=function(){T()},L=function(e){"block"===t.style.display&&t.contains&&!t.contains(e.target)&&(e.stopPropagation(),H())};function A(t){if(v.hasOwnProperty(t)){var e=v[t].galleries;[].forEach.call(e,function(t){[].forEach.call(t,function(t){V(t.imageElement,"click",t.eventHandler)}),d===t&&(d=[])}),delete v[t]}}function P(t){switch(t.keyCode){case 37:q();break;case 39:j();break;case 27:I()}}function S(i,a){if(d!==i){for(d=i,function(i){i||(i={});for(var a in u)r[a]=u[a],void 0!==i[a]&&(r[a]=i[a]);e.style.transition=e.style.webkitTransition="fadeIn"===r.animation?"opacity .4s ease":"slideIn"===r.animation?"":"none","auto"===r.buttons&&("ontouchstart"in window||1===d.length)&&(r.buttons=!1);n.style.display=o.style.display=r.buttons?"":"none";try{t.style.backgroundColor=r.overlayBackgroundColor}catch(t){}}(a);e.firstChild;)e.removeChild(e.firstChild);h.length=0;for(var s,l=[],c=[],f=0;f<i.length;f++)(s=W("div")).className="full-image",s.id="baguette-img-"+f,h.push(s),l.push("baguetteBox-figure-"+f),c.push("baguetteBox-figcaption-"+f),e.appendChild(h[f]);t.setAttribute("aria-labelledby",l.join(" ")),t.setAttribute("aria-describedby",c.join(" "))}}function F(e){r.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==t.style.display&&(D(document,"keydown",P),p={count:0,startX:null,startY:null},Y(f=e,function(){R(f),z(f)}),O(),t.style.display="block",r.fullScreen&&(t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen&&t.mozRequestFullScreen()),setTimeout(function(){t.className="visible",r.bodyClass&&document.body.classList&&document.body.classList.add(r.bodyClass),r.afterShow&&r.afterShow()},50),r.onChange&&r.onChange(f,h.length),y=document.activeElement,H(),g=!0)}function H(){r.buttons?n.focus():i.focus()}function I(){r.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==t.style.display&&(V(document,"keydown",P),t.className="",setTimeout(function(){t.style.display="none",document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen(),r.bodyClass&&document.body.classList&&document.body.classList.remove(r.bodyClass),r.afterHide&&r.afterHide(),y&&y.focus(),g=!1},500))}function Y(t,e){var n=h[t],o=d[t];if(void 0!==n&&void 0!==o)if(n.getElementsByTagName("img")[0])e&&e();else{var i=o.imageElement,a=i.getElementsByTagName("img")[0],s="function"==typeof r.captions?r.captions.call(d,i):i.getAttribute("data-caption")||i.title,l=function(t){var e=t.href;if(t.dataset){var n=[];for(var o in t.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=t.dataset[o]);for(var i=Object.keys(n).sort(function(t,e){return parseInt(t,10)<parseInt(e,10)?-1:1}),a=window.innerWidth*window.devicePixelRatio,s=0;s<i.length-1&&i[s]<a;)s++;e=n[i[s]]||e}return e}(i),u=W("figure");if(u.id="baguetteBox-figure-"+t,u.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',r.captions&&s){var c=W("figcaption");c.id="baguetteBox-figcaption-"+t,c.innerHTML=s,u.appendChild(c)}n.appendChild(u);var f=W("img");f.onload=function(){var n=document.querySelector("#baguette-img-"+t+" .baguetteBox-spinner");u.removeChild(n),!r.async&&e&&e()},f.setAttribute("src",l),f.alt=a&&a.alt||"",r.titleTag&&s&&(f.title=s),u.appendChild(f),r.async&&e&&e()}}function j(){return X(f+1)}function q(){return X(f-1)}function X(t,e){return!g&&t>=0&&t<e.length?(S(e,r),F(t),!0):t<0?(r.animation&&M("left"),!1):t>=h.length?(r.animation&&M("right"),!1):(Y(f=t,function(){R(f),z(f)}),O(),r.onChange&&r.onChange(f,h.length),!0)}function M(t){e.className="bounce-from-"+t,setTimeout(function(){e.className=""},400)}function O(){var t=100*-f+"%";"fadeIn"===r.animation?(e.style.opacity=0,setTimeout(function(){c.transforms?e.style.transform=e.style.webkitTransform="translate3d("+t+",0,0)":e.style.left=t,e.style.opacity=1},400)):c.transforms?e.style.transform=e.style.webkitTransform="translate3d("+t+",0,0)":e.style.left=t}function R(t){t-f>=r.preload||Y(t+1,function(){R(t+1)})}function z(t){f-t>=r.preload||Y(t-1,function(){z(t-1)})}function D(t,e,n,o){t.addEventListener?t.addEventListener(e,n,o):t.attachEvent("on"+e,function(t){(t=t||window.event).target=t.target||t.srcElement,n(t)})}function V(t,e,n,o){t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent("on"+e,n)}function U(t){return document.getElementById(t)}function W(t){return document.createElement(t)}return[].forEach||(Array.prototype.forEach=function(t,e){for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)}),[].filter||(Array.prototype.filter=function(t,e,n,o,i){for(n=this,o=[],i=0;i<n.length;i++)t.call(e,n[i],i,n)&&o.push(n[i]);return o}),{run:function(r,u){var d,f,g,p,b,h;return c.transforms=void 0!==(d=W("div")).style.perspective||void 0!==d.style.webkitPerspective,c.svg=((f=W("div")).innerHTML="<svg/>","http://www.w3.org/2000/svg"===(f.firstChild&&f.firstChild.namespaceURI)),c.passiveEvents=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),function(){if(t=U("baguetteBox-overlay"))return e=U("baguetteBox-slider"),n=U("previous-button"),o=U("next-button"),void(i=U("close-button"));var r;(t=W("div")).setAttribute("role","dialog"),t.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(t),(e=W("div")).id="baguetteBox-slider",t.appendChild(e),(n=W("button")).setAttribute("type","button"),n.id="previous-button",n.setAttribute("aria-label","Previous"),n.innerHTML=c.svg?a:"&lt;",t.appendChild(n),(o=W("button")).setAttribute("type","button"),o.id="next-button",o.setAttribute("aria-label","Next"),o.innerHTML=c.svg?s:"&gt;",t.appendChild(o),(i=W("button")).setAttribute("type","button"),i.id="close-button",i.setAttribute("aria-label","Close"),i.innerHTML=c.svg?l:"&times;",t.appendChild(i),n.className=o.className=i.className="baguetteBox-button",r=c.passiveEvents?{passive:!0}:null,D(t,"click",w),D(n,"click",k),D(o,"click",x),D(i,"click",C),D(e,"contextmenu",N),D(t,"touchstart",E,r),D(t,"touchmove",B,r),D(t,"touchend",T),D(document,"focus",L,!0)}(),A(r),g=r,p=u,b=document.querySelectorAll(g),h={galleries:[],nodeList:b},v[g]=h,[].forEach.call(b,function(t){p&&p.filter&&(m=p.filter);var e=[];if(e="A"===t.tagName?[t]:t.getElementsByTagName("a"),0!==(e=[].filter.call(e,function(t){if(-1===t.className.indexOf(p&&p.ignoreClass))return m.test(t.href)})).length){var n=[];[].forEach.call(e,function(t,e){var o=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,S(n,p),F(e)},i={eventHandler:o,imageElement:t};D(t,"click",o),n.push(i)}),h.galleries.push(n)}}),h.galleries},show:X,showNext:j,showPrevious:q,hide:I,destroy:function(){var a;a=c.passiveEvents?{passive:!0}:null,V(t,"click",w),V(n,"click",k),V(o,"click",x),V(i,"click",C),V(e,"contextmenu",N),V(t,"touchstart",E,a),V(t,"touchmove",B,a),V(t,"touchend",T),V(document,"focus",L,!0),function(){for(var t in v)v.hasOwnProperty(t)&&A(t)}(),V(document,"keydown",P),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),v={},d=[],f=0}}});
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,a=_self.Prism={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof n?new n(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=a.util.type(e);switch(t=t||{},n){case"Object":if(t[a.util.objId(e)])return t[a.util.objId(e)];var r={};for(var i in t[a.util.objId(e)]=r,e)e.hasOwnProperty(i)&&(r[i]=a.util.clone(e[i],t));return r;case"Array":if(t[a.util.objId(e)])return t[a.util.objId(e)];r=[];return t[a.util.objId(e)]=r,e.forEach(function(e,n){r[n]=a.util.clone(e,t)}),r}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e];if(2==arguments.length){for(var s in n=arguments[1])n.hasOwnProperty(s)&&(i[s]=n[s]);return i}var l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var s in n)n.hasOwnProperty(s)&&(l[s]=n[s]);l[o]=i[o]}return a.languages.DFS(a.languages,function(t,a){a===r[e]&&t!=e&&(this[t]=l)}),r[e]=l},DFS:function(e,t,n,r){for(var i in r=r||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==a.util.type(e[i])||r[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||r[a.util.objId(e[i])]||(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,i,r)):(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r);for(var i,s=r.elements||e.querySelectorAll(r.selector),l=0;i=s[l++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(t,n,r){for(var i,s,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(i=(l.className.match(e)||[,""])[1].toLowerCase(),s=a.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,t.parentNode&&(l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+i));var o={element:t,language:i,grammar:s,code:t.textContent};if(a.hooks.run("before-sanity-check",o),!o.code||!o.grammar)return o.code&&(a.hooks.run("before-highlight",o),o.element.textContent=o.code,a.hooks.run("after-highlight",o)),void a.hooks.run("complete",o);if(a.hooks.run("before-highlight",o),n&&_self.Worker){var u=new Worker(a.filename);u.onmessage=function(e){o.highlightedCode=e.data,a.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,r&&r.call(o.element),a.hooks.run("after-highlight",o),a.hooks.run("complete",o)},u.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else o.highlightedCode=a.highlight(o.code,o.grammar,o.language),a.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,r&&r.call(t),a.hooks.run("after-highlight",o),a.hooks.run("complete",o)},highlight:function(e,t,r){var i={text:e,grammar:t,language:r};return i.tokens=a.tokenize(e,t),a.hooks.run("after-tokenize",i),n.stringify(a.util.encode(i.tokens),r)},matchGrammar:function(e,t,n,r,i,s,l){var o=a.Token;for(var u in n)if(n.hasOwnProperty(u)&&n[u]){if(u==l)return;var g=n[u];g="Array"===a.util.type(g)?g:[g];for(var c=0;c<g.length;++c){var d=g[c],p=d.inside,m=!!d.lookbehind,h=!!d.greedy,f=0,y=d.alias;if(h&&!d.pattern.global){var b=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,b+"g")}d=d.pattern||d;for(var k=r,v=i;k<t.length;v+=t[k].length,++k){var P=t[k];if(t.length>e.length)return;if(!(P instanceof o)){d.lastIndex=0;var w=1;if(!(_=d.exec(P))&&h&&k!=t.length-1){if(d.lastIndex=v,!(_=d.exec(e)))break;for(var x=_.index+(m?_[1].length:0),F=_.index+_[0].length,S=k,A=v,j=t.length;S<j&&(A<F||!t[S].type&&!t[S-1].greedy);++S)x>=(A+=t[S].length)&&(++k,v=A);if(t[k]instanceof o||t[S-1].greedy)continue;w=S-k,P=e.slice(v,A),_.index-=v}if(_){m&&(f=_[1]?_[1].length:0);F=(x=_.index+f)+(_=_[0].slice(f)).length;var _,C=P.slice(0,x),N=P.slice(F),E=[k,w];C&&(++k,v+=C.length,E.push(C));var O=new o(u,p?a.tokenize(_,p):_,y,_,h);if(E.push(O),N&&E.push(N),Array.prototype.splice.apply(t,E),1!=w&&a.matchGrammar(e,t,n,k,v,!0,u),s)break}else if(s)break}}}}},tokenize:function(e,t,n){var r=[e],i=t.rest;if(i){for(var s in i)t[s]=i[s];delete t.rest}return a.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}}},n=a.Token=function(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r};if(n.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(a){return n.stringify(a,t,e)}).join("");var i={type:e.type,content:n.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if(e.alias){var s="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}a.hooks.run("wrap",i);var l=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(l?" "+l:"")+">"+i.content+"</"+i.tag+">"},!_self.document)return _self.addEventListener?(a.disableWorkerMessageHandler||_self.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,r=t.code,i=t.immediateClose;_self.postMessage(a.highlight(r,a.languages[n],n)),i&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(a.filename=r.src,a.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.languages.css,Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css",greedy:!0}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript",greedy:!0}}),Prism.languages.js=Prism.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var a,n=t.getAttribute("data-src"),r=t,i=/\blang(?:uage)?-(?!\*)(\w+)\b/i;r&&!i.test(r.className);)r=r.parentNode;if(r&&(a=(t.className.match(i)||[,""])[1]),!a){var s=(n.match(/\.(\w+)$/)||[,""])[1];a=e[s]||s}var l=document.createElement("code");l.className="language-"+a,t.textContent="",l.textContent="Loading…",t.appendChild(l);var o=new XMLHttpRequest;o.open("GET",n,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?(l.textContent=o.responseText,Prism.highlightElement(l)):o.status>=400?l.textContent="✖ Error "+o.status+" while fetching file: "+o.statusText:l.textContent="✖ Error: File does not exist or is empty")},o.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight));
!function(e){e.languages.php=e.languages.extend("clike",{keyword:/\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0}}),e.languages.insertBefore("php","string",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),e.languages.insertBefore("php","keyword",{delimiter:{pattern:/\?>|<\?(?:php|=)?/i,alias:"important"},variable:/\$+(?:\w+\b|(?={))/i,package:{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),e.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),e.languages.insertBefore("php","string",{"nowdoc-string":{pattern:/<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},"heredoc-string":{pattern:/<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:null}},"single-quoted-string":{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,alias:"string",inside:{interpolation:null}}}),delete e.languages.php.string;var n={pattern:/{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,lookbehind:!0,inside:{rest:e.languages.php}};e.languages.php["heredoc-string"].inside.interpolation=n,e.languages.php["double-quoted-string"].inside.interpolation=n,e.languages.markup&&(e.hooks.add("before-highlight",function(n){"php"===n.language&&/(?:<\?php|<\?)/gi.test(n.code)&&(n.tokenStack=[],n.backupCode=n.code,n.code=n.code.replace(/(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi,function(e){for(var a=n.tokenStack.length;-1!==n.backupCode.indexOf("___PHP"+a+"___");)++a;return n.tokenStack[a]=e,"___PHP"+a+"___"}),n.grammar=e.languages.markup)}),e.hooks.add("before-insert",function(e){"php"===e.language&&e.backupCode&&(e.code=e.backupCode,delete e.backupCode)}),e.hooks.add("after-highlight",function(n){if("php"===n.language&&n.tokenStack){n.grammar=e.languages.php;for(var a=0,t=Object.keys(n.tokenStack);a<t.length;++a){var i=t[a],r=n.tokenStack[i];n.highlightedCode=n.highlightedCode.replace("___PHP"+i+"___",'<span class="token php language-php">'+e.highlight(r,n.grammar,"php").replace(/\$/g,"$$$$")+"</span>")}n.element.innerHTML=n.highlightedCode}}))}(Prism);
Prism.languages.json={property:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,punctuation:/[{}[\]);,]/,operator:/:/g,boolean:/\b(?:true|false)\b/i,null:/\bnull\b/i},Prism.languages.jsonp=Prism.languages.json;
Prism.languages.yaml={scalar:{pattern:/([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:/(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,lookbehind:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,lookbehind:!0,alias:"number"},boolean:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},null:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},string:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}))/m,lookbehind:!0,greedy:!0},number:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,lookbehind:!0},tag:/![^\s]+/,important:/[&*][\w]+/,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./};
!function(e){var t={variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\([^)]+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},/\$(?:[\w#?*!@]+|\{[^}]+\})/i]};e.languages.bash={shebang:{pattern:/^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,alias:"important"},comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*\r?\n(?:[\s\S])*?\r?\n\2/,lookbehind:!0,greedy:!0,inside:t},{pattern:/(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,greedy:!0,inside:t}],variable:t.variable,function:{pattern:/(^|[\s;|&])(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|[\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&])(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|[\s;|&])/,lookbehind:!0},boolean:{pattern:/(^|[\s;|&])(?:true|false)(?=$|[\s;|&])/,lookbehind:!0},operator:/&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];]/};var a=t.variable[1].inside;a.string=e.languages.bash.string,a.function=e.languages.bash.function,a.keyword=e.languages.bash.keyword,a.boolean=e.languages.bash.boolean,a.operator=e.languages.bash.operator,a.punctuation=e.languages.bash.punctuation,e.languages.shell=e.languages.bash}(Prism);
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e="line-numbers",t=/\n(?!$)/g,n=function(e){var n=r(e)["white-space"];if("pre-wrap"===n||"pre-line"===n){var s=e.querySelector("code"),l=e.querySelector(".line-numbers-rows"),i=e.querySelector(".line-numbers-sizer"),a=s.textContent.split(t);i||((i=document.createElement("span")).className="line-numbers-sizer",s.appendChild(i)),i.style.display="block",a.forEach(function(e,t){i.textContent=e||"\n";var n=i.getBoundingClientRect().height;l.children[t].style.height=n+"px"}),i.textContent="",i.style.display="none"}},r=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",function(){Array.prototype.forEach.call(document.querySelectorAll("pre."+e),n)}),Prism.hooks.add("complete",function(e){if(e.code){var r=e.element.parentNode,s=/\s*\bline-numbers\b\s*/;if(r&&/pre/i.test(r.nodeName)&&(s.test(r.className)||s.test(e.element.className))&&!e.element.querySelector(".line-numbers-rows")){s.test(e.element.className)&&(e.element.className=e.element.className.replace(s," ")),s.test(r.className)||(r.className+=" line-numbers");var l,i=e.code.match(t),a=i?i.length+1:1,o=new Array(a+1);o=o.join("<span></span>"),(l=document.createElement("span")).setAttribute("aria-hidden","true"),l.className="line-numbers-rows",l.innerHTML=o,r.hasAttribute("data-start")&&(r.style.counterReset="linenumber "+(parseInt(r.getAttribute("data-start"),10)-1)),e.element.appendChild(l),n(r),Prism.hooks.run("line-numbers",e)}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}),Prism.plugins.lineNumbers={getLine:function(t,n){if("PRE"===t.tagName&&t.classList.contains(e)){var r=t.querySelector(".line-numbers-rows"),s=parseInt(t.getAttribute("data-start"),10)||1,l=s+(r.children.length-1);n<s&&(n=s),n>l&&(n=l);var i=n-s;return r.children[i]}}}}}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector){var e,t=function(){if(void 0===e){var t=document.createElement("div");t.style.fontSize="13px",t.style.lineHeight="1.5",t.style.padding=0,t.style.border=0,t.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(t),e=38===t.offsetHeight,document.body.removeChild(t)}return e},n=0;Prism.hooks.add("before-sanity-check",function(e){var t=e.element.parentNode,n=t&&t.getAttribute("data-line");if(t&&n&&/pre/i.test(t.nodeName)){var r=0;i(".line-highlight",t).forEach(function(e){r+=e.textContent.length,e.parentNode.removeChild(e)}),r&&/^( \n)+$/.test(e.code.slice(-r))&&(e.code=e.code.slice(0,-r))}}),Prism.hooks.add("complete",function e(t){var i=t.element.parentNode,a=i&&i.getAttribute("data-line");if(i&&a&&/pre/i.test(i.nodeName)){clearTimeout(n);var s=Prism.plugins.lineNumbers,d=t.plugins&&t.plugins.lineNumbers;r(i,"line-numbers")&&s&&!d?Prism.hooks.add("line-numbers",e):(o(i,a),n=setTimeout(l,1))}}),window.addEventListener("hashchange",l),window.addEventListener("resize",function(){var e=document.querySelectorAll("pre[data-line]");Array.prototype.forEach.call(e,function(e){o(e)})})}function i(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function r(e,t){return t=" "+t+" ",(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(t)>-1}function o(e,n,i){for(var o,l=(n="string"==typeof n?n:e.getAttribute("data-line")).replace(/\s+/g,"").split(","),a=+e.getAttribute("data-line-offset")||0,s=(t()?parseInt:parseFloat)(getComputedStyle(e).lineHeight),d=r(e,"line-numbers"),u=0;o=l[u++];){var c=o.split("-"),m=+c[0],p=+c[1]||m,f=e.querySelector('.line-highlight[data-range="'+o+'"]')||document.createElement("div");if(f.setAttribute("aria-hidden","true"),f.setAttribute("data-range",o),f.className=(i||"")+" line-highlight",d&&Prism.plugins.lineNumbers){var h=Prism.plugins.lineNumbers.getLine(e,m),g=Prism.plugins.lineNumbers.getLine(e,p);h&&(f.style.top=h.offsetTop+"px"),g&&(f.style.height=g.offsetTop-h.offsetTop+g.offsetHeight+"px")}else f.setAttribute("data-start",m),p>m&&f.setAttribute("data-end",p),f.style.top=(m-a-1)*s+"px",f.textContent=new Array(p-m+2).join(" \n");d?e.appendChild(f):(e.querySelector("code")||e).appendChild(f)}}function l(){var e=location.hash.slice(1);i(".temporary.line-highlight").forEach(function(e){e.parentNode.removeChild(e)});var t=(e.match(/\.([\d,-]+)$/)||[,""])[1];if(t&&!document.getElementById(e)){var n=e.slice(0,e.lastIndexOf(".")),r=document.getElementById(n);r&&(r.hasAttribute("data-line")||r.setAttribute("data-line",""),o(r,t,"temporary "),document.querySelector(".temporary.line-highlight").scrollIntoView())}}}();