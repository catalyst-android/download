(function(t){function e(e){for(var n,i,c=e[0],o=e[1],l=e[2],d=0,p=[];d<c.length;d++)i=c[d],s[i]&&p.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/download/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"07a4":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));a("20d6"),a("96cf");var n=a("3b8d"),s=a("2b0e"),r=a("2f62"),i=a("58ca");s["a"].use(r["a"]);var c=new r["a"].Store({state:{devices:[],builds:[],device:{},deviceLoader:!0,buildLoader:!0,expandedBuild:null},mutations:{setDevices:function(t,e){t.devices=e},setDevice:function(t,e){t.device=e},setBuilds:function(t,e){t.builds=e},updateDeviceLoader:function(t,e){t.deviceLoader=e},updateBuildLoader:function(t,e){t.buildLoader=e},setExpandedBuild:function(t,e){t.expandedBuild=e}},actions:{fetchDevices:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,Object(i["b"])();case 3:n=t.sent,n&&(a("setDevices",n),a("updateDeviceLoader",!1));case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),fetchBuilds:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,a){var n,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,s=e.state,n("updateBuildLoader",!0),n("setBuilds",[]),t.next=5,Object(i["a"])(a.codename);case 5:r=t.sent,0===r.length&&s.device.codename&&M.toast({html:"No builds found. Check again later."}),n("setBuilds",r),n("updateBuildLoader",!1);case 9:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}(),filterDevice:function(t,e){var a=t.commit,n=t.state;n.devices.map((function(t){return t.devices.filter((function(t){return t.codename==e.codename})).map((function(t){return a("setDevice",t)}))}))},getIndexOfExpandedBuild:function(t,e){var a=t.commit,n=t.state;a("setExpandedBuild",n.builds.findIndex((function(t){return t.filename===e})))}}})},"0808":function(t,e,a){},"080f":function(t,e,a){"use strict";var n=a("18ae"),s=a.n(n);s.a},"16d4":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"color_animation",attrs:{src:a("8fd5"),width:t.width,alt:"logo"}})},s=[],r={props:["width"],name:"Logo"},i=r,c=a("2877"),o=Object(c["a"])(i,n,s,!1,null,null,null);e["a"]=o.exports},"174e":function(t,e,a){"use strict";var n=a("0808"),s=a.n(n);s.a},"18ae":function(t,e,a){},"2b7c":function(t,e,a){"use strict";a("96cf");var n=a("3b8d"),s=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,n=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=!(n.length>1&&void 0!==n[1])||n[1],t.abrupt("return",fetch(e).then((function(t){return a?t.json():t.text()})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e["a"]=s},"3dfd":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("Sidebar"),a("ThemeEngine"),a("router-view")],1)},s=[],r=(a("4d5c"),a("dc53"),a("d335"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-fixed"},[a("nav",[a("div",{staticClass:"nav-wrapper"},[a("a",{staticClass:"sidenav-trigger show-on-large left",attrs:{href:"#","data-target":"slide-out"}},[a("i",{staticClass:"material-icons left"},[t._v("menu")])]),a("a",{staticClass:"sidenav-trigger show-on-large right",attrs:{onclick:"toogleMenu()"}},[a("i",{staticClass:"settings material-icons"},[t._v("color_lens")])])])])])}],c={name:"Navbar",mounted:function(){var t=document.querySelectorAll(".sidenav");M.Sidenav.init(t)}},o=c,l=a("2877"),u=Object(l["a"])(o,r,i,!1,null,null,null),d=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"sidenav",attrs:{id:"slide-out"}},[a("div",[a("router-link",{staticClass:"bar-logo center",attrs:{to:{name:"home"}}},[a("div",{on:{click:t.hidebar}},[a("Logo",{attrs:{width:"170px"}}),a("h4",{staticClass:"accent"},[t._v(t._s(t.name))])],1)]),a("router-link",{staticClass:"center changelog-button",attrs:{to:{name:"changelog"}}},[a("a",{staticClass:"btn",on:{click:t.hidebar}},[t._v("View changelog")])]),a("Search"),t.$store.state.deviceLoader?a("Loading"):t._e(),a("ul",{staticClass:"collapsible collapsible-accordion"},t._l(t.brands,(function(e){return a("li",{key:e.name},[a("div",{staticClass:"collapsible-header"},[a("i",{staticClass:"material-icons"},[t._v("phone_android")]),a("span",{staticStyle:{width:"90%"}},[t._v(t._s(e.name))]),a("i",{staticClass:"material-icons"},[t._v("arrow_drop_down")])]),a("div",{staticClass:"collapsible-body"},[a("ul",t._l(e.devices,(function(e){return a("li",{key:e.codename,on:{click:t.hidebar}},[a("router-link",{staticClass:"pointer devilist",attrs:{to:{name:"device",params:{codename:e.codename}}}},[t._v(t._s(e.name)+" ("+t._s(e.codename)+")")])],1)})),0)])])})),0)],1)])},f=[],m=a("f453"),v=a("ee12"),h=a("16d4"),g=a("f61f"),b={name:"Sidebar",components:{Loading:m["a"],Search:v["a"],Logo:h["a"]},mounted:function(){var t=document.querySelector(".collapsible");M.Collapsible.init(t)},computed:{name:function(){return g["a"].APP_NAME},brands:function(){return this.$store.state.devices}},methods:{hidebar:function(){var t=document.querySelectorAll(".sidenav");M.Sidenav.init(t)}}},_=b,w=Object(l["a"])(_,p,f,!1,null,null,null),C=w.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("a",{staticClass:"accent",attrs:{onclick:"toogleMenu()"}},[a("i",{staticClass:"settings material-icons pointer",attrs:{id:"settings"}},[t._v("color_lens")])]),a("div",{staticClass:"menu",staticStyle:{display:"none"}},[a("h6",{staticClass:"accent"},[t._v("COLOR ENGINE")]),a("div",{staticClass:"line",staticStyle:{"margin-bottom":"12px"}}),a("div",[a("span",{staticClass:"accent"},[t._v("BACKGROUND")]),a("div",{attrs:{id:"backgrounds-render"}}),a("div",{staticStyle:{clear:"both"}})]),a("div",[a("span",{staticClass:"accent"},[t._v("COLOR")]),a("div",{attrs:{id:"colors-render"}})])])])])}],k={name:"ThemeEngine"},x=k,O=Object(l["a"])(x,y,j,!1,null,null,null),S=O.exports,$={name:"app",created:function(){this.$store.dispatch("fetchDevices")},components:{Navbar:d,Sidebar:C,ThemeEngine:S}},E=$,L=Object(l["a"])(E,n,s,!1,null,null,null);e["a"]=L.exports},"54a7":function(t,e,a){"use strict";var n=a("aa8f"),s=a.n(n);s.a},5665:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home center"},[a("h3",{staticClass:"accent welcome"},[t._v(t._s(t.subname))]),a("Logo",{attrs:{width:"350px"}}),a("Donate"),a("ProjectLink"),a("Credits")],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Search"),a("div",{staticClass:"buttons"},[a("a",{staticClass:"btn",attrs:{target:"blank",href:"https://catalyst-android.github.io"},on:{click:t.hidebar}},[t._v("Home")])]),a("div",{staticClass:"home-bottom-info"},[a("div",{staticClass:"home-bottom-info-content"},t._l(t.links,(function(t){return a("a",{key:t.title,attrs:{href:t.ref,target:"_blank"}},[a("div",{attrs:{title:t.title}},[a("svg",[a("path",{attrs:{d:t.svg_path}})])])])})),0)])],1)},i=[],c=a("ee12"),o={name:"ProjectLink",components:{Search:c["a"]},data:function(){return{links:[{title:"Github Sources",ref:"http://github.com/catalyst-android",svg_path:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},{title:"Telegram Group",ref:"https://t.me/catalyst_android",svg_path:"M12,0c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12Zm0,2c5.514,0 10,4.486 10,10c0,5.514 -4.486,10 -10,10c-5.514,0 -10,-4.486 -10,-10c0,-5.514 4.486,-10 10,-10Zm2.692,14.889c0.161,0.115 0.368,0.143 0.553,0.073c0.185,-0.07 0.322,-0.228 0.362,-0.42c0.435,-2.042 1.489,-7.211 1.884,-9.068c0.03,-0.14 -0.019,-0.285 -0.129,-0.379c-0.11,-0.093 -0.263,-0.12 -0.399,-0.07c-2.096,0.776 -8.553,3.198 -11.192,4.175c-0.168,0.062 -0.277,0.223 -0.271,0.4c0.006,0.177 0.125,0.33 0.296,0.381c1.184,0.354 2.738,0.847 2.738,0.847c0,0 0.725,2.193 1.104,3.308c0.047,0.139 0.157,0.25 0.301,0.287c0.145,0.038 0.298,-0.001 0.406,-0.103c0.608,-0.574 1.548,-1.461 1.548,-1.461c0,0 1.786,1.309 2.799,2.03Zm-5.505,-4.338l0.84,2.769l0.186,-1.754c0,0 3.243,-2.925 5.092,-4.593c0.055,-0.048 0.062,-0.13 0.017,-0.188c-0.045,-0.057 -0.126,-0.071 -0.188,-0.032c-2.143,1.368 -5.947,3.798 -5.947,3.798Z"},{title:"Telegram Channel",ref:"https://t.me/catalyst_os",svg_path:"M12,0c-6.626,0 -12,5.372 -12,12c0,6.627 5.374,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.628 -5.373,-12 -12,-12Zm3.224,17.871c0.188,0.133 0.43,0.166 0.646,0.085c0.215,-0.082 0.374,-0.267 0.422,-0.491c0.507,-2.382 1.737,-8.412 2.198,-10.578c0.035,-0.164 -0.023,-0.334 -0.151,-0.443c-0.129,-0.109 -0.307,-0.14 -0.465,-0.082c-2.446,0.906 -9.979,3.732 -13.058,4.871c-0.195,0.073 -0.322,0.26 -0.316,0.467c0.007,0.206 0.146,0.385 0.346,0.445c1.381,0.413 3.193,0.988 3.193,0.988c0,0 0.847,2.558 1.288,3.858c0.056,0.164 0.184,0.292 0.352,0.336c0.169,0.044 0.348,-0.002 0.474,-0.121c0.709,-0.669 1.805,-1.704 1.805,-1.704c0,0 2.084,1.527 3.266,2.369Zm-6.423,-5.062l0.98,3.231l0.218,-2.046c0,0 3.783,-3.413 5.941,-5.358c0.063,-0.057 0.071,-0.153 0.019,-0.22c-0.052,-0.067 -0.148,-0.083 -0.219,-0.037c-2.5,1.596 -6.939,4.43 -6.939,4.43Z"},{title:"Be a maintainer!",ref:"null",svg_path:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 10.199l-3.64 1.801 3.64 1.796v2.204l-6-2.935v-2.131l6-2.934v2.199zm8 2.866l-6 2.935v-2.204l3.64-1.796-3.64-1.801v-2.199l6 2.935v2.13z"}]}}},l=o,u=(a("a46c"),a("2877")),d=Object(u["a"])(l,r,i,!1,null,null,null),p=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"container",staticStyle:{width:"100%"}},[a("center",[a("script",{attrs:{type:"application/javascript",async:"",src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}}),a("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-1277633863266032","data-ad-slot":"8931146882","data-ad-format":"auto","data-full-width-responsive":"true"}}),a("script",{attrs:{type:"application/javascript"}},[t._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n      ")])])],1)])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"credits"},[t._v("\n    Project maintained by\n    "),a("a",{attrs:{href:"https://github.com/LordShenron"}},[t._v("LordShenron")]),t._v(" and\n    "),a("a",{attrs:{href:"https://github.com/Umang96"}},[t._v("Umang96")])])}],v={name:"Credits",components:{Search:c["a"]},data:function(){return{credits:[{title:"Project maintained by",value:"LordShenron and",url:"https://github.com/LordShenron"},{title:"",value:"Umang96",url:"https://github.com/Umang96"}]}}},h=v,g=Object(u["a"])(h,f,m,!1,null,null,null),b=g.exports,_=a("f61f"),w=a("16d4"),C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"messageContainer"},[a("a",{attrs:{href:"https://projectsakura.xyz/blog/#/donation",target:"blank"}},[a("p",{staticClass:"message"},[t._v("Become a donator and get your name or organisation's logo on our donations page.")])])])}],j={name:"Donate"},k=j,x=(a("54a7"),Object(u["a"])(k,C,y,!1,null,null,null)),O=(x.exports,{name:"Home",components:{ProjectLink:p,Credits:b,Logo:w["a"]},created:function(){document.title="CatalystOS | Downloads",document.head.querySelector("meta[name=description]").content="CatalystOS | Downloads"},computed:{subname:function(){return _["a"].APP_SUBNAME},description:function(){return _["a"].APP_DESC}}}),S=O,$=Object(u["a"])(S,n,s,!1,null,null,null),E=$.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("center",[a("script",{attrs:{type:"application/javascript",async:"",src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}}),a("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-1277633863266032","data-ad-slot":"8931146882","data-ad-format":"auto","data-full-width-responsive":"true"}}),a("script",{attrs:{type:"application/javascript"}},[t._v("\n      (adsbygoogle = window.adsbygoogle || []).push({});\n    ")]),a("script",{attrs:{type:"application/javascript",async:"",src:"https://www.googletagmanager.com/gtag/js?id=UA-173637831-1"}}),a("script",{attrs:{type:"application/javascript"}},[t._v('\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag("js", new Date());\n      gtag("config", "UA-173637831-1");\n    ')])]),a("CardHeader"),a("CardBuilds")],1)},B=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.device.name?a("div",[a("h5",{staticClass:"center upper-bold accent"},[t._v("\n    "+t._s(t.device.brand)+" "+t._s(t.device.name)+" ("+t._s(t.device.codename)+")\n  ")]),a("div",{staticClass:"row limiter"},[a("div",{staticClass:"col s12 m12"},[a("div",{staticClass:"builds cardColor z-depth-1"},[a("div",{staticClass:"deviceprop"},[a("i",{staticClass:"material-icons"},[t._v("domain")]),a("h6",[t._v(t._s(t.device.brand))])]),a("div",{staticClass:"deviceprop"},[a("i",{staticClass:"material-icons"},[t._v("phone_android")]),a("h6",[t._v(t._s(t.device.name))])]),a("div",{staticClass:"deviceprop"},[a("i",{staticClass:"material-icons"},[t._v("device_unknown")]),a("h6",[t._v(t._s(t.device.codename))])]),t.device.active?a("div",{staticClass:"deviceprop"},[a("i",{staticClass:"material-icons"},[t._v("person_outline")]),a("h6",[t._v(t._s(t.device.maintainer_name))]),a("Flag",{attrs:{width:"20px",country:t.device.maintainer_country}})],1):t._e(),t.device.active?t._e():a("div",{staticClass:"deviceprop"},[a("i",{staticClass:"material-icons red-icon"},[t._v("person_outline")]),a("h6",[t._v("No maintainer")])]),t.device.donation_link&&t.device.active?a("div",{staticClass:"card-action xda-buttons"},[a("a",{staticClass:"waves-effect btn",attrs:{href:t.device.donation_link,target:"_blank"}},[t._v("Donate to Maintainer")])]):t._e(),t.device.xda_thread&&t.device.active?a("div",{staticClass:"card-action xda-buttons"},[a("a",{staticClass:"waves-effect btn",attrs:{href:t.device.maintainer_xda,target:"_blank"}},[t._v("XDA Profile")]),a("a",{staticClass:"waves-effect btn",attrs:{href:t.device.xda_thread,target:"_blank"}},[t._v("XDA Thread")])]):t._e(),t.device.active?t._e():a("div",{staticClass:"card-action xda-buttons"},[a("a",{staticClass:"waves-effect btn red-bg",attrs:{href:"https://forms.gle/dchk8MiQhna6cFts7",target:"_blank"}},[t._v("Become the maintainer")])])])])]),t.device.active?t._e():a("div",{staticClass:"row limiter"},[t._m(0)])]):t._e()},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col s12 m12"},[a("div",{staticClass:"red-bg alert-box"},[a("p",[t._v("This device will no longer receive updates")])])])}],R=(a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("img",{attrs:{src:t.flag,width:"30px",alt:"logo"}})}),A=[],z={props:["width","country"],name:"Flag",computed:{flag:function(){var t={BR:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-brazil_1f1e7-1f1f7.png",BRA:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-brazil_1f1e7-1f1f7.png",IND:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-india_1f1ee-1f1f3.png",US:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-united-states_1f1fa-1f1f8.png",UKR:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-ukraine_1f1fa-1f1e6.png",SL:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-sri-lanka_1f1f1-1f1f0.png",RUS:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-russia_1f1f7-1f1fa.png",ARM:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-armenia_1f1e6-1f1f2.png",ID:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-indonesia_1f1ee-1f1e9.png",PAK:"https://flaglane.com/download/pakistani-flag/pakistani-flag-graphic.png",MAUR:"https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg",KAZ:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/281/flag-kazakhstan_1f1f0-1f1ff.png",ALB:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/281/flag-albania_1f1e6-1f1f1.png",GER:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/281/flag-germany_1f1e9-1f1ea.png",GBR:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/281/flag-united-kingdom_1f1ec-1f1e7.png",OM:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/flag-oman_1f1f4-1f1f2.png",VN:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/flag-vietnam_1f1fb-1f1f3.png",NEP:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/322/flag-nepal_1f1f3-1f1f5.png"};return t[this.country]?t[this.country]:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Noflag.PNG/120px-Noflag.PNG"}}},T=z,N=(a("ad05"),Object(u["a"])(T,R,A,!1,null,null,null)),U=N.exports,q={name:"CardHeader",components:{Flag:U},computed:{device:function(){this.$store.dispatch("filterDevice",this.$route.params);var t=this.$store.state.device;return t&&t.name&&(document.title="".concat(t.name," (").concat(this.$route.params.codename,") | CatalystOS Downloads")),t}}},G=q,F=Object(u["a"])(G,D,P,!1,null,null,null),I=F.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row center"},[a("div",{staticClass:"col s12 m12"},[a("ul",{staticClass:"collapsible collapsible-builds"},t._l(t.deviceBuilds,(function(e){return a("li",{key:e.id,staticClass:"buildcoll",on:{click:function(a){return t.setBuild(e.filename)}}},[a("div",[t._v("Android "+t._s(e.android))]),a("div",{staticClass:"collapsible-header white-text cardColor"},[a("i",{staticClass:"material-icons"},[t._v("system_update")]),a("span",{staticStyle:{width:"100%"}},[t._v(t._s(e.filename))]),a("i",{staticClass:"material-icons"},[t._v("arrow_drop_down")])]),a("div",{staticClass:"collapsible-body"},[a("p",{staticClass:"label"},[t._v("details")]),a("div",{staticClass:"buildinfo"},[a("div",{staticClass:"deviceprop"},[a("p",[t._v("Filename: "+t._s(e.filename))])]),a("div",{staticClass:"deviceprop"},[a("p",[t._v("Date: "+t._s(e.datetime))])]),a("div",{staticClass:"deviceprop"},[a("p",[t._v("Size: "+t._s(e.size))])]),a("div",{staticClass:"deviceprop"},[a("p",[t._v("MD5: "+t._s(e.md5))])]),a("div",{staticClass:"deviceprop"},[a("p",[t._v("Version: "+t._s(e.version))])]),a("div",{staticClass:"deviceprop"},[a("p",[t._v("Downloads: "+t._s(e.downloads))])])]),a("div",{staticClass:"buildChangelog"},[a("p",{staticClass:"label"},[t._v("Device Changelog")]),a("pre",[t._v(t._s(e.changelog))])]),a("div",{staticClass:"buildbuttons"},[a("a",{staticClass:"btn",attrs:{href:"null",target:"_blank"}},[t._v("Donate To ROM")]),a("a",{staticClass:"btn",attrs:{download:"",target:"_blank"},on:{click:function(a){return t.download(e.filename,t.device.codename)}}},[t._v("Download")])])])])})),0),t.$store.state.buildLoader?a("Loading"):t._e()],1)])])},Z=[],H=(a("a481"),a("f453")),K=a("e207"),J={name:"CardBuilds",components:{Loading:H["a"]},updated:function(){this.$route.params.filename&&(this.$store.dispatch("getIndexOfExpandedBuild",this.$route.params.filename),document.title=this.$route.params.filename||"Download CatalystOS for ".concat(this.$route.params.codename)),this.openBuild(this.$store.state.expandedBuild),this.$store.dispatch("getIndexOfExpandedBuild","")},methods:{setBuild:function(t){var e=this,a=document.querySelector(".collapsible-builds"),n=M.Collapsible.init(a);n.options.onOpenEnd=function(){return e.$router.push({name:"filename",params:{filename:t}})},n.options.onCloseEnd=function(){return e.$router.replace({name:"filename",params:{filename:null}})}},openBuild:function(t){if(!isNaN(t)&&-1!==t){var e=document.querySelector(".collapsible-builds"),a=M.Collapsible.init(e);a.open(t)}},download:function(t,e){M.toast({html:"Starting Download... Please Wait..."}),location.href=Object(K["b"])(t,e)}},computed:{deviceBuilds:function(){return this.$store.state.builds},device:function(){return this.$store.state.device}}},X=J,Y=Object(u["a"])(X,V,Z,!1,null,null,null),Q=Y.exports,W={name:"Device",components:{CardHeader:I,CardBuilds:Q},created:function(){this.$store.dispatch("fetchBuilds",this.$route.params)},mounted:function(){console.log(this.$store.state.device)},watch:{"$route.params.codename":{handler:function(t){this.$store.dispatch("filterDevice",{codename:t}),this.$store.dispatch("fetchBuilds",{codename:t})}}}},tt=W,et=Object(u["a"])(tt,L,B,!1,null,null,null),at=et.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ChangelogView")],1)},st=[],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.changes?a("VueMarkdown",{staticClass:"md"},[t._v("\n    "+t._s(t.changes)+"\n  ")]):t._e()],1)},it=[],ct=a("9ce6"),ot=a.n(ct),lt=a("58ca"),ut={name:"ChangelogView",components:{VueMarkdown:ot.a},data:function(){return{changes:null}},created:function(){var t=this;Object(lt["c"])().then((function(e){return t.changes=e}))}},dt=ut,pt=(a("080f"),a("dc79"),Object(u["a"])(dt,rt,it,!1,null,"03e9c95c",null)),ft=pt.exports,mt={name:"Changelog",components:{ChangelogView:ft},created:function(){},mounted:function(){}},vt=mt,ht=Object(u["a"])(vt,nt,st,!1,null,null,null),gt=ht.exports;a.d(e,"a",(function(){return bt}));var bt=[{path:"/",component:E,name:"home"},{path:"/download/changelog",component:gt,name:"changelog"},{path:"/:codename",component:at,name:"device",children:[{path:":filename?",name:"filename"}]}]},"56d7":function(t,e,a){"use strict";a.r(e),function(t){a("cadf"),a("551c"),a("f751"),a("097d");var e=a("2b0e"),n=a("8c4f"),s=a("3dfd"),r=a("07a4"),i=a("5665");e["a"].config.productionTip=!1,e["a"].use(n["a"]);var c=new n["a"]({mode:"hash",base:t,routes:i["a"]});new e["a"]({render:function(t){return t(s["a"])},router:c,store:r["a"]}).$mount("#app")}.call(this,"/")},"58ca":function(t,e,a){"use strict";a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return u})),a.d(e,"c",(function(){return f}));a("5df3");var n=a("cebc"),s=(a("2fdb"),a("6762"),a("ac6a"),a("96cf"),a("3b8d")),r=a("2b7c"),i=a("e207"),c=a("a2b6"),o="https://raw.githubusercontent.com/catalyst-android",l=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(r["a"])("".concat(o,"/OTA/13/devices.json"));case 3:return e=t.sent,a=[],n=[],e.forEach((function(t){return!a.includes(t.brand)&&a.push(t.brand)})),a.forEach((function(t){return n.push({name:t,devices:e.filter((function(e){return e.brand===t}))})})),t.abrupt("return",n);case 11:t.prev=11,t.t0=t["catch"](0),console.log("devices fetch failed");case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,l,u,f,m;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(r["a"])("".concat(o,"/OTA/13/website/").concat(e,".json"));case 3:return a=t.sent,l=a.response.map(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])(a.filename,e);case 2:return s=t.sent,t.next=5,d(a.filename,e);case 5:return r=t.sent,t.abrupt("return",Object(n["a"])({},a,{android:13,size:Object(c["d"])(a.size),datetime:Object(c["c"])(a.datetime),md5:a.id,downloads:s,changelog:r}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).reverse(),t.prev=5,t.next=8,Object(r["a"])("".concat(o,"/OTA/10/").concat(e,".json"));case 8:return u=t.sent,console.log(u),f=u.response.map(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])(a.filename,e);case 2:return s=t.sent,t.next=5,p(a.filename,e);case 5:return r=t.sent,t.abrupt("return",Object(n["a"])({},a,{android:10,size:Object(c["d"])(a.size),datetime:Object(c["c"])(a.datetime),md5:a.id,downloads:s,changelog:r}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).reverse(),m=l.concat(f),console.log(l),t.next=15,Promise.all(m);case 15:return t.abrupt("return",t.sent);case 18:t.prev=18,t.t0=t["catch"](5),console.log(t.t0.message);case 21:return t.next=23,Promise.all(l);case 23:return t.abrupt("return",t.sent);case 26:return t.prev=26,t.t1=t["catch"](0),t.abrupt("return",[]);case 29:case"end":return t.stop()}}),t,null,[[0,26],[5,18]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(r["a"])("".concat(o,"/OTA/13/changelog/changelog_").concat(a,".txt"),!1);case 3:return n=t.sent,t.abrupt("return",n.includes("404")?"Changelog data no found":n);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return","Changelog data no found");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,a){return t.apply(this,arguments)}}(),p=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(r["a"])("".concat(o,"/OTA/10/changelog/changelog_").concat(a,".txt"),!1);case 3:return n=t.sent,t.abrupt("return",n.includes("404")?"Changelog data no found":n);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return","Changelog data no found");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,a){return t.apply(this,arguments)}}(),f=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["a"])("https://raw.githubusercontent.com/catalyst-android/OTA/13/changelog/rom_changelog.txt",!1);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},"8fd5":function(t,e,a){t.exports=a.p+"img/logo.f50286f3.png"},a2b6:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=new Date;return"".concat(t.getFullYear(),"-").concat(t.getUTCMonth()+1,"-").concat(t.getUTCDate())},s=function(t){var e=["Bytes","KB","MB","GB","TB"];if(0==t)return"0 Byte";var a=parseInt(Math.floor(Math.log(t)/Math.log(1024)));return"".concat(Math.round(t/Math.pow(1024,a),2)," ").concat(e[a])},r=function(t){var e=new Date(1e3*t),a="0".concat(e.getUTCMonth()+1).slice(-2),n="0".concat(e.getUTCDate()).slice(-2);return"".concat(e.getFullYear(),"/").concat(a,"/").concat(n)},i=function(){var t=new Date;return Math.floor(t.getTime()/1e3)}},a46c:function(t,e,a){"use strict";var n=a("d0b4"),s=a.n(n);s.a},aa8f:function(t,e,a){},ad05:function(t,e,a){"use strict";var n=a("d46d"),s=a.n(n);s.a},b23b:function(t,e,a){},d0b4:function(t,e,a){},d335:function(t,e,a){},d46d:function(t,e,a){},dc79:function(t,e,a){"use strict";var n=a("b23b"),s=a.n(n);s.a},e207:function(t,e,a){"use strict";a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return o}));a("96cf");var n=a("3b8d"),s=a("2b7c"),r=a("a2b6"),i="https://sourceforge.net/projects/catalystproject",c=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(s["a"])("".concat(i,"/files/").concat(a,"/").concat(e,"/stats/json?start_date=2019-04-06&end_date=").concat(Object(r["b"])()));case 3:return n=t.sent,t.abrupt("return",n.total);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,a){return t.apply(this,arguments)}}(),o=function(t,e){if("munch"===e){var a="https://sourceforge.net/projects/catalystproject/files/".concat(e,"/");return"".concat(a)}var n="https://downloads.sourceforge.net/project/catalystproject/".concat(e,"/").concat(t);return"".concat(n,"?r=&ts=").concat(Object(r["a"])(),"&use_mirror=autoselect")}},ee12:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"rounded searchbar"},[a("div",{staticClass:"search-wrapper"},[a("i",{staticClass:"material-icons is-s"},[t._v("search")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticStyle:{width:"80%"},attrs:{type:"text",placeholder:"Type your device... "},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])]),""!=t.search?a("div",{staticClass:"wrapper",on:{click:t.resetSearch}},t._l(t.filteredList,(function(e){return a("router-link",{key:e.name,staticClass:"search-link",attrs:{to:{name:"device",params:{codename:e.codename}},"data-device":e.codename}},[t._v(t._s(e.name)+" ("+t._s(e.codename)+")")])})),1):t._e()])},s=[],r=(a("7f7f"),a("386d"),a("6762"),a("2fdb"),{name:"Search",data:function(){return{search:""}},mounted:function(){var t=this;document.addEventListener("keypress",(function(e){13==e.keyCode&&null!=document.querySelector(".search-link")&&(t.resetSearch(),t.$router.push({name:"device",params:{codename:document.querySelector(".search-link").attributes["data-device"].value}}))}))},methods:{resetSearch:function(){document.querySelectorAll(".wrapper")[0].style.display="none",document.querySelectorAll("input")[0].blur(),this.search=""}},computed:{filteredList:function(){var t=this;return this.$store.state.devices.flatMap((function(e){return e.devices.filter((function(e){var a=e.codename.toLowerCase().includes(t.search.toLowerCase()),n=e.name.toLowerCase().includes(t.search.toLowerCase());return n||a}))}))}}}),i=r,c=a("2877"),o=Object(c["a"])(i,n,s,!1,null,null,null);e["a"]=o.exports},f453:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loadContainer"},[a("div",{staticClass:"preloader-wrapper small active"},[a("div",{staticClass:"spinner-layer spinner-accent-only"},[a("div",{staticClass:"circle-clipper left"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"gap-patch"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"circle-clipper right"},[a("div",{staticClass:"circle"})])])])])}],r={name:"Loading"},i=r,c=(a("174e"),a("2877")),o=Object(c["a"])(i,n,s,!1,null,null,null);e["a"]=o.exports},f61f:function(t,e,a){"use strict";e["a"]={APP_NAME:"CatalystOS | Downloads",APP_SUBNAME:"CatalystOS ",APP_DESC:"CatalystOS download page for official devices",APP_LOGO:"/img/logo.png"}}});
//# sourceMappingURL=app.c08462ac.js.map