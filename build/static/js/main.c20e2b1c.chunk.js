(this.webpackJsonpreact_js_20=this.webpackJsonpreact_js_20||[]).push([[0],{1:function(e,t,n){e.exports={addContact:"ContactFrom_addContact__3F-1u",input:"ContactFrom_input__2Cus0",widthInput:"ContactFrom_widthInput__2wnLW",widthBtn:"ContactFrom_widthBtn__2amx0"}},10:function(e,t,n){e.exports={item:"ContactItem_item__1SbUO",btnDelete:"ContactItem_btnDelete__c7aix"}},11:function(e,t,n){e.exports={allTitle:"PhoneContact_allTitle__3rzoY"}},14:function(e,t,n){e.exports={list:"ContactList_list__3CpfE"}},15:function(e,t,n){e.exports={findContact:"Filter_findContact__2wgGR"}},17:function(e,t,n){e.exports=n(30)},30:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(13),c=n.n(r),i=n(16),o=n(4),m=n(5),u=n(6),s=n(8),d=n(7),h=n(9),f=n(2),b=n.n(f),C=n(1),p=n.n(C),_={name:b.a.generate(),number:b.a.generate(),filter:b.a.generate()},g=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",number:""},n.handleChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(o.a)({},a,l))},n.reset=function(e){e.preventDefault(),n.props.handleSubmit(e),n.setState({name:"",number:""})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return l.a.createElement("form",{className:p.a.addContact,onSubmit:this.reset},l.a.createElement("label",{className:p.a.input,htmlFor:_.nameId},"Name",l.a.createElement("input",{type:"text",value:t,onChange:this.handleChange,id:_.nameId,name:"name",className:p.a.widthInput})),l.a.createElement("label",{className:p.a.input,htmlFor:_.numberId},"Number",l.a.createElement("input",{type:"number",value:n,onChange:this.handleChange,id:_.numberId,name:"number",className:p.a.widthInput})),l.a.createElement("button",{type:"submit",className:p.a.widthBtn},"Add contact"))}}]),t}(a.Component),E=n(10),v=n.n(E),j=function(e){var t=e.item,n=e.onClickDelete;return l.a.createElement("li",{className:v.a.item},l.a.createElement("h3",null,t.name,":"),l.a.createElement("h3",null,t.number," "),l.a.createElement("button",{type:"button",id:t.id,onClick:n,className:v.a.btnDelete},"Delete"))},w=n(14),y=n.n(w),N=function(e){var t=e.filterContacts,n=e.onClickDelete;return l.a.createElement("ul",{className:y.a.list},t().map((function(e){return l.a.createElement(j,{item:e,onClickDelete:n,key:e.id})})))},O=n(15),I=n.n(O),F=function(e){var t=e.length,n=e.filterId,a=e.filter,r=e.handleChange;return l.a.createElement(l.a.Fragment,null,t>1&&l.a.createElement("label",{className:I.a.findContact,htmlFor:n},"Find contacts by name",l.a.createElement("input",{type:"text",id:_.filterId,value:a,onChange:r,name:"filter"})))},S=n(11),k=n.n(S),x=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.handleChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(o.a)({},a,l))},n.handleSubmit=function(e){var t=e.target.elements,a=t.name,l=t.number,r=n.state.contacts,c={id:b.a.generate(),name:a.defaultValue,number:l.defaultValue};r.find((function(e){return e.name===a.defaultValue}))?alert("".concat(a.defaultValue," is allready in contacts. ")):n.setState({contacts:[].concat(Object(i.a)(r),[c])})},n.deleteContact=function(e){var t=e.target.id,a=n.state.contacts.filter((function(e){return e.id!==t}));n.setState({contacts:a})},n.filterContacts=function(){var e=n.state,t=e.contacts,a=e.filter;return t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter;return l.a.createElement("div",null,l.a.createElement("h3",{className:k.a.allTitle},"Phonebook"),l.a.createElement(g,{handleSubmit:this.handleSubmit}),l.a.createElement("h3",{className:k.a.allTitle},"Contacts"),l.a.createElement(F,{length:t.length,filter:n,handleChange:this.handleChange}),l.a.createElement(N,{filterContacts:this.filterContacts,onClickDelete:this.deleteContact}))}}]),t}(a.Component),D=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null))};c.a.render(l.a.createElement(D,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c20e2b1c.chunk.js.map