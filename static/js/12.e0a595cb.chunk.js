(this["webpackJsonpekseer-dashboard"]=this["webpackJsonpekseer-dashboard"]||[]).push([[12],{356:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},357:function(e,t,n){"use strict";t.a=n.p+"static/media/social-google.9887eb8e.svg"},379:function(e,t,n){"use strict";t.a=n.p+"static/media/logo.0cdd96fa.svg"},562:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(0),r=n.n(i),s=n(41),c=n(240),o=n(26),l=n(286),d=n(311),j=n(234),b=n(236),m=n(173),u=n(235),h=n(316),p=n(14),x=n(82),g=n.n(x),O=n(107),f=n(13),v=n(146),w=n(34),y=n(8),k=n(381),C=n(380),N=n(325),S=n(287),W=n(299),I=n(321),E=n(307),R=n(314),B=n(331),z=n(382),A=n(243),D=n(322),T=n(560),F=n(356),P=n(377),q=n.n(P),G=n(378),H=n.n(G),V=n(357),J=n(19),_=n.n(J),M=function(e){var t=0;return e.length>5&&t++,e.length>7&&t++,function(e){return new RegExp(/[0-9]/).test(e)}(e)&&t++,function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&t++,function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&t++,t},L=n(1),U=Object(c.a)((function(e){return{root:{},redButton:Object(a.a)({fontSize:"1rem",fontWeight:500,backgroundColor:e.palette.grey[50],border:"1px solid",borderColor:e.palette.grey[100],color:e.palette.grey[600],textTransform:"none","&:hover":{backgroundColor:e.palette.primary.light}},e.breakpoints.down("sm"),{fontSize:"0.875rem"}),signDivider:{flexGrow:1},signText:{cursor:"unset",margin:e.spacing(2),padding:"5px 56px",borderColor:e.palette.grey[100]+" !important",color:e.palette.grey[900]+"!important",fontWeight:500},margin:{marginTop:e.spacing(3),marginBottom:e.spacing(1)},forgot:{textDecoration:"none"},loginIcon:Object(a.a)({marginRight:"16px"},e.breakpoints.down("sm"),{marginRight:"8px"}),title:{color:e.palette.grey[600]},login:{backgroundColor:e.palette.purple.main,"&:hover":{backgroundColor:e.palette.purple.dark}},loginput:{marginTop:e.spacing(1),marginBottom:e.spacing(1),"& > label":{top:"23px",left:0,color:e.palette.grey[500],'&[data-shrink="false"]':{top:"5px"}},"& > div > input":{padding:"30.5px 14px 11.5px !important"},"& legend":{display:"none"},"& fieldset":{top:0}},startAdornment:{color:e.palette.grey[500],marginTop:"18px",width:"auto"}}})),Z=function(e){var t=e.className,n=Object(v.a)(e,["className"]),a=U(),c=Object(F.a)(),o=Object(w.c)((function(e){return e.customization})),l=r.a.useState(!1),j=Object(f.a)(l,2),b=j[0],h=j[1],x=r.a.useState(!0),P=Object(f.a)(x,2),G=P[0],J=P[1],Z=r.a.useState(0),$=Object(f.a)(Z,2),K=$[0],Q=$[1],X=r.a.useState(""),Y=Object(f.a)(X,2),ee=Y[0],te=Y[1],ne=function(){var e=Object(O.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){h(!b)},ie=function(e){e.preventDefault()},re=function(e){var t,n=M(e);Q(n),te((t=n)<2?{label:"Poor",color:_.a.red500}:t<3?{label:"Weak",color:_.a.amber500}:t<4?{label:"Normal",color:_.a.deepOrange200}:t<5?{label:"Good",color:_.a.A200}:t<6?{label:"Strong",color:_.a.A700}:void 0)};return Object(i.useEffect)((function(){re("123456")}),[]),Object(L.jsxs)(r.a.Fragment,{children:[Object(L.jsxs)(d.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(L.jsx)(d.a,{item:!0,xs:12,children:Object(L.jsxs)(N.a,{disableElevation:!0,fullWidth:!0,className:a.redButton,onClick:ne,size:"large",variant:"contained",children:[Object(L.jsx)("img",{src:V.a,alt:"google",width:"20px",className:a.loginIcon})," Sign up with Google"]})}),Object(L.jsx)(d.a,{item:!0,xs:12,children:Object(L.jsxs)(S.a,{alignItems:"center",display:"flex",children:[Object(L.jsx)(u.a,{className:a.signDivider,orientation:"horizontal"}),Object(L.jsx)(N.a,{variant:"outlined",className:a.signText,sx:{borderRadius:o.borderRadius+"px"},disableRipple:!0,disabled:!0,children:"OR"}),Object(L.jsx)(u.a,{className:a.signDivider,orientation:"horizontal"})]})}),Object(L.jsx)(d.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(L.jsx)(S.a,{mb:2,children:Object(L.jsx)(m.a,{variant:"subtitle1",className:a.title,children:"Sign up with Email address"})})})]}),Object(L.jsx)(C.a,{initialValues:{email:"info@codedthemes.com",password:"123456",submit:null},validationSchema:k.a().shape({email:k.b().email("Must be a valid email").max(255).required("Email is required"),password:k.b().max(255).required("Password is required")}),onSubmit:function(){var e=Object(O.a)(g.a.mark((function e(t,n){var a,i,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.setErrors,i=n.setStatus,r=n.setSubmitting;try{c.current&&(i({success:!0}),r(!1))}catch(t){console.error(t),c.current&&(i({success:!1}),a({submit:t.message}),r(!1))}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var i=e.errors,c=e.handleBlur,o=e.handleChange,l=e.handleSubmit,j=e.isSubmitting,u=e.touched,h=e.values;return Object(L.jsxs)("form",Object(p.a)(Object(p.a)({noValidate:!0,onSubmit:l,className:Object(y.a)(a.root,t)},n),{},{children:[Object(L.jsxs)(d.a,{container:!0,spacing:2,children:[Object(L.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(W.a,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",defaultValue:"Joseph",variant:"outlined",className:a.loginput})}),Object(L.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(W.a,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",defaultValue:"Doe",variant:"outlined",className:a.loginput})})]}),Object(L.jsxs)(I.a,{fullWidth:!0,error:Boolean(u.email&&i.email),className:a.loginput,variant:"outlined",children:[Object(L.jsx)(E.a,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),Object(L.jsx)(R.a,{id:"outlined-adornment-email-register",type:"email",value:h.email,name:"email",onBlur:c,onChange:o,labelWidth:70,inputProps:{classes:{notchedOutline:a.notchedOutline}}}),u.email&&i.email&&Object(L.jsxs)(B.a,{error:!0,id:"standard-weight-helper-text--register",children:[" ",i.email," "]})]}),Object(L.jsxs)(I.a,{fullWidth:!0,error:Boolean(u.password&&i.password),className:a.loginput,variant:"outlined",children:[Object(L.jsx)(E.a,{htmlFor:"outlined-adornment-password-register",children:"Password"}),Object(L.jsx)(R.a,{id:"outlined-adornment-password-register",type:b?"text":"password",value:h.password,name:"password",onBlur:c,onChange:function(e){o(e),re(e.target.value)},endAdornment:Object(L.jsx)(z.a,{position:"end",children:Object(L.jsx)(A.a,{"aria-label":"toggle password visibility",onClick:ae,onMouseDown:ie,edge:"end",children:b?Object(L.jsx)(q.a,{}):Object(L.jsx)(H.a,{})})}),labelWidth:70,inputProps:{classes:{notchedOutline:a.notchedOutline}}}),u.password&&i.password&&Object(L.jsxs)(B.a,{error:!0,id:"standard-weight-helper-text-password-register",children:[" ",i.password," "]})]}),0!==K&&Object(L.jsx)(I.a,{fullWidth:!0,children:Object(L.jsx)(S.a,{mb:2,children:Object(L.jsxs)(d.a,{container:!0,spacing:2,alignItems:"center",children:[Object(L.jsx)(d.a,{item:!0,children:Object(L.jsx)(S.a,{width:85,height:8,borderRadius:7,backgroundColor:ee.color})}),Object(L.jsx)(d.a,{item:!0,children:Object(L.jsx)(m.a,{variant:"subtitle1",fontSize:"0.75rem",children:ee.label})})]})})}),Object(L.jsx)(d.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:Object(L.jsx)(d.a,{item:!0,children:Object(L.jsx)(D.a,{control:Object(L.jsx)(T.a,{checked:G,onChange:function(e){return J(e.target.checked)},name:"checked",color:"primary"}),label:Object(L.jsx)(r.a.Fragment,{children:Object(L.jsxs)(m.a,{variant:"subtitle1",children:["Agree with \xa0",Object(L.jsx)(m.a,{variant:"subtitle1",component:s.b,to:"#",children:"Terms & Condition."})]})})})})}),i.submit&&Object(L.jsx)(S.a,{mt:3,children:Object(L.jsx)(B.a,{error:!0,children:i.submit})}),Object(L.jsx)(S.a,{mt:2,children:Object(L.jsx)(N.a,{disableElevation:!0,disabled:j,fullWidth:!0,size:"large",type:"submit",variant:"contained",className:a.login,children:"Sign up"})})]}))}})]})},$=n(379),K=Object(c.a)((function(e){var t;return{root:{backgroundColor:e.palette.primary.light,height:"100%",minHeight:"100vh",width:"100%",maxWidth:"calc(100% + 16px)"},card:(t={margin:e.spacing(0)+" auto",maxWidth:"475px",overflow:"visible",display:"flex",position:"relative","& > *":{flexGrow:1,flexBasis:"50%"}},Object(a.a)(t,e.breakpoints.down("lg"),{maxWidth:"400px"}),Object(a.a)(t,e.breakpoints.down("sm"),{maxWidth:"80%"}),t),content:Object(a.a)({padding:e.spacing(5)},e.breakpoints.down("lg"),{padding:e.spacing(3)}),title:{color:e.palette.grey[600],textDecoration:"none"}}}));t.default=function(){var e=K(),t=Object(o.a)(),n=Object(l.a)(t.breakpoints.down("sm"));return Object(L.jsx)(d.a,{container:!0,justifyContent:n?"center":"space-between",alignItems:"flex-start",className:e.root,children:Object(L.jsx)(d.a,{item:!0,xs:12,sx:{minHeight:"100vh",height:"100%"},children:Object(L.jsxs)(d.a,{sx:{minHeight:"100vh",height:"100%",p:n?0:"0 80px"},container:!0,direction:"column",alignItems:n?"center":"flex-start",spacing:n?5:6,justifyContent:"space-between",children:[Object(L.jsx)(d.a,{item:!0,xs:12,sx:{mt:"40px",width:"100%",textAlign:"center"},children:Object(L.jsx)(s.b,{to:"#",children:Object(L.jsx)("img",{alt:"Auth method",src:$.a,width:"100"})})}),Object(L.jsx)(d.a,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",children:Object(L.jsx)(j.a,{className:e.card,children:Object(L.jsx)(b.a,{className:e.content,children:Object(L.jsxs)(d.a,{container:!0,direction:"column",spacing:2,justifyContent:"center",children:[Object(L.jsx)(d.a,{item:!0,xs:12,children:Object(L.jsx)(d.a,{container:!0,direction:n?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(L.jsx)(d.a,{item:!0,children:Object(L.jsxs)(d.a,{container:!0,direction:"column",alignItems:"center",spacing:1,children:[Object(L.jsx)(d.a,{item:!0,container:!0,direction:"column",alignItems:"center",children:Object(L.jsx)(d.a,{item:!0,children:Object(L.jsx)(m.a,{color:t.palette.purple.main,gutterBottom:!0,variant:n?"h3":"h2",children:"Sign up"})})}),Object(L.jsx)(d.a,{item:!0,children:Object(L.jsxs)(m.a,{variant:"caption",fontSize:"16px",children:[" ","Enter your credentials to continue"]})})]})})})}),Object(L.jsx)(d.a,{item:!0,xs:12,children:Object(L.jsx)(Z,{})}),Object(L.jsx)(d.a,{item:!0,xs:12,children:Object(L.jsx)(u.a,{})}),Object(L.jsx)(d.a,{item:!0,xs:12,children:Object(L.jsx)(d.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(L.jsx)(m.a,{component:s.b,to:"/pages/login/login3",variant:"subtitle1",className:e.title,children:"Having an account?"})})})]})})})}),Object(L.jsxs)(d.a,{sx:{mb:"40px"},item:!0,container:!0,justifyContent:n?"center":"space-between",direction:n?"column":"row",alignItems:"center",spacing:n?2:0,children:[Object(L.jsx)(d.a,{item:!0,children:Object(L.jsx)(m.a,{component:h.a,href:"https://berrydashboard.io",target:"_blanks",variant:"subtitle1",color:t.palette.grey[600],children:"www.berrydashboard.io"})}),Object(L.jsx)(d.a,{item:!0,children:Object(L.jsx)(m.a,{component:h.a,href:"https://codedthemes.com",target:"_blanks",variant:"subtitle1",color:t.palette.grey[600],children:"\xa9 codedthemes.com"})})]})]})})})}}}]);
//# sourceMappingURL=12.e0a595cb.chunk.js.map