(this["webpackJsonpf1-data"]=this["webpackJsonpf1-data"]||[]).push([[7],{116:function(e,t,c){"use strict";c(0);var a=c(44),n=c(117),s=c(2);t.a=function(e){var t=e.date,c=e.time;return Object(s.jsx)(n.a,{date:Date.now()+(new Date(t).getTime()+36e5*c.split(":")[0]-(new Date).getTime()),renderer:function(e){var t=e.days,c=e.hours,n=e.minutes,r=e.seconds;return e.completed?Object(s.jsxs)(a.a,{children:[Object(s.jsx)("h1",{children:"RACE IN PROGRESS"}),Object(s.jsx)("h5",{children:"WAITING FOR RACE RESULTS"})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(a.a,{xs:3,sm:2,lg:1,children:[Object(s.jsx)("h1",{children:t}),Object(s.jsx)("h5",{children:"DAYS"})]}),Object(s.jsxs)(a.a,{xs:3,sm:2,lg:1,children:[Object(s.jsx)("h1",{children:c}),Object(s.jsx)("h5",{children:"HRS"})]}),Object(s.jsxs)(a.a,{xs:3,sm:2,lg:1,children:[Object(s.jsx)("h1",{children:n}),Object(s.jsx)("h5",{children:"MIN"})]}),Object(s.jsxs)(a.a,{xs:3,sm:2,lg:1,children:[Object(s.jsx)("h1",{children:r}),Object(s.jsx)("h5",{children:"SEC"})]})]})}})}},118:function(e,t,c){"use strict";var a=c(0),n=c(64),s=c(59),r=c(50),i=c(43),j=c(44),l=(c(51),c(54)),o=c(1),d=c(21),h=c(2),b={fontWeight:600,margin:"0px",padding:"0px",display:"inline"};t.a=function(e){var t=e.style,c=e.driversStandings,x=Object(o.g)(),u=Object(a.useContext)(d.a).theme;return Object(h.jsx)("div",{style:t,children:Object(h.jsxs)(n.a,{className:"table-hover standings-table",responsive:"xs",variant:u,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"POS"}),Object(h.jsx)("th",{className:"hideXS",children:"NO"}),Object(h.jsx)("th",{children:"NAME/TEAM"}),Object(h.jsx)("th",{className:"hideXS",children:"WINS"}),Object(h.jsx)("th",{children:"POINTS"})]})}),Object(h.jsx)("tbody",{children:c.map((function(e,t){return Object(h.jsxs)("tr",{className:"align-middle",style:{cursor:"pointer"},onClick:function(){return t=e.Driver.driverId,void x.push("/driver/".concat(t));var t},children:[Object(h.jsx)("td",{children:e.position}),Object(h.jsx)("td",{className:"hideXS",children:e.Driver.permanentNumber}),Object(h.jsx)("td",{children:Object(h.jsxs)(i.a,{className:"g-0",children:[Object(h.jsx)(j.a,{xs:2,lg:1,className:"align-self-center",children:Object(h.jsx)(s.a,{countryCode:r.a[e.Driver.nationality].toLowerCase(),height:20})}),Object(h.jsx)(j.a,{xs:2,lg:1,children:Object(h.jsx)(l.a,{constructorId:e.Constructors[0].constructorId,height:"42px"})}),Object(h.jsxs)(j.a,{xs:8,className:"text-start",children:[Object(h.jsxs)(i.a,{children:[Object(h.jsx)(j.a,{className:"showXS",children:Object(h.jsx)("p",{style:b,children:e.Driver.familyName.toUpperCase()})}),Object(h.jsxs)(j.a,{className:"hideXS",children:[e.Driver.givenName," ",Object(h.jsx)("p",{style:b,children:e.Driver.familyName.toUpperCase()})]})]}),Object(h.jsx)(i.a,{children:Object(h.jsx)(j.a,{style:{fontSize:"13px"},children:e.Constructors[0].name})})]})]})}),Object(h.jsx)("td",{className:"hideXS",children:e.wins}),Object(h.jsx)("td",{children:e.points})]},t)}))})]})})}},119:function(e,t,c){"use strict";var a=c(0),n=c(64),s=c(59),r=c(50),i=c(43),j=c(44),l=(c(51),c(54)),o=c(21),d=c(2),h={fontWeight:600,margin:"0px",padding:"0px",display:"inline"};t.a=function(e){var t=e.style,c=e.constructorsStandings,b=Object(a.useContext)(o.a).theme;return Object(d.jsx)("div",{style:t,children:null!==c?Object(d.jsxs)(n.a,{className:"standings-table",responsive:"sm",variant:b,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"POS"}),Object(d.jsx)("th",{children:"NAME"}),Object(d.jsx)("th",{className:"hideXS",children:"WINS"}),Object(d.jsx)("th",{children:"POINTS"})]})}),Object(d.jsx)("tbody",{children:c.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.position}),Object(d.jsx)("td",{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(j.a,{xs:2,children:Object(d.jsx)(s.a,{countryCode:r.a[e.Constructor.nationality].toLowerCase(),height:20})}),Object(d.jsx)(j.a,{xs:2,lg:1,children:Object(d.jsx)(l.a,{constructorId:e.Constructor.constructorId})}),Object(d.jsx)(j.a,{xs:8,className:"text-start",children:Object(d.jsx)(i.a,{children:Object(d.jsx)("p",{style:h,children:e.Constructor.name.toUpperCase()})})})]})}),Object(d.jsx)("td",{className:"hideXS",children:e.wins}),Object(d.jsx)("td",{children:e.points})]},t)}))})]}):Object(d.jsx)(i.a,{className:"justify-content-center text-center",children:Object(d.jsxs)(j.a,{md:"auto",children:[Object(d.jsx)("h3",{children:"There's no constructors' standings data available for this season."}),Object(d.jsx)("br",{})]})})})}},177:function(e,t,c){},311:function(e,t,c){"use strict";c.r(t);var a=c(0),n=(c(175),c(55)),s=c(57),r=c(69),i=c.n(r),j=c(70),l=c(20),o=c(43),d=c(44),h=c(48),b=c(298),x=c(21),u=c(2),O=function(e){var t=e.cardTitle,c=e.cardBody,n=e.cardFooter,s=e.cardHeight,r=Object(a.useContext)(x.a).theme;return Object(u.jsxs)(b.a,{style:{height:s},className:"text-center",bg:r,text:"light"===r?"dark":"light",children:[Object(u.jsx)(b.a.Header,{children:Object(u.jsx)("b",{children:t})}),Object(u.jsx)(b.a.Body,{children:Object(u.jsx)(o.a,{className:"justify-content-md-center",children:c})}),void 0!==n?Object(u.jsx)(b.a.Footer,{children:n}):null]})},m=c(8),f=c(59),g=c(73),p=c(79),y=c(50),R={fontWeight:600},N=function(e){var t=e.lastRace,c=Object(a.useContext)(x.a).theme;return Object(u.jsx)(O,{cardTitle:"PREVIOUS RACE",cardBody:Object(u.jsxs)("div",{children:[Object(u.jsxs)("h5",{children:["Round ",t.MRData.RaceTable.round]}),Object(u.jsx)("h1",{style:R,children:t.MRData.RaceTable.Races[0].raceName.toUpperCase()}),Object(u.jsx)("h5",{children:t.MRData.RaceTable.Races[0].Circuit.circuitName}),Object(u.jsx)("h6",{children:Object(p.a)(t.MRData.RaceTable.Races[0].date)}),Object(u.jsx)("h6",{children:Object(p.b)(t.MRData.RaceTable.Races[0].date,t.MRData.RaceTable.Races[0].time)}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("br",{}),Object(u.jsx)(f.a,{countryCode:y.a[t.MRData.RaceTable.Races[0].Circuit.Location.country].toLowerCase(),height:120})]}),Object(u.jsx)("h5",{style:{marginTop:"5%"},children:t.MRData.RaceTable.Races[0].Circuit.Location.country}),Object(u.jsx)("h5",{children:t.MRData.RaceTable.Races[0].Circuit.Location.locality})]}),cardFooter:Object(u.jsx)(m.b,{to:"/race/".concat(t.MRData.RaceTable.season,"/").concat(t.MRData.RaceTable.round),children:Object(u.jsx)(g.a,{variant:"light"===c?"dark":"light",children:"Full race result"})}),cardHeight:"34rem"})},v=c(116),S={fontWeight:600},C=function(e){var t=e.nextRace,c=Object(a.useContext)(x.a).theme;return Object(u.jsx)(O,{cardTitle:"NEXT RACE",cardBody:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h5",{children:["Round ",t.round]}),Object(u.jsx)("h1",{style:S,children:t.raceName.toUpperCase()}),Object(u.jsx)("h5",{children:t.Circuit.circuitName}),Object(u.jsx)("h6",{children:Object(p.a)(t.date)}),Object(u.jsx)("h6",{children:Object(p.b)(t.date,t.time)}),Object(u.jsx)(f.a,{countryCode:y.a[t.Circuit.Location.country].toLowerCase(),height:100}),Object(u.jsx)("p",{}),Object(u.jsx)(v.a,{date:t.date,time:t.time})]}),cardFooter:Object(u.jsx)(m.b,{to:"/race/".concat(t.season,"/").concat(t.round),children:Object(u.jsx)(g.a,{variant:"light"===c?"dark":"light",children:"Race information"})}),cardHeight:"32rem"})},D=c(90),T=c(64),A=c(54),F=(c(51),c(1)),w={fontWeight:600,marginTop:"15px",marginBottom:"10px"},I={fontWeight:600,margin:"0px",padding:"0px",display:"inline",marginTop:"50px"},M=function(e){var t=e.lastRace,c=e.numberOfRaces,n=Object(a.useContext)(x.a).theme,s=Object(a.useState)(null),r=Object(l.a)(s,2),h=r[0],b=r[1],m=Object(a.useState)(null),g=Object(l.a)(m,2),p=g[0],R=g[1],N=Object(a.useState)(!0),v=Object(l.a)(N,2),S=v[0],C=v[1],D=Object(F.g)(),M=function(e){D.push("/driver/".concat(e))};return Object(a.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/".concat(t.MRData.RaceTable.season,"/").concat(t.MRData.RaceTable.round,"/qualifying.json")).then((function(e){return e.json()})).then((function(e){R(e.MRData.RaceTable.Races[0].QualifyingResults[0]),C(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),t.MRData.RaceTable.Races[0].Results.forEach((function(e){e.FastestLap&&"1"===e.FastestLap.rank&&b(e)}))}),[t.MRData.RaceTable.season,t.MRData.RaceTable.round,t.MRData.RaceTable.Races]),Object(u.jsx)(O,{cardTitle:"PREVIOUS RACE",cardBody:Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{style:I,children:"PODIUM"}),Object(u.jsx)(T.a,{responsive:!0,className:"table-hover",variant:n,children:Object(u.jsx)("tbody",{className:"justify-content-center",children:t.MRData.RaceTable.Races[0].Results.slice(0,3).map((function(e,t){return Object(u.jsxs)("tr",{className:"align-middle",style:{cursor:"pointer"},onClick:function(){return M(e.Driver.driverId)},children:[Object(u.jsx)("td",{children:e.position}),Object(u.jsx)("td",{children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(d.a,{xs:2,lg:1,className:"align-self-center",children:Object(u.jsx)(f.a,{countryCode:y.a[e.Driver.nationality].toLowerCase(),height:20})}),Object(u.jsx)(d.a,{xs:1,children:Object(u.jsx)(A.a,{constructorId:e.Constructor.constructorId,height:"42px"})}),Object(u.jsxs)(d.a,{xs:8,className:"text-start",children:[Object(u.jsxs)(o.a,{children:[Object(u.jsxs)(d.a,{className:"hideXS",children:[e.Driver.givenName," ",Object(u.jsx)("p",{style:I,children:e.Driver.familyName.toUpperCase()})]}),Object(u.jsx)(d.a,{className:"showXS",children:Object(u.jsx)("p",{style:I,children:e.Driver.familyName.toUpperCase()})})]}),Object(u.jsx)(o.a,{children:Object(u.jsx)(d.a,{style:{fontSize:"13px"},children:e.Constructor.name})})]})]})}),Object(u.jsxs)("td",{children:["+",e.points]})]},t)}))})}),Object(u.jsx)("h4",{style:w,children:"FASTEST LAP / POLE POSITION"}),Object(u.jsx)(T.a,{responsive:!0,className:"table-hover",variant:n,children:Object(u.jsxs)("tbody",{children:[null===h?null:Object(u.jsxs)("tr",{className:"align-middle",style:{cursor:"pointer"},onClick:function(){return M(h.Driver.driverId)},children:[Object(u.jsx)("td",{children:"FL"}),Object(u.jsx)("td",{children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(d.a,{xs:2,lg:1,className:"align-self-center",children:Object(u.jsx)(f.a,{countryCode:y.a[h.Driver.nationality].toLowerCase(),height:20})}),Object(u.jsx)(d.a,{xs:1,children:Object(u.jsx)(A.a,{constructorId:h.Constructor.constructorId,height:"42px"})}),Object(u.jsxs)(d.a,{xs:8,className:"text-start",children:[Object(u.jsxs)(o.a,{children:[Object(u.jsxs)(d.a,{className:"hideXS",children:[h.Driver.givenName," ",Object(u.jsx)("p",{style:I,children:h.Driver.familyName.toUpperCase()})]}),Object(u.jsx)(d.a,{className:"showXS",children:Object(u.jsx)("p",{style:I,children:h.Driver.familyName.toUpperCase()})})]}),Object(u.jsx)(o.a,{children:Object(u.jsx)(d.a,{style:{fontSize:"13px"},children:h.Constructor.name})})]})]})}),Object(u.jsx)("td",{children:h.FastestLap.Time.time})]}),S?null:Object(u.jsxs)("tr",{className:"align-middle",style:{cursor:"pointer"},onClick:function(){return M(p.Driver.driverId)},children:[Object(u.jsx)("td",{children:"PP"}),Object(u.jsx)("td",{children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(d.a,{xs:2,lg:1,className:"align-self-center",children:Object(u.jsx)(f.a,{countryCode:y.a[p.Driver.nationality].toLowerCase(),height:20})}),Object(u.jsx)(d.a,{xs:1,children:Object(u.jsx)(A.a,{constructorId:p.Constructor.constructorId,height:"42px"})}),Object(u.jsxs)(d.a,{xs:8,className:"text-start",children:[Object(u.jsxs)(o.a,{children:[Object(u.jsxs)(d.a,{className:"hideXS",children:[p.Driver.givenName," ",Object(u.jsx)("p",{style:I,children:p.Driver.familyName.toUpperCase()})]}),Object(u.jsx)(d.a,{className:"showXS",children:Object(u.jsx)("p",{style:I,children:p.Driver.familyName.toUpperCase()})})]}),Object(u.jsx)(o.a,{children:Object(u.jsx)(d.a,{style:{fontSize:"13px"},children:p.Constructor.name})})]})]})}),Object(u.jsx)("td",{children:p.Q3})]})]})})]}),cardFooter:Object(u.jsxs)("h4",{children:["Round: ",t.MRData.RaceTable.round," / ",c]}),cardHeight:"34rem"})},E=c(118),k=function(e){var t=e.driversStandings,c=Object(a.useContext)(x.a).theme;return Object(u.jsx)(O,{cardTitle:"DRIVERS' STANDINGS",cardBody:Object(u.jsx)(E.a,{style:{overflow:"hidden",overflowY:"scroll",height:"415px"},driversStandings:t}),cardHeight:"34rem",cardFooter:Object(u.jsx)(m.b,{to:"/standings",children:Object(u.jsx)(g.a,{variant:"light"===c?"dark":"light",children:"Full standings"})})})},B=c(119),L=function(e){var t=e.constructorsStandings,c=Object(a.useContext)(x.a).theme;return Object(u.jsx)(O,{cardTitle:"CONSTRUCTORS' STANDINGS",cardBody:Object(u.jsx)(B.a,{style:{overflow:"hidden",overflowY:"scroll",height:"415px"},constructorsStandings:t}),cardFooter:Object(u.jsx)(m.b,{to:"/standings",children:Object(u.jsx)(g.a,{variant:"light"===c?"dark":"light",children:"Full standings"})}),cardHeight:"34rem"})},U=c(178),P=(c(177),function(){var e=Object(a.useContext)(x.a).theme,t=Object(a.useState)(null),c=Object(l.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(null),b=Object(l.a)(r,2),O=b[0],m=b[1],f=Object(a.useState)(null),p=Object(l.a)(f,2),y=p[0],R=p[1],v=Object(a.useState)(!0),S=Object(l.a)(v,2),T=S[0],A=S[1],F=Object(a.useState)(!0),w=Object(l.a)(F,2),I=w[0],E=w[1],B=Object(a.useState)(null),P=Object(l.a)(B,2),H=P[0],z=P[1],X=Object(a.useState)(!0),G=Object(l.a)(X,2),W=G[0],Z=G[1],J=Object(a.useState)(!0),K=Object(l.a)(J,2),V=K[0],Y=K[1];Object(a.useEffect)((function(){var e=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/current/last/results.json").then((function(e){return e.json()})).then((function(e){m(e),E(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(j.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/current/next.json").then((function(e){return e.json()})).then((function(e){s(e.MRData.RaceTable.Races[0]),A(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/current/constructorStandings.json").then((function(e){return e.json()})).then((function(e){z(e.MRData.StandingsTable.StandingsLists[0].ConstructorStandings),Z(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/current/driverStandings.json").then((function(e){return e.json()})).then((function(e){R(e.MRData.StandingsTable.StandingsLists[0].DriverStandings),Y(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t(),a(),c()}),[]);return Object(u.jsxs)(h.a,{style:{minHeight:"500px"},children:[Object(u.jsxs)(o.a,{className:"justify-content-center text-center",children:[Object(u.jsx)(d.a,{xs:{span:8,offset:2},children:Object(u.jsxs)("h1",{children:[I?null:O.MRData.RaceTable.season," FORMULA ONE"]})}),Object(u.jsx)(d.a,{xs:2,className:"refresh-button text-end",children:Object(u.jsx)(g.a,{onClick:function(){return caches.keys().then((function(e){e.forEach((function(e){caches.delete(e)}))})),void window.location.reload()},variant:"dark"===e?"light":"dark",children:Object(u.jsx)(U.a,{})})})]}),I||T?Object(u.jsx)(o.a,{className:"justify-content-center text-center",children:Object(u.jsx)(D.a,{animation:"border"})}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(o.a,{className:"justify-content-center text-center g-2",children:[Object(u.jsx)(d.a,{lg:12,children:Object(u.jsx)(C,{nextRace:n})}),Object(u.jsx)(d.a,{xs:12,lg:6,children:Object(u.jsx)(N,{lastRace:O})}),Object(u.jsx)(d.a,{xs:12,lg:6,children:Object(u.jsx)(M,{lastRace:O,numberOfRaces:"22"})})]}),V||W?Object(u.jsx)(o.a,{className:"justify-content-center text-center",children:Object(u.jsx)(D.a,{animation:"border"})}):Object(u.jsxs)(o.a,{className:"g-2",style:{marginTop:"1px"},children:[Object(u.jsx)(d.a,{children:Object(u.jsx)(k,{driversStandings:y})}),Object(u.jsx)(d.a,{children:Object(u.jsx)(L,{constructorsStandings:H})})]})]})]})});t.default=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(n.a,{}),Object(u.jsx)(P,{}),Object(u.jsx)(s.a,{})]})}},50:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var a={British:"GB",Finnish:"FI",Dutch:"NL",Mexican:"MX",Spanish:"ES",Australian:"AU",Monegasque:"MC",French:"FR",German:"DE",Japanese:"JP",Canadian:"CA",Italian:"IT",Russian:"RU",Austrian:"AT",Swiss:"CH",American:"US",Thai:"TH","New Zealander":"NZ","New Zealand":"NZ",Swedish:"SE",Portuguese:"PT",Brazilian:"BR",Hungarian:"HU",Argentine:"AR",Belgian:"BE",Belgium:"BE","South African":"ZA",Danish:"DK",Liechtensteiner:"LI","Hong Kong":"HK",Irish:"IE",Chilean:"CL",Venezuelan:"VE",Colombian:"CO",Czech:"CZ",Malaysia:"MY",Indian:"IN",Polish:"PL",Indonesian:"ID",Rhodesian:"ZW",Russia:"RU",Korea:"KR",Argentina:"AR",UAE:"AE",Australia:"AU",Austria:"AT",Azerbaijan:"AZ",Bahrain:"BH",Brazil:"BR",Canada:"CA",China:"CN",France:"FR",Germany:"DE",Hungary:"HU",India:"IN",Italy:"IT",Japan:"JP",Malyasia:"MY",Malaysian:"MY",Mexico:"MX",Monaco:"MC",Morocco:"MA",Netherlands:"NL",Portugal:"PT","Saudi Arabia":"SA",Singapore:"SG","South Africa":"ZA",Spain:"ES",Sweden:"SE",Switzerland:"CH",Turkey:"TR",UK:"GB",USA:"US",Qatar:"QA"}},51:function(e,t,c){},54:function(e,t,c){"use strict";c(0);var a={red_bull:"#0600EF",williams:"#005AFF",mercedes:"#00D2BE",mclaren:"#FF8700",aston_martin:"#006F62",alphatauri:"#2B4562",alpine:"#0090FF",ferrari:"#DC0000",haas:"#FFFFFF",alfa:"#900000",renault:"#FFF500",racing_point:"#FFC0CB",toro_rosso:"#469BFF",force_india:"#F596C8",sauber:"#9B0000",manor:"#323232",lotus_f1:"#FFB800",marussia:"#6E0000",caterham:"#0b361f"},n=c(2);t.a=function(e){var t=e.constructorId,c=e.height,s=void 0===c?"27px":c;return Object(n.jsx)("div",{style:{width:"3px",height:s,display:"table",margin:"0 auto",backgroundColor:a.hasOwnProperty(t)?a[t]:"#000000"}})}},55:function(e,t,c){"use strict";var a=c(0),n=c(21),s=c(48),r=c(43),i=c(44),j=c(86),l=(c(56),c(8)),o=c(78),d=c(49),h=c(87),b=c(2);t.a=function(){var e=Object(a.useContext)(n.a),t=e.theme,c=e.setTheme;return Object(a.useEffect)((function(){localStorage.setItem("theme",t)}),[t]),Object(b.jsx)(j.a,{className:"navbar",bg:"dark",variant:"dark",children:Object(b.jsxs)(s.a,{style:{minHeight:"40px"},children:[Object(b.jsx)(l.b,{to:"/",style:{textDecoration:"none"},children:Object(b.jsx)(j.a.Brand,{className:"icon-link",children:Object(b.jsx)(d.a,{size:30})})}),Object(b.jsx)(l.b,{to:"/schedule",style:{textDecoration:"none"},children:Object(b.jsx)(j.a.Brand,{className:"text-link",children:"RACES"})}),Object(b.jsx)(l.b,{to:"/standings",style:{textDecoration:"none"},children:Object(b.jsx)(j.a.Brand,{className:"text-link",children:"STANDINGS"})}),Object(b.jsx)(j.a.Collapse,{className:"justify-content-end",children:Object(b.jsxs)(r.a,{className:"g-2",children:[Object(b.jsx)(i.a,{style:{marginTop:"15px"},children:Object(b.jsx)(h.a,{onChange:function(){return function(){var e="light"===t?"dark":"light";c(e),localStorage.setItem("theme",e)}()},checked:"dark"===t,size:20})}),Object(b.jsx)(i.a,{children:Object(b.jsx)(j.a.Brand,{className:"icon-link",href:"https://github.com/jdro10","aria-label":"Github",children:Object(b.jsx)(o.a,{size:25})})})]})})]})})}},56:function(e,t,c){},57:function(e,t,c){"use strict";c(0),c(58);var a=c(48),n=c(43),s=c(44),r=c(49),i=c(46),j=c(53),l=c(72),o=c(52),d=c(2);t.a=function(){return Object(d.jsx)("footer",{children:Object(d.jsxs)(a.a,{children:[Object(d.jsxs)(n.a,{className:"justify-content-center text-center",xs:"auto",id:"row",children:[Object(d.jsx)(s.a,{children:Object(d.jsx)(r.a,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(i.c,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(i.e,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(j.a,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(i.d,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(i.b,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(l.a,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(o.b,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(j.b,{size:40})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(o.c,{size:40})})]}),Object(d.jsx)(n.a,{className:"justify-content-md-center",xs:"auto",id:"lastRow"}),Object(d.jsx)(n.a,{className:"justify-content-md-center",children:Object(d.jsx)(s.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"API"})})}),Object(d.jsx)(n.a,{className:"justify-content-md-center",children:Object(d.jsxs)(s.a,{md:"auto",style:{textAlign:"center"},children:["All racing data is obtained through"," ",Object(d.jsx)("a",{href:"http://ergast.com/mrd/",style:{color:"white"},children:"Ergast API"}),"."]})}),Object(d.jsx)(n.a,{className:"justify-content-md-center",children:Object(d.jsxs)(s.a,{md:"auto",style:{textAlign:"center"},children:["Some drivers' and circuits' information are obtained through"," ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/w/api.php",style:{color:"white"},children:"Wikipedia API"}),"."]})}),Object(d.jsx)("br",{}),Object(d.jsx)(n.a,{className:"justify-content-md-center",children:Object(d.jsx)(s.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"DISCLAIMER"})})}),Object(d.jsx)(n.a,{className:"justify-content-md-center",children:Object(d.jsx)(s.a,{md:"auto",style:{textAlign:"center"},children:"This website was developed for learning and educational purposes only."})}),Object(d.jsx)(n.a,{className:"justify-content-md-center",children:Object(d.jsx)(s.a,{md:"auto",style:{textAlign:"center"},children:"Data displayed may be inaccurate. By using this website you acknowledge this."})}),Object(d.jsx)(n.a,{className:"justify-content-md-center",children:Object(d.jsx)(s.a,{md:"auto",style:{textAlign:"center"},children:"The author disclaims all responsibility for any loss or damage arising from the use of this website."})}),Object(d.jsx)("br",{}),Object(d.jsx)(n.a,{className:"justify-content-md-center",children:Object(d.jsx)(s.a,{md:7,children:Object(d.jsx)("p",{style:{textAlign:"center"},children:"This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V."})})})]})})}},58:function(e,t,c){},79:function(e,t,c){"use strict";function a(e,t){var c=new Date(e+"T"+t);return(c.getHours()<10?"0":"")+c.getHours()+":"+((c.getMinutes()<10?"0":"")+c.getMinutes())+":00"}function n(e){var t=e.split("-");return"".concat(t[2],"/").concat(t[1],"/").concat(t[0])}c.d(t,"b",(function(){return a})),c.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=7.f8a1fe0e.chunk.js.map