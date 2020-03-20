(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9CcJ":function(e){e.exports=JSON.parse('{"data":{"prismic":{"allCategoriess":{"edges":[{"node":{"title":[{"type":"heading1","text":"Services","spans":[]}],"subtitle":[{"type":"heading2","text":"Some of the things I can help you with.","spans":[]}],"excerpt":[{"type":"paragraph","text":"I’m an all-round web professional with a lot of experience.\\nFrom first concept sketches to finished products, I can help you create high-quality web projects that rank well and make you money. ","spans":[]}]}}]},"allServices_items":{"edges":[{"node":{"title":[{"type":"heading1","text":"Web Design","spans":[]}],"excerpt":[{"type":"paragraph","text":"What we used to simply call webdesign is nowadays usually subdivided in User Interface (UI) design, User Experience (UX) Design and Visual Design. I can do all three so if you don’t want to know the difference you don’t have too.   ","spans":[]}]}},{"node":{"title":[{"type":"heading1","text":"Online Marketing","spans":[]}],"excerpt":[{"type":"paragraph","text":"HTML and CSS together are what is often called “the front-end” and are at the hearth of every website. They are easy to learn, yet hard to master. I started with both in 2006 and I still discover new things on a regular basis. HTML and CSS together are what is often called “the front-end” and are at the hearth of every website. They are easy to learn, yet hard to master.","spans":[]}]}},{"node":{"title":[{"type":"heading1","text":"Website development","spans":[]}],"excerpt":[{"type":"paragraph","text":" I can help you build a completely new website or redesign your old website.  As I\'m a designer, developer and marketer in one I can support you from the first sketches all the way to the finished product.  ","spans":[]}]}},{"node":{"title":[{"type":"heading1","text":"Conversion Rate Optimization","spans":[]}],"excerpt":[{"type":"paragraph","text":"Conversion Rate Optimization (CRO) is the art of making your webshop convert better and thus make more money. This is done by user testing small improvements that can sometimes make a big difference. ","spans":[]}]}},{"node":{"title":[{"type":"heading1","text":"Front-end Development","spans":[]}],"excerpt":[{"type":"paragraph","text":"HTML, CSS and JavaScript together are what is often called “the front-end” and are at the hearth of every website. They are easy to learn, yet hard to master. I started working with the front-end back in 2006 and I still discover new things on a regular basis.","spans":[]}]}},{"node":{"title":[{"type":"heading1","text":"Technical SEO","spans":[]}],"excerpt":[{"type":"paragraph","text":"Technical SEO is the part of Search Engine Optimization that focuses on your website. Arguably the most important part as the successful crawling and indexing of your website is the first step in ranking well on any search engine. When I develop a website I always take these factors into consideration. I can also do an audit for you existing website. That way you know if there are any technical issues that prevent your website from ranking well.","spans":[]}]}},{"node":{"title":[{"type":"heading1","text":"Email Marketing","spans":[]}],"excerpt":[{"type":"paragraph","text":"Email is still a very powerful marketing tool - even in the age of Social Media - and is often underestimated. I can help you get the most out of this channel. From adding the subscribe form to your website all the way to sending successful marketing campaigns and setting-up automated email flows to get the most out of returning customers.  ","spans":[]}]}}]}}}}')},CNgt:function(e,t,n){"use strict";n("ioFf"),n("V+eJ"),n("91GP"),n("hHhE"),n("/SS/");var a,r=this&&this.__extends||(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};t.__esModule=!0;var s=n("q1tI"),l=n("17x9"),c=n("GemG"),d=n("Rk8H"),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={lineHeight:null},t.textarea=t.props.innerRef||s.createRef(),t.onResize=function(e){t.props.onResize&&t.props.onResize(e)},t.updateLineHeight=function(){t.textarea.current&&t.setState({lineHeight:d(t.textarea.current)})},t.onChange=function(e){var n=t.props.onChange;t.currentValue=e.currentTarget.value,n&&n(e)},t}return r(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props,n=t.maxRows,a=t.async;"number"==typeof n&&this.updateLineHeight(),"number"==typeof n||a?setTimeout((function(){return e.textarea.current&&c(e.textarea.current)})):this.textarea.current&&c(this.textarea.current),this.textarea.current&&this.textarea.current.addEventListener("autosize:resized",this.onResize)},t.prototype.componentWillUnmount=function(){this.textarea.current&&(this.textarea.current.removeEventListener("autosize:resized",this.onResize),c.destroy(this.textarea.current))},t.prototype.render=function(){var e=this.props,t=(e.onResize,e.maxRows),n=(e.onChange,e.style),a=(e.innerRef,e.children),r=i(e,["onResize","maxRows","onChange","style","innerRef","children"]),l=this.state.lineHeight,c=t&&l?l*t:null;return s.createElement("textarea",o({},r,{onChange:this.onChange,style:c?o({},n,{maxHeight:c}):n,ref:this.textarea}),a)},t.prototype.componentDidUpdate=function(){this.textarea.current&&c.update(this.textarea.current)},t.defaultProps={rows:1,async:!1},t.propTypes={rows:l.number,maxRows:l.number,onResize:l.func,innerRef:l.object,async:l.bool},t}(s.Component);t.TextareaAutosize=s.forwardRef((function(e,t){return s.createElement(p,o({},e,{innerRef:t}))}))},"Cuy+":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return h}));var a=n("q1tI"),r=n.n(a),o=(n("Wbzz"),n("Bl7J")),i=n("wG+1"),s=n("Ey2C"),l=n.n(s),c=n("jYam"),d=n("zbTz"),p=n("O6Fj"),u=n.n(p),h="150685541";t.default=function(e){var t=e.data.prismic.contact;return t?r.a.createElement(o.a,null,r.a.createElement("article",{className:l.a.hero},r.a.createElement(c.a,null),r.a.createElement("div",{className:l.a.hero_inner},r.a.createElement("div",{className:l.a.form},i.RichText.render(t.title),r.a.createElement("form",{name:"contact",method:"post","data-netlify":"true","data-netlify-honeypot":"bot-field"},r.a.createElement("input",{type:"hidden",name:"bot-field"}),"  ",r.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),r.a.createElement("div",{className:"field half first"},r.a.createElement("label",{htmlFor:"name"},"Your Name"),r.a.createElement("input",{placeholder:"Enter your name",type:"text",name:"name",id:"name"})),r.a.createElement("div",{className:"field half"},r.a.createElement("label",{htmlFor:"email"},"your Email"),r.a.createElement("input",{placeholder:"Enter your email address",type:"text",name:"email",id:"email"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement(u.a,{placeholder:"Enter your message here",name:"message",id:"message"})),r.a.createElement("ul",{className:"actions"},r.a.createElement("li",null,r.a.createElement("button",{type:"submit"},"Send Message"))))),r.a.createElement("div",{className:l.a.text_area},i.RichText.render(t.subtitle),i.RichText.render(t.intro),r.a.createElement("a",{className:l.a.email_link,href:"mailto:hello@sjoerdkoelewijn.com"},"hello@sjoerdkoelewijn.com")))),r.a.createElement("article",{className:l.a.services},r.a.createElement(d.a,null))):null}},GemG:function(e,t,n){var a,r,o;n("RW0V"),n("2Spj"),n("8+KV"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn"),r=[e,t],void 0===(o="function"==typeof(a=function(e,t){"use strict";var n,a,r="function"==typeof Map?new Map:(n=[],a=[],{has:function(e){return n.indexOf(e)>-1},get:function(e){return a[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),a.push(t))},delete:function(e){var t=n.indexOf(e);t>-1&&(n.splice(t,1),a.splice(t,1))}}),o=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(d){o=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function i(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!r.has(e)){var t,n=null,a=null,i=null,s=function(){e.clientWidth!==a&&p()},l=function(t){window.removeEventListener("resize",s,!1),e.removeEventListener("input",p,!1),e.removeEventListener("keyup",p,!1),e.removeEventListener("autosize:destroy",l,!1),e.removeEventListener("autosize:update",p,!1),Object.keys(t).forEach((function(n){e.style[n]=t[n]})),r.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",l,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",p,!1),window.addEventListener("resize",s,!1),e.addEventListener("input",p,!1),e.addEventListener("autosize:update",p,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",r.set(e,{destroy:l,update:p}),"vertical"===(t=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),n="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(n)&&(n=0),p()}function c(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function d(){if(0!==e.scrollHeight){var t=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),r=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+n+"px",a=e.clientWidth,t.forEach((function(e){e.node.scrollTop=e.scrollTop})),r&&(document.documentElement.scrollTop=r)}}function p(){d();var t=Math.round(parseFloat(e.style.height)),n=window.getComputedStyle(e,null),a="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):e.offsetHeight;if(a<t?"hidden"===n.overflowY&&(c("scroll"),d(),a="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==n.overflowY&&(c("hidden"),d(),a="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),i!==a){i=a;var r=o("autosize:resized");try{e.dispatchEvent(r)}catch(s){}}}}function s(e){var t=r.get(e);t&&t.destroy()}function l(e){var t=r.get(e);t&&t.update()}var c=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((c=function(e){return e}).destroy=function(e){return e},c.update=function(e){return e}):((c=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return i(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],s),e},c.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],l),e}),t.default=c,e.exports=t.default})?a.apply(t,r):a)||(e.exports=o)},O6Fj:function(e,t,n){"use strict";t.__esModule=!0;var a=n("CNgt");t.default=a.TextareaAutosize},Rk8H:function(e,t,n){n("V+eJ");var a=n("jTPX");e.exports=function(e){var t=a(e,"line-height"),n=parseFloat(t,10);if(t===n+""){var r=e.style.lineHeight;e.style.lineHeight=t+"em",t=a(e,"line-height"),n=parseFloat(t,10),r?e.style.lineHeight=r:delete e.style.lineHeight}if(-1!==t.indexOf("pt")?(n*=4,n/=3):-1!==t.indexOf("mm")?(n*=96,n/=25.4):-1!==t.indexOf("cm")?(n*=96,n/=2.54):-1!==t.indexOf("in")?n*=96:-1!==t.indexOf("pc")&&(n*=16),n=Math.round(n),"normal"===t){var o=e.nodeName,i=document.createElement(o);i.innerHTML="&nbsp;","TEXTAREA"===o.toUpperCase()&&i.setAttribute("rows","1");var s=a(e,"font-size");i.style.fontSize=s,i.style.padding="0px",i.style.border="0px";var l=document.body;l.appendChild(i),n=i.offsetHeight,l.removeChild(i)}return n}},jTPX:function(e,t,n){n("pIFo");e.exports=function(e,t,n){return((n=window.getComputedStyle)?n(e):e.currentStyle)[t.replace(/-(\w)/gi,(function(e,t){return t.toUpperCase()}))]}},zbTz:function(e,t,n){"use strict";var a=n("9CcJ"),r=n("q1tI"),o=n.n(r),i=n("wG+1"),s=n("lyXK"),l=n.n(s);t.a=function(){var e=a.data,t=e.prismic.allCategoriess.edges.slice(0,1).pop();return t?o.a.createElement("div",{class:l.a.services_wrap},o.a.createElement("div",{className:l.a.intro_text},i.RichText.render(t.node.title),i.RichText.render(t.node.subtitle),i.RichText.render(t.node.excerpt)),o.a.createElement("div",{className:l.a.service_inner},e.prismic.allServices_items.edges.map((function(e){return o.a.createElement("article",{className:l.a.service_block},i.RichText.render(e.node.title),i.RichText.render(e.node.excerpt))})))):null}}}]);
//# sourceMappingURL=component---src-pages-contact-js-88a1c002e295ad9f8bcd.js.map