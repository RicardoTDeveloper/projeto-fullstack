(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t){},104:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(50),l=a.n(c),o=(a(62),a(17)),u=a(9),s=a(6),i=a.n(s),m=a(13),p=a(7),b=a(51),h=a.n(b).a.create({baseURL:"http://localhost:3333"});function f(e){var t=e.history,a=Object(n.useState)(""),c=Object(p.a)(a,2),l=c[0],o=c[1];function u(){return(u=Object(m.a)(i.a.mark((function e(a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,h.post("/sessions",{email:l});case 3:n=e.sent,r=n.data._id,localStorage.setItem("user",r),t.push("/dashboard");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Ofere\xe7a spots para programadores e encontre talentos para sua empresa"),r.a.createElement("form",{onSubmit:function(e){return u.apply(this,arguments)}},r.a.createElement("label",{htmlFor:""},"E-mail"),r.a.createElement("input",{type:"text",value:l,onChange:function(e){return o(e.target.value)},id:"email",placeholder:"Seu melhor e-mail"}),r.a.createElement("button",{className:"btn",type:"submit"},"Entrar")))}var d=a(52),E=a.n(d);a(104);function g(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("user");E()("http://localhost:3333",{query:{user_id:e}}).on("booking_request",(function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("user"),e.next=3,h.get("/dashboard",{headers:{user_id:t}});case 3:a=e.sent,c(a.data),console.log(a.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"spot-list"},a.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("header",{style:{backgroundImage:"url(".concat(e.thumbnail_url,")")}}),r.a.createElement("strong",null,e.company),r.a.createElement("span",null,e.price?"R$".concat(e.price,"/dia"):"GRATUITO"))}))),r.a.createElement(o.b,{to:"/new"},r.a.createElement("button",{className:"btn"},"Cadastrar novo spot")))}var v=a(55),O=a.n(v);a(109);function y(e){var t=e.history,a=Object(n.useState)(null),c=Object(p.a)(a,2),l=c[0],o=c[1],u=Object(n.useState)(""),s=Object(p.a)(u,2),b=s[0],f=s[1],d=Object(n.useState)(""),E=Object(p.a)(d,2),g=E[0],v=E[1],y=Object(n.useState)(""),j=Object(p.a)(y,2),S=j[0],x=j[1],I=Object(n.useMemo)((function(){return l?URL.createObjectURL(l):null}),[l]);function w(){return(w=Object(m.a)(i.a.mark((function e(a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=new FormData,r=localStorage.getItem("user"),n.append("thumbnail",l),n.append("company",b),n.append("techs",g),n.append("price",S),e.next=9,h.post("/spots",n,{headers:{user_id:r}});case 9:t.push("/dashboard");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("form",{onSubmit:function(e){return w.apply(this,arguments)}},r.a.createElement("label",{id:"thumbnail",style:{backgroundImage:"url(".concat(I,")")},className:l?"has-thumbnail":""},r.a.createElement("input",{type:"file",onChange:function(e){return o(e.target.files[0])}}),r.a.createElement("img",{src:O.a,alt:"Select img"})),r.a.createElement("label",{htmlFor:"company"},"EMPRESA *"),r.a.createElement("input",{type:"text",placeholder:"Sua empresa incr\xedvel",value:b,onChange:function(e){return f(e.target.value)}}),r.a.createElement("label",{htmlFor:"techs"},"TECNOLOGIAS * ",r.a.createElement("span",null,"(separadas por v\xedrgulas)")),r.a.createElement("input",{type:"text",placeholder:"Quais tecnologias usam?",value:g,onChange:function(e){return v(e.target.value)}}),r.a.createElement("label",{htmlFor:"price"},"VALOR DA DIARIA * ",r.a.createElement("span",null,"(em branco para GRATUITO)")),r.a.createElement("input",{type:"text",placeholder:"Valor cobrado por dia",value:S,onChange:function(e){return x(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn"},"Cadastrar"))}function j(){return r.a.createElement(o.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:f}),r.a.createElement(u.a,{path:"/dashboard",component:g}),r.a.createElement(u.a,{path:"/new",component:y})))}var S=a(56),x=a.n(S);var I=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:x.a,alt:"AirCnC"}),r.a.createElement("div",{className:"content"},r.a.createElement(j,null)))};l.a.render(r.a.createElement(I,null),document.getElementById("root"))},55:function(e,t,a){e.exports=a.p+"static/media/camera.6a6f4b6e.svg"},56:function(e,t,a){e.exports=a.p+"static/media/logo.74052802.svg"},57:function(e,t,a){e.exports=a(110)},62:function(e,t,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.3465cbde.chunk.js.map