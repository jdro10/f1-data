(this["webpackJsonpf1-data"]=this["webpackJsonpf1-data"]||[]).push([[8],{117:function(e,t,c){},136:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(49),a=c(51),r=c(45),i=c.n(r),j=c(46),l=c(32),o=c(38),d=c(124),h=c(125),u=c(54),b=c(37),x=c(35),O=c(36),f=(c(53),c(48)),m=c(3),p=function(e){var t=e.raceClassification;return Object(m.jsxs)("div",{children:[Object(m.jsxs)(u.a,{responsive:"sm",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Pos"}),Object(m.jsx)("th",{className:"hideXS",children:"Number"}),Object(m.jsx)("th",{children:"Driver"}),Object(m.jsx)("th",{className:"hideXS",children:"Team"}),Object(m.jsx)("th",{className:"hideXS",children:"Laps"}),Object(m.jsx)("th",{children:"Time/Retired"}),Object(m.jsx)("th",{children:"Pts"})]})}),Object(m.jsx)("tbody",{children:t.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.position}),Object(m.jsx)("td",{className:"hideXS",children:e.number}),Object(m.jsx)("td",{children:Object(m.jsxs)(x.a,{className:"g-2",children:[Object(m.jsx)(O.a,{xs:2,md:2,className:"showXS",children:Object(m.jsx)(f.a,{constructorId:e.Constructor.constructorId,height:"45px"})}),Object(m.jsx)(O.a,{xs:2,className:"hideXS",children:Object(m.jsx)(f.a,{constructorId:e.Constructor.constructorId})}),Object(m.jsxs)(O.a,{xs:6,md:10,children:[e.Driver.givenName," ",Object(m.jsx)("b",{children:e.Driver.familyName.toUpperCase()})]})]})}),Object(m.jsx)("td",{className:"hideXS",children:e.Constructor.name}),Object(m.jsx)("td",{className:"hideXS",children:e.laps}),Object(m.jsx)("td",{children:void 0!==e.Time&&"Finished"===e.status?e.Time.time:e.status}),e.FastestLap&&"1"===e.FastestLap.rank?Object(m.jsx)("td",{children:Object(m.jsxs)(x.a,{children:[Object(m.jsx)(O.a,{children:e.points}),Object(m.jsx)(O.a,{children:Object(m.jsx)(b.e,{})})]})}):Object(m.jsx)("td",{children:e.points})]},t)}))})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)(b.e,{})," - Fastest lap of the race"]})]})},y=function(e){var t=e.raceQualifying;return Object(m.jsxs)(u.a,{responsive:"sm",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Pos"}),Object(m.jsx)("th",{className:"hideXS",children:"Number"}),Object(m.jsx)("th",{children:"Driver"}),Object(m.jsx)("th",{className:"hideXS",children:"Team"}),Object(m.jsx)("th",{children:"Q1"}),Object(m.jsx)("th",{children:"Q2"}),Object(m.jsx)("th",{children:"Q3"})]})}),Object(m.jsx)("tbody",{children:t.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.position}),Object(m.jsx)("td",{className:"hideXS",children:e.number}),Object(m.jsx)("td",{className:"hideXS",children:Object(m.jsxs)(x.a,{className:"g-2",children:[Object(m.jsx)(O.a,{xs:1,children:Object(m.jsx)(f.a,{constructorId:e.Constructor.constructorId})}),Object(m.jsxs)(O.a,{children:[e.Driver.givenName," ",Object(m.jsx)("b",{children:e.Driver.familyName.toUpperCase()})]})]})}),Object(m.jsx)("td",{className:"showXS",children:Object(m.jsxs)(x.a,{className:"g-2",children:[Object(m.jsx)(O.a,{xs:1,children:Object(m.jsx)(f.a,{constructorId:e.Constructor.constructorId})}),Object(m.jsx)(O.a,{xs:6,children:Object(m.jsx)("b",{children:e.Driver.hasOwnProperty("code")?e.Driver.code:e.Driver.familyName.substring(0,3).toUpperCase()})})]})}),Object(m.jsx)("td",{className:"hideXS",children:e.Constructor.name}),Object(m.jsx)("td",{children:e.hasOwnProperty("Q1")?""===e.Q1?"-":e.Q1:"-"}),Object(m.jsx)("td",{children:e.hasOwnProperty("Q2")?e.Q2:"-"}),Object(m.jsx)("td",{children:e.hasOwnProperty("Q3")?e.Q3:"-"})]},t)}))})]})},g=c(47),v=function(e){var t=e.raceInfo,c=e.eventCountryCode;return Object(m.jsxs)("div",{children:[Object(m.jsx)(x.a,{className:"justify-content-center text-center",children:Object(m.jsx)(O.a,{md:"auto",children:Object(m.jsx)("h1",{children:t.raceName})})}),Object(m.jsx)(x.a,{className:"justify-content-center text-center",children:Object(m.jsx)(O.a,{md:"auto",children:Object(m.jsx)("h3",{children:t.date})})}),Object(m.jsx)(x.a,{className:"justify-content-center text-center",children:Object(m.jsx)(O.a,{md:"auto",children:Object(m.jsx)("h3",{children:t.hasOwnProperty("time")?function(e,t){var c=new Date(e+"T"+t);return(c.getHours()<10?"0":"")+c.getHours()+":"+((c.getMinutes()<10?"0":"")+c.getMinutes())+":00"}(t.date,t.time):null})})}),Object(m.jsx)(x.a,{className:"justify-content-center text-center",children:Object(m.jsx)(O.a,{md:"auto",children:Object(m.jsx)(g.a,{countryCode:c,height:"100"})})})]})},N=(c(117),c(131)),R=c(141),C=c(132),w=c(133),S=function(e){var t=e.coordinates,c=e.circuitName,s=Object(n.useState)(null),a=Object(l.a)(s,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){r&&setInterval((function(){r.invalidateSize()}),100)}),[r]),Object(m.jsxs)(N.a,{center:t,zoom:14,scrollWheelZoom:!0,whenCreated:i,children:[Object(m.jsx)(R.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(m.jsx)(C.a,{position:t,children:Object(m.jsxs)(w.a,{children:[c," ",Object(m.jsx)("br",{})," ",t[0]," | ",t[1]]})})]})},F=c(55),D=function(e){var t=e.raceInfo,c=e.eventCountryCode,s=Object(n.useState)(null),a=Object(l.a)(s,2),r=a[0],i=a[1],j=Object(n.useState)(null),o=Object(l.a)(j,2),d=o[0],h=o[1],u=Object(n.useState)(null),b=Object(l.a)(u,2),p=b[0],y=b[1],v=Object(n.useState)(null),N=Object(l.a)(v,2),R=N[0],C=N[1],w=Object(n.useState)(!0),D=Object(l.a)(w,2),I=D[0],T=D[1],A=Object(n.useState)(!0),L=Object(l.a)(A,2),M=L[0],z=L[1],P=Object(n.useState)(!0),E=Object(l.a)(P,2),k=E[0],Q=E[1];return Object(n.useEffect)((function(){fetch("https://ergast.com/api/f1/circuits/".concat(t.Circuit.circuitId,"/fastest/1/results.json")).then((function(e){return e.json()})).then((function(e){var t=e.MRData.RaceTable.Races[0];e.MRData.RaceTable.Races.forEach((function(e){e.Results[0].FastestLap.Time.time<t.Results[0].FastestLap.Time.time&&(t=e)})),i(t),z(!1)})),fetch("https://ergast.com/api/f1/circuits/".concat(t.Circuit.circuitId,"/races.json")).then((function(e){return e.json()})).then((function(e){return h(e.MRData.RaceTable.Races[0].season),Q(!1),fetch("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=".concat(t.Circuit.circuitName,"&origin=*"),{method:"GET"})})).then((function(e){return e.json()})).then((function(e){y(Object.keys(e.query.pages)),C(e.query.pages),T(!1)}))}),[t.Circuit.circuitId,t.Circuit.circuitName]),Object(m.jsxs)("div",{children:[Object(m.jsxs)(x.a,{className:"text-center",children:[Object(m.jsx)("h1",{children:t.Circuit.circuitName}),Object(m.jsxs)("h3",{children:[Object(m.jsx)(g.a,{countryCode:c,height:"30"})," ",t.Circuit.Location.country]}),Object(m.jsx)("h3",{children:t.Circuit.Location.locality})]}),I?null:Object(m.jsx)(x.a,{children:Object(m.jsxs)("p",{style:{textAlign:"justify"},children:[R[p].extract," ","(Source: ",Object(m.jsx)("a",{href:"https://en.wikipedia.org/wiki/".concat(R[p].title),children:"Wikipedia"}),")"]})}),Object(m.jsxs)(x.a,{children:[Object(m.jsx)(O.a,{children:Object(m.jsx)(S,{coordinates:[t.Circuit.Location.lat,t.Circuit.Location.long],circuitName:t.Circuit.circuitName,mapHeight:{height:"700px"}})}),Object(m.jsx)(O.a,{style:{marginTop:"5%"},children:M||k?null:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(x.a,{className:"text-center",children:[Object(m.jsx)("h5",{style:{fontSize:"30px"},children:"First Grand Prix"}),Object(m.jsx)("h5",{children:d})]}),void 0===r?null:Object(m.jsxs)("div",{children:[Object(m.jsxs)(x.a,{className:"text-center",children:[Object(m.jsx)("h5",{style:{fontSize:"30px"},children:"Lap record"}),Object(m.jsx)("h5",{children:r.Results[0].FastestLap.Time.time}),Object(m.jsx)("h5",{style:{fontSize:"25px"},children:r.season})]}),Object(m.jsxs)(x.a,{className:"justify-content-center text-center",children:[Object(m.jsx)(O.a,{xs:"auto",children:Object(m.jsx)(f.a,{constructorId:r.Results[0].Constructor.constructorId,height:"50px"})}),Object(m.jsx)(O.a,{xs:4,children:Object(m.jsxs)("h5",{style:{fontSize:"20px"},children:[r.Results[0].Driver.givenName," ",Object(m.jsx)("b",{children:r.Results[0].Driver.familyName.toUpperCase()})]})}),Object(m.jsx)(O.a,{xs:2,children:Object(m.jsx)(g.a,{countryCode:F.a[r.Results[0].Driver.nationality].toLowerCase(),height:40,width:50})})]}),Object(m.jsx)(x.a,{className:"text-center",children:Object(m.jsxs)("h5",{style:{fontSize:"25px"},children:[r.Results[0].Constructor.name," "]})})]})]})})]})]})},I=c(89),T=function(e){var t=e.raceInfo,c=e.raceClassification,s=e.raceQualifying,a=Object(n.useState)(null),r=Object(l.a)(a,2),o=r[0],u=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/name/".concat(t.Circuit.Location.country,"?fullText=true")).then((function(e){return e.json()})).then((function(e){u(e[0].alpha2Code.toLowerCase())})).catch((function(e){return u(null)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.Circuit.Location.country]),Object(m.jsx)("div",{children:Object(m.jsxs)(d.a,{defaultActiveKey:"race",id:"uncontrolled-tab-example",className:"mb-3",children:[Object(m.jsxs)(h.a,{eventKey:"race",title:"Race",children:[Object(m.jsx)(v,{raceInfo:t,eventCountryCode:o}),null!=c?Object(m.jsx)(p,{raceClassification:c}):Object(m.jsx)(x.a,{className:"justify-content-center text-center",children:Object(m.jsx)(I.a,{date:t.date,time:t.time})})]}),Object(m.jsx)(h.a,{eventKey:"circuit",title:"Circuit",children:Object(m.jsx)(D,{raceInfo:t,eventCountryCode:o})}),null!=s?Object(m.jsx)(h.a,{eventKey:"qualifying",title:"Qualifying",children:Object(m.jsx)(y,{raceQualifying:s})}):null]})})},A=c(77),L=c(1),M=function(e){var t=e.season,c=e.round,s=Object(n.useState)(null),a=Object(l.a)(s,2),r=a[0],d=a[1],h=Object(n.useState)(null),u=Object(l.a)(h,2),b=u[0],x=u[1],O=Object(n.useState)(!0),f=Object(l.a)(O,2),p=f[0],y=f[1],g=Object(n.useState)(!0),v=Object(l.a)(g,2),N=v[0],R=v[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/".concat(t,".json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.RaceTable.Races[parseInt(c)-1]&&d(e.MRData.RaceTable.Races[parseInt(c)-1])}));case 2:y(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/".concat(t,"/").concat(c,"/qualifying.json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.RaceTable.Races[0]&&x(e.MRData.RaceTable.Races[0].QualifyingResults)}));case 2:R(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),n()}),[t,c]),Object(m.jsx)("div",{children:Object(m.jsx)(o.a,{fluid:"md",style:{minHeight:"700px"},children:p||N?null:null===r?Object(m.jsx)(L.a,{to:"/error"}):Object(m.jsx)("div",{children:Object(m.jsx)(T,{season:t,round:c,raceInfo:r,raceQualifying:b})})})})},z=function(e){var t=e.season,c=e.round,s=Object(n.useState)(null),a=Object(l.a)(s,2),r=a[0],d=a[1],h=Object(n.useState)(null),u=Object(l.a)(h,2),b=u[0],O=u[1],f=Object(n.useState)(null),p=Object(l.a)(f,2),y=p[0],g=p[1],v=Object(n.useState)(!0),N=Object(l.a)(v,2),R=N[0],C=N[1],w=Object(n.useState)(!0),S=Object(l.a)(w,2),F=S[0],D=S[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/".concat(t,"/").concat(c,"/results.json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.RaceTable.Races[0]&&(d(e.MRData.RaceTable.Races[0]),O(e.MRData.RaceTable.Races[0].Results))}));case 2:C(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/".concat(t,"/").concat(c,"/qualifying.json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.RaceTable.Races[0]&&g(e.MRData.RaceTable.Races[0].QualifyingResults)}));case 2:D(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),n()}),[t,c]),Object(m.jsx)("div",{children:Object(m.jsx)(o.a,{fluid:"md",children:R||F?Object(m.jsx)(o.a,{style:{marginTop:"5%",minHeight:"700px"},children:Object(m.jsx)(x.a,{className:"justify-content-center text-center",children:Object(m.jsx)(A.a,{animation:"border"})})}):null==b?Object(m.jsx)(M,{season:t,round:c}):Object(m.jsx)(T,{raceInfo:r,raceClassification:b,raceQualifying:y})})})};t.default=function(){var e=Object(L.g)().season,t=Object(L.g)().round;return Object(m.jsxs)("div",{children:[Object(m.jsx)(s.a,{}),Object(m.jsx)(z,{season:e,round:t}),Object(m.jsx)(a.a,{})]})}},48:function(e,t,c){"use strict";c(0);var n={red_bull:"#0000FF",williams:"#1E90FF",mercedes:"#7FFFD4",mclaren:"#FFA500",aston_martin:"#008000",alphatauri:"#778899",alpine:"#4169E1",ferrari:"#FF0000",haas:"#FFFFFF",alfa:"#8B0000",renault:"#FFFF00",racing_point:"#FFC0CB"},s=c(3);t.a=function(e){var t=e.constructorId,c=e.height,a=void 0===c?"27px":c;return Object(s.jsx)("div",{style:{width:"3px",height:a,backgroundColor:n.hasOwnProperty(t)?n[t]:"#000000"}})}},49:function(e,t,c){"use strict";c(0);var n=c(38),s=c(74),a=(c(50),c(8)),r=c(70),i=c(42),j=c(3);t.a=function(){return Object(j.jsx)(s.a,{className:"navbar",bg:"dark",variant:"dark",children:Object(j.jsxs)(n.a,{children:[Object(j.jsx)(s.a.Brand,{children:Object(j.jsx)(i.a,{size:30})}),Object(j.jsx)(a.b,{to:"/",style:{textDecoration:"none"},children:Object(j.jsx)(s.a.Brand,{children:"Home"})}),Object(j.jsx)(a.b,{to:"/schedule",style:{textDecoration:"none"},children:Object(j.jsx)(s.a.Brand,{children:"Races"})}),Object(j.jsx)(a.b,{to:"/standings",style:{textDecoration:"none"},children:Object(j.jsx)(s.a.Brand,{children:"Standings"})}),Object(j.jsx)(s.a.Collapse,{className:"justify-content-end",children:Object(j.jsx)(s.a.Brand,{href:"https://github.com/jdro10","aria-label":"Github",children:Object(j.jsx)(r.a,{size:25})})})]})})}},50:function(e,t,c){},51:function(e,t,c){"use strict";c(0),c(52);var n=c(38),s=c(35),a=c(36),r=c(42),i=c(37),j=c(43),l=c(71),o=c(44),d=c(3);t.a=function(){return Object(d.jsx)("footer",{children:Object(d.jsxs)(n.a,{children:[Object(d.jsxs)(s.a,{className:"justify-content-center text-center",xs:"auto",id:"row",children:[Object(d.jsx)(a.a,{children:Object(d.jsx)(r.a,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(i.b,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(i.d,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(j.a,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(i.c,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(i.a,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(l.a,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(o.a,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(j.b,{size:40})}),Object(d.jsx)(a.a,{children:Object(d.jsx)(o.b,{size:40})})]}),Object(d.jsx)(s.a,{className:"justify-content-md-center",xs:"auto",id:"lastRow",children:Object(d.jsx)(a.a,{children:Object(d.jsx)("p",{id:"author"})})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"API"})})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsxs)(a.a,{md:"auto",style:{textAlign:"center"},children:["All racing data is obtained through"," ",Object(d.jsx)("a",{href:"http://ergast.com/mrd/",style:{color:"white"},children:"Ergast API"}),"."]})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsxs)(a.a,{md:"auto",style:{textAlign:"center"},children:["Countries data is obtained through"," ",Object(d.jsx)("a",{href:"https://restcountries.eu/",style:{color:"white"},children:"REST Countries API"}),"."]})}),Object(d.jsx)("br",{}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"Disclaimer"})})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:"This website was developed for learning and educational purposes only."})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:"Data displayed may be inaccurate. By using this website you acknowledge this."})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(a.a,{md:"auto",style:{textAlign:"center"},children:"The author disclaims all responsibility for any loss or damage arising from the use of this website."})}),Object(d.jsx)("br",{}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(a.a,{md:7,children:Object(d.jsx)("p",{style:{textAlign:"center"},children:"This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V."})})})]})})}},52:function(e,t,c){},53:function(e,t,c){},55:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var n={British:"GB",Finnish:"FI",Dutch:"NL",Mexican:"MX",Spanish:"ES",Australian:"AU",Monegasque:"MC",French:"FR",German:"DE",Japanese:"JP",Canadian:"CA",Italian:"IT",Russian:"RU",Austrian:"AT",Swiss:"CH",American:"US",Thai:"TH","New Zealander":"NZ","New Zealand":"NZ",Swedish:"SE",Portuguese:"PT",Brazilian:"BR",Hungarian:"HU",Argentine:"AR",Belgian:"BE",Belgium:"BE","South African":"ZA",Danish:"DN",Liechtensteiner:"LI","Hong Kong":"HK",Irish:"IE",Chilean:"CL",Venezuelan:"VE",Colombian:"CO",Czech:"CZ",Malaysian:"MY",Indian:"IN",Polish:"PL",Indonesian:"ID",Rhodesian:"ZW"}},89:function(e,t,c){"use strict";c(0);var n=c(36),s=c(90),a=c(3);t.a=function(e){var t=e.date,c=e.time;return Object(a.jsx)(s.a,{date:Date.now()+(new Date(t).getTime()+36e5*c.split(":")[0]-(new Date).getTime()),renderer:function(e){var t=e.days,c=e.hours,s=e.minutes,r=e.seconds;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(n.a,{xs:3,sm:2,lg:1,children:[Object(a.jsx)("h1",{children:t}),Object(a.jsx)("h5",{children:"days"})]}),Object(a.jsxs)(n.a,{xs:3,sm:2,lg:1,children:[Object(a.jsx)("h1",{children:c}),Object(a.jsx)("h5",{children:"hour."})]}),Object(a.jsxs)(n.a,{xs:3,sm:2,lg:1,children:[Object(a.jsx)("h1",{children:s}),Object(a.jsx)("h5",{children:"min."})]}),Object(a.jsxs)(n.a,{xs:3,sm:2,lg:1,children:[Object(a.jsx)("h1",{children:r}),Object(a.jsx)("h5",{children:"sec."})]})]})}})}}}]);
//# sourceMappingURL=8.a796349f.chunk.js.map