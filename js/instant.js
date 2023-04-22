var Instant=function(o,r){function a(e){var t=e.indexOf("#");return t<0?e:e.substr(0,t)}function n(e){for(;e&&"A"!=e.nodeName;)e=e.parentNode;return e}function s(e){var t=r.protocol+"//"+r.host;if(!(t=e.target||e.hasAttribute("download")||0!=e.href.indexOf(t+"/")||-1<e.href.indexOf("#")&&a(e.href)==u)){if(q){e:{do{if(!e.hasAttribute)break;if(e.hasAttribute("no-instant"))break;if(e.hasAttribute("instant")){e=!0;break e}}while(e=e.parentNode);e=!1}e=!e}else e:{do{if(!e.hasAttribute)break;if(e.hasAttribute("instant"))break;if(e.hasAttribute("no-instant")){e=!0;break e}}while(e=e.parentNode);e=!1}t=e}return!t}function l(e,t,n,i){for(var r=!1,a=0;a<B[e].length;a++)if("receive"==e){var o=B[e][a](t,n,i);o&&("body"in o&&(n=o.body),"title"in o&&(i=o.title),r=o)}else B[e][a](t,n,i);return r}function d(e,t,n,i){o.documentElement.replaceChild(t,o.body);if(n){history.pushState(null,null,n);i=0;if(t=-1<(t=n.indexOf("#"))&&o.getElementById(n.substr(t+1)))for(;t.offsetParent;)i+=t.offsetTop,t=t.offsetParent;scrollTo(0,i);u=a(n)}else scrollTo(0,i);o.title=G&&o.title==e?e+String.fromCharCode(160):e;h();I.done();l("change",!1);(e=o.createEvent("HTMLEvents")).initEvent("instant:newpage",!0,!0);dispatchEvent(e)}function c(e){p>+new Date-500||(e=n(e.target))&&s(e)&&t(e.href)}function f(e){p>+new Date-500||(e=n(e.target))&&s(e)&&(e.addEventListener("mouseout",K),v?(X=e.href,m=setTimeout(t,v)):t(e.href))}function z(e){p=+new Date;(e=n(e.target))&&s(e)&&(b?e.removeEventListener("mousedown",c):e.removeEventListener("mouseover",f),t(e.href))}function W(e){var t=n(e.target);!t||!s(t)||1<e.which||e.metaKey||e.ctrlKey||(e.preventDefault(),R(t.href))}function K(){m?(clearTimeout(m),m=!1):Y&&!D&&(y.abort(),D=Y=!1)}function P(){if(!(y.readyState<4)&&0!=y.status){H.ready=+new Date-H.start;if(y.getResponseHeader("Content-Type").match(/\/(x|ht|xht)ml/)){var e=o.implementation.createHTMLDocument("");e.documentElement.innerHTML=y.responseText.replace(/<noscript[\s\S]+<\/noscript>/gi,"");C=e.title;k=e.body;(t=l("receive",x,k,C))&&("body"in t&&(k=t.body),"title"in t&&(C=t.title));t=a(x);A[t]={body:k,title:C,scrollY:t in A?A[t].scrollY:0};for(var t=0,n=(e=e.head.children).length-1;0<=n;n--)if((i=e[n]).hasAttribute("instant-track"))for(var i=i.getAttribute("href")||i.getAttribute("src")||i.innerHTML,r=O.length-1;0<=r;r--)O[r]==i&&t++;t!=O.length&&(M=!0)}else M=!0;D&&(D=!1,R(x))}}function h(e){o.body.addEventListener("touchstart",z,!0);b?o.body.addEventListener("mousedown",c,!0):o.body.addEventListener("mouseover",f,!0);o.body.addEventListener("click",W,!0);if(!e){e=o.body.getElementsByTagName("script");var t,n,r,a;i=0;for(j=e.length;i<j;i++)(t=e[i]).hasAttribute("no-instant")||(n=o.createElement("script"),t.src&&(n.src=t.src),t.innerHTML&&(n.innerHTML=t.innerHTML),r=t.parentNode,a=t.nextSibling,r.removeChild(t),r.insertBefore(n,a))}}function t(e){!b&&"display"in H&&+new Date-(H.start+H.display)<100||(m&&(clearTimeout(m),m=!1),e=e||X,Y&&(e==x||D))||(x=e,M=k=D=!(Y=!0),H={start:+new Date},l("fetch"),y.open("GET",e),y.send())}function R(e){"display"in H||(H.display=+new Date-H.start);m||!Y?m&&x&&x!=e?r.href=e:(t(e),I.start(0,!0),l("wait"),D=!0):D?r.href=e:M?r.href=x:k?(A[u].scrollY=scrollY,D=Y=!1,d(C,k,x)):(I.start(0,!0),l("wait"),D=!0)}var u,X,m,p,y,q,b,v,g,T,E,w,L,e=navigator.userAgent,G=-1<e.indexOf(" CriOS/"),F="createTouch"in o,A={},x=!1,C=!1,M=!1,k=!1,H={},Y=!1,D=!1,O=[],B={fetch:[],receive:[],wait:[],change:[]},I={init:function(){(g=o.createElement("div")).id="instant";(T=o.createElement("div")).id="instant-bar";T.className="instant-bar";g.appendChild(T);var e=["Webkit","Moz","O"];if(!((E="transform")in T.style))for(var t=0;t<3;t++)e[t]+"Transform"in T.style&&(E=e[t]+"Transform");var n="transition";if(!(n in T.style))for(t=0;t<3;t++)e[t]+"Transition"in T.style&&(n="-"+e[t].toLowerCase()+"-"+n);(e=o.createElement("style")).innerHTML="#instant{position:"+(F?"absolute":"fixed")+";top:0;left:0;width:100%;pointer-events:none;z-index:2147483647;"+n+":opacity .25s .1s}.instant-bar{background:var(--primary,blue);width:100%;margin-left:-100%;height:2px;"+n+":all .25s}";o.head.appendChild(e);F&&(S(),addEventListener("resize",S),addEventListener("scroll",S))},start:Q,done:function e(){o.getElementById(g.id)?(clearTimeout(L),w=100,N(),g.style.opacity="0"):(Q(100==w?0:w),setTimeout(e,0))}},J="pushState"in history&&(!e.match("Android")||e.match("Chrome/"))&&"file:"!=r.protocol;function Q(e,t){w=e;o.getElementById(g.id)&&o.body.removeChild(g);g.style.opacity="1";o.getElementById(g.id)&&o.body.removeChild(g);N();t&&setTimeout(U,0);clearTimeout(L);L=setTimeout(V,500)}function U(){w=10;N()}function V(){98<=(w+=1+2*Math.random())?w=98:L=setTimeout(V,500);N()}function N(){T.style[E]="translate("+w+"%)";o.getElementById(g.id)||o.body.appendChild(g)}function S(){g.style.left=pageXOffset+"px";g.style.width=innerWidth+"px";g.style.top=scrollY+"px";var e="orientation"in window&&90==Math.abs(orientation);g.style[E]="scaleY("+innerWidth/screen[e?"height":"width"]*2+")"}return{supported:J,init:function(){if(!u)if(J){for(var e=arguments.length-1;0<=e;e--)!0===(t=arguments[e])?q=!0:"mousedown"==t?b=!0:"number"==typeof t&&(v=t);u=a(r.href);A[u]={body:o.body,title:o.title,scrollY:scrollY};for(var t,n,e=(t=o.head.children).length-1;0<=e;e--)(n=t[e]).hasAttribute("instant-track")&&(n=n.getAttribute("href")||n.getAttribute("src")||n.innerHTML,O.push(n));(y=new XMLHttpRequest).addEventListener("readystatechange",P);h(!0);I.init();l("change",!0);addEventListener("popstate",function(){var e=a(r.href);e!=u&&(e in A?(A[u].scrollY=scrollY,d(A[u=e].title,A[e].body,!1,A[e].scrollY)):r.href=r.href)})}else l("change",!0)},on:function(e,t){B[e].push(t)}}}(document,location);Instant.init("mousedown");
