"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{4922:function(e,n,r){r.d(n,{Z:function(){return o}});var t,c=r(8966),a=(r(2791),r(168)),i=r(5706).Z.div(t||(t=(0,a.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1200;\n"]))),s=r(184);function o(){return(0,s.jsxs)(i,{children:[(0,s.jsx)(c.RL,{height:"80",width:"80",radius:"48",color:"#000000",ariaLabel:"watch-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),";"]})}},2884:function(e,n,r){r.r(n);var t=r(5861),c=r(9439),a=r(4687),i=r.n(a),s=r(4922),o=r(2791),u=r(7689),p=r(1087),f=r(4390),h=r(184),l=(0,o.lazy)((function(){return r.e(247).then(r.bind(r,1247))})),d=(0,o.lazy)((function(){return r.e(186).then(r.bind(r,186))}));n.default=function(){var e,n,r=(0,o.useState)(null),a=(0,c.Z)(r,2),v=a[0],x=a[1],w=(0,o.useState)(!1),m=(0,c.Z)(w,2),j=m[0],k=m[1],g=(0,o.useState)(""),b=(0,c.Z)(g,2),y=b[0],Z=b[1],_=(0,u.UO)().movieId,S=(0,u.TH)(),U=(0,o.useRef)(null!==(e=null===(n=S.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");return(0,o.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,f.TP)(n);case 4:r=e.sent,x(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Z(e.t0.message);case 11:return e.prev=11,k(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(n){return e.apply(this,arguments)}}();e(_)}),[_]),(0,h.jsxs)("div",{children:[y.length>0&&(0,h.jsx)("div",{children:y}),j&&(0,h.jsx)(s.Z,{}),null!==v&&(0,h.jsxs)("div",{children:[(0,h.jsx)(p.rU,{to:U.current,style:{display:"block",marginBottom:"20px"},children:"Go back"}),(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(v.poster_path),alt:v.original_title,width:200}),(0,h.jsx)("h1",{children:v.original_title}),(0,h.jsx)("h2",{children:"Vote Average:"}),(0,h.jsxs)("p",{children:[" ",v.vote_average]}),(0,h.jsx)("h2",{children:"Genres:"}),v.genres.length>0?v.genres.map((function(e){var n=e.name,r=e.id;return(0,h.jsx)("span",{children:n},r)})).join(", "):"There no genres",(0,h.jsx)("h2",{children:"Overview:"}),(0,h.jsxs)("p",{children:[v.overview,"`"]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{children:"Additional information:"}),(0,h.jsx)(p.rU,{to:"cast",children:"Cast"}),(0,h.jsx)(p.rU,{to:"reviews",children:"Reviews"})]}),(0,h.jsx)("div",{children:(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(s.Z,{}),children:(0,h.jsxs)(u.Z5,{children:[(0,h.jsx)(u.AW,{path:"cast",element:(0,h.jsx)(l,{})}),(0,h.jsx)(u.AW,{path:"reviews",element:(0,h.jsx)(d,{})})]})})})]})}},4390:function(e,n,r){r.d(n,{M1:function(){return p},TP:function(){return u},UN:function(){return h},Xu:function(){return o},tx:function(){return f}});var t=r(5861),c=r(4687),a=r.n(c),i="https://api.themoviedb.org/3/",s="65175319ff5fdf769ef44bf4c6a21d27",o=function(){var e=(0,t.Z)(a().mark((function e(){var n,r,t,c,o=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:"",r=o.length>1&&void 0!==o[1]?o[1]:1,e.next=4,fetch("".concat(i,"trending/movie/day?api_key=").concat(s,"&query=").concat(n,"&page=").concat(r));case 4:return t=e.sent,e.next=7,t.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"movie/").concat(n,"?api_key=").concat(s));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Some api error occured");case 5:return e.next=7,r.json();case 7:return t=e.sent,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(s));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Some api error occured");case 5:return e.next=7,r.json();case 7:return t=e.sent,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(s));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Some api error occured");case 5:return e.next=7,r.json();case 7:return t=e.sent,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Some api error occured");case 5:return e.next=7,r.json();case 7:return t=e.sent,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=884.c040d4b8.chunk.js.map