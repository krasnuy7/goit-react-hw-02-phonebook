(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),l=n(5),u=n(9),m=n(6),o=n(7),s=n(11),d=n(10),h=n(8),f=function(e){var t=e.info;if(t.contacts.length>2){var n=t.contacts.filter((function(e){return e.name.toUpperCase().includes(t.filter.toUpperCase())})).map((function(t){return r.a.createElement("li",{key:t.id},t.name," ",t.number,r.a.createElement("button",{onClick:e.deleteUsers,id:t.id},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))}));return r.a.createElement(r.a.Fragment,null,n)}return t.contacts.map((function(t){return r.a.createElement("li",{key:t.id},t.name," ",t.number,r.a.createElement("button",{onClick:e.deleteUsers,id:t.id},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))}))},b=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("input",{onChange:e.handleChange,value:e.mainState.name,type:"text",name:"name"}),r.a.createElement("input",{onChange:e.handleChange,value:e.mainState.number,type:"text",name:"number"}),r.a.createElement("button",{type:"submit"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))},p=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{name:"filter",placeholder:"seach",input:"text",onChange:e.handleChange}))},g=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number,i=n.filter;if(e.state.contacts.find((function(e){return e.name===a})))alert("\u0422\u0430\u043a\u043e\u0435 \u0438\u043c\u044f \u0443\u0436\u0435 \u0435\u0441\u0442\u044c");else{var c={id:Object(h.v4)(),name:a,number:r,filter:i};e.setState((function(e){return{contacts:[].concat(Object(u.a)(e.contacts),[c])}}))}e.resetForm()},e.resetForm=function(){e.setState((function(e){return{name:"",number:""}}))},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState((function(e){return Object(l.a)({},a,r)}))},e.deleteUsers=function(t){var n=t.target.id,a=e.state.contacts.filter((function(e){return e.id!==n}));e.setState((function(e){return{contacts:a}}))},e}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,mainState:this.state}),r.a.createElement("ul",null,r.a.createElement("h3",null,"Contacts"),r.a.createElement(p,{mainState:this.state,handleChange:this.handleChange}),r.a.createElement(f,{deleteUsers:this.deleteUsers,info:this.state})))}}]),n}(a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.1dc47607.chunk.js.map