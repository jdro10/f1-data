(this["webpackJsonpf1-data"]=this["webpackJsonpf1-data"]||[]).push([[10],{143:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(48),a=s(45),r=s(50),i=s.n(r),j=s(51),d=s(31),l=s(93),o=s(92),h=s(38),b=s(36),x=s(37),O=s(74),u=s(111),m=s(3),g=function(){var e=Object(n.useState)(null!==sessionStorage.getItem("seasonStandingsInput")?sessionStorage.getItem("seasonStandingsInput"):"2021"),t=Object(d.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)(null),r=Object(d.a)(a,2),g=r[0],f=r[1],p=Object(n.useState)(null),S=Object(d.a)(p,2),y=S[0],N=S[1],v=Object(n.useState)(null),I=Object(d.a)(v,2),A=I[0],w=I[1],F=Object(n.useState)(!0),C=Object(d.a)(F,2),D=C[0],R=C[1],T=Object(n.useState)(!0),M=Object(d.a)(T,2),E=M[0],P=M[1];Object(n.useEffect)((function(){var e,t,n=sessionStorage.getItem("driverStandings"+s),c=sessionStorage.getItem("constructorStandings"+s),a=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,fetch("https://ergast.com/api/f1/".concat(s,"/constructorStandings.json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.StandingsTable.StandingsLists[0]?(w(e.MRData.StandingsTable.StandingsLists[0].ConstructorStandings),sessionStorage.setItem("constructorStandings"+s,JSON.stringify(e.MRData.StandingsTable.StandingsLists[0].ConstructorStandings))):w(null)}));case 3:P(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.next=3,fetch("https://ergast.com/api/f1/".concat(s,"/driverStandings.json")).then((function(e){return e.json()})).then((function(e){N(e.MRData.StandingsTable.StandingsLists[0].DriverStandings),sessionStorage.setItem("driverStandings"+s,JSON.stringify(e.MRData.StandingsTable.StandingsLists[0].DriverStandings)),R(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n&&c?(N(JSON.parse(sessionStorage.getItem("driverStandings"+s))),w(JSON.parse(sessionStorage.getItem("constructorStandings"+s))),R(!1),P(!1)):(a(),r()),e=1950,t=(new Date).getFullYear(),f(Array(t-e+1).fill().map((function(t,s){return e+s})).reverse())}),[s]);return Object(m.jsx)(h.a,{children:E||D?Object(m.jsx)(h.a,{style:{minHeight:"500px"},children:Object(m.jsxs)(b.a,{className:"justify-content-center text-center",children:[Object(m.jsx)("h1",{style:{marginBottom:"3%"},children:"FORMULA ONE"}),Object(m.jsx)(O.a,{animation:"border"})]})}):Object(m.jsxs)(h.a,{style:{minHeight:"700px"},children:[Object(m.jsx)(b.a,{className:"justify-content-center text-center",children:Object(m.jsx)(x.a,{children:Object(m.jsxs)("h1",{children:[s," FORMULA ONE"]})})}),Object(m.jsx)(b.a,{className:"justify-content-center text-center",style:{marginBottom:"2%"},children:Object(m.jsx)(x.a,{children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(u.a.Toggle,{variant:"dark",id:"dropdown-basic",children:s}),Object(m.jsx)(u.a.Menu,{style:{maxHeight:"500px",overflowY:"scroll"},children:g.map((function(e,t){return Object(m.jsx)(u.a.Item,{onClick:function(e){return t=e.target.textContent,c(t),void sessionStorage.setItem("seasonStandingsInput",t);var t},children:e},t)}))})]})})}),Object(m.jsxs)(b.a,{className:"justify-content-center text-center",children:[Object(m.jsx)(x.a,{md:"auto",children:Object(m.jsx)("h2",{children:"CONSTRUCTORS' STANDINGS"})}),Object(m.jsx)(b.a,{children:Object(m.jsx)(x.a,{children:Object(m.jsx)(l.a,{constructorsStandings:A})})}),Object(m.jsx)(x.a,{md:"auto",children:Object(m.jsx)("h2",{children:"DRIVERS' STANDINGS"})}),Object(m.jsx)(b.a,{children:Object(m.jsx)(x.a,{children:Object(m.jsx)(o.a,{driversStandings:y})})})]})]})})};t.default=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(a.a,{}),Object(m.jsx)(g,{}),Object(m.jsx)(c.a,{})]})}},40:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var n={British:"GB",Finnish:"FI",Dutch:"NL",Mexican:"MX",Spanish:"ES",Australian:"AU",Monegasque:"MC",French:"FR",German:"DE",Japanese:"JP",Canadian:"CA",Italian:"IT",Russian:"RU",Austrian:"AT",Swiss:"CH",American:"US",Thai:"TH","New Zealander":"NZ","New Zealand":"NZ",Swedish:"SE",Portuguese:"PT",Brazilian:"BR",Hungarian:"HU",Argentine:"AR",Belgian:"BE",Belgium:"BE","South African":"ZA",Danish:"DK",Liechtensteiner:"LI","Hong Kong":"HK",Irish:"IE",Chilean:"CL",Venezuelan:"VE",Colombian:"CO",Czech:"CZ",Malaysian:"MY",Indian:"IN",Polish:"PL",Indonesian:"ID",Rhodesian:"ZW",Russia:"RU",Korea:"KR"}},44:function(e,t,s){"use strict";s(0);var n={red_bull:"#0000FF",williams:"#1E90FF",mercedes:"#7FFFD4",mclaren:"#FFA500",aston_martin:"#008000",alphatauri:"#778899",alpine:"#4169E1",ferrari:"#FF0000",haas:"#FFFFFF",alfa:"#8B0000",renault:"#FFFF00",racing_point:"#FFC0CB"},c=s(3);t.a=function(e){var t=e.constructorId,s=e.height,a=void 0===s?"27px":s;return Object(c.jsx)("div",{style:{width:"3px",height:a,display:"table",margin:"0 auto",backgroundColor:n.hasOwnProperty(t)?n[t]:"#000000"}})}},45:function(e,t,s){"use strict";s(0);var n=s(38),c=s(71),a=(s(46),s(8)),r=s(63),i=s(39),j=s(3);t.a=function(){return Object(j.jsx)(c.a,{className:"navbar",bg:"dark",variant:"dark",children:Object(j.jsxs)(n.a,{children:[Object(j.jsx)(c.a.Brand,{children:Object(j.jsx)(i.a,{size:30})}),Object(j.jsx)(a.b,{to:"/",style:{textDecoration:"none"},children:Object(j.jsx)(c.a.Brand,{children:"Home"})}),Object(j.jsx)(a.b,{to:"/schedule",style:{textDecoration:"none"},children:Object(j.jsx)(c.a.Brand,{children:"Races"})}),Object(j.jsx)(a.b,{to:"/standings",style:{textDecoration:"none"},children:Object(j.jsx)(c.a.Brand,{children:"Standings"})}),Object(j.jsx)(c.a.Collapse,{className:"justify-content-end",children:Object(j.jsx)(c.a.Brand,{href:"https://github.com/jdro10","aria-label":"Github",children:Object(j.jsx)(r.a,{size:25})})})]})})}},46:function(e,t,s){},48:function(e,t,s){"use strict";s(0),s(49);var n=s(38),c=s(36),a=s(37),r=s(39),i=s(35),j=s(42),d=s(59),l=s(41),o=s(3);t.a=function(){return Object(o.jsx)("footer",{children:Object(o.jsxs)(n.a,{children:[Object(o.jsxs)(c.a,{className:"justify-content-center text-center",xs:"auto",id:"row",children:[Object(o.jsx)(a.a,{children:Object(o.jsx)(r.a,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(i.c,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(i.e,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(j.a,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(i.d,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(i.b,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(d.a,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(l.b,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(j.b,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(l.c,{size:40})})]}),Object(o.jsx)(c.a,{className:"justify-content-md-center",xs:"auto",id:"lastRow"}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:Object(o.jsx)("h5",{children:"API"})})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsxs)(a.a,{md:"auto",style:{textAlign:"center"},children:["All racing data is obtained through"," ",Object(o.jsx)("a",{href:"http://ergast.com/mrd/",style:{color:"white"},children:"Ergast API"}),"."]})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsxs)(a.a,{md:"auto",style:{textAlign:"center"},children:["Countries data is obtained through"," ",Object(o.jsx)("a",{href:"https://restcountries.eu/",style:{color:"white"},children:"REST Countries API"}),"."]})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsxs)(a.a,{md:"auto",style:{textAlign:"center"},children:["Some drivers, teams and circuits data are obtained through"," ",Object(o.jsx)("a",{href:"https://en.wikipedia.org/wiki/Main_Page",style:{color:"white"},children:"Wikipedia API"}),"."]})}),Object(o.jsx)("br",{}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:Object(o.jsx)("h5",{children:"Disclaimer"})})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:"This website was developed for learning and educational purposes only."})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:"Data displayed may be inaccurate. By using this website you acknowledge this."})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:"The author disclaims all responsibility for any loss or damage arising from the use of this website."})}),Object(o.jsx)("br",{}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:7,children:Object(o.jsx)("p",{style:{textAlign:"center"},children:"This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V."})})})]})})}},49:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){"use strict";var n=s(30),c=s(32),a=s(33),r=s.n(a),i=s(0),j=s(34),d=s(3),l=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],o=i.forwardRef((function(e,t){var s=e.bsPrefix,a=e.className,i=e.striped,o=e.bordered,h=e.borderless,b=e.hover,x=e.size,O=e.variant,u=e.responsive,m=Object(c.a)(e,l),g=Object(j.a)(s,"table"),f=r()(a,g,O&&"".concat(g,"-").concat(O),x&&"".concat(g,"-").concat(x),i&&"".concat(g,"-striped"),o&&"".concat(g,"-bordered"),h&&"".concat(g,"-borderless"),b&&"".concat(g,"-hover")),p=Object(d.jsx)("table",Object(n.a)(Object(n.a)({},m),{},{className:f,ref:t}));if(u){var S="".concat(g,"-responsive");return"string"===typeof u&&(S="".concat(S,"-").concat(u)),Object(d.jsx)("div",{className:S,children:p})}return p}));t.a=o},92:function(e,t,s){"use strict";s(0);var n=s(54),c=s(52),a=s(40),r=s(36),i=s(37),j=(s(53),s(44)),d=s(1),l=s(3),o={fontWeight:600,margin:"0px",padding:"0px",display:"inline"};t.a=function(e){var t=e.style,s=e.driversStandings,h=Object(d.g)();return Object(l.jsx)("div",{style:t,children:Object(l.jsxs)(n.a,{className:"table-hover",responsive:"xs",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"POS"}),Object(l.jsx)("th",{className:"hideXS",children:"NO"}),Object(l.jsx)("th",{children:"NAME/TEAM"}),Object(l.jsx)("th",{className:"hideXS",children:"WINS"}),Object(l.jsx)("th",{children:"POINTS"})]})}),Object(l.jsx)("tbody",{children:s.map((function(e,t){return Object(l.jsxs)("tr",{className:"align-middle",style:{cursor:"pointer"},onClick:function(){return t=e.Driver.driverId,void h.push("/driver/".concat(t));var t},children:[Object(l.jsx)("td",{children:e.position}),Object(l.jsx)("td",{className:"hideXS",children:e.Driver.permanentNumber}),Object(l.jsx)("td",{children:Object(l.jsxs)(r.a,{className:"g-0",children:[Object(l.jsx)(i.a,{xs:2,lg:1,className:"align-self-center",children:Object(l.jsx)(c.a,{countryCode:a.a[e.Driver.nationality].toLowerCase(),height:20})}),Object(l.jsx)(i.a,{xs:2,lg:1,children:Object(l.jsx)(j.a,{constructorId:e.Constructors[0].constructorId,height:"42px"})}),Object(l.jsxs)(i.a,{xs:8,className:"text-start",children:[Object(l.jsxs)(r.a,{children:[Object(l.jsx)(i.a,{className:"showXS",children:Object(l.jsx)("p",{style:o,children:e.Driver.familyName.toUpperCase()})}),Object(l.jsxs)(i.a,{className:"hideXS",children:[e.Driver.givenName," ",Object(l.jsx)("p",{style:o,children:e.Driver.familyName.toUpperCase()})]})]}),Object(l.jsx)(r.a,{children:Object(l.jsx)(i.a,{style:{fontSize:"13px"},children:e.Constructors[0].name})})]})]})}),Object(l.jsx)("td",{className:"hideXS",children:e.wins}),Object(l.jsx)("td",{children:e.points})]},t)}))})]})})}},93:function(e,t,s){"use strict";s(0);var n=s(54),c=s(52),a=s(40),r=s(36),i=s(37),j=(s(53),s(44)),d=s(3);t.a=function(e){var t=e.style,s=e.constructorsStandings;return Object(d.jsx)("div",{style:t,children:null!==s?Object(d.jsxs)(n.a,{responsive:"sm",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"POS"}),Object(d.jsx)("th",{children:"NAME"}),Object(d.jsx)("th",{className:"hideXS",children:"WINS"}),Object(d.jsx)("th",{children:"POINTS"})]})}),Object(d.jsx)("tbody",{children:s.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.position}),Object(d.jsx)("td",{children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(i.a,{xs:2,children:Object(d.jsx)(c.a,{countryCode:a.a[e.Constructor.nationality].toLowerCase(),height:20})}),Object(d.jsx)(i.a,{xs:2,lg:1,children:Object(d.jsx)(j.a,{constructorId:e.Constructor.constructorId})}),Object(d.jsx)(i.a,{xs:8,className:"text-start",children:Object(d.jsx)(r.a,{children:e.Constructor.name.toUpperCase()})})]})}),Object(d.jsx)("td",{className:"hideXS",children:e.wins}),Object(d.jsx)("td",{children:e.points})]},t)}))})]}):Object(d.jsx)(r.a,{className:"justify-content-center text-center",children:Object(d.jsxs)(i.a,{md:"auto",children:[Object(d.jsx)("h3",{children:"There's no constructors' standings data available for this season."}),Object(d.jsx)("br",{})]})})})}}}]);
//# sourceMappingURL=10.9b0a5f0d.chunk.js.map