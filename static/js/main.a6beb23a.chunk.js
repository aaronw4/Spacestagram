(this.webpackJsonpnasa=this.webpackJsonpnasa||[]).push([[0],{38:function(e,t,a){},59:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(28),l=a.n(s),i=(a(38),a(13)),d=a.n(i),r=a(8),o=a(7),j=a(29),b=a(15),u=a(30),h=a.n(u),O=a(3),Y=a.n(O),x=Object(c.createContext)(),v=(a(59),a(14)),D=a(33),m=a(32),p=a(0);function f(e){var t=Y()().format("YYYY-MM-DD"),a=Y()(t).diff(Y()(e.date),"days"),c=Y()(e.date).add(3,"days").format("YYYY-MM-DD"),n=Y()(e.date).add(2,"days").format("YYYY-MM-DD"),s=Y()(e.date).add(1,"days").format("YYYY-MM-DD"),l=Y()(e.date).subtract(1,"days").format("YYYY-MM-DD"),i=Y()(e.date).subtract(2,"days").format("YYYY-MM-DD"),d=Y()(e.date).subtract(3,"days").format("YYYY-MM-DD"),r=Y()(e.date).subtract(4,"days").format("YYYY-MM-DD"),o=Y()(e.date).subtract(5,"days").format("YYYY-MM-DD"),j=Y()(e.date).subtract(6,"days").format("YYYY-MM-DD"),b=Y()(e.date).subtract(7,"days").format("YYYY-MM-DD");return Object(p.jsxs)("div",{className:"dropdown",children:[Object(p.jsx)("button",{className:"dropbtn text",children:"Change Date"}),Object(p.jsxs)("div",{className:"dropdown-content",children:[a>2?Object(p.jsx)("button",{onClick:e.changeDate,value:c,id:"three",children:c}):null,a>1?Object(p.jsx)("button",{onClick:e.changeDate,value:n,id:"two",children:n}):null,a>0?Object(p.jsx)("button",{onClick:e.changeDate,value:s,id:"one",children:s}):null,Object(p.jsx)("button",{id:"active",children:e.date}),Object(p.jsx)("button",{onClick:e.changeDate,value:l,children:l}),Object(p.jsx)("button",{onClick:e.changeDate,value:i,children:i}),Object(p.jsx)("button",{onClick:e.changeDate,value:d,children:d}),Object(p.jsx)("button",{onClick:e.changeDate,value:r,children:r}),a>2?null:Object(p.jsx)("button",{onClick:e.changeDate,value:o,children:o}),a>1?null:Object(p.jsx)("button",{onClick:e.changeDate,value:j,children:j}),a>0?null:Object(p.jsx)("button",{onClick:e.changeDate,value:b,children:b})]})]})}Y()().format();var g=a(31),k=a.n(g),M=function(e){var t=Object(c.useContext)(x);return Object(p.jsx)("div",{children:e.date in t?Object(p.jsxs)("div",{children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("h1",{className:"title",children:t[e.date].title}),Object(p.jsx)("p",{className:"date",children:e.date}),Object(p.jsx)("a",{href:"https://www.nasa.gov/",children:Object(p.jsx)("img",{className:"symbol",src:"https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"})})]}),"video"===t[e.date].media_type?Object(p.jsx)(k.a,{url:t[e.date].url,playing:!0,loop:!0,height:"60vh",className:"video"}):Object(p.jsx)("a",{href:t[e.date].hdurl,target:"_blank",children:Object(p.jsx)("img",{className:"image",src:t[e.date].url})}),Object(p.jsx)("button",{onClick:e.handleClick,className:"likeButton",children:!1===t[e.date].like?Object(p.jsx)(v.a,{icon:m.a,size:"3x",color:"white"}):Object(p.jsx)(v.a,{icon:D.a,size:"3x",color:"blue"})}),Object(p.jsx)(f,{date:e.date,changeDate:e.changeDate}),Object(p.jsx)("p",{className:"explanation",children:t[e.date].explanation})]}):Object(p.jsx)("div",{className:"loading",children:"Loading..."})})};var y=function(){var e=Object(c.useState)({}),t=Object(b.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(Y()().format("YYYY-MM-DD")),l=Object(b.a)(s,2),i=l[0],u=l[1];return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://api.nasa.gov/planetary/apod?api_key=C8iZhiozIUVg3WRcic20xpp11Z2q9TtkPfWk1aB9&date=".concat(i));case 3:(t=e.sent).data.like=!1,n(Object(o.a)(Object(o.a)({},a),{},Object(r.a)({},i,t.data))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}console.log(i),i in a||function(){e.apply(this,arguments)}()}),[i]),Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(x.Provider,{value:a,children:Object(p.jsx)(M,{date:i,handleClick:function(){n(Object(o.a)(Object(o.a)({},a),{},Object(r.a)({},i,Object(o.a)(Object(o.a)({},a[i]),{},{like:!a[i].like}))))},changeDate:function(e){var t=e.target.value;u(t)}})})})};l.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.a6beb23a.chunk.js.map