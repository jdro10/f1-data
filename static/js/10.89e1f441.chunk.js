(this["webpackJsonpf1-data"]=this["webpackJsonpf1-data"]||[]).push([[10],{143:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(48),a=n(45),r=n(50),i=n.n(r),j=n(51),l=n(31),d=n(93),o=n(92),h=n(38),b=n(36),x=n(37),O=n(74),u=n(111),m=n(3),f=function(){var e=Object(s.useState)(null!==sessionStorage.getItem("seasonStandingsInput")?sessionStorage.getItem("seasonStandingsInput"):"2021"),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(null),r=Object(l.a)(a,2),f=r[0],g=r[1],p=Object(s.useState)(null),y=Object(l.a)(p,2),N=y[0],v=y[1],S=Object(s.useState)(null),A=Object(l.a)(S,2),I=A[0],w=A[1],F=Object(s.useState)(!0),C=Object(l.a)(F,2),R=C[0],D=C[1],T=Object(s.useState)(!0),E=Object(l.a)(T,2),B=E[0],M=E[1];Object(s.useEffect)((function(){var e,t,s=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,fetch("https://ergast.com/api/f1/".concat(n,"/constructorStandings.json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.StandingsTable.StandingsLists[0]?w(e.MRData.StandingsTable.StandingsLists[0].ConstructorStandings):w(null)}));case 3:M(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.next=3,fetch("https://ergast.com/api/f1/".concat(n,"/driverStandings.json")).then((function(e){return e.json()})).then((function(e){v(e.MRData.StandingsTable.StandingsLists[0].DriverStandings),D(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();s(),c(),e=1950,t=(new Date).getFullYear(),g(Array(t-e+1).fill().map((function(t,n){return e+n})).reverse())}),[n]);return Object(m.jsx)(h.a,{children:B||R?Object(m.jsx)(h.a,{style:{minHeight:"500px"},children:Object(m.jsxs)(b.a,{className:"justify-content-center text-center",children:[Object(m.jsx)("h1",{style:{marginBottom:"3%"},children:"FORMULA ONE"}),Object(m.jsx)(O.a,{animation:"border"})]})}):Object(m.jsxs)(h.a,{style:{minHeight:"700px"},children:[Object(m.jsx)(b.a,{className:"justify-content-center text-center",children:Object(m.jsx)(x.a,{children:Object(m.jsxs)("h1",{children:[n," FORMULA ONE"]})})}),Object(m.jsx)(b.a,{className:"justify-content-center text-center",style:{marginBottom:"2%"},children:Object(m.jsx)(x.a,{children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(u.a.Toggle,{variant:"dark",id:"dropdown-basic",children:n}),Object(m.jsx)(u.a.Menu,{style:{maxHeight:"500px",overflowY:"scroll"},children:f.map((function(e,t){return Object(m.jsx)(u.a.Item,{onClick:function(e){return t=e.target.textContent,c(t),void sessionStorage.setItem("seasonStandingsInput",t);var t},children:e},t)}))})]})})}),Object(m.jsxs)(b.a,{className:"justify-content-center text-center",children:[Object(m.jsx)(x.a,{md:"auto",children:Object(m.jsx)("h2",{children:"CONSTRUCTORS' STANDINGS"})}),Object(m.jsx)(b.a,{children:Object(m.jsx)(x.a,{children:Object(m.jsx)(d.a,{constructorsStandings:I})})}),Object(m.jsx)(x.a,{md:"auto",children:Object(m.jsx)("h2",{children:"DRIVERS' STANDINGS"})}),Object(m.jsx)(b.a,{children:Object(m.jsx)(x.a,{children:Object(m.jsx)(o.a,{driversStandings:N})})})]})]})})};t.default=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(a.a,{}),Object(m.jsx)(f,{}),Object(m.jsx)(c.a,{})]})}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var s={British:"GB",Finnish:"FI",Dutch:"NL",Mexican:"MX",Spanish:"ES",Australian:"AU",Monegasque:"MC",French:"FR",German:"DE",Japanese:"JP",Canadian:"CA",Italian:"IT",Russian:"RU",Austrian:"AT",Swiss:"CH",American:"US",Thai:"TH","New Zealander":"NZ","New Zealand":"NZ",Swedish:"SE",Portuguese:"PT",Brazilian:"BR",Hungarian:"HU",Argentine:"AR",Belgian:"BE",Belgium:"BE","South African":"ZA",Danish:"DK",Liechtensteiner:"LI","Hong Kong":"HK",Irish:"IE",Chilean:"CL",Venezuelan:"VE",Colombian:"CO",Czech:"CZ",Malaysian:"MY",Indian:"IN",Polish:"PL",Indonesian:"ID",Rhodesian:"ZW",Russia:"RU",Korea:"KR"}},44:function(e,t,n){"use strict";n(0);var s={red_bull:"#0000FF",williams:"#1E90FF",mercedes:"#7FFFD4",mclaren:"#FFA500",aston_martin:"#008000",alphatauri:"#778899",alpine:"#4169E1",ferrari:"#FF0000",haas:"#FFFFFF",alfa:"#8B0000",renault:"#FFFF00",racing_point:"#FFC0CB"},c=n(3);t.a=function(e){var t=e.constructorId,n=e.height,a=void 0===n?"27px":n;return Object(c.jsx)("div",{style:{width:"3px",height:a,display:"table",margin:"0 auto",backgroundColor:s.hasOwnProperty(t)?s[t]:"#000000"}})}},45:function(e,t,n){"use strict";n(0);var s=n(38),c=n(71),a=(n(46),n(8)),r=n(63),i=n(39),j=n(3);t.a=function(){return Object(j.jsx)(c.a,{className:"navbar",bg:"dark",variant:"dark",children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(c.a.Brand,{children:Object(j.jsx)(i.a,{size:30})}),Object(j.jsx)(a.b,{to:"/",style:{textDecoration:"none"},children:Object(j.jsx)(c.a.Brand,{children:"Home"})}),Object(j.jsx)(a.b,{to:"/schedule",style:{textDecoration:"none"},children:Object(j.jsx)(c.a.Brand,{children:"Races"})}),Object(j.jsx)(a.b,{to:"/standings",style:{textDecoration:"none"},children:Object(j.jsx)(c.a.Brand,{children:"Standings"})}),Object(j.jsx)(c.a.Collapse,{className:"justify-content-end",children:Object(j.jsx)(c.a.Brand,{href:"https://github.com/jdro10","aria-label":"Github",children:Object(j.jsx)(r.a,{size:25})})})]})})}},46:function(e,t,n){},48:function(e,t,n){"use strict";n(0),n(49);var s=n(38),c=n(36),a=n(37),r=n(39),i=n(35),j=n(42),l=n(59),d=n(41),o=n(3);t.a=function(){return Object(o.jsx)("footer",{children:Object(o.jsxs)(s.a,{children:[Object(o.jsxs)(c.a,{className:"justify-content-center text-center",xs:"auto",id:"row",children:[Object(o.jsx)(a.a,{children:Object(o.jsx)(r.a,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(i.c,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(i.e,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(j.a,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(i.d,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(i.b,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(l.a,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(d.b,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(j.b,{size:40})}),Object(o.jsx)(a.a,{children:Object(o.jsx)(d.c,{size:40})})]}),Object(o.jsx)(c.a,{className:"justify-content-md-center",xs:"auto",id:"lastRow"}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:Object(o.jsx)("h5",{children:"API"})})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsxs)(a.a,{md:"auto",style:{textAlign:"center"},children:["All racing data is obtained through"," ",Object(o.jsx)("a",{href:"http://ergast.com/mrd/",style:{color:"white"},children:"Ergast API"}),"."]})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsxs)(a.a,{md:"auto",style:{textAlign:"center"},children:["Countries' data is obtained through"," ",Object(o.jsx)("a",{href:"https://restcountries.eu/",style:{color:"white"},children:"REST Countries API"}),"."]})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsxs)(a.a,{md:"auto",style:{textAlign:"center"},children:["Some drivers' and circuits' information are obtained through"," ",Object(o.jsx)("a",{href:"https://en.wikipedia.org/w/api.php",style:{color:"white"},children:"Wikipedia API"}),"."]})}),Object(o.jsx)("br",{}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:Object(o.jsx)("h5",{children:"Disclaimer"})})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:"This website was developed for learning and educational purposes only."})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:"Data displayed may be inaccurate. By using this website you acknowledge this."})}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:"The author disclaims all responsibility for any loss or damage arising from the use of this website."})}),Object(o.jsx)("br",{}),Object(o.jsx)(c.a,{className:"justify-content-md-center",children:Object(o.jsx)(a.a,{md:7,children:Object(o.jsx)("p",{style:{textAlign:"center"},children:"This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V."})})})]})})}},49:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";var s=n(30),c=n(32),a=n(33),r=n.n(a),i=n(0),j=n(34),l=n(3),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],o=i.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.striped,o=e.bordered,h=e.borderless,b=e.hover,x=e.size,O=e.variant,u=e.responsive,m=Object(c.a)(e,d),f=Object(j.a)(n,"table"),g=r()(a,f,O&&"".concat(f,"-").concat(O),x&&"".concat(f,"-").concat(x),i&&"".concat(f,"-striped"),o&&"".concat(f,"-bordered"),h&&"".concat(f,"-borderless"),b&&"".concat(f,"-hover")),p=Object(l.jsx)("table",Object(s.a)(Object(s.a)({},m),{},{className:g,ref:t}));if(u){var y="".concat(f,"-responsive");return"string"===typeof u&&(y="".concat(y,"-").concat(u)),Object(l.jsx)("div",{className:y,children:p})}return p}));t.a=o},92:function(e,t,n){"use strict";n(0);var s=n(54),c=n(52),a=n(40),r=n(36),i=n(37),j=(n(53),n(44)),l=n(1),d=n(3),o={fontWeight:600,margin:"0px",padding:"0px",display:"inline"};t.a=function(e){var t=e.style,n=e.driversStandings,h=Object(l.g)();return Object(d.jsx)("div",{style:t,children:Object(d.jsxs)(s.a,{className:"table-hover",responsive:"xs",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"POS"}),Object(d.jsx)("th",{className:"hideXS",children:"NO"}),Object(d.jsx)("th",{children:"NAME/TEAM"}),Object(d.jsx)("th",{className:"hideXS",children:"WINS"}),Object(d.jsx)("th",{children:"POINTS"})]})}),Object(d.jsx)("tbody",{children:n.map((function(e,t){return Object(d.jsxs)("tr",{className:"align-middle",style:{cursor:"pointer"},onClick:function(){return t=e.Driver.driverId,void h.push("/driver/".concat(t));var t},children:[Object(d.jsx)("td",{children:e.position}),Object(d.jsx)("td",{className:"hideXS",children:e.Driver.permanentNumber}),Object(d.jsx)("td",{children:Object(d.jsxs)(r.a,{className:"g-0",children:[Object(d.jsx)(i.a,{xs:2,lg:1,className:"align-self-center",children:Object(d.jsx)(c.a,{countryCode:a.a[e.Driver.nationality].toLowerCase(),height:20})}),Object(d.jsx)(i.a,{xs:2,lg:1,children:Object(d.jsx)(j.a,{constructorId:e.Constructors[0].constructorId,height:"42px"})}),Object(d.jsxs)(i.a,{xs:8,className:"text-start",children:[Object(d.jsxs)(r.a,{children:[Object(d.jsx)(i.a,{className:"showXS",children:Object(d.jsx)("p",{style:o,children:e.Driver.familyName.toUpperCase()})}),Object(d.jsxs)(i.a,{className:"hideXS",children:[e.Driver.givenName," ",Object(d.jsx)("p",{style:o,children:e.Driver.familyName.toUpperCase()})]})]}),Object(d.jsx)(r.a,{children:Object(d.jsx)(i.a,{style:{fontSize:"13px"},children:e.Constructors[0].name})})]})]})}),Object(d.jsx)("td",{className:"hideXS",children:e.wins}),Object(d.jsx)("td",{children:e.points})]},t)}))})]})})}},93:function(e,t,n){"use strict";n(0);var s=n(54),c=n(52),a=n(40),r=n(36),i=n(37),j=(n(53),n(44)),l=n(3);t.a=function(e){var t=e.style,n=e.constructorsStandings;return Object(l.jsx)("div",{style:t,children:null!==n?Object(l.jsxs)(s.a,{responsive:"sm",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"POS"}),Object(l.jsx)("th",{children:"NAME"}),Object(l.jsx)("th",{className:"hideXS",children:"WINS"}),Object(l.jsx)("th",{children:"POINTS"})]})}),Object(l.jsx)("tbody",{children:n.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.position}),Object(l.jsx)("td",{children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(i.a,{xs:2,children:Object(l.jsx)(c.a,{countryCode:a.a[e.Constructor.nationality].toLowerCase(),height:20})}),Object(l.jsx)(i.a,{xs:2,lg:1,children:Object(l.jsx)(j.a,{constructorId:e.Constructor.constructorId})}),Object(l.jsx)(i.a,{xs:8,className:"text-start",children:Object(l.jsx)(r.a,{children:e.Constructor.name.toUpperCase()})})]})}),Object(l.jsx)("td",{className:"hideXS",children:e.wins}),Object(l.jsx)("td",{children:e.points})]},t)}))})]}):Object(l.jsx)(r.a,{className:"justify-content-center text-center",children:Object(l.jsxs)(i.a,{md:"auto",children:[Object(l.jsx)("h3",{children:"There's no constructors' standings data available for this season."}),Object(l.jsx)("br",{})]})})})}}}]);
//# sourceMappingURL=10.89e1f441.chunk.js.map