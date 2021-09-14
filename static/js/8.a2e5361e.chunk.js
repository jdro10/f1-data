(this["webpackJsonpf1-data"]=this["webpackJsonpf1-data"]||[]).push([[8],{139:function(e,t,c){"use strict";c.r(t);var n=c(0),s=(c(116),c(44)),a=c(47),r=c(49),i=c.n(r),j=c(50),l=c(31),o=c(36),d=c(37),h=c(38),b=c(126),u=c(3),x=function(e){var t=e.cardTitle,c=e.cardBody,n=e.cardFooter,s=e.cardHeight,a=e.variant;return Object(u.jsxs)(b.a,{style:{height:s},className:"text-center",bg:a,text:"light"===a?"dark":"white",children:[Object(u.jsx)(b.a.Header,{children:Object(u.jsx)("b",{children:t})}),Object(u.jsx)(b.a.Body,{children:Object(u.jsx)(o.a,{className:"justify-content-md-center",children:c})}),void 0!==n?Object(u.jsx)(b.a.Footer,{children:n}):null]})},O=c(8),m=c(51),f=c(64),p=c(78),g={fontWeight:600},y=function(e){var t=e.lastRace,c=Object(n.useState)(null),s=Object(l.a)(c,2),a=s[0],r=s[1],o=Object(n.useState)(!0),d=Object(l.a)(o,2),h=d[0],b=d[1];return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/name/".concat(t.MRData.RaceTable.Races[0].Circuit.Location.country,"?fullText=true")).then((function(e){return e.json()})).then((function(e){r(e[0].alpha2Code),b(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.MRData.RaceTable.Races]),Object(u.jsx)(x,{cardTitle:"PREVIOUS RACE",cardBody:Object(u.jsxs)("div",{children:[Object(u.jsxs)("h5",{children:["Round ",t.MRData.RaceTable.round]}),Object(u.jsx)("h1",{style:g,children:t.MRData.RaceTable.Races[0].raceName.toUpperCase()}),Object(u.jsx)("h5",{children:t.MRData.RaceTable.Races[0].Circuit.circuitName}),Object(u.jsx)("h6",{children:t.MRData.RaceTable.Races[0].date}),Object(u.jsx)("h6",{children:Object(p.a)(t.MRData.RaceTable.Races[0].date,t.MRData.RaceTable.Races[0].time)}),h?null:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("br",{}),Object(u.jsx)(m.a,{countryCode:a.toLowerCase(),height:120})]}),Object(u.jsx)("h5",{style:{marginTop:"5%"},children:t.MRData.RaceTable.Races[0].Circuit.Location.country}),Object(u.jsx)("h5",{children:t.MRData.RaceTable.Races[0].Circuit.Location.locality})]}),cardFooter:Object(u.jsx)(O.b,{to:"/race/".concat(t.MRData.RaceTable.season,"/").concat(t.MRData.RaceTable.round),children:Object(u.jsx)(f.a,{variant:"dark",children:"Full race result"})}),cardHeight:"34rem",variant:"light"})},v=c(90),R=c(39),N={fontWeight:600},S=function(e){var t=e.nextRace,c=Object(n.useState)(null),s=Object(l.a)(c,2),a=s[0],r=s[1],o=Object(n.useState)(!0),d=Object(l.a)(o,2),h=d[0],b=d[1];return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/name/".concat(t.Circuit.Location.country,"?fullText=true")).then((function(e){return e.json()})).then((function(e){r(e[0].alpha2Code),b(!1)})).catch((function(e){r(R.a[t.Circuit.Location.country].toLowerCase()),b(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.Circuit.Location.country]),Object(u.jsx)(x,{cardTitle:"NEXT RACE",cardBody:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h5",{children:["Round ",t.round]}),Object(u.jsx)("h1",{style:N,children:t.raceName.toUpperCase()}),Object(u.jsx)("h5",{children:t.Circuit.circuitName}),Object(u.jsx)("h6",{children:t.date}),Object(u.jsx)("h6",{children:Object(p.a)(t.date,t.time)}),h?null:Object(u.jsx)(m.a,{countryCode:a.toLowerCase(),height:100}),Object(u.jsx)("p",{}),Object(u.jsx)(v.a,{date:t.date,time:t.time})]}),cardFooter:Object(u.jsx)(O.b,{to:"/race/".concat(t.season,"/").concat(t.round),children:Object(u.jsx)(f.a,{variant:"dark",children:"Race information"})}),cardHeight:"32rem",variant:"light"})},C=c(74),D=c(53),w=c(55),T=(c(52),c(1)),F={fontWeight:600,marginTop:"15px",marginBottom:"10px"},I={fontWeight:600,margin:"0px",padding:"0px",display:"inline",marginTop:"50px"},M=function(e){var t=e.lastRace,c=e.numberOfRaces,s=Object(n.useState)(null),a=Object(l.a)(s,2),r=a[0],h=a[1],b=Object(n.useState)(null),O=Object(l.a)(b,2),f=O[0],p=O[1],g=Object(n.useState)(!0),y=Object(l.a)(g,2),v=y[0],N=y[1],S=Object(T.g)(),C=function(e){S.push("/driver/".concat(e))};return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/".concat(t.MRData.RaceTable.season,"/").concat(t.MRData.RaceTable.round,"/qualifying.json")).then((function(e){return e.json()})).then((function(e){p(e.MRData.RaceTable.Races[0].QualifyingResults[0]),N(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),t.MRData.RaceTable.Races[0].Results.forEach((function(e){e.FastestLap&&"1"===e.FastestLap.rank&&h(e)}))}),[t.MRData.RaceTable.season,t.MRData.RaceTable.round,t.MRData.RaceTable.Races]),Object(u.jsx)(x,{cardTitle:"PREVIOUS RACE",cardBody:Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{style:I,children:"PODIUM"}),Object(u.jsx)(D.a,{responsive:!0,className:"table-hover",children:Object(u.jsx)("tbody",{className:"justify-content-center",children:t.MRData.RaceTable.Races[0].Results.slice(0,3).map((function(e,t){return Object(u.jsxs)("tr",{className:"align-middle",style:{cursor:"pointer"},onClick:function(){return C(e.Driver.driverId)},children:[Object(u.jsx)("td",{children:e.position}),Object(u.jsx)("td",{children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(d.a,{xs:2,className:"align-self-center",children:Object(u.jsx)(m.a,{countryCode:R.a[e.Driver.nationality].toLowerCase(),height:20})}),Object(u.jsx)(d.a,{xs:1,children:Object(u.jsx)(w.a,{constructorId:e.Constructor.constructorId,height:"42px"})}),Object(u.jsxs)(d.a,{xs:8,className:"text-start",children:[Object(u.jsxs)(o.a,{children:[Object(u.jsxs)(d.a,{className:"hideXS",children:[e.Driver.givenName," ",Object(u.jsx)("p",{style:I,children:e.Driver.familyName.toUpperCase()})]}),Object(u.jsx)(d.a,{className:"showXS",children:Object(u.jsx)("p",{style:I,children:e.Driver.familyName.toUpperCase()})})]}),Object(u.jsx)(o.a,{children:Object(u.jsx)(d.a,{style:{fontSize:"13px"},children:e.Constructor.name})})]})]})}),Object(u.jsxs)("td",{children:["+",e.points]})]},t)}))})}),Object(u.jsx)("h4",{style:F,children:"FASTEST LAP / POLE POSITION"}),Object(u.jsx)(D.a,{responsive:!0,className:"table-hover",children:Object(u.jsxs)("tbody",{children:[null===r?null:Object(u.jsxs)("tr",{className:"align-middle",style:{cursor:"pointer"},onClick:function(){return C(r.Driver.driverId)},children:[Object(u.jsx)("td",{children:"FL"}),Object(u.jsx)("td",{children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(d.a,{xs:2,className:"align-self-center",children:Object(u.jsx)(m.a,{countryCode:R.a[r.Driver.nationality].toLowerCase(),height:20})}),Object(u.jsx)(d.a,{xs:1,children:Object(u.jsx)(w.a,{constructorId:r.Constructor.constructorId,height:"42px"})}),Object(u.jsxs)(d.a,{xs:8,className:"text-start",children:[Object(u.jsxs)(o.a,{children:[Object(u.jsxs)(d.a,{className:"hideXS",children:[r.Driver.givenName," ",Object(u.jsx)("p",{style:I,children:r.Driver.familyName.toUpperCase()})]}),Object(u.jsx)(d.a,{className:"showXS",children:Object(u.jsx)("p",{style:I,children:r.Driver.familyName.toUpperCase()})})]}),Object(u.jsx)(o.a,{children:Object(u.jsx)(d.a,{style:{fontSize:"13px"},children:r.Constructor.name})})]})]})}),Object(u.jsx)("td",{children:r.FastestLap.Time.time})]}),v?null:Object(u.jsxs)("tr",{className:"align-middle",style:{cursor:"pointer"},onClick:function(){return C(f.Driver.driverId)},children:[Object(u.jsx)("td",{children:"PP"}),Object(u.jsx)("td",{children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(d.a,{xs:2,className:"align-self-center",children:Object(u.jsx)(m.a,{countryCode:R.a[f.Driver.nationality].toLowerCase(),height:20})}),Object(u.jsx)(d.a,{xs:1,children:Object(u.jsx)(w.a,{constructorId:f.Constructor.constructorId,height:"42px"})}),Object(u.jsxs)(d.a,{xs:8,className:"text-start",children:[Object(u.jsxs)(o.a,{children:[Object(u.jsxs)(d.a,{className:"hideXS",children:[f.Driver.givenName," ",Object(u.jsx)("p",{style:I,children:f.Driver.familyName.toUpperCase()})]}),Object(u.jsx)(d.a,{className:"showXS",children:Object(u.jsx)("p",{style:I,children:f.Driver.familyName.toUpperCase()})})]}),Object(u.jsx)(o.a,{children:Object(u.jsx)(d.a,{style:{fontSize:"13px"},children:f.Constructor.name})})]})]})}),Object(u.jsx)("td",{children:f.Q3})]})]})})]}),cardFooter:Object(u.jsxs)("h4",{children:["Round: ",t.MRData.RaceTable.round," / ",c]}),cardHeight:"34rem",variant:"light"})},A=c(92),L=function(e){var t=e.driversStandings;return Object(u.jsx)(x,{cardTitle:"DRIVERS' STANDINGS",cardBody:Object(u.jsx)(A.a,{style:{overflow:"hidden",overflowY:"scroll",height:"415px"},driversStandings:t}),cardHeight:"34rem",variant:"light",cardFooter:Object(u.jsx)(O.b,{to:"/standings",children:Object(u.jsx)(f.a,{variant:"dark",children:"Full standings"})})})},E=c(93),k=function(e){var t=e.constructorsStandings;return Object(u.jsx)(x,{cardTitle:"CONSTRUCTORS' STANDINGS",cardBody:Object(u.jsx)(E.a,{style:{overflow:"hidden",overflowY:"scroll",height:"415px"},constructorsStandings:t}),cardFooter:Object(u.jsx)(O.b,{to:"/standings",children:Object(u.jsx)(f.a,{variant:"dark",children:"Full standings"})}),cardHeight:"34rem",variant:"light"})},B={marginBottom:"10px"},P=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),r=Object(l.a)(a,2),b=r[0],x=r[1],O=Object(n.useState)(null),m=Object(l.a)(O,2),f=m[0],p=m[1],g=Object(n.useState)(!0),v=Object(l.a)(g,2),R=v[0],N=v[1],D=Object(n.useState)(!0),w=Object(l.a)(D,2),T=w[0],F=w[1],I=Object(n.useState)(null),A=Object(l.a)(I,2),E=A[0],P=A[1],U=Object(n.useState)(!0),H=Object(l.a)(U,2),z=H[0],X=H[1],W=Object(n.useState)(!0),Z=Object(l.a)(W,2),G=Z[0],V=Z[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/current/last/results.json").then((function(e){return e.json()})).then((function(e){x(e),F(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(j.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/current/next.json").then((function(e){return e.json()})).then((function(e){s(e.MRData.RaceTable.Races[0]),N(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/current/constructorStandings.json").then((function(e){return e.json()})).then((function(e){P(e.MRData.StandingsTable.StandingsLists[0].ConstructorStandings),X(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/current/driverStandings.json").then((function(e){return e.json()})).then((function(e){p(e.MRData.StandingsTable.StandingsLists[0].DriverStandings),V(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t(),n(),c()}),[]),Object(u.jsxs)(h.a,{style:{minHeight:"500px"},children:[Object(u.jsx)(o.a,{className:"justify-content-center text-center",children:Object(u.jsx)(d.a,{md:"auto",children:Object(u.jsxs)("h1",{children:[T?null:b.MRData.RaceTable.season," FORMULA ONE"]})})}),T||R?Object(u.jsx)(o.a,{className:"justify-content-center text-center",children:Object(u.jsx)(C.a,{animation:"border"})}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(o.a,{className:"justify-content-center text-center",children:[Object(u.jsx)(d.a,{lg:12,style:B,children:Object(u.jsx)(S,{nextRace:c})}),Object(u.jsx)(d.a,{xs:12,lg:6,style:B,children:Object(u.jsx)(y,{lastRace:b})}),Object(u.jsx)(d.a,{xs:12,lg:6,style:B,children:Object(u.jsx)(M,{lastRace:b,numberOfRaces:"23"})})]}),G||z?Object(u.jsx)(o.a,{className:"justify-content-center text-center",children:Object(u.jsx)(C.a,{animation:"border"})}):Object(u.jsxs)(o.a,{children:[Object(u.jsx)(d.a,{style:B,children:Object(u.jsx)(L,{driversStandings:f})}),Object(u.jsx)(d.a,{style:B,children:Object(u.jsx)(k,{constructorsStandings:E})})]})]})]})};t.default=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(s.a,{}),Object(u.jsx)(P,{}),Object(u.jsx)(a.a,{})]})}},39:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var n={British:"GB",Finnish:"FI",Dutch:"NL",Mexican:"MX",Spanish:"ES",Australian:"AU",Monegasque:"MC",French:"FR",German:"DE",Japanese:"JP",Canadian:"CA",Italian:"IT",Russian:"RU",Austrian:"AT",Swiss:"CH",American:"US",Thai:"TH","New Zealander":"NZ","New Zealand":"NZ",Swedish:"SE",Portuguese:"PT",Brazilian:"BR",Hungarian:"HU",Argentine:"AR",Belgian:"BE",Belgium:"BE","South African":"ZA",Danish:"DK",Liechtensteiner:"LI","Hong Kong":"HK",Irish:"IE",Chilean:"CL",Venezuelan:"VE",Colombian:"CO",Czech:"CZ",Malaysian:"MY",Indian:"IN",Polish:"PL",Indonesian:"ID",Rhodesian:"ZW",Russia:"RU",Korea:"KR"}},44:function(e,t,c){"use strict";c(0);var n=c(38),s=c(71),a=(c(45),c(8)),r=c(63),i=c(40),j=c(3);t.a=function(){return Object(j.jsx)(s.a,{className:"navbar",bg:"dark",variant:"dark",children:Object(j.jsxs)(n.a,{children:[Object(j.jsx)(s.a.Brand,{children:Object(j.jsx)(i.a,{size:30})}),Object(j.jsx)(a.b,{to:"/",style:{textDecoration:"none"},children:Object(j.jsx)(s.a.Brand,{children:"Home"})}),Object(j.jsx)(a.b,{to:"/schedule",style:{textDecoration:"none"},children:Object(j.jsx)(s.a.Brand,{children:"Races"})}),Object(j.jsx)(a.b,{to:"/standings",style:{textDecoration:"none"},children:Object(j.jsx)(s.a.Brand,{children:"Standings"})}),Object(j.jsx)(s.a.Collapse,{className:"justify-content-end",children:Object(j.jsx)(s.a.Brand,{href:"https://github.com/jdro10","aria-label":"Github",children:Object(j.jsx)(r.a,{size:25})})})]})})}},45:function(e,t,c){},47:function(e,t,c){"use strict";c(0),c(48);var n=c(38),s=c(36),a=c(37),r=c(40),i=c(35),j=c(41),l=c(59),o=c(42),d=c(3);t.a=function(){return Object(d.jsx)("footer",{children:Object(d.jsxs)(n.a,{children:[Object(d.jsxs)(s.a,{className:"justify-content-center text-center",xs:"auto",id:"row",children:[Object(d.jsx)(a.a,{children:Object(d.jsx)(r.a,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(i.b,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(i.d,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(j.a,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(i.c,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(i.a,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(l.a,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(o.a,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(j.b,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(o.b,{size:40})})]}),Object(d.jsx)(s.a,{className:"justify-content-md-center",xs:"auto",id:"lastRow"}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"API"})})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsxs)(a.a,{md:"auto",style:{textAlign:"center"},children:["All racing data is obtained through"," ",Object(d.jsx)("a",{href:"http://ergast.com/mrd/",style:{color:"white"},children:"Ergast API"}),"."]})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsxs)(a.a,{md:"auto",style:{textAlign:"center"},children:["Countries data is obtained through"," ",Object(d.jsx)("a",{href:"https://restcountries.eu/",style:{color:"white"},children:"REST Countries API"}),"."]})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsxs)(a.a,{md:"auto",style:{textAlign:"center"},children:["Some drivers, teams and circuits data are obtained through"," ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/wiki/Main_Page",style:{color:"white"},children:"Wikipedia API"}),"."]})}),Object(d.jsx)("br",{}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"Disclaimer"})})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:"This website was developed for learning and educational purposes only."})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:"Data displayed may be inaccurate. By using this website you acknowledge this."})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:"The author disclaims all responsibility for any loss or damage arising from the use of this website."})}),Object(d.jsx)("br",{}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(a.a,{md:7,children:Object(d.jsx)("p",{style:{textAlign:"center"},children:"This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V."})})})]})})}},48:function(e,t,c){},52:function(e,t,c){},55:function(e,t,c){"use strict";c(0);var n={red_bull:"#0000FF",williams:"#1E90FF",mercedes:"#7FFFD4",mclaren:"#FFA500",aston_martin:"#008000",alphatauri:"#778899",alpine:"#4169E1",ferrari:"#FF0000",haas:"#FFFFFF",alfa:"#8B0000",renault:"#FFFF00",racing_point:"#FFC0CB"},s=c(3);t.a=function(e){var t=e.constructorId,c=e.height,a=void 0===c?"27px":c;return Object(s.jsx)("div",{style:{width:"3px",height:a,backgroundColor:n.hasOwnProperty(t)?n[t]:"#000000"}})}},78:function(e,t,c){"use strict";function n(e,t){var c=new Date(e+"T"+t);return(c.getHours()<10?"0":"")+c.getHours()+":"+((c.getMinutes()<10?"0":"")+c.getMinutes())+":00"}c.d(t,"a",(function(){return n}))},90:function(e,t,c){"use strict";c(0);var n=c(37),s=c(91),a=c(3);t.a=function(e){var t=e.date,c=e.time;return Object(a.jsx)(s.a,{date:Date.now()+(new Date(t).getTime()+36e5*c.split(":")[0]-(new Date).getTime()),renderer:function(e){var t=e.days,c=e.hours,s=e.minutes,r=e.seconds;return e.completed?Object(a.jsxs)(n.a,{children:[Object(a.jsx)("h1",{children:"Race in progress"}),Object(a.jsx)("h5",{children:"Waiting for race results"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(n.a,{xs:3,sm:2,lg:1,children:[Object(a.jsx)("h1",{children:t}),Object(a.jsx)("h5",{children:"DAYS"})]}),Object(a.jsxs)(n.a,{xs:3,sm:2,lg:1,children:[Object(a.jsx)("h1",{children:c}),Object(a.jsx)("h5",{children:"HRS"})]}),Object(a.jsxs)(n.a,{xs:3,sm:2,lg:1,children:[Object(a.jsx)("h1",{children:s}),Object(a.jsx)("h5",{children:"MIN"})]}),Object(a.jsxs)(n.a,{xs:3,sm:2,lg:1,children:[Object(a.jsx)("h1",{children:r}),Object(a.jsx)("h5",{children:"SEC"})]})]})}})}},92:function(e,t,c){"use strict";c(0);var n=c(53),s=c(51),a=c(39),r=c(36),i=c(37),j=(c(52),c(55)),l=c(1),o=c(3),d={fontWeight:600,margin:"0px",padding:"0px",display:"inline"};t.a=function(e){var t=e.style,c=e.driversStandings,h=Object(l.g)();return Object(o.jsx)("div",{style:t,children:Object(o.jsxs)(n.a,{className:"table-hover",responsive:"xs",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"POS"}),Object(o.jsx)("th",{className:"hideXS",children:"NO"}),Object(o.jsx)("th",{children:"NAME/TEAM"}),Object(o.jsx)("th",{className:"hideXS",children:"WINS"}),Object(o.jsx)("th",{children:"POINTS"})]})}),Object(o.jsx)("tbody",{children:c.map((function(e,t){return Object(o.jsxs)("tr",{className:"align-middle",style:{cursor:"pointer"},onClick:function(){return t=e.Driver.driverId,void h.push("/driver/".concat(t));var t},children:[Object(o.jsx)("td",{children:e.position}),Object(o.jsx)("td",{className:"hideXS",children:e.Driver.permanentNumber}),Object(o.jsx)("td",{children:Object(o.jsxs)(r.a,{className:"g-0",children:[Object(o.jsx)(i.a,{xs:2,className:"align-self-center",children:Object(o.jsx)(s.a,{countryCode:a.a[e.Driver.nationality].toLowerCase(),height:20})}),Object(o.jsx)(i.a,{xs:1,children:Object(o.jsx)(j.a,{constructorId:e.Constructors[0].constructorId,height:"42px"})}),Object(o.jsxs)(i.a,{xs:8,className:"text-start",children:[Object(o.jsxs)(r.a,{children:[Object(o.jsx)(i.a,{className:"showXS",children:Object(o.jsx)("p",{style:d,children:e.Driver.familyName.toUpperCase()})}),Object(o.jsxs)(i.a,{className:"hideXS",children:[e.Driver.givenName," ",Object(o.jsx)("p",{style:d,children:e.Driver.familyName.toUpperCase()})]})]}),Object(o.jsx)(r.a,{children:Object(o.jsx)(i.a,{style:{fontSize:"13px"},children:e.Constructors[0].name})})]})]})}),Object(o.jsx)("td",{className:"hideXS",children:e.wins}),Object(o.jsx)("td",{children:e.points})]},t)}))})]})})}},93:function(e,t,c){"use strict";c(0);var n=c(53),s=c(51),a=c(39),r=c(36),i=c(37),j=(c(52),c(55)),l=c(3);t.a=function(e){var t=e.style,c=e.constructorsStandings;return Object(l.jsx)("div",{style:t,children:null!==c?Object(l.jsxs)(n.a,{responsive:"sm",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"POS"}),Object(l.jsx)("th",{children:"NAME"}),Object(l.jsx)("th",{className:"hideXS",children:"WINS"}),Object(l.jsx)("th",{children:"POINTS"})]})}),Object(l.jsx)("tbody",{children:c.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.position}),Object(l.jsx)("td",{children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(i.a,{xs:2,children:Object(l.jsx)(s.a,{countryCode:a.a[e.Constructor.nationality].toLowerCase(),height:20})}),Object(l.jsx)(i.a,{xs:1,children:Object(l.jsx)(j.a,{constructorId:e.Constructor.constructorId})}),Object(l.jsx)(i.a,{xs:8,className:"text-start",children:e.Constructor.name.toUpperCase()})]})}),Object(l.jsx)("td",{className:"hideXS",children:e.wins}),Object(l.jsx)("td",{children:e.points})]},t)}))})]}):Object(l.jsx)(r.a,{className:"justify-content-center text-center",children:Object(l.jsxs)(i.a,{md:"auto",children:[Object(l.jsx)("h3",{children:"There's no constructors' standings data available for this season."}),Object(l.jsx)("br",{})]})})})}}}]);
//# sourceMappingURL=8.a2e5361e.chunk.js.map