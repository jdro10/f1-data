(this["webpackJsonpf1-data"]=this["webpackJsonpf1-data"]||[]).push([[10],{118:function(e,t,n){"use strict";var s=n(0),a=n(62),c=n(59),r=n(50),i=n(43),l=n(44),j=(n(52),n(54)),o=n(1),d=n(21),h=n(2),b={fontWeight:600,margin:"0px",padding:"0px",display:"inline"};t.a=function(e){var t=e.style,n=e.driversStandings,u=Object(o.g)(),x=Object(s.useContext)(d.a).theme;return Object(h.jsx)("div",{style:t,children:Object(h.jsxs)(a.a,{className:"table-hover table-striped standings-table",responsive:"xs",variant:x,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"POS"}),Object(h.jsx)("th",{className:"hideXS",children:"NO"}),Object(h.jsx)("th",{children:"NAME/TEAM"}),Object(h.jsx)("th",{className:"hideXS",children:"WINS"}),Object(h.jsx)("th",{children:"POINTS"})]})}),Object(h.jsx)("tbody",{children:n.map((function(e,t){return Object(h.jsxs)("tr",{className:"align-middle",style:{cursor:"pointer"},onClick:function(){return t=e.Driver.driverId,void u.push("/driver/".concat(t));var t},children:[Object(h.jsx)("td",{children:e.position}),Object(h.jsx)("td",{className:"hideXS",children:e.Driver.permanentNumber}),Object(h.jsx)("td",{children:Object(h.jsxs)(i.a,{className:"g-0",children:[Object(h.jsx)(l.a,{xs:2,lg:1,className:"align-self-center",children:Object(h.jsx)(c.a,{countryCode:void 0!==r.a[e.Driver.nationality]?r.a[e.Driver.nationality].toLowerCase():null,height:20})}),Object(h.jsx)(l.a,{xs:2,lg:1,children:Object(h.jsx)(j.a,{constructorId:e.Constructors[0].constructorId,height:"42px"})}),Object(h.jsxs)(l.a,{xs:8,className:"text-start",children:[Object(h.jsxs)(i.a,{children:[Object(h.jsx)(l.a,{className:"showXS",children:Object(h.jsx)("p",{style:b,children:e.Driver.familyName.toUpperCase()})}),Object(h.jsxs)(l.a,{className:"hideXS",children:[e.Driver.givenName," ",Object(h.jsx)("p",{style:b,children:e.Driver.familyName.toUpperCase()})]})]}),Object(h.jsx)(i.a,{children:Object(h.jsx)(l.a,{style:{fontSize:"13px"},children:e.Constructors[0].name})})]})]})}),Object(h.jsx)("td",{className:"hideXS",children:e.wins}),Object(h.jsx)("td",{children:e.points})]},t)}))})]})})}},140:function(e,t,n){"use strict";var s=n(0),a=n(62),c=n(59),r=n(50),i=n(43),l=n(44),j=(n(52),n(54)),o={2020:{red_bull:["Verstappen","Albon"],williams:["Russell","Latifi"],mercedes:["Hamilton","Bottas"],mclaren:["Norris","Sainz"],racing_point:["P\xe9rez","Stroll"],alphatauri:["Gasly","Kvyat"],renault:["Ricciardo","Ocon"],ferrari:["Vettel","Leclerc"],haas:["Grosjean","Magnussen"],alfa:["R\xe4ikk\xf6nen","Giovinazzi"]},2021:{red_bull:["Verstappen","P\xe9rez"],williams:["Russell","Latifi"],mercedes:["Hamilton","Bottas"],mclaren:["Norris","Ricciardo"],aston_martin:["Vettel","Stroll"],alphatauri:["Gasly","Tsunoda"],alpine:["Alonso","Ocon"],ferrari:["Leclerc","Sainz"],haas:["Schumacher","Mazepin"],alfa:["R\xe4ikk\xf6nen","Giovinazzi"]}},d=n(21),h=n(2),b={fontWeight:600,margin:"0px",padding:"0px",display:"inline"};t.a=function(e){var t=e.style,n=e.constructorsStandings,u=e.season,x=Object(s.useContext)(d.a).theme;return Object(h.jsx)("div",{style:t,children:null!==n?Object(h.jsxs)(a.a,{className:"table-hover standings-table table-striped",responsive:"sm",variant:x,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"POS"}),Object(h.jsx)("th",{children:"NAME"}),Object(h.jsx)("th",{className:"hideXS",children:"WINS"}),Object(h.jsx)("th",{children:"POINTS"})]})}),Object(h.jsx)("tbody",{children:n.map((function(e,t){return Object(h.jsxs)("tr",{style:{cursor:"pointer"},onClick:function(){return t=e.Constructor.url,void window.open(t,"_blank");var t},className:"align-middle",children:[Object(h.jsx)("td",{children:e.position}),Object(h.jsx)("td",{children:Object(h.jsxs)(i.a,{className:"g-0",children:[Object(h.jsx)(l.a,{xs:2,lg:1,className:"align-self-center",children:Object(h.jsx)(c.a,{countryCode:r.a[e.Constructor.nationality].toLowerCase(),height:20})}),Object(h.jsx)(l.a,{xs:2,lg:1,children:Object(h.jsx)(j.a,{constructorId:e.Constructor.constructorId,height:o.hasOwnProperty(u)?"43px":"27px"})}),Object(h.jsxs)(l.a,{xs:8,className:"text-start",children:[Object(h.jsx)(i.a,{children:Object(h.jsx)(l.a,{children:Object(h.jsx)("p",{style:b,children:e.Constructor.name.toUpperCase()})})}),o.hasOwnProperty(u)?Object(h.jsx)(i.a,{style:{fontSize:"13px"},children:Object(h.jsxs)(l.a,{children:[o[u][e.Constructor.constructorId][0]," ","/"," ",o[u][e.Constructor.constructorId][1]]})}):null]})]})}),Object(h.jsx)("td",{className:"hideXS",children:e.wins}),Object(h.jsx)("td",{children:e.points})]},t)}))})]}):Object(h.jsx)(i.a,{className:"justify-content-center text-center",children:Object(h.jsxs)(l.a,{md:"auto",children:[Object(h.jsx)("h3",{children:"There's no constructors' standings data available for this season."}),Object(h.jsx)("br",{})]})})})}},315:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(57),c=n(55),r=n(71),i=n.n(r),l=n(72),j=n(20),o=n(140),d=n(118),h=n(49),b=n(43),u=n(44),x=n(80),O=n(170),m=n(2),g=function(){var e=Object(s.useState)(null!==sessionStorage.getItem("seasonStandingsInput")?sessionStorage.getItem("seasonStandingsInput"):"2021"),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(null),r=Object(j.a)(c,2),g=r[0],f=r[1],p=Object(s.useState)(null),y=Object(j.a)(p,2),S=y[0],N=y[1],v=Object(s.useState)(null),A=Object(j.a)(v,2),C=A[0],I=A[1],w=Object(s.useState)(!0),F=Object(j.a)(w,2),R=F[0],M=F[1],D=Object(s.useState)(!0),z=Object(j.a)(D,2),T=z[0],k=z[1];Object(s.useEffect)((function(){var e,t,s=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,fetch("https://ergast.com/api/f1/".concat(n,"/constructorStandings.json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.StandingsTable.StandingsLists[0]?I(e.MRData.StandingsTable.StandingsLists[0].ConstructorStandings):I(null)}));case 3:k(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,fetch("https://ergast.com/api/f1/".concat(n,"/driverStandings.json?limit=50")).then((function(e){return e.json()})).then((function(e){N(e.MRData.StandingsTable.StandingsLists[0].DriverStandings),M(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();s(),a(),e=1950,t=(new Date).getFullYear(),f(Array(t-e+1).fill().map((function(t,n){return e+n})).reverse())}),[n]);return Object(m.jsx)(m.Fragment,{children:T||R?Object(m.jsx)(h.a,{style:{minHeight:"500px"},children:Object(m.jsxs)(b.a,{className:"justify-content-center text-center",children:[Object(m.jsxs)("h1",{children:[n," FORMULA 1"]}),Object(m.jsx)(x.a,{animation:"border"})]})}):Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{className:"justify-content-center text-center",children:Object(m.jsx)(u.a,{children:Object(m.jsxs)("h1",{children:[n," FORMULA 1"]})})}),Object(m.jsx)(b.a,{className:"justify-content-center text-center",style:{marginBottom:"2%"},children:Object(m.jsx)(u.a,{children:Object(m.jsxs)(O.a,{children:[Object(m.jsx)(O.a.Toggle,{variant:"danger",className:"red-btn",id:"dropdown-basic",children:n}),Object(m.jsx)(O.a.Menu,{style:{maxHeight:"500px",overflowY:"scroll"},children:g.map((function(e,t){return Object(m.jsx)(O.a.Item,{onClick:function(e){return t=e.target.textContent,k(!0),a(t),void sessionStorage.setItem("seasonStandingsInput",t);var t},children:e},t)}))})]})})}),Object(m.jsxs)(b.a,{className:"justify-content-center text-center",children:[Object(m.jsx)("h2",{children:"CONSTRUCTORS' STANDINGS"}),Object(m.jsx)(o.a,{constructorsStandings:C,season:n}),Object(m.jsx)("h2",{children:"DRIVERS' STANDINGS"}),Object(m.jsx)(d.a,{driversStandings:S})]})]})})};t.default=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(c.a,{}),Object(m.jsx)(g,{}),Object(m.jsx)(a.a,{})]})}},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var s={British:"GB",Finnish:"FI",Dutch:"NL",Mexican:"MX",Spanish:"ES",Australian:"AU",Monegasque:"MC",French:"FR",German:"DE",Japanese:"JP",Canadian:"CA",Italian:"IT",Russian:"RU",Austrian:"AT",Swiss:"CH",American:"US",Thai:"TH","New Zealander":"NZ","New Zealand":"NZ",Swedish:"SE",Portuguese:"PT",Brazilian:"BR",Hungarian:"HU",Argentine:"AR",Belgian:"BE",Belgium:"BE","South African":"ZA",Danish:"DK",Liechtensteiner:"LI","Hong Kong":"HK",Irish:"IE",Chilean:"CL",Venezuelan:"VE",Colombian:"CO",Czech:"CZ",Malaysia:"MY",Indian:"IN",Polish:"PL",Indonesian:"ID",Rhodesian:"ZW",Russia:"RU",Korea:"KR",Argentina:"AR",UAE:"AE",Australia:"AU",Austria:"AT",Azerbaijan:"AZ",Bahrain:"BH",Brazil:"BR",Canada:"CA",China:"CN",France:"FR",Germany:"DE",Hungary:"HU",India:"IN",Italy:"IT",Japan:"JP",Malyasia:"MY",Malaysian:"MY",Mexico:"MX",Monaco:"MC",Morocco:"MA",Netherlands:"NL",Portugal:"PT","Saudi Arabia":"SA",Singapore:"SG","South Africa":"ZA",Spain:"ES",Sweden:"SE",Switzerland:"CH",Turkey:"TR",UK:"GB",USA:"US",Qatar:"QA"}},52:function(e,t,n){},54:function(e,t,n){"use strict";n(0);var s={red_bull:"#0600EF",williams:"#005AFF",mercedes:"#00D2BE",mclaren:"#FF8700",aston_martin:"#006F62",alphatauri:"#2B4562",alpine:"#0090FF",ferrari:"#DC0000",haas:"#FFFFFF",alfa:"#900000",renault:"#FFF500",racing_point:"#FFC0CB",toro_rosso:"#469BFF",force_india:"#F596C8",sauber:"#9B0000",manor:"#323232",lotus_f1:"#FFB800",marussia:"#6E0000",caterham:"#0b361f"},a=n(2);t.a=function(e){var t=e.constructorId,n=e.height,c=void 0===n?"27px":n;return Object(a.jsx)("div",{style:{width:"3px",height:c,display:"table",margin:"0 auto",backgroundColor:s.hasOwnProperty(t)?s[t]:"#000000"}})}},55:function(e,t,n){"use strict";var s=n(0),a=n(21),c=n(49),r=n(43),i=n(44),l=n(87),j=(n(56),n(8)),o=n(78),d=n(48),h=n(88),b=n(2);t.a=function(){var e=Object(s.useContext)(a.a),t=e.theme,n=e.setTheme;return Object(s.useEffect)((function(){localStorage.setItem("theme",t)}),[t]),Object(b.jsx)(l.a,{className:"navbar",bg:"dark",variant:"dark",children:Object(b.jsxs)(c.a,{style:{minHeight:"40px"},children:[Object(b.jsx)(j.b,{to:"/",style:{textDecoration:"none"},children:Object(b.jsx)(l.a.Brand,{className:"icon-link",children:Object(b.jsx)(d.a,{size:30})})}),Object(b.jsx)(j.b,{to:"/schedule",style:{textDecoration:"none"},children:Object(b.jsx)(l.a.Brand,{className:"text-link",children:"RACES"})}),Object(b.jsx)(j.b,{to:"/standings",style:{textDecoration:"none"},children:Object(b.jsx)(l.a.Brand,{className:"text-link",children:"STANDINGS"})}),Object(b.jsx)(l.a.Collapse,{className:"justify-content-end",children:Object(b.jsxs)(r.a,{className:"g-2",children:[Object(b.jsx)(i.a,{style:{marginTop:"15px"},children:Object(b.jsx)(h.a,{onChange:function(){return function(){var e="light"===t?"dark":"light";n(e),localStorage.setItem("theme",e)}()},checked:"dark"===t,size:20})}),Object(b.jsx)(i.a,{children:Object(b.jsx)(l.a.Brand,{className:"icon-link",href:"https://github.com/jdro10","aria-label":"Github",children:Object(b.jsx)(o.a,{size:25})})})]})})]})})}},56:function(e,t,n){},57:function(e,t,n){"use strict";n(0),n(58);var s=n(49),a=n(43),c=n(44),r=n(48),i=n(46),l=n(53),j=n(70),o=n(51),d=n(2);t.a=function(){return Object(d.jsx)("footer",{children:Object(d.jsxs)(s.a,{children:[Object(d.jsxs)(a.a,{className:"justify-content-center text-center",xs:"auto",id:"row",children:[Object(d.jsx)(c.a,{children:Object(d.jsx)(r.a,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(i.b,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(i.d,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(l.a,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(i.c,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(i.a,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(j.a,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(o.b,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(l.b,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(o.c,{size:40})})]}),Object(d.jsx)(a.a,{className:"justify-content-md-center",xs:"auto",id:"lastRow"}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"API"})})}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsxs)(c.a,{md:"auto",style:{textAlign:"center"},children:["All racing data is obtained through"," ",Object(d.jsx)("a",{href:"http://ergast.com/mrd/",style:{color:"white"},children:"Ergast API"}),"."]})}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsxs)(c.a,{md:"auto",style:{textAlign:"center"},children:["Some drivers' and circuits' information are obtained through"," ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/w/api.php",style:{color:"white"},children:"Wikipedia API"}),"."]})}),Object(d.jsx)("br",{}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"DISCLAIMER"})})}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:"auto",style:{textAlign:"center"},children:"This website was developed for learning and educational purposes only."})}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:"auto",style:{textAlign:"center"},children:"Data displayed may be inaccurate. By using this website you acknowledge this."})}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:"auto",style:{textAlign:"center"},children:"The author disclaims all responsibility for any loss or damage arising from the use of this website."})}),Object(d.jsx)("br",{}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:7,children:Object(d.jsx)("p",{style:{textAlign:"center"},children:"This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V."})})})]})})}},58:function(e,t,n){}}]);
//# sourceMappingURL=10.0ab1c152.chunk.js.map