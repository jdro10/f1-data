(this["webpackJsonpf1-data"]=this["webpackJsonpf1-data"]||[]).push([[10],{106:function(e,t,a){"use strict";var n=a(0),s=a(60),c=a(59),r=a(50),i=a(41),l=a(43),o=(a(52),a(54)),j=a(1),d=a(21),h=a(2),b={fontWeight:600,margin:"0px",padding:"0px",display:"inline"};t.a=function(e){var t=e.style,a=e.driversStandings,u=Object(j.g)(),x=Object(n.useContext)(d.a).theme;return Object(h.jsx)("div",{style:t,children:Object(h.jsxs)(s.a,{className:"table-hover table-striped standings-table",responsive:"xs",variant:x,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{className:"text-center",children:[Object(h.jsx)("th",{children:"POS"}),Object(h.jsx)("th",{className:"hideXS",children:"NO"}),Object(h.jsx)("th",{children:"NAME/TEAM"}),Object(h.jsx)("th",{className:"hideXS",children:"WINS"}),Object(h.jsx)("th",{children:"POINTS"})]})}),Object(h.jsx)("tbody",{children:a.map((function(e,t){return Object(h.jsxs)("tr",{className:"align-middle text-center",style:{cursor:"pointer"},onClick:function(){return t=e.Driver.driverId,void u.push("/driver/".concat(t));var t},children:[Object(h.jsx)("td",{children:e.position}),Object(h.jsx)("td",{className:"hideXS",children:e.Driver.permanentNumber}),Object(h.jsx)("td",{children:Object(h.jsxs)(i.a,{className:"g-0",children:[Object(h.jsx)(l.a,{xs:2,lg:1,className:"align-self-center",children:Object(h.jsx)(c.a,{countryCode:void 0!==r.a[e.Driver.nationality]?r.a[e.Driver.nationality].toLowerCase():null,height:20})}),Object(h.jsx)(l.a,{xs:2,lg:1,children:Object(h.jsx)(o.a,{constructorId:e.Constructors[0].constructorId,height:"42px"})}),Object(h.jsxs)(l.a,{xs:8,className:"text-start",children:[Object(h.jsxs)(i.a,{children:[Object(h.jsx)(l.a,{className:"showXS",children:Object(h.jsx)("p",{style:b,children:e.Driver.familyName.toUpperCase()})}),Object(h.jsxs)(l.a,{className:"hideXS",children:[e.Driver.givenName," ",Object(h.jsx)("p",{style:b,children:e.Driver.familyName.toUpperCase()})]})]}),Object(h.jsx)(i.a,{children:Object(h.jsx)(l.a,{style:{fontSize:"13px"},children:void 0!==e.Constructors[0].name?e.Constructors[0].name:"-"})})]})]})}),Object(h.jsx)("td",{className:"hideXS",children:e.wins}),Object(h.jsx)("td",{children:e.points})]},t)}))})]})})}},128:function(e,t,a){"use strict";var n=a(0),s=a(60),c=a(59),r=a(50),i=a(41),l=a(43),o=(a(52),a(54)),j={2019:{red_bull:["Verstappen","Gasly","HONDA"],williams:["Russell","Kubica","MERCEDES"],mercedes:["Hamilton","Bottas","MERCEDES"],mclaren:["Norris","Sainz","RENAULT"],racing_point:["P\xe9rez","Stroll","MERCEDES"],toro_rosso:["Albon","Kvyat","HONDA"],renault:["Ricciardo","H\xfclkenberg","RENAULT"],ferrari:["Vettel","Leclerc","FERRARI"],haas:["Grosjean","Magnussen","FERRARI"],alfa:["R\xe4ikk\xf6nen","Giovinazzi","FERRARI"]},2020:{red_bull:["Verstappen","Albon","HONDA"],williams:["Russell","Latifi","MERCEDES"],mercedes:["Hamilton","Bottas","MERCEDES"],mclaren:["Norris","Sainz","RENAULT"],racing_point:["P\xe9rez","Stroll","MERCEDES"],alphatauri:["Gasly","Kvyat","HONDA"],renault:["Ricciardo","Ocon","RENAULT"],ferrari:["Vettel","Leclerc","FERRARI"],haas:["Grosjean","Magnussen","FERRARI"],alfa:["R\xe4ikk\xf6nen","Giovinazzi","FERRARI"]},2021:{red_bull:["Verstappen","P\xe9rez","HONDA"],williams:["Russell","Latifi","MERCEDES"],mercedes:["Hamilton","Bottas","MERCEDES"],mclaren:["Norris","Ricciardo","MERCEDES"],aston_martin:["Vettel","Stroll","MERCEDES"],alphatauri:["Gasly","Tsunoda","HONDA"],alpine:["Alonso","Ocon","RENAULT"],ferrari:["Leclerc","Sainz","MERCEDES"],haas:["Schumacher","Mazepin","FERRARI"],alfa:["R\xe4ikk\xf6nen","Giovinazzi","FERRARI"]}},d=a(21),h=a(2),b={fontWeight:600,margin:"0px",padding:"0px",display:"inline"};t.a=function(e){var t=e.style,a=e.constructorsStandings,u=e.season,x=e.showEngine,O=Object(n.useContext)(d.a).theme;return Object(h.jsx)("div",{style:t,children:null!==a?Object(h.jsxs)(s.a,{className:"table-hover standings-table table-striped",responsive:"sm",variant:O,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{className:"text-center",children:[Object(h.jsx)("th",{children:"POS"}),Object(h.jsx)("th",{children:"NAME"}),j.hasOwnProperty(u)&&x?Object(h.jsx)("th",{className:"text-start hideXS",children:"ENGINE"}):null,Object(h.jsx)("th",{className:"hideXS",children:"WINS"}),Object(h.jsx)("th",{children:"POINTS"})]})}),Object(h.jsx)("tbody",{children:a.map((function(e,t){return Object(h.jsxs)("tr",{style:{cursor:"pointer"},onClick:function(){return t=e.Constructor.url,void window.open(t,"_blank");var t},className:"align-middle text-center",children:[Object(h.jsx)("td",{children:e.position}),Object(h.jsx)("td",{children:Object(h.jsxs)(i.a,{className:"g-0",children:[Object(h.jsx)(l.a,{xs:2,lg:1,className:"align-self-center",children:Object(h.jsx)(c.a,{countryCode:r.a[e.Constructor.nationality].toLowerCase(),height:20})}),Object(h.jsx)(l.a,{xs:2,lg:1,children:Object(h.jsx)(o.a,{constructorId:e.Constructor.constructorId,height:j.hasOwnProperty(u)?"43px":"27px"})}),Object(h.jsxs)(l.a,{xs:8,className:"text-start no-wrap",children:[Object(h.jsx)(i.a,{children:Object(h.jsx)(l.a,{children:Object(h.jsx)("p",{style:b,children:e.Constructor.name.toUpperCase()})})}),j.hasOwnProperty(u)?Object(h.jsx)(i.a,{style:{fontSize:"13px"},children:Object(h.jsxs)(l.a,{children:[j[u][e.Constructor.constructorId][0]," ","/"," ",j[u][e.Constructor.constructorId][1]]})}):null]})]})}),j.hasOwnProperty(u)&&x?Object(h.jsx)("td",{className:"text-start hideXS",children:Object(h.jsx)("p",{style:b,children:j[u][e.Constructor.constructorId][2]})}):null,Object(h.jsx)("td",{className:"hideXS",children:e.wins}),Object(h.jsx)("td",{children:e.points})]},t)}))})]}):Object(h.jsx)(i.a,{className:"justify-content-center text-center",children:Object(h.jsxs)(l.a,{md:"auto",children:[Object(h.jsx)("h3",{children:"There's no constructors' standings data available for this season."}),Object(h.jsx)("br",{})]})})})}},297:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(57),c=a(55),r=a(66),i=a.n(r),l=a(67),o=a(20),j=a(128),d=a(106),h=a(49),b=a(41),u=a(43),x=a(74),O=a(153),m=a(2),p=function(){var e=Object(n.useState)(null!==sessionStorage.getItem("seasonStandingsInput")?sessionStorage.getItem("seasonStandingsInput"):"2021"),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(null),r=Object(o.a)(c,2),p=r[0],g=r[1],f=Object(n.useState)(null),N=Object(o.a)(f,2),y=N[0],S=N[1],v=Object(n.useState)(null),R=Object(o.a)(v,2),A=R[0],E=R[1],C=Object(n.useState)(!0),I=Object(o.a)(C,2),w=I[0],F=I[1],D=Object(n.useState)(!0),M=Object(o.a)(D,2),z=M[0],k=M[1];Object(n.useEffect)((function(){var e,t,n=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,fetch("https://ergast.com/api/f1/".concat(a,"/constructorStandings.json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.StandingsTable.StandingsLists[0]?E(e.MRData.StandingsTable.StandingsLists[0].ConstructorStandings):E(null)}));case 3:k(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.next=3,fetch("https://ergast.com/api/f1/".concat(a,"/driverStandings.json?limit=50")).then((function(e){return e.json()})).then((function(e){S(e.MRData.StandingsTable.StandingsLists[0].DriverStandings),F(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n(),s(),e=1950,t=(new Date).getFullYear(),g(Array(t-e+1).fill().map((function(t,a){return e+a})).reverse())}),[a]);return Object(m.jsx)(h.a,{style:{minHeight:"600px"},children:z||w?Object(m.jsxs)(b.a,{className:"justify-content-center text-center",children:[Object(m.jsxs)("h1",{children:[a," FORMULA 1"]}),Object(m.jsx)(x.a,{animation:"border"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b.a,{className:"justify-content-center text-center",children:Object(m.jsx)(u.a,{children:Object(m.jsxs)("h1",{children:[a," FORMULA 1"]})})}),Object(m.jsx)(b.a,{className:"justify-content-center text-center",style:{marginBottom:"5px"},children:Object(m.jsx)(u.a,{children:Object(m.jsxs)(O.a,{children:[Object(m.jsx)(O.a.Toggle,{variant:"danger",className:"red-btn",id:"dropdown-basic",children:a}),Object(m.jsx)(O.a.Menu,{style:{maxHeight:"500px",overflowY:"scroll"},children:p.map((function(e,t){return Object(m.jsx)(O.a.Item,{onClick:function(e){return t=e.target.textContent,k(!0),s(t),void sessionStorage.setItem("seasonStandingsInput",t);var t},children:e},t)}))})]})})}),Object(m.jsxs)("ul",{className:"nav nav-pills nav-fill mb-2",role:"tablist",children:[Object(m.jsx)("li",{className:"nav-item",role:"presentation",children:Object(m.jsx)("button",{className:"nav-link active",id:"driver-tab","data-bs-toggle":"tab","data-bs-target":"#driver",type:"button",role:"tab","aria-controls":"driver","aria-selected":"true",children:"DRIVERS"})}),Object(m.jsx)("li",{className:"nav-item",role:"presentation",children:Object(m.jsx)("button",{className:"nav-link",id:"constructor-tab","data-bs-toggle":"tab","data-bs-target":"#constructor",type:"button",role:"tab","aria-controls":"constructor","aria-selected":"false",children:"CONSTRUCTORS"})})]}),Object(m.jsxs)("div",{className:"tab-content",id:"myTabContent",children:[Object(m.jsx)("div",{className:"tab-pane fade show active",id:"driver",role:"tabpanel","aria-labelledby":"driver-tab",children:Object(m.jsx)(d.a,{driversStandings:y})}),Object(m.jsx)("div",{className:"tab-pane fade",id:"constructor",role:"tabpanel","aria-labelledby":"constructor-tab",children:Object(m.jsx)(j.a,{constructorsStandings:A,season:a,showEngine:!0})})]})]})})};t.default=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(c.a,{}),Object(m.jsx)(p,{}),Object(m.jsx)(s.a,{})]})}},50:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={British:"GB",Finnish:"FI",Dutch:"NL",Mexican:"MX",Spanish:"ES",Australian:"AU",Monegasque:"MC",French:"FR",German:"DE",Japanese:"JP",Canadian:"CA",Italian:"IT",Russian:"RU",Austrian:"AT",Swiss:"CH",American:"US",Thai:"TH","New Zealander":"NZ","New Zealand":"NZ",Swedish:"SE",Portuguese:"PT",Brazilian:"BR",Hungarian:"HU",Argentine:"AR",Belgian:"BE",Belgium:"BE","South African":"ZA",Danish:"DK",Liechtensteiner:"LI","Hong Kong":"HK",Irish:"IE",Chilean:"CL",Venezuelan:"VE",Colombian:"CO",Czech:"CZ",Malaysia:"MY",Indian:"IN",Polish:"PL",Indonesian:"ID",Rhodesian:"ZW",Russia:"RU",Korea:"KR",Argentina:"AR",UAE:"AE",Australia:"AU",Austria:"AT",Azerbaijan:"AZ",Bahrain:"BH",Brazil:"BR",Canada:"CA",China:"CN",France:"FR",Germany:"DE",Hungary:"HU",India:"IN",Italy:"IT",Japan:"JP",Malyasia:"MY",Malaysian:"MY",Mexico:"MX",Monaco:"MC",Morocco:"MA",Netherlands:"NL",Portugal:"PT","Saudi Arabia":"SA",Singapore:"SG","South Africa":"ZA",Spain:"ES",Sweden:"SE",Switzerland:"CH",Turkey:"TR",UK:"GB",USA:"US",Qatar:"QA"}},52:function(e,t,a){},54:function(e,t,a){"use strict";a(0);var n={red_bull:"#0600EF",williams:"#005AFF",mercedes:"#00D2BE",mclaren:"#FF8700",aston_martin:"#006F62",alphatauri:"#2B4562",alpine:"#0090FF",ferrari:"#DC0000",haas:"#FFFFFF",alfa:"#900000",renault:"#FFF500",racing_point:"#FFC0CB",toro_rosso:"#469BFF",force_india:"#F596C8",sauber:"#9B0000",manor:"#323232",lotus_f1:"#FFB800",marussia:"#6E0000",caterham:"#0b361f"},s=a(2);t.a=function(e){var t=e.constructorId,a=e.height,c=void 0===a?"27px":a;return Object(s.jsx)("div",{style:{width:"3px",height:c,display:"table",margin:"0 auto",backgroundColor:n.hasOwnProperty(t)?n[t]:"#000000"}})}},55:function(e,t,a){"use strict";var n=a(0),s=a(21),c=a(49),r=a(41),i=a(43),l=a(78),o=(a(56),a(8)),j=a(72),d=a(48),h=a(79),b=a(2);t.a=function(){var e=Object(n.useContext)(s.a),t=e.theme,a=e.setTheme;return Object(n.useEffect)((function(){localStorage.setItem("theme",t)}),[t]),Object(b.jsx)(l.a,{className:"navbar",bg:"dark",variant:"dark",children:Object(b.jsxs)(c.a,{style:{minHeight:"40px"},children:[Object(b.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:Object(b.jsx)(l.a.Brand,{className:"icon-link",children:Object(b.jsx)(d.a,{size:30})})}),Object(b.jsx)(o.b,{to:"/schedule",style:{textDecoration:"none"},children:Object(b.jsx)(l.a.Brand,{className:"text-link",children:"RACES"})}),Object(b.jsx)(o.b,{to:"/standings",style:{textDecoration:"none"},children:Object(b.jsx)(l.a.Brand,{className:"text-link",children:"STANDINGS"})}),Object(b.jsx)(l.a.Collapse,{className:"justify-content-end",children:Object(b.jsxs)(r.a,{className:"g-2",children:[Object(b.jsx)(i.a,{style:{marginTop:"15px"},children:Object(b.jsx)(h.a,{onChange:function(){return function(){var e="light"===t?"dark":"light";a(e),localStorage.setItem("theme",e)}()},checked:"dark"===t,size:20})}),Object(b.jsx)(i.a,{children:Object(b.jsx)(l.a.Brand,{className:"icon-link",href:"https://github.com/jdro10","aria-label":"Github",children:Object(b.jsx)(j.a,{size:25})})})]})})]})})}},56:function(e,t,a){},57:function(e,t,a){"use strict";a(0),a(58);var n=a(49),s=a(41),c=a(43),r=a(48),i=a(44),l=a(53),o=a(65),j=a(51),d=a(2);t.a=function(){return Object(d.jsx)("footer",{children:Object(d.jsxs)(n.a,{children:[Object(d.jsxs)(s.a,{className:"justify-content-center text-center",xs:"auto",id:"row",children:[Object(d.jsx)(c.a,{children:Object(d.jsx)(r.a,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(i.b,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(i.d,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(l.a,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(i.c,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(i.a,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(o.a,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(j.b,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(l.b,{size:40})}),Object(d.jsx)(c.a,{children:Object(d.jsx)(j.c,{size:40})})]}),Object(d.jsx)(s.a,{className:"justify-content-md-center",xs:"auto",id:"lastRow"}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"API"})})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsxs)(c.a,{md:"auto",style:{textAlign:"center"},children:["All racing data is obtained through"," ",Object(d.jsx)("a",{href:"http://ergast.com/mrd/",style:{color:"white"},children:"Ergast API"}),"."]})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsxs)(c.a,{md:"auto",style:{textAlign:"center"},children:["Some drivers' and circuits' information are obtained through"," ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/w/api.php",style:{color:"white"},children:"Wikipedia API"}),"."]})}),Object(d.jsx)("br",{}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"DISCLAIMER"})})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:"auto",style:{textAlign:"center"},children:"This website was developed for learning and educational purposes only."})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:"auto",style:{textAlign:"center"},children:"Data displayed may be inaccurate. By using this website you acknowledge this."})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:"auto",style:{textAlign:"center"},children:"The author disclaims all responsibility for any loss or damage arising from the use of this website."})}),Object(d.jsx)("br",{}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(c.a,{md:7,children:Object(d.jsx)("p",{style:{textAlign:"center"},children:"This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V."})})})]})})}},58:function(e,t,a){}}]);
//# sourceMappingURL=10.83323ac5.chunk.js.map