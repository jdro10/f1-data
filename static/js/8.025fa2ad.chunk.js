(this["webpackJsonpf1-data"]=this["webpackJsonpf1-data"]||[]).push([[8],{116:function(e,t,c){"use strict";c(0);var s=c(44),a=c(117),n=c(2);t.a=function(e){var t=e.date,c=e.time;return Object(n.jsx)(a.a,{date:Date.now()+(new Date(t).getTime()+36e5*c.split(":")[0]-(new Date).getTime()),renderer:function(e){var t=e.days,c=e.hours,a=e.minutes,r=e.seconds;return e.completed?Object(n.jsxs)(s.a,{children:[Object(n.jsx)("h1",{children:"RACE IN PROGRESS"}),Object(n.jsx)("h5",{children:"WAITING FOR RACE RESULTS"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(s.a,{xs:3,lg:1,children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("h5",{children:"DAYS"})]}),Object(n.jsxs)(s.a,{xs:3,lg:1,children:[Object(n.jsx)("h1",{children:c}),Object(n.jsx)("h5",{children:"HRS"})]}),Object(n.jsxs)(s.a,{xs:3,lg:1,children:[Object(n.jsx)("h1",{children:a}),Object(n.jsx)("h5",{children:"MIN"})]}),Object(n.jsxs)(s.a,{xs:3,lg:1,children:[Object(n.jsx)("h1",{children:r}),Object(n.jsx)("h5",{children:"SEC"})]})]})}})}},179:function(e,t,c){},309:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(55),n=c(57),r=c(71),i=c.n(r),l=c(72),o=c(20),j=c(49),d=c(297),u=c(299),b=c(62),h=c(46),x=c(43),O=c(44),m=(c(52),c(54)),p=c(1),f=c(21),g=c(2),y={fontWeight:600,margin:"0px",padding:"0px",display:"inline"},v=function(e){var t=e.raceClassification,c=Object(p.g)(),a=Object(s.useContext)(f.a).theme;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(b.a,{className:"table-hover table-striped standings-table",responsive:"sm",style:{overflow:"hidden",marginTop:"10px"},variant:a,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"POS"}),Object(g.jsx)("th",{className:"hideXS",children:"NUMBER"}),Object(g.jsx)("th",{children:"DRIVER"}),Object(g.jsx)("th",{className:"hideXS",children:"TEAM"}),Object(g.jsx)("th",{className:"hideXS",children:"LAPS"}),Object(g.jsx)("th",{children:"TIME/RETIRED"}),Object(g.jsx)("th",{children:"PTS"}),Object(g.jsx)("th",{className:"hideXS",children:"+/-"})]})}),Object(g.jsx)("tbody",{children:t.map((function(e,t){return Object(g.jsxs)("tr",{style:{cursor:"pointer"},onClick:function(){return t=e.Driver.driverId,void c.push("/driver/".concat(t));var t},children:[Object(g.jsx)("td",{children:e.position}),Object(g.jsx)("td",{className:"hideXS",children:e.number}),Object(g.jsx)("td",{children:Object(g.jsxs)(x.a,{className:"g-2",children:[Object(g.jsx)(O.a,{xs:1,className:"showXS",children:Object(g.jsx)(m.a,{constructorId:e.Constructor.constructorId,height:"45px"})}),Object(g.jsx)(O.a,{xs:1,className:"hideXS",children:Object(g.jsx)(m.a,{constructorId:e.Constructor.constructorId})}),Object(g.jsxs)(O.a,{xs:6,md:10,children:[e.Driver.givenName," ",Object(g.jsx)("p",{style:y,children:e.Driver.familyName.toUpperCase()})]})]})}),Object(g.jsx)("td",{className:"hideXS",children:e.Constructor.name}),Object(g.jsx)("td",{className:"hideXS",children:e.laps}),Object(g.jsx)("td",{children:void 0!==e.Time&&"Finished"===e.status?e.Time.time:e.status}),e.FastestLap&&"1"===e.FastestLap.rank?Object(g.jsx)("td",{children:Object(g.jsxs)(x.a,{children:[Object(g.jsx)(O.a,{xs:2,children:e.points}),Object(g.jsx)(O.a,{children:Object(g.jsx)(h.e,{})})]})}):Object(g.jsx)("td",{children:e.points}),Object(g.jsx)("td",{className:"hideXS",children:"0"===e.grid?20-e.position:e.grid-e.position})]},t)}))})]}),Object(g.jsx)(h.e,{})," - Fastest lap of the race"]})},N={fontWeight:600,margin:"0px",padding:"0px",display:"inline"},R=function(e){var t=e.qualifyingClassification,c=Object(p.g)(),a=Object(s.useContext)(f.a).theme;return Object(g.jsxs)(b.a,{responsive:"sm",className:"table-hover table-striped standings-table",variant:a,style:{marginTop:"10px"},children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"POS"}),Object(g.jsx)("th",{className:"hideXS",children:"NUMBER"}),Object(g.jsx)("th",{children:"DRIVER"}),Object(g.jsx)("th",{className:"hideXS",children:"TEAM"}),Object(g.jsx)("th",{children:"Q1"}),Object(g.jsx)("th",{children:"Q2"}),Object(g.jsx)("th",{children:"Q3"})]})}),Object(g.jsx)("tbody",{children:t.map((function(e,t){return Object(g.jsxs)("tr",{style:{cursor:"pointer"},onClick:function(){return t=e.Driver.driverId,void c.push("/driver/".concat(t));var t},children:[Object(g.jsx)("td",{children:e.position}),Object(g.jsx)("td",{className:"hideXS",children:e.number}),Object(g.jsx)("td",{className:"hideXS",children:Object(g.jsxs)(x.a,{className:"g-2",children:[Object(g.jsx)(O.a,{xs:1,children:Object(g.jsx)(m.a,{constructorId:e.Constructor.constructorId})}),Object(g.jsxs)(O.a,{children:[e.Driver.givenName," ",Object(g.jsx)("p",{style:N,children:e.Driver.familyName.toUpperCase()})]})]})}),Object(g.jsx)("td",{className:"showXS",children:Object(g.jsxs)(x.a,{className:"g-2",children:[Object(g.jsx)(O.a,{xs:1,children:Object(g.jsx)(m.a,{constructorId:e.Constructor.constructorId})}),Object(g.jsx)(O.a,{xs:6,children:Object(g.jsx)("p",{style:N,children:e.Driver.hasOwnProperty("code")?e.Driver.code:e.Driver.familyName.substring(0,3).toUpperCase()})})]})}),Object(g.jsx)("td",{className:"hideXS",children:e.Constructor.name}),Object(g.jsx)("td",{children:e.hasOwnProperty("Q1")?""===e.Q1?"-":e.Q1:"-"}),Object(g.jsx)("td",{children:e.hasOwnProperty("Q2")?e.Q2:"-"}),Object(g.jsx)("td",{children:e.hasOwnProperty("Q3")?e.Q3:"-"})]},t)}))})]})},C=c(59),S=c(79),w=c(50),I=function(e){var t=e.raceInfo,c=e.eventCountryCode;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(x.a,{className:"justify-content-center text-center",children:Object(g.jsx)(O.a,{md:"auto",children:Object(g.jsx)("a",{className:"race-link",href:t.url,children:Object(g.jsx)("h1",{children:t.raceName.toUpperCase()})})})}),Object(g.jsx)(x.a,{className:"justify-content-center text-center",children:Object(g.jsx)(O.a,{md:"auto",children:Object(g.jsxs)("h3",{children:["ROUND ",t.round]})})}),Object(g.jsx)(x.a,{className:"justify-content-center text-center",children:Object(g.jsx)(O.a,{md:"auto",children:Object(g.jsx)("h5",{children:Object(S.a)(t.date)})})}),Object(g.jsx)(x.a,{className:"justify-content-center text-center",children:Object(g.jsx)(O.a,{md:"auto",children:Object(g.jsx)("h5",{children:t.hasOwnProperty("time")?Object(S.b)(t.date,t.time):null})})}),Object(g.jsx)(x.a,{className:"justify-content-center text-center",children:Object(g.jsx)(O.a,{md:"auto",children:Object(g.jsx)(C.a,{countryCode:w.a[c].toLowerCase(),height:"100"})})})]})},A=(c(179),c(305)),F=c(316),k=c(306),T=c(307),D=function(e){var t=e.coordinates,c=e.circuitName,a=Object(s.useState)(null),n=Object(o.a)(a,2),r=n[0],i=n[1];return Object(s.useEffect)((function(){r&&setInterval((function(){r.invalidateSize()}),100)}),[r]),Object(g.jsxs)(A.a,{center:t,zoom:14,scrollWheelZoom:!0,whenCreated:i,children:[Object(g.jsx)(F.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(g.jsx)(k.a,{position:t,children:Object(g.jsxs)(T.a,{children:[c," ",Object(g.jsx)("br",{})," ",t[0]," | ",t[1]]})})]})},M=c(80),E={fontWeight:600,margin:"0px",padding:"0px",display:"inline"},L=function(e){var t=e.firstGP,c=e.lastGP,a=e.lastGPDetails,n=e.fastestLap,r=Object(p.g)(),i=Object(s.useContext)(f.a).theme,l=function(e,t){r.push("/race/".concat(e,"/").concat(t)),window.location.reload()},o=function(e,t){var c=t.split(":"),s=t.split("."),a=parseInt(60*c[0])+parseInt(c[1])+parseFloat(s[1]/1e3),n=1e3*parseFloat(e)/3600*a/1e3;return Math.round(1e3*n)/1e3};return Object(g.jsx)(b.a,{responsive:!0,className:"standings-table table-striped table-hover",variant:i,style:{marginTop:"15px"},children:Object(g.jsxs)("tbody",{children:[Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"row-stats",children:"First Grand Prix:"}),Object(g.jsxs)("td",{className:" text-end clickable-row no-wrap",onClick:function(){return l(t.season,t.round)},children:[t.season," ",t.raceName]})]}),void 0===a?null:Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"row-stats",children:"Latest Grand Prix:"}),Object(g.jsxs)("td",{className:"text-end clickable-row no-wrap",onClick:function(){return l(a.season,a.round)},children:[a.season," ",a.raceName]})]}),void 0===n?null:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"row-stats",children:"Laps:"}),Object(g.jsxs)("td",{className:"text-end row-stats",children:[a.Results[0].laps," (",a.season,")"]})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"row-stats",children:"Race distance:"}),Object(g.jsxs)("td",{className:"text-end row-stats",children:[Math.round(parseInt(a.Results[0].laps)*o(parseFloat(c.Results[0].FastestLap.AverageSpeed.speed),c.Results[0].FastestLap.Time.time)*1e3)/1e3," ","km (",a.season,")"]})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"row-stats",children:"Circuit length:"}),Object(g.jsxs)("td",{className:"text-end row-stats",children:[o(parseFloat(c.Results[0].FastestLap.AverageSpeed.speed),c.Results[0].FastestLap.Time.time)," ","km"]})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"row-stats",children:"Lap record (All circuit's layouts):"}),Object(g.jsxs)("td",{className:"text-end clickable-row align-middle",onClick:function(){return l(n.season,n.round)},children:[n.Results[0].FastestLap.Time.time," (",n.season,")"]})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"row-stats",children:"Average speed:"}),Object(g.jsxs)("td",{className:"text-end clickable-row no-wrap",onClick:function(){return l(n.season,n.round)},children:[n.Results[0].FastestLap.AverageSpeed.speed," km/h (",o(parseFloat(n.Results[0].FastestLap.AverageSpeed.speed),n.Results[0].FastestLap.Time.time)," ","km)"]})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"row-stats",children:"Driver:"}),Object(g.jsxs)("td",{className:"clickable-row text-end",onClick:function(){return e=n.Results[0].Driver.driverId,void r.push("/driver/".concat(e));var e},children:[n.Results[0].Driver.givenName," ",Object(g.jsx)("p",{style:E,children:n.Results[0].Driver.familyName.toUpperCase()})]})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"row-stats",children:"Team:"}),Object(g.jsx)("td",{className:"clickable-row text-end",onClick:function(){return e=n.Results[0].Constructor.url,void window.open(e,"_blank");var e},children:Object(g.jsxs)(x.a,{className:"justify-content-end text-end g-2",children:[Object(g.jsx)(O.a,{className:"align-self-center",xs:"auto",children:Object(g.jsx)(m.a,{constructorId:n.Results[0].Constructor.constructorId})}),Object(g.jsx)(O.a,{xs:"auto",children:n.Results[0].Constructor.name})]})})]})]})]})})},P=function(e){var t=e.raceInfo,c=e.eventCountryCode,a=Object(s.useState)(null),n=Object(o.a)(a,2),r=n[0],i=n[1],l=Object(s.useState)(null),j=Object(o.a)(l,2),d=j[0],u=j[1],b=Object(s.useState)(null),h=Object(o.a)(b,2),O=h[0],m=h[1],p=Object(s.useState)(null),f=Object(o.a)(p,2),y=f[0],v=f[1],N=Object(s.useState)(null),R=Object(o.a)(N,2),S=R[0],I=R[1],A=Object(s.useState)(null),F=Object(o.a)(A,2),k=F[0],T=F[1],E=Object(s.useState)(!0),P=Object(o.a)(E,2),z=P[0],B=P[1],U=Object(s.useState)(!0),G=Object(o.a)(U,2),H=G[0],X=G[1],Q=Object(s.useState)(!0),q=Object(o.a)(Q,2),K=q[0],W=q[1],Z=Object(s.useState)(!0),_=Object(o.a)(Z,2),J=_[0],V=_[1];return Object(s.useEffect)((function(){fetch("https://ergast.com/api/f1/circuits/".concat(t.Circuit.circuitId,"/fastest/1/results.json")).then((function(e){return e.json()})).then((function(e){var t=e.MRData.RaceTable.Races[0];e.MRData.RaceTable.Races.forEach((function(e){e.Results[0].FastestLap.Time.time<t.Results[0].FastestLap.Time.time&&(t=e)})),u(e.MRData.RaceTable.Races[e.MRData.RaceTable.Races.length-1]),v(t),W(!1)})),fetch("https://ergast.com/api/f1/circuits/".concat(t.Circuit.circuitId,"/races.json")).then((function(e){return e.json()})).then((function(e){return i(e.MRData.RaceTable.Races[0]),X(!1),fetch("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=".concat(t.Circuit.circuitName,"&origin=*"),{method:"GET"})})).then((function(e){return e.json()})).then((function(e){I(Object.keys(e.query.pages)),T(e.query.pages),B(!1)})),fetch("https://ergast.com/api/f1/circuits/".concat(t.Circuit.circuitId,"/results/1.json?limit=100")).then((function(e){return e.json()})).then((function(e){m(e.MRData.RaceTable.Races[e.MRData.RaceTable.Races.length-1]),V(!1)}))}),[t.Circuit.circuitId,t.Circuit.circuitName]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(x.a,{className:"text-center",children:[Object(g.jsx)("h1",{children:t.Circuit.circuitName}),Object(g.jsxs)("h3",{children:[Object(g.jsx)(C.a,{countryCode:w.a[c].toLowerCase(),height:"30"})," ",t.Circuit.Location.country," (",t.Circuit.Location.locality,")"]})]}),z?null:Object(g.jsx)(x.a,{children:Object(g.jsxs)("p",{style:{textAlign:"justify"},children:[k[S].extract,Object(g.jsx)("br",{}),"Source:"," ",Object(g.jsx)("a",{href:"https://en.wikipedia.org/wiki/".concat(k[S].title),children:"Wikipedia"})]})}),Object(g.jsx)(D,{coordinates:[t.Circuit.Location.lat,t.Circuit.Location.long],circuitName:t.Circuit.circuitName,mapHeight:{height:"700px"}}),K||H||J?Object(g.jsx)(x.a,{className:"justify-content-center text-center",style:{marginTop:"15px"},children:Object(g.jsx)(M.a,{animation:"border"})}):Object(g.jsx)(L,{firstGP:r,lastGP:d,lastGPDetails:O,fastestLap:y})]})},z=c(116),B=c(296),U={1:"rgb(128,0,0)",2:"rgb(255,215,0)",3:"rgb(255,0,0)",4:"rgb(255,140,0)",5:"rgb(0,100,0)",6:"rgb(100,149,237)",7:"rgb(0,191,255)",8:"rgb(30,144,255)",9:"rgb(0,0,255)",10:"rgb(138,43,226)",11:"rgb(147,112,219)",12:"rgb(148,0,211)",13:"rgb(255,0,255)",14:"rgb(255,20,147)",15:"rgb(139,69,19)",16:"rgb(210,105,30)",17:"rgb(244,164,96)",18:"rgb(112,128,144)",19:"rgb(176,196,222)",20:"rgb(255,99,71)",21:"rgb(250,128,114)",22:"rgb(184,134,11)",23:"rgb(154,205,50)",24:"rgb(50,205,50)",25:"rgb(75,0,130)",26:"rgb(210,180,140)",27:"rgb(128,128,128)",28:"rgb(34,139,34)",29:"rgb(127,255,0)",30:"rgb(240,230,140)"},G=c(289),H=c.n(G),X=function(e){var t=e.season,c=e.round,a=Object(s.useContext)(f.a).theme,n=Object(s.useState)({labels:null,datasets:null}),r=Object(o.a)(n,2),j=r[0],d=r[1],u=Object(s.useState)(!0),b=Object(o.a)(u,2),h=b[0],x=b[1];Object(s.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/".concat(t,"/").concat(c,"/laps.json?limit=2000")).then((function(e){return e.json()})).then((function(e){return p(e.MRData.RaceTable.Races[0].Laps)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,c]);var O={plugins:{legend:{display:!0,position:"bottom"}},scales:{y:{reverse:!0,ticks:{color:"dark"===a?"white":"dark",font:{size:20},stepSize:1},grid:{color:"#777"}},x:{ticks:{color:"dark"===a?"white":"dark",font:{size:20}},grid:{color:"#777"}}}},m={plugins:{legend:{display:!0,position:"bottom"}},scales:{y:{reverse:!0,ticks:{color:"dark"===a?"white":"dark",font:{size:10},stepSize:1},grid:{color:"#777"}},x:{ticks:{color:"dark"===a?"white":"dark",font:{size:10}},grid:{color:"#777"}}}},p=function(e){var t={},c=[];e.forEach((function(e){c.push(parseInt(e.number)),e.Timings.forEach((function(e){t[e.driverId]||(t[e.driverId]=[]),t[e.driverId].push(e.position)}))}));for(var s=[],a=1,n=0,r=Object.entries(t);n<r.length;n++){var i=Object(o.a)(r[n],2),l={label:i[0],data:i[1],fill:!1,backgroundColor:U[a],borderColor:U[a]};s.push(l),a++}d({labels:c,datasets:s}),x(!1)};return Object(g.jsx)(g.Fragment,{children:h?null:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(H.a,{minWidth:1224,children:Object(g.jsx)(B.a,{data:j,height:325,width:500,options:O})}),Object(g.jsx)(H.a,{maxWidth:1224,children:Object(g.jsx)(B.a,{data:j,height:850,width:500,options:m})})]})})},Q=function(e){var t=e.raceInfo,c=e.raceClassification,s=e.qualifyingClassification;return Object(g.jsxs)(d.a,{defaultActiveKey:"race",id:"uncontrolled-tab-example",className:"mb-3",children:[Object(g.jsxs)(u.a,{tabClassName:"tab-style",eventKey:"race",title:"RACE",children:[Object(g.jsx)(I,{raceInfo:t,eventCountryCode:t.Circuit.Location.country}),null!=c?Object(g.jsx)(v,{raceClassification:c}):Object(g.jsxs)(x.a,{className:"justify-content-center text-center",children:[Object(g.jsx)("p",{}),Object(g.jsx)(z.a,{date:t.date,time:t.time})]})]}),null!=c&&t.season>=1996?Object(g.jsxs)(u.a,{tabClassName:"tab-style",eventKey:"laps",title:"LAPS",children:[Object(g.jsx)(I,{raceInfo:t,eventCountryCode:t.Circuit.Location.country}),Object(g.jsx)("div",{style:{minHeight:"300px"},children:Object(g.jsx)(X,{season:t.season,round:t.round})})]}):null,null!=s?Object(g.jsxs)(u.a,{tabClassName:"tab-style",eventKey:"qualifying",title:"QUALIFYING",children:[Object(g.jsx)(I,{raceInfo:t,eventCountryCode:t.Circuit.Location.country}),Object(g.jsx)(R,{qualifyingClassification:s})]}):null,Object(g.jsx)(u.a,{tabClassName:"tab-style",eventKey:"circuit",title:"CIRCUIT",children:Object(g.jsx)(P,{raceInfo:t,eventCountryCode:t.Circuit.Location.country})})]})},q=function(e){var t=e.season,c=e.round,a=Object(s.useState)(null),n=Object(o.a)(a,2),r=n[0],j=n[1],d=Object(s.useState)(null),u=Object(o.a)(d,2),b=u[0],h=u[1],x=Object(s.useState)(!0),O=Object(o.a)(x,2),m=O[0],f=O[1],y=Object(s.useState)(!0),v=Object(o.a)(y,2),N=v[0],R=v[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/".concat(t,".json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.RaceTable.Races[parseInt(c)-1]&&j(e.MRData.RaceTable.Races[parseInt(c)-1])}));case 2:f(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/".concat(t,"/").concat(c,"/qualifying.json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.RaceTable.Races[0]&&h(e.MRData.RaceTable.Races[0].QualifyingResults)}));case 2:R(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),s()}),[t,c]),Object(g.jsx)("div",{style:{minHeight:"500px"},children:m||N?null:null===r?Object(g.jsx)(p.a,{to:"/error"}):Object(g.jsx)(Q,{season:t,round:c,raceInfo:r,qualifyingClassification:b})})},K=function(e){var t=e.season,c=e.round,a=Object(s.useState)(null),n=Object(o.a)(a,2),r=n[0],d=n[1],u=Object(s.useState)(null),b=Object(o.a)(u,2),h=b[0],O=b[1],m=Object(s.useState)(null),p=Object(o.a)(m,2),f=p[0],y=p[1],v=Object(s.useState)(!0),N=Object(o.a)(v,2),R=N[0],C=N[1],S=Object(s.useState)(!0),w=Object(o.a)(S,2),I=w[0],A=w[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/".concat(t,"/").concat(c,"/results.json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.RaceTable.Races[0]&&(d(e.MRData.RaceTable.Races[0]),O(e.MRData.RaceTable.Races[0].Results))}));case 2:C(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ergast.com/api/f1/".concat(t,"/").concat(c,"/qualifying.json")).then((function(e){return e.json()})).then((function(e){void 0!==e.MRData.RaceTable.Races[0]&&y(e.MRData.RaceTable.Races[0].QualifyingResults)}));case 2:A(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),s()}),[t,c]),Object(g.jsx)(j.a,{fluid:"md",children:R||I?Object(g.jsx)(j.a,{style:{marginTop:"5%",minHeight:"500px"},children:Object(g.jsx)(x.a,{className:"justify-content-center text-center",children:Object(g.jsx)(M.a,{animation:"border"})})}):null==h?Object(g.jsx)(q,{season:t,round:c}):Object(g.jsx)(Q,{raceInfo:r,raceClassification:h,qualifyingClassification:f})})};t.default=function(){var e=Object(p.h)().season,t=Object(p.h)().round;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(a.a,{}),Object(g.jsx)(K,{season:e,round:t}),Object(g.jsx)(n.a,{})]})}},50:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var s={British:"GB",Finnish:"FI",Dutch:"NL",Mexican:"MX",Spanish:"ES",Australian:"AU",Monegasque:"MC",French:"FR",German:"DE",Japanese:"JP",Canadian:"CA",Italian:"IT",Russian:"RU",Austrian:"AT",Swiss:"CH",American:"US",Thai:"TH","New Zealander":"NZ","New Zealand":"NZ",Swedish:"SE",Portuguese:"PT",Brazilian:"BR",Hungarian:"HU",Argentine:"AR",Belgian:"BE",Belgium:"BE","South African":"ZA",Danish:"DK",Liechtensteiner:"LI","Hong Kong":"HK",Irish:"IE",Chilean:"CL",Venezuelan:"VE",Colombian:"CO",Czech:"CZ",Malaysia:"MY",Indian:"IN",Polish:"PL",Indonesian:"ID",Rhodesian:"ZW",Russia:"RU",Korea:"KR",Argentina:"AR",UAE:"AE",Australia:"AU",Austria:"AT",Azerbaijan:"AZ",Bahrain:"BH",Brazil:"BR",Canada:"CA",China:"CN",France:"FR",Germany:"DE",Hungary:"HU",India:"IN",Italy:"IT",Japan:"JP",Malyasia:"MY",Malaysian:"MY",Mexico:"MX",Monaco:"MC",Morocco:"MA",Netherlands:"NL",Portugal:"PT","Saudi Arabia":"SA",Singapore:"SG","South Africa":"ZA",Spain:"ES",Sweden:"SE",Switzerland:"CH",Turkey:"TR",UK:"GB",USA:"US",Qatar:"QA"}},52:function(e,t,c){},54:function(e,t,c){"use strict";c(0);var s={red_bull:"#0600EF",williams:"#005AFF",mercedes:"#00D2BE",mclaren:"#FF8700",aston_martin:"#006F62",alphatauri:"#2B4562",alpine:"#0090FF",ferrari:"#DC0000",haas:"#FFFFFF",alfa:"#900000",renault:"#FFF500",racing_point:"#FFC0CB",toro_rosso:"#469BFF",force_india:"#F596C8",sauber:"#9B0000",manor:"#323232",lotus_f1:"#FFB800",marussia:"#6E0000",caterham:"#0b361f"},a=c(2);t.a=function(e){var t=e.constructorId,c=e.height,n=void 0===c?"27px":c;return Object(a.jsx)("div",{style:{width:"3px",height:n,display:"table",margin:"0 auto",backgroundColor:s.hasOwnProperty(t)?s[t]:"#000000"}})}},55:function(e,t,c){"use strict";var s=c(0),a=c(21),n=c(49),r=c(43),i=c(44),l=c(87),o=(c(56),c(8)),j=c(78),d=c(48),u=c(88),b=c(2);t.a=function(){var e=Object(s.useContext)(a.a),t=e.theme,c=e.setTheme;return Object(s.useEffect)((function(){localStorage.setItem("theme",t)}),[t]),Object(b.jsx)(l.a,{className:"navbar",bg:"dark",variant:"dark",children:Object(b.jsxs)(n.a,{style:{minHeight:"40px"},children:[Object(b.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:Object(b.jsx)(l.a.Brand,{className:"icon-link",children:Object(b.jsx)(d.a,{size:30})})}),Object(b.jsx)(o.b,{to:"/schedule",style:{textDecoration:"none"},children:Object(b.jsx)(l.a.Brand,{className:"text-link",children:"RACES"})}),Object(b.jsx)(o.b,{to:"/standings",style:{textDecoration:"none"},children:Object(b.jsx)(l.a.Brand,{className:"text-link",children:"STANDINGS"})}),Object(b.jsx)(l.a.Collapse,{className:"justify-content-end",children:Object(b.jsxs)(r.a,{className:"g-2",children:[Object(b.jsx)(i.a,{style:{marginTop:"15px"},children:Object(b.jsx)(u.a,{onChange:function(){return function(){var e="light"===t?"dark":"light";c(e),localStorage.setItem("theme",e)}()},checked:"dark"===t,size:20})}),Object(b.jsx)(i.a,{children:Object(b.jsx)(l.a.Brand,{className:"icon-link",href:"https://github.com/jdro10","aria-label":"Github",children:Object(b.jsx)(j.a,{size:25})})})]})})]})})}},56:function(e,t,c){},57:function(e,t,c){"use strict";c(0),c(58);var s=c(49),a=c(43),n=c(44),r=c(48),i=c(46),l=c(53),o=c(70),j=c(51),d=c(2);t.a=function(){return Object(d.jsx)("footer",{children:Object(d.jsxs)(s.a,{children:[Object(d.jsxs)(a.a,{className:"justify-content-center text-center",xs:"auto",id:"row",children:[Object(d.jsx)(n.a,{children:Object(d.jsx)(r.a,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(i.b,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(i.d,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(l.a,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(i.c,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(i.a,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(o.a,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(j.b,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(l.b,{size:40})}),Object(d.jsx)(n.a,{children:Object(d.jsx)(j.c,{size:40})})]}),Object(d.jsx)(a.a,{className:"justify-content-md-center",xs:"auto",id:"lastRow"}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"API"})})}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsxs)(n.a,{md:"auto",style:{textAlign:"center"},children:["All racing data is obtained through"," ",Object(d.jsx)("a",{href:"http://ergast.com/mrd/",style:{color:"white"},children:"Ergast API"}),"."]})}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsxs)(n.a,{md:"auto",style:{textAlign:"center"},children:["Some drivers' and circuits' information are obtained through"," ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/w/api.php",style:{color:"white"},children:"Wikipedia API"}),"."]})}),Object(d.jsx)("br",{}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsx)("h5",{children:"DISCLAIMER"})})}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:"auto",style:{textAlign:"center"},children:"This website was developed for learning and educational purposes only."})}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:"auto",style:{textAlign:"center"},children:"Data displayed may be inaccurate. By using this website you acknowledge this."})}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:"auto",style:{textAlign:"center"},children:"The author disclaims all responsibility for any loss or damage arising from the use of this website."})}),Object(d.jsx)("br",{}),Object(d.jsx)(a.a,{className:"justify-content-md-center",children:Object(d.jsx)(n.a,{md:7,children:Object(d.jsx)("p",{style:{textAlign:"center"},children:"This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V."})})})]})})}},58:function(e,t,c){},79:function(e,t,c){"use strict";function s(e,t){var c=new Date(e+"T"+t);return(c.getHours()<10?"0":"")+c.getHours()+":"+((c.getMinutes()<10?"0":"")+c.getMinutes())}function a(e){var t=e.split("-");return"".concat(t[2],"/").concat(t[1],"/").concat(t[0])}c.d(t,"b",(function(){return s})),c.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=8.025fa2ad.chunk.js.map