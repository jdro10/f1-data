(this["webpackJsonpf1-data"]=this["webpackJsonpf1-data"]||[]).push([[8],{104:function(e,t,a){"use strict";a(0);var c=a(43),s=a(105),n=a(2);t.a=function(e){var t=e.date,a=e.time,r=e.size;return Object(n.jsx)(s.a,{date:Date.now()+(new Date(t).getTime()+36e5*a.split(":")[0]-(new Date).getTime()),renderer:function(e){var t=e.days,a=e.hours,s=e.minutes,i=e.seconds;return e.completed?Object(n.jsx)(n.Fragment,{children:"big"===r?Object(n.jsxs)(c.a,{children:[Object(n.jsx)("h1",{className:"countdown-font",children:"RACE IN PROGRESS"}),Object(n.jsx)("h5",{className:"countdown-font",children:"WAITING FOR RACE RESULTS"})]}):Object(n.jsxs)(c.a,{children:[Object(n.jsx)("h1",{children:"RACE IN PROGRESS"}),Object(n.jsx)("h5",{children:"WAITING FOR RACE RESULTS"})]})}):Object(n.jsx)(n.Fragment,{children:"big"===r?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(c.a,{xs:3,lg:2,children:[Object(n.jsx)("h1",{className:"countdown-font",children:t}),Object(n.jsx)("h1",{children:"DAYS"})]}),Object(n.jsxs)(c.a,{xs:3,lg:2,children:[Object(n.jsx)("h1",{className:"countdown-font",children:a}),Object(n.jsx)("h1",{children:"HRS"})]}),Object(n.jsxs)(c.a,{xs:3,lg:2,children:[Object(n.jsx)("h1",{className:"countdown-font",children:s}),Object(n.jsx)("h1",{children:"MIN"})]}),Object(n.jsxs)(c.a,{xs:3,lg:2,children:[Object(n.jsx)("h1",{className:"countdown-font",children:i}),Object(n.jsx)("h1",{children:"SEC"})]})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(c.a,{xs:3,lg:1,children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("h5",{children:"DAYS"})]}),Object(n.jsxs)(c.a,{xs:3,lg:1,children:[Object(n.jsx)("h1",{children:a}),Object(n.jsx)("h5",{children:"HRS"})]}),Object(n.jsxs)(c.a,{xs:3,lg:1,children:[Object(n.jsx)("h1",{children:s}),Object(n.jsx)("h5",{children:"MIN"})]}),Object(n.jsxs)(c.a,{xs:3,lg:1,children:[Object(n.jsx)("h1",{children:i}),Object(n.jsx)("h5",{children:"SEC"})]})]})})}})}},164:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(55),n=a(57),r=a(66),i=a.n(r),l=a(67),j=a(20),o=a(49),d=a(60),b=a(44),u=a(41),h=a(43),x=(a(52),a(54)),O=a(1),m=a(21),p=a(2),f={fontWeight:600,margin:"0px",padding:"0px",display:"inline"},g=function(e){var t=e.raceClassification,a=Object(O.g)(),s=Object(c.useContext)(m.a).theme;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(d.a,{className:"table-hover table-striped standings-table",responsive:"sm",style:{overflow:"hidden",marginTop:"10px"},variant:s,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{className:"text-center",children:"POS"}),Object(p.jsx)("th",{className:"hideXS text-center",children:"NUMBER"}),Object(p.jsx)("th",{children:"DRIVER"}),Object(p.jsx)("th",{className:"hideXS",children:"TEAM"}),Object(p.jsx)("th",{className:"hideXS",children:"LAPS"}),Object(p.jsx)("th",{children:"TIME/RETIRED"}),Object(p.jsx)("th",{children:"PTS"}),Object(p.jsx)("th",{className:"hideXS",children:"GRID"}),Object(p.jsx)("th",{className:"hideXS",children:"+/-"})]})}),Object(p.jsx)("tbody",{children:t.map((function(e,t){return Object(p.jsxs)("tr",{style:{cursor:"pointer"},onClick:function(){return t=e.Driver.driverId,void a.push("/driver/".concat(t));var t},className:"align-middle",children:[Object(p.jsx)("td",{className:"text-center",children:e.position}),Object(p.jsx)("td",{className:"hideXS text-center",children:e.number}),Object(p.jsx)("td",{children:Object(p.jsxs)(u.a,{className:"g-2",children:[Object(p.jsx)(h.a,{xs:1,className:"showXS",children:Object(p.jsx)(x.a,{constructorId:e.Constructor.constructorId,height:"45px"})}),Object(p.jsx)(h.a,{xs:1,className:"hideXS",children:Object(p.jsx)(x.a,{constructorId:e.Constructor.constructorId})}),Object(p.jsxs)(h.a,{xs:6,md:10,children:[e.Driver.givenName," ",Object(p.jsx)("p",{style:f,children:e.Driver.familyName.toUpperCase()})]})]})}),Object(p.jsx)("td",{className:"hideXS",children:e.Constructor.name}),Object(p.jsx)("td",{className:"hideXS",children:e.laps}),Object(p.jsx)("td",{children:void 0!==e.Time&&"Finished"===e.status?e.Time.time:e.status}),e.FastestLap&&"1"===e.FastestLap.rank?Object(p.jsx)("td",{children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)(h.a,{xs:2,children:e.points}),Object(p.jsx)(h.a,{children:Object(p.jsx)(b.e,{})})]})}):Object(p.jsx)("td",{children:e.points}),Object(p.jsx)("td",{className:"hideXS",children:e.grid}),Object(p.jsx)("td",{className:"hideXS",children:"0"===e.grid?20-e.position:e.grid-e.position})]},t)}))})]}),Object(p.jsx)(b.e,{})," - Fastest lap of the race"]})},N={fontWeight:600,margin:"0px",padding:"0px",display:"inline"},y=function(e){var t=e.qualifyingClassification,a=Object(O.g)(),s=Object(c.useContext)(m.a).theme;return Object(p.jsxs)(d.a,{responsive:"sm",className:"table-hover table-striped standings-table",variant:s,style:{marginTop:"10px"},children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{className:"text-center",children:"POS"}),Object(p.jsx)("th",{className:"hideXS text-center",children:"NUMBER"}),Object(p.jsx)("th",{children:"DRIVER"}),Object(p.jsx)("th",{className:"hideXS",children:"TEAM"}),Object(p.jsx)("th",{className:"text-center",children:"Q1"}),Object(p.jsx)("th",{className:"text-center",children:"Q2"}),Object(p.jsx)("th",{className:"text-center",children:"Q3"})]})}),Object(p.jsx)("tbody",{children:t.map((function(e,t){return Object(p.jsxs)("tr",{style:{cursor:"pointer"},onClick:function(){return t=e.Driver.driverId,void a.push("/driver/".concat(t));var t},children:[Object(p.jsx)("td",{className:"text-center",children:e.position}),Object(p.jsx)("td",{className:"hideXS text-center",children:e.number}),Object(p.jsx)("td",{className:"hideXS",children:Object(p.jsxs)(u.a,{className:"g-2",children:[Object(p.jsx)(h.a,{xs:1,children:Object(p.jsx)(x.a,{constructorId:e.Constructor.constructorId})}),Object(p.jsxs)(h.a,{children:[e.Driver.givenName," ",Object(p.jsx)("p",{style:N,children:e.Driver.familyName.toUpperCase()})]})]})}),Object(p.jsx)("td",{className:"showXS",children:Object(p.jsxs)(u.a,{className:"g-2",children:[Object(p.jsx)(h.a,{xs:1,children:Object(p.jsx)(x.a,{constructorId:e.Constructor.constructorId})}),Object(p.jsx)(h.a,{xs:6,children:Object(p.jsx)("p",{style:N,children:e.Driver.hasOwnProperty("code")?e.Driver.code:e.Driver.familyName.substring(0,3).toUpperCase()})})]})}),Object(p.jsx)("td",{className:"hideXS",children:e.Constructor.name}),Object(p.jsx)("td",{className:"text-center",children:e.hasOwnProperty("Q1")?""===e.Q1?"-":e.Q1:"-"}),Object(p.jsx)("td",{className:"text-center",children:e.hasOwnProperty("Q2")?e.Q2:"-"}),Object(p.jsx)("td",{className:"text-center",children:e.hasOwnProperty("Q3")?e.Q3:"-"})]},t)}))})]})},v=a(59),R=a(73),C=a(50),S=function(e){var t=e.raceInfo,a=e.eventCountryCode;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.a,{className:"justify-content-center text-center",children:Object(p.jsx)(h.a,{md:"auto",children:Object(p.jsx)("a",{className:"race-link",href:t.url,children:Object(p.jsx)("h1",{children:t.raceName.toUpperCase()})})})}),Object(p.jsx)(u.a,{className:"justify-content-center text-center",children:Object(p.jsx)(h.a,{md:"auto",children:Object(p.jsxs)("h3",{children:["ROUND ",t.round]})})}),Object(p.jsx)(u.a,{className:"justify-content-center text-center",children:Object(p.jsx)(h.a,{md:"auto",children:Object(p.jsx)("h5",{children:Object(R.a)(t.date)})})}),Object(p.jsx)(u.a,{className:"justify-content-center text-center",children:Object(p.jsx)(h.a,{md:"auto",children:Object(p.jsx)("h5",{children:t.hasOwnProperty("time")?Object(R.b)(t.date,t.time):null})})}),Object(p.jsx)(u.a,{className:"justify-content-center text-center",children:Object(p.jsx)(h.a,{md:"auto",children:Object(p.jsx)(v.a,{countryCode:C.a[a].toLowerCase(),height:"100"})})})]})},w=(a(164),a(287)),I=a(298),F=a(288),A=a(289),k=function(e){var t=e.coordinates,a=e.circuitName,s=Object(c.useState)(null),n=Object(j.a)(s,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){r&&setInterval((function(){r.invalidateSize()}),100)}),[r]),Object(p.jsxs)(w.a,{center:t,zoom:14,scrollWheelZoom:!0,whenCreated:i,children:[Object(p.jsx)(I.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(p.jsx)(F.a,{position:t,children:Object(p.jsxs)(A.a,{children:[a," ",Object(p.jsx)("br",{})," ",t[0]," | ",t[1]]})})]})},T=a(74),D={fontWeight:600,margin:"0px",padding:"0px",display:"inline"},E=function(e){var t=e.firstGP,a=e.lastGP,s=e.lastGPDetails,n=e.fastestLap,r=Object(O.g)(),i=Object(c.useContext)(m.a).theme,l=function(e,t){r.push("/race/".concat(e,"/").concat(t)),window.location.reload()},j=function(e,t){var a=t.split(":"),c=t.split("."),s=parseInt(60*a[0])+parseInt(a[1])+parseFloat(c[1]/1e3),n=1e3*parseFloat(e)/3600*s/1e3;return Math.round(1e3*n)/1e3};return Object(p.jsx)(d.a,{responsive:!0,className:"standings-table table-striped table-hover",variant:i,style:{marginTop:"15px"},children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"row-stats",children:"First Grand Prix:"}),Object(p.jsxs)("td",{className:" text-end clickable-row no-wrap",onClick:function(){return l(t.season,t.round)},children:[t.season," ",t.raceName]})]}),void 0===s?null:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"row-stats",children:"Latest Grand Prix:"}),Object(p.jsxs)("td",{className:"text-end clickable-row no-wrap",onClick:function(){return l(s.season,s.round)},children:[s.season," ",s.raceName]})]}),void 0===n?null:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"row-stats",children:"Laps:"}),Object(p.jsxs)("td",{className:"text-end row-stats",children:[s.Results[0].laps," (",s.season,")"]})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"row-stats",children:"Race distance:"}),Object(p.jsxs)("td",{className:"text-end row-stats",children:[Math.round(parseInt(s.Results[0].laps)*j(parseFloat(a.Results[0].FastestLap.AverageSpeed.speed),a.Results[0].FastestLap.Time.time)*1e3)/1e3," ","km (",s.season,")"]})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"row-stats",children:"Circuit length:"}),Object(p.jsxs)("td",{className:"text-end row-stats",children:[j(parseFloat(a.Results[0].FastestLap.AverageSpeed.speed),a.Results[0].FastestLap.Time.time)," ","km"]})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"row-stats",children:"Lap record (All circuit's layouts):"}),Object(p.jsxs)("td",{className:"text-end clickable-row align-middle",onClick:function(){return l(n.season,n.round)},children:[n.Results[0].FastestLap.Time.time," (",n.season,")"]})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"row-stats",children:"Average speed:"}),Object(p.jsxs)("td",{className:"text-end clickable-row no-wrap",onClick:function(){return l(n.season,n.round)},children:[n.Results[0].FastestLap.AverageSpeed.speed," km/h (",j(parseFloat(n.Results[0].FastestLap.AverageSpeed.speed),n.Results[0].FastestLap.Time.time)," ","km)"]})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"row-stats",children:"Driver:"}),Object(p.jsxs)("td",{className:"clickable-row text-end",onClick:function(){return e=n.Results[0].Driver.driverId,void r.push("/driver/".concat(e));var e},children:[n.Results[0].Driver.givenName," ",Object(p.jsx)("p",{style:D,children:n.Results[0].Driver.familyName.toUpperCase()})]})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"row-stats",children:"Team:"}),Object(p.jsx)("td",{className:"clickable-row text-end",onClick:function(){return e=n.Results[0].Constructor.url,void window.open(e,"_blank");var e},children:Object(p.jsxs)(u.a,{className:"justify-content-end text-end g-2",children:[Object(p.jsx)(h.a,{className:"align-self-center",xs:"auto",children:Object(p.jsx)(x.a,{constructorId:n.Results[0].Constructor.constructorId})}),Object(p.jsx)(h.a,{xs:"auto",children:n.Results[0].Constructor.name})]})})]})]})]})})},M=function(e){var t=e.raceInfo,a=e.eventCountryCode,s=Object(c.useState)(null),n=Object(j.a)(s,2),r=n[0],i=n[1],l=Object(c.useState)(null),o=Object(j.a)(l,2),d=o[0],b=o[1],h=Object(c.useState)(null),x=Object(j.a)(h,2),O=x[0],m=x[1],f=Object(c.useState)(null),g=Object(j.a)(f,2),N=g[0],y=g[1],R=Object(c.useState)(null),S=Object(j.a)(R,2),w=S[0],I=S[1],F=Object(c.useState)(null),A=Object(j.a)(F,2),D=A[0],M=A[1],L=Object(c.useState)(!0),P=Object(j.a)(L,2),z=P[0],B=P[1],U=Object(c.useState)(!0),G=Object(j.a)(U,2),H=G[0],X=G[1],q=Object(c.useState)(!0),Q=Object(j.a)(q,2),W=Q[0],Z=Q[1],_=Object(c.useState)(!0),J=Object(j.a)(_,2),K=J[0],Y=J[1];return Object(c.useEffect)((function(){fetch("https://ergast.com/api/f1/circuits/".concat(t.Circuit.circuitId,"/fastest/1/results.json")).then((function(e){return e.json()})).then((function(e){var t=e.MRData.RaceTable.Races[0];e.MRData.RaceTable.Races.forEach((function(e){e.Results[0].FastestLap.Time.time<t.Results[0].FastestLap.Time.time&&(t=e)})),b(e.MRData.RaceTable.Races[e.MRData.RaceTable.Races.length-1]),y(t),Z(!1)})),fetch("https://ergast.com/api/f1/circuits/".concat(t.Circuit.circuitId,"/races.json")).then((function(e){return e.json()})).then((function(e){return i(e.MRData.RaceTable.Races[0]),X(!1),fetch("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=".concat(t.Circuit.circuitName,"&origin=*"),{method:"GET"})})).then((function(e){return e.json()})).then((function(e){I(Object.keys(e.query.pages)),M(e.query.pages),B(!1)})),fetch("https://ergast.com/api/f1/circuits/".concat(t.Circuit.circuitId,"/results/1.json?limit=100")).then((function(e){return e.json()})).then((function(e){m(e.MRData.RaceTable.Races[e.MRData.RaceTable.Races.length-1]),Y(!1)}))}),[t.Circuit.circuitId,t.Circuit.circuitName]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(u.a,{className:"text-center",children:[Object(p.jsx)("h1",{children:t.Circuit.circuitName.toUpperCase()}),Object(p.jsxs)("h3",{children:[Object(p.jsx)(v.a,{countryCode:C.a[a].toLowerCase(),height:"30"})," ",t.Circuit.Location.country," (",t.Circuit.Location.locality,")"]})]}),z?null:Object(p.jsx)(u.a,{children:Object(p.jsxs)("p",{style:{textAlign:"justify"},children:[D[w].extract,Object(p.jsx)("br",{}),"Source:"," ",Object(p.jsx)("a",{href:"https://en.wikipedia.org/wiki/".concat(D[w].title),children:"Wikipedia"})]})}),Object(p.jsx)(k,{coordinates:[t.Circuit.Location.lat,t.Circuit.Location.long],circuitName:t.Circuit.circuitName,mapHeight:{height:"700px"}}),W||H||K?Object(p.jsx)(u.a,{className:"justify-content-center text-center",style:{marginTop:"15px"},children:Object(p.jsx)(T.a,{animation:"border"})}):Object(p.jsx)(E,{firstGP:r,lastGP:d,lastGPDetails:O,fastestLap:N})]})},L=a(104),P=a(279),z={1:"rgb(128,0,0)",2:"rgb(255,215,0)",3:"rgb(255,0,0)",4:"rgb(255,140,0)",5:"rgb(0,100,0)",6:"rgb(100,149,237)",7:"rgb(0,191,255)",8:"rgb(30,144,255)",9:"rgb(0,0,255)",10:"rgb(138,43,226)",11:"rgb(147,112,219)",12:"rgb(148,0,211)",13:"rgb(255,0,255)",14:"rgb(255,20,147)",15:"rgb(139,69,19)",16:"rgb(210,105,30)",17:"rgb(244,164,96)",18:"rgb(112,128,144)",19:"rgb(176,196,222)",20:"rgb(255,99,71)",21:"rgb(250,128,114)",22:"rgb(184,134,11)",23:"rgb(154,205,50)",24:"rgb(50,205,50)",25:"rgb(75,0,130)",26:"rgb(210,180,140)",27:"rgb(128,128,128)",28:"rgb(34,139,34)",29:"rgb(127,255,0)",30:"rgb(240,230,140)"},B=a(274),U=a.n(B),G=function(e){var t=e.season,a=e.round,s=Object(c.useContext)(m.a).theme,n=Object(c.useState)({labels:null,datasets:null}),r=Object(j.a)(n,2),o=r[0],d=r[1],b=Object(c.useState)(!0),u=Object(j.a)(b,2),h=u[0],x=u[1];Object(c.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/".concat(t,"/").concat(a,"/laps.json?limit=2000")).then((function(e){return e.json()})).then((function(e){return g(e.MRData.RaceTable.Races[0].Laps)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,a]);var O={plugins:{legend:{display:!0,position:"bottom"}},scales:{y:{reverse:!0,ticks:{color:"dark"===s?"white":"dark",font:{size:20},stepSize:1},grid:{color:"#777"}},x:{ticks:{color:"dark"===s?"white":"dark",font:{size:20}},grid:{color:"#777"}}}},f={plugins:{legend:{display:!0,position:"bottom"}},scales:{y:{reverse:!0,ticks:{color:"dark"===s?"white":"dark",font:{size:10},stepSize:1},grid:{color:"#777"}},x:{ticks:{color:"dark"===s?"white":"dark",font:{size:10}},grid:{color:"#777"}}}},g=function(e){var t={},a=[];e.forEach((function(e){a.push(parseInt(e.number)),e.Timings.forEach((function(e){t[e.driverId]||(t[e.driverId]=[]),t[e.driverId].push(e.position)}))}));for(var c=[],s=1,n=0,r=Object.entries(t);n<r.length;n++){var i=Object(j.a)(r[n],2),l={label:i[0],data:i[1],fill:!1,backgroundColor:z[s],borderColor:z[s]};c.push(l),s++}d({labels:a,datasets:c}),x(!1)};return Object(p.jsx)(p.Fragment,{children:h?null:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(U.a,{minWidth:1224,children:Object(p.jsx)(P.a,{data:o,height:325,width:500,options:O})}),Object(p.jsx)(U.a,{maxWidth:1224,children:Object(p.jsx)(P.a,{data:o,height:850,width:500,options:f})})]})})},H=function(e){var t=e.raceInfo,a=e.raceClassification,c=e.qualifyingClassification;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("ul",{className:"nav nav-pills nav-fill mb-2",id:"myTab",role:"tablist",style:{marginTop:"10px"},children:[Object(p.jsx)("li",{className:"nav-item",role:"presentation",children:Object(p.jsx)("button",{className:"nav-link active",id:"race-tab","data-bs-toggle":"tab","data-bs-target":"#race",type:"button",role:"tab","aria-controls":"race","aria-selected":"true",children:"RACE"})}),null!=a&&t.season>=1996?Object(p.jsx)("li",{className:"nav-item",role:"presentation",children:Object(p.jsx)("button",{className:"nav-link",id:"laps-tab","data-bs-toggle":"tab","data-bs-target":"#laps",type:"button",role:"tab","aria-controls":"laps","aria-selected":"false",children:"LAPS"})}):null,null!=c?Object(p.jsx)("li",{className:"nav-item",role:"presentation",children:Object(p.jsx)("button",{className:"nav-link",id:"qualifying-tab","data-bs-toggle":"tab","data-bs-target":"#qualifying",type:"button",role:"tab","aria-controls":"qualifying","aria-selected":"false",children:"QUALIFYING"})}):null,Object(p.jsx)("li",{className:"nav-item",role:"presentation",children:Object(p.jsx)("button",{className:"nav-link",id:"circuit-tab","data-bs-toggle":"tab","data-bs-target":"#circuit",type:"button",role:"tab","aria-controls":"circuit","aria-selected":"false",children:"CIRCUIT"})})]}),Object(p.jsxs)("div",{className:"tab-content",children:[Object(p.jsxs)("div",{className:"tab-pane fade show active",id:"race",role:"tabpanel","aria-labelledby":"race-tab",children:[Object(p.jsx)(S,{raceInfo:t,eventCountryCode:t.Circuit.Location.country}),null!=a?Object(p.jsx)(g,{raceClassification:a}):Object(p.jsxs)(u.a,{className:"justify-content-center text-center",children:[Object(p.jsx)("p",{}),Object(p.jsx)(L.a,{date:t.date,time:t.time,size:"big"})]})]}),Object(p.jsx)("div",{className:"tab-pane fade",id:"laps",role:"tabpanel","aria-labelledby":"laps-tab",children:null!=a&&t.season>=1996?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(S,{raceInfo:t,eventCountryCode:t.Circuit.Location.country}),Object(p.jsx)("div",{style:{minHeight:"300px"},children:Object(p.jsx)(G,{season:t.season,round:t.round})})]}):null}),Object(p.jsx)("div",{className:"tab-pane fade",id:"qualifying",role:"tabpanel","aria-labelledby":"qualifying-tab",children:null!=c?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(S,{raceInfo:t,eventCountryCode:t.Circuit.Location.country}),Object(p.jsx)(y,{qualifyingClassification:c})]}):null}),Object(p.jsx)("div",{className:"tab-pane fade",id:"circuit",role:"tabpanel","aria-labelledby":"circuit-tab",children:Object(p.jsx)(M,{raceInfo:t,eventCountryCode:t.Circuit.Location.country})})]})]})},X=function(e){var t=e.season,a=e.round,s=Object(c.useState)(null),n=Object(j.a)(s,2),r=n[0],o=n[1],d=Object(c.useState)(null),b=Object(j.a)(d,2),u=b[0],h=b[1],x=Object(c.useState)(!0),m=Object(j.a)(x,2),f=m[0],g=m[1],N=Object(c.useState)(!0),y=Object(j.a)(N,2),v=y[0],R=y[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/".concat(t,".json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.RaceTable.Races[parseInt(a)-1]&&o(e.MRData.RaceTable.Races[parseInt(a)-1])}));case 2:g(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/".concat(t,"/").concat(a,"/qualifying.json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.RaceTable.Races[0]&&h(e.MRData.RaceTable.Races[0].QualifyingResults)}));case 2:R(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),c()}),[t,a]),Object(p.jsx)("div",{style:{minHeight:"600px"},children:f||v?null:null===r?Object(p.jsx)(O.a,{to:"/error"}):Object(p.jsx)(H,{season:t,round:a,raceInfo:r,qualifyingClassification:u})})},q=function(e){var t=e.season,a=e.round,s=Object(c.useState)(null),n=Object(j.a)(s,2),r=n[0],d=n[1],b=Object(c.useState)(null),h=Object(j.a)(b,2),x=h[0],O=h[1],m=Object(c.useState)(null),f=Object(j.a)(m,2),g=f[0],N=f[1],y=Object(c.useState)(!0),v=Object(j.a)(y,2),R=v[0],C=v[1],S=Object(c.useState)(!0),w=Object(j.a)(S,2),I=w[0],F=w[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/".concat(t,"/").concat(a,"/results.json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.RaceTable.Races[0]&&(d(e.MRData.RaceTable.Races[0]),O(e.MRData.RaceTable.Races[0].Results))}));case 2:C(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/".concat(t,"/").concat(a,"/qualifying.json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.RaceTable.Races[0]&&N(e.MRData.RaceTable.Races[0].QualifyingResults)}));case 2:F(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),c()}),[t,a]),Object(p.jsx)(o.a,{fluid:"md",style:{minHeight:"600px"},children:R||I?Object(p.jsx)(o.a,{style:{marginTop:"5%",minHeight:"500px"},children:Object(p.jsx)(u.a,{className:"justify-content-center text-center",children:Object(p.jsx)(T.a,{animation:"border"})})}):null==x?Object(p.jsx)(X,{season:t,round:a}):Object(p.jsx)(H,{raceInfo:r,raceClassification:x,qualifyingClassification:g})})};t.default=function(){var e=Object(O.h)().season,t=Object(O.h)().round;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(s.a,{}),Object(p.jsx)(q,{season:e,round:t}),Object(p.jsx)(n.a,{})]})}},50:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var c={British:"GB",Finnish:"FI",Dutch:"NL",Mexican:"MX",Spanish:"ES",Australian:"AU",Monegasque:"MC",French:"FR",German:"DE",Japanese:"JP",Canadian:"CA",Italian:"IT",Russian:"RU",Austrian:"AT",Swiss:"CH",American:"US",Thai:"TH","New Zealander":"NZ","New Zealand":"NZ",Swedish:"SE",Portuguese:"PT",Brazilian:"BR",Hungarian:"HU",Argentine:"AR",Belgian:"BE",Belgium:"BE","South African":"ZA",Danish:"DK",Liechtensteiner:"LI","Hong Kong":"HK",Irish:"IE",Chilean:"CL",Venezuelan:"VE",Colombian:"CO",Czech:"CZ",Malaysia:"MY",Indian:"IN",Polish:"PL",Indonesian:"ID",Rhodesian:"ZW",Russia:"RU",Korea:"KR",Argentina:"AR",UAE:"AE",Australia:"AU",Austria:"AT",Azerbaijan:"AZ",Bahrain:"BH",Brazil:"BR",Canada:"CA",China:"CN",France:"FR",Germany:"DE",Hungary:"HU",India:"IN",Italy:"IT",Japan:"JP",Malyasia:"MY",Malaysian:"MY",Mexico:"MX",Monaco:"MC",Morocco:"MA",Netherlands:"NL",Portugal:"PT","Saudi Arabia":"SA",Singapore:"SG","South Africa":"ZA",Spain:"ES",Sweden:"SE",Switzerland:"CH",Turkey:"TR",UK:"GB",USA:"US",Qatar:"QA"}},52:function(e,t,a){},54:function(e,t,a){"use strict";a(0);var c={red_bull:"#0600EF",williams:"#005AFF",mercedes:"#00D2BE",mclaren:"#FF8700",aston_martin:"#006F62",alphatauri:"#2B4562",alpine:"#0090FF",ferrari:"#DC0000",haas:"#FFFFFF",alfa:"#900000",renault:"#FFF500",racing_point:"#FFC0CB",toro_rosso:"#469BFF",force_india:"#F596C8",sauber:"#9B0000",manor:"#323232",lotus_f1:"#FFB800",marussia:"#6E0000",caterham:"#0b361f"},s=a(2);t.a=function(e){var t=e.constructorId,a=e.height,n=void 0===a?"27px":a;return Object(s.jsx)("div",{style:{width:"3px",height:n,display:"table",margin:"0 auto",backgroundColor:c.hasOwnProperty(t)?c[t]:"#000000"}})}},55:function(e,t,a){"use strict";var c=a(0),s=a(21),n=a(49),r=a(41),i=a(43),l=a(78),j=(a(56),a(8)),o=a(72),d=a(48),b=a(79),u=a(2);t.a=function(){var e=Object(c.useContext)(s.a),t=e.theme,a=e.setTheme;return Object(c.useEffect)((function(){localStorage.setItem("theme",t)}),[t]),Object(u.jsx)(l.a,{className:"navbar",bg:"dark",variant:"dark",children:Object(u.jsxs)(n.a,{style:{minHeight:"40px"},children:[Object(u.jsx)(j.b,{to:"/",style:{textDecoration:"none"},children:Object(u.jsx)(l.a.Brand,{className:"icon-link",children:Object(u.jsx)(d.a,{size:30})})}),Object(u.jsx)(j.b,{to:"/schedule",style:{textDecoration:"none"},children:Object(u.jsx)(l.a.Brand,{className:"text-link",children:"RACES"})}),Object(u.jsx)(j.b,{to:"/standings",style:{textDecoration:"none"},children:Object(u.jsx)(l.a.Brand,{className:"text-link",children:"STANDINGS"})}),Object(u.jsx)(l.a.Collapse,{className:"justify-content-end",children:Object(u.jsxs)(r.a,{className:"g-2",children:[Object(u.jsx)(i.a,{style:{marginTop:"15px"},children:Object(u.jsx)(b.a,{onChange:function(){return function(){var e="light"===t?"dark":"light";a(e),localStorage.setItem("theme",e)}()},checked:"dark"===t,size:20})}),Object(u.jsx)(i.a,{children:Object(u.jsx)(l.a.Brand,{className:"icon-link",href:"https://github.com/jdro10","aria-label":"Github",children:Object(u.jsx)(o.a,{size:25})})})]})})]})})}},56:function(e,t,a){},57:function(e,t,a){"use strict";a(0),a(58);var c=a(49),s=a(41),n=a(43),r=a(48),i=a(44),l=a(53),j=a(65),o=a(51),d=a(2);t.a=function(){return Object(d.jsx)("footer",{children:Object(d.jsxs)(c.a,{children:[Object(d.jsxs)(s.a,{className:"justify-content-center text-center",xs:"auto",id:"row",children:[Object(d.jsx)(n.a,{children:Object(d.jsx)(r.a,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(i.b,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(i.d,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(l.a,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(i.c,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(i.a,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(j.a,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(o.b,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(l.b,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(o.c,{size:40})})]}),Object(d.jsx)(s.a,{className:"justify-content-md-center",xs:"auto",id:"lastRow"}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"API"})})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsxs)(n.a,{md:"auto",style:{textAlign:"center"},children:["All racing data is obtained through"," ",Object(d.jsx)("a",{href:"http://ergast.com/mrd/",style:{color:"white"},children:"Ergast API"}),"."]})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsxs)(n.a,{md:"auto",style:{textAlign:"center"},children:["Some drivers' and circuits' information are obtained through"," ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/w/api.php",style:{color:"white"},children:"Wikipedia API"}),"."]})}),Object(d.jsx)("br",{}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"DISCLAIMER"})})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:"auto",style:{textAlign:"center"},children:"This website was developed for learning and educational purposes only."})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:"auto",style:{textAlign:"center"},children:"Data displayed may be inaccurate. By using this website you acknowledge this."})}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:"auto",style:{textAlign:"center"},children:"The author disclaims all responsibility for any loss or damage arising from the use of this website."})}),Object(d.jsx)("br",{}),Object(d.jsx)(s.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:7,children:Object(d.jsx)("p",{style:{textAlign:"center"},children:"This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V."})})})]})})}},58:function(e,t,a){},73:function(e,t,a){"use strict";function c(e,t){var a=new Date(e+"T"+t);return(a.getHours()<10?"0":"")+a.getHours()+":"+((a.getMinutes()<10?"0":"")+a.getMinutes())}function s(e){var t=e.split("-");return"".concat(t[2],"/").concat(t[1],"/").concat(t[0])}a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return s}))}}]);
//# sourceMappingURL=8.29a7d565.chunk.js.map