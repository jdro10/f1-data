(this["webpackJsonpf1-data"]=this["webpackJsonpf1-data"]||[]).push([[7],{104:function(e,t,c){"use strict";c(0);var a=c(43),s=c(105),n=c(2);t.a=function(e){var t=e.date,c=e.time;return Object(n.jsx)(s.a,{date:Date.now()+(new Date(t).getTime()+36e5*c.split(":")[0]-(new Date).getTime()),renderer:function(e){var t=e.days,c=e.hours,s=e.minutes,r=e.seconds;return e.completed?Object(n.jsxs)(a.a,{children:[Object(n.jsx)("h1",{children:"RACE IN PROGRESS"}),Object(n.jsx)("h5",{children:"WAITING FOR RACE RESULTS"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(a.a,{xs:3,lg:1,children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("h5",{children:"DAYS"})]}),Object(n.jsxs)(a.a,{xs:3,lg:1,children:[Object(n.jsx)("h1",{children:c}),Object(n.jsx)("h5",{children:"HRS"})]}),Object(n.jsxs)(a.a,{xs:3,lg:1,children:[Object(n.jsx)("h1",{children:s}),Object(n.jsx)("h5",{children:"MIN"})]}),Object(n.jsxs)(a.a,{xs:3,lg:1,children:[Object(n.jsx)("h1",{children:r}),Object(n.jsx)("h5",{children:"SEC"})]})]})}})}},106:function(e,t,c){"use strict";var a=c(0),s=c(60),n=c(59),r=c(50),i=c(41),j=c(43),l=(c(52),c(54)),o=c(1),d=c(21),h=c(2),b={fontWeight:600,margin:"0px",padding:"0px",display:"inline"};t.a=function(e){var t=e.style,c=e.driversStandings,x=Object(o.g)(),O=Object(a.useContext)(d.a).theme;return Object(h.jsx)("div",{style:t,children:Object(h.jsxs)(s.a,{className:"table-hover table-striped standings-table",responsive:"xs",variant:O,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{className:"text-center",children:[Object(h.jsx)("th",{children:"POS"}),Object(h.jsx)("th",{className:"hideXS",children:"NO"}),Object(h.jsx)("th",{children:"NAME/TEAM"}),Object(h.jsx)("th",{className:"hideXS",children:"WINS"}),Object(h.jsx)("th",{children:"POINTS"})]})}),Object(h.jsx)("tbody",{children:c.map((function(e,t){return Object(h.jsxs)("tr",{className:"align-middle text-center",style:{cursor:"pointer"},onClick:function(){return t=e.Driver.driverId,void x.push("/driver/".concat(t));var t},children:[Object(h.jsx)("td",{children:e.position}),Object(h.jsx)("td",{className:"hideXS",children:e.Driver.permanentNumber}),Object(h.jsx)("td",{children:Object(h.jsxs)(i.a,{className:"g-0",children:[Object(h.jsx)(j.a,{xs:2,lg:1,className:"align-self-center",children:Object(h.jsx)(n.a,{countryCode:void 0!==r.a[e.Driver.nationality]?r.a[e.Driver.nationality].toLowerCase():null,height:20})}),Object(h.jsx)(j.a,{xs:2,lg:1,children:Object(h.jsx)(l.a,{constructorId:e.Constructors[0].constructorId,height:"42px"})}),Object(h.jsxs)(j.a,{xs:8,className:"text-start",children:[Object(h.jsxs)(i.a,{children:[Object(h.jsx)(j.a,{className:"showXS",children:Object(h.jsx)("p",{style:b,children:e.Driver.familyName.toUpperCase()})}),Object(h.jsxs)(j.a,{className:"hideXS",children:[e.Driver.givenName," ",Object(h.jsx)("p",{style:b,children:e.Driver.familyName.toUpperCase()})]})]}),Object(h.jsx)(i.a,{children:Object(h.jsx)(j.a,{style:{fontSize:"13px"},children:e.Constructors[0].name})})]})]})}),Object(h.jsx)("td",{className:"hideXS",children:e.wins}),Object(h.jsx)("td",{children:e.points})]},t)}))})]})})}},128:function(e,t,c){"use strict";var a=c(0),s=c(60),n=c(59),r=c(50),i=c(41),j=c(43),l=(c(52),c(54)),o={2020:{red_bull:["Verstappen","Albon"],williams:["Russell","Latifi"],mercedes:["Hamilton","Bottas"],mclaren:["Norris","Sainz"],racing_point:["P\xe9rez","Stroll"],alphatauri:["Gasly","Kvyat"],renault:["Ricciardo","Ocon"],ferrari:["Vettel","Leclerc"],haas:["Grosjean","Magnussen"],alfa:["R\xe4ikk\xf6nen","Giovinazzi"]},2021:{red_bull:["Verstappen","P\xe9rez"],williams:["Russell","Latifi"],mercedes:["Hamilton","Bottas"],mclaren:["Norris","Ricciardo"],aston_martin:["Vettel","Stroll"],alphatauri:["Gasly","Tsunoda"],alpine:["Alonso","Ocon"],ferrari:["Leclerc","Sainz"],haas:["Schumacher","Mazepin"],alfa:["R\xe4ikk\xf6nen","Giovinazzi"]}},d=c(21),h=c(2),b={fontWeight:600,margin:"0px",padding:"0px",display:"inline"};t.a=function(e){var t=e.style,c=e.constructorsStandings,x=e.season,O=Object(a.useContext)(d.a).theme;return Object(h.jsx)("div",{style:t,children:null!==c?Object(h.jsxs)(s.a,{className:"table-hover standings-table table-striped",responsive:"sm",variant:O,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{className:"text-center",children:[Object(h.jsx)("th",{children:"POS"}),Object(h.jsx)("th",{children:"NAME"}),Object(h.jsx)("th",{className:"hideXS",children:"WINS"}),Object(h.jsx)("th",{children:"POINTS"})]})}),Object(h.jsx)("tbody",{children:c.map((function(e,t){return Object(h.jsxs)("tr",{style:{cursor:"pointer"},onClick:function(){return t=e.Constructor.url,void window.open(t,"_blank");var t},className:"align-middle text-center",children:[Object(h.jsx)("td",{children:e.position}),Object(h.jsx)("td",{children:Object(h.jsxs)(i.a,{className:"g-0",children:[Object(h.jsx)(j.a,{xs:2,lg:1,className:"align-self-center",children:Object(h.jsx)(n.a,{countryCode:r.a[e.Constructor.nationality].toLowerCase(),height:20})}),Object(h.jsx)(j.a,{xs:2,lg:1,children:Object(h.jsx)(l.a,{constructorId:e.Constructor.constructorId,height:o.hasOwnProperty(x)?"43px":"27px"})}),Object(h.jsxs)(j.a,{xs:8,className:"text-start no-wrap",children:[Object(h.jsx)(i.a,{children:Object(h.jsx)(j.a,{children:Object(h.jsx)("p",{style:b,children:e.Constructor.name.toUpperCase()})})}),o.hasOwnProperty(x)?Object(h.jsx)(i.a,{style:{fontSize:"13px"},children:Object(h.jsxs)(j.a,{children:[o[x][e.Constructor.constructorId][0]," ","/"," ",o[x][e.Constructor.constructorId][1]]})}):null]})]})}),Object(h.jsx)("td",{className:"hideXS",children:e.wins}),Object(h.jsx)("td",{children:e.points})]},t)}))})]}):Object(h.jsx)(i.a,{className:"justify-content-center text-center",children:Object(h.jsxs)(j.a,{md:"auto",children:[Object(h.jsx)("h3",{children:"There's no constructors' standings data available for this season."}),Object(h.jsx)("br",{})]})})})}},162:function(e,t,c){},293:function(e,t,c){"use strict";c.r(t);var a=c(0),s=(c(160),c(55)),n=c(57),r=c(66),i=c.n(r),j=c(67),l=c(20),o=c(41),d=c(43),h=c(49),b=c(280),x=c(21),O=c(2),u=function(e){var t=e.cardTitle,c=e.cardBody,s=e.cardFooter,n=e.cardHeight,r=Object(a.useContext)(x.a).theme;return Object(O.jsxs)(b.a,{style:{height:n,borderRadius:"15px",overflow:"hidden"},className:"text-center",bg:r,text:"light"===r?"dark":"light",children:[Object(O.jsx)(b.a.Header,{children:t}),Object(O.jsx)(b.a.Body,{children:Object(O.jsx)(o.a,{className:"justify-content-md-center",children:c})}),void 0!==s?Object(O.jsx)(b.a.Footer,{children:s}):null]})},m=c(8),p=c(59),f=c(68),g=c(73),y=c(50),N={fontWeight:600},R=function(e){var t=e.lastRace;return Object(O.jsx)(u,{cardTitle:"PREVIOUS RACE",cardBody:Object(O.jsxs)("div",{children:[Object(O.jsxs)("h5",{children:["ROUND ",t.MRData.RaceTable.round]}),Object(O.jsx)("h1",{style:N,children:t.MRData.RaceTable.Races[0].raceName.toUpperCase()}),Object(O.jsx)("h5",{children:t.MRData.RaceTable.Races[0].Circuit.circuitName.toUpperCase()}),Object(O.jsx)("h6",{children:Object(g.a)(t.MRData.RaceTable.Races[0].date)}),Object(O.jsx)("h6",{children:Object(g.b)(t.MRData.RaceTable.Races[0].date,t.MRData.RaceTable.Races[0].time)}),Object(O.jsx)(p.a,{countryCode:y.a[t.MRData.RaceTable.Races[0].Circuit.Location.country].toLowerCase(),height:120,style:{marginTop:"10px"}}),Object(O.jsx)("h5",{style:{marginTop:"27px"},children:t.MRData.RaceTable.Races[0].Circuit.Location.country}),Object(O.jsx)("h5",{children:t.MRData.RaceTable.Races[0].Circuit.Location.locality})]}),cardFooter:Object(O.jsx)(m.b,{to:"/race/".concat(t.MRData.RaceTable.season,"/").concat(t.MRData.RaceTable.round),children:Object(O.jsx)(f.a,{className:"red-btn",children:"FULL RACE RESULT"})}),cardHeight:"34rem"})},v=c(104),S={fontWeight:600},C=function(e){var t=e.nextRace;return Object(O.jsx)(u,{cardTitle:"NEXT RACE",cardBody:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h5",{children:["ROUND ",t.round]}),Object(O.jsx)("h1",{style:S,children:t.raceName.toUpperCase()}),Object(O.jsx)("h5",{children:t.Circuit.circuitName.toUpperCase()}),Object(O.jsx)("h6",{children:Object(g.a)(t.date)}),Object(O.jsx)("h6",{children:Object(g.b)(t.date,t.time)}),Object(O.jsx)(p.a,{countryCode:y.a[t.Circuit.Location.country].toLowerCase(),height:100}),Object(O.jsx)("p",{}),Object(O.jsx)(v.a,{date:t.date,time:t.time})]}),cardFooter:Object(O.jsx)(m.b,{to:"/race/".concat(t.season,"/").concat(t.round),children:Object(O.jsx)(f.a,{className:"red-btn",children:"RACE INFORMATION"})}),cardHeight:"32rem"})},D=c(74),T=c(60),A=c(54),w=(c(52),c(1)),I=c(48),F=c(44),M=c(51),E={fontWeight:600,marginTop:"15px",marginBottom:"10px"},L={fontWeight:600,margin:"0px",padding:"0px",display:"inline",marginTop:"50px"},U=function(e){var t=e.lastRace,c=e.numberOfRaces,s=Object(a.useContext)(x.a).theme,n=Object(a.useState)(null),r=Object(l.a)(n,2),i=r[0],j=r[1],h=Object(a.useState)(null),b=Object(l.a)(h,2),m=b[0],f=b[1],g=Object(a.useState)(null),N=Object(l.a)(g,2),R=N[0],v=N[1],S=Object(a.useState)(!0),C=Object(l.a)(S,2),D=C[0],U=C[1],z=Object(a.useState)(!0),k=Object(l.a)(z,2),B=k[0],P=k[1],H=Object(w.g)(),G=function(e){H.push("/driver/".concat(e))};return Object(a.useEffect)((function(){t.MRData.RaceTable.Races[0].Results.forEach((function(e){e.FastestLap&&"1"===e.FastestLap.rank&&j(e)})),t.MRData.RaceTable.Races[0].Results.forEach((function(e){if("1"===e.grid)return f(e),P(!1),void fetch("https://ergast.com/api/f1/".concat(t.MRData.RaceTable.season,"/").concat(t.MRData.RaceTable.round,"/drivers/").concat(e.Driver.driverId,"/qualifying.json")).then((function(e){return e.json()})).then((function(e){v(e.MRData.RaceTable.Races[0].QualifyingResults[0].Q3),U(!1)}))}))}),[t.MRData.RaceTable.season,t.MRData.RaceTable.round,t.MRData.RaceTable.Races]),Object(O.jsx)(u,{cardTitle:"PREVIOUS RACE",cardBody:Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{style:L,children:"PODIUM"}),Object(O.jsx)(T.a,{responsive:!0,className:"table-hover",variant:s,children:Object(O.jsx)("tbody",{className:"justify-content-center",children:t.MRData.RaceTable.Races[0].Results.slice(0,3).map((function(e,t){return Object(O.jsxs)("tr",{className:"align-middle",style:{cursor:"pointer"},onClick:function(){return G(e.Driver.driverId)},children:["1"===e.position?Object(O.jsx)("td",{children:Object(O.jsx)(I.e,{size:23})}):"2"===e.position?Object(O.jsx)("td",{children:Object(O.jsx)(I.c,{size:23})}):"3"===e.position?Object(O.jsx)("td",{children:Object(O.jsx)(I.d,{size:23})}):Object(O.jsx)("td",{children:e.position}),Object(O.jsx)("td",{children:Object(O.jsxs)(o.a,{className:"g-0 text-start",children:[Object(O.jsx)(d.a,{xs:"auto",className:"align-self-center",children:Object(O.jsx)(p.a,{countryCode:y.a[e.Driver.nationality].toLowerCase(),height:20})}),Object(O.jsx)(d.a,{xs:2,sm:1,children:Object(O.jsx)(A.a,{constructorId:e.Constructor.constructorId,height:"42px"})}),Object(O.jsxs)(d.a,{xs:8,className:"text-start",children:[Object(O.jsxs)(o.a,{children:[Object(O.jsxs)(d.a,{className:"hideXS",children:[e.Driver.givenName," ",Object(O.jsx)("p",{style:L,children:e.Driver.familyName.toUpperCase()})]}),Object(O.jsx)(d.a,{className:"showXS",children:Object(O.jsx)("p",{style:L,children:e.Driver.familyName.toUpperCase()})})]}),Object(O.jsx)(o.a,{children:Object(O.jsx)(d.a,{style:{fontSize:"13px"},children:e.Constructor.name})})]})]})}),Object(O.jsxs)("td",{children:["+",e.points]})]},t)}))})}),Object(O.jsx)("h4",{style:E,children:"FASTEST LAP / POLE POSITION"}),Object(O.jsx)(T.a,{responsive:!0,className:"table-hover",variant:s,children:Object(O.jsxs)("tbody",{children:[null===i?null:Object(O.jsxs)("tr",{className:"align-middle",style:{cursor:"pointer"},onClick:function(){return G(i.Driver.driverId)},children:[Object(O.jsx)("td",{children:Object(O.jsx)(F.e,{size:20})}),Object(O.jsx)("td",{children:Object(O.jsxs)(o.a,{className:"g-0 text-start",children:[Object(O.jsx)(d.a,{xs:"auto",className:"align-self-center",children:Object(O.jsx)(p.a,{countryCode:y.a[i.Driver.nationality].toLowerCase(),height:20})}),Object(O.jsx)(d.a,{xs:2,sm:1,children:Object(O.jsx)(A.a,{constructorId:i.Constructor.constructorId,height:"42px"})}),Object(O.jsxs)(d.a,{xs:8,className:"text-start",children:[Object(O.jsxs)(o.a,{children:[Object(O.jsxs)(d.a,{className:"hideXS",children:[i.Driver.givenName," ",Object(O.jsx)("p",{style:L,children:i.Driver.familyName.toUpperCase()})]}),Object(O.jsx)(d.a,{className:"showXS",children:Object(O.jsx)("p",{style:L,children:i.Driver.familyName.toUpperCase()})})]}),Object(O.jsx)(o.a,{children:Object(O.jsx)(d.a,{style:{fontSize:"13px"},children:i.Constructor.name})})]})]})}),Object(O.jsx)("td",{children:i.FastestLap.Time.time})]}),B||D?null:Object(O.jsxs)("tr",{className:"align-middle",style:{cursor:"pointer"},onClick:function(){return G(m.Driver.driverId)},children:[Object(O.jsx)("td",{children:Object(O.jsx)(M.a,{size:21})}),Object(O.jsx)("td",{children:Object(O.jsxs)(o.a,{className:"g-0 text-start",children:[Object(O.jsx)(d.a,{xs:"auto",className:"align-self-center",children:Object(O.jsx)(p.a,{countryCode:y.a[m.Driver.nationality].toLowerCase(),height:20})}),Object(O.jsx)(d.a,{xs:2,sm:1,children:Object(O.jsx)(A.a,{constructorId:m.Constructor.constructorId,height:"42px"})}),Object(O.jsxs)(d.a,{xs:8,children:[Object(O.jsxs)(o.a,{children:[Object(O.jsxs)(d.a,{className:"hideXS",children:[m.Driver.givenName," ",Object(O.jsx)("p",{style:L,children:m.Driver.familyName.toUpperCase()})]}),Object(O.jsx)(d.a,{className:"showXS",children:Object(O.jsx)("p",{style:L,children:m.Driver.familyName.toUpperCase()})})]}),Object(O.jsx)(o.a,{children:Object(O.jsx)(d.a,{style:{fontSize:"13px"},children:m.Constructor.name})})]})]})}),Object(O.jsx)("td",{children:R})]})]})})]}),cardFooter:Object(O.jsxs)("h4",{children:["ROUND: ",t.MRData.RaceTable.round,"/",c]}),cardHeight:"34rem"})},z=c(106),k=function(e){var t=e.driversStandings;return Object(O.jsx)(u,{cardTitle:"DRIVERS' STANDINGS",cardBody:Object(O.jsx)(z.a,{style:{overflow:"hidden",overflowY:"scroll",height:"415px"},driversStandings:t}),cardHeight:"34rem",cardFooter:Object(O.jsx)(m.b,{to:"/standings",children:Object(O.jsx)(f.a,{className:"red-btn",children:"FULL STANDINGS"})})})},B=c(128),P=function(e){var t=e.constructorsStandings,c=e.season;return Object(O.jsx)(u,{cardTitle:"CONSTRUCTORS' STANDINGS",cardBody:Object(O.jsx)(B.a,{style:{overflow:"hidden",overflowY:"scroll",height:"415px"},constructorsStandings:t,season:c}),cardFooter:Object(O.jsx)(m.b,{to:"/standings",children:Object(O.jsx)(f.a,{className:"red-btn",children:"FULL STANDINGS"})}),cardHeight:"34rem"})},H=c(163),G=(c(162),function(){var e="2021",t=Object(a.useState)(null),c=Object(l.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(null),b=Object(l.a)(r,2),x=b[0],u=b[1],m=Object(a.useState)(null),p=Object(l.a)(m,2),g=p[0],y=p[1],N=Object(a.useState)(!0),v=Object(l.a)(N,2),S=v[0],T=v[1],A=Object(a.useState)(!0),w=Object(l.a)(A,2),I=w[0],F=w[1],M=Object(a.useState)(null),E=Object(l.a)(M,2),L=E[0],z=E[1],B=Object(a.useState)(!0),G=Object(l.a)(B,2),X=G[0],W=G[1],_=Object(a.useState)(!0),V=Object(l.a)(_,2),Z=V[0],K=V[1];Object(a.useEffect)((function(){var e=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/current/last/results.json").then((function(e){return e.json()})).then((function(e){u(e),F(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(j.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/current/next.json").then((function(e){return e.json()})).then((function(e){n(e.MRData.RaceTable.Races[0]),T(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/current/constructorStandings.json").then((function(e){return e.json()})).then((function(e){z(e.MRData.StandingsTable.StandingsLists[0].ConstructorStandings),W(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/current/driverStandings.json").then((function(e){return e.json()})).then((function(e){y(e.MRData.StandingsTable.StandingsLists[0].DriverStandings),K(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t(),a(),c()}),[]);return Object(O.jsxs)(h.a,{style:{minHeight:"500px"},children:[Object(O.jsxs)(o.a,{className:"justify-content-center text-center title",children:[Object(O.jsx)(d.a,{xs:{span:8,offset:2},children:Object(O.jsxs)("h1",{children:[e," FORMULA 1"]})}),Object(O.jsx)(d.a,{xs:2,className:"text-end",children:Object(O.jsx)(f.a,{onClick:function(){return caches.keys().then((function(e){e.forEach((function(e){caches.delete(e)}))})),void window.location.reload()},className:"red-btn title",variant:"danger",children:Object(O.jsx)(H.a,{})})})]}),I||S?Object(O.jsx)(o.a,{className:"justify-content-center text-center",children:Object(O.jsx)(D.a,{animation:"border"})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(o.a,{className:"justify-content-center text-center g-2",children:[Object(O.jsx)(d.a,{lg:12,children:Object(O.jsx)(C,{nextRace:s})}),Object(O.jsx)(d.a,{xs:12,xl:6,children:Object(O.jsx)(R,{lastRace:x})}),Object(O.jsx)(d.a,{xs:12,xl:6,children:Object(O.jsx)(U,{lastRace:x,numberOfRaces:"22"})})]}),Z||X?Object(O.jsx)(o.a,{className:"justify-content-center text-center",style:{marginTop:"10px"},children:Object(O.jsx)(D.a,{animation:"border"})}):Object(O.jsxs)(o.a,{className:"g-2",style:{marginTop:"1px"},children:[Object(O.jsx)(d.a,{xs:12,xl:6,children:Object(O.jsx)(k,{driversStandings:g})}),Object(O.jsx)(d.a,{xs:12,xl:6,children:Object(O.jsx)(P,{constructorsStandings:L,season:e})})]})]})]})});t.default=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(s.a,{}),Object(O.jsx)(G,{}),Object(O.jsx)(n.a,{})]})}},50:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var a={British:"GB",Finnish:"FI",Dutch:"NL",Mexican:"MX",Spanish:"ES",Australian:"AU",Monegasque:"MC",French:"FR",German:"DE",Japanese:"JP",Canadian:"CA",Italian:"IT",Russian:"RU",Austrian:"AT",Swiss:"CH",American:"US",Thai:"TH","New Zealander":"NZ","New Zealand":"NZ",Swedish:"SE",Portuguese:"PT",Brazilian:"BR",Hungarian:"HU",Argentine:"AR",Belgian:"BE",Belgium:"BE","South African":"ZA",Danish:"DK",Liechtensteiner:"LI","Hong Kong":"HK",Irish:"IE",Chilean:"CL",Venezuelan:"VE",Colombian:"CO",Czech:"CZ",Malaysia:"MY",Indian:"IN",Polish:"PL",Indonesian:"ID",Rhodesian:"ZW",Russia:"RU",Korea:"KR",Argentina:"AR",UAE:"AE",Australia:"AU",Austria:"AT",Azerbaijan:"AZ",Bahrain:"BH",Brazil:"BR",Canada:"CA",China:"CN",France:"FR",Germany:"DE",Hungary:"HU",India:"IN",Italy:"IT",Japan:"JP",Malyasia:"MY",Malaysian:"MY",Mexico:"MX",Monaco:"MC",Morocco:"MA",Netherlands:"NL",Portugal:"PT","Saudi Arabia":"SA",Singapore:"SG","South Africa":"ZA",Spain:"ES",Sweden:"SE",Switzerland:"CH",Turkey:"TR",UK:"GB",USA:"US",Qatar:"QA"}},52:function(e,t,c){},54:function(e,t,c){"use strict";c(0);var a={red_bull:"#0600EF",williams:"#005AFF",mercedes:"#00D2BE",mclaren:"#FF8700",aston_martin:"#006F62",alphatauri:"#2B4562",alpine:"#0090FF",ferrari:"#DC0000",haas:"#FFFFFF",alfa:"#900000",renault:"#FFF500",racing_point:"#FFC0CB",toro_rosso:"#469BFF",force_india:"#F596C8",sauber:"#9B0000",manor:"#323232",lotus_f1:"#FFB800",marussia:"#6E0000",caterham:"#0b361f"},s=c(2);t.a=function(e){var t=e.constructorId,c=e.height,n=void 0===c?"27px":c;return Object(s.jsx)("div",{style:{width:"3px",height:n,display:"table",margin:"0 auto",backgroundColor:a.hasOwnProperty(t)?a[t]:"#000000"}})}},55:function(e,t,c){"use strict";var a=c(0),s=c(21),n=c(49),r=c(41),i=c(43),j=c(78),l=(c(56),c(8)),o=c(72),d=c(48),h=c(79),b=c(2);t.a=function(){var e=Object(a.useContext)(s.a),t=e.theme,c=e.setTheme;return Object(a.useEffect)((function(){localStorage.setItem("theme",t)}),[t]),Object(b.jsx)(j.a,{className:"navbar",bg:"dark",variant:"dark",children:Object(b.jsxs)(n.a,{style:{minHeight:"40px"},children:[Object(b.jsx)(l.b,{to:"/",style:{textDecoration:"none"},children:Object(b.jsx)(j.a.Brand,{className:"icon-link",children:Object(b.jsx)(d.a,{size:30})})}),Object(b.jsx)(l.b,{to:"/schedule",style:{textDecoration:"none"},children:Object(b.jsx)(j.a.Brand,{className:"text-link",children:"RACES"})}),Object(b.jsx)(l.b,{to:"/standings",style:{textDecoration:"none"},children:Object(b.jsx)(j.a.Brand,{className:"text-link",children:"STANDINGS"})}),Object(b.jsx)(j.a.Collapse,{className:"justify-content-end",children:Object(b.jsxs)(r.a,{className:"g-2",children:[Object(b.jsx)(i.a,{style:{marginTop:"15px"},children:Object(b.jsx)(h.a,{onChange:function(){return function(){var e="light"===t?"dark":"light";c(e),localStorage.setItem("theme",e)}()},checked:"dark"===t,size:20})}),Object(b.jsx)(i.a,{children:Object(b.jsx)(j.a.Brand,{className:"icon-link",href:"https://github.com/jdro10","aria-label":"Github",children:Object(b.jsx)(o.a,{size:25})})})]})})]})})}},56:function(e,t,c){},57:function(e,t,c){"use strict";c(0),c(58);var a=c(49),s=c(41),n=c(43),r=c(48),i=c(44),j=c(53),l=c(65),o=c(51),d=c(2);t.a=function(){return Object(d.jsx)("footer",{children:Object(d.jsxs)(a.a,{children:[Object(d.jsxs)(s.a,{className:"justify-content-center text-center",xs:"auto",id:"row",children:[Object(d.jsx)(n.a,{children:Object(d.jsx)(r.a,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(i.b,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(i.d,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(j.a,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(i.c,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(i.a,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(l.a,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(o.b,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(j.b,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(o.c,{size:40})})]}),Object(d.jsx)(s.a,{className:"justify-content-md-center",xs:"auto",id:"lastRow"}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"API"})})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsxs)(n.a,{md:"auto",style:{textAlign:"center"},children:["All racing data is obtained through"," ",Object(d.jsx)("a",{href:"http://ergast.com/mrd/",style:{color:"white"},children:"Ergast API"}),"."]})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsxs)(n.a,{md:"auto",style:{textAlign:"center"},children:["Some drivers' and circuits' information are obtained through"," ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/w/api.php",style:{color:"white"},children:"Wikipedia API"}),"."]})}),Object(d.jsx)("br",{}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"DISCLAIMER"})})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:"auto",style:{textAlign:"center"},children:"This website was developed for learning and educational purposes only."})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:"auto",style:{textAlign:"center"},children:"Data displayed may be inaccurate. By using this website you acknowledge this."})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:"auto",style:{textAlign:"center"},children:"The author disclaims all responsibility for any loss or damage arising from the use of this website."})}),Object(d.jsx)("br",{}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:7,children:Object(d.jsx)("p",{style:{textAlign:"center"},children:"This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V."})})})]})})}},58:function(e,t,c){},73:function(e,t,c){"use strict";function a(e,t){var c=new Date(e+"T"+t);return(c.getHours()<10?"0":"")+c.getHours()+":"+((c.getMinutes()<10?"0":"")+c.getMinutes())}function s(e){var t=e.split("-");return"".concat(t[2],"/").concat(t[1],"/").concat(t[0])}c.d(t,"b",(function(){return a})),c.d(t,"a",(function(){return s}))}}]);
//# sourceMappingURL=7.0799470e.chunk.js.map