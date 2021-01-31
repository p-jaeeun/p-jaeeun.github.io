(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{38:function(n,e,t){},39:function(n,e,t){},40:function(n,e,t){},41:function(n,e,t){"use strict";t.r(e);var i=t(0),c=t(1),a=t.n(c),s=t(23),r=t.n(s),o=t(14),l=t(9),j=t(10),d=t(12),b=t(11),u=t(3),p=t(4);function h(){var n=Object(u.a)(["\n  width: 60px;\n  padding: 20px;\n  text-decoration: none;\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: #bebebe;\n  &:hover {\n    color: #000;\n    transition: 0.2s;\n  }\n  &."," {\n    color: #fff;\n    background-color: #000;\n  }\n"]);return h=function(){return n},n}function x(){var n=Object(u.a)(["\n  height: 50px;\n  margin-top: 15px;\n"]);return x=function(){return n},n}function m(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n"]);return m=function(){return n},n}function O(){var n=Object(u.a)(["\n  width: 400px;\n  list-style: none;\n  padding-right: 100px;\n  @media all and (min-width: 1000px) and (max-width: 1330px) {\n    padding-right: 90px;\n    width: 300px;\n  }\n  @media all and (min-width: 768px) and (max-width: 999px) {\n    padding-right: 20px;\n    width: 300px;\n  }\n"]);return O=function(){return n},n}function f(){var n=Object(u.a)(["\n  padding: 15px 0 0 100px;\n  align-items: center;\n  text-align: center;\n  font-size: 1.3rem;\n  font-weight: 500;\n  color: #bebebe;\n  &:hover {\n    color: #000;\n    transition: 0.2s;\n  }\n  @media all and (min-width: 1000px) and (max-width: 1330px) {\n    padding-left: 50px;\n  }\n  @media all and (min-width: 768px) and (max-width: 999px) {\n    padding-left: 30px;\n    font-size: 1.2rem;\n  }\n  @media all and (max-width: 768px) {\n    padding: 20px 0 0 30px;\n    font-size: 1.1rem;\n  }\n"]);return f=function(){return n},n}function g(){var n=Object(u.a)(["\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]);return g=function(){return n},n}var v=function(n){Object(d.a)(t,n);var e=Object(b.a)(t);function t(){var n;return Object(l.a)(this,t),(n=e.call(this)).openMenu=function(){!1===n.state.isMenuOpen?n.setState({isMenuOpen:!0}):n.setState({isOpen:!1})},n.closeMenu=function(){n.setState({isMenuOpen:!1})},n.state={isMenuOpen:!1},n}return Object(j.a)(t,[{key:"render",value:function(){return Object(i.jsxs)(w,{children:[Object(i.jsx)(k,{to:"/",children:"p.jaeeun"}),Object(i.jsx)(N,{children:Object(i.jsxs)(y,{children:[Object(i.jsx)(M,{children:Object(i.jsx)(_,{exact:!0,to:"/",children:"Home"})}),Object(i.jsx)(M,{children:Object(i.jsx)(_,{to:"/about",children:"About"})}),Object(i.jsx)(M,{children:Object(i.jsx)(_,{to:"/projects",children:"Projects"})})]})})]})}}]),t}(c.Component),w=p.a.header(g()),k=Object(p.a)(o.b)(f()),N=p.a.nav(O()),y=p.a.ul(m()),M=p.a.li(x()),S="selected",_=Object(p.a)(o.c).attrs({activeClassName:S})(h(),S);function z(){var n=Object(u.a)(["\n  list-style: none;\n  text-align: center;\n  font-size: 0.9rem;\n  font-weight: 350;\n"]);return z=function(){return n},n}function C(){var n=Object(u.a)(["\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]);return C=function(){return n},n}function J(){var n=Object(u.a)(["\n  width: 100%;\n  height: 40px;\n  position: fixed;\n  overflow: hidden;\n  bottom: 0;\n"]);return J=function(){return n},n}var A=function(){return Object(i.jsx)(E,{children:Object(i.jsx)(F,{children:Object(i.jsx)(P,{children:Object(i.jsx)("span",{children:" \xa9 2020 | Jaeeun All rights reserved."})})})})},E=p.a.footer(J()),F=p.a.ul(C()),P=p.a.li(z()),D=t(2);function H(){var n=Object(u.a)(['\n  font-size: 1.5rem;\n  font-weight: 150;\n  text-transform: capitalize;\n  white-space: nowrap;\n  color: transparent;\n  top: 75%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  &::before {\n    content: "Front-end Engineer, Web Developer";\n    position: absolute;\n    width: 100%;\n    color: #000;\n    overflow: hidden;\n    border-right: 1px solid #bebebe;\n    white-space: nowrap;\n    /* letter-spacing: 0.1rem; */\n    animation: typing 6s steps(35, end), blink 0.75s step-end infinite;\n  }\n\n  @keyframes typing {\n    0% {\n      width: 0;\n    }\n\n    100% {\n      width: 100%;\n    }\n  }\n  @keyframes blink {\n    from,\n    to {\n      border-color: transparent;\n    }\n    50% {\n      border-color: #bebebe;\n    }\n  }\n  @media all and (min-width: 768px) and (max-width: 1330px) {\n    font-size: 1.4rem;\n  }\n  @media all and (min-width: 550px) and (max-width: 768px) {\n    font-size: 1.2rem;\n  }\n  @media all and (max-width: 550px) {\n    font-size: 0.9rem;\n  }\n']);return H=function(){return n},n}function I(){var n=Object(u.a)(["\n  font-size: 5.5rem;\n  @media all and (min-width: 930px) and (max-width: 1330px) {\n    font-size: 5rem;\n  }\n  @media all and (min-width: 768px) and (max-width: 929px) {\n    font-size: 4rem;\n  }\n  @media all and (min-width: 550px) and (max-width: 768px) {\n    font-size: 3rem;\n  }\n  @media all and (max-width: 549px) {\n    font-size: 2rem;\n"]);return I=function(){return n},n}function T(){var n=Object(u.a)(["\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return T=function(){return n},n}function B(){var n=Object(u.a)(['\n  width: 100%;\n  min-height: 100%;\n  position: relative;\n  padding-top: 50px;\n  margin: -50px 0 -40px 0;\n  top: 0;\n  left: 0;\n  z-index: -10;\n  /* footer height */\n  background: url("/images/main.jpg");\n  background-size: cover;\n  background-attachment: fixed;\n  text-align: center;\n']);return B=function(){return n},n}var L=function(n){Object(d.a)(t,n);var e=Object(b.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(i.jsx)(V,{children:Object(i.jsxs)(W,{children:[Object(i.jsx)(G,{children:"Park Jae Eun"}),Object(i.jsx)(R,{children:"Front-end Engineer, Web Developer"})]})})}}]),t}(c.Component),V=p.a.div(B()),W=p.a.div(T()),G=p.a.h1(I()),R=p.a.p(H()),q=(t(38),function(n){Object(d.a)(t,n);var e=Object(b.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h3",{className:"about_title",children:'"\uc0c8\ub85c\uc6b4 \uac83\uc744 \ud559\uc2b5\ud558\ub294 \uc990\uac70\uc6c0\uc744 \uc544\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790, \ubc15\uc7ac\uc740\uc785\ub2c8\ub2e4."'}),Object(i.jsx)("div",{className:"about_profile",children:Object(i.jsx)("img",{src:"/images/profile.png",alt:"profile"})}),Object(i.jsxs)("div",{className:"about_list",children:[Object(i.jsxs)("div",{className:"about_item info",children:[Object(i.jsxs)("div",{className:"about_content",children:[Object(i.jsx)("h2",{className:"about-text",children:"Education"}),Object(i.jsxs)("p",{children:["2020.07~2020.10 ",Object(i.jsx)("b",{children:"\uad6c\uacf5\ud329\ud1a0\ub9ac"})," \ucf54\ub529\ubd80\ud2b8\ucea0\ud504 \uc218\ub8cc"]})]}),Object(i.jsxs)("div",{className:"about_content",children:[Object(i.jsx)("h2",{className:"about-text",children:"Contact Me"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{class:"fas fa-phone icon"}),"010.9991.4194"]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{class:"fas fa-envelope icon"}),"parkje91@gmail.com"]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{class:"fab fa-github icon"}),"p-jaeeun"]})]})]}),Object(i.jsxs)("div",{className:"about_item ",children:[Object(i.jsx)("h2",{className:"about-text second",children:"Skills"}),Object(i.jsxs)("div",{className:"skill_list",children:[Object(i.jsxs)("div",{className:"skill_item",children:[Object(i.jsx)("h3",{children:"Front-end"}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("img",{className:"about_skill",src:"/images/javascript.png",alt:"javascript"}),Object(i.jsx)("p",{children:"VanillaJS, es5\uc640 es6 \ubb38\ubc95\uc758 \uc774\ud574"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("img",{className:"about_skill",src:"/images/html.png",alt:"html"}),Object(i.jsx)("p",{children:"html5 \uc6f9\ud45c\uc900 \uc774\ud574, \uc758\ubbf8\uc788\ub294 \ub9c8\ud06c\uc5c5"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("img",{className:"about_skill",src:"/images/css.png",alt:"css"}),Object(i.jsx)("p",{children:"\ub808\uc774\uc544\uc6c3\uc744 \uad6c\uc131\ud558\uace0, \ubc18\uc751\ud615 \ub514\uc790\uc778 \uad6c\ud604 \uac00\ub2a5"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("img",{className:"about_skill",src:"/images/react.png",alt:"react"}),Object(i.jsx)("p",{children:"\ucef4\ud3ec\ub10c\ud2b8\uc758 \uc774\ud574\uc640 spa \uad6c\ud604 \uac00\ub2a5"})]})]})]}),Object(i.jsxs)("div",{className:"skill_item ",children:[Object(i.jsx)("h3",{children:"Back-end"}),Object(i.jsx)("ul",{children:Object(i.jsxs)("li",{children:[Object(i.jsx)("img",{className:"about_skill",src:"/images/nodejs.png",alt:"nodejs"}),Object(i.jsx)("p",{children:"node\ub97c \uc774\uc6a9\ud55c SSR\ud658\uacbd \uac1c\ubc1c \uacbd\ud5d8"})]})}),Object(i.jsx)("h3",{children:"Devops"}),Object(i.jsx)("ul",{children:Object(i.jsxs)("li",{children:[Object(i.jsx)("img",{className:"about_skill",src:"/images/github.png",alt:"github"}),Object(i.jsx)("p",{children:"git\uc744 \uc774\uc6a9\ud55c \ud615\uc0c1 \uad00\ub9ac"})]})})]})]})]})]})]})}}]),t}(c.Component)),K=(t(39),function(n){var e=n.isOpen,t=n.close,c=n.name,a=n.number,s=n.desc,r=n.feature,o=n.stack,l=n.git;return Object(i.jsx)(i.Fragment,{children:e?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"Modal-overlay",onClick:t}),Object(i.jsxs)("div",{className:"Modal",children:[Object(i.jsx)("h2",{className:"title",children:c}),Object(i.jsxs)("div",{className:"content",children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"content-subtitle",children:"\uc8fc\uc81c"}),": ",s]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"content-subtitle",children:"\uc778\uc6d0"}),": ",a]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"content-subtitle",children:"\ud2b9\uc9d5"}),": ",r]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"content-subtitle",children:"\uc2a4\ud0dd"}),": ",o]}),Object(i.jsx)("p",{children:Object(i.jsxs)("a",{href:l,className:"content-subtitle gitlink",children:["\u25b6\ufe0e\u25b6\ufe0e Go to Github ",Object(i.jsx)("i",{class:"fab fa-github "})]})})]}),Object(i.jsx)("div",{className:"button-wrap",children:Object(i.jsx)("button",{onClick:t,children:"\ub2eb\uae30"})})]})]}):null})});function Q(){var n=Object(u.a)(["\n  font-size: 1.5rem;\n  font-weight: 300;\n"]);return Q=function(){return n},n}function U(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]);return U=function(){return n},n}function X(){var n=Object(u.a)(["\n  padding-top: 200px;\n"]);return X=function(){return n},n}function Y(){var n=Object(u.a)(["\n  width: 100%;\n  height: auto;\n  padding-top: 50px;\n  /* header & footer height */\n  margin: -50px 0 -40px 0;\n  text-align: center;\n"]);return Y=function(){return n},n}var Z=function(n){Object(d.a)(t,n);var e=Object(b.a)(t);function t(n){var i;return Object(l.a)(this,t),(i=e.call(this,n)).openModal=function(n,e){i.setState({isModalOpen:!0,selectedId:e})},i.closeModal=function(){i.setState({isModalOpen:!1})},i.state={isModalOpen:!1,project:[{id:0,name:"90Parking Lot",desc:"\ud68c\uc6d0\uacfc \ube44\ud68c\uc6d0\uc774 \uc774\uc6a9 \uac00\ub2a5\ud55c \ubb34\uc778\uc8fc\ucc28 \uc815\uc0b0 \uc2dc\uc2a4\ud15c",feature:"\uc6f9 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc804\ubc18\uc801\uc778 \ud750\ub984\uc744 \uc774\ud574\ud558\uace0\uc790 SSR \ubc29\uc2dd\uc73c\ub85c \uad6c\ud604(\ud480\uc2a4\ud0dd)",number:"1\uba85",stack:"Javscript,HTML,CSS,Node.js,Mysql",git:"https://github.com/p-jaeeun/miniproject",src:"/images/project1.png"},{id:1,name:"HIDDENC",desc:"\uc0ac\ub78c\ub4e4\uc5d0\uac8c \uc54c\ub824\uc9c0\uc9c0 \uc54a\uc740 \uce74\ud398 \uc815\ubcf4\ub97c \uacf5\uc720\ud560 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4",feature:"VanillaJS MVC\ud328\ud134 \uad6c\ud604, \ud074\ub77c\uc774\uc5b8\ud2b8 \uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1 \ubc29\uc2dd\uc73c\ub85c SPA \uad6c\ud604 ",number:"4\uba85",stack:"Javscript,HTML,CSS,Bootstrap,JAVA Spring,Maven,Mysql",git:"https://github.com/p-jaeeun/coffee-front",src:"/images/project2.png"},{id:2,name:"BlackGreen",desc:"\uce5c\ud658\uacbd \ud328\uc158 \ube0c\ub79c\ub4dc\ub97c \uc18c\ube44\uc790\ub4e4\uc5d0\uac8c \uc18c\uac1c\ud558\ub294 \uc11c\ube44\uc2a4",feature:"WTM \ud574\ucee4\ud1a4\uc5d0 \ucc38\uc5ec\ud558\uc5ec 2\uc8fc\ub3d9\uc548 \ub9ac\uc561\ud2b8\ub97c \uacf5\ubd80\ud558\uc5ec SPA \uad6c\ud604",number:"3\uba85",stack:"React.js,Node.js,HTML,CSS,Spring boot",git:"https://github.com/p-jaeeun/WTM_hackathon",src:"/images/project3.png"}],selectedId:0},i}return Object(j.a)(t,[{key:"render",value:function(){var n=this;return Object(i.jsx)($,{children:Object(i.jsxs)(nn,{children:[Object(i.jsx)(tn,{children:"Projects"}),Object(i.jsxs)(en,{children:[this.state.project.map((function(e){return Object(i.jsx)(a.a.Fragment,{children:Object(i.jsx)("div",{onClick:function(t){return n.openModal(t,e.id)},children:Object(i.jsx)("img",{className:"project__img",src:e.src,alt:e.name})})},e.id)})),this.state.project.filter((function(e){return e.id===n.state.selectedId})).map((function(e){return Object(i.jsx)(K,{name:e.name,desc:e.desc,feature:e.feature,git:e.git,stack:e.stack,number:e.number,isOpen:n.state.isModalOpen,close:n.closeModal},e.id)}))]})]})})}}]),t}(c.Component),$=p.a.div(Y()),nn=p.a.div(X()),en=p.a.div(U()),tn=p.a.h3(Q()),cn=function(){return Object(i.jsx)("div",{children:"Not found page."})},an=function(){return Object(i.jsxs)(D.c,{children:[Object(i.jsx)(D.a,{path:"/",exact:!0,component:L}),Object(i.jsx)(D.a,{path:"/about",component:q}),Object(i.jsx)(D.a,{path:"/projects",component:Z}),Object(i.jsx)(D.a,{component:cn})]})},sn=(t(40),function(n){Object(d.a)(t,n);var e=Object(b.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(v,{}),Object(i.jsx)(an,{}),Object(i.jsx)(A,{})]})}}]),t}(c.Component));r.a.render(Object(i.jsx)(o.a,{children:Object(i.jsx)(sn,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b06cdd11.chunk.js.map