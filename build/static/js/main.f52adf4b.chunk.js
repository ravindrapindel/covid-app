(this["webpackJsonpcovidtracking-app"]=this["webpackJsonpcovidtracking-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={AllCovid:"AllCovid_AllCovid__27Oad",Confirmed:"AllCovid_Confirmed__2sVU9",Active:"AllCovid_Active__1S0X8",Recovered:"AllCovid_Recovered__3WutV",Deceased:"AllCovid_Deceased__1u-6g"}},function(e,t,n){e.exports={Btn:"Country_Btn__2lU7G"}},function(e,t,n){e.exports={Header:"Header_Header__12wNq",Date:"Header_Date__1h5-H"}},,function(e,t,n){e.exports={Input:"Input_Input__25uEJ","dropdown-content":"Input_dropdown-content__1rSCv"}},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(9),s=n.n(a),i=(n(14),n(2)),l=(n(15),n(3)),d=n(0),o=r.a.createContext({data:[],isCountrySelected:!1,isCountrySelectedHandler:function(){},country:"",countryHandler:function(){},sortSelected:"",sortSelectedHandler:function(){}});function j(e){var t=Object(l.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1],a=Object(l.useState)(!1),s=Object(i.a)(a,2),j=s[0],u=s[1],b=Object(l.useState)("newCase"),h=Object(i.a)(b,2),O=h[0],x=h[1];return Object(d.jsx)(o.Provider,{value:{data:e.data,isCountrySelected:j,isCountrySelectedHandler:function(e){u(e)},country:c,countryHandler:function(e){r(e)},sortSelected:O,sortSelectedHandler:function(e){x(e)}},children:e.children})}var u=o,b=n(4),h=n.n(b);var O=function(e){var t=Object(c.useContext)(u).data.filter((function(e){return"All"===e.country}));return Object(d.jsxs)("div",{className:h.a.AllCovid,children:[Object(d.jsxs)("div",{className:h.a.Confirmed,children:[Object(d.jsx)("div",{children:"Confirmed"}),Object(d.jsx)("div",{children:t[0].cases.new}),Object(d.jsx)("div",{children:t[0].cases.total})]}),Object(d.jsxs)("div",{className:h.a.Active,children:[Object(d.jsx)("div",{children:"Active"}),Object(d.jsx)("div",{children:t[0].cases.active})]}),Object(d.jsxs)("div",{className:h.a.Recovered,children:[Object(d.jsx)("div",{children:"Recovered"}),Object(d.jsx)("div",{children:t[0].cases.recovered})]}),Object(d.jsxs)("div",{className:h.a.Deceased,children:[Object(d.jsx)("div",{children:"Deceased"}),Object(d.jsx)("div",{children:t[0].deaths.new}),Object(d.jsx)("div",{children:t[0].deaths.total})]})]})},x=n(5),v=n.n(x);var p=function(e){return Object(d.jsx)("div",{className:"table-responsive-md",children:Object(d.jsxs)("table",{className:"table table-striped",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Country"}),Object(d.jsxs)("th",{children:[" ",Object(d.jsx)("button",{onClick:e.btnHandler,className:v.a.Btn,children:" Confirmed "})]}),Object(d.jsx)("th",{children:"Active"}),Object(d.jsx)("th",{children:"Recovered"}),Object(d.jsx)("th",{children:"Critical "}),Object(d.jsx)("th",{children:"Deceased"}),Object(d.jsxs)("th",{children:[" ",Object(d.jsx)("button",{onClick:e.btnHandler,className:v.a.Btn,children:" Cases per million "})]}),Object(d.jsxs)("th",{children:[" ",Object(d.jsx)("button",{onClick:e.btnHandler,className:v.a.Btn,children:" Deaths per million "})]})]})}),Object(d.jsx)("tbody",{children:e.data.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[" ",e.country]}),Object(d.jsxs)("td",{children:[" ",Object(d.jsxs)("h6",{children:["+",e.newCase," "]})," ",e.confirmed]}),Object(d.jsx)("td",{children:e.active}),Object(d.jsxs)("td",{children:[" ",e.recovered]}),Object(d.jsxs)("td",{children:[" ",e.critical]}),Object(d.jsxs)("td",{children:["  ",e.deaths]}),Object(d.jsxs)("td",{children:[" ",e.casepermillion]}),Object(d.jsxs)("td",{children:[e.deathspermillion," "]})]},t)}))})]})})};var f=function(){var e,t,n=Object(c.useContext)(u),r=n.data.map((function(e){var t=0,n=0,c=0,r=0,a=0,s=0,i=0;return null!==e.cases.new&&(t=parseInt(e.cases.new)),null!==e.cases["1M_pop"]&&(n=parseInt(e.cases["1M_pop"])),null!==e.deaths["1M_pop"]&&(c=parseInt(e.deaths["1M_pop"])),null!==e.cases.active&&(r=parseInt(e.cases.active)),null!==e.cases.recovered&&(a=parseInt(e.cases.recovered)),null!==e.deaths.total&&(s=parseInt(e.deaths.total)),null!==e.cases.critical&&(i=parseInt(e.cases.critical)),{newCase:t,casepermillion:n,deathspermillion:c,country:e.country,continent:e.continent,confirmed:parseInt(e.cases.total),active:r,recovered:a,deaths:s,critical:i}})),a=[];return(a="undefined"!==localStorage.getItem("country")&&null!==localStorage.getItem("country")?r.filter((function(e){return e.country===localStorage.getItem("country")})):n.isCountrySelected?r.filter((function(e){return e.country===n.country})):r.filter((function(e){return e.country!==e.continent}))).sort((t=n.sortSelected,function(e,n){return e[t]<n[t]?1:e[t]>n[t]?-1:0})),e=a,Object(d.jsx)(p,{btnHandler:function(e){"Cases per million"===e.target.innerText?n.sortSelectedHandler("casepermillion"):"Deaths per million"===e.target.innerText?n.sortSelectedHandler("deathspermillion"):n.sortSelectedHandler("newCase")},data:e})},m=n(6),C=n.n(m);var y=function(){var e=Object(c.useContext)(u);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h1",{className:C.a.Header,children:[" COVID19 ",Object(d.jsx)("span",{children:"WORLD"})]}),Object(d.jsx)("h3",{className:C.a.Header,children:" Search your country or continent "}),Object(d.jsx)("div",{className:C.a.Date,children:e.data[0].day})]})},S=n(8),_=n.n(S);var g=function(){var e=Object(c.useRef)(),t=Object(c.useContext)(u),n=t.data.map((function(e){return e.country})),r=Object(l.useState)(!1),a=Object(i.a)(r,2),s=a[0],o=a[1],j=Object(l.useState)(""),b=Object(i.a)(j,2),h=b[0],O=b[1],x=Object(l.useState)([]),v=Object(i.a)(x,2),p=v[0],f=v[1];function m(e){O(e.target.innerText),localStorage.setItem("country",e.target.innerText),t.countryHandler(e.target.innerText),t.isCountrySelectedHandler(!0),o(!1)}return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:_.a.Input,children:[Object(d.jsx)("input",{type:"text",placeholder:"Search..",ref:e,onKeyUp:function(){O(e.current.value),t.isCountrySelectedHandler(!1),localStorage.clear();var c=e.current.value.toUpperCase();if(c.length>=2){var r=n.filter((function(e){return e.toUpperCase().indexOf(c)>-1}));r.length=7,f(r),o(!0)}else f([])},onChange:function(e){localStorage.clear(),O(e.target.value)},value:h}),s?Object(d.jsxs)("div",{className:_.a["dropdown-content"],children:[p.map((function(e,t){return Object(d.jsxs)("button",{onClick:m,children:[" ",e,"  "]},t)}))," "]}):null]})})};var H=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(i.a)(a,2),l=s[0],o=s[1];return Object(c.useEffect)((function(){fetch("https://covid-193.p.rapidapi.com/statistics",{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"613baafc16msh487fdb600a437f5p1ae449jsnf8acf1720170"}}).then((function(e){return e.json()})).then((function(e){r(e.response),o(!0)})).catch((function(e){alert("Not able to fetch Data")}))}),[]),Object(d.jsx)("div",{className:"App",children:l&&Object(d.jsxs)(j,{data:n,children:[Object(d.jsx)(y,{}),Object(d.jsx)(g,{}),Object(d.jsx)(O,{}),Object(d.jsx)(f,{})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(H,{})}),document.getElementById("root")),I()}],[[17,1,2]]]);
//# sourceMappingURL=main.f52adf4b.chunk.js.map