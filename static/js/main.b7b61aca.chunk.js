(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){e.exports={enter:"telBook_enter__2aMB2",enterActive:"telBook_enterActive__2soRx",exit:"telBook_exit__7XtEH",exitActive:"telBook_exitActive__1acjQ",appear:"telBook_appear__2bcTj",appearActive:"telBook_appearActive__2uxrB",alert:"telBook_alert__atcHD",body:"telBook_body__2Bf4p",title:"telBook_title__2foJQ",form:"telBook_form__1WKi8"}},27:function(e,t,a){e.exports={enter:"contactList_enter__14Hyo",enterActive:"contactList_enterActive__1BOwi",exit:"contactList_exit__1EhED",exitActive:"contactList_exitActive__3RHTM",listItems:"contactList_listItems__2zwSD",text:"contactList_text__1j1KZ"}},48:function(e,t,a){e.exports=a(56)},56:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),i=a(40),l=a(23),s=a(88),m=a(84),u=Object(m.a)((function(e){return{root:{"& > *":{width:"400px",display:"flex"}}}}));function f(e){var t=u();return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{className:t.root,style:{width:200,margin:10},id:"outlined-basic",label:e.name,variant:"outlined",name:e.name,onChange:e.onChange,value:e.value}))}var _=a(89),p=a(92),v=a(91),E=a(27),d=a.n(E);function b(e){var t=e.contactsList,a=e.onClick;return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{component:"ul"},t.map((function(e){return c.a.createElement(v.a,{classNames:d.a,key:e.id,timeout:250},c.a.createElement("li",{key:e.id,className:d.a.listItems},c.a.createElement("p",{className:d.a.text},e.name),c.a.createElement("p",{className:d.a.text},e.number),c.a.createElement(_.a,{variant:"contained",color:"secondary",onClick:function(){return a(e.id)}},"DELETE")))}))))}var g=Object(m.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"400px",display:"flex"}}}}));function x(e){var t=g();return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{className:t.root,id:"outlined-basic",label:"filter",variant:"outlined",name:"filter",onChange:e.onChange}))}var O=a(90),j=a(16),h=a.n(j),y=Object(m.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"400px",display:"flex"}}}}));function k(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),s=Object(l.a)(o,2),m=s[0],u=s[1],p=Object(n.useState)(""),E=Object(l.a)(p,2),d=E[0],g=E[1],j=Object(n.useState)(""),k=Object(l.a)(j,2),N=k[0],B=k[1],C=Object(n.useState)(!1),A=Object(l.a)(C,2),L=A[0],S=A[1],w=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e}),[e]),t.current}(a),I=y();function D(e){var t=e.target,a=t.name,n=t.value;"name"===a?g(n):"number"===a&&B(n)}return Object(n.useEffect)((function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&r(t)}),[]),Object(n.useEffect)((function(){a!==w&&localStorage.setItem("contacts",JSON.stringify(a))})),c.a.createElement("div",{className:h.a.body},c.a.createElement(v.a,{timeout:500,classNames:h.a,appear:!0,unmountOnExit:!0,in:!0},c.a.createElement("div",null,c.a.createElement("h2",{className:h.a.title},"Phonebook"))),c.a.createElement(v.a,{timeout:5e3,classNames:h.a,in:L},c.a.createElement("div",{className:h.a.alert},c.a.createElement(_.a,{variant:"filled",severity:"error"},"This contact already in phonebook"))),c.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),a.find((function(e){return e.name===d}))?(S(!0),setTimeout((function(){S(!1)}),3e3),g(""),B("")):(r([].concat(Object(i.a)(a),[{id:Object(O.a)(),name:d,number:N}])),g(""),B(""))},className:I.root},c.a.createElement(f,{name:"name",onChange:D,value:d}),c.a.createElement(f,{name:"number",onChange:D,value:N}),c.a.createElement(_.a,{variant:"contained",color:"primary",type:"input"},"Add contact")),c.a.createElement("h2",{className:h.a.title},"Contacts"),c.a.createElement("h3",{className:h.a.title},"Find contacts by name"),c.a.createElement(x,{onChange:function(e){var t=e.target.value;u(t)}}),c.a.createElement(b,{contactsList:a.filter((function(e){var t=e.name.toLowerCase(),a=m.toLowerCase();if(t.includes(a))return console.log(e),e})),onClick:function(e){console.log(e);var t=a.filter((function(t){return t.id!==e}));r(t),console.log()}}))}var N=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(k,null))};o.a.render(c.a.createElement(N,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.b7b61aca.chunk.js.map