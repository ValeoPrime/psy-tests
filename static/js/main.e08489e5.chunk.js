(this["webpackJsonppsy-tests"]=this["webpackJsonppsy-tests"]||[]).push([[0],{21:function(e,t,n){e.exports={button:"button__button___3IxNo",error:"button__error___14BS3",success:"button__success___aycff",primary:"button__primary___dNO26"}},26:function(e,t,n){e.exports={Drawer:"Drawer__Drawer___2Nzcl",close:"Drawer__close___3eUiV",active:"Drawer__active___WxScd"}},27:function(e,t,n){e.exports={ActiveQuestionnaire:"ActiveQuestionnaire__ActiveQuestionnaire___DWwUW",Question:"ActiveQuestionnaire__Question___BgvDm",small:"ActiveQuestionnaire__small___1uPtt"}},29:function(e,t,n){e.exports={MenuToggle:"MenuToggle__MenuToggle___1mqO0",open:"MenuToggle__open___1kMjG"}},33:function(e,t,n){e.exports={MainQuiz:"MainQuiz__MainQuiz___2xG3-",MainQuizWrapper:"MainQuiz__MainQuizWrapper___Jyt6o"}},34:function(e,t,n){e.exports={AnswerItem:"AnswerItem__AnswerItem___1ykmf",success:"AnswerItem__success___2fUsY",error:"AnswerItem__error___26eF_"}},35:function(e,t,n){e.exports={lds:"Loader__lds___3ZToI","lds-dual-ring":"Loader__lds-dual-ring___i0nZL"}},36:function(e,t,n){e.exports={GuestScreen:"GuestScreen__GuestScreen___vT31O",Div:"GuestScreen__Div___1yz2g"}},37:function(e,t,n){e.exports={Auth:"Auth__Auth___2YUr1",AuthForm:"Auth__AuthForm___2Xb4F"}},38:function(e,t,n){e.exports={Input:"Input__Input___s67N0",invalid:"Input__invalid___flTJ3"}},49:function(e,t,n){e.exports={Layout:"Layout__Layout___2C2_c"}},50:function(e,t,n){e.exports={Backdrop:"BackDrop__Backdrop___3xmex"}},52:function(e,t,n){e.exports={AnswersList:"AnswersList__AnswersList___1WbU-"}},53:function(e,t,n){e.exports={FinishedQuestionnaire:"FinishedQuestionnaire__FinishedQuestionnaire___1RBap"}},54:function(e,t,n){e.exports={itemsList:"itemsList__itemsList___1WI4F"}},55:function(e,t,n){e.exports={ListItem:"ListItem__ListItem___2hey1"}},56:function(e,t,n){e.exports={QuizCreator:"QuizCreator__QuizCreator___1FpN9"}},57:function(e,t,n){e.exports={Select:"Select__Select___1rPbL"}},58:function(e,t,n){e.exports={QuestionareTitle:"QuestionareTitle__QuestionareTitle___UCwso"}},61:function(e,t,n){e.exports=n(91)},66:function(e,t,n){},90:function(e,t,n){e.exports={App:"App__App___1o-Fp"}},91:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(24),i=n.n(s),o=(n(66),n(5)),u=n(6),l=n(8),c=n(4),p=n(9),m=n(49),d=n.n(m),h=n(29),f=n.n(h),_=function(e){var t=[f.a.MenuToggle,"fa"];return e.isOpen?(t.push("fa-times"),t.push(f.a.open)):t.push("fa-bars"),r.a.createElement("i",{className:t.join(" "),onClick:e.onToggle})},v=n(26),E=n.n(v),T=n(16),b=n(50),g=n.n(b),O=function(e){return r.a.createElement("div",{className:g.a.Backdrop,onClick:e.onClick})},y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"renderLinks",value:function(e){var t=this;return e.map((function(e,n){return r.a.createElement("li",{key:n},r.a.createElement(T.b,{to:e.to,exact:e.exact,activeClassName:E.a.active,onClick:t.props.onClose},e.label))}))}},{key:"render",value:function(){var e=[E.a.Drawer];this.props.isOpen||e.push(E.a.close);var t=[{to:"/",label:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432",exact:!0}];return this.props.isAuthenticated?(t.push({to:"/create-quize",label:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442",exact:!1}),t.push({to:"/logout",label:"\u0412\u044b\u0439\u0442\u0438",exact:!1})):t.push({to:"/auth",label:"\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",exact:!1}),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:e.join(" ")},r.a.createElement("ul",null,this.renderLinks(t))),this.props.isOpen?r.a.createElement(O,{onClick:this.props.onClose}):null)}}]),t}(a.Component),w=n(7),S=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={menu:!1},n.ToogleMenu=function(){n.setState({menu:!n.state.menu})},n.menuClose=function(){n.setState({menu:!1})},n.styles={color:{"background-color":"red"}},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:d.a.Layout},r.a.createElement(y,{isOpen:this.state.menu,onClose:this.menuClose,isAuthenticated:this.props.isAuthenticated}),r.a.createElement(_,{onToggle:this.ToogleMenu,isOpen:this.state.menu}),r.a.createElement("main",null,this.props.children))}}]),t}(a.Component);var C=Object(w.b)((function(e){return{isAuthenticated:!!e.auth.token}}))(S),k=n(3),I=n(33),j=n.n(I),Q=n(27),A=n.n(Q),q=n(52),N=n.n(q),x=n(34),L=n.n(x),F=function(e){var t=[L.a.AnswerItem];return e.answerState&&t.push(L.a[e.answerState]),r.a.createElement("li",{className:t.join(" "),onClick:function(){return e.answerClick(e.answer.id)}},e.answer.text)},D=function(e){return r.a.createElement("ul",{className:N.a.AnswersList},e.answers.map((function(t,n){return r.a.createElement(F,{key:n,answer:t,answerClick:e.answerClick,answerState:e.answerState?e.answerState[t.id]:null})})))},R=function(e){return r.a.createElement("div",{className:A.a.ActiveQuestionnaire},r.a.createElement("p",{className:A.a.Question},r.a.createElement("span",null,r.a.createElement("strong",null,e.QuestionNum,".")," \xa0",e.textQuestion),r.a.createElement("small",{className:A.a.small},e.QuestionNum," \u0438\u0437 ",e.totalNumQuestions)),r.a.createElement(D,{answers:e.answers,answerClick:e.answerClick,answerState:e.answerState}))},H=n(53),z=n.n(H),M=n(21),U=n.n(M),V=function(e){var t=[U.a.button,U.a[e.type]];return r.a.createElement("button",{className:t.join(" "),onClick:e.onClick},e.children)},G=function(e){var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return r.a.createElement("div",{className:z.a.FinishedQuestionnaire},r.a.createElement("ul",null,e.questions.map((function(t,n){var a=["fa","error"===e.results[t.id]?"fa-times":"fa-check"];return r.a.createElement("li",{key:n},r.a.createElement("strong",null,n+1,"."),"\xa0",t.question,r.a.createElement("i",{className:a.join(" ")}))}))),r.a.createElement("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",e.questions.length),r.a.createElement("div",null,r.a.createElement(V,{type:"primary",onClick:e.onRetry}," \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"),r.a.createElement(V,{type:"success",onClick:e.onRepeat}," \u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u0442\u0435\u0441\u0442\u043e\u0432")))},W=n(35),B=n.n(W),P=function(){return console.log(B.a),r.a.createElement("div",{className:B.a.lds})},J=n(23),X=n(15),Z=n.n(X),Y=n(18),$=n(19),K=n.n($);function ee(e){return{type:"FETCH_QUESTIONARE_TITLES",allQuestionnaireTitles:e}}function te(e,t){return{type:"ANSWER",answerState:e,results:t}}function ne(e){return e.activeQuestion+1===e.questions.length}function ae(){return{type:"IS_QUESTIONNAIRE_FINISHED"}}function re(e){return{type:"NEXT_QUESTION",number:e}}function se(e,t){return{type:"FETCH_ACTIVE_QUESTIONARE_TITLE_AND_QUESTIONS",questionnaireTitle:e,questions:t}}var ie=function(e){Object(p.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=Object(c.a)(e);if(t()){var r=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).backToList=function(){e.props.history.push("/"),e.props.repeatHandler()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchActiveTest(this.props.testId||this.props.location.pathname.split("/")[2])}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:j.a.MainQuiz},r.a.createElement("div",{className:j.a.MainQuizWrapper},r.a.createElement("h1",null,'"'.concat(this.props.questionnaireTitle,'"')),this.props.questionsLoad?this.props.isFinished?r.a.createElement(G,{results:this.props.results,questions:this.props.questions,onRetry:this.props.retryHandler,onRepeat:this.backToList}):r.a.createElement(R,{key:this.props.questions[this.props.activeQuestion].id,answers:this.props.questions[this.props.activeQuestion].answers,textQuestion:this.props.questions[this.props.activeQuestion].question,answerClick:this.props.answerClick,totalNumQuestions:this.props.questions.length,QuestionNum:this.props.activeQuestion+1,answerState:this.props.answerState}):r.a.createElement(P,null))))}}]),n}(a.Component);var oe=Object(w.b)((function(e){return{results:e.allTests.results,testId:e.allTests.testId,isFinished:e.allTests.isFinished,questionsLoad:e.allTests.questionsLoad,activeQuestion:e.allTests.activeQuestion,answerState:e.allTests.answerState,questionnaireTitle:e.allTests.questionnaireTitle,key:e.allTests.key,questions:e.allTests.questions}}),(function(e){return{fetchActiveTest:function(t){return e(function(e){return function(){var t=Object(Y.a)(Z.a.mark((function t(n){var a,r;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=null,r=[],t.prev=2,t.next=5,K.a.get("https://quiz-316f6.firebaseio.com/quizes/".concat(e,".json"));case 5:t.sent.data.forEach((function(e){a=e.questionareTitle,r.push(e)})),n(se(a,r)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),n({type:"FETCH_QUESTIONARE_TITLES_ERROR",error:t.t0});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))},retryHandler:function(){return e({type:"RETRY_HANDLER"})},repeatHandler:function(){return e({type:"REPEAT_HANDLER"})},answerClick:function(t){return e(function(e){return function(t,n){var a=n().allTests;if(a.answerState){var r=Object.keys(a.answerState)[0];if("success"===a.answerState[r])return}var s=a.questions[a.activeQuestion],i=a.results;if(s.rightAnswerId===e){i[s.id]||(i[s.id]="success"),t(te(Object(J.a)({},e,"success"),i));var o=window.setTimeout((function(){ne(a)?t(ae()):t(re(a.activeQuestion+1)),window.clearTimeout(o)}),1e3)}else{i[s.id]="error",t(te(Object(J.a)({},e,"error"),i));var u=window.setTimeout((function(){ne(a)?t(ae()):t(re(a.activeQuestion+1)),window.clearTimeout(u)}),1e3)}}}(t))}}}))(ie),ue=n(36),le=n.n(ue),ce=n(54),pe=n.n(ce),me=n(55),de=n.n(me),he=function(e){localStorage.getItem("token");var t="/";return localStorage.getItem("token")&&(t="/quiz/"+e.id),r.a.createElement("li",{className:de.a.ListItem,onClick:function(){e.onClick(e.id)}},r.a.createElement(T.b,{to:t},e.title))},fe=function(e){return r.a.createElement("ul",{className:pe.a.itemsList},e.allTitles.map((function(t,n){return r.a.createElement(he,{id:t[0],key:n,title:t[1],onClick:e.onClick})})))},_e=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).redirect=function(){n.props.history.push("/auth"),n.props.guestScreenOff()},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchAllTestsTitles()}},{key:"render",value:function(){var e=[U.a.button,U.a.success];return r.a.createElement(r.a.Fragment,null,this.props.isAuthenticated?this.props.guestScreen?r.a.createElement("div",{className:le.a.GuestScreen},r.a.createElement("h1",null,"\u0412 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0442\u0435\u0441\u0442\u044b :"),r.a.createElement(fe,{onClick:this.props.testID,allTitles:this.props.allQuestionnaireTitles})):r.a.createElement(oe,{TESTId:this.props.testId}):r.a.createElement("div",{className:le.a.Div},r.a.createElement("h1",null,"\u0412 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0442\u0435\u0441\u0442\u044b :"),r.a.createElement(fe,{allTitles:this.props.allQuestionnaireTitles,onClick:this.props.testID}),r.a.createElement("p",null,"\u043d\u043e \u0438\u0445 \u043d\u0435\u043b\u044c\u0437\u044f \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b"),r.a.createElement("button",{className:e.join(" "),onClick:this.redirect,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f/\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"})))}}]),t}(a.Component);var ve=Object(w.b)((function(e){return{guestScreen:e.allTests.guestScreen,allQuestionnaireTitles:e.allTests.allQuestionnaireTitles,testId:e.allTests.testId,isAuthenticated:!!e.auth.token}}),(function(e){return{fetchAllTestsTitles:function(){return e(function(){var e=Object(Y.a)(Z.a.mark((function e(t){var n,a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.a.get("https://quiz-316f6.firebaseio.com/quizes.json");case 3:n=e.sent,a=[],Object.keys(n.data).forEach((function(e){var t=[e,n.data[e][0].questionareTitle];a.push(t)})),t(ee(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:"FETCH_QUESTIONARE_TITLES_ERROR",error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())},testID:function(t){return e(function(e){return{type:"FETCH_TEST_ID",testId:e}}(t))},guestScreenOff:function(){return e({type:"GUEST_SCREEN_OFF"})}}}))(_e),Ee=n(2),Te=n(37),be=n.n(Te),ge=n(38),Oe=n.n(ge);function ye(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!(t||!a||!n)}var we=function(e){var t=e.type||"text",n=[Oe.a.Input],a="".concat(t," - ").concat(Math.random());return ye(e)&&n.push(Oe.a.invalid),r.a.createElement("div",{className:n.join(" ")},r.a.createElement("label",{htmlFor:a},e.label),r.a.createElement("input",{type:t,id:a,value:e.value,onChange:e.onChange}),ye(e)?r.a.createElement("span",null,e.errorMessage||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"):null)};function Se(e){return{type:"AUTH_SUCCESS",token:e}}function Ce(e){return function(t){setTimeout((function(){t(ke())}),1e3*e)}}function ke(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}}var Ie=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:"\u0421\u0434\u0430\u0435\u0442\u0441\u044f \u043c\u043d\u0435 \u0442\u044b \u043f\u044b\u0442\u0430\u0435\u0448\u044c\u0441\u044f \u0441\u043a\u043e\u043b\u044c\u0437\u043e\u043d\u0443\u0442\u044c?",valid:!1,touched:!1,validations:{required:!0,email:!0}},password:{value:"",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",errorMessage:"\u041f\u0430\u0440\u043e\u043b\u044c \u0433\u043d\u0438\u043b\u043e\u0432\u0430\u0442",valid:!1,touched:!1,validations:{required:!0,minLength:6}}}},n.submitHandler=function(e){e.preventDefault()},n.loginHandler=function(e){n.state.isFormValid||e.preventDefault(),n.props.auth(n.state.formControls.email.value,n.state.formControls.password.value,!0)},n.registerHandler=function(){n.props.auth(n.state.formControls.email.value,n.state.formControls.password.value,!1)},n.onChangeHandler=function(e,t){var a=Object(Ee.a)({},n.state.formControls),r=Object(Ee.a)({},a[t]);r.value=e.target.value,r.touched=!0,r.valid=n.validateControl(r.value,r.validations),a[t]=r;var s=!0;Object.keys(a).forEach((function(e){s=a[e].valid&&s})),n.setState({formControls:a,isFormValid:s})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"renderInput",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return r.a.createElement(we,{key:n,type:a.type,label:a.label,errorMessage:a.errorMessage,valid:a.valid,touched:a.touched,shouldValidate:!0,onChange:function(n){return e.onChangeHandler(n,t)}})}))}},{key:"validateControl",value:function(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())&&n),t.minLength&&(n=e.length>=t.minLength&&n),n}},{key:"render",value:function(){return r.a.createElement("div",{className:be.a.Auth},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"),r.a.createElement("form",{onSubmit:this.submitHandler,className:be.a.AuthForm},this.renderInput(),r.a.createElement(V,{type:"success",onClick:this.loginHandler,disabled:!this.state.isFormValid},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(V,{type:"primary",onClick:this.registerHandler,disabled:this.state.isFormValid},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),r.a.createElement("div",null,r.a.createElement("p",null,"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"),r.a.createElement("span",null,"mail@gmail.com"),"  ",r.a.createElement("span",null,"123698745"))))}}]),t}(a.Component);var je=Object(w.b)(null,(function(e){return{auth:function(t,n,a){return e(function(e,t,n){return function(){var a=Object(Y.a)(Z.a.mark((function a(r){var s,i,o,u;return Z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s={email:e,password:t,returnSecureToken:!0},i="",i=n?"https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyALD2dHT9lF2G6-J7nv3BtJkrMcUhk8HgI":"https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyALD2dHT9lF2G6-J7nv3BtJkrMcUhk8HgI",a.next=5,K.a.post(i,s);case 5:o=a.sent,u=new Date((new Date).getTime()+1e3*o.data.expiresIn),localStorage.setItem("token",o.data.idToken),localStorage.setItem("userId",o.data.localId),localStorage.setItem("expirationDate",u),r(Se(o.data.idToken)),r(Ce(o.data.expiresIn));case 12:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t,n,a))}}}))(Ie),Qe=n(56),Ae=n.n(Qe),qe=n(57),Ne=n.n(qe),xe=function(e){var t="".concat(e.label,"-").concat(Math.random());return r.a.createElement("div",{className:Ne.a.Select},r.a.createElement("label",{htmlFor:t}),r.a.createElement("select",{id:t,value:e.value,onChange:e.onChange},e.options.map((function(e,t){return r.a.createElement("option",{value:e.value,key:e.value+t},e.text)}))))};function Le(e,t){return Object(Ee.a)({},e,{validation:t,valid:!t,touched:!1,value:""})}function Fe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),e<=t.minLength&&(n=!1),n}function De(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t}var Re=n(58),He=n.n(Re),ze=function(e){return r.a.createElement("form",{className:He.a.QuestionareTitle},r.a.createElement("label",{htmlFor:"QuestionareTitle"},"\u0412\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0412\u0430\u0448\u0435\u0433\u043e \u043e\u043f\u0440\u043e\u0441\u0430"),r.a.createElement("input",{id:"QuestionareTitle",onChange:e.QuestionareTitleChange}),r.a.createElement("span",null,e.errorMessage),r.a.createElement(V,{type:"primary",onClick:e.QuestionareTitle},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"))};function Me(){return{question:Le({label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",errorMessage:"\u0412\u043e\u043f\u0440\u043e\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c \u0438\u043b\u0438 \u043a\u043e\u0440\u043e\u0447\u0435 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"},{required:!0,minLength:5}),option1:Le({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 1",errorMessage:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",id:1},{required:!0}),option2:Le({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 2",errorMessage:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",id:2},{required:!0}),option3:Le({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 3",errorMessage:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",id:3},{required:!0}),option4:Le({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 4",errorMessage:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",id:4},{required:!0})}}var Ue=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={questionareTitleSelected:!1,questionareTitle:"",isFormValid:!1,rightAnswerId:1,formControls:Me()},n.submitHandler=function(e){e.preventDefault()},n.addQuestionHandler=function(e){e.preventDefault();var t={questionareTitle:n.state.questionareTitle,question:n.state.formControls.question.value,id:n.props.quiz.length+1,rightAnswerId:n.state.rightAnswerId,answers:[{text:n.state.formControls.option1.value,id:n.state.formControls.option1.id},{text:n.state.formControls.option2.value,id:n.state.formControls.option2.id},{text:n.state.formControls.option3.value,id:n.state.formControls.option3.id},{text:n.state.formControls.option4.value,id:n.state.formControls.option4.id}]};n.props.addQuestion(t),n.setState({isFormValid:!1,rightAnswerId:1,formControls:Me()})},n.createQuizHandler=function(e){e.preventDefault(),n.setState({isFormValid:!1,rightAnswerId:1,formControls:Me(),questionareTitleSelected:!1})},n.changeHandler=function(e,t){var a=Object(Ee.a)({},n.state.formControls),r=Object(Ee.a)({},a[t]);r.touched=!0,r.value=e,r.valid=Fe(r.value,r.validation),a[t]=r,n.setState({formControls:a,isFormValid:De(a)})},n.renderInputs=function(){return Object.keys(n.state.formControls).map((function(e,t){var a=n.state.formControls[e];return r.a.createElement(r.a.Fragment,{key:e+t},r.a.createElement(we,{key:t,label:a.label,value:a.value,valid:a.valid,shouldValidate:!!a.validation,touched:a.touched,errorMessage:a.errorMessage,onChange:function(t){return n.changeHandler(t.target.value,e)}}),0===t?r.a.createElement("hr",null):null)}))},n.selectChangeHandler=function(e){n.setState({rightAnswerId:+e.target.value})},n.questionareTitle=function(e){e.preventDefault(),n.state.questionareTitle.trim().length>5&&n.setState({questionareTitleSelected:!0})},n.QuestionareTitleChange=function(e){var t=e.target.value;n.setState({questionareTitle:t})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=r.a.createElement(xe,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",value:this.state.rightAnswerId,onChange:this.selectChangeHandler,options:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4}]});return r.a.createElement("div",{className:Ae.a.QuizCreator},!1===this.state.questionareTitleSelected?r.a.createElement(ze,{QuestionareTitle:this.questionareTitle,QuestionareTitleChange:this.QuestionareTitleChange,errorMessage:this.state.questionareTitle.trim().length>5?null:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c \u0438\u043b\u0438 \u043a\u043e\u0440\u043e\u0447\u0435 5 \u0441\u0438\u0432\u043e\u043b\u043e\u0432"}):r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"),r.a.createElement("form",{onSubmit:this.submitHandler},this.renderInputs(),e,r.a.createElement(V,{type:"primary",onClick:this.addQuestionHandler,disabled:!this.state.isFormValid},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"),r.a.createElement(V,{type:"success",onClick:this.createQuizHandler,disabled:0===this.props.quiz.length},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442"))))}}]),t}(a.Component);var Ve=Object(w.b)((function(e){return{quiz:e.allTests.quiz}}),(function(e){return{addQuestion:function(t){return e({type:"QUESTION",item:t})},createQuiz:function(){return e(function(){var e=Object(Y.a)(Z.a.mark((function e(t,n){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.a.post("https://quiz-316f6.firebaseio.com/quizes.json",n().allTests.quiz);case 2:t({type:"CREATE_QUIZ"});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}}))(Ue),Ge=(n(90),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return r.a.createElement(k.a,{to:"/"})}}]),t}(a.Component));var We=Object(w.b)(null,(function(e){return{logout:function(){return e(ke())}}}))(Ge),Be=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.autoLogin()}},{key:"render",value:function(){var e=r.a.createElement(k.d,null,r.a.createElement(k.b,{path:"/auth",component:je}),r.a.createElement(k.b,{path:"/quiz/:id",component:oe}),r.a.createElement(k.b,{path:"/",exact:!0,component:ve}),r.a.createElement(k.a,{to:"/"}));return this.props.isAuthenticated&&(e=r.a.createElement(k.d,null,r.a.createElement(k.b,{path:"/create-quize",component:Ve}),r.a.createElement(k.b,{path:"/quiz/:id",component:oe}),r.a.createElement(k.b,{path:"/logout",component:We}),r.a.createElement(k.b,{path:"/",exact:!0,component:ve}),r.a.createElement(k.a,{to:"/"}))),r.a.createElement("div",{className:"App"},r.a.createElement(C,null,e))}}]),t}(a.Component);var Pe=Object(k.g)(Object(w.b)((function(e){return{isAuthenticated:!!e.auth.token}}),(function(e){return{autoLogin:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(ke()):(e(Se(t)),e(Ce(n.getTime()-(new Date).getTime()/1e3)))}else e(ke())}))}}}))(Be));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=n(17),Xe=n(60),Ze={guestScreen:!0,allQuestionnaireTitles:["\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 2"],results:{},testId:null,isFinished:!1,questionsLoad:!1,activeQuestion:0,answerState:[],questionnaireTitle:"",key:null,questions:[],quiz:[]};var Ye={token:null};var $e=Object(Je.c)({allTests:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ACTIVE_QUESTIONARE_TITLE_AND_QUESTIONS":return Object(Ee.a)({},e,{questionsLoad:!0,questionnaireTitle:t.questionnaireTitle,questions:t.questions});case"ANSWER":return Object(Ee.a)({},e,{answerState:e.answerState.push(t.answerState),results:t.results});case"IS_QUESTIONNAIRE_FINISHED":return Object(Ee.a)({},e,{isFinished:!0,answerState:[]});case"NEXT_QUESTION":return Object(Ee.a)({},e,{activeQuestion:t.number,answerState:[]});case"RETRY_HANDLER":return Object(Ee.a)({},e,{results:{},isFinished:!1,activeQuestion:0,answerState:[]});case"REPEAT_HANDLER":return Object(Ee.a)({},e,{guestScreen:!0,isFinished:!1,activeQuestion:0,answerState:[]});case"GUEST_SCREEN_OFF":return Object(Ee.a)({},e,{guestScreen:!0,allQuestionnaireTitles:["\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 2"],results:{},testId:null,isFinished:!1,questionsLoad:!1,activeQuestion:0,answerState:[],questionnaireTitle:"",key:null,questions:[],quiz:[]});case"FETCH_QUESTIONARE_TITLES":return Object(Ee.a)({},e,{allQuestionnaireTitles:t.allQuestionnaireTitles,isFinished:!1,guestScreen:!0,testId:null,questionnaireTitle:"",questions:[],questionsLoad:!1});case"FETCH_TEST_ID":return Object(Ee.a)({},e,{testId:t.testId,guestScreen:!1});case"QUIZ_SET_STATE":return Object(Ee.a)({},e,{answerState:t.answerState,results:t.results});case"QUESTION":return Object(Ee.a)({},e,{quiz:[].concat(Object(Xe.a)(e.quiz),[t.item])});case"CREATE_QUIZ":return Object(Ee.a)({},e,{quiz:[]});case"FETCH_QUESTIONARE_TITLES_ERROR":default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return Object(Ee.a)({},e,{token:t.token});case"AUTH_LOGOUT":return Object(Ee.a)({},e,{token:null});default:return e}}}),Ke=n(59),et="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Je.d,tt=Object(Je.e)($e,et(Object(Je.a)(Ke.a))),nt=r.a.createElement(w.a,{store:tt},r.a.createElement(T.a,null,r.a.createElement(Pe,null)));i.a.render(nt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.e08489e5.chunk.js.map