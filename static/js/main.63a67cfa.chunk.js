(this.webpackJsonpparcialreact=this.webpackJsonpparcialreact||[]).push([[0],{19:function(e,t,c){},21:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),r=c.n(i),s=c(6),a=c.n(s),o=(c(19),c(12)),l=c(4),d=c.n(l),j=c(7),h=c(8),b=c(9),u=c(13),p=c(11),x=(c(21),function(){return Object(n.jsxs)("header",{className:"header",children:[Object(n.jsxs)("div",{className:"header-izq",children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/parcialreactimg.appspot.com/o/logo.svg?alt=media&token=95d33ebb-c51d-48a6-9610-d20ea335e42c",alt:"logo"})}),Object(n.jsx)("div",{className:"nav",children:Object(n.jsx)("nav",{id:"nav-menu",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"Features"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"Princing"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"Resources"})})]})})})]}),Object(n.jsxs)("div",{className:"header-der",children:[Object(n.jsx)("a",{className:"login-button",href:"#",children:"Login"}),Object(n.jsx)("a",{className:"signup-button",href:"#",children:"Sign Up"})]})]})}),O=(c(5),c(3),function(e){return Object(n.jsx)("div",{className:"contenedorshorten",children:Object(n.jsxs)("form",{onSubmit:e.getShorten,children:[Object(n.jsx)("input",{type:"text",name:"link",placeholder:"Shorten a link here...",className:"inputlink"}),Object(n.jsx)("button",{className:"btn-shorten",children:"Shorten It!"})]})})}),g=c(10),m=function(e){return console.log(e),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"infoShorten",children:[Object(n.jsx)("div",{className:"izq",children:Object(n.jsx)("p",{children:e.originallink})}),Object(n.jsxs)("div",{className:"der",children:[Object(n.jsx)("div",{className:"linkcorto",children:Object(n.jsx)("textarea",{type:"text",value:e.shortlink})}),Object(n.jsx)("div",{className:"btncopy",children:Object(n.jsx)(g.CopyToClipboard,{text:e.shortlink,children:Object(n.jsx)("button",{children:"Copy"})})})]})]})})},f=(c(25),function(e){var t=e.icon,c=e.titulo,i=e.parrafo;return Object(n.jsxs)("div",{className:"wrapper-card",children:[Object(n.jsx)("div",{className:"Icon",children:Object(n.jsx)("img",{src:t,alt:"icon"})}),Object(n.jsxs)("div",{className:"Info",children:[Object(n.jsx)("h6",{id:"Titulo",children:c}),Object(n.jsx)("p",{id:"Parrafo",children:i})]})]})}),v=(c(26),function(e){Object(u.a)(c,e);var t=Object(p.a)(c);function c(){var e;Object(h.a)(this,c);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={originallink:"",shortlink:"",error:null},e.getShorten=function(){var t=Object(j.a)(d.a.mark((function t(c){var n,i,r,s,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),n=c.target.elements.link,i=n.value,r="https://api.shrtco.de/v2/shorten?url=".concat(i),t.next=6,fetch(r);case 6:return s=t.sent,t.next=9,s.json();case 9:a=t.sent,console.log(a),e.setState({originallink:a.result.original_link,shortlink:a.result.short_link,error:null});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(b.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"Container",children:[Object(n.jsx)(x,{}),Object(n.jsxs)("div",{className:"information",children:[Object(n.jsx)("h1",{children:"More than just shorter links"}),Object(n.jsx)("p",{children:"Build your grand's recognition and get detailed insights on how your link are performing."})]}),Object(n.jsxs)("div",{className:"Shortlink",children:[Object(n.jsx)(O,{getShorten:this.getShorten}),Object(n.jsx)(m,Object(o.a)({},this.state))]}),Object(n.jsxs)("div",{className:"texto",children:[Object(n.jsx)("h3",{children:"Advanced Statistics"}),Object(n.jsx)("p",{children:"Track how your links are performing across the web with our advanced Statistics dashboard"})]}),Object(n.jsxs)("div",{className:"Characteristics",children:[Object(n.jsx)("div",{id:"card-1",children:Object(n.jsx)(f,{icon:"https://firebasestorage.googleapis.com/v0/b/parcialreactimg.appspot.com/o/icon-brand-recognition.svg?alt=media&token=67ecd8b8-1f41-4507-867d-a0f919a4d3af",titulo:"Brand Recognition",parrafo:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."})}),Object(n.jsx)("div",{className:"rect-1",children:Object(n.jsx)("svg",{children:Object(n.jsx)("rect",{})})}),Object(n.jsx)("div",{id:"card-2",children:Object(n.jsx)(f,{icon:"https://firebasestorage.googleapis.com/v0/b/parcialreactimg.appspot.com/o/icon-detailed-records.svg?alt=media&token=6094711f-0613-434c-ae10-11fc5b31f3c4",titulo:"Detailed Records",parrafo:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions"})}),Object(n.jsx)("div",{className:"rect-2",children:Object(n.jsx)("svg",{children:Object(n.jsx)("rect",{})})}),Object(n.jsx)("div",{id:"card-3",children:Object(n.jsx)(f,{icon:"https://firebasestorage.googleapis.com/v0/b/parcialreactimg.appspot.com/o/icon-fully-customizable.svg?alt=media&token=1402ec9a-66b7-4cd4-8f0f-09f86b5a448e",titulo:"Fully Customizable",parrafo:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."})})]})]})}}]),c}(i.Component));a.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root"))},3:function(e,t,c){},5:function(e,t,c){}},[[27,1,2]]]);
//# sourceMappingURL=main.63a67cfa.chunk.js.map