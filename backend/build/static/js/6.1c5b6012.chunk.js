(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[6],{1569:function(e,t,n){"use strict";function a(e,t,n,a,c,r,o){try{var s=e[r](o),i=s.value}catch(l){return void n(l)}s.done?t(i):Promise.resolve(i).then(a,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,r){var o=e.apply(t,n);function s(e){a(o,c,r,s,i,"next",e)}function i(e){a(o,c,r,s,i,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return c}))},1573:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(569),c=n.n(a),r=n(1569),o=n(168),s=n(225),i=n.n(s),l=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/user/login",e);case 3:200===(a=t.sent).status&&("admin"===a.data.role?(window.localStorage.setItem("token",a.data.token),window.localStorage.setItem("role",a.data.role),window.localStorage.setItem("username",a.data.username),n({type:o.b,payload:{isLogged:!0,isAdmin:!0,username:a.data.username}})):(window.localStorage.setItem("token",a.data.token),window.localStorage.setItem("role",a.data.role),window.localStorage.setItem("username",a.data.username),n({type:o.b,payload:{isLogged:!0,isAdmin:!1,username:a.data.username}}))),console.log(a.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(e){console.log("Logout Delete localstorage"),window.localStorage.removeItem("token"),window.localStorage.removeItem("role"),e({type:o.c,payload:{isLogged:!1,isAdmin:!1,username:"",userRole:""}})}}},1605:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(338),o=n(86),s=n(53),i=n(1566),l=c.a.lazy((function(){return n.e(7).then(n.bind(null,1600))})),d=c.a.lazy((function(){return Promise.all([n.e(1),n.e(12)]).then(n.bind(null,1601))})),m=c.a.lazy((function(){return n.e(8).then(n.bind(null,1606))})),u=c.a.lazy((function(){return n.e(10).then(n.bind(null,1602))})),j=c.a.lazy((function(){return n.e(9).then(n.bind(null,1603))})),b=[{path:"/",exact:!0,name:"Home"},{path:"/events",exact:!0,name:"Events",component:c.a.lazy((function(){return Promise.all([n.e(1),n.e(15)]).then(n.bind(null,1604))}))},{path:"/dashboard",name:"Dashboard",component:l},{path:"/form",exact:!0,name:"Forms",component:d},{path:"/form/list",exact:!0,name:"Forms",component:d},{path:"/form/edit/:id",exact:!0,name:"Edit Form",component:u},{path:"/form/create",exact:!0,name:"Create Form",component:m},{path:"/form/display/:id",exact:!0,name:"Form",component:j}],x=n(54),h=Object(x.jsx)("div",{className:"pt-3 text-center",children:Object(x.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),p=function(){var e=Object(r.c)((function(e){return e.login}));return Object(x.jsx)("main",{className:"c-main",children:Object(x.jsx)(i.l,{fluid:!0,children:Object(x.jsx)(a.Suspense,{fallback:h,children:Object(x.jsxs)(s.d,{children:[b.map((function(t,n){return t.component&&Object(x.jsx)(s.b,{path:t.path,exact:t.exact,name:t.name,render:function(n){return!1!==e.isLogged?Object(x.jsx)(t.component,Object(o.a)({},n)):Object(x.jsx)(s.a,{to:{pathname:"/login"}})}},n)})),Object(x.jsx)(s.a,{from:"/",to:"/dashboard"})]})})})})},O=c.a.memo(p),f=function(){return Object(x.jsx)(i.r,{fixed:!1})},v=c.a.memo(f),g=n(1568),w=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.sidebarShow})),n=Object(r.c)((function(e){return e.login}));return Object(x.jsxs)(i.t,{withSubheader:!0,children:[Object(x.jsx)(i.P,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var n=!![!1,"responsive"].includes(t)||"responsive";e({type:"set",val:n})}}),Object(x.jsx)(i.P,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var n=![!0,"responsive"].includes(t)&&"responsive";e({type:"set",val:n})}}),Object(x.jsxs)(i.v,{className:"d-md-down-none mr-auto",children:[Object(x.jsx)(i.u,{className:"mx-auto d-lg-none",to:"/",children:Object(x.jsx)(g.a,{name:"logo",height:"48",alt:"Logo"})}),Object(x.jsxs)(i.w,{className:"px-3",children:[n.isAdmin&&Object(x.jsx)(i.x,{to:"/dashboard",children:"Dashboard"}),!1===n.isAdmin?Object(x.jsx)(i.x,{to:"/events",children:"Events"}):Object(x.jsx)(x.Fragment,{})]}),Object(x.jsx)(i.w,{className:"px-3",children:n.isAdmin&&Object(x.jsx)(i.x,{to:"/form/list",children:"Forms"})})]}),Object(x.jsxs)(i.v,{className:"px-3",children:[Object(x.jsx)(k,{}),Object(x.jsx)(C,{}),Object(x.jsx)(S,{}),Object(x.jsx)(y,{})]}),n.isAdmin&&Object(x.jsx)(i.O,{className:"px-3 justify-content-between",children:Object(x.jsx)(i.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:b})})]})},N=n(1573),y=function(){var e=Object(r.b)();return Object(x.jsxs)(i.n,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(x.jsx)(i.q,{className:"c-header-nav-link",caret:!1,children:Object(x.jsx)("div",{className:"c-avatar",children:Object(x.jsx)(i.y,{src:"avatars/4.jpg",className:"c-avatar-img",alt:"admin"})})}),Object(x.jsxs)(i.p,{className:"pt-0",placement:"bottom-end",children:[Object(x.jsx)(i.o,{header:!0,tag:"div",color:"light",className:"text-center",children:Object(x.jsx)("strong",{children:"Account"})}),Object(x.jsxs)(i.o,{onClick:function(){e(N.b()),console.log("logout")},children:[Object(x.jsx)(g.a,{name:"cil-account-logout",className:"mfe-2"}),"Logout"]})]})]})},S=function(){return Object(x.jsx)(x.Fragment,{})},k=function(){return Object(x.jsx)(x.Fragment,{})},C=function(){return Object(x.jsx)(x.Fragment,{})},I=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:Object(x.jsx)(g.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavTitle",_children:["Form"]},{_tag:"CSidebarNavItem",name:"List",to:"/form/list",icon:"cil-list"},{_tag:"CSidebarNavItem",name:"Create",to:"/form/create",icon:"cil-task"}],F=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.sidebarShow}));return Object(x.jsxs)(i.G,{show:t,onShowChange:function(t){return e({type:"set",val:t})},children:[Object(x.jsxs)(i.H,{className:"d-md-down-none",to:"/",children:[Object(x.jsx)(g.a,{className:"c-sidebar-brand-full",name:"logo-negative",height:35}),Object(x.jsx)(g.a,{className:"c-sidebar-brand-minimized",name:"sygnet",height:35})]}),Object(x.jsx)(i.J,{children:Object(x.jsx)(i.m,{items:I,components:{CSidebarNavDivider:i.K,CSidebarNavDropdown:i.L,CSidebarNavItem:i.M,CSidebarNavTitle:i.N}})}),Object(x.jsx)(i.I,{className:"c-d-md-down-none"})]})},A=c.a.memo(F);t.default=function(){var e=Object(r.c)((function(e){return e.login}));return Object(x.jsxs)("div",{className:"c-app c-default-layout",children:[e.isAdmin&&Object(x.jsx)(A,{}),Object(x.jsxs)("div",{className:"c-wrapper",children:[Object(x.jsx)(w,{}),Object(x.jsx)("div",{className:"c-body",children:Object(x.jsx)(O,{})}),Object(x.jsx)(v,{})]})]})}}}]);
//# sourceMappingURL=6.1c5b6012.chunk.js.map