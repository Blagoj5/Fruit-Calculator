(this["webpackJsonpfruit-calculator-typescript"]=this["webpackJsonpfruit-calculator-typescript"]||[]).push([[6],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=function(e,t){return{base:e,lg:t}}},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(149),a=(n(0),n(158)),r=n(3),l=function(e){var t=e.children,n=e.autoHeight;return Object(r.jsx)(c.a,{w:"75%",mx:"auto",d:"flex",flexDirection:"column",boxShadow:"2xl",p:4,h:Object(a.a)("auto",n?"auto":"600px"),justifyContent:"flex-start",bg:"whiteAlpha.900",borderRadius:"md",pos:"relative",overflow:"hidden",children:t})}},201:function(e,t,n){"use strict";n.r(t);var c=n(11),a=n(0),r=n(29),l=n(12),o=n(8),i=n(148),s=n(149),u=n(150),j=n(145),b=n(204),d=n(203),x=n(161),h=n(200),O=n(67),p=n(160),f=n(70),m=n(164),g=n(183),y=n(202),v=n(185),w=n(3),S=function(e){return"NaN"==="".concat(e)?0:e},C=function(e){var t=e.label,n=e.labelStyle,a=e.formControlStyle,r=e.id,l=e.helperText,i=e.disabled,s=Object(f.a)(e,["label","labelStyle","formControlStyle","id","helperText","disabled"]),u=Object(x.b)(r),j=Object(o.a)(u,3),b=j[1],d=b.value,h=b.error,O=b.initialValue,p=j[2].setValue;return Object(w.jsxs)(m.a,Object(c.a)(Object(c.a)({isDisabled:i},a),{},{children:[Object(w.jsx)(g.a,Object(c.a)(Object(c.a)({fontWeight:600},n),{},{children:t})),Object(w.jsxs)(y.c,Object(c.a)(Object(c.a)({defaultValue:5|O,id:r,name:r,onChange:function(e,t){return p(S(t))},step:1,value:S(d),bg:"white"},s),{},{children:[Object(w.jsx)(y.d,{}),Object(w.jsx)(y.e,{children:!i&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(y.b,{}),Object(w.jsx)(y.a,{})]})})]})),l&&Object(w.jsx)(m.b,{fontSize:"xs",children:l}),h?Object(w.jsx)(v.a,{children:h}):null]}))},T=n(187),A=n(177),W=n(186),z=function(e){var t=e.label,n=e.labelStyle,a=e.formControlStyle,r=e.id,l=e.selectOptions,i=e.helperText,s=Object(f.a)(e,["label","labelStyle","formControlStyle","id","selectOptions","helperText"]),u=Object(x.b)(r),j=Object(o.a)(u,2),b=j[0],d=j[1].error;return Object(w.jsxs)(m.a,Object(c.a)(Object(c.a)({},a),{},{children:[Object(w.jsx)(g.a,Object(c.a)(Object(c.a)({fontWeight:600},n),{},{children:t})),Object(w.jsx)(W.a,Object(c.a)(Object(c.a)(Object(c.a)({},b),{},{id:r,name:r,bg:"white"},s),{},{children:l.map((function(e){return Object(w.jsx)("option",{value:e.value,id:e.id,children:e.displayValue},e.id)}))})),i&&Object(w.jsx)(m.b,{fontSize:"xs",children:i}),d?Object(w.jsx)(v.a,{children:d}):null]}))},I=function(e,t,n){switch(n){case"+":return e+t;case"*":return e*t;case"/":return e/t;default:return e-t}},k=function(e,t){if(e){var n=0;for(var c in e)e[c]===t[c]&&(n+=1);return 4!==n}return!0},F=n(156),R=function(e){var t,n,c,a,r=e.values,l=e.fruit,o=e.fruitRef,u=I(r.operand,r.operand2,r.operator);u<0&&(t="You own: ",u=Math.abs(u)),u%1!==0&&((n="".concat(u).split(".")[1])&&(n=n[0]),u=Math.floor(u));var j=[],b=[];return u>10?(c=Math.floor(u/10),j=Array.from({length:10},(function(e,t){return t})),a=u%10,b=Array.from({length:a},(function(e,t){return t}))):j=Array.from({length:u},(function(e,t){return t})),Object(w.jsxs)(s.a,{zIndex:"1",children:[t&&Object(w.jsx)(i.a,{textAlign:"center",fontWeight:"600",fontSize:"xl",mb:4,children:t}),Object(w.jsxs)(d.a,{spacing:1,maxW:"75%",mx:"auto",children:[c&&1!==c?Object(w.jsx)(s.a,{flexBasis:"auto",minW:"110px",fontSize:"lg",fontWeight:"bold",children:"".concat(c," packets of")}):null,j.map((function(e){return Object(w.jsx)(s.a,{flexBasis:"auto",ref:o,children:Object(w.jsx)(F.a,{src:"/Fruit-Calculator/fruits/".concat(l,".png"),h:"100%",w:"100%",maxH:"150px",maxW:"150px"})},e)})),n&&0===b.length?Object(w.jsxs)(s.a,{flexBasis:"auto",fontWeight:600,fontSize:"lg",minW:"107.5px",children:["and"," ","".concat(n,"-tenths of whole ").concat(l," separated in 10 pieces")]}):null]}),b.length>0?Object(w.jsxs)(d.a,{spacing:1,maxW:"75%",mx:"auto",mt:6,children:[Object(w.jsx)(s.a,{flexBasis:"auto",minW:"110px",fontSize:"lg",fontWeight:"bold",children:"and"}),b.map((function(e){var t,n;return Object(w.jsx)(s.a,{flexBasis:"auto",w:(null===(t=o.current)||void 0===t?void 0:t.getClientRects()[0].width)||"auto",h:(null===(n=o.current)||void 0===n?void 0:n.getClientRects()[0].height)||"auto",children:Object(w.jsx)(F.a,{src:"/Fruit-Calculator/fruits/".concat(l,".png"),w:"100%",h:"100%",maxH:"150px",maxW:"150px"})},e)})),n?Object(w.jsxs)(s.a,{flexBasis:"auto",fontWeight:600,fontSize:"lg",minW:"107.5px",children:["and"," ","".concat(n,"-tenths of a whole ").concat(l," separated in 10 pieces")]}):null]}):null]})},H=n(44),V=n(158),B=function(e){var t,n=e.dispatch,c=e.history,f=Object(r.c)((function(e){return e})),m=f.name,g=f.fruit,y=f.correctnessSimple,v=f.language,S=Object(a.useState)(null),W=Object(o.a)(S,2),F=W[0],B=W[1],q=Object(a.useState)((null===y||void 0===y?void 0:y.matches)||0),D=Object(o.a)(q,2),N=D[0],P=D[1],M=Object(a.useRef)(),Y=Object(a.useRef)(null),_={header:["Let's see how subtraction and addition is done!","\u0410\u0458\u0434\u0435 \u0434\u0430 \u0432\u0438\u0434\u0438\u043c\u0435 \u043a\u0430\u043a\u043e \u0441\u0435 \u043f\u0440\u0430\u0432\u0438 \u043e\u0434\u0437\u0435\u043c\u0430\u045a\u0435 \u0438 \u0441\u043e\u0431\u0438\u0440\u0430\u045a\u0435!"][t=v],header2:["Choose values to see how the final result will change ","\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u0432\u0440\u0435\u0434\u043d\u043e\u0441\u0442\u0438 \u0432\u043e \u043f\u043e\u043b\u0438\u045a\u0430\u0442\u0430 \u0434\u043e\u043b\u0443 \u0437\u0430 \u0434\u0430 \u0432\u0438\u0434\u0438\u0442\u0435 \u043a\u0430\u043a\u043e \u045c\u0435 \u0441\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438 \u043a\u043e\u043d\u0435\u0447\u043d\u0438\u043e\u0442 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442"][t],btnText2:["Previous","\u041f\u0440\u0435\u0442\u0445\u043e\u0434\u043d\u043e"][t],btnText:["Next","\u0421\u043b\u0435\u0434\u043d\u043e"][t]};return Object(w.jsx)(p.a,{autoHeight:!0,children:m?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(i.a,{textAlign:"right",children:["Correct guesses:"," ",Object(w.jsx)(i.a,{as:"span",color:"green",children:N})," ","(get 3 correct guesses to continue)"]}),Object(w.jsxs)(s.a,{textAlign:"center",mb:14,mt:4,children:[Object(w.jsx)(u.a,{mb:3,fontSize:Object(V.a)("xl","3xl"),children:_.header}),Object(w.jsx)(u.a,{mb:3,fontSize:Object(V.a)("xl","3xl"),children:_.header2})]}),Object(w.jsxs)(j.a,{w:"100%",minH:"75%",direction:"column",children:[F&&Object(w.jsx)(s.a,{w:"75%",mx:"auto",mb:6,children:Object(w.jsxs)(b.a,{status:F,borderRadius:"lg",children:[Object(w.jsx)(b.b,{}),"success"===F?"Correct. You get 1 point!":"Wrong. Try again"]})}),Object(w.jsx)(s.a,{flex:3,d:"flex",justifyContent:"center",alignItems:"center",zIndex:"2",children:Object(w.jsx)(x.a,{initialValues:{operator:"+",operand:0,operand2:0,result:0},onSubmit:function(e){k(M.current,[e.operand,e.operand2,e.operator,e.result])&&(I(e.operand,e.operand2,e.operator)===e.result?(B("success"),P(N+1),n(Object(H.d)({actionType:"hit",calculator:"simple"}))):(B("error"),N>0&&P(N-1),n(Object(H.d)({actionType:"miss",calculator:"simple"}))),M.current=[e.operand,e.operand2,e.operator,e.result])},children:function(e){var t=e.handleSubmit,n=e.values,c=function(e,t,n){return{helperTextFruits:["".concat(e,", you have ").concat(n.operand," ").concat(n.fruit,"s and someone ").concat("+"===n.operator?"gives":"takes from"," you ").concat(n.operand2," ").concat(n.fruit,"s. How many do you have now?"),"".concat(e,", \u0438\u043c\u0430\u0448 ").concat(n.operand," ").concat(n.fruit,"s \u0438 \u043d\u0435\u043a\u043e\u0458 \u0442\u0438  ").concat("+"===n.operator?"\u0437\u0435\u043c\u0435":"\u0434\u0430\u0434\u0435"," ").concat(n.operand2," ").concat(n.fruit,"s. \u041a\u043e\u043b\u043a\u0443 ").concat(n.fruit,"s \u0438\u043c\u0430\u0448?")][t]}}(m,v,{fruit:g||"apple",operand:n.operand,operand2:n.operand2,operator:n.operator});return Object(w.jsxs)(h.a,{style:{width:"100%"},onSubmit:function(e){e.preventDefault(),t(e)},children:[Object(w.jsxs)(d.a,{w:Object(V.a)("100%","70%"),m:"auto",spacing:Object(V.a)(1,10),flexWrap:Object(V.a)("wrap","nowrap"),alignItems:"flex-start",children:[Object(w.jsx)(C,{label:"",id:"operand",min:0}),Object(w.jsx)(z,{label:"",id:"operator",selectOptions:[{displayValue:"+ (Addition)",id:"+",value:"+"},{displayValue:"- (Subtraction)",id:"-",value:"-"}]}),Object(w.jsx)(C,{label:"",id:"operand2",min:0}),Object(w.jsx)(i.a,{fontWeight:"bold",fontSize:"2xl",pt:2,textAlign:Object(V.a)("center","left"),w:Object(V.a)("100%","auto"),children:"="}),Object(w.jsx)(C,{label:"",id:"result",helperText:"Use the bananas bellow and guess the result"})]}),Object(w.jsx)(s.a,{w:"70%",mx:"auto",mt:6,children:Object(w.jsx)(O.a,{type:"submit",w:"150px",ml:"auto",d:"block",children:"Guess"})}),Object(w.jsx)(s.a,{w:"80%",mx:"auto",mt:6,fontWeight:600,fontSize:"xl",mb:4,children:Object(w.jsx)(i.a,{textAlign:"center",children:c.helperTextFruits})}),Object(w.jsx)(R,{values:n,fruit:g||"banana",fruitRef:Y})]})}})}),Object(w.jsxs)(j.a,{justify:"space-between",children:[Object(w.jsx)(O.a,{onClick:function(e){c.push("/calculator/3")},w:"120px",alignSelf:"flex-start",leftIcon:Object(w.jsx)(T.a,{}),children:_.btnText2}),N>=3?Object(w.jsx)(O.a,{onClick:function(e){c.push("/calculator/5")},w:"120px",alignSelf:"flex-end",rightIcon:Object(w.jsx)(A.a,{}),children:_.btnText}):null]})]})]}):Object(w.jsx)(l.a,{to:"/calculator"})})},q=function(e){var t=e.href,n=e.onClick,c=e.text,a=e.color;return Object(w.jsxs)(j.a,{cursor:"pointer",mr:Object(V.a)(2,10),transition:"all 0.2s",_hover:{bg:"".concat(a,".100")},onClick:n,w:Object(V.a)("33%","300px"),borderRadius:"md",direction:"column",justify:"flex-end",children:[Object(w.jsx)(F.a,{src:t,w:"100%",mb:2,p:4,h:Object(V.a)("100%",void 0)}),Object(w.jsx)(i.a,{bg:a,textAlign:"center",fontWeight:600,p:1,borderRadius:"md",children:c})]})},D=[{fruit:"banana",img:"/Fruit-Calculator/fruits/banana.png",text:["Banana","\u0411\u0430\u043d\u0430\u043d\u0430"],color:"yellow"},{fruit:"apple",img:"/Fruit-Calculator/fruits/apple.png",text:["Apple","\u0408\u0430\u0431\u043e\u043b\u043a\u043e"],color:"green"},{fruit:"orange",img:"/Fruit-Calculator/fruits/orange.png",text:["Orange","\u041f\u043e\u0440\u0442\u043e\u043a\u0430\u043b"],color:"orange"}],N=function(e){var t=e.dispatch,n=e.history,c=Object(r.c)((function(e){return e})),a=c.name,o=c.language,i=function(e,t){return{header:["Select your favourite fruit, ".concat(e,":"),"\u041e\u0434\u0431\u0435\u0440\u0438 \u0433\u043e \u0442\u0432\u043e\u0435\u0442\u043e \u043e\u043c\u0438\u043b\u0435\u043d\u043e \u043e\u0432\u043e\u0448\u0458\u0435, ".concat(e,":")][t],btnText2:["Previous","\u041f\u0440\u0435\u0442\u0445\u043e\u0434\u043d\u043e"][t]}}(a,o);return Object(w.jsx)(p.a,{children:a?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(s.a,{textAlign:"center",mb:14,mt:4,children:Object(w.jsx)(u.a,{letterSpacing:"2px",mb:3,children:i.header})}),Object(w.jsx)(j.a,{w:"100%",h:"75%",overflow:"hidden",justify:"space-evenly",alignItems:"stretch",mb:8,children:D.map((function(e){return Object(w.jsx)(q,{color:e.color,href:e.img,text:e.text[o],onClick:function(){return function(e){t({type:"BATCH",payload:{fruit:e}}),n.push("/calculator/4")}(e.fruit)}},e.fruit)}))}),Object(w.jsx)(O.a,{onClick:function(e){n.push("/calculator/2")},w:"120px",leftIcon:Object(w.jsx)(T.a,{}),children:i.btnText2})]}):Object(w.jsx)(l.a,{to:"/calculator"})})},P=n(188),M=n(189),Y=function(e){var t=e.dispatch,n=e.history,c=Object(r.c)((function(e){return e})),a=c.name,o=c.language,b=function(e){t({type:"BATCH",payload:{learnMath:!1}}),n.push("/calculator/3")},d=function(e,t){return{header:["Do you want to learn math, ".concat(e,"?"),"\u0414\u0430\u043b\u0438 \u0441\u0430\u043a\u0430\u0448 \u0434\u0430 \u043d\u0430\u0443\u0447\u0438\u0448 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430, ".concat(e)][t],yes:["YES","\u0414\u0410"][t],no:["NO","\u041d\u0415"][t],btnText2:["Previous","\u041f\u0440\u0435\u0442\u0445\u043e\u0434\u043d\u043e"][t]}}(a,o);return Object(w.jsx)(p.a,{children:a?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(s.a,{textAlign:"center",mb:14,mt:4,children:Object(w.jsx)(u.a,{letterSpacing:"2px",mb:3,children:d.header})}),Object(w.jsxs)(j.a,{w:"100%",h:"75%",overflow:"hidden",justify:"center",alignItems:"center",mb:Object(V.a)(8,"none"),children:[Object(w.jsxs)(s.a,{cursor:"pointer",mr:10,transition:"all 0.2s",_hover:{bg:"green.100"},onClick:function(){return b()},children:[Object(w.jsx)(P.a,{color:"green",w:20,h:14}),Object(w.jsx)(i.a,{color:"white",bg:"green",textAlign:"center",fontWeight:600,children:d.yes})]}),Object(w.jsxs)(s.a,{cursor:"pointer",w:"75px",transition:"all 0.2s",_hover:{bg:"red.100"},onClick:function(){return b()},children:[Object(w.jsx)(M.a,{color:"red",w:10,h:14,mx:"auto",d:"block"}),Object(w.jsx)(i.a,{color:"white",bg:"red",textAlign:"center",fontWeight:600,children:d.no})]})]}),Object(w.jsx)(O.a,{onClick:function(e){n.push("/calculator/1")},w:"120px",leftIcon:Object(w.jsx)(T.a,{}),children:d.btnText2})]}):Object(w.jsx)(l.a,{to:"/calculator"})})},_=n(190),G=function(e){var t=e.labelStyle,n=e.formControlStyle,a=e.turnOffAutoComplete,r=e.required,l=e.label,i=(e.size,e.style,e.helperText),s=Object(f.a)(e,["labelStyle","formControlStyle","turnOffAutoComplete","required","label","size","style","helperText"]),u=Object(x.b)(s),j=Object(o.a)(u,2),b=j[0],d=j[1].error;return Object(w.jsxs)(m.a,Object(c.a)(Object(c.a)({isInvalid:!!d,isRequired:r},n),{},{children:[Object(w.jsxs)(g.a,Object(c.a)(Object(c.a)({htmlFor:s.name,fontWeight:600},t),{},{children:[l," "]})),Object(w.jsx)(_.a,Object(c.a)(Object(c.a)({},b),{},{id:s.name,autoComplete:a?"off":"on",bg:"white"},s)),i&&Object(w.jsx)(m.b,{fontSize:"xs",children:i}),d?Object(w.jsx)(v.a,{children:d}):null]}))},J={header:["Hello!","\u0417\u0434\u0440\u0430\u0432\u043e!"],header2:["Today we are going to learn about basic arithmetic operations","\u0414\u0435\u043d\u0435\u0441 \u045c\u0435 \u0443\u0447\u0438\u043c\u0435 \u0437\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u0438\u0442\u0435 \u0430\u0440\u0438\u0442\u043c\u0435\u0442\u0438\u0447\u043a\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438"],label:["First, enter your name","\u041f\u0440\u0432\u043e, \u0432\u043d\u0435\u0441\u0435\u0442\u0435 \u0433\u043e \u0432\u0430\u0448\u0435\u0442\u043e \u0438\u043c\u0435"],label2:["Second, enter your surname","\u0412\u0442\u043e\u0440\u043e, \u0432\u043d\u0435\u0441\u0435\u0442\u0435 \u0433\u043e \u0432\u0430\u0448\u0435\u0442\u043e \u043f\u0440\u0435\u0437\u0438\u043c\u0435"],btnText:["Next","\u0421\u043b\u0435\u0434\u043d\u043e"]},L=function(e){var t=e.dispatch,n=e.history,c=Object(r.c)((function(e){return e})),a=c.name,l=c.surname,o=c.language;return Object(w.jsxs)(p.a,{children:[Object(w.jsxs)(s.a,{textAlign:"center",mb:14,mt:4,children:[Object(w.jsx)(u.a,{letterSpacing:"2px",mb:3,fontSize:Object(V.a)("2xl","3xl"),children:J.header[o]}),Object(w.jsx)(u.a,{fontSize:Object(V.a)("xl","3xl"),children:J.header2[o]})]}),Object(w.jsxs)(j.a,{w:"100%",h:"75%",overflow:"hidden",children:[Object(w.jsx)(s.a,{flex:3,d:"flex",justifyContent:"center",alignItems:"center",zIndex:1,children:Object(w.jsx)(x.a,{initialValues:{name:a||"",surname:l||""},onSubmit:function(e){t({type:"BATCH",payload:e}),n.push("/calculator/1")},children:function(e){var t=e.handleSubmit;return Object(w.jsx)(h.a,{style:{width:"100%"},onSubmit:function(e){e.preventDefault(),t(e)},children:Object(w.jsxs)(d.b,{w:Object(V.a)("100%","70%"),m:"auto",spacing:10,children:[Object(w.jsx)(G,{label:J.label[o],name:"name",placeholder:"First Name",required:!0}),Object(w.jsx)(G,{label:J.label2[o],name:"surname",placeholder:"Surname",required:!0}),Object(w.jsx)(O.a,{type:"submit",alignSelf:"flex-end",w:Object(V.a)("100%","150px"),children:J.btnText[o]})]})})}})}),Object(w.jsx)(s.a,{flex:1,h:Object(V.a)("50%","100%"),pos:Object(V.a)("absolute","static"),right:0,bottom:4,children:Object(w.jsx)(F.a,{src:"https://i.pinimg.com/originals/d0/82/d2/d082d2fe54e5d21a251e5daeda61f10d.png",h:"100%",mx:"auto"})})]})]})},U=function(e){var t=e.dispatch,n=e.history,c=Object(r.c)((function(e){return e})),a=c.name,o=c.city,i=c.age,b=function(e,t){return{header:["Welcome ".concat(e),"\u0414\u043e\u0431\u0440\u043e \u0434\u043e\u0458\u0434\u0435, ".concat(e)][t],label:["What city do you live in ".concat(e,"?"),"\u041a\u0430\u0434\u0435 \u0436\u0438\u0432\u0435\u0435\u0448 ".concat(e,"?")][t],label2:["How old are you ".concat(e,"?"),"\u041a\u043e\u043b\u043a\u0443 \u0433\u043e\u0434\u0438\u043d\u0438 \u0438\u043c\u0430\u0448 ".concat(e,"?")][t],btnText:["Next","\u0421\u043b\u0435\u0434\u043d\u043e"][t],btnText2:["Previous","\u041f\u0440\u0435\u0442\u0445\u043e\u0434\u043d\u043e"][t]}}(a,c.language);return Object(w.jsx)(p.a,{children:a?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(s.a,{textAlign:"center",mb:14,mt:4,children:Object(w.jsx)(u.a,{letterSpacing:"2px",mb:3,children:b.header})}),Object(w.jsxs)(j.a,{w:"100%",h:"75%",direction:"column",overflow:"hidden",children:[Object(w.jsx)(s.a,{flex:3,d:"flex",justifyContent:"center",alignItems:"center",zIndex:"2",children:Object(w.jsx)(x.a,{initialValues:{age:i||5,city:o||""},onSubmit:function(e){t({type:"BATCH",payload:e}),n.push("/calculator/2")},children:function(e){var t=e.handleSubmit;return Object(w.jsxs)(h.a,{style:{width:"100%"},onSubmit:function(e){e.preventDefault(),t(e)},children:[Object(w.jsxs)(d.b,{w:Object(V.a)("100%","70%"),m:"auto",spacing:10,mb:Object(V.a)("80px","none"),children:[Object(w.jsx)(G,{label:b.label,name:"city",placeholder:"City",required:!0}),Object(w.jsx)(C,{label:b.label2,id:"age",placeholder:"Age",formControlStyle:{isRequired:!0}})]}),Object(w.jsx)(O.a,{type:"submit",alignSelf:"flex-end",w:"120px",pos:"absolute",bottom:4,right:4,rightIcon:Object(w.jsx)(A.a,{}),children:b.btnText})]})}})}),Object(w.jsx)(s.a,{flex:Object(V.a)("none",1),h:Object(V.a)("250px","100%"),pos:Object(V.a)("absolute","static"),zIndex:"1",bottom:0,children:Object(w.jsx)(F.a,{src:"http://vtxcski.org/img/c1e74532a2196f4fc026c638d94ac6cb.png",h:"100%",mx:"auto",bottom:"180px",left:"100px",pos:Object(V.a)(void 0,"relative"),transform:Object(V.a)(void 0,"rotate(15deg)")})}),Object(w.jsx)(O.a,{onClick:function(e){n.push("/calculator")},w:"120px",leftIcon:Object(w.jsx)(T.a,{}),pos:"absolute",bottom:4,children:b.btnText2})]})]}):Object(w.jsx)(l.a,{to:"/calculator"})})},E=function(e){var t,n=e.dispatch,c=e.history,f=Object(r.c)((function(e){return e})),m=f.name,g=f.fruit,y=f.correctnessAdvanced,v=f.correctnessSimple,S=f.language,W=Object(a.useState)(null),F=Object(o.a)(W,2),B=F[0],q=F[1],D=Object(a.useState)((null===y||void 0===y?void 0:y.matches)||0),N=Object(o.a)(D,2),P=N[0],M=N[1],Y=Object(a.useRef)(),_=Object(a.useRef)(null),G={header:["Let's see how multiplication and division is done!","\u0410\u0458\u0434\u0435 \u0434\u0430 \u0432\u0438\u0434\u0438\u043c\u0435 \u043a\u0430\u043a\u043e \u0441\u0435 \u043f\u0440\u0430\u0432\u0438 \u043c\u043d\u043e\u0436\u0435\u045a\u0435 \u0438 \u0434\u0435\u043b\u0435\u045a\u0435!"][t=S],header2:["Choose values to see how the final result will change ","\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u0432\u0440\u0435\u0434\u043d\u043e\u0441\u0442\u0438 \u0432\u043e \u043f\u043e\u043b\u0438\u045a\u0430\u0442\u0430 \u0434\u043e\u043b\u0443 \u0437\u0430 \u0434\u0430 \u0432\u0438\u0434\u0438\u0442\u0435 \u043a\u0430\u043a\u043e \u045c\u0435 \u0441\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438 \u043a\u043e\u043d\u0435\u0447\u043d\u0438\u043e\u0442 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442"][t],btnText2:["Previous","\u041f\u0440\u0435\u0442\u0445\u043e\u0434\u043d\u043e"][t],btnText:["Final Results","\u0420\u0435\u0437\u0443\u043b\u0442\u0430\u0442\u0438"][t]};return Object(w.jsx)(p.a,{autoHeight:!0,children:m&&v?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(i.a,{textAlign:"right",children:["Correct guesses:"," ",Object(w.jsx)(i.a,{as:"span",color:"green",children:P})," ","(get 3 correct guesses to continue)"]}),Object(w.jsxs)(s.a,{textAlign:"center",mb:14,mt:4,children:[Object(w.jsx)(u.a,{mb:3,fontSize:Object(V.a)("xl","3xl"),children:G.header}),Object(w.jsx)(u.a,{mb:3,fontSize:Object(V.a)("xl","3xl"),children:G.header2})]}),Object(w.jsxs)(j.a,{w:"100%",minH:"75%",direction:"column",children:[B&&Object(w.jsx)(s.a,{w:"75%",mx:"auto",mb:6,children:Object(w.jsxs)(b.a,{status:B,borderRadius:"lg",children:[Object(w.jsx)(b.b,{}),"success"===B?"Correct. You get 1 point!":"Wrong. Try again"]})}),Object(w.jsx)(s.a,{flex:3,d:"flex",justifyContent:"center",alignItems:"center",zIndex:"2",children:Object(w.jsx)(x.a,{initialValues:{operator:"*",operand:0,operand2:0,result:0},onSubmit:function(e){k(Y.current,[e.operand,e.operand2,e.operator,e.result])&&(I(e.operand,e.operand2,e.operator)===e.result?(q("success"),M(P+1),n(Object(H.d)({actionType:"hit",calculator:"advanced"}))):(q("error"),n(Object(H.d)({actionType:"miss",calculator:"advanced"})),P>0&&M(P-1)),Y.current=[e.operand,e.operand2,e.operator,e.result])},children:function(e){var t=e.handleSubmit,n=e.values,c=function(e,t,n){return{helperTextFruits:["*"===n.operator?"".concat(e,", you have ").concat(n.operand," packets of ").concat(n.operand2," ").concat(n.fruit,"s. How many do you have now?"):"".concat(e,", you have ").concat(n.operand," ").concat(n.fruit,"s separated in ").concat(n.operand2," packs, how many ").concat(n.fruit,"s does each pack have?"),"*"===n.operator?"".concat(e,", \u0438\u043c\u0430\u0448 ").concat(n.operand," \u043f\u0430\u043a\u0435\u0442\u0438 \u043e\u0434 \u043f\u043e ").concat(n.operand2," ").concat(n.fruit,"s. \u041a\u043e\u043b\u043a\u0443 \u0438\u043c\u0430\u0448 \u0441\u0435\u0433\u0430?"):"".concat(e,", \u0438\u043c\u0430\u0448 ").concat(n.operand," ").concat(n.fruit,"s \u043f\u043e\u0434\u0435\u043b\u0435\u043d\u0438 \u0432\u043e ").concat(n.operand2," \u043f\u0430\u043a\u0435\u0442\u0438, \u041a\u043e\u043b\u043a\u0443 ").concat(n.fruit,"s \u0438\u043c\u0430 \u0441\u0435\u043a\u043e\u0458 \u043e\u0434 \u043f\u0430\u043a\u0435\u0442\u0438\u0442\u0435?")][t]}}(m,S,{fruit:g||"apple",operand:n.operand,operand2:n.operand2,operator:n.operator});return Object(w.jsxs)(h.a,{style:{width:"100%"},onSubmit:function(e){e.preventDefault(),t(e)},children:[Object(w.jsxs)(d.a,{w:Object(V.a)("100%","70%"),m:"auto",spacing:Object(V.a)(1,10),flexWrap:Object(V.a)("wrap","nowrap"),alignItems:"flex-start",children:[Object(w.jsx)(C,{label:"",id:"operand",min:0}),Object(w.jsx)(z,{label:"",id:"operator",selectOptions:[{displayValue:"* (multiplication)",id:"*",value:"*"},{displayValue:"/ (devision)",id:"/",value:"/"}]}),Object(w.jsx)(C,{label:"",id:"operand2",min:0}),Object(w.jsx)(i.a,{fontWeight:"bold",fontSize:"2xl",pt:2,textAlign:Object(V.a)("center","left"),w:Object(V.a)("100%","auto"),children:"="}),Object(w.jsx)(C,{label:"",id:"result",helperText:"Use the bananas bellow and guess the result",step:.5})]}),Object(w.jsx)(s.a,{w:"70%",mx:"auto",mt:6,children:Object(w.jsx)(O.a,{type:"submit",w:"150px",ml:"auto",d:"block",children:"Guess"})}),Object(w.jsx)(s.a,{w:"80%",mx:"auto",mt:6,fontWeight:600,fontSize:"xl",mb:4,children:Object(w.jsx)(i.a,{textAlign:"center",children:c.helperTextFruits})}),Object(w.jsx)(R,{values:n,fruit:g||"banana",fruitRef:_})]})}})}),Object(w.jsxs)(j.a,{justify:"space-between",alignItems:"center",children:[Object(w.jsx)(O.a,{onClick:function(e){c.push("/calculator/4")},w:"120px",alignSelf:"flex-start",leftIcon:Object(w.jsx)(T.a,{}),children:G.btnText2}),P>=3?Object(w.jsx)(O.a,{onClick:function(e){c.push("/me")},w:"150px",alignSelf:"flex-end",rightIcon:Object(w.jsx)(A.a,{}),children:G.btnText}):null]})]})]}):Object(w.jsx)(l.a,{to:"/calculator/4"})})};t.default=function(){var e=Object(r.b)();return Object(w.jsxs)(l.d,{children:[Object(w.jsx)(l.b,{path:"/calculator",exact:!0,children:function(t){return Object(w.jsx)(L,Object(c.a)({dispatch:e},t))}}),Object(w.jsx)(l.b,{path:"/calculator/1",children:function(t){return Object(w.jsx)(U,Object(c.a)({dispatch:e},t))}}),Object(w.jsx)(l.b,{path:"/calculator/2",children:function(t){return Object(w.jsx)(Y,Object(c.a)({dispatch:e},t))}}),Object(w.jsx)(l.b,{path:"/calculator/3",children:function(t){return Object(w.jsx)(N,Object(c.a)({dispatch:e},t))}}),Object(w.jsx)(l.b,{path:"/calculator/4",children:function(t){return Object(w.jsx)(B,Object(c.a)({dispatch:e},t))}}),Object(w.jsx)(l.b,{path:"/calculator/5",children:function(t){return Object(w.jsx)(E,Object(c.a)({dispatch:e},t))}}),Object(w.jsx)(l.a,{to:"/calculator"})]})}}}]);
//# sourceMappingURL=6.ab303b5d.chunk.js.map