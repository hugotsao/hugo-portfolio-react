(this["webpackJsonphugo-portfolio-react"]=this["webpackJsonphugo-portfolio-react"]||[]).push([[0],{204:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(80),s=n.n(o),r=(n(90),n(17)),i=(n(91),n(22)),l=n(1),u=function(){var e;!function(e){e[e.home=0]="home",e[e.work=1]="work",e[e.education=2]="education"}(e||(e={}));var t=Object(c.useState)(e.home),n=Object(r.a)(t,2),a=n[0],o=n[1];return Object(l.jsx)("header",{className:"mb-auto",children:Object(l.jsxs)("nav",{className:"nav nav-pills nav-fill float-md-start",children:[Object(l.jsx)(i.b,{className:"nav-items nav-masthead nav-link "+(a===e.home?"active":""),to:"/home",onClick:function(){o(e.home)},children:"Home"}),Object(l.jsx)(i.b,{className:"nav-items nav-masthead nav-link "+(a===e.work?"active":""),to:"/work",onClick:function(){o(e.work)},children:"Working Experience"}),Object(l.jsx)(i.b,{className:"nav-items nav-masthead nav-link "+(a===e.education?"active":""),to:"/educations",onClick:function(){o(e.education)},children:"Educational Background"})]})})},j=n(3),d=function(){return Object(l.jsxs)("main",{className:"px-3",children:[Object(l.jsx)("h1",{children:"Hugo Cao"}),Object(l.jsx)("p",{className:"lead",children:"A simple programmer passionate about technologies."}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col markdown-align-left",children:[Object(l.jsx)("strong",{children:"AWS"}),Object(l.jsx)("br",{}),"IAM, APIGateway, CloudFormation, Lambda"]}),Object(l.jsxs)("div",{className:"col markdown-align-left",children:[Object(l.jsx)("strong",{children:"Web Services"}),Object(l.jsx)("br",{}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Backend: Java, FastAPI"}),Object(l.jsx)("li",{children:"Frontend: React"})]})]}),Object(l.jsxs)("div",{className:"col markdown-align-left",children:[Object(l.jsx)("strong",{children:"Other Tools"}),Object(l.jsx)("br",{}),"Git, Maven, CI/CD tools, Linux, Emacs, Vim"]})]})})]})},h=n(13),m=n.n(h),b=n(21),x=n(35),f=n.n(x),p=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(b.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/hugo-portfolio-react","/work-experience.md"));case 2:return t=e.sent,e.next=5,t.text();case 5:n=e.sent,a(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsx)("div",{className:"markdown-align-left",children:Object(l.jsx)(f.a,{children:n})})},v=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(b.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/hugo-portfolio-react","/educations.md"));case 2:return t=e.sent,e.next=5,t.text();case 5:n=e.sent,a(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsx)("main",{children:Object(l.jsx)(f.a,{className:"markdown-align-left",children:n})})},O=n(23),w=n(36),k=n(48),g=n(82),N=n(83),C=function(){var e=Object(b.a)(m.a.mark((function e(){var t,n,c,a,o,s,r,i,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new N.a,e.next=3,fetch("".concat("/hugo-portfolio-react","/work-experience.md"));case 3:return n=e.sent,e.next=6,n.text();case 6:return c=e.sent,a=t.render(c).replaceAll("<hr>",""),e.next=10,fetch("".concat("/hugo-portfolio-react","/educations.md"));case 10:return o=e.sent,e.next=13,o.text();case 13:s=e.sent,r=t.render(s).replaceAll("<hr>",""),i=new g.a("p","pt","letter"),l="<div class='pdf'><h4>Work Experiences</h4>".concat(a,"<hr><h4>Educations</h4>").concat(r,"</div>"),i.html(l,{callback:function(){i.save("HugoResume.pdf")},x:10,y:10});case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var y=function(){var e="text-light bg-dark",t=Object(c.useState)(e),n=Object(r.a)(t,2),a=n[0],o=n[1];return Object(l.jsxs)(i.a,{children:[Object(l.jsx)("div",{className:"container mw-100 header-box p-1",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-10",children:Object(l.jsx)(u,{})}),Object(l.jsxs)("div",{className:"col-2 font-awesome",children:[Object(l.jsx)(O.a,{icon:w.c,className:"nav-items",onClick:function(){o(a===e?"shadow-none text-dark bg-light":e)},title:"light swtich"}),Object(l.jsx)(O.a,{icon:w.b,className:"nav-items",onClick:function(){return C()},title:"Download PDF version"}),Object(l.jsx)(O.a,{icon:k.b,className:"nav-items",onClick:function(){window.open("https://github.com/hugotsao","_blank")},title:"Go to my LinkedIn page"}),Object(l.jsx)(O.a,{icon:k.a,className:"nav-items",onClick:function(){window.open("https://www.linkedin.com/in/huicao/","_blank")},title:"Go to my github page"}),Object(l.jsx)(O.a,{icon:w.a,className:"nav-items",title:"Send me an email",onClick:function(){return function(){var e="mailto:hugo.ca@yahoo.com&subject="+encodeURIComponent("I have some work for Hugo");window.location.href=e}(),!1}})]})]})}),Object(l.jsx)("div",{className:"App d-flex h-100 text-center ".concat(a),children:Object(l.jsxs)("div",{className:"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column",children:[Object(l.jsx)(j.b,{exact:!0,path:"/",children:Object(l.jsx)(j.a,{to:"/home"})}),Object(l.jsx)(j.b,{path:"/home",component:d}),Object(l.jsx)(j.b,{path:"/work",component:p}),Object(l.jsx)(j.b,{path:"/educations",component:v})]})})]})},I=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,579)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),I()},90:function(e,t,n){},91:function(e,t,n){}},[[204,1,3]]]);
//# sourceMappingURL=main.c312a54b.chunk.js.map