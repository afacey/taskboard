(this.webpackJsonptaskboard=this.webpackJsonptaskboard||[]).push([[0],{22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(21),l=a.n(r),c=(a(27),a(9)),o=a(4),i=a(5),m=a(7),u=a(6),d=a(14),h=a.n(d);a(28),a(30);h.a.initializeApp({apiKey:"AIzaSyCf4r4_JiAWZjMYxHx2oPdOOPBunUeG9zg",authDomain:"taskboard-drethedev.firebaseapp.com",databaseURL:"https://taskboard-drethedev.firebaseio.com",projectId:"taskboard-drethedev",storageBucket:"taskboard-drethedev.appspot.com",messagingSenderId:"868447749524",appId:"1:868447749524:web:bc280f2ee21da6c3fe7b81"});var k=h.a,p=a(15),b=a.n(p),g=function(e){var t=e.clearTaskboard,a=e.numOfTasks,n=e.user,r=e.signInUser,l=e.logoutUser,c=e.loadComplete;return s.a.createElement("header",null,s.a.createElement("div",{className:"wrapper displayContainer"},s.a.createElement("div",{className:"header__text"},s.a.createElement("h1",null,"Task Board"),s.a.createElement("p",null,"Add and track tasks to increase productivity!")),s.a.createElement("div",{className:"header__buttons"},s.a.createElement("button",{onClick:t,className:"btn btn--black btn__taskBoard btn__taskBoard--clear",disabled:a?"":"disabled"},"Clear Task Board"),c?n?s.a.createElement("button",{onClick:l,className:"btn btn--green btn__taskBoard btn__taskBoard--auth"},"Log Out"):s.a.createElement("button",{onClick:r,className:"btn btn--red btn__taskBoard btn__taskBoard--auth"},"Sign In With Google"):null)))},f=a(2),v=a(3),E=function(e){var t=e.searchTerms,a=e.handleChange,n=e.clearSearch;return s.a.createElement("section",{className:"taskBoard__menu"},s.a.createElement("fieldset",{className:"taskBoard__listFilter"},s.a.createElement("div",{className:"inputContainer__filter"},s.a.createElement("legend",{className:"srOnly"},"Filter the task items by list"),s.a.createElement("input",{type:"radio",className:"srOnly taskBoard__filterInput",name:"listFilter",id:"filterAll",value:"all",onChange:a,defaultChecked:!0}),s.a.createElement("label",{className:"btn btn--black",htmlFor:"filterAll"},"All"),s.a.createElement("input",{type:"radio",className:"srOnly taskBoard__filterInput",name:"listFilter",id:"filterOpen",value:"open",onChange:a}),s.a.createElement("label",{className:"btn btn--red",htmlFor:"filterOpen"},"Open"),s.a.createElement("input",{type:"radio",className:"srOnly taskBoard__filterInput",name:"listFilter",id:"filterInProgress",value:"inProgress",onChange:a}),s.a.createElement("label",{className:"btn btn--blue",htmlFor:"filterInProgress"},"In Progress"),s.a.createElement("input",{type:"radio",className:"srOnly taskBoard__filterInput",name:"listFilter",id:"filterComplete",value:"complete",onChange:a}),s.a.createElement("label",{className:"btn btn--green",htmlFor:"filterComplete"},"Complete"))),s.a.createElement("div",{className:"inputContainer__searchBar"},s.a.createElement("label",{htmlFor:"searchTerms",className:"srOnly"},"Search for task items"),s.a.createElement("input",{className:"taskBoard__searchBar",type:"text",name:"searchTerms",id:"searchTerms",placeholder:"search",onChange:a,value:t}),t?s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:"searchBarBtn",className:"srOnly"},"Button to clear the search terms"),s.a.createElement("button",{id:"searchBarBtn",className:"taskBoard__searchBarBtn",onClick:n},s.a.createElement(f.a,{className:"taskBoard__searchBarIcon--clear",icon:v.e,"aria-hidden":"true"}))):s.a.createElement(f.a,{className:"taskBoard__searchBarIcon",icon:v.d,"aria-hidden":"true"})))},_=function(e){var t=e.id,a=e.type,n=e.handleSubmit,r=e.handleBlur,l=e.handleChange,c=e.handleClear,o=e.taskValue,i=e.removeTask;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",{className:"taskForm__heading"},"edit"===a?"Edit Task":"New Task"),s.a.createElement("form",{action:"#",onSubmit:n,onBlur:r,className:"taskForm"},s.a.createElement("label",{htmlFor:"taskFormInput_".concat(t),className:"srOnly"},"Task Item"),s.a.createElement("textarea",{className:"taskForm__input",id:"taskFormInput_".concat(t),name:"taskFormInput",onChange:l,value:o}),o&&s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:"taskBtn__clear--".concat(t),className:"srOnly"},"Clear task input"),s.a.createElement("button",{id:"taskBtn__clear--".concat(t),type:"button",onClick:c,className:"btn btn--black"},"Clear")),"edit"===a&&s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:"taskBtn__delete--".concat(t),className:"srOnly"},"Delete task"),s.a.createElement("button",{id:"taskBtn__delete--".concat(t),type:"button",onClick:i,className:"btn btn--red"},"Delete")),s.a.createElement("label",{htmlFor:"taskBtn__save--".concat(t),className:"srOnly"},"Save task input"),s.a.createElement("button",{id:"taskBtn__save--".concat(t),className:"btn btn--green",disabled:o?"":"disabled"},"Save")))},T=a(11),N=a.n(T),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this)).handleBlur=function(e){var t=e.currentTarget;setTimeout((function(){t.contains(document.activeElement)||n.setState({isEditing:!1})}),5)},n.handleChange=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.handleEditSubmit=function(e){e.preventDefault(),n.state.taskFormInput.length&&n.props.editTask(n.props.id,n.state.taskFormInput),n.setState({isEditing:!1})},n.handleMovePrev=function(){return n.props.moveTask(n.props.id,n.props.status,-1)},n.handleMoveNext=function(){return n.props.moveTask(n.props.id,n.props.status,1)},n.removeTask=function(){return n.props.removeTask(n.props.id)},n.toggleEdit=function(){n.state.taskFormInput?n.setState({isEditing:!n.state.isEditing}):n.setState({isEditing:!n.state.isEditing,taskFormInput:n.props.task})},n.clearTask=function(){n.setState({taskFormInput:""})},n.state={taskFormInput:e.task,isEditing:!1},n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){var e=document.querySelector("#taskFormInput_".concat(this.props.id));e&&e!==document.activeElement&&(N()(e),e.value="",e.focus(),e.value=this.state.taskFormInput)}},{key:"render",value:function(){var e=this.handleEditSubmit,t=this.handleChange,a=this.handleBlur,n=this.removeTask,r=this.toggleEdit,l=this.clearTask,c=this.handleMovePrev,o=this.handleMoveNext,i=this.state.taskFormInput,m=this.props,u=m.id,d=m.task,h=m.status;return s.a.createElement("li",{className:"taskItem taskItem--".concat(h)},"open"!==h&&s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:"btnPrev--".concat(u),className:"srOnly"},"Move task to the previous status"),s.a.createElement("button",{id:"btnPrev--".concat(u),className:"taskItem__btn taskItem__btn--prev",onClick:c},s.a.createElement(f.a,{icon:v.b,"aria-hidden":"true"}),s.a.createElement("span",{className:"srOnly"},"Move task to the previous status"))),this.state.isEditing?s.a.createElement(_,{id:u,type:"edit",handleSubmit:e,handleBlur:a,handleChange:t,taskValue:i,removeTask:n,toggleForm:r,handleClear:l}):s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:"taskItem--".concat(u),className:"srOnly"},"Click or focus on the text of the task to enter edit mode and modify or delete the task"),s.a.createElement("button",{id:"taskItem--".concat(u),className:"taskItem__text",onClick:r,onFocus:r},d)),"complete"!==h&&s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:"btnNext--".concat(u),className:"srOnly"},"Move task to the previous status"),s.a.createElement("button",{id:"btnNext--".concat(u),className:"taskItem__btn taskItem__btn--next",onClick:o},s.a.createElement(f.a,{icon:v.c,"aria-hidden":"true"}),s.a.createElement("span",{className:"srOnly"},"Click to move task to the next status"))))}}]),a}(n.Component),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).toggleMenuEnabled=function(){return n.setState({menuEnabled:!n.state.menuEnabled})},n.handleBlur=function(e){var t=e.currentTarget;setTimeout((function(){t.contains(document.activeElement)||n.setState({isStaging:!1})}),5)},n.handleStagingTask=function(e){return n.setState({stagingTask:e.target.value})},n.toggleTaskStaging=function(){return n.setState({isStaging:!n.state.isStaging})},n.handleAddTask=function(e){if(e.preventDefault(),n.state.stagingTask){var t=n.state.stagingTask,a=n.props.status;n.props.addTask({task:t,status:a}),n.setState({isStaging:!1,stagingTask:""})}},n.handleClearList=function(){var e=n.props,t=e.tasks,a=e.status,s=e.clearTaskList;t.length&&s(t.filter((function(e){return e.status===a})).reduce((function(e,t){return e[t.key]=null,e}),{}),a);n.setState({menuEnabled:!1})},n.clearStagingTask=function(){n.setState({stagingTask:""})},n.state={isStaging:!1,stagingTask:"",menuEnabled:!1},n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){var e=document.querySelector("#taskFormInput_".concat(this.props.status));e&&e!==document.activeElement&&(N()(e),e.value="",e.focus(),e.value=this.state.stagingTask)}},{key:"render",value:function(){var e=this.props,t=e.status,a=e.tasks,n=e.editTask,r=e.removeTask,l=e.moveTask,c=this.handleAddTask,o=this.toggleTaskStaging,i=this.handleStagingTask,m=this.handleClearList,u=this.clearStagingTask,d=this.handleBlur,h=this.state,k=h.menuEnabled,p=h.stagingTask;return s.a.createElement("div",{className:"taskList"},s.a.createElement("div",{className:"taskList__header taskList__header--".concat(t)},s.a.createElement("label",{htmlFor:"taskListMenuBtn--".concat(t),className:"srOnly"},"Click the button to toggle the task list menu to clear the task list's items"),s.a.createElement("button",{id:"taskListMenuBtn--".concat(t),className:k?"btn taskList__menuBtn taskList__menuBtn--active":"btn taskList__menuBtn",onClick:this.toggleMenuEnabled},s.a.createElement("span",{className:"srOnly"},"Toggle the task list's menu"),k?s.a.createElement(f.a,{icon:v.e}):s.a.createElement(f.a,{icon:v.a})),s.a.createElement("h2",{className:"taskList__headingText"},{open:"Open",inProgress:"In Progress",complete:"Completed"}[t],a.length>0&&s.a.createElement("span",{className:"taskList__count"},a.length)),this.state.menuEnabled?s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:"taskListClearBtn--".concat(t),className:"srOnly"},"Click the button to clear the task list's items"),s.a.createElement("button",{id:"taskListClearBtn--".concat(t),onClick:m,className:"btn btn--black taskList__clearBtn",disabled:a.length?"":"disabled"},"Clear List")):s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:"taskListAddBtn--".concat(t),className:"srOnly"},"Click the button to toggle the add new task form"),s.a.createElement("button",{id:"taskListAddBtn--".concat(t),onClick:o,className:"btn taskList__addBtn",disabled:this.state.isStaging?"disabled":""},"+ Task"))),s.a.createElement("ul",{className:"taskList__list"},this.state.isStaging&&s.a.createElement("li",{className:"taskItem taskItem--".concat(t)},s.a.createElement(_,{id:t,taskValue:p,handleSubmit:c,toggleForm:o,handleBlur:d,handleChange:i,handleClear:u})),this.props.tasks.map((function(e){var t=e.key,a=e.task,c=e.status;return s.a.createElement(S,{key:t,id:t,task:a,status:c,editTask:n,removeTask:r,moveTask:l})}))))}}]),a}(n.Component),I=function(){return s.a.createElement("footer",null,s.a.createElement("div",{className:"wrapper displayContainer"},s.a.createElement("p",null,"Copyright 2020"),s.a.createElement("p",null,"Created By ",s.a.createElement("a",{href:"https://andrefacey.com"},"Andre Facey")," at ",s.a.createElement("a",{href:"https://junocollege.com",target:"_blank",rel:"noopener noreferrer"},"Juno College")),s.a.createElement("p",null,"Design Inspiration from ",s.a.createElement("a",{href:"https://scottrs.ca",target:"_blank",rel:"noopener noreferrer"},"Scott Sobere-Yu")," and ",s.a.createElement("a",{href:"https://dribbble.com/shots/6250762-Kanban-Board",target:"_blank",rel:"noopener noreferrer"},"Nikita"))))},B=(a(36),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).signInUser=function(){var t=new k.auth.GoogleAuthProvider;k.auth().signInWithPopup(t).then((function(t){var a=t.user;e.setState({user:a.uid,dbRef:a.uid+"/"})})).catch((function(e){b.a.fire({title:"Oops!",text:"There was an error signing in: "+e,icon:"error",confirmButton:"OK"})}))},e.logoutUser=function(){k.auth().signOut().then((function(){e.setState({user:null,dbRef:"public/"},e.retrieveTaskItems)})).catch((function(e){b.a.fire({title:"Oops!",text:"There was an error while logging out: ",error:e,icon:"error",confirmButton:"OK"})}))},e.retrieveTaskItems=function(){k.database().ref(e.state.dbRef).on("value",(function(t){var a=t.val(),n=[];for(var s in a){var r={key:s,task:a[s].task,status:a[s].status};n.push(r)}e.setState({taskItems:n},(function(){return e.setState({loadComplete:!0})}))}))},e.clearTaskboard=function(){k.database().ref(e.state.dbRef).remove(),e.setState({searchItems:[]})},e.clearTaskList=function(t,a){k.database().ref(e.state.dbRef).update(t);var n=e.state.searchItems.filter((function(e){return e.status!==a}));e.setState({searchItems:n})},e.addTask=function(t){return k.database().ref(e.state.dbRef).push(t).then(e.handleSearch)},e.updateTask=function(t,a){return k.database().ref(e.state.dbRef+t).update({task:a}).then(e.handleSearch)},e.removeTask=function(t){return k.database().ref(e.state.dbRef).child(t).remove().then(e.handleSearch)},e.moveTask=function(t,a,n){var s=k.database().ref(e.state.dbRef+t),r=e.state.taskStatus,l=r.indexOf(a),c=l+n;(c=c<0?0:c>=r.length?r.length-1:c)!==l&&s.update({status:r[c]}).then(e.handleSearch)},e.handleChange=function(t){var a=t.target,n=a.name,s=a.value;"searchTerms"===n&&e.state.taskItems.length?e.setState(Object(c.a)({},n,s),e.handleSearch):e.setState(Object(c.a)({},n,s))},e.handleSearch=function(){var t=e.state,a=t.searchTerms,n=t.taskItems;if(a){var s=new RegExp(a,"i"),r=n.filter((function(e){var t=e.task;return s.test(t)}));e.setState({searchItems:r})}},e.clearSearch=function(){e.setState({searchTerms:"",searchItems:[]})},e.state={loadComplete:!1,user:null,dbRef:"public/",taskStatus:["open","inProgress","complete"],taskItems:[],listFilter:"all",searchTerms:"",searchItems:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.auth().onAuthStateChanged((function(t){t?e.setState({user:t.uid,dbRef:t.uid+"/"},e.retrieveTaskItems):e.retrieveTaskItems()}))}},{key:"render",value:function(){var e=this.addTask,t=this.moveTask,a=this.removeTask,n=this.updateTask,r=this.handleChange,l=this.clearTaskboard,c=this.clearTaskList,o=this.clearSearch,i=this.signInUser,m=this.logoutUser,u=this.state,d=u.taskStatus,h=u.taskItems,k=u.listFilter,p=u.searchItems,b=u.searchTerms,f=u.user,v=u.loadComplete,_=b.length?p:h,T="all"===k?d:[k];return s.a.createElement("div",{className:"pageContainer"},s.a.createElement(g,{clearTaskboard:l,numOfTasks:h.length,user:f,loadComplete:v,signInUser:i,logoutUser:m}),s.a.createElement("main",null,s.a.createElement("div",{className:"wrapper"},s.a.createElement(E,{handleChange:r,searchTerms:b,clearSearch:o}),s.a.createElement("section",{className:"taskLists"},T.map((function(r){var l=_.filter((function(e){return e.status===r}));return s.a.createElement(C,{className:"taskList",key:r,status:r,tasks:l,addTask:e,moveTask:t,removeTask:a,editTask:n,clearTaskList:c})}))))),s.a.createElement(I,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.e0f31e94.chunk.js.map