(this.webpackJsonptaskboard=this.webpackJsonptaskboard||[]).push([[0],{18:function(e,t,a){e.exports=a(33)},23:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),s=(a(23),a(2)),c=n.createContext({}),o=function(e){var t=e.children,a=n.useState(""),r=Object(s.a)(a,2),l={theme:r[0],setTheme:r[1]};return n.createElement(c.Provider,{value:l},t)},i=a(4),m=a(3),u=a(5),d=a.n(u);a(28),a(30);d.a.initializeApp({apiKey:"AIzaSyCf4r4_JiAWZjMYxHx2oPdOOPBunUeG9zg",authDomain:"taskboard-drethedev.firebaseapp.com",databaseURL:"https://taskboard-drethedev.firebaseio.com",projectId:"taskboard-drethedev",storageBucket:"taskboard-drethedev.appspot.com",messagingSenderId:"868447749524",appId:"1:868447749524:web:bc280f2ee21da6c3fe7b81"});var b=d.a,k=a(11),f=a.n(k),h=n.createContext({}),E=function(e){var t=e.children,a=n.useState({dbRef:"public/",loggedIn:!1}),r=Object(s.a)(a,2),l=r[0],c=r[1],o=n.useState(!0),i=Object(s.a)(o,2),m=i[0],u=i[1];n.useEffect((function(){b.auth().onAuthStateChanged((function(e){e&&c({dbRef:e.uid+"/",loggedIn:!0}),u(!1)}))}),[]);var d={user:l,checkForUser:m,setUser:c,signInUser:function(){var e=new b.auth.GoogleAuthProvider;b.auth().signInWithPopup(e).then((function(e){var t=e.user;t&&c({dbRef:t.uid+"/",loggedIn:!0}),u(!0)})).catch((function(e){f.a.fire({title:"Oops!",text:"There was an error signing in: "+e,icon:"error",confirmButtonText:"OK"})}))},logoutUser:function(){b.auth().signOut().then((function(){c({dbRef:"public/",loggedIn:!1}),u(!0)})).catch((function(e){f.a.fire({title:"Oops!",text:"There was an error while logging out: "+e,icon:"error",confirmButtonText:"OK"})}))}};return n.createElement(h.Provider,{value:d},t)},p=n.createContext({}),g=function(e){var t=e.children,a=n.useState(!1),r=Object(s.a)(a,2),l=r[0],c=r[1],o=n.useState([]),i=Object(s.a)(o,2),m=i[0],u=i[1],b=n.useContext(h),k=b.user,f=b.checkForUser,E=n.useState("all"),g=Object(s.a)(E,2),_=g[0],v=g[1],N=n.useState(""),C=Object(s.a)(N,2),O=C[0],B=C[1],y=n.useState([]),I=Object(s.a)(y,2),F=I[0],T=I[1],x=n.useCallback((function(){k&&k.dbRef&&function(e,t){d.a.database().ref(e).on("value",(function(e){var a=e.val(),n=[];for(var r in a){var l={key:r,task:a[r].task,status:a[r].status};n.push(l)}t(n)}))}(k.dbRef,u)}),[k]);n.useEffect((function(){f||(x(),c(!0))}),[f,x]);n.useEffect((function(){if(O){var e=new RegExp(O,"i"),t=m.filter((function(t){var a=t.task;return e.test(a)}));T(t)}}),[O,m]);var S=O.length?F:m,j={taskStatus:"all"===_?["open","inProgress","complete"]:[_],taskItems:S,numOfTasks:S.length,loadComplete:l,searchTerms:O,setSearchItems:T,setSearchTerms:B,setListFilter:v};return n.createElement(p.Provider,{value:j},t)},_=function(){var e=Object(n.useContext)(c),t=e.theme,a=e.setTheme,l=Object(n.useContext)(h),s=l.user,o=l.signInUser,i=l.logoutUser,m=Object(n.useContext)(p),u=m.taskItems,b=m.loadComplete,k=u?u.length:0;return r.a.createElement("div",{className:"settings"},r.a.createElement("button",{onClick:function(){var e;s&&(e=s.dbRef,d.a.database().ref(e).remove())},className:"btn btn--black btn__taskBoard btn__taskBoard--clear",disabled:0===k},"Clear Task Board"),b?s&&s.loggedIn?r.a.createElement("button",{onClick:i,className:"btn btn--green btn__taskBoard btn__taskBoard--auth"},"Log Out"):r.a.createElement("button",{onClick:o,className:"btn btn--red btn__taskBoard btn__taskBoard--auth"},"Sign In With Google"):null,r.a.createElement("input",{className:"themeToggle__checkbox sr-only",type:"checkbox",name:"themeToggle",id:"themeToggle",onChange:function(){a&&a("dark"===t?"":"dark")},defaultChecked:"dark"===t}),r.a.createElement("label",{className:"themeToggle__label",htmlFor:"themeToggle"},"dark"===t?"Light":"Dark"," Mode ",r.a.createElement("span",{className:"themeToggle__toggler"})))},v=function(){var e=n.useState(!1),t=Object(s.a)(e,2),a=t[0],r=t[1];return n.createElement("header",null,n.createElement("div",{className:"wrapper displayContainer"},n.createElement("div",{className:"header__text"},n.createElement("h1",null,"Task Board"),n.createElement("p",null,"Add and track tasks to increase productivity!")),n.createElement("div",{className:"header__buttons"},n.createElement("h2",{onClick:function(){return r((function(e){return!e}))}},n.createElement("span",null,"Settings "),n.createElement("span",{className:"header__menuToggleIcon"},n.createElement(i.a,{icon:a?m.f:m.b}))),a&&n.createElement(_,null))))},N=function(){var e=n.useContext(p),t=e.setListFilter,a=e.searchTerms,r=e.setSearchTerms,l=e.setSearchItems,s=e.numOfTasks,c=function(e){t&&t(e)};return n.createElement("section",{className:"taskBoard__menu"},n.createElement("fieldset",{className:"taskBoard__listFilter"},n.createElement("div",{className:"inputContainer__filter"},n.createElement("legend",{className:"srOnly"},"Filter the task items by list"),n.createElement("input",{type:"radio",className:"srOnly taskBoard__filterInput",name:"listFilter",id:"filterAll",value:"all",onChange:function(){return c("all")},defaultChecked:!0}),n.createElement("label",{className:"btn btn--black",htmlFor:"filterAll"},"All"),n.createElement("input",{type:"radio",className:"srOnly taskBoard__filterInput",name:"listFilter",id:"filterOpen",value:"open",onChange:function(){return c("open")}}),n.createElement("label",{className:"btn btn--red",htmlFor:"filterOpen"},"Open"),n.createElement("input",{type:"radio",className:"srOnly taskBoard__filterInput",name:"listFilter",id:"filterInProgress",value:"inProgress",onChange:function(){return c("inProgress")}}),n.createElement("label",{className:"btn btn--blue",htmlFor:"filterInProgress"},"In Progress"),n.createElement("input",{type:"radio",className:"srOnly taskBoard__filterInput",name:"listFilter",id:"filterComplete",value:"complete",onChange:function(){return c("complete")}}),n.createElement("label",{className:"btn btn--green",htmlFor:"filterComplete"},"Complete"))),n.createElement("div",{className:"inputContainer__searchBar"},n.createElement("label",{htmlFor:"searchTerms",className:"srOnly"},"Search for task items"),n.createElement("input",{className:"taskBoard__searchBar",type:"text",name:"searchTerms",id:"searchTerms",placeholder:"search",onChange:function(e){r&&s&&r(e.target.value)},value:a}),a?n.createElement(n.Fragment,null,n.createElement("label",{htmlFor:"searchBarBtn",className:"srOnly"},"Button to clear the search terms"),n.createElement("button",{id:"searchBarBtn",className:"taskBoard__searchBarBtn",onClick:function(){l&&r&&(r(""),l([]))}},n.createElement(i.a,{className:"taskBoard__searchBarIcon--clear",icon:m.f,"aria-hidden":"true"}))):n.createElement(i.a,{className:"taskBoard__searchBarIcon",icon:m.e,"aria-hidden":"true"})))},C=a(17),O=a.n(C),B=function(e){var t=e.id,a=e.type,r=e.taskValue,l=e.formToggler,c=Object(n.useContext)(h).user,o=Object(n.useState)(r||""),i=Object(s.a)(o,2),m=i[0],u=i[1];Object(n.useEffect)((function(){var e=document.querySelector("#taskFormInput_".concat(t));e&&e!==document.activeElement&&(O()(e),e.value="",e.focus(),e.value=m)}));return n.createElement(n.Fragment,null,n.createElement("h3",{className:"taskForm__heading"},"edit"===a?"Edit Task":"New Task"),n.createElement("form",{action:"#",onSubmit:"edit"===a?function(e){var a,n,r;e.preventDefault(),c&&(a=c.dbRef,n=t,r=m,d.a.database().ref(a+n).update({task:r}),l(!1))}:function(e){e.preventDefault();var a={task:m,status:t};c&&(!function(e,t){d.a.database().ref(e).push(t)}(c.dbRef,a),l(!1))},onBlur:function(e){var t=e.currentTarget;setTimeout((function(){t.contains(document.activeElement)||l(!1)}),5)},className:"taskForm"},n.createElement("label",{htmlFor:"taskFormInput_".concat(t),className:"srOnly"},"Task Item"),n.createElement("textarea",{className:"taskForm__input",id:"taskFormInput_".concat(t),name:"taskFormInput",onChange:function(e){u(e.target.value)},value:m}),m&&n.createElement(n.Fragment,null,n.createElement("label",{htmlFor:"taskBtn__clear--".concat(t),className:"srOnly"},"Clear task input"),n.createElement("button",{id:"taskBtn__clear--".concat(t),type:"button",onClick:function(){return u("")},className:"btn btn--black"},"Clear")),"edit"===a&&n.createElement(n.Fragment,null,n.createElement("label",{htmlFor:"taskBtn__delete--".concat(t),className:"srOnly"},"Delete task"),n.createElement("button",{id:"taskBtn__delete--".concat(t),type:"button",onClick:function(){var e,a;c&&(e=c.dbRef,a=t,d.a.database().ref(e).child(a).remove())},className:"btn btn--red"},"Delete")),n.createElement("label",{htmlFor:"taskBtn__save--".concat(t),className:"srOnly"},"Save task input"),n.createElement("button",{id:"taskBtn__save--".concat(t),className:"btn btn--green",disabled:0===m.length},"edit"===a?"Save":"Add")))},y=function(e){var t=e.id,a=e.task,l=e.status,c=Object(n.useState)(!1),o=Object(s.a)(c,2),u=o[0],b=o[1],k=Object(n.useContext)(h).user,f=Object(n.useContext)(p).taskStatus,E=function(e){if(k&&f){var a=f.indexOf(l)+e;a=a<0?0:a>=f.length?f.length-1:a,l!==f[a]&&function(e,t){d.a.database().ref(e).update({status:t})}(k.dbRef+t,f[a])}},g=function(){b(!u)};return r.a.createElement("li",{className:"taskItem taskItem--".concat(l)},"open"!==l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"btnPrev--".concat(t),className:"srOnly"},"Move task to the previous status"),r.a.createElement("button",{id:"btnPrev--".concat(t),className:"taskItem__btn taskItem__btn--prev",onClick:function(){E(-1)}},r.a.createElement(i.a,{icon:m.c,"aria-hidden":"true"}),r.a.createElement("span",{className:"srOnly"},"Move task to the previous status"))),u?r.a.createElement(B,{id:t,type:"edit",taskValue:a,formToggler:b}):r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"taskItem--".concat(t),className:"srOnly"},"Click or focus on the text of the task to enter edit mode and modify or delete the task"),r.a.createElement("button",{id:"taskItem--".concat(t),className:"taskItem__text",onClick:g,onFocus:g},a)),"complete"!==l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"btnNext--".concat(t),className:"srOnly"},"Move task to the previous status"),r.a.createElement("button",{id:"btnNext--".concat(t),className:"taskItem__btn taskItem__btn--next",onClick:function(){E(1)}},r.a.createElement(i.a,{icon:m.d,"aria-hidden":"true"}),r.a.createElement("span",{className:"srOnly"},"Click to move task to the next status"))))},I=function(e){var t=e.status,a=e.tasks,l=Object(n.useState)(!1),c=Object(s.a)(l,2),o=c[0],u=c[1],b=Object(n.useState)(!1),k=Object(s.a)(b,2),f=k[0],E=k[1],p=Object(n.useContext)(h).user;return r.a.createElement("div",{className:"taskList"},r.a.createElement("div",{className:"taskList__header taskList__header--".concat(t)},r.a.createElement("label",{htmlFor:"taskListMenuBtn--".concat(t),className:"srOnly"},"Click the button to toggle the task list menu to clear the task list's items"),r.a.createElement("button",{id:"taskListMenuBtn--".concat(t),className:f?"btn taskList__menuBtn taskList__menuBtn--active":"btn taskList__menuBtn",onClick:function(){return E(!f)}},r.a.createElement("span",{className:"srOnly"},"Toggle the task list's menu"),f?r.a.createElement(i.a,{icon:m.f}):r.a.createElement(i.a,{icon:m.a})),r.a.createElement("h2",{className:"taskList__headingText"},{open:"Todo",inProgress:"In Progress",complete:"Completed"}[t],a.length>0&&r.a.createElement("span",{className:"taskList__count"},a.length)),f?r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"taskListClearBtn--".concat(t),className:"srOnly"},"Click the button to clear the task list's items"),r.a.createElement("button",{id:"taskListClearBtn--".concat(t),onClick:function(){if(p&&a.length){var e=a.filter((function(e){return e.status===t})).reduce((function(e,t){return e[t.key]=null,e}),{});!function(e,t){d.a.database().ref(e).update(t)}(p.dbRef,e)}E(!1)},className:"btn btn--black taskList__clearBtn",disabled:0===a.length},"Clear List")):r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"taskListAddBtn--".concat(t),className:"srOnly"},"Click the button to toggle the add new task form"),r.a.createElement("button",{id:"taskListAddBtn--".concat(t),onClick:function(){return u(!o)},className:"btn taskList__addBtn",disabled:o},"+ Task"))),r.a.createElement("ul",{className:"taskList__list"},o&&r.a.createElement("li",{className:"taskItem taskItem--".concat(t)},r.a.createElement(B,{type:"staging",id:t,formToggler:u})),a.map((function(e){var t=e.key,a=e.task,n=e.status;return r.a.createElement(y,{key:t,id:t,task:a,status:n})}))))},F=function(){var e=n.useContext(p),t=e.taskItems,a=e.taskStatus;return n.createElement("section",{className:"taskLists"},a&&a.map((function(e){var a=t?t.filter((function(t){return t.status===e})):[];return n.createElement(I,{key:e,status:e,tasks:a})})))},T=function(){return n.createElement("footer",null,n.createElement("div",{className:"wrapper displayContainer"},n.createElement("p",null,"Copyright 2020"),n.createElement("p",null,"Created By ",n.createElement("a",{href:"https://andrefacey.com"},"Andre Facey")," at ",n.createElement("a",{href:"https://junocollege.com",target:"_blank",rel:"noopener noreferrer"},"Juno College")),n.createElement("p",null,"Design Inspiration from ",n.createElement("a",{href:"https://scottrs.ca",target:"_blank",rel:"noopener noreferrer"},"Scott Sobere-Yu")," and ",n.createElement("a",{href:"https://dribbble.com/shots/6250762-Kanban-Board",target:"_blank",rel:"noopener noreferrer"},"Nikita"))))},x=(a(32),function(){var e=Object(n.useContext)(c).theme;return r.a.createElement("div",{className:"pageContainer ".concat(e)},r.a.createElement(v,null),r.a.createElement("main",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(N,null),r.a.createElement(F,null))),r.a.createElement(T,null))});l.render(n.createElement(n.StrictMode,null,n.createElement(E,null,n.createElement(o,null,n.createElement(g,null,n.createElement(x,null))))),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5eaac6c0.chunk.js.map