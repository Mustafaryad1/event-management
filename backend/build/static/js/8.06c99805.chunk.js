(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{1567:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(339);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(u){a=!0,c=u}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1606:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var r=n(86),a=n(1567),c=n(2),o=(n(226),n(225)),i=n.n(o);n(338),n(1566);var u=n(54);function s(t){var e=Object(c.useState)({name:"",description:"",dateOfEvent:"2021-08-31"}),n=Object(a.a)(e,2),o=n[0],s=n[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Create Event"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Edit Form"}),"name  ",Object(u.jsx)("input",{onChange:function(t){s(Object(r.a)(Object(r.a)({},o),{},{name:t.target.value}))},className:"form-control",type:"text",value:o.name}),"description  ",Object(u.jsx)("input",{onChange:function(t){s(Object(r.a)(Object(r.a)({},o),{},{description:t.target.value}))},className:"form-control",type:"text",value:o.description}),"date  ",Object(u.jsx)("input",{onChange:function(t){s(Object(r.a)(Object(r.a)({},o),{},{dateOfEvent:t.target.value}))},className:"form-control",type:"date",value:o.dateOfEvent}),Object(u.jsx)("hr",{}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){i.a.post("/event",o).then((function(e){t.history.push("/form/list")})).catch((function(t){console.log(t)}))},children:"Create"})]})]})}}}]);
//# sourceMappingURL=8.06c99805.chunk.js.map