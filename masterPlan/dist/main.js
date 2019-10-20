!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){var n=/^(?:submit|button|image|reset|file)$/i,r=/^(?:input|select|textarea|keygen)/i,a=/(\[[^\[\]]*\])/g;function i(e,t,n){if(t.match(a)){!function e(t,n,r){if(0===n.length)return t=r;var a=n.shift(),i=a.match(/^\[(.+?)\]$/);if("[]"===a)return t=t||[],Array.isArray(t)?t.push(e(null,n,r)):(t._values=t._values||[],t._values.push(e(null,n,r))),t;if(i){var l=i[1],s=+l;isNaN(s)?(t=t||{})[l]=e(t[l],n,r):(t=t||[])[s]=e(t[s],n,r)}else t[a]=e(t[a],n,r);return t}(e,function(e){var t=[],n=new RegExp(a),r=/^([^\[\]]*)/.exec(e);for(r[1]&&t.push(r[1]);null!==(r=n.exec(e));)t.push(r[1]);return t}(t),n)}else{var r=e[t];r?(Array.isArray(r)||(e[t]=[r]),e[t].push(n)):e[t]=n}return e}function l(e,t,n){return n=n.replace(/(\r)?\n/g,"\r\n"),n=(n=encodeURIComponent(n)).replace(/%20/g,"+"),e+(e?"&":"")+encodeURIComponent(t)+"="+n}e.exports=function(e,t){"object"!=typeof t?t={hash:!!t}:void 0===t.hash&&(t.hash=!0);for(var a=t.hash?{}:"",s=t.serializer||(t.hash?i:l),o=e&&e.elements?e.elements:[],m=Object.create(null),d=0;d<o.length;++d){var u=o[d];if((t.disabled||!u.disabled)&&u.name&&(r.test(u.nodeName)&&!n.test(u.type))){var c=u.name,h=u.value;if("checkbox"!==u.type&&"radio"!==u.type||u.checked||(h=void 0),t.empty){if("checkbox"!==u.type||u.checked||(h=""),"radio"===u.type&&(m[u.name]||u.checked?u.checked&&(m[u.name]=!0):m[u.name]=!1),null==h&&"radio"==u.type)continue}else if(!h)continue;if("select-multiple"!==u.type)a=s(a,c,h);else{h=[];for(var p=u.options,f=!1,_=0;_<p.length;++_){var y=p[_],b=t.empty&&!y.value,v=y.value||b;y.selected&&v&&(f=!0,a=t.hash&&"[]"!==c.slice(c.length-2)?s(a,c+"[]",y.value):s(a,c,y.value))}!f&&t.empty&&(a=s(a,c,""))}}}if(t.empty)for(var c in m)m[c]||(a=s(a,c,""));return a}},function(e,t,n){"use strict";n.r(t);var r="Welcome to your MasterPlan.<br/><br/>Create a new project. Projects allow you to keep related plans organised.<br/><br/>. Make a plan: Create a plan, give it a title, a description of what needs doing, then set the status and deadline.<br/><br/>To get started with your projects, click 'Begin'",a=n(0),i=n.n(a);class l{constructor(e){this.title=e.titleText,this.desc=e.descText,this.status=e.status,this.dueDate=e.dueDate}}let s=new class{constructor(){this._container=void 0,this._header=void 0,this._summary=void 0}_makeElement(e,t){let n=document.createElement(e);return n.className=t,n}_formatHeader(){let e=this._makeElement("h2","title-text");e.innerHTML="MasterPlan",this._header.appendChild(e)}_formatSummary(){let e=this._makeElement("h1","title-text"),t=this._makeElement("p","summary-text"),n=this._makeElement("button","start-button");e.innerHTML="MasterPlan",t.innerHTML=r,n.innerHTML="Begin",this._summary.appendChild(e),this._summary.appendChild(t),this._summary.appendChild(n)}render(){this._container=this._makeElement("div","start-container"),this._header=this._makeElement("header","title-header"),this._summary=this._makeElement("div","summary-container"),this._formatHeader(),this._formatSummary(),this._container.appendChild(this._header),this._container.appendChild(this._summary),document.getElementById("content").appendChild(this._container)}clearPage(){document.getElementsByClassName("summary-container")[0].innerHTML=""}},o=new class{constructor(){this.plan=void 0}_makeElement(e,t){let n=document.createElement(e);return void 0!==t&&("object"==typeof t?n.classList.add(...t):n.className=t),n}_createForm(){let e=this._makeElement("div","form-container"),t=this._makeElement("form","plan-form");t.id="main-form";let n=this._makeElement("h2","form-title"),r=this._makeElement("h2","form-title"),a=this._makeElement("h2","form-title"),i=this._makeElement("h2","form-title"),l=this._makeElement("input","form-text"),s=this._makeElement("textarea",["form-text","descript-text"]),o=this._createDropDown(),m=this._createCalendar();l.name="titleText",s.name="descText",o.name="status",m.name="dueDate";let d=this._makeElement("button",["form-button","submit-form"]),u=this._makeElement("button",["form-button","reset-form"]);d.setAttribute("type","button"),u.setAttribute("type","button");this._makeElement("hr","form-spacer"),this._makeElement("br");l.setAttribute("type","text"),s.setAttribute("type","text"),n.innerHTML="Title",t.appendChild(n),t.appendChild(l),r.innerHTML="Description",t.appendChild(r),t.appendChild(s),a.innerHTML="Status",t.appendChild(a),t.appendChild(o),i.innerHTML="Set due date",t.appendChild(i),t.appendChild(m),d.innerHTML="Submit",d.addEventListener("click",()=>this._submitPlan()),u.innerHTML="Reset",u.addEventListener("click",()=>this._resetPlan()),t.appendChild(d),t.appendChild(u),e.appendChild(t),document.getElementById("content").appendChild(e)}_createDropDown(){let e=document.createElement("select");e.className="status-dropdown";let t=document.createElement("option");t.value="notStarted",t.innerHTML="Not started";let n=document.createElement("option");n.value="inProg",n.innerHTML="In progress";let r=document.createElement("option");return r.value="finished",r.innerHTML="Finished",e.appendChild(t),e.appendChild(n),e.appendChild(r),e}_createCalendar(){let e=this._makeElement("input","calendar-form");return e.setAttribute("type","date"),e}_createObjectives(){this._makeElement("input","form-checkbox").setAttribute("type","checkbox")}_submitPlan(){this.plan=new l(i()(document.getElementById("main-form"),{hash:!0}))}_resetPlan(){document.getElementById("main-form").reset()}render(){this._createForm()}};s.render(),document.getElementsByClassName("start-button")[0].addEventListener("click",e=>{console.log(`${e.target} clicked`),s.clearPage(),o.render()})}]);