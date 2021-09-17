(this["webpackJsonpf1-data"]=this["webpackJsonpf1-data"]||[]).push([[10],{100:function(e,t,n){"use strict";var s=n(0),c=n(65),a=n(61),r=n(50),i=n(43),j=n(44),l=(n(51),n(54)),d=n(21),o=n(2);t.a=function(e){var t=e.style,n=e.constructorsStandings,h=Object(s.useContext)(d.a).theme;return Object(o.jsx)("div",{style:t,children:null!==n?Object(o.jsxs)(c.a,{className:"standings-table",responsive:"sm",variant:h,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"POS"}),Object(o.jsx)("th",{children:"NAME"}),Object(o.jsx)("th",{className:"hideXS",children:"WINS"}),Object(o.jsx)("th",{children:"POINTS"})]})}),Object(o.jsx)("tbody",{children:n.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.position}),Object(o.jsx)("td",{children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(j.a,{xs:2,children:Object(o.jsx)(a.a,{countryCode:r.a[e.Constructor.nationality].toLowerCase(),height:20})}),Object(o.jsx)(j.a,{xs:2,lg:1,children:Object(o.jsx)(l.a,{constructorId:e.Constructor.constructorId})}),Object(o.jsx)(j.a,{xs:8,className:"text-start",children:Object(o.jsx)(i.a,{children:e.Constructor.name.toUpperCase()})})]})}),Object(o.jsx)("td",{className:"hideXS",children:e.wins}),Object(o.jsx)("td",{children:e.points})]},t)}))})]}):Object(o.jsx)(i.a,{className:"justify-content-center text-center",children:Object(o.jsxs)(j.a,{md:"auto",children:[Object(o.jsx)("h3",{children:"There's no constructors' standings data available for this season."}),Object(o.jsx)("br",{})]})})})}},149:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(57),a=n(55),r=n(59),i=n.n(r),j=n(60),l=n(20),d=n(100),o=n(99),h=n(48),b=n(43),x=n(44),O=n(83),u=n(118),m=n(21),g=n(2),f=function(){var e=Object(s.useState)(null!==sessionStorage.getItem("seasonStandingsInput")?sessionStorage.getItem("seasonStandingsInput"):"2021"),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(null),r=Object(l.a)(a,2),f=r[0],p=r[1],y=Object(s.useState)(null),N=Object(l.a)(y,2),S=N[0],v=N[1],A=Object(s.useState)(null),C=Object(l.a)(A,2),I=C[0],F=C[1],w=Object(s.useState)(!0),D=Object(l.a)(w,2),R=D[0],T=D[1],E=Object(s.useState)(!0),k=Object(l.a)(E,2),M=k[0],B=k[1],z=Object(s.useContext)(m.a).theme;Object(s.useEffect)((function(){var e,t,s=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),e.next=3,fetch("https://ergast.com/api/f1/".concat(n,"/constructorStandings.json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.StandingsTable.StandingsLists[0]?F(e.MRData.StandingsTable.StandingsLists[0].ConstructorStandings):F(null)}));case 3:B(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.next=3,fetch("https://ergast.com/api/f1/".concat(n,"/driverStandings.json")).then((function(e){return e.json()})).then((function(e){v(e.MRData.StandingsTable.StandingsLists[0].DriverStandings),T(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();s(),c(),e=1950,t=(new Date).getFullYear(),p(Array(t-e+1).fill().map((function(t,n){return e+n})).reverse())}),[n]);return Object(g.jsx)(g.Fragment,{children:M||R?Object(g.jsx)(h.a,{style:{minHeight:"500px"},children:Object(g.jsxs)(b.a,{className:"justify-content-center text-center",children:[Object(g.jsx)("h1",{style:{marginBottom:"3%"},children:"FORMULA ONE"}),Object(g.jsx)(O.a,{animation:"border"})]})}):Object(g.jsxs)(h.a,{children:[Object(g.jsx)(b.a,{className:"justify-content-center text-center",children:Object(g.jsx)(x.a,{children:Object(g.jsxs)("h1",{children:[n," FORMULA ONE"]})})}),Object(g.jsx)(b.a,{className:"justify-content-center text-center",style:{marginBottom:"2%"},children:Object(g.jsx)(x.a,{children:Object(g.jsxs)(u.a,{children:[Object(g.jsx)(u.a.Toggle,{variant:"dark"===z?"light":"dark ",id:"dropdown-basic",children:n}),Object(g.jsx)(u.a.Menu,{style:{maxHeight:"500px",overflowY:"scroll"},children:f.map((function(e,t){return Object(g.jsx)(u.a.Item,{onClick:function(e){return t=e.target.textContent,c(t),void sessionStorage.setItem("seasonStandingsInput",t);var t},children:e},t)}))})]})})}),Object(g.jsxs)(b.a,{className:"justify-content-center text-center",children:[Object(g.jsx)("h2",{children:"CONSTRUCTORS' STANDINGS"}),Object(g.jsx)(d.a,{constructorsStandings:I}),Object(g.jsx)("h2",{children:"DRIVERS' STANDINGS"}),Object(g.jsx)(o.a,{driversStandings:S})]})]})})};t.default=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(a.a,{}),Object(g.jsx)(f,{}),Object(g.jsx)(c.a,{})]})}},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var s={British:"GB",Finnish:"FI",Dutch:"NL",Mexican:"MX",Spanish:"ES",Australian:"AU",Monegasque:"MC",French:"FR",German:"DE",Japanese:"JP",Canadian:"CA",Italian:"IT",Russian:"RU",Austrian:"AT",Swiss:"CH",American:"US",Thai:"TH","New Zealander":"NZ","New Zealand":"NZ",Swedish:"SE",Portuguese:"PT",Brazilian:"BR",Hungarian:"HU",Argentine:"AR",Belgian:"BE",Belgium:"BE","South African":"ZA",Danish:"DK",Liechtensteiner:"LI","Hong Kong":"HK",Irish:"IE",Chilean:"CL",Venezuelan:"VE",Colombian:"CO",Czech:"CZ",Malaysian:"MY",Indian:"IN",Polish:"PL",Indonesian:"ID",Rhodesian:"ZW",Russia:"RU",Korea:"KR"}},51:function(e,t,n){},54:function(e,t,n){"use strict";n(0);var s={red_bull:"#0000FF",williams:"#1E90FF",mercedes:"#7FFFD4",mclaren:"#FFA500",aston_martin:"#008000",alphatauri:"#778899",alpine:"#4169E1",ferrari:"#FF0000",haas:"#FFFFFF",alfa:"#8B0000",renault:"#FFFF00",racing_point:"#FFC0CB"},c=n(2);t.a=function(e){var t=e.constructorId,n=e.height,a=void 0===n?"27px":n;return Object(c.jsx)("div",{style:{width:"3px",height:a,display:"table",margin:"0 auto",backgroundColor:s.hasOwnProperty(t)?s[t]:"#000000"}})}},55:function(e,t,n){"use strict";var s=n(0),c=n(21),a=n(48),r=n(43),i=n(44),j=n(79),l=(n(56),n(8)),d=n(72),o=n(49),h=n(80),b=n(2);t.a=function(){var e=Object(s.useContext)(c.a),t=e.theme,n=e.setTheme;return Object(s.useEffect)((function(){localStorage.setItem("theme",t)}),[t]),Object(b.jsx)(j.a,{className:"navbar",bg:"dark",variant:"dark",children:Object(b.jsxs)(a.a,{style:{minHeight:"40px"},children:[Object(b.jsx)(l.b,{to:"/",style:{textDecoration:"none"},children:Object(b.jsx)(j.a.Brand,{children:Object(b.jsx)(o.a,{size:30})})}),Object(b.jsx)(l.b,{to:"/schedule",style:{textDecoration:"none"},children:Object(b.jsx)(j.a.Brand,{children:"RACES"})}),Object(b.jsx)(l.b,{to:"/standings",style:{textDecoration:"none"},children:Object(b.jsx)(j.a.Brand,{children:"STANDINGS"})}),Object(b.jsx)(j.a.Collapse,{className:"justify-content-end",children:Object(b.jsxs)(r.a,{className:"g-2",children:[Object(b.jsx)(i.a,{style:{marginTop:"15px"},children:Object(b.jsx)(h.a,{onChange:function(){return function(){var e="light"===t?"dark":"light";n(e),localStorage.setItem("theme",e)}()},checked:"dark"===t,size:20})}),Object(b.jsx)(i.a,{children:Object(b.jsx)(j.a.Brand,{href:"https://github.com/jdro10","aria-label":"Github",children:Object(b.jsx)(d.a,{size:25})})})]})})]})})}},56:function(e,t,n){},57:function(e,t,n){"use strict";n(0),n(58);var s=n(48),c=n(43),a=n(44),r=n(49),i=n(46),j=n(53),l=n(68),d=n(52),o=n(2);t.a=function(){return Object(o.jsx)("footer",{children:Object(o.jsxs)(s.a,{children:[Object(o.jsxs)(c.a,{className:"justify-content-center text-center",xs:"auto",id:"row",children:[Object(o.jsx)(a.a,{children:Object(o.jsx)(r.a,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(i.c,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(i.e,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(j.a,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(i.d,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(i.b,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(l.a,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(d.b,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(j.b,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(d.c,{size:40})})]}),Object(o.jsx)(c.a,{className:"justify-content-md-center",xs:"auto",id:"lastRow"}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:Object(o.jsx)("h5",{children:"API"})})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsxs)(a.a,{md:"auto",style:{textAlign:"center"},children:["All racing data is obtained through"," ",Object(o.jsx)("a",{href:"http://ergast.com/mrd/",style:{color:"white"},children:"Ergast API"}),"."]})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsxs)(a.a,{md:"auto",style:{textAlign:"center"},children:["Countries' data is obtained through"," ",Object(o.jsx)("a",{href:"https://restcountries.eu/",style:{color:"white"},children:"REST Countries API"}),"."]})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsxs)(a.a,{md:"auto",style:{textAlign:"center"},children:["Some drivers' and circuits' information are obtained through"," ",Object(o.jsx)("a",{href:"https://en.wikipedia.org/w/api.php",style:{color:"white"},children:"Wikipedia API"}),"."]})}),Object(o.jsx)("br",{}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:Object(o.jsx)("h5",{children:"Disclaimer"})})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:"This website was developed for learning and educational purposes only."})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:"Data displayed may be inaccurate. By using this website you acknowledge this."})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:"The author disclaims all responsibility for any loss or damage arising from the use of this website."})}),Object(o.jsx)("br",{}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:7,children:Object(o.jsx)("p",{style:{textAlign:"center"},children:"This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V."})})})]})})}},58:function(e,t,n){},99:function(e,t,n){"use strict";var s=n(0),c=n(65),a=n(61),r=n(50),i=n(43),j=n(44),l=(n(51),n(54)),d=n(1),o=n(21),h=n(2),b={fontWeight:600,margin:"0px",padding:"0px",display:"inline"};t.a=function(e){var t=e.style,n=e.driversStandings,x=Object(d.g)(),O=Object(s.useContext)(o.a).theme;return Object(h.jsx)("div",{style:t,children:Object(h.jsxs)(c.a,{className:"table-hover standings-table",responsive:"xs",variant:O,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"POS"}),Object(h.jsx)("th",{className:"hideXS",children:"NO"}),Object(h.jsx)("th",{children:"NAME/TEAM"}),Object(h.jsx)("th",{className:"hideXS",children:"WINS"}),Object(h.jsx)("th",{children:"POINTS"})]})}),Object(h.jsx)("tbody",{children:n.map((function(e,t){return Object(h.jsxs)("tr",{className:"align-middle",style:{cursor:"pointer"},onClick:function(){return t=e.Driver.driverId,void x.push("/driver/".concat(t));var t},children:[Object(h.jsx)("td",{children:e.position}),Object(h.jsx)("td",{className:"hideXS",children:e.Driver.permanentNumber}),Object(h.jsx)("td",{children:Object(h.jsxs)(i.a,{className:"g-0",children:[Object(h.jsx)(j.a,{xs:2,lg:1,className:"align-self-center",children:Object(h.jsx)(a.a,{countryCode:r.a[e.Driver.nationality].toLowerCase(),height:20})}),Object(h.jsx)(j.a,{xs:2,lg:1,children:Object(h.jsx)(l.a,{constructorId:e.Constructors[0].constructorId,height:"42px"})}),Object(h.jsxs)(j.a,{xs:8,className:"text-start",children:[Object(h.jsxs)(i.a,{children:[Object(h.jsx)(j.a,{className:"showXS",children:Object(h.jsx)("p",{style:b,children:e.Driver.familyName.toUpperCase()})}),Object(h.jsxs)(j.a,{className:"hideXS",children:[e.Driver.givenName," ",Object(h.jsx)("p",{style:b,children:e.Driver.familyName.toUpperCase()})]})]}),Object(h.jsx)(i.a,{children:Object(h.jsx)(j.a,{style:{fontSize:"13px"},children:e.Constructors[0].name})})]})]})}),Object(h.jsx)("td",{className:"hideXS",children:e.wins}),Object(h.jsx)("td",{children:e.points})]},t)}))})]})})}}}]);
//# sourceMappingURL=10.6a2d7b68.chunk.js.map