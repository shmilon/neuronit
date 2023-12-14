"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{8273:function(t,e,n){n.r(e),n.d(e,{CountUp:function(){return i}});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.target=t,this.endVal=e,this.options=n,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.countDown?i.frameVal=i.startVal-(i.startVal-i.endVal)*(e/i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration),i.countDown?i.frameVal=i.frameVal<i.endVal?i.endVal:i.frameVal:i.frameVal=i.frameVal>i.endVal?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(t){var e,n,r,a,s=t<0?"-":"";e=Math.abs(t).toFixed(i.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],r=o.length>1?i.options.decimal+o[1]:"",i.options.useGrouping){a="";for(var u=0,l=n.length;u<l;++u)0!==u&&u%3==0&&(a=i.options.separator+a),a=n[l-u-1]+a;n=a}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),s+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},5276:function(t,e,n){n.d(e,{ZP:function(){return s}});var r=n(7294);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var a=function(t){var e=(0,r.useRef)(t);return e.current=t,e},s=function(t){var e=void 0===t?{}:t,n=e.root,s=e.rootMargin,o=e.threshold,u=void 0===o?0:o,l=e.trackVisibility,c=e.delay,f=e.unobserveOnEnter,p=e.onChange,h=e.onEnter,d=e.onLeave,m=(0,r.useState)({inView:!1,scrollDirection:{}}),v=m[0],g=m[1],V=(0,r.useRef)(!1),y=(0,r.useRef)({}),b=(0,r.useRef)(),E=(0,r.useRef)(!1),O=a(p),w=a(h),R=a(d),F=(0,r.useRef)(),x=(0,r.useCallback)((function(){b.current&&(b.current.disconnect(),y.current={})}),[]),P=(0,r.useCallback)((function(t){t&&t!==F.current&&(x(),F.current=t),b.current&&F.current&&b.current.observe(F.current)}),[x]),j=(0,r.useCallback)((function(){if(F.current){var t=F.current.getBoundingClientRect(),e=t.x,n=t.y;y.current={x:e,y:n}}}),[F]);return(0,r.useEffect)((function(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window?(b.current=new IntersectionObserver((function(t){var e=t[0],n=e.intersectionRatio,r=e.isIntersecting,a=e.boundingClientRect,s=a.x,o=a.y,c=e.isVisible,p={},h=Array.isArray(u)?Math.min.apply(Math,u):u,d=void 0!==r?r:n>0;d=h>0?n>=h:d,s<y.current.x&&(p.horizontal="left"),s>y.current.x&&(p.horizontal="right"),y.current.x=s,o<y.current.y&&(p.vertical="up"),o>y.current.y&&(p.vertical="down"),y.current.y=o;var m={entry:e,scrollDirection:p,observe:P,unobserve:x};l&&(void 0!==c||E.current||(console.warn("\ud83d\udca1 react-cool-inview: the browser doesn't support Intersection Observer v2, fallback to v1 behavior"),E.current=!0),void 0!==c&&(d=c)),d&&!V.current&&(f&&x(),w.current&&w.current(m)),!d&&V.current&&R.current&&R.current(m),O.current&&O.current(i({},m,{inView:d})),g({inView:d,scrollDirection:p,entry:e}),V.current=d}),{root:n,rootMargin:s,threshold:u,trackVisibility:l,delay:c}),P(),function(){return x()}):(console.error("\ud83d\udca1 react-cool-inview: the browser doesn't support Intersection Observer, please install polyfill: https://github.com/wellyshen/react-cool-inview#intersection-observer-polyfill"),function(){return null})}),[f,n,s,JSON.stringify(u),l,c,P,x]),i({},v,{observe:P,unobserve:x,updatePosition:j})}},7857:function(t,e,n){var r=n(7294),i=n(8273);function a(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var s=a(r);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function h(t){var e=r.useRef(t);return p((function(){e.current=t})),r.useCallback((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)}),[])}var d=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],m={decimal:".",delay:null,prefix:"",suffix:"",start:0,startOnMount:!0,enableReinitialize:!0},v=function(t){var e=r.useMemo((function(){return u(u({},m),t)}),[t]),n=e.ref,a=e.startOnMount,s=e.enableReinitialize,o=e.delay,l=e.onEnd,c=e.onStart,p=e.onPauseResume,v=e.onReset,g=e.onUpdate,V=f(e,d),y=r.useRef(),b=r.useRef(),E=r.useRef(!1),O=h((function(){return function(t,e){var n=e.decimal,r=e.decimals,a=e.duration,s=e.easingFn,o=e.end,u=e.formattingFn,l=e.numerals,c=e.prefix,f=e.separator,p=e.start,h=e.suffix,d=e.useEasing;return new i.CountUp(t,o,{startVal:p,duration:a,decimal:n,decimalPlaces:r,easingFn:s,formattingFn:u,numerals:l,separator:f,prefix:c,suffix:h,useEasing:d,useGrouping:!!f})}("string"===typeof n?n:n.current,V)})),w=h((function(t){var e=y.current;if(e&&!t)return e;var n=O();return y.current=n,n})),R=h((function(){var t=function(){return w(!0).start((function(){null===l||void 0===l||l({pauseResume:F,reset:x,start:j,update:P})}))};o&&o>0?b.current=setTimeout(t,1e3*o):t(),null===c||void 0===c||c({pauseResume:F,reset:x,update:P})})),F=h((function(){w().pauseResume(),null===p||void 0===p||p({reset:x,start:j,update:P})})),x=h((function(){b.current&&clearTimeout(b.current),w().reset(),null===v||void 0===v||v({pauseResume:F,start:j,update:P})})),P=h((function(t){w().update(t),null===g||void 0===g||g({pauseResume:F,reset:x,start:j})})),j=h((function(){x(),R()})),A=h((function(t){a&&(t&&x(),R())}));return r.useEffect((function(){E.current?s&&A(!0):(E.current=!0,A())}),[s,E,A,o,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect((function(){return function(){x()}}),[x]),{start:j,pauseResume:F,reset:x,update:P,getCountUp:w}},g=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,i=t.containerProps,a=t.children,o=t.style,l=f(t,g),p=s.default.useRef(null),d=s.default.useRef(!1),m=v(u(u({},l),{},{ref:p,startOnMount:"function"!==typeof a||0===t.delay,enableReinitialize:!1})),V=m.start,y=m.reset,b=m.update,E=m.pauseResume,O=m.getCountUp,w=h((function(){V()})),R=h((function(e){t.preserveValue||y(),b(e)})),F=h((function(){"function"!==typeof t.children||p.current instanceof Element?O():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){F()}),[F]),r.useEffect((function(){d.current&&R(t.end)}),[t.end,R]);var x=n&&t;return r.useEffect((function(){n&&d.current&&w()}),[w,n,x]),r.useEffect((function(){!n&&d.current&&w()}),[w,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect((function(){d.current=!0}),[]),"function"===typeof a?a({countUpRef:p,start:V,reset:y,update:b,pauseResume:E,getCountUp:O}):s.default.createElement("span",c({className:e,ref:p,style:o},i),t.start?O().formattingFn(t.start):"")}}}]);