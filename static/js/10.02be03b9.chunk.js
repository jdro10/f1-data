(this["webpackJsonpf1-data"]=this["webpackJsonpf1-data"]||[]).push([[10],{118:function(e,t,n){"use strict";var s=n(0),a=n(64),c=n(59),i=n(50),r=n(43),j=n(44),l=(n(52),n(54)),o=n(1),d=n(21),h=n(2),b={fontWeight:600,margin:"0px",padding:"0px",display:"inline"};t.a=function(e){var t=e.style,n=e.driversStandings,x=Object(o.g)(),u=Object(s.useContext)(d.a).theme;return Object(h.jsx)("div",{style:t,children:Object(h.jsxs)(a.a,{className:"table-hover table-striped standings-table",responsive:"xs",variant:u,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"POS"}),Object(h.jsx)("th",{className:"hideXS",children:"NO"}),Object(h.jsx)("th",{children:"NAME/TEAM"}),Object(h.jsx)("th",{className:"hideXS",children:"WINS"}),Object(h.jsx)("th",{children:"POINTS"})]})}),Object(h.jsx)("tbody",{children:n.map((function(e,t){return Object(h.jsxs)("tr",{className:"align-middle",style:{cursor:"pointer"},onClick:function(){return t=e.Driver.driverId,void x.push("/driver/".concat(t));var t},children:[Object(h.jsx)("td",{children:e.position}),Object(h.jsx)("td",{className:"hideXS",children:e.Driver.permanentNumber}),Object(h.jsx)("td",{children:Object(h.jsxs)(r.a,{className:"g-0",children:[Object(h.jsx)(j.a,{xs:2,lg:1,className:"align-self-center",children:Object(h.jsx)(c.a,{countryCode:void 0!==i.a[e.Driver.nationality]?i.a[e.Driver.nationality].toLowerCase():null,height:20})}),Object(h.jsx)(j.a,{xs:2,lg:1,children:Object(h.jsx)(l.a,{constructorId:e.Constructors[0].constructorId,height:"42px"})}),Object(h.jsxs)(j.a,{xs:8,className:"text-start",children:[Object(h.jsxs)(r.a,{children:[Object(h.jsx)(j.a,{className:"showXS",children:Object(h.jsx)("p",{style:b,children:e.Driver.familyName.toUpperCase()})}),Object(h.jsxs)(j.a,{className:"hideXS",children:[e.Driver.givenName," ",Object(h.jsx)("p",{style:b,children:e.Driver.familyName.toUpperCase()})]})]}),Object(h.jsx)(r.a,{children:Object(h.jsx)(j.a,{style:{fontSize:"13px"},children:e.Constructors[0].name})})]})]})}),Object(h.jsx)("td",{className:"hideXS",children:e.wins}),Object(h.jsx)("td",{children:e.points})]},t)}))})]})})}},119:function(e,t,n){"use strict";var s=n(0),a=n(64),c=n(59),i=n(50),r=n(43),j=n(44),l=(n(52),n(54)),o=n(21),d=n(2),h={fontWeight:600,margin:"0px",padding:"0px",display:"inline"};t.a=function(e){var t=e.style,n=e.constructorsStandings,b=Object(s.useContext)(o.a).theme;return Object(d.jsx)("div",{style:t,children:null!==n?Object(d.jsxs)(a.a,{className:"table-hover standings-table table-striped",responsive:"sm",variant:b,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"POS"}),Object(d.jsx)("th",{children:"NAME"}),Object(d.jsx)("th",{className:"hideXS",children:"WINS"}),Object(d.jsx)("th",{children:"POINTS"})]})}),Object(d.jsx)("tbody",{children:n.map((function(e,t){return Object(d.jsxs)("tr",{style:{cursor:"pointer"},onClick:function(){return t=e.Constructor.url,void window.open(t,"_blank");var t},children:[Object(d.jsx)("td",{children:e.position}),Object(d.jsx)("td",{children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(j.a,{xs:2,children:Object(d.jsx)(c.a,{countryCode:i.a[e.Constructor.nationality].toLowerCase(),height:20})}),Object(d.jsx)(j.a,{xs:2,lg:1,children:Object(d.jsx)(l.a,{constructorId:e.Constructor.constructorId})}),Object(d.jsx)(j.a,{xs:8,className:"text-start",children:Object(d.jsx)(r.a,{children:Object(d.jsx)("p",{style:h,children:e.Constructor.name.toUpperCase()})})})]})}),Object(d.jsx)("td",{className:"hideXS",children:e.wins}),Object(d.jsx)("td",{children:e.points})]},t)}))})]}):Object(d.jsx)(r.a,{className:"justify-content-center text-center",children:Object(d.jsxs)(j.a,{md:"auto",children:[Object(d.jsx)("h3",{children:"There's no constructors' standings data available for this season."}),Object(d.jsx)("br",{})]})})})}},315:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(57),c=n(55),i=n(71),r=n.n(i),j=n(72),l=n(20),o=n(119),d=n(118),h=n(48),b=n(43),x=n(44),u=n(90),O=n(170),m=n(2),g=function(){var e=Object(s.useState)(null!==sessionStorage.getItem("seasonStandingsInput")?sessionStorage.getItem("seasonStandingsInput"):"2021"),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(null),i=Object(l.a)(c,2),g=i[0],f=i[1],p=Object(s.useState)(null),y=Object(l.a)(p,2),S=y[0],N=y[1],v=Object(s.useState)(null),A=Object(l.a)(v,2),C=A[0],I=A[1],F=Object(s.useState)(!0),w=Object(l.a)(F,2),D=w[0],R=w[1],M=Object(s.useState)(!0),T=Object(l.a)(M,2),B=T[0],E=T[1];Object(s.useEffect)((function(){var e,t,s=function(){var e=Object(j.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,fetch("https://ergast.com/api/f1/".concat(n,"/constructorStandings.json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.StandingsTable.StandingsLists[0]?I(e.MRData.StandingsTable.StandingsLists[0].ConstructorStandings):I(null)}));case 3:E(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(j.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.next=3,fetch("https://ergast.com/api/f1/".concat(n,"/driverStandings.json?limit=50")).then((function(e){return e.json()})).then((function(e){N(e.MRData.StandingsTable.StandingsLists[0].DriverStandings),R(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();s(),a(),e=1950,t=(new Date).getFullYear(),f(Array(t-e+1).fill().map((function(t,n){return e+n})).reverse())}),[n]);return Object(m.jsx)(m.Fragment,{children:B||D?Object(m.jsx)(h.a,{style:{minHeight:"500px"},children:Object(m.jsxs)(b.a,{className:"justify-content-center text-center",children:[Object(m.jsxs)("h1",{children:[n," FORMULA 1"]}),Object(m.jsx)(u.a,{animation:"border"})]})}):Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{className:"justify-content-center text-center",children:Object(m.jsx)(x.a,{children:Object(m.jsxs)("h1",{children:[n," FORMULA 1"]})})}),Object(m.jsx)(b.a,{className:"justify-content-center text-center",style:{marginBottom:"2%"},children:Object(m.jsx)(x.a,{children:Object(m.jsxs)(O.a,{children:[Object(m.jsx)(O.a.Toggle,{variant:"danger",className:"red-btn",id:"dropdown-basic",children:n}),Object(m.jsx)(O.a.Menu,{style:{maxHeight:"500px",overflowY:"scroll"},children:g.map((function(e,t){return Object(m.jsx)(O.a.Item,{onClick:function(e){return t=e.target.textContent,a(t),void sessionStorage.setItem("seasonStandingsInput",t);var t},children:e},t)}))})]})})}),Object(m.jsxs)(b.a,{className:"justify-content-center text-center",children:[Object(m.jsx)("h2",{children:"CONSTRUCTORS' STANDINGS"}),Object(m.jsx)(o.a,{constructorsStandings:C}),Object(m.jsx)("h2",{children:"DRIVERS' STANDINGS"}),Object(m.jsx)(d.a,{driversStandings:S})]})]})})};t.default=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(c.a,{}),Object(m.jsx)(g,{}),Object(m.jsx)(a.a,{})]})}},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var s={British:"GB",Finnish:"FI",Dutch:"NL",Mexican:"MX",Spanish:"ES",Australian:"AU",Monegasque:"MC",French:"FR",German:"DE",Japanese:"JP",Canadian:"CA",Italian:"IT",Russian:"RU",Austrian:"AT",Swiss:"CH",American:"US",Thai:"TH","New Zealander":"NZ","New Zealand":"NZ",Swedish:"SE",Portuguese:"PT",Brazilian:"BR",Hungarian:"HU",Argentine:"AR",Belgian:"BE",Belgium:"BE","South African":"ZA",Danish:"DK",Liechtensteiner:"LI","Hong Kong":"HK",Irish:"IE",Chilean:"CL",Venezuelan:"VE",Colombian:"CO",Czech:"CZ",Malaysia:"MY",Indian:"IN",Polish:"PL",Indonesian:"ID",Rhodesian:"ZW",Russia:"RU",Korea:"KR",Argentina:"AR",UAE:"AE",Australia:"AU",Austria:"AT",Azerbaijan:"AZ",Bahrain:"BH",Brazil:"BR",Canada:"CA",China:"CN",France:"FR",Germany:"DE",Hungary:"HU",India:"IN",Italy:"IT",Japan:"JP",Malyasia:"MY",Malaysian:"MY",Mexico:"MX",Monaco:"MC",Morocco:"MA",Netherlands:"NL",Portugal:"PT","Saudi Arabia":"SA",Singapore:"SG","South Africa":"ZA",Spain:"ES",Sweden:"SE",Switzerland:"CH",Turkey:"TR",UK:"GB",USA:"US",Qatar:"QA"}},52:function(e,t,n){},54:function(e,t,n){"use strict";n(0);var s={red_bull:"#0600EF",williams:"#005AFF",mercedes:"#00D2BE",mclaren:"#FF8700",aston_martin:"#006F62",alphatauri:"#2B4562",alpine:"#0090FF",ferrari:"#DC0000",haas:"#FFFFFF",alfa:"#900000",renault:"#FFF500",racing_point:"#FFC0CB",toro_rosso:"#469BFF",force_india:"#F596C8",sauber:"#9B0000",manor:"#323232",lotus_f1:"#FFB800",marussia:"#6E0000",caterham:"#0b361f"},a=n(2);t.a=function(e){var t=e.constructorId,n=e.height,c=void 0===n?"27px":n;return Object(a.jsx)("div",{style:{width:"3px",height:c,display:"table",margin:"0 auto",backgroundColor:s.hasOwnProperty(t)?s[t]:"#000000"}})}},55:function(e,t,n){"use strict";var s=n(0),a=n(21),c=n(48),i=n(43),r=n(44),j=n(86),l=(n(56),n(8)),o=n(78),d=n(49),h=n(87),b=n(2);t.a=function(){var e=Object(s.useContext)(a.a),t=e.theme,n=e.setTheme;return Object(s.useEffect)((function(){localStorage.setItem("theme",t)}),[t]),Object(b.jsx)(j.a,{className:"navbar",bg:"dark",variant:"dark",children:Object(b.jsxs)(c.a,{style:{minHeight:"40px"},children:[Object(b.jsx)(l.b,{to:"/",style:{textDecoration:"none"},children:Object(b.jsx)(j.a.Brand,{className:"icon-link",children:Object(b.jsx)(d.a,{size:30})})}),Object(b.jsx)(l.b,{to:"/schedule",style:{textDecoration:"none"},children:Object(b.jsx)(j.a.Brand,{className:"text-link",children:"RACES"})}),Object(b.jsx)(l.b,{to:"/standings",style:{textDecoration:"none"},children:Object(b.jsx)(j.a.Brand,{className:"text-link",children:"STANDINGS"})}),Object(b.jsx)(j.a.Collapse,{className:"justify-content-end",children:Object(b.jsxs)(i.a,{className:"g-2",children:[Object(b.jsx)(r.a,{style:{marginTop:"15px"},children:Object(b.jsx)(h.a,{onChange:function(){return function(){var e="light"===t?"dark":"light";n(e),localStorage.setItem("theme",e)}()},checked:"dark"===t,size:20})}),Object(b.jsx)(r.a,{children:Object(b.jsx)(j.a.Brand,{className:"icon-link",href:"https://github.com/jdro10","aria-label":"Github",children:Object(b.jsx)(o.a,{size:25})})})]})})]})})}},56:function(e,t,n){},57:function(e,t,n){"use strict";n(0),n(58);var s=n(48),a=n(43),c=n(44),i=n(49),r=n(46),j=n(53),l=n(70),o=n(51),d=n(2);t.a=function(){return Object(d.jsx)("footer",{children:Object(d.jsxs)(s.a,{children:[Object(d.jsxs)(a.a,{className:"justify-content-center text-center",xs:"auto",id:"row",children:[Object(d.jsx)(c.a,{children:Object(d.jsx)(i.a,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(r.b,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(r.d,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(j.a,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(r.c,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(r.a,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(l.a,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(o.b,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(j.b,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(o.c,{size:40})})]}),Object(d.jsx)(a.a,{className:"justify-content-md-center",xs:"auto",id:"lastRow"}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"API"})})}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsxs)(c.a,{md:"auto",style:{textAlign:"center"},children:["All racing data is obtained through"," ",Object(d.jsx)("a",{href:"http://ergast.com/mrd/",style:{color:"white"},children:"Ergast API"}),"."]})}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsxs)(c.a,{md:"auto",style:{textAlign:"center"},children:["Some drivers' and circuits' information are obtained through"," ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/w/api.php",style:{color:"white"},children:"Wikipedia API"}),"."]})}),Object(d.jsx)("br",{}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"DISCLAIMER"})})}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:"auto",style:{textAlign:"center"},children:"This website was developed for learning and educational purposes only."})}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:"auto",style:{textAlign:"center"},children:"Data displayed may be inaccurate. By using this website you acknowledge this."})}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:"auto",style:{textAlign:"center"},children:"The author disclaims all responsibility for any loss or damage arising from the use of this website."})}),Object(d.jsx)("br",{}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:7,children:Object(d.jsx)("p",{style:{textAlign:"center"},children:"This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V."})})})]})})}},58:function(e,t,n){}}]);
//# sourceMappingURL=10.02be03b9.chunk.js.map