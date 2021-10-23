(this["webpackJsonpf1-data"]=this["webpackJsonpf1-data"]||[]).push([[9],{114:function(e,t,a){"use strict";var n=a(41),c=a(0),s=a(45),i=a.n(s),r=a(2);t.a=function(e){return c.forwardRef((function(t,a){return Object(r.jsx)("div",Object(n.a)(Object(n.a)({},t),{},{ref:a,className:i()(t.className,e)}))}))}},136:function(e,t,a){"use strict";var n,c=a(41),s=a(42),i=a(68),r=a(45),l=a.n(r),j=a(0),o=a(110),d=a(140),b=a(113),u=a(142),h=a(2),O=["className","children"],x=(n={},Object(i.a)(n,o.b,"show"),Object(i.a)(n,o.a,"show"),n),m=j.forwardRef((function(e,t){var a=e.className,n=e.children,i=Object(s.a)(e,O),r=Object(j.useCallback)((function(e,t){Object(b.a)(e),null==i.onEnter||i.onEnter(e,t)}),[i]);return Object(h.jsx)(u.a,Object(c.a)(Object(c.a)({ref:t,addEndListener:d.a},i),{},{onEnter:r,childRef:n.ref,children:function(e,t){return j.cloneElement(n,Object(c.a)(Object(c.a)({},t),{},{className:l()("fade",a,n.props.className,x[e])}))}}))}));m.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},m.displayName="Fade",t.a=m},293:function(e,t,a){},312:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(55),s=a(57),i=a(71),r=a.n(i),l=a(72),j=a(20),o=a(48),d=a(43),b=a(44),u=a(8),h=a(59),O=a(41),x=a(42),m=a(45),f=a.n(m),g=a(77),p=a(141),y=a(109),N=a(47),A=a(136),v=a(9),w=a.n(v),C=a(2),S=["className","variant"],I={"aria-label":w.a.string,onClick:w.a.func,variant:w.a.oneOf(["white"])},R=n.forwardRef((function(e,t){var a=e.className,n=e.variant,c=Object(x.a)(e,S);return Object(C.jsx)("button",Object(O.a)({ref:t,type:"button",className:f()("btn-close",n&&"btn-close-".concat(n),a)},c))}));R.displayName="CloseButton",R.propTypes=I,R.defaultProps={"aria-label":"Close"};var E=R,M=a(114),k=a(88),B=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],L=Object(M.a)("h4");L.displayName="DivStyledAsH4";var P=Object(k.a)("alert-heading",{Component:L}),T=Object(k.a)("alert-link",{Component:y.a}),z={variant:"primary",show:!0,transition:A.a,closeLabel:"Close alert"},F=n.forwardRef((function(e,t){var a=Object(g.a)(e,{show:"onClose"}),n=a.bsPrefix,c=a.show,s=a.closeLabel,i=a.closeVariant,r=a.className,l=a.children,j=a.variant,o=a.onClose,d=a.dismissible,b=a.transition,u=Object(x.a)(a,B),h=Object(N.a)(n,"alert"),m=Object(p.a)((function(e){o&&o(!1,e)})),y=!0===b?A.a:b,v=Object(C.jsxs)("div",Object(O.a)(Object(O.a)({role:"alert"},y?void 0:u),{},{ref:t,className:f()(r,h,j&&"".concat(h,"-").concat(j),d&&"".concat(h,"-dismissible")),children:[d&&Object(C.jsx)(E,{onClick:m,"aria-label":s,variant:i}),l]}));return y?Object(C.jsx)(y,Object(O.a)(Object(O.a)({unmountOnExit:!0},u),{},{ref:void 0,in:c,children:v})):c?v:null}));F.displayName="Alert",F.defaultProps=z;var H=Object.assign(F,{Link:T,Heading:P}),D=a(79),U=a(50),Z=function(e){var t=e.race;return Object(C.jsxs)(d.a,{className:"center-xs justify-content-between",children:[Object(C.jsx)(b.a,{xs:12,md:12,lg:"auto",className:"text-center",children:Object(C.jsx)(h.a,{countryCode:U.a[t.Circuit.Location.country].toLowerCase(),height:80,style:{marginBottom:"2%"}})}),Object(C.jsx)(b.a,{xs:12,md:12,lg:"auto",children:Object(C.jsx)(u.b,{to:"/race/"+t.season+"/"+t.round,children:Object(C.jsxs)(H,{variant:"primary",children:["Round #",t.round]})})}),Object(C.jsxs)(b.a,{xs:12,md:12,lg:6,className:"center-xs",children:[Object(C.jsx)("h3",{children:t.raceName.toUpperCase()}),Object(C.jsx)("h5",{children:t.Circuit.circuitName})]}),Object(C.jsxs)(b.a,{xs:12,md:12,lg:3,className:"center-xs center",children:[Object(C.jsx)("h5",{children:Object(D.a)(t.date)}),Object(C.jsx)("h5",{children:t.hasOwnProperty("time")?Object(D.b)(t.date,t.time):null})]})]})},G=a(90),J=a(170),K=(a(293),a(52),a(64)),V=a(21),W=function(){var e=Object(n.useContext)(V.a).theme,t=Object(n.useState)(null!==sessionStorage.getItem("seasonScheduleInput")?sessionStorage.getItem("seasonScheduleInput"):"2021"),a=Object(j.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(null),u=Object(j.a)(i,2),h=u[0],O=u[1],x=Object(n.useState)(null),m=Object(j.a)(x,2),f=m[0],g=m[1],p=Object(n.useState)(!0),y=Object(j.a)(p,2),N=y[0],A=y[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/".concat(c,".json")).then((function(e){return e.json()})).then((function(e){O(e.MRData.RaceTable.Races),A(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),g(Array(72).fill().map((function(e,t){return 1950+t})).reverse())}),[c]);return Object(C.jsx)(C.Fragment,{children:N?Object(C.jsx)(o.a,{style:{minHeight:"500px"},children:Object(C.jsxs)(d.a,{className:"justify-content-center text-center",children:[Object(C.jsxs)("h1",{children:[c," FORMULA 1"]}),Object(C.jsx)(G.a,{animation:"border"})]})}):Object(C.jsxs)(o.a,{children:[Object(C.jsx)(d.a,{className:"justify-content-center text-center",children:Object(C.jsx)(b.a,{children:Object(C.jsxs)("h1",{children:[c," FORMULA 1"]})})}),Object(C.jsx)(d.a,{className:"justify-content-center text-center",style:{marginBottom:"2%"},children:Object(C.jsx)(b.a,{children:Object(C.jsxs)(J.a,{children:[Object(C.jsx)(J.a.Toggle,{variant:"danger",className:"red-btn",id:"dropdown-basic",children:c}),Object(C.jsx)(J.a.Menu,{className:"dropdown-menu",children:f.map((function(e,t){return Object(C.jsx)(J.a.Item,{onClick:function(e){return t=e.target.textContent,s(t),sessionStorage.setItem("seasonScheduleInput",t),void A(!0);var t},children:e},t)}))})]})})}),Object(C.jsx)(d.a,{children:Object(C.jsx)(K.a,{className:"standings-table table-striped",responsive:!0,variant:e,children:Object(C.jsx)("tbody",{children:h.map((function(e,t){return Object(C.jsx)("tr",{children:Object(C.jsx)("td",{children:Object(C.jsx)(Z,{race:e})})},t)}))})})})]})})};t.default=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(c.a,{}),Object(C.jsx)(W,{}),Object(C.jsx)(s.a,{})]})}},50:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={British:"GB",Finnish:"FI",Dutch:"NL",Mexican:"MX",Spanish:"ES",Australian:"AU",Monegasque:"MC",French:"FR",German:"DE",Japanese:"JP",Canadian:"CA",Italian:"IT",Russian:"RU",Austrian:"AT",Swiss:"CH",American:"US",Thai:"TH","New Zealander":"NZ","New Zealand":"NZ",Swedish:"SE",Portuguese:"PT",Brazilian:"BR",Hungarian:"HU",Argentine:"AR",Belgian:"BE",Belgium:"BE","South African":"ZA",Danish:"DK",Liechtensteiner:"LI","Hong Kong":"HK",Irish:"IE",Chilean:"CL",Venezuelan:"VE",Colombian:"CO",Czech:"CZ",Malaysia:"MY",Indian:"IN",Polish:"PL",Indonesian:"ID",Rhodesian:"ZW",Russia:"RU",Korea:"KR",Argentina:"AR",UAE:"AE",Australia:"AU",Austria:"AT",Azerbaijan:"AZ",Bahrain:"BH",Brazil:"BR",Canada:"CA",China:"CN",France:"FR",Germany:"DE",Hungary:"HU",India:"IN",Italy:"IT",Japan:"JP",Malyasia:"MY",Malaysian:"MY",Mexico:"MX",Monaco:"MC",Morocco:"MA",Netherlands:"NL",Portugal:"PT","Saudi Arabia":"SA",Singapore:"SG","South Africa":"ZA",Spain:"ES",Sweden:"SE",Switzerland:"CH",Turkey:"TR",UK:"GB",USA:"US",Qatar:"QA"}},52:function(e,t,a){},55:function(e,t,a){"use strict";var n=a(0),c=a(21),s=a(48),i=a(43),r=a(44),l=a(86),j=(a(56),a(8)),o=a(78),d=a(49),b=a(87),u=a(2);t.a=function(){var e=Object(n.useContext)(c.a),t=e.theme,a=e.setTheme;return Object(n.useEffect)((function(){localStorage.setItem("theme",t)}),[t]),Object(u.jsx)(l.a,{className:"navbar",bg:"dark",variant:"dark",children:Object(u.jsxs)(s.a,{style:{minHeight:"40px"},children:[Object(u.jsx)(j.b,{to:"/",style:{textDecoration:"none"},children:Object(u.jsx)(l.a.Brand,{className:"icon-link",children:Object(u.jsx)(d.a,{size:30})})}),Object(u.jsx)(j.b,{to:"/schedule",style:{textDecoration:"none"},children:Object(u.jsx)(l.a.Brand,{className:"text-link",children:"RACES"})}),Object(u.jsx)(j.b,{to:"/standings",style:{textDecoration:"none"},children:Object(u.jsx)(l.a.Brand,{className:"text-link",children:"STANDINGS"})}),Object(u.jsx)(l.a.Collapse,{className:"justify-content-end",children:Object(u.jsxs)(i.a,{className:"g-2",children:[Object(u.jsx)(r.a,{style:{marginTop:"15px"},children:Object(u.jsx)(b.a,{onChange:function(){return function(){var e="light"===t?"dark":"light";a(e),localStorage.setItem("theme",e)}()},checked:"dark"===t,size:20})}),Object(u.jsx)(r.a,{children:Object(u.jsx)(l.a.Brand,{className:"icon-link",href:"https://github.com/jdro10","aria-label":"Github",children:Object(u.jsx)(o.a,{size:25})})})]})})]})})}},56:function(e,t,a){},57:function(e,t,a){"use strict";a(0),a(58);var n=a(48),c=a(43),s=a(44),i=a(49),r=a(46),l=a(53),j=a(70),o=a(51),d=a(2);t.a=function(){return Object(d.jsx)("footer",{children:Object(d.jsxs)(n.a,{children:[Object(d.jsxs)(c.a,{className:"justify-content-center text-center",xs:"auto",id:"row",children:[Object(d.jsx)(s.a,{children:Object(d.jsx)(i.a,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(r.b,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(r.d,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(l.a,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(r.c,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(r.a,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(j.a,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(o.b,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(l.b,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(o.c,{size:40})})]}),Object(d.jsx)(c.a,{className:"justify-content-md-center",xs:"auto",id:"lastRow"}),Object(d.jsx)(c.a,{className:"justify-content-md-center",children:Object(d.jsx)(s.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"API"})})}),Object(d.jsx)(c.a,{className:"justify-content-md-center",children:Object(d.jsxs)(s.a,{md:"auto",style:{textAlign:"center"},children:["All racing data is obtained through"," ",Object(d.jsx)("a",{href:"http://ergast.com/mrd/",style:{color:"white"},children:"Ergast API"}),"."]})}),Object(d.jsx)(c.a,{className:"justify-content-md-center",children:Object(d.jsxs)(s.a,{md:"auto",style:{textAlign:"center"},children:["Some drivers' and circuits' information are obtained through"," ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/w/api.php",style:{color:"white"},children:"Wikipedia API"}),"."]})}),Object(d.jsx)("br",{}),Object(d.jsx)(c.a,{className:"justify-content-md-center",children:Object(d.jsx)(s.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"DISCLAIMER"})})}),Object(d.jsx)(c.a,{className:"justify-content-md-center",children:Object(d.jsx)(s.a,{md:"auto",style:{textAlign:"center"},children:"This website was developed for learning and educational purposes only."})}),Object(d.jsx)(c.a,{className:"justify-content-md-center",children:Object(d.jsx)(s.a,{md:"auto",style:{textAlign:"center"},children:"Data displayed may be inaccurate. By using this website you acknowledge this."})}),Object(d.jsx)(c.a,{className:"justify-content-md-center",children:Object(d.jsx)(s.a,{md:"auto",style:{textAlign:"center"},children:"The author disclaims all responsibility for any loss or damage arising from the use of this website."})}),Object(d.jsx)("br",{}),Object(d.jsx)(c.a,{className:"justify-content-md-center",children:Object(d.jsx)(s.a,{md:7,children:Object(d.jsx)("p",{style:{textAlign:"center"},children:"This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V."})})})]})})}},58:function(e,t,a){},79:function(e,t,a){"use strict";function n(e,t){var a=new Date(e+"T"+t);return(a.getHours()<10?"0":"")+a.getHours()+":"+((a.getMinutes()<10?"0":"")+a.getMinutes())}function c(e){var t=e.split("-");return"".concat(t[2],"/").concat(t[1],"/").concat(t[0])}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}))}}]);
//# sourceMappingURL=9.bb34afaa.chunk.js.map